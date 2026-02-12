"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllCategories, createCategory } from "@/lib/actions/category";
import { getAllTags, createTag } from "@/lib/actions/tag";

// Types simples basés sur ton schema Prisma
export type Category = {
  id: string;
  label: string;
  order: number;
  img?: string | null;
  parentId?: string | null;
};

export type Tag = {
  id: string;
  name: string;
  order: number;
};

// Props attendues
type BlogCatTagManagerProps = {
  mode?: "categories" | "tags" | "both";
  items?: Category[]; // utilisé si tu veux injecter une liste personnalisée
  userId?: string;
  editable?: boolean;
  onCategoryCreated?: () => void;
  onTagCreated?: () => void;
};

export default function BlogCatTagManager({
  mode = "both",
  items = [],
  userId,
  editable = true,
  onCategoryCreated,
  onTagCreated,
}: BlogCatTagManagerProps) {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    async function loadData() {
      if (mode === "categories" || mode === "both") {
        const cats = await getAllCategories();
        setCategories(cats);
      }
      if (mode === "tags" || mode === "both") {
        const tgs = await getAllTags();
        setTags(tgs);
      }
    }
    loadData();
  }, [mode]);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    await createCategory({ label: newCategory });
    setNewCategory("");
    onCategoryCreated?.();
    router.refresh();
  };

  const handleAddTag = async () => {
    if (!newTag.trim()) return;
    await createTag({ name: newTag });
    setNewTag("");
    onTagCreated?.();
    router.refresh();
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg space-y-8">
      {mode !== "tags" && (
        <section>
          <h3 className="text-lg font-semibold mb-2">Catégories</h3>
          <ul className="mb-3">
            {(items.length ? items : categories).map((c) => (
              <li key={c.id} className="text-gray-700">
                {c.label} {c.img && <span className="text-sm">📷</span>}
              </li>
            ))}
          </ul>
          {editable && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nouvelle catégorie"
                className="border px-2 py-1 rounded flex-1"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button
                onClick={handleAddCategory}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Ajouter
              </button>
            </div>
          )}
        </section>
      )}

      {mode !== "categories" && (
        <section>
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <ul className="mb-3">
            {tags.map((t) => (
              <li key={t.id} className="text-gray-700">
                {t.name}
              </li>
            ))}
          </ul>
          {editable && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nouveau tag"
                className="border px-2 py-1 rounded flex-1"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                onClick={handleAddTag}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Ajouter
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
