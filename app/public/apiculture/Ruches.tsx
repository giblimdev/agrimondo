"use client";

import { useState } from "react";
import {
  Ruler,
  Package,
  Layers,
  Box,
  Grid,
  ArrowRight,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Link from "next/link";

export default function LangstrothPlanPage() {
  const [activeSection, setActiveSection] = useState("plan");
  const [zoom, setZoom] = useState(1);

  // Composants avec dimensions réelles (en mm)
  const rucheComponents = [
    {
      id: 1,
      name: "Toit (Couvercle)",
      material: "Bois (épicéa ou pin) + tôle galvanisée",
      dimensions: "520 x 430 x 85 mm",
      thickness: "18-22 mm",
      weight: "3-4 kg",
      function: "Protection contre les intempéries",
      details: "Recouvert de tôle galvanisée ou peinture étanche",
    },
    {
      id: 2,
      name: "Couvre-Cadres (Inner Cover)",
      material: "Bois avec trou d'aération",
      dimensions: "500 x 410 x 15 mm",
      thickness: "15 mm",
      weight: "1-1.5 kg",
      function: "Isolation thermique et régulation d'humidité",
      details: "Trou central avec évent pour la ventilation",
    },
    {
      id: 3,
      name: "Hausse (Super)",
      material: "Bois d'épicéa ou pin",
      dimensions: "500 x 410 x 240 mm (standard)",
      variants: [
        { name: "Hausse complète", height: "240 mm" },
        { name: "Hausse 3/4", height: "185 mm" },
        { name: "Hausse 1/2", height: "145 mm" },
      ],
      thickness: "22 mm",
      weight: "2-3 kg vide",
      capacity: "10 cadres standard",
      function: "Logement des cadres à miel",
    },
    {
      id: 4,
      name: "Corps (Brood Chamber)",
      material: "Bois d'épicéa ou pin",
      dimensions: "500 x 410 x 240 mm",
      thickness: "22 mm",
      weight: "3-4 kg vide",
      capacity: "10 cadres",
      function: "Logement de la colonie et du couvain",
      details: "Identique à une hausse mais destiné au couvain",
    },
    {
      id: 5,
      name: "Plancher (Bottom Board)",
      material: "Bois avec fond amovible",
      dimensions: "520 x 430 mm",
      thickness: "22 mm",
      weight: "2.5-3.5 kg",
      variants: [
        { name: "Fond solide", type: "Ferme" },
        { name: "Fond grillagé", type: "Aéré" },
      ],
      function: "Base de la ruche avec entrée d'abeilles",
    },
    {
      id: 6,
      name: "Socle (Stand)",
      material: "Bois traité ou béton",
      dimensions: "Variable",
      height: "300-400 mm",
      function: "Surélévation de la ruche",
      details: "Protège contre l'humidité et les prédateurs",
    },
    {
      id: 7,
      name: "Cadres Langstroth",
      material: "Bois (hêtre ou pin)",
      dimensions: "470 x 230 mm (corps)",
      variants: [
        { name: "Pour corps", dimensions: "470 x 230 mm" },
        { name: "Pour hausse", dimensions: "470 x 170 mm" },
        { name: "Pour hausse 1/2", dimensions: "470 x 130 mm" },
      ],
      components: [
        "2 montants latéraux",
        "1 barre supérieure",
        "1 barre inférieure",
        "Fils d'acier pour cire gaufrée",
      ],
    },
  ];

  const technicalSpecs = {
    standardDimensions: {
      exterieur: {
        longueur: "500 mm",
        largeur: "410 mm",
        hauteurTotale: "~850 mm (sans socle)",
      },
      interieur: {
        longueur: "456 mm",
        largeur: "366 mm",
        hauteur: "240 mm",
      },
      epaisseurBois: "22 mm (standard), 19 mm (light)",
    },
    volumeUtile: {
      corps: "42-45 litres",
      hausse: "42-45 litres",
      total: "84-90 litres (1 corps + 1 hausse)",
    },
    poids: {
      corpsVide: "3-4 kg",
      corpsPlein: "25-30 kg",
      hausseVide: "2-3 kg",
      haussePleine: "15-20 kg",
    },
    espaceIntercadre: "35 mm (standard)",
  };

  const assemblySteps = [
    {
      step: 1,
      title: "Préparation des pièces",
      description: "Découpe et ponçage des planches selon les dimensions",
      time: "2-3 heures",
      tools: ["Scie circulaire", "Ponceuse", "Mètre"],
    },
    {
      step: 2,
      title: "Assemblage des caisses",
      description:
        "Montage des hausses et corps avec assemblages à queues d'aronde",
      time: "1-2 heures par caisse",
      tools: ["Serre-joints", "Colle à bois", "Marteau"],
    },
    {
      step: 3,
      title: "Fabrication des cadres",
      description:
        "Découpe et assemblage des cadres avec rainures pour cire gaufrée",
      time: "30 min par cadre",
      tools: ["Scie à onglet", "Cloueuse", "Pistolet à colle"],
    },
    {
      step: 4,
      title: "Finition",
      description: "Ponçage final et application de peinture/lasure",
      time: "24-48h de séchage",
      tools: ["Pinceau", "Papier de verre", "Protections"],
    },
  ];

  const advantages = [
    {
      title: "Standardisation",
      points: [
        "Dimensions universelles",
        "Interchangeabilité",
        "Matériel facile à trouver",
      ],
    },
    {
      title: "Modularité",
      points: [
        "Ajout/suppression de hausses",
        "Adaptation aux miellées",
        "Flexibilité saisonnière",
      ],
    },
    {
      title: "Productivité",
      points: ["Grande capacité", "Cadres extractibles", "Récolte facilitée"],
    },
    {
      title: "Ergonomie",
      points: ["Masse raisonnable", "Prise en main facile", "Visites rapides"],
    },
  ];

  // Calcul des hauteurs proportionnelles (en mm)
  const heights = {
    toit: 85,
    couvreCadres: 15,
    hausse: 240,
    corps: 240,
    plancher: 22,
    socle: 300, // valeur indicative, peut être ajustée
  };
  const totalHeight = Object.values(heights).reduce((a, b) => a + b, 0); // 902 mm

  // Échelle pour le rendu : hauteur max en pixels souhaitée
  const diagramHeight = 600; // px

  const renderRucheDiagram = () => (
    <div className="relative bg-gradient-to-b from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          Diagramme Technique - Ruche Langstroth 10 Cadres (échelle
          proportionnelle)
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom((prev) => Math.min(1.5, prev + 0.1))}
            className="p-2 bg-white border rounded-lg hover:bg-gray-50"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
            className="p-2 bg-white border rounded-lg hover:bg-gray-50"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="relative mx-auto border border-gray-300 rounded-lg overflow-hidden"
        style={{
          maxWidth: "800px",
          height: `${diagramHeight}px`,
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
        }}
      >
        {/* Conteneur flex column avec hauteurs proportionnelles */}
        <div className="flex flex-col h-full w-full">
          {/* Socle */}
          <div
            className="w-full bg-gray-800 flex items-center justify-center text-white text-xs"
            style={{ height: `${(heights.socle / totalHeight) * 100}%` }}
          >
            Socle (300-400 mm)
          </div>
          {/* Plancher */}
          <div
            className="w-full bg-amber-800 border-t-2 border-b-2 border-amber-900 flex items-center justify-center text-white text-xs"
            style={{ height: `${(heights.plancher / totalHeight) * 100}%` }}
          >
            Plancher (22 mm)
          </div>
          {/* Corps */}
          <div
            className="w-full bg-amber-100 border-t-2 border-b-2 border-amber-600 flex items-center justify-center text-amber-800 text-xs font-bold"
            style={{ height: `${(heights.corps / totalHeight) * 100}%` }}
          >
            Corps (240 mm)
          </div>
          {/* Hausse */}
          <div
            className="w-full bg-amber-50 border-t-2 border-b-2 border-amber-500 flex items-center justify-center text-amber-700 text-xs font-bold"
            style={{ height: `${(heights.hausse / totalHeight) * 100}%` }}
          >
            Hausse (240 mm)
          </div>
          {/* Couvre-cadres */}
          <div
            className="w-full bg-gray-300 border-t-2 border-b-2 border-gray-400 flex items-center justify-center text-gray-700 text-xs"
            style={{ height: `${(heights.couvreCadres / totalHeight) * 100}%` }}
          >
            Couvre-cadres (15 mm)
          </div>
          {/* Toit */}
          <div
            className="w-full bg-gray-700 border-t-2 border-gray-800 flex items-center justify-center text-white text-xs"
            style={{ height: `${(heights.toit / totalHeight) * 100}%` }}
          >
            Toit (85 mm)
          </div>
        </div>

        {/* Repère d'échelle verticale */}
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-400 opacity-50"></div>
        <div className="absolute left-6 top-2 text-xs text-gray-600">
          {totalHeight} mm (total)
        </div>
      </div>

      {/* Légende */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-700 rounded"></div>
          <span className="text-sm">Toit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <span className="text-sm">Couvre-cadres</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-50 border border-amber-500"></div>
          <span className="text-sm">Hausse</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-100 border border-amber-600"></div>
          <span className="text-sm">Corps</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-800"></div>
          <span className="text-sm">Plancher</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-800"></div>
          <span className="text-sm">Socle</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Plan Technique - Ruche Langstroth
              </h1>
              <p className="text-amber-200">
                Dimensions standards, schémas de construction et spécifications
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Link
                href="/apiculture/2019-ruche_langstroth.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-white text-amber-700 rounded-lg hover:bg-amber-50"
              >
                <Download className="w-4 h-4" />
                Télécharger PDF
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-700">
                <Printer className="w-4 h-4" />
                Imprimer
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-6">
        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "plan", label: "Plan 3D", icon: <Grid /> },
            { id: "components", label: "Composants", icon: <Package /> },
            { id: "specs", label: "Spécifications", icon: <Ruler /> },
            { id: "assembly", label: "Assemblage", icon: <Layers /> },
            { id: "advantages", label: "Avantages", icon: <Box /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                activeSection === item.id
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-50 border"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeSection === "plan" && (
            <>
              {renderRucheDiagram()}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Dimensions Principales
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Largeur extérieure</span>
                      <span className="font-bold">500 mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">
                        Profondeur extérieure
                      </span>
                      <span className="font-bold">410 mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">
                        Hauteur corps/hausse
                      </span>
                      <span className="font-bold">240 mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Épaisseur bois</span>
                      <span className="font-bold">22 mm</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Vue en Coupe
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg border border-amber-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📐</div>
                      <p className="text-gray-600">
                        Section transversale montrant l'organisation des cadres
                      </p>
                      <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
                        Voir la coupe détaillée
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "components" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Composants de la Ruche Langstroth
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rucheComponents.map((component) => (
                  <div
                    key={component.id}
                    className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white">
                      <h3 className="font-bold text-lg">{component.name}</h3>
                      <p className="text-amber-100 text-sm">
                        {component.material}
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Ruler className="w-4 h-4" />
                          <span className="font-medium">Dimensions :</span>
                        </div>
                        <p className="text-gray-800">{component.dimensions}</p>
                      </div>

                      {component.function && (
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <ArrowRight className="w-4 h-4" />
                            <span className="font-medium">Fonction :</span>
                          </div>
                          <p className="text-gray-800">{component.function}</p>
                        </div>
                      )}

                      {component.variants && (
                        <div className="mb-3">
                          <p className="text-sm text-gray-600 mb-1">
                            Variantes :
                          </p>
                          <ul className="space-y-1">
                            {component.variants.map((variant, idx) => (
                              <li key={idx} className="text-sm text-gray-700">
                                • {variant.name}:{" "}
                                {("dimensions" in variant &&
                                  variant.dimensions) ||
                                  ("type" in variant && variant.type) ||
                                  ("height" in variant && variant.height)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {component.details && (
                        <p className="text-sm text-gray-600 italic">
                          {component.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "specs" && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Spécifications Techniques
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Dimensions
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">
                          Extérieur
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex justify-between">
                            <span>Longueur :</span>
                            <span className="font-bold">
                              {
                                technicalSpecs.standardDimensions.exterieur
                                  .longueur
                              }
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Largeur :</span>
                            <span className="font-bold">
                              {
                                technicalSpecs.standardDimensions.exterieur
                                  .largeur
                              }
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Hauteur totale :</span>
                            <span className="font-bold">
                              {
                                technicalSpecs.standardDimensions.exterieur
                                  .hauteurTotale
                              }
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">
                          Volume utile
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex justify-between">
                            <span>Corps :</span>
                            <span className="font-bold">
                              {technicalSpecs.volumeUtile.corps}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Hausse :</span>
                            <span className="font-bold">
                              {technicalSpecs.volumeUtile.hausse}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Poids & Capacité
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">
                          Poids approximatifs
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex justify-between">
                            <span>Corps vide :</span>
                            <span className="font-bold">
                              {technicalSpecs.poids.corpsVide}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Corps plein :</span>
                            <span className="font-bold">
                              {technicalSpecs.poids.corpsPlein}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Hausse pleine :</span>
                            <span className="font-bold">
                              {technicalSpecs.poids.haussePleine}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">
                          Espacements
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex justify-between">
                            <span>Inter-cadre :</span>
                            <span className="font-bold">
                              {technicalSpecs.espaceIntercadre}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Épaisseur bois :</span>
                            <span className="font-bold">
                              {technicalSpecs.standardDimensions.epaisseurBois}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Comparaison des Formats
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-amber-50">
                      <tr>
                        <th className="px-6 py-3">Type de hausse</th>
                        <th className="px-6 py-3">Hauteur (mm)</th>
                        <th className="px-6 py-3">Cadres</th>
                        <th className="px-6 py-3">Poids plein (kg)</th>
                        <th className="px-6 py-3">Utilisation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-amber-50">
                        <td className="px-6 py-4 font-medium">
                          Corps standard
                        </td>
                        <td className="px-6 py-4">240</td>
                        <td className="px-6 py-4">10</td>
                        <td className="px-6 py-4">25-30</td>
                        <td className="px-6 py-4">Couvain</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-amber-50">
                        <td className="px-6 py-4 font-medium">
                          Hausse complète
                        </td>
                        <td className="px-6 py-4">240</td>
                        <td className="px-6 py-4">10</td>
                        <td className="px-6 py-4">15-20</td>
                        <td className="px-6 py-4">Production miel</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-amber-50">
                        <td className="px-6 py-4 font-medium">Hausse 3/4</td>
                        <td className="px-6 py-4">185</td>
                        <td className="px-6 py-4">10</td>
                        <td className="px-6 py-4">12-15</td>
                        <td className="px-6 py-4">Miel léger</td>
                      </tr>
                      <tr className="bg-white hover:bg-amber-50">
                        <td className="px-6 py-4 font-medium">Hausse 1/2</td>
                        <td className="px-6 py-4">145</td>
                        <td className="px-6 py-4">10</td>
                        <td className="px-6 py-4">8-12</td>
                        <td className="px-6 py-4">Débutants/seniors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "assembly" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Guide d'Assemblage
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {assemblySteps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white rounded-xl border shadow-sm p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Durée :</p>
                            <p className="font-medium">{step.time}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Outils :</p>
                            <div className="flex gap-1 flex-wrap">
                              {step.tools.map((tool, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Conseils de Construction
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    Utiliser du bois sec (humidité &lt; 15%) pour éviter les
                    déformations
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    Privilégier les assemblages à queues d'aronde pour une
                    meilleure solidité
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    Appliquer une peinture écologique (sans solvants) ou une
                    lasure microporeuse
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    Vérifier les dimensions exactes pour garantir
                    l'interchangeabilité des hausses
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === "advantages" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Avantages de la Langstroth
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((advantage, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border shadow-sm p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      {advantage.title}
                    </h3>
                    <ul className="space-y-2">
                      {advantage.points.map((point, pointIdx) => (
                        <li
                          key={pointIdx}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Comparaison avec les autres systèmes
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-amber-50">
                      <tr>
                        <th className="px-6 py-3">Critère</th>
                        <th className="px-6 py-3">Langstroth</th>
                        <th className="px-6 py-3">Dadant</th>
                        <th className="px-6 py-3">Warré</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Poids hausse pleine
                        </td>
                        <td className="px-6 py-4">15-20 kg</td>
                        <td className="px-6 py-4">25-30 kg</td>
                        <td className="px-6 py-4">8-12 kg</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Standardisation
                        </td>
                        <td className="px-6 py-4">Internationale</td>
                        <td className="px-6 py-4">Française</td>
                        <td className="px-6 py-4">Variable</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">Complexité</td>
                        <td className="px-6 py-4">Modérée</td>
                        <td className="px-6 py-4">Élevée</td>
                        <td className="px-6 py-4">Faible</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium">Productivité</td>
                        <td className="px-6 py-4">Élevée</td>
                        <td className="px-6 py-4">Très élevée</td>
                        <td className="px-6 py-4">Modérée</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Downloads Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Plans de Construction Complets
              </h3>
              <p className="text-amber-100">
                Téléchargez nos plans détaillés avec cotes précises
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <button className="px-6 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50 flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Plans PDF (2MB)
              </button>
              <button className="px-6 py-3 bg-amber-800 text-white rounded-lg font-medium hover:bg-amber-900 flex items-center gap-2 justify-center">
                <Printer className="w-5 h-5" />
                Liste de découpe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
