//@/lib/validations/post.ts

import { z } from "zod";

export const PostStatusEnum = z.enum(["DRAFT", "PUBLISHED"]);
export const ContentFormatEnum = z.enum(["MARKDOWN", "HTML", "JSON", "TEXT"]);

export const ContentSchema = z.object({
  order: z.number().int().min(0),
  content: z.string().min(1),
  format: ContentFormatEnum.default("MARKDOWN"),
  medias: z
    .array(
      z.object({
        caption: z.string().optional(),
        type: z.enum(["IMAGE", "VIDEO", "CODE", "AUDIO", "DOCUMENT", "OTHER"]),
        url: z.string().url(),
      }),
    )
    .optional(),
});

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().min(1),
  img: z.string().url(),
  status: PostStatusEnum,
  order: z.number().int().min(0).default(0),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  isSponsored: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  // relations
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
  contents: z.array(ContentSchema).min(1),
});

export const UpdatePostSchema = CreatePostSchema.partial().extend({
  id: z.string(),
});
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
