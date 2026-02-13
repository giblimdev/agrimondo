import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import AddPostModal from "../../AddPostModal";
import type { PostFormData } from "../../AddPostModal";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>; // ← ici : params est une promesse
}) {
  const { id } = await params; // ← on déstructure après await

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) redirect("/login");

  const post = await prisma.post.findUnique({
    where: { id }, // ← maintenant id est défini
    include: {
      contents: { include: { medias: true }, orderBy: { order: "asc" } },
      postCategories: true,
      postTags: true,
    },
  });

  if (!post) notFound();

  const isAdmin = session.user.roles?.includes("ADMIN");
  if (post.userId !== session.user.id && !isAdmin) redirect("/blog");

  const initialData: PostFormData = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.description,
    img: post.img,
    order: post.order,
    status: post.status as "DRAFT" | "PUBLISHED",
    isSponsored: post.isSponsored,
    isFeatured: post.isFeatured,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    canonicalUrl: post.canonicalUrl,
    contents: post.contents.map((c) => ({
      order: c.order,
      content: c.content,
      format: c.format,
      medias: c.medias.map((m) => ({
        caption: m.caption ?? undefined,
        type: m.type,
        url: m.url,
      })),
    })),
    categoryIds: post.postCategories.map((pc) => pc.categoryId),
    tagIds: post.postTags.map((pt) => pt.tagId),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Modifier l’article</h1>
      <AddPostModal
        userId={session.user.id}
        initialData={initialData}
        defaultOpen
        hideButton
      />
    </div>
  );
}
