// @/app/public/elevage/oeufs/page.tsx
// 3 sections: Colombie, Europe, Correspondance (sans onglets)

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { oeufColombie, oeufEurope } from "./oeufData";

function formatWeightRange(min?: number, max?: number) {
  if (min != null && max != null) return `${min}–${max} g`;
  if (min != null) return `≥ ${min} g`;
  if (max != null) return `≤ ${max} g`;
  return "—";
}

function formatDiameter(d?: number) {
  return d != null ? `~${d} cm` : "—";
}

function formatEuEquivalent(eu?: string[]) {
  return eu?.length ? eu.join(", ") : "—";
}

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6">
      <section className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-lg shadow-gray-100/50 backdrop-blur-sm sm:p-8">
        {/* En-tête */}
        <div className="mb-8 border-b border-gray-100 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Classification et Réglementation des Œufs en Colombie
              </h1>
              <p className="mt-2 text-gray-600">
                Guide complet des normes et pratiques du marché colombien
              </p>
            </div>
            <div className="hidden rounded-full bg-gradient-to-r from-amber-400 to-orange-400 p-3 sm:block">
              <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Section 1: Cadre Réglementaire */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            1. Cadre Réglementaire : Deux Systèmes Distincts
          </h2>

          {/* Carte Obligatoire */}
          <div className="mb-6 overflow-hidden rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white">
            <div className="border-b border-green-100 bg-green-50/80 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-green-800">
                  A. Réglementation Sanitaire OBLIGATOIRE
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-700">
                    Entités responsables :
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>
                        <strong>ICA</strong> (Instituto Colombiano Agropecuario)
                        : Contrôle sanitaire et registre des établissements
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>
                        <strong>Ministerio de Salud</strong> : Étiquetage
                        nutritionnel et information au consommateur
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-700">
                    Informations clés :
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span>
                        <strong>Base légale :</strong> Base légale : Resolución
                        3750 de 2023 (remplaçant la Resolución 2115 de 2007)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span>
                        <strong>Objectif :</strong> Salubrité, traçabilité et
                        information minimale
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Référence */}
              <div className="mt-6 rounded-lg bg-white p-4 border border-gray-100">
                <h4 className="mb-2 font-medium text-gray-700">
                  Référence officielle :
                </h4>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    Ministerio de Salud y Protección Social. (2023).{" "}
                    <em>Resolución 3750 de 2023.</em>
                  </p>
                  <a
                    href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3750-de-2023.pdf"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Accéder au document officiel
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carte Volontaire */}
          <div className="overflow-hidden rounded-xl border border-blue-100 bg-linear-to-br from-blue-50 to-white">
            <div className="border-b border-blue-100 bg-blue-50/80 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-800">
                  B. Norme Technique Volontaire (Qualité Supérieure)
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-700">
                    Caractéristiques :
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        <strong>Norme :</strong> NTC 1240 (ICONTEC)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        <strong>Titre :</strong> "Alimentos para humanos. Huevos
                        de gallina para mesa. Clasificación."
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-700">Statut :</h4>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1">
                    <span className="text-sm font-medium text-blue-700">
                      Application volontaire
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Norme technique de référence nationale, non imposée par la
                    loi
                  </p>
                </div>
              </div>

              {/* Référence */}
              <div className="mt-6 rounded-lg bg-white p-4 border border-gray-100">
                <h4 className="mb-2 font-medium text-gray-700">
                  Référence officielle :
                </h4>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    Instituto Colombiano de Normas Técnicas y Certificación
                    (ICONTEC).{" "}
                    <em>
                      NTC 1240: Alimentos para humanos. Huevos de gallina para
                      mesa. Clasificación.
                    </em>
                  </p>
                  <a
                    href="https://tienda.icontec.org/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Disponible à l'achat sur ICONTEC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Classification par Poids */}
        <div className="mb-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            2. Classification par Poids (Obligatoire sur tout emballage)
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-linear-to-r from-gray-50 to-gray-100/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Classe (Lettre)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Désignation Courante
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Poids Minimal par Œuf
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Représentation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      letter: "S",
                      name: "Pequeña",
                      weight: "Moins de 53 g",
                      color: "bg-blue-100 text-blue-800",
                    },
                    {
                      letter: "M",
                      name: "Mediana",
                      weight: "53 g à moins de 63 g",
                      color: "bg-green-100 text-green-800",
                    },
                    {
                      letter: "L",
                      name: "Grande",
                      weight: "63 g à moins de 70 g",
                      color: "bg-amber-100 text-amber-800",
                    },
                    {
                      letter: "XL",
                      name: "Extra Grande",
                      weight: "70 g ou plus",
                      color: "bg-orange-100 text-orange-800",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${item.color}`}
                        >
                          {item.letter}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.weight}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-gray-300 bg-white"></div>
                          <div
                            className={`h-3 rounded-full ${
                              index === 0
                                ? "w-8"
                                : index === 1
                                ? "w-12"
                                : index === 2
                                ? "w-16"
                                : "w-20"
                            } ${item.color.split(" ")[0]}`}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Note :</span> Les seuils exacts
                peuvent varier légèrement selon les producteurs. La NTC 1240
                définit des seuils légèrement différents (Jumbo ≥70g, XL ≥65g, L
                ≥60g, M ≥55g, S ≥50g).
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Catégories de Qualité */}
        <div className="mb-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            3. Catégories de Qualité NTC 1240 (Volontaire)
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                category: "AA",
                title: 'Qualité "Extra"',
                description:
                  "Fraîcheur maximale. Chambre à air ≤ 4 mm. Blanc ferme, jaune centré.",
                usage: "Vente au détail premium",
                color: "from-purple-500 to-pink-500",
                icon: "⭐",
              },
              {
                category: "A",
                title: 'Qualité "Primera"',
                description: "Bonne fraîcheur. Chambre à air ≤ 6-9 mm.",
                usage: "Vente au détail courante",
                color: "from-blue-500 to-cyan-500",
                icon: "✓",
              },
              {
                category: "B",
                title: 'Qualité "Segunda"',
                description:
                  "Fraîcheur acceptable pour la consommation directe.",
                usage: "Industrie agroalimentaire",
                color: "from-gray-500 to-gray-700",
                icon: "⚙️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${item.color} px-6 py-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {item.category}
                        </div>
                        <div className="text-sm font-medium text-white/90">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-700">{item.description}</p>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="text-sm font-medium text-gray-600">
                      Usage typique :
                    </div>
                    <div className="text-sm text-gray-800">{item.usage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Étiquetage Obligatoire */}
        <div className="mb-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            4. Étiquetage Obligatoire Minimum (Resolución 3750 de 2023)
          </h2>

          <div className="rounded-xl border border-gray-200 bg-linear-to-br from-white to-gray-50/50 p-6">
            <p className="mb-6 text-gray-700">
              Tout emballage doit contenir{" "}
              <span className="font-semibold text-gray-900">au minimum</span> :
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Dénomination : "Huevos de mesa para consumo humano"',
                'Classe de poids (ex: "M - Mediana" ou "L - Grande")',
                "Nombre d'œufs contenus",
                "Date de péremption (Fecha de vencimiento)",
                "Identification du producteur/conditionneur avec Registro ICA",
                'Conditions de conservation ("Consérvese en refrigeración")',
                "Tableau d'information nutritionnelle",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/30 p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Autres Mentions */}
        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            5. Autres Mentions Courantes (Non réglementées)
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-medium text-gray-900">
                Allégations commerciales volontaires
              </h3>
              <div className="space-y-3">
                {["Libre de jaula", "Criadas en piso", "Camperas"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50/30 p-3"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{item}</div>
                        <div className="text-xs text-gray-600">
                          Aucune définition légale colombienne
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-medium text-gray-900">
                Couleur de la coquille
              </h3>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-100 to-amber-300 border-2 border-amber-200"></div>
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-800 to-amber-900 border-2 border-amber-700"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">=</div>
                  <div className="text-sm text-gray-600">
                    Même qualité nutritionnelle
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  La couleur (blanche ou marrón/brune){" "}
                  <span className="font-semibold">n'a aucune incidence</span>{" "}
                  sur la qualité nutritionnelle. Elle dépend uniquement de la
                  race de la poule.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note de bas de page */}
        <div className="mt-8 rounded-lg bg-linear-to-r from-gray-50 to-gray-100/50 p-5">
          <div className="flex items-start gap-3">
            <svg
              className="h-5 w-5 text-gray-500 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Dernière vérification :</span>{" "}
                Mars 2024. Les informations sont basées sur les documents
                officiels du Ministerio de Salud et de l'ICONTEC. Les pratiques
                du marché peuvent varier selon les producteurs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h1 className="text-2xl font-semibold">
          <span className="mr-2">🥚</span>
          Calibres d’œufs — Colombie & Europe
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Deux normes (Colombie NTC 1240 + UE) et une correspondance indicative
          par poids.
        </p>
      </div>
      <div className="space-y-6">
        {/* 1) Colombie */}
        <section className="rounded-xl border bg-card p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{oeufColombie.title}</h2>
            {oeufColombie.subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {oeufColombie.subtitle}
              </p>
            ) : null}
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-35">Calibre</TableHead>
                  <TableHead>Poids (g)</TableHead>
                  <TableHead>Diamètre approx.</TableHead>
                  <TableHead>Équiv. UE (info)</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {oeufColombie.rows.map((row) => (
                  <TableRow key={row.code}>
                    <TableCell className="font-medium">
                      {row.code}{" "}
                      <span className="ml-2 text-xs text-muted-foreground">
                        {row.label}
                      </span>
                    </TableCell>
                    <TableCell>
                      {formatWeightRange(row.weightMinG, row.weightMaxG)}
                    </TableCell>
                    <TableCell>
                      {formatDiameter(row.diameterApproxCm)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatEuEquivalent(row.euEquivalent)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.notes?.length ? row.notes.join(" • ") : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 2) Europe */}
        <section className="rounded-xl border bg-card p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{oeufEurope.title}</h2>
            {oeufEurope.subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {oeufEurope.subtitle}
              </p>
            ) : null}
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-35">Calibre</TableHead>
                  <TableHead>Poids (g)</TableHead>
                  <TableHead>Diamètre approx.</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {oeufEurope.rows.map((row) => (
                  <TableRow key={row.code}>
                    <TableCell className="font-medium">
                      {row.code}{" "}
                      <span className="ml-2 text-xs text-muted-foreground">
                        {row.label}
                      </span>
                    </TableCell>
                    <TableCell>
                      {formatWeightRange(row.weightMinG, row.weightMaxG)}
                    </TableCell>
                    <TableCell>
                      {formatDiameter(row.diameterApproxCm)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.notes?.length ? row.notes.join(" • ") : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 3) Correspondance */}
        <section className="rounded-xl border bg-card p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Correspondance Colombie → UE (indicatif)
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Basée sur les seuils UE par poids; certains calibres Colombie
              chevauchent 2 tailles UE.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">Colombie</TableHead>
                  <TableHead>Poids (g)</TableHead>
                  <TableHead>Équivalent(s) UE</TableHead>
                  <TableHead>Détail (chevauchement)</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {oeufColombie.rows.map((row) => {
                  const eu = row.euEquivalent ?? [];
                  const overlap =
                    eu.length <= 1
                      ? "—"
                      : "Chevauche un seuil UE (ex: 63g ou 73g) → possible double classement.";

                  return (
                    <TableRow key={row.code}>
                      <TableCell className="font-medium">
                        {row.code}{" "}
                        <span className="ml-2 text-xs text-muted-foreground">
                          {row.label}
                        </span>
                      </TableCell>
                      <TableCell>
                        {formatWeightRange(row.weightMinG, row.weightMaxG)}
                      </TableCell>
                      <TableCell>{formatEuEquivalent(eu)}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {overlap}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
      <div>
        🎯 <h1>Facteurs Influençant la Taille des Œufs</h1>
        1. Facteurs Génétiques • Souche Lohmann : Œufs plus lourds • Souche Isa
        : Bon équilibre taille/coquille • Hy-Line : Constance dans le temps 2.
        Facteurs Nutritionnels • Acides aminés : Méthionine et lysine pour la
        taille • Énergie : Niveau suffisant pour production • Acides gras :
        Impact sur poids jaune 3. Facteurs de Gestion • Poids corporel à
        maturité : Poulette lourde = œufs plus gros • Photopériode :
        Augmentation lumière stimule croissance œuf • Température : Chaud → œufs
        plus petits
      </div>
      <div>
        <h1> ⚖️ Poids Moyen par Composant</h1>
        <ul>
          <li>• Coquille : 10%</li>
          <li>• Blanc : 58%</li>
          <li>• Jaune : 28%</li>
          <li>• Membranes : 1%</li>
        </ul>
      </div>
    </div>
  );
}
/*ajoute une 1) norme colombienne
En Colombie, la classification des œufs de consommation ("huevos de mesa") est régie par la Norme Technique Colombienne NTC 4371. Cette norme définit deux systèmes de classification principaux : par catégorie de qualité et par poids.

Voici le détail exact conforme à la réglementation colombienne :

1. Classification par CATÉGORIE DE QUALITÉ (Basée sur la fraîcheur et l'état intérieur/exérieur)
Cette classification utilise des lettres et est déterminée par des critères stricts (qualité de la coquille, chambre à air, hauteur du blanc, etc.).

Categorie AAA (ou Extra) : Qualité supérieure. Œufs très frais. La chambre à air ne dépasse pas 4 mm de profondeur. Le blanc est ferme et haut. C'est la catégorie la plus fraîche sur le marché de détail.

Categorie AA (ou Primera) : Bonne qualité. Œufs frais. La chambre à air mesure entre 4 et 6 mm. Le blanc est encore assez ferme.

Categorie A (ou Segunda) : Qualité standard acceptable pour la consommation. Fraîcheur moindre. La chambre à air peut aller jusqu'à 9 mm.

Categorie B (o Tercera) : Qualité inférieure. Souvent destinée à l'industrie alimentaire (pâtisseries, pâtes, etc.) et non à la vente directe au consommateur.

2. Classification par CLASSE DE POIDS (Poids net par œuf)
Cette classification utilise des chiffres romains et est indépendante de la qualité.

Classe VII (o Jumbo) : 70 g ou plus

Classe VI (o Extra Grande - XL) : De 65 g à moins de 70 g

Classe V (o Grande - L) : De 60 g à moins de 65 g

Classe IV (o Mediana - M) : De 55 g à moins de 60 g

Classe III (o Pequeña - S) : De 50 g à moins de 55 g

Classe II : De 45 g à moins de 50 g (peu commune en vente directe)

Classe I : Moins de 45 g (peu commune en vente directe)

Comment lire une boîte d'œufs en Colombie ?
Un emballage conforme doit indiquer, selon la Resolución 2115 de 2007 (étiquetage nutritionnel) et les normes de l'ICA (Instituto Colombiano Agropecuario) :

Dénomination : "Huevos de mesa para consumo humano".

Catégorie de qualité (ex: AA) et Classe de poids (ex: VI - XL).

Nombre d'œufs.

Date d'expiration ou Date de consommation recommandée.

Identification du producteur/conditionneur (registre ICA).

Conditions de conservation ("Consérvese en refrigeración" est courant).

Information nutritionnelle.

À propos de la couleur et du type d'élevage
Couleur : Comme indiqué précédemment, elle n'est pas liée à la qualité nutritionnelle. Les races communes en Colombie (ISA Brown, Hy-Line) pondent des œufs bruns/rousse, d'où leur prédominance sur le marché.

Type d'élevage : Les mentions "libre de jaula", "criadas en piso" ou "camperas" ne font pas partie de la classification officielle NTC 4371. Elles relèvent de déclarations commerciales volontaires. Il n'existe pas encore de réglementation stricte définissant ces termes, contrairement à l'Union Européenne.

En résumé et pour corriger/affiner ma précédente réponse :
Il existe bien deux systèmes parallèles : la catégorie (lettre) pour la fraîcheur/qualité, et la classe (chiffre romain) pour le poids.

Les seuils de poids officiels sont légèrement différents et plus détaillés (classes I à VII).

La mention la plus courante sur les boîtes est une combinaison des deux, par exemple : "Huevos Tipo AA - Clase VI", ce qui signifie des œufs de bonne fraîcheur et de poids "Extra Grande".

Je vous remercie de votre vigilance qui permet d'apporter une information exacte et technique. Pour toute référence ultérieure, les documents clés sont la NTC 4371 et les résolutions de l'ICA. */
