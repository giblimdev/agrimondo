//@/app/blog/page.tsx
/*
page principal du blog.
j'utilise better auth
les actions de CRUD des post sont dans lib action
utilisera des composant Formpost, BlogCatTagManager, CardPost,  FormResponse, avec des props correct.

 */

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
import MyPost from "./MyPost";

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
          <MyPost userId={userId} initialPublishedPosts={userPosts} />
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
