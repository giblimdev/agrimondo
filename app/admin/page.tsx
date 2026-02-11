import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 font-sans">
      {/* SECTION HERO – Design moderne et coloré */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-emerald-600 text-white">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Ecomundo
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-amber-50 sm:text-2xl">
            Habitat collectif, résilient et intégré. <br />
            <span className="font-semibold italic">
              « Pas bio, pas vegan, mais des outils responsables pour une
              prospérité respectueuse des écosystèmes. »
            </span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
              🌱 Autonomie
            </span>
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
              🤝 Entraide
            </span>
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
              📈 Stabilité financière
            </span>
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
              🏛️ Intégration à la cité
            </span>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full text-amber-50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>

      {/* SECTION MANIFESTE – Texte structuré détaillant le projet */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Le manifeste d’Ecomundo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une communauté intentionnelle qui conjugue efficacité économique,
            profondeur culturelle et régénération des écosystèmes.
          </p>
        </div>

        {/* 10 piliers thématiques (catégories) */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Vision */}
          <ManifestCard
            title="🧭 Vision"
            color="from-amber-500 to-orange-500"
            items={[
              "Identité commune & récit fédérateur",
              "Autonomie alimentaire et énergétique",
              "Recherche de profits éthiques",
              "Intégration sociale et économique locale",
            ]}
          />
          {/* Culture */}
          <ManifestCard
            title="📜 Culture"
            color="from-purple-500 to-pink-500"
            items={[
              "Transmission des rites et mémoires",
              "Symbolisme et langage initiatique",
              "Cérémonies civiles et spirituelles",
              "Valeurs traditionnelles (responsabilité, respect, mesure)",
            ]}
          />
          {/* Spiritualité */}
          <ManifestCard
            title="🕊️ Spiritualité"
            color="from-indigo-500 to-blue-500"
            items={[
              "Liberté de croyance",
              "Chants méditatifs (Taizé)",
              "Rituels communautaires (chaînes d’union, agapes)",
              "Quête de sens partagée",
            ]}
          />
          {/* Gouvernance */}
          <ManifestCard
            title="⚖️ Gouvernance"
            color="from-slate-600 to-gray-700"
            items={[
              "Travail participatif et rotations",
              "Prise de décision transparente",
              "Liens avec les institutions locales",
              "Médiation des conflits",
            ]}
          />
          {/* Infrastructure */}
          <ManifestCard
            title="🏡 Infrastructure"
            color="from-stone-600 to-amber-800"
            items={[
              "Logements confortables et durables",
              "Espaces communs (ateliers, cuisine, stockage)",
              "Production locale d'énergie",
              "Gestion sobre de l'eau et de l'électricité",
            ]}
          />
          {/* Écologie */}
          <ManifestCard
            title="🌍 Écologie"
            color="from-emerald-500 to-teal-500"
            items={[
              "Agriculture régénérative, sol vivant",
              "Gestion des déchets : réduction, compostage",
              "Recyclage et économie circulaire",
              "Résilience alimentaire et énergétique",
            ]}
          />
          {/* Économie */}
          <ManifestCard
            title="💶 Économie"
            color="from-yellow-500 to-amber-600"
            items={[
              "SEL (Système d'échange local)",
              "Production & vente en circuits courts",
              "Mise en commun des ressources",
              "Gestion financière transparente",
            ]}
          />
          {/* Social */}
          <ManifestCard
            title="👥 Social"
            color="from-rose-500 to-red-500"
            items={[
              "Mixité des âges et des parcours",
              "Soutien à l'enfance et à l'éducation",
              "Communication claire et écoute",
              "Réseaux d'entraide et partenariats",
            ]}
          />
          {/* Santé */}
          <ManifestCard
            title="❤️ Santé"
            color="from-pink-500 to-rose-500"
            items={[
              "Alimentation saine, locale et résiliente",
              "Qualité de l'air et espaces de nature",
              "Activité physique et sommeil réparateur",
              "Bien-être émotionnel",
            ]}
          />
        </div>

        {/* Les six dimensions de l'humain */}
        <div className="mt-32">
          <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Six dimensions de l’humain
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Une approche holistique qui place la personne au cœur du collectif.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            <DimensionCard
              title="Physique"
              emoji="💪"
              color="bg-blue-100 text-blue-800 border-blue-200"
            />
            <DimensionCard
              title="Émotionnelle"
              emoji="🧘"
              color="bg-amber-100 text-amber-800 border-amber-200"
            />
            <DimensionCard
              title="Intellectuelle"
              emoji="📚"
              color="bg-green-100 text-green-800 border-green-200"
            />
            <DimensionCard
              title="Relationnelle"
              emoji="🤝"
              color="bg-purple-100 text-purple-800 border-purple-200"
            />
            <DimensionCard
              title="Sens de la vie"
              emoji="✨"
              color="bg-indigo-100 text-indigo-800 border-indigo-200"
            />
            <DimensionCard
              title="Action"
              emoji="⚡"
              color="bg-rose-100 text-rose-800 border-rose-200"
            />
          </div>
        </div>

        {/* Citation / État d'esprit */}
        <div className="relative mt-32 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-emerald-100 p-8 shadow-lg sm:p-12">
          <blockquote className="relative text-xl italic leading-relaxed text-gray-800">
            « Nous ne cherchons ni la rupture totale ni l’autarcie, mais une
            prospérité collective qui régénère les liens entre les humains et la
            terre. Ecomundo est une ferme‑laboratoire, un lieu de transmission
            et une entreprise responsable. »
          </blockquote>
          <p className="mt-4 text-right font-semibold text-gray-700">
            — extrait du pré‑manifeste (esquisse)
          </p>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

// Composant pour chaque pilier du manifeste
const ManifestCard = ({
  title,
  color,
  items,
}: {
  title: string;
  color: string;
  items: string[];
}) => (
  <div
    className={`group relative rounded-2xl bg-gradient-to-br ${color} p-1 shadow-xl transition-all hover:scale-[1.02]`}
  >
    <div className="h-full rounded-xl bg-white/90 p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Composant pour une dimension
const DimensionCard = ({
  title,
  emoji,
  color,
}: {
  title: string;
  emoji: string;
  color: string;
}) => (
  <div
    className={`flex flex-col items-center rounded-xl border p-5 text-center shadow-sm transition hover:shadow-md ${color}`}
  >
    <span className="text-3xl">{emoji}</span>
    <span className="mt-2 text-sm font-semibold">{title}</span>
  </div>
);
