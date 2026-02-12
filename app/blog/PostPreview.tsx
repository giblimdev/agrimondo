// /app/blog/PostPreview.tsx
import type { PostFormData } from "./AddPostModal";

export default function PostPreview({ formData }: { formData: PostFormData }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
        🔍 Aperçu en direct
      </h3>

      <article className="bg-white rounded-xl shadow-sm p-5 space-y-4">
        {formData.img && (
          <img
            src={formData.img}
            alt={formData.title}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        <h1 className="text-2xl font-bold text-gray-900">
          {formData.title || "Titre de l'article"}
        </h1>

        <p className="text-gray-600">
          {formData.description || "La description apparaîtra ici..."}
        </p>

        <div className="flex flex-wrap gap-2">
          {formData.categoryIds.map((id) => (
            <span
              key={id}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              Catégorie {id.slice(0, 4)}…
            </span>
          ))}
          {formData.tagIds.map((id) => (
            <span
              key={id}
              className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
            >
              #{id.slice(0, 4)}
            </span>
          ))}
        </div>

        <div className="prose prose-sm max-w-none">
          {formData.contents.map((block, idx) => {
            if (!block.content) return null;
            return (
              <div
                key={idx}
                className="border-t pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0"
              >
                {block.format === "MARKDOWN" ? (
                  <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-3 rounded">
                    {block.content.slice(0, 200)}
                    {block.content.length > 200 && "…"}
                  </div>
                ) : (
                  <p className="text-gray-700">
                    {block.content.slice(0, 200)}…
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-xs text-gray-400 pt-2 border-t">
          Statut :{" "}
          <span
            className={
              formData.status === "PUBLISHED"
                ? "text-green-600"
                : "text-orange-600"
            }
          >
            {formData.status === "PUBLISHED" ? "Publié" : "Brouillon"}
          </span>
          {formData.isSponsored && " • Sponsorisé"}
          {formData.isFeatured && " • À la une"}
        </div>
      </article>
    </div>
  );
}
