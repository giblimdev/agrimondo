// /app/how-to-use/page.tsx
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import Link from "next/link";

// Composants blog réutilisables
import FormResponse from "@/app/blog/FormResponse";
import { CardPost } from "@/app/blog/CardPost";

// Pour récupérer un article d'exemple (le cas échéant)
import { getPostBySlug } from "@/lib/actions/posts";

export default async function HowToUsePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;

  // Optionnel : récupérer un article "mode d'emploi" déjà existant
  const tutorialPost = await getPostBySlug("mode-d-emploi");
  const existingTutorial = tutorialPost.success ? tutorialPost.post : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* En-tête */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">📘 Mode d'emploi du blog</h1>
        <p className="text-lg text-gray-600">
          Apprenez à utiliser toutes les fonctionnalités du blog •
          <Link href="/blog" className="text-blue-600 ml-2 underline">
            Retour au blog
          </Link>
        </p>
      </header>

      {/* Section rapide : connexion */}
      <section className="mb-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
          🔐 1. Connexion / inscription
        </h2>
        <p className="mb-4">
          Pour interagir (commenter, publier, gérer vos catégories favorites),
          vous devez être connecté. Cliquez sur <strong>Se connecter</strong> en
          haut à droite.
        </p>
        {!userId && (
          <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800">
            ⚠️ Vous n'êtes pas connecté – certaines fonctionnalités seront
            masquées.
          </div>
        )}
      </section>

      {/* Grille de fonctionnalités */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Pour les lecteurs */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            👁️ Pour les lecteurs
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <strong>Article à la une :</strong> mis en avant par l'équipe.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <strong>Articles suggérés :</strong> sélection automatique basée
              sur les publications récentes.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <strong>Catégories favorites :</strong> apparaissent dès que vous
              commentez ou publiez dans une catégorie.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <strong>Répondre :</strong> utilisez le formulaire en bas de
              chaque article.
              <div className="mt-2 w-full">
                <FormResponse
                  postId="exemple-post-id"
                  parentId={null}
                  placeholder="Exemple : Posez une question..."
                />
              </div>
            </li>
          </ul>
        </div>

        {/* Pour les auteurs */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            ✍️ Pour les auteurs
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-500 text-xl">•</span>
              <strong>Ajouter un article :</strong> formulaire dédié (titre,
              slug, contenu, image…).
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 text-xl">•</span>
              <strong>Gérer les catégories :</strong> créez des catégories
              hiérarchiques.
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 text-xl">•</span>
              <strong>Gérer les tags :</strong> ajoutez des mots‑clés à vos
              articles.
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 text-xl">•</span>
              <strong>Éditer / supprimer :</strong> chaque article affiche des
              boutons d'action pour l'auteur.
            </li>
          </ul>
        </div>
      </div>

      {/* Section détaillée : étapes pour publier */}
      <section className="mb-12 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🚀 2. Publier votre premier article
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-800">
          <li>Connectez-vous avec votre compte.</li>
          <li>
            Rendez-vous sur la{" "}
            <Link href="/blog" className="text-blue-600 underline">
              page principale du blog
            </Link>
            .
          </li>
          <li>
            Dans la section <strong>« Ajouter un article »</strong>, remplissez
            le formulaire.
          </li>
          <li>
            Ajoutez des catégories et des tags (vous pouvez en créer de nouveaux
            directement).
          </li>
          <li>
            Choisissez un statut : <code>BROUILLON</code> ou <code>PUBLIÉ</code>
            .
          </li>
          <li>
            Validez – votre article apparaîtra dans la liste{" "}
            <strong>« Mes articles »</strong>.
          </li>
        </ol>
        <div className="mt-6 p-4 bg-blue-100 rounded-lg text-blue-800">
          💡 Astuce : le champ <strong>slug</strong> est généré automatiquement
          à partir du titre, mais vous pouvez le personnaliser.
        </div>
      </section>

      {/* Section catégories / tags */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🏷️ 3. Catégories et tags
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Catégories</h3>
            <p className="text-gray-600 mb-3">
              Elles sont hiérarchiques : vous pouvez créer une sous‑catégorie en
              choisissant un parent. Chaque article peut avoir plusieurs
              catégories.
            </p>
            <div className="bg-purple-50 p-3 rounded text-sm">
              <strong>Exemple :</strong> Technologie → Programmation → Next.js
            </div>
          </div>
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Tags</h3>
            <p className="text-gray-600 mb-3">
              Mots‑clés libres, non hiérarchiques. Idéal pour le référencement
              et le filtrage.
            </p>
            <div className="bg-purple-50 p-3 rounded text-sm">
              <strong>Exemple :</strong> #tutoriel, #débutant, #react
            </div>
          </div>
        </div>
      </section>

      {/* Section interactions avancées */}
      <section className="mb-12 bg-linear-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          💬 4. Interagir avec les articles
        </h2>
        <div className="space-y-4">
          <p>
            <strong>Liker :</strong> chaque article affiche un bouton ❤️. Vous
            ne pouvez liker qu'une fois.
          </p>
          <p>
            <strong>Commenter / répondre :</strong> utilisez le formulaire de
            réponse. Les réponses peuvent être imbriquées (répondre à une
            réponse). Le champ <code>parentId</code> gère la hiérarchie.
          </p>
          <p>
            <strong>Modération :</strong> les auteurs peuvent modifier ou
            supprimer leurs propres articles et réponses.
          </p>
        </div>
        {existingTutorial && (
          <div className="mt-6">
            <p className="font-medium mb-2">📌 Article dédié :</p>
            <CardPost
              post={existingTutorial}
              showActions={false}
              variant="compact"
            />
          </div>
        )}
      </section>

      {/* Section dépannage */}
      <section className="mb-12 p-6 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          ❓ 5. Questions fréquentes
        </h2>
        <dl className="space-y-3">
          <div>
            <dt className="font-semibold">
              Pourquoi je ne vois pas le formulaire d'ajout ?
            </dt>
            <dd className="text-gray-700">
              Vous devez être connecté et votre compte doit avoir les droits de
              publication.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">
              Comment modifier une catégorie ou un tag ?
            </dt>
            <dd className="text-gray-700">
              Utilisez le gestionnaire dans la section « Gestion des catégories
              et tags ».
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Puis‑je supprimer mes réponses ?</dt>
            <dd className="text-gray-700">
              Oui, un bouton apparaît à côté de vos propres commentaires.
            </dd>
          </div>
        </dl>
      </section>

      {/* Bouton de retour */}
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          ← Commencer à lire / écrire
        </Link>
      </div>
    </div>
  );
}
