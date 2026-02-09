"use client";

import { useState } from "react";
import {
  Fish,
  Leaf,
  Droplets,
  Thermometer,
  Zap,
  Sun,
  Wind,
  Settings,
  ArrowRight,
  Clock,
  BarChart3,
  Shield,
  Recycle,
  TestTube,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function AquaponiePage() {
  const [activeTab, setActiveTab] = useState("presentation");

  const ecosystemElements = [
    {
      id: "poissons",
      title: "Les Poissons",
      icon: <Fish className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      description: "Producteurs de nutriments",
      details:
        "Les poissons produisent des déjections riches en ammoniaque, source principale de nutriments pour le système.",
      examples: ["Tilapia", "Carpes", "Perches", "Truites", "Poissons rouges"],
      role: "Producteur de déchets azotés",
      parameters: "Température: 20-30°C, pH: 6.5-7.5, O₂: >5 mg/L",
    },
    {
      id: "bacteries",
      title: "Les Bactéries",
      icon: <TestTube className="w-8 h-8" />,
      color: "from-amber-500 to-orange-400",
      description: "Transformateurs essentiels",
      details:
        "Les bactéries nitrifiantes transforment l'ammoniaque toxique en nitrites puis en nitrates assimilables par les plantes.",
      types: ["Nitrosomonas (NH₃ → NO₂)", "Nitrobacter (NO₂ → NO₃)"],
      role: "Cycle de l'azote",
      habitat: "Support de culture, biofiltre, racines",
    },
    {
      id: "plantes",
      title: "Les Plantes",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-emerald-500 to-green-400",
      description: "Filtres naturels",
      details:
        "Les plantes absorbent les nitrates pour leur croissance, purifiant ainsi l'eau qui retourne aux poissons.",
      examples: [
        "Laitues",
        "Basilic",
        "Tomates",
        "Fraises",
        "Herbes aromatiques",
      ],
      role: "Filtration biologique",
      besoins: "Lumière, nutriments, espace racinaire",
    },
    {
      id: "eau",
      title: "L'Eau",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-400",
      description: "Vecteur de nutriments",
      details:
        "L'eau circule en circuit fermé, transportant les nutriments des poissons vers les plantes et retournant purifiée.",
      caracteristiques: [
        "pH: 6.0-7.0 idéal",
        "Température stable",
        "Oxygénation constante",
      ],
      role: "Média de transport",
    },
  ];

  const systemTypes = [
    {
      name: "Système à marée (Flood and Drain)",
      description: "Le plus populaire pour les débutants",
      principe: "Inondation périodique des billes d'argile",
      avantages: [
        "Oxygénation racinaire excellente",
        "Simple à mettre en œuvre",
        "Économique",
      ],
      inconvénients: [
        "Nécessite une pompe de relevage",
        "Consommation électrique",
      ],
      image: "🌊",
    },
    {
      name: "Technique du film nutritif (NFT)",
      description: "Système commercial courant",
      principe: "Film d'eau mince circulant dans des gouttières",
      avantages: [
        "Économie d'eau maximale",
        "Croissance rapide",
        "Facile à automatiser",
      ],
      inconvénients: [
        "Sensible aux coupures électriques",
        "Racines peu soutenues",
      ],
      image: "💧",
    },
    {
      name: "Raft (Flotteur)",
      description: "Idéal pour les salades",
      principe: "Plantes flottant sur l'eau dans des panneaux de polystyrène",
      avantages: [
        "Très productif",
        "Maintenance facile",
        "Bon pour les légumes-feuilles",
      ],
      inconvénients: [
        "Nécessite un bassin profond",
        "Limité aux petites plantes",
      ],
      image: "🛶",
    },
    {
      name: "Système vertical",
      description: "Maximisation de l'espace",
      principe: "Tours ou colonnes de culture",
      avantages: ["Production maximale/m²", "Design compact", "Esthétique"],
      inconvénients: ["Complexité technique", "Éclairage inégal possible"],
      image: "📐",
    },
  ];

  const parameters = [
    {
      parameter: "pH",
      ideal: "6.5 - 7.0",
      importance: "Critique",
      impact:
        "Affecte la disponibilité des nutriments et la santé des bactéries",
      icon: <Thermometer />,
    },
    {
      parameter: "Température eau",
      ideal: "20°C - 25°C",
      importance: "Haute",
      impact: "Influence le métabolisme des poissons et l'activité bactérienne",
      icon: <Thermometer />,
    },
    {
      parameter: "Ammoniaque (NH₃)",
      ideal: "< 0.5 mg/L",
      importance: "Critique",
      impact: "Toxique pour les poissons à faible concentration",
      icon: <Shield />,
    },
    {
      parameter: "Nitrites (NO₂)",
      ideal: "< 1 mg/L",
      importance: "Critique",
      impact: "Toxique, signe d'un cycle incomplet",
      icon: <Shield />,
    },
    {
      parameter: "Nitrates (NO₃)",
      ideal: "5-150 mg/L",
      importance: "Moyenne",
      impact: "Nutriments pour les plantes, tolérance élevée des poissons",
      icon: <Leaf />,
    },
    {
      parameter: "Oxygène dissous",
      ideal: "> 5 mg/L",
      importance: "Haute",
      impact: "Essentiel pour poissons et racines",
      icon: <Wind />,
    },
  ];

  const advantages = [
    {
      title: "Économie d'eau",
      description: "90% d'économie par rapport à l'agriculture traditionnelle",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Production double",
      description: "Poissons ET plantes dans le même système",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Sans pesticides",
      description: "Écosystème naturellement équilibré",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Circuit fermé",
      description: "Recyclage permanent des nutriments",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Productivité",
      description: "Jusqu'à 10x plus productive au m²",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Écologique",
      description: "Zéro rejet dans l'environnement",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50">
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              L'Aquaponie
              <span className="block text-2xl md:text-3xl font-normal text-blue-100 mt-4">
                L'Agriculture du Futur
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Un écosystème circulaire qui combine aquaculture et hydroponie
              pour une production alimentaire durable
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab("presentation")}
                className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Découvrir le système
              </button>
              <button
                onClick={() => setActiveTab("avantages")}
                className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
              >
                Les avantages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {[
              { id: "presentation", label: "Présentation", icon: <Fish /> },
              { id: "elements", label: "Éléments clés", icon: <Leaf /> },
              {
                id: "systemes",
                label: "Types de systèmes",
                icon: <Settings />,
              },
              { id: "parametres", label: "Paramètres", icon: <Thermometer /> },
              { id: "avantages", label: "Avantages", icon: <TrendingUp /> },
              { id: "demarrer", label: "Démarrer", icon: <Zap /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Présentation */}
        {activeTab === "presentation" && (
          <div className="space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Qu'est-ce que l'Aquaponie ?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 text-lg mb-6">
                    L'<strong className="text-emerald-600">aquaponie</strong>{" "}
                    est une méthode de production alimentaire
                    <strong className="text-blue-600"> durable</strong> qui
                    combine l'
                    <strong className="text-blue-600">aquaculture</strong>
                    (élevage de poissons) et l'
                    <strong className="text-emerald-600">
                      hydroponie
                    </strong>{" "}
                    (culture de plantes hors-sol).
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Recycle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Écosystème circulaire
                        </h4>
                        <p className="text-gray-600">
                          Les déchets des poissons nourrissent les plantes qui
                          filtrent l'eau
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Circuit fermé
                        </h4>
                        <p className="text-gray-600">
                          90% d'économie d'eau par rapport à l'agriculture
                          traditionnelle
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Naturel et biologique
                        </h4>
                        <p className="text-gray-600">
                          Pas de pesticides ni d'engrais chimiques nécessaires
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      Le Cycle de l'Aquaponie
                    </h3>

                    <div className="relative h-64">
                      {/* Poissons */}
                      <div className="absolute left-4 top-1/4 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Fish className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-blue-600">
                          Poissons
                        </span>
                      </div>

                      {/* Flèche */}
                      <div className="absolute left-24 top-1/2 w-16 h-1 bg-blue-300"></div>
                      <div className="absolute left-36 top-1/2 transform -translate-y-1/2 text-blue-500">
                        →
                      </div>

                      {/* Bactéries */}
                      <div className="absolute left-40 top-1/4 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <TestTube className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-amber-600">
                          Bactéries
                        </span>
                      </div>

                      {/* Flèche */}
                      <div className="absolute left-56 top-1/2 w-16 h-1 bg-emerald-300"></div>
                      <div className="absolute left-64 top-1/2 transform -translate-y-1/2 text-emerald-500">
                        →
                      </div>

                      {/* Plantes */}
                      <div className="absolute right-4 top-1/4 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Leaf className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">
                          Plantes
                        </span>
                      </div>

                      {/* Flèche retour */}
                      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
                        <div className="text-center">
                          <div className="text-blue-500 mb-1">
                            ↓ Eau purifiée ↓
                          </div>
                          <div className="w-32 h-1 bg-cyan-300 mx-auto"></div>
                          <div className="text-cyan-600 text-sm mt-1">
                            Retour aux poissons
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center text-gray-600 text-sm">
                      <p>
                        Un écosystème parfaitement équilibré où chaque élément
                        soutient les autres
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Comment ça marche ?
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">1</div>
                  <h4 className="font-bold text-lg text-blue-600 mb-3">
                    Les poissons se nourrissent
                  </h4>
                  <p className="text-gray-600">
                    Ils produisent des déjections riches en ammoniaque (NH₃)
                    dans l'eau
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">2</div>
                  <h4 className="font-bold text-lg text-amber-600 mb-3">
                    Les bactéries transforment
                  </h4>
                  <p className="text-gray-600">
                    Les bactéries nitrifiantes convertissent NH₃ → NO₂ → NO₃
                    (nitrates)
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">3</div>
                  <h4 className="font-bold text-lg text-emerald-600 mb-3">
                    Les plantes filtrent
                  </h4>
                  <p className="text-gray-600">
                    Les plantes absorbent les nitrates, purifiant l'eau qui
                    retourne aux poissons
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Éléments clés */}
        {activeTab === "elements" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Les 4 Éléments Clés du Système
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {ecosystemElements.map((element) => (
                <div
                  key={element.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                >
                  <div
                    className={`bg-gradient-to-r ${element.color} p-6 text-white`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        {element.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{element.title}</h3>
                        <p className="text-white/90">{element.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{element.details}</p>

                    <div className="space-y-4">
                      {element.examples && (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            Exemples :
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {element.examples.map((example, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {element.types && (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Types de bactéries :
                          </h4>
                          <ul className="space-y-1 text-gray-600">
                            {element.types.map((type, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                {type}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Rôle</p>
                          <p className="font-semibold text-gray-800">
                            {element.role}
                          </p>
                        </div>

                        {(element.parameters || element.habitat) && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">
                              {element.parameters ? "Paramètres" : "Habitat"}
                            </p>
                            <p className="font-semibold text-gray-800">
                              {element.parameters || element.habitat}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Types de systèmes */}
        {activeTab === "systemes" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Types de Systèmes Aquaponiques
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {systemTypes.map((system, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-4xl mb-2">{system.image}</div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {system.name}
                        </h3>
                        <p className="text-gray-600">{system.description}</p>
                      </div>
                      <div className="text-3xl text-emerald-500 font-bold">
                        #{index + 1}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Principe :
                        </h4>
                        <p className="text-gray-600">{system.principe}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-green-600 mb-2">
                            Avantages
                          </h4>
                          <ul className="space-y-1">
                            {system.avantages.map((avantage, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  ✓
                                </div>
                                {avantage}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-amber-600 mb-2">
                            Limites
                          </h4>
                          <ul className="space-y-1">
                            {system.inconvénients.map((inconv, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <div className="w-4 h-4 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  !
                                </div>
                                {inconv}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      En savoir plus sur ce système
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paramètres */}
        {activeTab === "parametres" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Paramètres de Contrôle
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parameters.map((param, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          {param.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            {param.parameter}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              param.importance === "Critique"
                                ? "bg-red-100 text-red-700"
                                : param.importance === "Haute"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {param.importance}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Valeur idéale</p>
                        <p className="text-2xl font-bold text-emerald-600">
                          {param.ideal}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Impact</p>
                        <p className="text-gray-600">{param.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Conseils de Suivi
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Matériel nécessaire
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Testeur de pH électronique ou bandelettes
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Testeur d'ammoniaque, nitrites, nitrates
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Thermomètre aquarium
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Oxymètre (optionnel mais recommandé)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Fréquence des tests
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>pH et température :</span>
                        <span className="font-semibold text-blue-600">
                          Quotidienne
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Ammoniaque/Nitrites :</span>
                        <span className="font-semibold text-blue-600">
                          2-3x/semaine
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Nitrates :</span>
                        <span className="font-semibold text-blue-600">
                          1x/semaine
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Nettoyage système :</span>
                        <span className="font-semibold text-blue-600">
                          1x/mois
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Avantages */}
        {activeTab === "avantages" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Avantages de l'Aquaponie
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((avantage, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                      {avantage.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {avantage.title}
                    </h3>
                    <p className="text-gray-600">{avantage.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Avantages Environnementaux
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Réduction de 90% de la consommation d'eau
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Aucun rejet d'eau polluée dans l'environnement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Réduction de l'empreinte carbone de l'alimentation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Pas d'utilisation d'engrais chimiques ni pesticides
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Avantages Économiques
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Double production (poissons + plantes) sur même espace
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Réduction des coûts d'intrants (engrais, aliments)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Production locale réduisant les coûts de transport
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Potentiel de vente directe à prix premium (bio, local)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Démarrer */}
        {activeTab === "demarrer" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Comment Démarrer en Aquaponie ?
              </h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                    <div className="text-4xl text-blue-500 mb-4">🎯</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      1. Définir vos objectifs
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Production familiale vs commerciale</li>
                      <li>• Espace disponible</li>
                      <li>• Budget initial</li>
                      <li>• Temps disponible</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-emerald-50 to-white p-6 rounded-xl border border-emerald-200">
                    <div className="text-4xl text-emerald-500 mb-4">📐</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      2. Choisir le système
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Système à marée (débutant)</li>
                      <li>• NFT ou DWC (avancé)</li>
                      <li>• Indoor vs outdoor</li>
                      <li>• Taille adaptée</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-200">
                    <div className="text-4xl text-amber-500 mb-4">🛠️</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      3. Matériel nécessaire
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bassin à poissons</li>
                      <li>• Bac de culture</li>
                      <li>• Pompe et tuyaux</li>
                      <li>• Tests d'eau</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Budget indicatif pour débuter
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Petit système</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        200-500€
                      </p>
                      <p className="text-xs text-gray-500">
                        Pour 10-20 poissons
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Système familial</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        500-1500€
                      </p>
                      <p className="text-xs text-gray-500">
                        Pour 50-100 poissons
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Semi-pro</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        1500-5000€
                      </p>
                      <p className="text-xs text-gray-500">
                        Production régulière
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Commercial</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        5000€+
                      </p>
                      <p className="text-xs text-gray-500">
                        Automatisation complète
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-bold text-lg hover:shadow-lg transition-shadow">
                    Commencer mon projet aquaponique
                  </button>
                  <p className="text-gray-500 mt-4">
                    Téléchargez notre guide complet pour débutants
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">L'Aquaponie en bref</h3>
              <p className="text-gray-300">
                Une solution durable pour produire des aliments frais, locaux et
                écologiques tout en préservant nos ressources en eau.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Guide du débutant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Calculateur de système
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Forum communautaire
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Formations en ligne
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">
                Des questions sur l'aquaponie ?<br />
                Notre communauté est là pour vous aider.
              </p>
              <button className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                Rejoindre le groupe
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Guide Complet de l'Aquaponie -
              Agriculture circulaire durable
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
