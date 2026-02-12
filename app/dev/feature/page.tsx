import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-sm font-medium text-slate-600">
            Atelier produit / UI
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Roadmap de conception
          </h1>
          <p className="mt-2 text-slate-600">
            Structurer les idées, cadrer les données, prototyper, puis
            implémenter le CRUD.
          </p>
        </header>

        <div className="m-5">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm m-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-900">
                Brainstorming
              </h2>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                Étape 1
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Lister les besoins, les écrans, et les actions principales. <br />
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm m-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-900">
                Architecture
              </h2>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                Étape 2
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Présentation de la table (colonnes, types, relations,
              contraintes).
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm m-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-900">
                Données en dur
              </h2>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                MVP
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Prototyper avec un JSON local pour valider l’UI rapidement.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm m-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-900">
                CRUD feature
              </h2>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                Feature
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Créer, lire, modifier, supprimer avec validations et états UI.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
