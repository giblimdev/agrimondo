//@/app/blog/MyPost.tsx

"use client";

import { useState } from "react";
import { CardPost } from "./CardPost";
import { getUserPostsByStatus } from "@/lib/actions/posts";

type MyPostProps = {
  userId: string;
  initialPublishedPosts: any[]; // Vous pouvez typer plus précisément avec le type de Post
};

export default function MyPost({ userId, initialPublishedPosts }: MyPostProps) {
  const [posts, setPosts] = useState(initialPublishedPosts);
  const [showDrafts, setShowDrafts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPublished = async () => {
    if (!showDrafts) return; // déjà affichés
    setLoading(true);
    setError(null);
    const result = await getUserPostsByStatus(userId, "PUBLISHED");
    if (result.success && result.posts) {
      setPosts(result.posts);
      setShowDrafts(false);
    } else {
      setError("Erreur lors du chargement des articles publiés");
    }
    setLoading(false);
  };

  const loadDrafts = async () => {
    if (showDrafts) return; // déjà affichés
    setLoading(true);
    setError(null);
    const result = await getUserPostsByStatus(userId, "DRAFT");
    if (result.success && result.posts) {
      setPosts(result.posts);
      setShowDrafts(true);
    } else {
      setError("Erreur lors du chargement des brouillons");
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={loadPublished}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            !showDrafts
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Publiés
        </button>
        <button
          onClick={loadDrafts}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            showDrafts
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Brouillons
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
          ⚠️ {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <CardPost key={post.id} post={post} showActions showEditDelete />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">
          {showDrafts
            ? "Vous n'avez aucun brouillon."
            : "Vous n'avez pas encore publié d'article."}
        </p>
      )}
    </div>
  );
}
