import React from "react";

export default function NavTool() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-10">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-600">NAV TOOLS</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Schéma de navigation (menu / sous-menu)
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Champs principaux : id, label, href, order, parentId, allowedRoles,
            isVisible.
          </p>
        </header>

        <div className="mt-6 grid gap-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Champs</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>id: identifiant unique</li>
              <li>label: texte affiché</li>
              <li>href: route (optionnelle si item “groupe”)</li>
              <li>order: tri entre frères</li>
              <li>parentId: null = niveau 1, sinon sous-menu</li>
              <li>allowedRoles: rôles autorisés</li>
              <li>isVisible: switch global on/off</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Prisma schema
            </h2>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-50">
              <code>{`model NavItem {
  id           String   @id @default(cuid())
  label        String
  href         String?
  order        Int      @default(0)

  // Roles autorisés (Postgres/CockroachDB seulement)
  allowedRoles String[]  // ex: ["admin","dev","client","pro","public","user"]

  isVisible    Boolean  @default(true)

  parentId     String?
  parent       NavItem?  @relation("NavTree", fields: [parentId], references: [id], onDelete: Cascade)
  children     NavItem[] @relation("NavTree")

  @@index([parentId, order])
}`}</code>
            </pre>
          </article>
        </div>
      </section>
    </main>
  );
}
