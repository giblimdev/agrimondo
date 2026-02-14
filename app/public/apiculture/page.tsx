//@/app/public/apiculture/page.tsx

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

// Fonction pour extraire l'ID d'une vidéo YouTube à partir de l'URL
function getYouTubeEmbedUrl(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function ApiculturePage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      title: "Introduction à l'Apiculture",
      icon: <Bug className="w-6 h-6" />,
      content: {
        video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // HOW TO START BEEKEEPING 2026
        description:
          "Introduction étape par étape pour débuter en apiculture en 2026",
      },
    },
    {
      id: 1,
      title: "Fondations Théoriques",
      icon: <BookOpen className="w-6 h-6" />,
      sections: [
        {
          title: "Biologie & Rôle des Abeilles",
          video: "https://www.youtube.com/watch?v=WovgtlHY9_k", // Varroa biology utile aussi pour comprendre abeilles
          points: ["Castes, cycles biologiques", "Rôle de chaque caste"],
        },
        {
          title: "Organisation Sociale de la Ruche",
          video: "https://www.youtube.com/watch?v=CAW9hDypi9o", // Inspect beehive basics
          points: [
            "Communication et danse des abeilles",
            "Division du travail par âge",
          ],
        },
        {
          title: "Types de Ruches & Choix",
          video: "https://www.youtube.com/watch?v=WmYM2PWTZDg", // Dadant, Langstroth, Warré
          points: [
            "Ruche Dadant vs Langstroth vs Warré",
            "Avantages et inconvénients",
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
          title: "Matériel de base",
          video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // Même vidéo d’intro utile
          points: ["Équipement de protection", "Outils indispensables"],
        },
        {
          title: "Implantation du Rucher",
          video: "https://www.youtube.com/watch?v=WmYM2PWTZDg", // Choix ruche & emplacement
          points: ["Critères d'emplacement", "Orientation & ombrage"],
        },
      ],
    },
    {
      id: 3,
      title: "Gestion des Colonies",
      icon: <Heart className="w-6 h-6" />,
      sections: [
        {
          title: "Visite de Contrôle",
          video: "https://www.youtube.com/watch?v=CAW9hDypi9o", // Inspection étape par étape
          points: ["Fréquence des visites", "Lecture d’un cadre"],
        },
        {
          title: "Essaimage",
          video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // Général débutant encore pertinent
          points: ["Signes avant essaimage", "Réduire l’essaimage"],
        },
      ],
    },
    {
      id: 4,
      title: "Santé et Protection",
      icon: <Shield className="w-6 h-6" />,
      sections: [
        {
          title: "Surveillance Varroa",
          video: "https://www.youtube.com/watch?v=lEIQRak0GXI", // Beekeeping mite control
          points: ["Méthodes de monitoring", "Seuils d’intervention"],
        },
        {
          title: "Traitement Varroa",
          video: "https://www.youtube.com/watch?v=lO56YPhZSSs", // Traitements varroa recommandés
          points: ["Options traitement", "Calendrier annuel"],
        },
      ],
    },
    {
      id: 5,
      title: "Production & Récolte",
      icon: <Droplets className="w-6 h-6" />,
      sections: [
        {
          title: "Calendrier des Miellées",
          video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // Vidéo intro générale encore pertinente
          points: ["Observation des floraisons", "Planification saisonnière"],
        },
        {
          title: "Récolte de Miel",
          video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // Recolte expliqué globalement
          points: ["Moment optimal", "Extraction & maturation"],
        },
      ],
    },
    {
      id: 6,
      title: "Élevage de Reines",
      icon: <Bug className="w-6 h-6" />,
      sections: [
        {
          title: "Notions essentielles",
          video: "https://www.youtube.com/watch?v=jeFxOUZreXI", // Pas de lien spécialisé, utiliser intro complète
          points: ["Sélection des souches", "Pourquoi élever des reines"],
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
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src={getYouTubeEmbedUrl(
                            modules[activeModule].content!.video,
                          )}
                          title="Vidéo d'introduction"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
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
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                          <div className="flex-1">
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
                            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap"
                          >
                            <Play className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Voir sur YouTube
                            </span>
                          </a>
                        </div>

                        {/* Video Embed */}
                        <div className="mt-4 aspect-video bg-gray-900 rounded-lg overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src={getYouTubeEmbedUrl(section.video)}
                            title={section.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
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
