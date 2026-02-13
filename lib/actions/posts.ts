//@/lib/actions/post.ts
/* server component pour CRUD les post */
"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client";
import { CreatePostSchema, UpdatePostSchema } from "@/lib/validations/post";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { z } from "zod";

// ------------------------------------------------------------------
// CREATE
// ------------------------------------------------------------------
export async function createPost(formData: FormData) {
  console.log("\n=== createPost called ===");
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    console.log("Session user:", session?.user?.id);
    if (!session?.user?.id) {
      throw new Error("Non autorisé");
    }

    const rawData = Object.fromEntries(formData);
    console.log("rawData keys:", Object.keys(rawData));
    console.log("title:", rawData.title);
    console.log("slug:", rawData.slug);
    console.log("description length:", (rawData.description as string)?.length);
    console.log(
      "img (first 50 chars):",
      (rawData.img as string)?.substring(0, 50),
    );
    console.log("order:", rawData.order);
    console.log("status:", rawData.status);
    console.log("isSponsored:", rawData.isSponsored);
    console.log("isFeatured:", rawData.isFeatured);

    let contents, categoryIds, tagIds;
    try {
      contents = JSON.parse(rawData.contents as string);
      categoryIds = JSON.parse((rawData.categoryIds as string) || "[]");
      tagIds = JSON.parse((rawData.tagIds as string) || "[]");
    } catch (e) {
      console.error("Erreur de parsing JSON:", e);
      throw new Error("Format JSON invalide pour contents/categoryIds/tagIds");
    }

    console.log("Parsed contents count:", contents?.length);
    console.log("Parsed categoryIds:", categoryIds);
    console.log("Parsed tagIds:", tagIds);

    const validated = CreatePostSchema.parse({
      ...rawData,
      contents,
      categoryIds,
      tagIds,
      order: Number(rawData.order) || 0,
      isSponsored: rawData.isSponsored === "true",
      isFeatured: rawData.isFeatured === "true",
    });
    console.log("Validation Zod réussie");

    let slug = validated.slug;
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
      console.log("Slug existant, nouveau slug:", slug);
    }

    const result = await prisma.$transaction(async (tx) => {
      console.log("Début transaction - création post");
      const post = await tx.post.create({
        data: {
          title: validated.title,
          slug,
          description: validated.description,
          img: validated.img,
          status: validated.status,
          order: validated.order,
          metaTitle: validated.metaTitle ?? "",
          metaDescription: validated.metaDescription ?? "",
          canonicalUrl: validated.canonicalUrl ?? "",
          isSponsored: validated.isSponsored,
          isFeatured: validated.isFeatured,
          PostView: 0,
          userId: session.user.id,
        },
      });
      console.log("Post créé avec id:", post.id);

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
          console.log(`Contenu ${index} créé avec id:`, content.id);

          if (contentData.medias?.length) {
            await tx.media.createMany({
              data: contentData.medias.map((media) => ({
                caption: media.caption,
                type: media.type,
                url: media.url,
                contentId: content.id,
              })),
            });
            console.log(
              `${contentData.medias.length} médias ajoutés pour le contenu ${index}`,
            );
          }
        }
      }

      if (validated.categoryIds?.length) {
        await tx.postCategory.createMany({
          data: validated.categoryIds.map((catId) => ({
            postId: post.id,
            categoryId: catId,
          })),
        });
        console.log("Catégories associées");
      }

      if (validated.tagIds?.length) {
        await tx.postTag.createMany({
          data: validated.tagIds.map((tagId) => ({
            postId: post.id,
            tagId,
          })),
        });
        console.log("Tags associés");
      }

      return post;
    });

    console.log("Transaction réussie, post créé:", result.id);
    revalidatePath("/blog");
    return { success: true, post: result };
  } catch (error) {
    console.error("ERREUR dans createPost:", error);
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      console.error("Détails Zod:", fieldErrors);
      const errorMessage = Object.entries(fieldErrors)
        .map(([field, msgs]) => {
          if (Array.isArray(msgs)) {
            return `${field}: ${msgs.join(", ")}`;
          }
          return `${field}: ${msgs}`;
        })
        .join("; ");
      return { success: false, error: `Validation échouée: ${errorMessage}` };
    }
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// READ (un seul post)
// ------------------------------------------------------------------
export async function getPostBySlug(slug: string, incrementView = true) {
  console.log("\n=== getPostBySlug called ===");
  console.log("slug:", slug, "incrementView:", incrementView);
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
      console.log("Post introuvable pour slug:", slug);
      return { success: false, error: "Post introuvable" };
    }

    if (incrementView) {
      await prisma.post.update({
        where: { id: post.id },
        data: { PostView: { increment: 1 } },
      });
      console.log("Vue incrémentée pour post:", post.id);
    }

    console.log("Post trouvé:", post.id);
    return { success: true, post };
  } catch (error) {
    console.error("ERREUR dans getPostBySlug:", error);
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// READ My post (liste paginée avec filtres)
// ------------------------------------------------------------------
export async function getUserPostsByStatus(
  userId: string,
  status: "DRAFT" | "PUBLISHED",
) {
  console.log("\n=== getUserPostsByStatus called ===");
  console.log("userId:", userId, "status:", status);
  try {
    const posts = await prisma.post.findMany({
      where: { userId, status },
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true, image: true } },
        postCategories: { include: { category: true } },
        postTags: { include: { tag: true } },
        _count: { select: { likePosts: true, responses: true } },
      },
    });
    console.log(`Récupéré ${posts.length} posts`);
    return { success: true, posts };
  } catch (error) {
    console.error("ERREUR dans getUserPostsByStatus:", error);
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
  console.log("\n=== getPosts called ===");
  console.log("Params:", {
    page,
    limit,
    status,
    categoryId,
    tagId,
    userId,
    search,
    isFeatured,
    isSponsored,
  });
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
              mode: Prisma.QueryMode.insensitive,
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

    console.log("Where clause construite");

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

    console.log(`Récupéré ${posts.length} posts sur ${total} total`);
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
    console.error("ERREUR dans getPosts:", error);
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// UPDATE
// ------------------------------------------------------------------
export async function updatePost(formData: FormData) {
  console.log("\n=== updatePost called ===");
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    console.log("Session user:", session?.user?.id);
    if (!session?.user?.id) throw new Error("Non autorisé");

    const rawData = Object.fromEntries(formData);
    console.log("rawData keys:", Object.keys(rawData));
    console.log("id:", rawData.id);
    console.log("title:", rawData.title);
    console.log("slug:", rawData.slug);

    const contents = rawData.contents
      ? JSON.parse(rawData.contents as string)
      : undefined;
    const categoryIds = rawData.categoryIds
      ? JSON.parse(rawData.categoryIds as string)
      : undefined;
    const tagIds = rawData.tagIds
      ? JSON.parse(rawData.tagIds as string)
      : undefined;

    console.log("Parsed contents count:", contents?.length);
    console.log("Parsed categoryIds:", categoryIds);
    console.log("Parsed tagIds:", tagIds);

    const validated = UpdatePostSchema.parse({
      ...rawData,
      contents,
      categoryIds,
      tagIds,
      order: rawData.order ? Number(rawData.order) : undefined,
      isSponsored: rawData.isSponsored === "true",
      isFeatured: rawData.isFeatured === "true",
    });
    console.log("Validation Zod réussie");

    const { id, ...data } = validated;

    const existingPost = await prisma.post.findUnique({
      where: { id },
      select: { userId: true, slug: true },
    });
    if (!existingPost) throw new Error("Post introuvable");

    const isAdmin = session.user.roles?.includes("ADMIN");
    if (existingPost.userId !== session.user.id && !isAdmin) {
      throw new Error("Vous n'êtes pas autorisé à modifier ce post");
    }

    console.log("Droits vérifiés, mise à jour du post:", id);

    const result = await prisma.$transaction(async (tx) => {
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
      console.log("Post mis à jour");

      if (data.contents) {
        await tx.content.deleteMany({ where: { postId: id } });
        console.log("Anciens contenus supprimés");

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
          console.log(`Contenu ${index} créé avec id:`, content.id);

          if (contentData.medias?.length) {
            await tx.media.createMany({
              data: contentData.medias.map((media) => ({
                caption: media.caption,
                type: media.type,
                url: media.url,
                contentId: content.id,
              })),
            });
            console.log(
              `${contentData.medias.length} médias ajoutés pour le contenu ${index}`,
            );
          }
        }
      }

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
        console.log("Catégories mises à jour");
      }

      if (data.tagIds) {
        await tx.postTag.deleteMany({ where: { postId: id } });
        if (data.tagIds.length) {
          await tx.postTag.createMany({
            data: data.tagIds.map((tagId) => ({ postId: id, tagId })),
          });
        }
        console.log("Tags mis à jour");
      }

      return post;
    });

    console.log("Mise à jour réussie, post:", result.id);
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug ?? existingPost.slug}`);
    return { success: true, post: result };
  } catch (error) {
    console.error("ERREUR dans updatePost:", error);
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      console.error("Détails Zod:", fieldErrors);
      const errorMessage = Object.entries(fieldErrors)
        .map(([field, msgs]) => {
          if (Array.isArray(msgs)) {
            return `${field}: ${msgs.join(", ")}`;
          }
          return `${field}: ${msgs}`;
        })
        .join("; ");
      return { success: false, error: `Validation échouée: ${errorMessage}` };
    }
    return { success: false, error: (error as Error).message };
  }
}

// ------------------------------------------------------------------
// DELETE
// ------------------------------------------------------------------
export async function deletePost(postId: string) {
  console.log("\n=== deletePost called ===");
  console.log("postId:", postId);
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    console.log("Session user:", session?.user?.id);
    if (!session?.user?.id) throw new Error("Non autorisé");

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { userId: true, slug: true },
    });
    if (!post) throw new Error("Post introuvable");

    const isAdmin = session.user.roles?.includes("ADMIN");
    if (post.userId !== session.user.id && !isAdmin) {
      throw new Error("Vous n'êtes pas autorisé à supprimer ce post");
    }

    console.log("Droits vérifiés, suppression du post:", postId);
    await prisma.post.delete({ where: { id: postId } });
    console.log("Post supprimé");

    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("ERREUR dans deletePost:", error);
    return { success: false, error: (error as Error).message };
  }
}
