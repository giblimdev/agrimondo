//@/app/blog/page.tsx
/*
page principal du blog.
j'utilise better auth
les actions de CRUD des post sont dans lib action
utilisera des composant Formpost, BlogCatTagManager, CardPost,  FormResponse, avec des props correct.

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
   isSponsored Boolean  @default(false) // 
  isFeatured  Boolean  @default(false) // 
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
  post   Post       @relation(fields: [postId], references: [id], onDelete: Cascade)
  parent Response?  @relation("ResponseTree", fields: [parentId], references: [id], onDelete: Cascade)
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
// /app/blog/page.tsx

// /app/blog/page.tsx
import { auth } from "@/lib/auth/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import Link from "next/link";

// Server Actions pour les posts
import { getPosts, getPostBySlug } from "@/lib/actions/posts";

// Composants blog
import AddPostModal from "./AddPostModal"; // <-- Modale pour le formulaire
import BlogCatTagManager from "./BlogCatTagManager";
import { CardPost } from "./CardPost";
import FormResponse from "./FormResponse";

// ------------------------------------------------------------------
// TYPES (basés sur les retours des Server Actions)
// ------------------------------------------------------------------
type PostWithRelations = NonNullable<
  Awaited<ReturnType<typeof getFeaturedPost>>
>;
type CategoryWithCount = {
  id: string;
  label: string;
  img?: string | null;
  order: number;
  _count: { postCategories: number };
};

// ------------------------------------------------------------------
// FONCTIONS DE RÉCUPÉRATION DES DONNÉES
// ------------------------------------------------------------------
async function getFeaturedPost() {
  const result = await getPosts({
    isFeatured: true,
    status: "PUBLISHED",
    limit: 1,
  });
  if (result.success && result.posts && result.posts.length > 0) {
    return result.posts[0];
  }
  return null;
}

async function getSuggestedPosts(limit = 3) {
  const result = await getPosts({
    status: "PUBLISHED",
    limit,
  });
  return result.success && result.posts ? result.posts : [];
}

async function getTutorialPost() {
  const bySlug = await getPostBySlug("mode-d-emploi");
  if (bySlug.success) return bySlug.post;
  return null;
}

async function getUserFavoriteCategories(userId: string) {
  const userPostCategories = await prisma.postCategory.findMany({
    where: { post: { userId } },
    select: {
      category: {
        select: {
          id: true,
          label: true,
          img: true,
          order: true,
        },
      },
    },
    distinct: ["categoryId"],
    take: 5,
  });
  return userPostCategories.map((pc) => pc.category);
}

async function getUserPosts(userId: string) {
  return prisma.post.findMany({
    where: { userId, status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      user: { select: { name: true, image: true } },
      postCategories: { include: { category: true } },
      postTags: { include: { tag: true } },
      _count: { select: { likePosts: true, responses: true } },
    },
  });
}

// ------------------------------------------------------------------
// COMPOSANT PRINCIPAL (SERVER COMPONENT)
// ------------------------------------------------------------------
export default async function BlogPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;

  const [
    featuredPost,
    suggestedPosts,
    tutorialPost,
    favoriteCategories,
    userPosts,
  ] = await Promise.all([
    getFeaturedPost(),
    getSuggestedPosts(3),
    getTutorialPost(),
    userId ? getUserFavoriteCategories(userId) : Promise.resolve([]),
    userId ? getUserPosts(userId) : Promise.resolve([]),
  ]);

  return (
    <div className="blog-page container mx-auto px-4 py-8">
      {/* Section 1 : Mes catégories favorites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Mes catégories favorites</h2>
        {userId ? (
          <BlogCatTagManager
            mode="categories"
            items={favoriteCategories}
            userId={userId}
            editable={false}
          />
        ) : (
          <p className="text-gray-500">
            <Link href="/login" className="text-blue-600 underline">
              Connectez-vous
            </Link>{" "}
            pour voir vos catégories favorites.
          </p>
        )}
      </section>

      {/* Section 2 : Article à la une */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Article à la une</h2>
        {featuredPost ? (
          <CardPost
            post={featuredPost}
            showActions
            onLikeToggle={async () => {
              "use server";
              // Implémenter le like via une Server Action dédiée
            }}
          />
        ) : (
          <p className="text-gray-500">
            Aucun article à la une pour le moment.
          </p>
        )}
      </section>

      {/* Section 3 : Articles suggérés */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Articles suggérés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedPosts.map((post) => (
            <CardPost
              key={post.id}
              post={post}
              variant="compact"
              showActions={false}
            />
          ))}
        </div>
      </section>

      {/* Section 4 : Mode d'emploi */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Mode d'emploi</h2>
        {tutorialPost ? (
          <div>
            <CardPost post={tutorialPost} showActions={false} />
            <div className="mt-4">
              <FormResponse
                postId={tutorialPost.id}
                parentId={null}
                placeholder="Poser une question sur le mode d'emploi..."
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500">
            Consultez notre{" "}
            <Link href="/blog/HowToUseBlog" className="text-blue-600 underline">
              guide complet
            </Link>{" "}
            pour débuter.
          </p>
        )}
      </section>

      {/* Section 5 : Gestion des catégories/tags et ajout de post */}
      <section className="mb-12 border-t pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-3">Ajouter un article</h3>
            {userId ? (
              <AddPostModal userId={userId} />
            ) : (
              <p className="text-gray-500">
                <Link href="/login" className="text-blue-600 underline">
                  Connectez-vous
                </Link>{" "}
                pour publier un article.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Section 6 : Mes articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Mes articles</h2>
        {userId ? (
          userPosts.length > 0 ? (
            <div className="space-y-6">
              {userPosts.map((post) => (
                <CardPost
                  key={post.id}
                  post={post}
                  showActions
                  showEditDelete
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Vous n'avez pas encore publié d'article.{" "}
              {/* Lien vers le bouton d'ouverture de la modale */}
              <Link href="#add-post-button" className="text-blue-600 underline">
                Créez votre premier post
              </Link>
            </p>
          )
        ) : (
          <p className="text-gray-500">
            <Link href="/auth/signin" className="text-blue-600 underline">
              Connectez-vous
            </Link>{" "}
            pour voir vos articles.
          </p>
        )}
      </section>
    </div>
  );
}
