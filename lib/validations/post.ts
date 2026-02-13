//@/lib/validations/post.ts

import { z } from "zod";

export const PostStatusEnum = z.enum(["DRAFT", "PUBLISHED"]);
export const ContentFormatEnum = z.enum(["MARKDOWN", "HTML", "JSON", "TEXT"]);

// Schéma pour les médias – correspond à l'enum MediaType du schéma
const MediaSchema = z.object({
  caption: z.string().optional(),
  type: z.enum(["IMAGE", "VIDEO", "CODE", "AUDIO", "DOCUMENT", "OTHER"]),
  url: z.string().url(),
});

// Schéma pour un bloc de contenu – order est optionnel car le formulaire ne l'envoie pas,
// il sera généré côté serveur à partir de l'index.
export const ContentSchema = z.object({
  order: z.number().int().min(0).optional(), // ← rendu optionnel
  content: z.string().min(1, "Le contenu ne peut pas être vide"),
  format: ContentFormatEnum.default("MARKDOWN"),
  medias: z.array(MediaSchema).optional(),
});

// Schéma de création d'un post – tous les champs obligatoires dans la base
// sont soit requis ici, soit dotés d'une valeur par défaut (via .default() ou via l'action).
export const CreatePostSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  slug: z
    .string()
    .min(1)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug invalide (doit être en minuscules, avec tirets)",
    ),
  description: z.string().min(1, "La description est requise"),
  img: z.string().url("L'image doit être une URL valide"),
  status: PostStatusEnum,
  order: z.number().int().min(0).default(0), // ordre d'affichage du post

  // Champs SEO – la base les attend comme String (non null), nous les traitons comme
  // des chaînes pouvant être vides ; l'action les convertira en chaîne vide si besoin.
  metaTitle: z.string().default(""),
  metaDescription: z.string().default(""),
  // canonicalUrl accepte soit une URL valide, soit une chaîne vide (champ non renseigné)
  canonicalUrl: z.string().url().or(z.literal("")).default(""),

  isSponsored: z.boolean().default(false),
  isFeatured: z.boolean().default(false),

  // Relations – optionnelles car un post peut exister sans catégorie ni tag
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),

  // Au moins un bloc de contenu est requis
  contents: z.array(ContentSchema).min(1, "Au moins un contenu est requis"),
});

// Schéma de mise à jour – tous les champs deviennent optionnels, sauf l'id
export const UpdatePostSchema = CreatePostSchema.partial().extend({
  id: z.string(),
});

// Pour exporter les types si besoin
export type CreatePostInput = z.infer<typeof CreatePostSchema>;
export type UpdatePostInput = z.infer<typeof UpdatePostSchema>;
