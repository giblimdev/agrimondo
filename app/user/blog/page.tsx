import React from "react";
import CategoriesBlog from "./CategoriesBlog";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* HERO */}
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-medium text-slate-600">
            Blog pour les utilisateurs
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Articles multimédia: images, vidéos, extraits de code
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Un blog moderne pensé pour être rapide, lisible, et agréable à
            explorer sur mobile comme sur desktop.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/blog"
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Voir les articles
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              Images optimisées
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              Vidéo & audio
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              SEO prêt
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              Accessibilité
            </span>
          </div>
        </header>

        {/* FEATURES */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Ce que tu vas trouver
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Les piliers du blog: UX, multimédia, SEO, performance, back-office.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Expérience lecteur (UX)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Recherche + filtres (tags, catégories, auteur), pagination ou
                infinite scroll, états empty/loading, mode sombre,
                accessibilité.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Multimédia & interactif
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Images responsive + lazy-load, galeries, vidéos intégrées,
                embeds (GitHub, tweets), blocs “callout”, quiz/polls.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                SEO & discoverability
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Title/description, OpenGraph, canonical, données structurées,
                sitemap + RSS, URLs propres et maillage interne.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Performance web
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Rendu statique/ISR, cache/CDN, moins de JS côté client,
                chargement différé des blocs lourds (vidéo, charts).
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Back-office (édition & média)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Workflow brouillon → review → publié, planification, versioning,
                preview, media library (S3/Cloudinary).
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Extraits de code
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Blocs de code lisibles (highlight), bouton copier, titres,
                sections, table des matières automatique.
              </p>
            </article>
          </div>
        </section>

        {/* PREVIEW CONTENT TYPES */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Formats supportés
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Tu peux publier du texte, du média, et du code dans un même article.
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Image</p>
              <p className="mt-1 text-sm text-slate-600">
                Optimisée via le composant `next/image` (tailles adaptées,
                perf).
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Placeholder: ici tu mettras une cover, une galerie, etc.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Vidéo</p>
              <p className="mt-1 text-sm text-slate-600">
                Lecteur intégré, chargement différé, et fallback si la vidéo ne
                charge pas.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Placeholder: YouTube / Mux / Stream.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Code</p>
              <p className="mt-1 text-sm text-slate-600">
                Extraits propres avec bouton “copier”, parfait pour docs et
                tutos.
              </p>

              <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-50">
                <code>{`// Exemple
export default function Page() {
  return <div>Hello blog</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
      <div>
        <CategoriesBlog />
      </div>
    </main>
  );
}
