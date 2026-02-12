"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deletePost } from "@/lib/actions/posts";
import type {
  Post,
  User,
  CategoriesPost,
  TagBlog,
} from "@/lib/generated/prisma/client";

type PostWithRelations = Post & {
  user?: Pick<User, "name" | "image"> | null;
  postCategories?: { category: CategoriesPost }[];
  postTags?: { tag: TagBlog }[];
  _count?: { likePosts: number; responses: number };
};

type CardPostProps = {
  post: PostWithRelations;
  variant?: "full" | "compact";
  showActions?: boolean;
  showEditDelete?: boolean;
  onLikeToggle?: () => Promise<void>; // Server action
};

export function CardPost({
  post,
  variant = "full",
  showActions = true,
  showEditDelete = false,
  onLikeToggle,
}: CardPostProps) {
  const router = useRouter();
  const {
    id,
    slug,
    title,
    description,
    img,
    user,
    postCategories,
    postTags,
    _count,
    isFeatured,
    isSponsored,
    createdAt,
  } = post;

  const handleDelete = async () => {
    if (confirm("Supprimer cet article ?")) {
      const res = await deletePost(id);
      if (res.success) {
        router.refresh();
      } else {
        alert(res.error);
      }
    }
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
        variant === "compact" ? "max-w-sm" : ""
      }`}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 bg-gray-100">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-image.jpg";
            }}
          />
          {isFeatured && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              À la une
            </span>
          )}
          {isSponsored && (
            <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
              Sponsorisé
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 line-clamp-2">
            {title}
          </h3>
        </Link>

        {variant === "full" && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}

        {/* Auteur et date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          {user?.image && (
            <img
              src={user.image}
              alt={user.name ?? ""}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span>{user?.name ?? "Anonyme"}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>

        {/* Catégories et tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {postCategories?.slice(0, 2).map((pc) => (
            <Link
              key={pc.category.id}
              href={`/blog?category=${pc.category.id}`}
              className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              {pc.category.label}
            </Link>
          ))}
          {postTags?.slice(0, 3).map((pt) => (
            <span
              key={pt.tag.id}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
            >
              #{pt.tag.name}
            </span>
          ))}
        </div>

        {/* Statistiques et actions */}
        {showActions && (
          <div className="flex items-center justify-between border-t pt-3 text-sm">
            <div className="flex gap-4">
              {onLikeToggle ? (
                <button
                  onClick={onLikeToggle}
                  className="flex items-center gap-1 text-gray-600 hover:text-red-500"
                >
                  ❤️ {_count?.likePosts ?? 0}
                </button>
              ) : (
                <span className="flex items-center gap-1">
                  ❤️ {_count?.likePosts ?? 0}
                </span>
              )}
              <span className="flex items-center gap-1">
                💬 {_count?.responses ?? 0}
              </span>
              <span className="flex items-center gap-1">
                👁️ {post.PostView}
              </span>
            </div>

            {showEditDelete && (
              <div className="flex gap-2">
                <Link
                  href={`/blog/edit/${id}`}
                  className="text-blue-600 hover:underline"
                >
                  Modifier
                </Link>
                <button
                  onClick={handleDelete}
                  className="text-red-600 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
