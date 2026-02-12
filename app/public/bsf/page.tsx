"use client";

import { useState } from "react";
import {
  Bug,
  Egg,
  Worm,
  Recycle,
  Droplets,
  Thermometer,
  Sun,
  Wind,
  Settings,
  ArrowRight,
  BarChart3,
  Shield,
  TestTube,
  Heart,
  TrendingUp,
  Apple,
  Wheat,
  Flower,
  Factory,
  Box,
  Scale,
  Timer,
} from "lucide-react";

export default function GuideBSF() {
  const [activeTab, setActiveTab] = useState("presentation");

  // ----- ÉLÉMENTS CLÉS DE L'ÉCOSYSTÈME BSF -----
  const ecosystemElements = [
    {
      id: "adultes",
      title: "Adultes (Mouches)",
      icon: <Bug className="w-8 h-8" />,
      color: "from-amber-500 to-orange-400",
      description: "Reproducteurs",
      details:
        "Les mouches adultes ne se nourrissent pas ; leur seul rôle est la reproduction. Elles vivent 5 à 8 jours et nécessitent une lumière intense et une humidité élevée pour s'accoupler.",
      types: ["Hermetia illucens"],
      role: "Production d'œufs",
      parameters: "Lumière : 150–200 µmol/m²/s, HR 70–80%, T° 25–28°C",
    },
    {
      id: "oeufs",
      title: "Œufs",
      icon: <Egg className="w-8 h-8" />,
      color: "from-yellow-400 to-amber-400",
      description: "Génération suivante",
      details:
        "Pondus en masses de 500 à 900 œufs près d'une source de nourriture. Éclosion en 4 jours à 28°C. Très sensibles à la dessiccation.",
      role: "Démarrage du cycle",
      habitat: "Fissures, carton ondulé, leurres humides",
    },
    {
      id: "larves",
      title: "Larves",
      icon: <Worm className="w-8 h-8" />,
      color: "from-stone-500 to-amber-600",
      description: "Bio-transformateurs",
      details:
        "Stade le plus important : elles consomment les déchets organiques, grossissent rapidement (14–21 jours) et accumulent protéines et lipides.",
      examples: [
        "Épluchures",
        "Marc de café",
        "Drêches",
        "Pain rassis",
        "Résidus de fruits",
      ],
      role: "Valorisation des biodéchets",
      parameters: "T° 27–30°C, HR 60–70%, substrat humide (65–75%)",
    },
    {
      id: "prenymphes",
      title: "Pré-nymphes",
      icon: <Timer className="w-8 h-8" />,
      color: "from-brown-500 to-amber-700",
      description: "Stade de récolte",
      details:
        "Larves matures qui cessent de s'alimenter, s'assèchent et migrent hors du substrat. C'est le moment idéal pour la récolte.",
      role: "Matière première (protéines, lipides)",
      habitat: "Rampe de collecte, récipient sec",
    },
    {
      id: "substrat",
      title: "Substrat (Déchets)",
      icon: <Apple className="w-8 h-8" />,
      color: "from-emerald-600 to-green-500",
      description: "Nourriture des larves",
      details:
        "Mélange de déchets organiques broyés, humidifiés à 65–70%. Le rapport C/N idéal est de 15–25.",
      types: ["Fruits/légumes", "Céréales", "Marc", "Résidus de brasserie"],
      role: "Intrant principal",
      parameters: "Humidité 65–70%, pH 6–8, granulométrie 1–3 cm",
    },
    {
      id: "frass",
      title: "Frass (Engrais)",
      icon: <Flower className="w-8 h-8" />,
      color: "from-lime-500 to-green-400",
      description: "Co-produit fertilisant",
      details:
        "Résidu solide de l'élevage : déjections, exuvies, substrat non consommé. Riche en azote, phosphore, potassium et microbiote bénéfique.",
      role: "Amendement organique",
      parameters: "Compostage complémentaire possible, tamisage",
    },
  ];

  // ----- TYPES DE SYSTÈMES D'ÉLEVAGE -----
  const systemTypes = [
    {
      name: "Système en bac (Batch)",
      description: "Idéal pour débuter, petite capacité",
      principe:
        "Bacs en plastique (40–60 L) avec couvercle aéré, récolte manuelle",
      avantages: ["Investissement faible", "Mise en œuvre rapide", "Flexible"],
      inconvénients: [
        "Travail manuel",
        "Productivité limitée",
        "Contrôle moins fin",
      ],
      image: "📦",
    },
    {
      name: "Système automatisé en continu",
      description: "Production semi-industrielle",
      principe:
        "Alimentation et récolte automatisées, tapis roulant, séparation par migration",
      avantages: [
        "Rendement élevé",
        "Faible main d'œuvre",
        "Paramètres stables",
      ],
      inconvénients: ["Coût initial important", "Nécessite une maintenance"],
      image: "⚙️",
    },
    {
      name: "Élevage vertical",
      description: "Optimisation de l'espace",
      principe: "Étagères superposées, gestion des flux d'air et de chaleur",
      avantages: [
        "Productivité au m² maximale",
        "Adapté aux zones urbaines",
        "Contrôle facilité",
      ],
      inconvénients: [
        "Gestion des gradients thermiques",
        "Structure plus complexe",
      ],
      image: "📐",
    },
    {
      name: "Unité mobile / conteneur",
      description: "Élevage décentralisé",
      principe: "Conteneur maritime aménagé, autonome en énergie",
      avantages: ["Mobilité", "Installation rapide", "Image innovante"],
      inconvénients: ["Espace restreint", "Coût au m² plus élevé"],
      image: "🚛",
    },
  ];

  // ----- PARAMÈTRES DE CONTRÔLE -----
  const parameters = [
    {
      parameter: "Température (larves)",
      ideal: "27 – 30 °C",
      importance: "Critique",
      impact: "Influence directe la vitesse de croissance et la consommation",
      icon: <Thermometer />,
    },
    {
      parameter: "Température (adultes)",
      ideal: "25 – 28 °C",
      importance: "Haute",
      impact: "Essentiel pour l'accouplement et la ponte",
      icon: <Thermometer />,
    },
    {
      parameter: "Humidité air (adultes)",
      ideal: "70 – 80 %",
      importance: "Critique",
      impact: "Trop sec → pas d'accouplement, mortalité rapide",
      icon: <Droplets />,
    },
    {
      parameter: "Humidité substrat",
      ideal: "65 – 75 %",
      importance: "Haute",
      impact: "Trop sec → arrêt alimentation ; trop humide → asphyxie",
      icon: <Droplets />,
    },
    {
      parameter: "Luminosité (adultes)",
      ideal: "150–200 µmol/m²/s",
      importance: "Critique",
      impact: "Nécessaire pour déclencher l'accouplement",
      icon: <Sun />,
    },
    {
      parameter: "pH du substrat",
      ideal: "6.0 – 8.0",
      importance: "Moyenne",
      impact: "Hors plage → ralentissement, moisissures",
      icon: <TestTube />,
    },
    {
      parameter: "Ammoniaque",
      ideal: "< 50 ppm",
      importance: "Moyenne",
      impact: "Toxique à forte concentration, rare en aérobiose",
      icon: <Shield />,
    },
    {
      parameter: "Oxygène substrat",
      ideal: "Aérobie",
      importance: "Haute",
      impact: "Les larves respirent ; un milieu anaérobie les tue",
      icon: <Wind />,
    },
  ];

  // ----- AVANTAGES DE L'ÉLEVAGE BSF -----
  const advantages = [
    {
      title: "Économie circulaire",
      description: "Valorisation des biodéchets en ressources nobles",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Protéines durables",
      description: "Alternative aux farines de poisson et soja",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Engrais naturel",
      description: "Frass riche en nutriments et microbiote",
      icon: <Flower className="w-6 h-6" />,
    },
    {
      title: "Faible empreinte eau",
      description: "Presque zéro rejet, très peu d'eau consommée",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Croissance rapide",
      description: "Cycle de 14 à 21 jours du œuf à la récolte",
      icon: <Timer className="w-6 h-6" />,
    },
    {
      title: "Rentable",
      description: "Faibles coûts d'intrants, double production",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-orange-50/30 pb-0">
      {/* ----- HERO HEADER ----- */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Bug className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Élevage de la Mouche Soldat Noire
              <span className="block text-2xl md:text-3xl font-normal text-amber-100 mt-4">
                Hermetia illucens — Guide Complet
              </span>
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Transformez vos déchets organiques en protéines de qualité et en
              engrais naturel, grâce à un écosystème circulaire maîtrisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab("presentation")}
                className="px-6 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors"
              >
                Découvrir la BSF
              </button>
              <button
                onClick={() => setActiveTab("avantages")}
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Les avantages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----- NAVIGATION PAR ONGLETS (STICKY) ----- */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {[
              { id: "presentation", label: "Présentation", icon: <Bug /> },
              { id: "elements", label: "Éléments clés", icon: <Egg /> },
              { id: "systemes", label: "Systèmes", icon: <Settings /> },
              { id: "parametres", label: "Paramètres", icon: <Thermometer /> },
              { id: "avantages", label: "Avantages", icon: <TrendingUp /> },
              { id: "demarrer", label: "Démarrer", icon: <Timer /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-100 text-amber-700 border border-amber-200"
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
        {/* ----- ONGLET : PRÉSENTATION ----- */}
        {activeTab === "presentation" && (
          <div className="space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Qu'est-ce que l'élevage de BSF ?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 text-lg mb-6">
                    L’élevage de la{" "}
                    <strong className="text-amber-600">
                      mouche soldat noire
                    </strong>{" "}
                    (<span className="italic">Hermetia illucens</span>) est une
                    solution
                    <strong className="text-orange-600">
                      {" "}
                      biologique et circulaire
                    </strong>{" "}
                    pour traiter les déchets organiques tout en produisant des
                    <strong className="text-amber-600"> larves</strong> riches
                    en protéines et lipides, ainsi qu’un
                    <strong className="text-green-600">
                      {" "}
                      fertilisant naturel
                    </strong>{" "}
                    (frass).
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Recycle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Boucle vertueuse
                        </h4>
                        <p className="text-gray-600">
                          Les larves consomment les biodéchets, se transforment
                          en protéines, et leurs déjections nourrissent les
                          sols.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Réduction massive des déchets
                        </h4>
                        <p className="text-gray-600">
                          Jusqu’à 70 % du volume de déchets transformé en 2
                          semaines.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Insecte non nuisible
                        </h4>
                        <p className="text-gray-600">
                          Les adultes ne piquent pas, ne transmettent pas de
                          maladies et ne s’attaquent pas aux cultures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----- SCHÉMA SIMPLIFIÉ DU CYCLE BSF ----- */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      Le cycle de l'élevage BSF
                    </h3>

                    <div className="relative h-72">
                      {/* Adultes / ponte */}
                      <div className="absolute left-4 top-0 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Bug className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-amber-600">
                          Adultes
                        </span>
                        <span className="block text-xs text-gray-500">
                          Ponte
                        </span>
                      </div>

                      {/* Œufs */}
                      <div className="absolute left-4 top-28 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Egg className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-amber-600">
                          Œufs
                        </span>
                        <span className="block text-xs text-gray-500">4 j</span>
                      </div>

                      {/* Flèche vers larves */}
                      <div className="absolute left-24 top-36 w-16 h-1 bg-amber-300"></div>
                      <div className="absolute left-36 top-36 transform -translate-y-1/2 text-amber-500">
                        →
                      </div>

                      {/* Larves */}
                      <div className="absolute left-40 top-16 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Worm className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-amber-600">
                          Larves
                        </span>
                        <span className="block text-xs text-gray-500">
                          14–21 j
                        </span>
                      </div>

                      {/* Flèche vers pré-nymphes */}
                      <div className="absolute left-56 top-24 w-16 h-1 bg-amber-300"></div>
                      <div className="absolute left-64 top-24 transform -translate-y-1/2 text-amber-500">
                        →
                      </div>

                      {/* Pré-nymphes */}
                      <div className="absolute right-4 top-16 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Timer className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-amber-600">
                          Pré-nymphes
                        </span>
                        <span className="block text-xs text-gray-500">
                          Récolte
                        </span>
                      </div>

                      {/* Flèche retour adultes */}
                      <div className="absolute right-16 bottom-8 w-32 h-1 bg-amber-300 transform rotate-45"></div>
                      <div className="absolute left-16 bottom-4 text-amber-600 text-xs">
                        ← Reproduction
                      </div>

                      {/* Substrat */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Apple className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">
                          Déchets
                        </span>
                        <span className="block text-xs text-gray-500">
                          Intrant
                        </span>
                      </div>

                      {/* Frass */}
                      <div className="absolute right-4 bottom-0 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Flower className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-green-600">
                          Frass
                        </span>
                        <span className="block text-xs text-gray-500">
                          Engrais
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                      Un cycle rapide et maîtrisable, du déchet à la ressource.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Comment ça fonctionne ?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h4 className="font-bold text-lg text-amber-600 mb-3">
                    Les adultes pondent
                  </h4>
                  <p className="text-gray-600">
                    Placés dans une cage éclairée, les adultes s’accouplent et
                    pondent près d’un substrat attractif.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h4 className="font-bold text-lg text-stone-600 mb-3">
                    Les larves consomment
                  </h4>
                  <p className="text-gray-600">
                    Les larves néonates sont déposées sur les déchets ; elles
                    grossissent très vite en aérobiose.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h4 className="font-bold text-lg text-green-600 mb-3">
                    Récolte et valorisation
                  </h4>
                  <p className="text-gray-600">
                    Les pré‑nymphes migrent hors du bac : récolte facile.
                    Séchage → farine, huile ; frass → engrais.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----- ONGLET : ÉLÉMENTS CLÉS ----- */}
        {activeTab === "elements" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Les 6 piliers de l'élevage BSF
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
                            {element.id === "adultes" && "Espèce :"}
                            {element.id === "substrat" && "Types de déchets :"}
                          </h4>
                          <ul className="space-y-1 text-gray-600">
                            {element.types.map((type, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    element.id === "adultes"
                                      ? "bg-amber-500"
                                      : "bg-emerald-500"
                                  }`}
                                ></div>
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
                        {element.parameters && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Paramètres</p>
                            <p className="font-semibold text-gray-800">
                              {element.parameters}
                            </p>
                          </div>
                        )}
                        {element.habitat && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Support</p>
                            <p className="font-semibold text-gray-800">
                              {element.habitat}
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

        {/* ----- ONGLET : SYSTÈMES D'ÉLEVAGE ----- */}
        {activeTab === "systemes" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Types de systèmes d'élevage BSF
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
                      <div className="text-3xl text-amber-500 font-bold">
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
                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Explorer ce système
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----- ONGLET : PARAMÈTRES DE CONTRÔLE ----- */}
        {activeTab === "parametres" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Paramètres critiques de l'élevage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parameters.map((param, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
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
                        <p className="text-2xl font-bold text-amber-600">
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

              <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Conseils de suivi
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Matériel recommandé
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Thermomètre / hygromètre
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Luxmètre (pour la cage)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Testeur pH / humidité substrat
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Balance (suivi de croissance)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Fréquence des contrôles
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>T°, HR air :</span>
                        <span className="font-semibold text-amber-600">
                          Quotidienne
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Humidité substrat :</span>
                        <span className="font-semibold text-amber-600">
                          2‑3x/semaine
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>pH :</span>
                        <span className="font-semibold text-amber-600">
                          1x/semaine
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Pesée des larves :</span>
                        <span className="font-semibold text-amber-600">
                          2x/semaine
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----- ONGLET : AVANTAGES ----- */}
        {activeTab === "avantages" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Pourquoi élever des mouches soldats noires ?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((avantage, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
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
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Bénéfices environnementaux
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Réduction de 50–70 % du volume des biodéchets
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Zéro rejet polluant (circuit fermé)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Évitement du méthane en décharge
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Production locale d’engrais organique
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Bénéfices économiques
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Double revenu : larves (protéines) + frass (engrais)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Faibles coûts d’intrants (déchets gratuits)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Cycle ultra‑rapide : 2 semaines par lot
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">
                        Marché en pleine explosion (alimentation animale,
                        petfood, cosmétique)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----- ONGLET : DÉMARRER ----- */}
        {activeTab === "demarrer" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Comment démarrer votre élevage BSF ?
              </h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-200">
                    <div className="text-4xl text-amber-500 mb-4">🎯</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      1. Définir vos objectifs
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Autoconsommation / petite école</li>
                      <li>• Traitement de déchets de cantine</li>
                      <li>• Production commerciale de farine</li>
                      <li>• Espace et budget disponibles</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-200">
                    <div className="text-4xl text-amber-500 mb-4">📐</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      2. Choisir le système
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bacs manuels (débutant)</li>
                      <li>• Étagères verticales (gain de place)</li>
                      <li>• Automatisé (volume important)</li>
                      <li>• Indoor vs extérieur (climat)</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-200">
                    <div className="text-4xl text-amber-500 mb-4">🛠️</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">
                      3. Matériel de base
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cage d’accouplement (toile fine)</li>
                      <li>• Bacs d’élevage (PEHD, 40–60 L)</li>
                      <li>• Rampe de collecte</li>
                      <li>• Hygromètre, thermomètre, luxmètre</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Budget indicatif pour débuter
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Micro‑élevage</p>
                      <p className="text-2xl font-bold text-amber-600">
                        100‑300€
                      </p>
                      <p className="text-xs text-gray-500">1 bac, 500 larves</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Système familial</p>
                      <p className="text-2xl font-bold text-amber-600">
                        300‑800€
                      </p>
                      <p className="text-xs text-gray-500">Cage + 3 bacs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Semi‑pro</p>
                      <p className="text-2xl font-bold text-amber-600">
                        800‑2500€
                      </p>
                      <p className="text-xs text-gray-500">
                        Étagères, petite automatisation
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Professionnel</p>
                      <p className="text-2xl font-bold text-amber-600">
                        3000€+
                      </p>
                      <p className="text-xs text-gray-500">Unité continue</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-lg transition-shadow">
                    Lancer mon projet BSF
                  </button>
                  <p className="text-gray-500 mt-4">
                    Téléchargez notre check‑list PDF pour bien démarrer
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
