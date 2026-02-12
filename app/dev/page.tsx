//@/app/dev/page.tsx
import React from "react";

type Persona = {
  key: "visiteur" | "pro" | "developpeur" | "client";
  title: string;
  goal: string;
  bullets: string[];
};

const personas: Persona[] = [
  {
    key: "visiteur",
    title: "Visiteur",
    goal: "Trouver des infos rapidement.",
    bullets: [
      "Voir l’offre et les tarifs",
      "Comprendre le concept",
      "Accéder aux coordonnées",
    ],
  },
  {
    key: "pro",
    title: "Pro",
    goal: "Créer et administrer mon activité + site.",
    bullets: [
      "Gérer catalogue / menus",
      "Gérer commandes",
      "Gérer pages (SEO, contenu)",
    ],
  },
  {
    key: "developpeur",
    title: "Développeur",
    goal: "Centraliser specs (features, DB, tools).",
    bullets: ["User stories", "Schéma DB", "Backlog & décisions techniques"],
  },
  {
    key: "client",
    title: "Client",
    goal: "Commander simplement.",
    bullets: ["Composer un menu", "Payer", "Suivre la commande"],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
      <header className="mb-4">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Fond gradient + glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
        {/* Grille légère */}
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Dev</Badge>
            <Badge>Backlog</Badge>
            <Badge>DB</Badge>
            <Badge>Tools</Badge>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Dev workspace — user stories, features, DB, outils
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Une page “cockpit” pour cadrer les personas, formaliser la base de
            données, et lister les outils clés (commande fréquente,
            configurateur de menu).
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Personas */}
          <div className="lg:col-span-2">
            <Card
              title="Personas & besoins"
              subtitle="Visiteur, Pro, Développeur, Client — objectifs + user stories."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {personas.map((p) => (
                  <div
                    key={p.key}
                    className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold">{p.title}</h3>
                        <p className="mt-1 text-xs text-white/70">{p.goal}</p>
                      </div>
                      <span className="rounded-lg bg-white/10 px-2 py-1 text-[11px] text-white/80">
                        {p.key}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-sm text-white/85">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                          <span className="text-[13px] leading-5">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* DB */}
          <div className="lg:col-span-1">
            <Card title="DB" subtitle="Entités à modéliser (starter list).">
              <ul className="space-y-2 text-[13px] text-white/85">
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="font-medium">Core</div>
                  <div className="mt-1 text-white/70">
                    User, Role, Business, Location, OpeningHours
                  </div>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="font-medium">Catalogue</div>
                  <div className="mt-1 text-white/70">
                    Product, Category, Modifier, ModifierOption, Price
                  </div>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="font-medium">Commandes</div>
                  <div className="mt-1 text-white/70">
                    Cart, Order, OrderItem, Payment, Delivery/Pickup
                  </div>
                </li>
              </ul>

              <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-xs text-cyan-50">
                Tip: garde “Modifier/Options” génériques pour supporter un
                configurateur de menu (taille, sauces, suppléments, etc.).
              </div>
            </Card>
          </div>

          {/* Tools */}
          <div className="lg:col-span-3">
            <Card title="Tools" subtitle="Fonctions produit à forte valeur.">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-semibold">Commande fréquente</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Recommander en 1 clic, suggestions basées sur l’historique,
                    panier pré-rempli.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge>UX</Badge>
                    <Badge>Conversion</Badge>
                    <Badge>Historique</Badge>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/15 to-cyan-400/10 p-4">
                  <h3 className="text-sm font-semibold">
                    Configurateur de menu de navigation
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    onglet et menue en cascade
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <footer className="mt-10 text-xs text-white/50">
          UI style: cards + grilles responsive (pattern dashboard), facile à
          adapter avec shadcn/ui + Tailwind.
        </footer>
      </div>
    </main>
  );
}
