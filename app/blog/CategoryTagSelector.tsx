// @/app/blog/CategoryTagSelector.tsx
"use client";

import { useState, useEffect } from "react";
import { getAllCategories, createCategory } from "@/lib/actions/category";
import { getAllTags, createTag } from "@/lib/actions/tag";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------
type Category = {
  id: string;
  label: string;
  order: number;
  img?: string | null;
  parentId?: string | null;
};

type Tag = {
  id: string;
  name: string;
  order: number;
};

// ------------------------------------------------------------
// Composant
// ------------------------------------------------------------
export default function CategoryTagSelector({
  mode,
  selectedIds,
  onChange,
  userId, // pas utilisé ici, mais gardé pour compatibilité
}: {
  mode: "categories" | "tags";
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  userId?: string;
}) {
  const [items, setItems] = useState<(Category | Tag)[]>([]);
  const [newItem, setNewItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ------------------------------------------------------------
  // Chargement initial et rafraîchissement
  // ------------------------------------------------------------
  const loadItems = async () => {
    setError(null);
    try {
      if (mode === "categories") {
        const categories = await getAllCategories();
        if (Array.isArray(categories)) {
          setItems(categories);
        } else {
          setError("Erreur de chargement des catégories");
        }
      } else {
        const tags = await getAllTags();
        if (Array.isArray(tags)) {
          setItems(tags);
        } else {
          setError("Erreur de chargement des tags");
        }
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error(err);
    }
  };

  useEffect(() => {
    loadItems();
  }, [mode]);

  // ------------------------------------------------------------
  // Gestion de la sélection
  // ------------------------------------------------------------
  const toggleId = (id: string) => {
    if (selectedIds.includes(id)) {
      onChange(selectedIds.filter((i) => i !== id));
    } else {
      onChange([...selectedIds, id]);
    }
  };

  // ------------------------------------------------------------
  // Création d'un nouvel élément
  // ------------------------------------------------------------
  const handleAdd = async () => {
    if (!newItem.trim()) return;

    setLoading(true);
    setError(null);

    try {
      if (mode === "categories") {
        const result = await createCategory({ label: newItem });

        if (result.success && result.data) {
          // Recharger la liste pour être à jour
          await loadItems();
          // Ajouter l'ID du nouvel élément à la sélection
          onChange([...selectedIds, result.data.id]);
          setNewItem("");
        } else {
          setError(result.error ?? "Erreur de création de la catégorie");
        }
      } else {
        const result = await createTag({ name: newItem });
        // Ici on suppose que createTag retourne l'objet tag directement
        if (result && result.id) {
          await loadItems();
          onChange([...selectedIds, result.id]);
          setNewItem("");
        } else {
          setError("Erreur de création du tag");
        }
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------------
  // Rendu
  // ------------------------------------------------------------
  return (
    <div className="space-y-3">
      {/* Message d'erreur */}
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md flex items-start gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Liste des éléments avec cases à cocher */}
      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 border rounded-md bg-gray-50">
        {items.length === 0 && !error ? (
          <p className="text-sm text-gray-500 p-1">
            {mode === "categories" ? "Aucune catégorie" : "Aucun tag"}
          </p>
        ) : (
          items.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-1.5 text-sm bg-white px-2 py-1 rounded-md border cursor-pointer hover:bg-gray-100 transition"
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleId(item.id)}
                className={
                  mode === "categories"
                    ? "rounded text-blue-600"
                    : "rounded text-green-600"
                }
              />
              <span>
                {mode === "categories"
                  ? (item as Category).label
                  : `#${(item as Tag).name}`}
              </span>
            </label>
          ))
        )}
      </div>

      {/* Ajout d'un nouvel élément */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={
            mode === "categories" ? "Nouvelle catégorie…" : "Nouveau tag…"
          }
          className="flex-1 px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          disabled={loading}
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={loading || !newItem.trim()}
          className={`px-3 py-1.5 text-white text-sm rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed ${
            mode === "categories"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? (
            <span className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Création…
            </span>
          ) : (
            "Créer"
          )}
        </button>
      </div>
    </div>
  );
}
