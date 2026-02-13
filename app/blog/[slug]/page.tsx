// app/blog/[slug]/page.tsx
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/actions/posts";
import FormResponse from "../FormResponse";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;

  const result = await getPostBySlug(slug, true); // true pour incrémenter la vue
  if (!result.success || !result.post) {
    notFound();
  }

  const post = result.post;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au blog
      </Link>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image principale */}
        {post.img && (
          <div className="relative h-96 w-full">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8">
          {/* Titre et métadonnées */}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            {post.user && (
              <div className="flex items-center gap-2">
                {post.user.image && (
                  <img
                    src={post.user.image}
                    alt={post.user.name ?? ""}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span>{post.user.name}</span>
              </div>
            )}
            <span>•</span>
            <time dateTime={new Date(post.createdAt).toISOString()}>
              {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Badges catégories/tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.postCategories?.map((pc) => (
              <Link
                key={pc.category.id}
                href={`/blog?category=${pc.category.id}`}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
              >
                {pc.category.label}
              </Link>
            ))}
            {post.postTags?.map((pt) => (
              <span
                key={pt.tag.id}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                #{pt.tag.name}
              </span>
            ))}
          </div>

          {/* Description */}
          {post.description && (
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 italic">{post.description}</p>
            </div>
          )}

          {/* Contenus multiples */}
          <div className="space-y-12">
            {post.contents.map((content) => (
              <div key={content.id} className="prose prose-lg max-w-none">
                {content.format === "MARKDOWN" ? (
                  <div className="markdown-body">
                    <pre className="bg-gray-100 p-4 rounded overflow-auto">
                      {content.content}
                    </pre>
                  </div>
                ) : content.format === "HTML" ? (
                  <div dangerouslySetInnerHTML={{ __html: content.content }} />
                ) : (
                  <p>{content.content}</p>
                )}

                {/* Médias associés */}
                {content.medias && content.medias.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {content.medias.map((media) => (
                      <div key={media.id} className="border rounded p-2">
                        {media.type === "IMAGE" && (
                          <img
                            src={media.url}
                            alt={media.caption ?? ""}
                            className="w-full h-auto rounded"
                          />
                        )}
                        {media.type === "VIDEO" && (
                          <video src={media.url} controls className="w-full" />
                        )}
                        {media.type === "AUDIO" && (
                          <audio src={media.url} controls className="w-full" />
                        )}
                        {media.type === "CODE" && (
                          <pre className="bg-gray-900 text-white p-2 rounded overflow-auto text-sm">
                            {media.caption}
                          </pre>
                        )}
                        {media.caption && (
                          <p className="text-sm text-gray-600 mt-1">
                            {media.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section des réponses */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">
              Réponses ({post._count?.responses ?? 0})
            </h2>

            {/* Formulaire de réponse */}
            <FormResponse
              postId={post.id}
              userId={userId}
              placeholder="Votre commentaire..."
            />

            {/* Liste des réponses */}
            <div className="mt-8 space-y-6">
              {post.responses?.map((response) => (
                <div key={response.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {response.user?.image && (
                      <img
                        src={response.user.image}
                        alt={response.user.name ?? ""}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <span className="font-medium">
                      {response.user?.name ?? "Anonyme"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(response.createdAt).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <p className="text-gray-700">{response.content}</p>

                  {/* Réponses enfants */}
                  {response.children && response.children.length > 0 && (
                    <div className="ml-6 mt-4 space-y-4 border-l-2 pl-4">
                      {response.children.map((child) => (
                        <div
                          key={child.id}
                          className="border rounded-lg p-3 bg-gray-50"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {child.user?.image && (
                              <img
                                src={child.user.image}
                                alt={child.user.name ?? ""}
                                className="w-5 h-5 rounded-full"
                              />
                            )}
                            <span className="font-medium text-sm">
                              {child.user?.name ?? "Anonyme"}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(child.createdAt).toLocaleDateString(
                                "fr-FR",
                              )}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {child.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bouton répondre (pourrait être un formulaire imbriqué) */}
                  <button className="text-sm text-blue-600 hover:underline mt-2">
                    Répondre
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
