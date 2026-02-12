"use client";

import { useState } from "react";
import {
  Play,
  ChevronRight,
  BookOpen,
  Shield,
  Bug,
  Heart,
  Droplets,
  Package,
} from "lucide-react";
import Ruches from "./Ruches";

export default function ApiculturePage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      title: "Introduction à l'Apiculture",
      icon: <Bug className="w-6 h-6" />,
      content: {
        video: "https://www.youtube.com/watch?v=exemple_intro",
        description:
          "Découvrez les raisons de devenir apiculteur et les bases de cette passion",
      },
    },
    {
      id: 1,
      title: "Fondations Théoriques",
      icon: <BookOpen className="w-6 h-6" />,
      sections: [
        {
          title: "Biologie de l'Abeille",
          video: "https://www.youtube.com/watch?v=exemple_biologie",
          points: [
            "Les trois castes et leurs cycles biologiques",
            "Développement de l'œuf à l'adulte",
          ],
        },
        {
          title: "Organisation Sociale",
          video: "https://www.youtube.com/watch?v=exemple_communication",
          points: [
            "Communication : danse des abeilles",
            "Division du travail selon l'âge",
          ],
        },
        {
          title: "Cadre Légal",
          video: "https://www.youtube.com/watch?v=exemple_reglementation",
          points: [
            "Déclaration des ruches",
            "Distances légales",
            "Normes sanitaires",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Équipement et Installation",
      icon: <Package className="w-6 h-6" />,
      sections: [
        {
          title: "Matériel de l'Apiculteur",
          video: "https://www.youtube.com/watch?v=1O9LmzhoRKI",
          points: ["Équipement de protection", "Outils essentiels"],
        },
        {
          title: "Type de Ruche",
          video: "https://www.youtube.com/watch?v=TD6Cncx1DjA",
          points: ["Dadant vs Langstroth vs Warré", "Avantages/inconvénients"],
        },
        {
          title: "Implantation du Rucher",
          video: "https://www.youtube.com/watch?v=exemple_implantation",
          points: ["Critères d'emplacement", "Aménagement pratique"],
        },
      ],
    },
    {
      id: 3,
      title: "Gestion des Colonies",
      icon: <Heart className="w-6 h-6" />,
      sections: [
        {
          title: "Installation d'un Essaim",
          video: "https://www.youtube.com/watch?v=exemple_essaim",
          points: ["Achat ou récupération", "Transvasement ruchette → ruche"],
        },
        {
          title: "Visite de Contrôle",
          video: "https://www.youtube.com/watch?v=exemple_visite",
          points: ["Fréquence des visites", "Lecture d'un cadre"],
        },
        {
          title: "Gestion de l'Essaimage",
          video: "https://www.youtube.com/watch?v=exemple_essaimage",
          points: ["Signes précurseurs", "Récupération d'essaim"],
        },
        {
          title: "Multiplication",
          video: "https://www.youtube.com/watch?v=exemple_division",
          points: ["Division de ruche", "Création de nuclei"],
        },
      ],
    },
    {
      id: 4,
      title: "Santé et Protection",
      icon: <Shield className="w-6 h-6" />,
      sections: [
        {
          title: "Lutte contre Varroa",
          video: "https://www.youtube.com/watch?v=exemple_varroa",
          points: ["Méthodes de monitoring", "Traitements biologiques"],
        },
        {
          title: "Maladies et Ravageurs",
          video: "https://www.youtube.com/watch?v=exemple_maladies",
          points: ["Reconnaître les loques", "Lutte contre frelon asiatique"],
        },
        {
          title: "Préparation Hivernage",
          video: "https://www.youtube.com/watch?v=exemple_hivernage",
          points: ["Nourrissage d'automne", "Isolation et protection"],
        },
      ],
    },
    {
      id: 5,
      title: "Production et Récolte",
      icon: <Droplets className="w-6 h-6" />,
      sections: [
        {
          title: "Comprendre les Miellées",
          video: "https://www.youtube.com/watch?v=exemple_miellee",
          points: ["Calendrier des floraisons", "Observation des entrées"],
        },
        {
          title: "Récolte du Miel",
          video: "https://www.youtube.com/watch?v=exemple_extraction",
          points: ["Moment optimal", "Extraction et maturation"],
        },
        {
          title: "Autres Produits",
          video: "https://www.youtube.com/watch?v=exemple_produits",
          points: ["Récolte de pollen", "Production de propolis"],
        },
      ],
    },
    {
      id: 6,
      title: "Élevage de Reines",
      icon: <Bug className="w-6 h-6" />,
      sections: [
        {
          title: "Sélection des Souches",
          video: "https://www.youtube.com/watch?v=exemple_selection",
          points: ["Critères sur 2-3 ans", "Marquage des reines"],
        },
        {
          title: "Technique du Greffage",
          video: "https://www.youtube.com/watch?v=exemple_greffage",
          points: ["Matériel spécifique", "Prélèvement de larve"],
        },
        {
          title: "Méthodes Alternatives",
          video: "https://www.youtube.com/watch?v=exemple_sans_greffe",
          points: ["Méthode Miller", "Systèmes Cupularve"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Guide Complet d'Apiculture
          </h1>
          <p className="text-amber-100">De débutant à apiculteur confirmé</p>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Modules de Formation
              </h2>
              <nav className="space-y-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                      activeModule === module.id
                        ? "bg-amber-100 text-amber-800 border-l-4 border-amber-500"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-amber-600">{module.icon}</div>
                    <span className="font-medium">{module.title}</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-bold text-gray-800 mb-2">
                  📺 Ressources Vidéos
                </h3>
                <p className="text-sm text-gray-600">
                  Chaque module contient des vidéos explicatives pour visualiser
                  les techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Module Header */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 border-b">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-amber-600 text-white rounded-lg">
                    {modules[activeModule].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {modules[activeModule].title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-amber-500 text-white text-sm rounded-full">
                        {activeModule === 0
                          ? "Débutant"
                          : activeModule === 6
                            ? "Avancé"
                            : "Intermédiaire"}
                      </span>
                      <span className="text-sm text-gray-600">
                        Module {activeModule + 1} sur {modules.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Content */}
              <div className="p-6">
                {activeModule === 0 ? (
                  // Introduction Module
                  <div className="space-y-6">
                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Vidéo d'introduction
                      </h3>
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-transform hover:scale-105">
                            <Play className="w-8 h-8" />
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">
                        {modules[activeModule].content?.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">
                          🐝 Pourquoi commencer ?
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Contribuer à la biodiversité</li>
                          <li>• Produire son propre miel</li>
                          <li>• Activité pédagogique</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">
                          📅 Temps requis
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 1-2 heures/semaine</li>
                          <li>• Investissement initial modéré</li>
                          <li>• Formation progressive</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">
                          🎯 Objectifs
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Première récolte en 6 mois</li>
                          <li>• Gérer 2-3 ruches</li>
                          <li>• Comprendre l'écosystème</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Other Modules
                  <div className="space-y-8">
                    {modules[activeModule].sections?.map((section, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-amber-500 pl-6 py-2"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {section.title}
                            </h3>
                            <ul className="space-y-1 text-gray-600">
                              {section.points.map((point, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href={section.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Voir la vidéo
                            </span>
                          </a>
                        </div>

                        {/* Video Preview */}
                        <div className="mt-4 bg-gray-900 rounded-lg overflow-hidden">
                          <div className="p-4 text-white">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                <Play className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-medium">Vidéo conseillée</p>
                                <p className="text-sm text-gray-300">
                                  Durée : ~5-10 minutes
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between">
                  <button
                    onClick={() =>
                      setActiveModule(Math.max(0, activeModule - 1))
                    }
                    disabled={activeModule === 0}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeModule === 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                    }`}
                  >
                    ← Précédent
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:block text-sm text-gray-600">
                      Progression :{" "}
                      {Math.round(((activeModule + 1) / modules.length) * 100)}%
                    </div>
                    <button
                      onClick={() =>
                        setActiveModule(
                          Math.min(modules.length - 1, activeModule + 1),
                        )
                      }
                      disabled={activeModule === modules.length - 1}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        activeModule === modules.length - 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-amber-600 text-white hover:bg-amber-700"
                      }`}
                    >
                      Suivant →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Ruches />
      </div>
    </div>
  );
}
