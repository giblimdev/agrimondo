//@/lib/actions/post.ts
/* server componant pour CRUD les post*/
/*

 */
"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client"; // 👈 IMPORTANT pour QueryMode
import { CreatePostSchema, UpdatePostSchema } from "@/lib/validations/post";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { z } from "zod";

// ------------------------------------------------------------------
// CREATE
// ------------------------------------------------------------------
export async function createPost(formData: FormData) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      throw new Error("Non autorisé");
    }

    const rawData = Object.fromEntries(formData);
    const contents = JSON.parse(rawData.contents as string);
    const categoryIds = JSON.parse((rawData.categoryIds as string) || "[]");
    const tagIds = JSON.parse((rawData.tagIds as string) || "[]");

    const validated = CreatePostSchema.parse({
      ...rawData,
      contents,
      categoryIds,
      tagIds,
      order: Number(rawData.order) || 0,
      isSponsored: rawData.isSponsored === "true",
      isFeatured: rawData.isFeatured === "true",
    });

    // Slug unique
    let slug = validated.slug;
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Création du post – valeurs par défaut pour les champs obligatoires
      const post = await tx.post.create({
        data: {
          title: validated.title,
          slug,
          description: validated.description,
          img: validated.img,
          status: validated.status,
          order: validated.order,
          metaTitle: validated.metaTitle ?? "", // 👈 évite undefined
          metaDescription: validated.metaDescription ?? "",
          canonicalUrl: validated.canonicalUrl ?? "",
          isSponsored: validated.isSponsored,
          isFeatured: validated.isFeatured,
          PostView: 0,
          userId: session.user.id,
        },
      });

      // 2. Contenus + médias
      if (validated.contents?.length) {
        for (const [index, contentData] of validated.contents.entries()) {
          const content = await tx.content.create({
            data: {
              order: contentData.order ?? index,
              content: contentData.content,
              format: contentData.format,
              postId: post.id,
              userId: session.user.id,
            },
          });

          if (contentData.medias?.length) {
            await tx.media.createMany({
              data: contentData.medias.map((media) => ({
                caption: media.caption,
                type: media.type,
                url: media.url,
                contentId: content.id,
              })),
            });
          }
        }
      }

      // 3. Catégories
      if (validated.categoryIds?.length) {
        await tx.postCategory.createMany({
          data: validated.categoryIds.map((catId) => ({
            postId: post.id,
            categoryId: catId,
          })),
        });
      }

      // 4. Tags
      if (validated.tagIds?.length) {
        await tx.postTag.createMany({
          data: validated.tagIds.map((tagId) => ({
            postId: post.id,
            tagId,
          })),
        });
      }

      return post;
    });

    revalidatePath("/blog");
    return { success: true, post: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// READ (un seul post)
// ------------------------------------------------------------------
export async function getPostBySlug(slug: string, incrementView = true) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        user: { select: { id: true, name: true, image: true } },
        contents: {
          include: {
            medias: true,
            user: { select: { name: true } },
          },
          orderBy: { order: "asc" },
        },
        postCategories: { include: { category: true } },
        postTags: { include: { tag: true } },
        responses: {
          where: { parentId: null },
          include: {
            user: { select: { name: true, image: true } },
            children: {
              include: { user: { select: { name: true, image: true } } },
            },
          },
          orderBy: { createdAt: "desc" },
        },
        _count: { select: { likePosts: true, responses: true } },
      },
    });

    if (!post) {
      return { success: false, error: "Post introuvable" };
    }

    if (incrementView) {
      await prisma.post.update({
        where: { id: post.id },
        data: { PostView: { increment: 1 } },
      });
    }

    return { success: true, post };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// READ (liste paginée avec filtres)
// ------------------------------------------------------------------
export async function getPosts({
  page = 1,
  limit = 10,
  status,
  categoryId,
  tagId,
  userId,
  search,
  isFeatured,
  isSponsored,
}: {
  page?: number;
  limit?: number;
  status?: "DRAFT" | "PUBLISHED";
  categoryId?: string;
  tagId?: string;
  userId?: string;
  search?: string;
  isFeatured?: boolean;
  isSponsored?: boolean;
}) {
  try {
    const skip = (page - 1) * limit;

    const where: Prisma.PostWhereInput = {
      ...(status && { status }),
      ...(isFeatured !== undefined && { isFeatured }),
      ...(isSponsored !== undefined && { isSponsored }),
      ...(userId && { userId }),
      ...(categoryId && {
        postCategories: { some: { categoryId } },
      }),
      ...(tagId && {
        postTags: { some: { tagId } },
      }),
      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: Prisma.QueryMode.insensitive, // 👈 correction TypeScript
            },
          },
          {
            description: {
              contains: search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        ],
      }),
    };

    const [posts, total] = await prisma.$transaction([
      prisma.post.findMany({
        where,
        include: {
          user: { select: { name: true, image: true } },
          postCategories: { include: { category: true } },
          postTags: { include: { tag: true } },
          _count: { select: { likePosts: true, responses: true } },
        },
        orderBy: [
          { isFeatured: "desc" },
          { order: "asc" },
          { createdAt: "desc" },
        ],
        skip,
        take: limit,
      }),
      prisma.post.count({ where }),
    ]);

    return {
      success: true,
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// UPDATE
// ------------------------------------------------------------------
export async function updatePost(formData: FormData) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) throw new Error("Non autorisé");

    const rawData = Object.fromEntries(formData);
    const contents = rawData.contents
      ? JSON.parse(rawData.contents as string)
      : undefined;
    const categoryIds = rawData.categoryIds
      ? JSON.parse(rawData.categoryIds as string)
      : undefined;
    const tagIds = rawData.tagIds
      ? JSON.parse(rawData.tagIds as string)
      : undefined;

    const validated = UpdatePostSchema.parse({
      ...rawData,
      contents,
      categoryIds,
      tagIds,
      order: rawData.order ? Number(rawData.order) : undefined,
      isSponsored: rawData.isSponsored === "true",
      isFeatured: rawData.isFeatured === "true",
    });

    const { id, ...data } = validated;

    // Vérification des droits
    const existingPost = await prisma.post.findUnique({
      where: { id },
      select: { userId: true, slug: true },
    });
    if (!existingPost) throw new Error("Post introuvable");

    // Admin ou propriétaire ?
    const isAdmin = session.user.roles?.includes("ADMIN");
    if (existingPost.userId !== session.user.id && !isAdmin) {
      throw new Error("Vous n'êtes pas autorisé à modifier ce post");
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Mise à jour du post – valeurs par défaut pour éviter undefined
      const post = await tx.post.update({
        where: { id },
        data: {
          title: data.title,
          slug: data.slug,
          description: data.description,
          img: data.img,
          status: data.status,
          order: data.order,
          metaTitle: data.metaTitle ?? "",
          metaDescription: data.metaDescription ?? "",
          canonicalUrl: data.canonicalUrl ?? "",
          isSponsored: data.isSponsored,
          isFeatured: data.isFeatured,
        },
      });

      // 2. Contenus + médias (remplacement complet)
      if (data.contents) {
        await tx.content.deleteMany({ where: { postId: id } });

        for (const [index, contentData] of data.contents.entries()) {
          const content = await tx.content.create({
            data: {
              order: contentData.order ?? index,
              content: contentData.content,
              format: contentData.format,
              postId: id,
              userId: session.user.id,
            },
          });

          if (contentData.medias?.length) {
            await tx.media.createMany({
              data: contentData.medias.map((media) => ({
                caption: media.caption,
                type: media.type,
                url: media.url,
                contentId: content.id,
              })),
            });
          }
        }
      }

      // 3. Catégories
      if (data.categoryIds) {
        await tx.postCategory.deleteMany({ where: { postId: id } });
        if (data.categoryIds.length) {
          await tx.postCategory.createMany({
            data: data.categoryIds.map((catId) => ({
              postId: id,
              categoryId: catId,
            })),
          });
        }
      }

      // 4. Tags
      if (data.tagIds) {
        await tx.postTag.deleteMany({ where: { postId: id } });
        if (data.tagIds.length) {
          await tx.postTag.createMany({
            data: data.tagIds.map((tagId) => ({ postId: id, tagId })),
          });
        }
      }

      return post;
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug ?? existingPost.slug}`);
    return { success: true, post: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// DELETE
// ------------------------------------------------------------------
export async function deletePost(postId: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) throw new Error("Non autorisé");

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { userId: true, slug: true },
    });
    if (!post) throw new Error("Post introuvable");

    // Admin ou propriétaire ?
    const isAdmin = session.user.roles?.includes("ADMIN");
    if (post.userId !== session.user.id && !isAdmin) {
      throw new Error("Vous n'êtes pas autorisé à supprimer ce post");
    }

    await prisma.post.delete({ where: { id: postId } });

    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
