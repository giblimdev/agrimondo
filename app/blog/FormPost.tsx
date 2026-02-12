// /app/blog/FormPost.tsx
"use client";

import type { PostFormData } from "./AddPostModal";
import CategoryTagSelector from "./CategoryTagSelector";

interface FormPostProps {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
  slugManuallyEdited: boolean;
  setSlugManuallyEdited: (value: boolean) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error: string | null;
  success: boolean;
  userId: string;
}

export function FormPost({
  formData,
  setFormData,
  slugManuallyEdited,
  setSlugManuallyEdited,
  onImageUpload,
  onSubmit,
  loading,
  error,
  success,
  userId,
}: FormPostProps) {
  // Mise à jour générique des champs
  const updateField = <K extends keyof PostFormData>(
    field: K,
    value: PostFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Gestion des contenus multiples
  const addContent = () => {
    setFormData((prev) => ({
      ...prev,
      contents: [...prev.contents, { content: "", format: "MARKDOWN" }],
    }));
  };

  const removeContent = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      contents: prev.contents.filter((_, i) => i !== index),
    }));
  };

  const updateContent = (
    index: number,
    field: keyof PostFormData["contents"][0],
    value: any,
  ) => {
    setFormData((prev) => {
      const newContents = [...prev.contents];
      newContents[index] = { ...newContents[index], [field]: value };
      return { ...prev, contents: newContents };
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Messages de feedback */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          ✓ Article {formData.id ? "mis à jour" : "publié"} avec succès
        </div>
      )}

      {/* Titre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titre <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateField("title", e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Titre de l'article"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Slug (URL) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => {
            updateField("slug", e.target.value);
            setSlugManuallyEdited(true);
          }}
          required
          pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="mon-article"
        />
        <p className="text-xs text-gray-500 mt-1">
          Généré automatiquement depuis le titre. Vous pouvez le modifier.
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Résumé ou accroche de l'article"
        />
      </div>

      {/* Image : URL + Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image principale <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col gap-2">
          <input
            type="url"
            value={formData.img}
            onChange={(e) => updateField("img", e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">ou</span>
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm transition">
              📁 Choisir un fichier
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
        {formData.img && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-1">Aperçu :</p>
            <img
              src={formData.img}
              alt="Aperçu"
              className="h-24 w-auto object-cover border rounded"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        )}
      </div>

      {/* Ordre et statut */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ordre
          </label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) =>
              updateField("order", parseInt(e.target.value) || 0)
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Statut
          </label>
          <select
            value={formData.status}
            onChange={(e) =>
              updateField("status", e.target.value as "DRAFT" | "PUBLISHED")
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="DRAFT">Brouillon</option>
            <option value="PUBLISHED">Publié</option>
          </select>
        </div>
      </div>

      {/* Options */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={formData.isSponsored}
            onChange={(e) => updateField("isSponsored", e.target.checked)}
            className="rounded"
          />
          Sponsorisé
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={formData.isFeatured}
            onChange={(e) => updateField("isFeatured", e.target.checked)}
            className="rounded"
          />
          À la une
        </label>
      </div>

      {/* Catégories & Tags */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Catégories & Tags</h4>
        <CategoryTagSelector
          mode="categories"
          selectedIds={formData.categoryIds}
          onChange={(ids) => updateField("categoryIds", ids)}
          userId={userId}
        />
        <CategoryTagSelector
          mode="tags"
          selectedIds={formData.tagIds}
          onChange={(ids) => updateField("tagIds", ids)}
          userId={userId}
        />
      </div>

      {/* Contenus multiples */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-700">Contenus</h4>
          <button
            type="button"
            onClick={addContent}
            className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100"
          >
            + Ajouter un bloc
          </button>
        </div>
        {formData.contents.map((content, idx) => (
          <div key={idx} className="mb-4 p-4 border rounded-lg bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Bloc #{idx + 1}</span>
              {formData.contents.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeContent(idx)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Supprimer
                </button>
              )}
            </div>
            <select
              value={content.format}
              onChange={(e) => updateContent(idx, "format", e.target.value)}
              className="mb-2 px-3 py-1.5 border rounded-md text-sm"
            >
              <option value="MARKDOWN">Markdown</option>
              <option value="HTML">HTML</option>
              <option value="JSON">JSON</option>
              <option value="TEXT">Texte</option>
            </select>
            <textarea
              value={content.content}
              onChange={(e) => updateContent(idx, "content", e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border rounded-lg font-mono text-sm"
              placeholder="Contenu..."
            />
            <div className="mt-2">
              <label className="text-xs text-gray-500">Médias (JSON)</label>
              <input
                type="text"
                value={content.medias ? JSON.stringify(content.medias) : ""}
                onChange={(e) => {
                  try {
                    updateContent(idx, "medias", JSON.parse(e.target.value));
                  } catch {}
                }}
                className="w-full px-3 py-1.5 border rounded-md text-sm"
                placeholder='[{"type":"IMAGE","url":"..."}]'
              />
            </div>
          </div>
        ))}
      </div>

      {/* SEO (repliable) */}
      <details className="border rounded-lg p-4">
        <summary className="font-medium text-gray-700 cursor-pointer">
          Métadonnées SEO
        </summary>
        <div className="mt-3 space-y-3">
          <input
            type="text"
            value={formData.metaTitle}
            onChange={(e) => updateField("metaTitle", e.target.value)}
            placeholder="Meta title"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            value={formData.metaDescription}
            onChange={(e) => updateField("metaDescription", e.target.value)}
            placeholder="Meta description"
            rows={2}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="url"
            value={formData.canonicalUrl}
            onChange={(e) => updateField("canonicalUrl", e.target.value)}
            placeholder="URL canonique"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </details>

      {/* Bouton de soumission */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Enregistrement...
            </>
          ) : formData.id ? (
            "Mettre à jour"
          ) : (
            "Publier l'article"
          )}
        </button>
      </div>
    </form>
  );
}
