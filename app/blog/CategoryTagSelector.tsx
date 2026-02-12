// @/app/blog/CategoryTagSelector.tsx
/*
affiche le nom du fichier en commentaire

role de ce script :



*/
/*

////////////////////
/////   Blog   /////
////////////////////

model CategoriesPost {
  id    String  @id @default(cuid())
  order Int     @default(0)
  label String
  img   String? // optionnel (URL ou path)

  parentId String?
  parent   CategoriesPost?  @relation("CategoryTree", fields: [parentId], references: [id], onDelete: Cascade)
  children CategoriesPost[] @relation("CategoryTree")

  postCategories PostCategory[]

  @@unique([parentId, label])
  @@index([parentId, order])
}

model TagBlog {
  id        String   @id @default(cuid())
  name      String
  order     Int
  createdAt DateTime @default(now())

  postTags PostTag[]

  @@map("tag_blogs")
}

model Post {
  id              String     @id @default(cuid())
  title           String
  slug            String     @unique
  PostView        Int
  description     String
  isSponsored     Boolean    @default(false) // 
  isFeatured      Boolean    @default(false) //
  order           Int // ordre d'affichage
  img             String // URL ou chemin de l'image principale
  status          String //DRAFT, PUBLISHED
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt
  metaTitle       String
  metaDescription String
  canonicalUrl    String
  // 1-n
  contents        Content[]
  responses       Response[]

  // likes
  likePosts LikePost[]

  // m-n via pivots
  postCategories PostCategory[]
  postTags       PostTag[]

  userId String?
  user   User?   @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@index([createdAt])
  @@map("posts")
}

model Content {
  id        String        @id @default(cuid())
  order     Int
  content   String        @db.Text // contenu textuel riche
  format    ContentFormat @default(MARKDOWN)
  postId    String // clé étrangère vers Post
  createdAt DateTime      @default(now())
  updatedAt DateTime      @updatedAt

  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  medias Media[] // relation 1-n

  userId String?
  user   User?   @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@unique([postId, order]) // éviter les doublons d'ordre pour un même post
  @@index([postId])
  @@map("contents")
}

enum ContentFormat {
  MARKDOWN
  HTML
  JSON
  TEXT
}

model Media {
  id        String    @id @default(cuid())
  caption   String? // légende optionnelle
  type      MediaType // enum (Video, Image, Code, Audio, etc.)
  url       String
  contentId String // clé étrangère vers Content

  content Content @relation(fields: [contentId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([contentId])
  @@map("medias")
}

model Response {
  id        String   @id @default(cuid())
  order     Int
  content   String
  postId    String
  parentId  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  post     Post       @relation(fields: [postId], references: [id], onDelete: Cascade)
  parent   Response?  @relation("ResponseTree", fields: [parentId], references: [id], onDelete: Cascade)
  children Response[] @relation("ResponseTree")

  userId String?
  user   User?   @relation(fields: [userId], references: [id])

  @@index([postId])
  @@index([parentId])
  @@map("responses")
}

// Enum pour typer les médias (évite les fautes de frappe)
enum MediaType {
  IMAGE
  VIDEO
  CODE
  AUDIO
  DOCUMENT
  OTHER
}

model LikePost {
  id        String   @id @default(cuid())
  postId    String
  userId    String? // facultatif si tu veux tracker l'utilisateur
  createdAt DateTime @default(now())

  post Post  @relation(fields: [postId], references: [id], onDelete: Cascade)
  user User? @relation(fields: [userId], references: [id])

  @@unique([postId, userId]) // éviter qu'un utilisateur like plusieurs fois le même post
  @@index([postId])
  @@index([userId])
  @@map("like_posts")
}

// table pivot Post <-> Category (m-n explicite)
model PostCategory {
  postId     String
  categoryId String

  post     Post           @relation(fields: [postId], references: [id], onDelete: Cascade)
  category CategoriesPost @relation(fields: [categoryId], references: [id], onDelete: Cascade)

  @@id([postId, categoryId])
  @@index([categoryId])
  @@index([postId])
  @@map("post_categories")
}

// table pivot Post <-> Tag (m-n explicite)
model PostTag {
  postId String
  tagId  String

  post Post    @relation(fields: [postId], references: [id], onDelete: Cascade)
  tag  TagBlog @relation(fields: [tagId], references: [id], onDelete: Cascade)

  @@id([postId, tagId])
  @@index([tagId])
  @@index([postId])
  @@map("post_tags")
}


*/
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
        const result = await getAllCategories() as { success: boolean; data?: Category[]; error?: string };
        if (result.success && result.data) {
          setItems(result.data);
        } else {
          setError(result.error ?? "Erreur de chargement des catégories");
        }
      } else {
        const tags = await getAllTags() as Tag[];
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
        const result = await createTag({ name: newItem }) as Tag;

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
