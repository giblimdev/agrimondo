import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  Layers,
  ArrowRight,
  Shield,
  Ruler,
  Zap,
  Package,
  Users,
  ChevronRight,
  TrendingUp,
  Settings,
} from "lucide-react";

export default function Trieuse() {
  const zonesMachine = [
    {
      nom: "Zone d'arrivée",
      description: "Partie haute du plateau",
      caracteristiques: [
        "Orientation : pointe vers le bas pour le roulement",
        "Inclinaison : ≈ 10°",
        "Surface : matériau lisse ou mousse fine",
        "Guides latéraux : 1–2 cm de haut",
      ],
      icon: <Package className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
      borderColor: "border-blue-400",
    },
    {
      nom: "Fente progressive",
      description: "Largeur progressive de 40 mm à 51 mm",
      caracteristiques: [
        "Tri par diamètre (S, M, L, XL)",
        "Bords arrondis et lisses",
        "Inclinaison : 5–7° vers bacs collecteurs",
        "Position : légèrement plus bas que zone d'arrivée",
      ],
      icon: <Ruler className="h-5 w-5" />,
      color: "bg-green-100 text-green-800",
      borderColor: "border-green-400",
    },
    {
      nom: "Zones de collecte",
      description: "Bacs sous chaque section de fente",
      caracteristiques: [
        "Matériau : plastique rigide, fond rembourré",
        "Hauteur de chute : ≤ 10 cm",
        "Inclinaison bacs : ≈ 5°",
        "Capacité : ~500 œufs par bac",
      ],
      icon: <Layers className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
      borderColor: "border-amber-400",
    },
    {
      nom: "Plateau conditionnement",
      description: "Surface plane légèrement inclinée",
      caracteristiques: [
        "Organisation par catégorie",
        "Guidage vers alvéoles",
        "Manipulation : plateaux de 30 unités",
        "Préparation pour stockage/vente",
      ],
      icon: <Package className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-400",
    },
  ];

  const objectifsGeneraux = [
    {
      titre: "Calibrage précis",
      description: "Tri par diamètre (S, M, L, XL)",
      icon: <Target className="h-4 w-4" />,
    },
    {
      titre: "Minimisation casse",
      description: "Protections et inclinaisons optimales",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      titre: "Flux direct",
      description: "Vers plateaux de conditionnement",
      icon: <ArrowRight className="h-4 w-4" />,
    },
    {
      titre: "Semi-automatique",
      description: "1 à 2 opérateurs nécessaires",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  const fluxOperationnel = [
    { etape: 1, description: "Collecte des œufs dans les nids" },
    {
      etape: 2,
      description: "Dépose sur plateau d'arrivée (pointe vers le bas)",
    },
    { etape: 3, description: "Roulement vers fente progressive" },
    { etape: 4, description: "Tri par diamètre dans fente" },
    { etape: 5, description: "Chute dans bacs collecteurs amortis" },
    { etape: 6, description: "Transfert plateau conditionnement" },
    { etape: 7, description: "Sortie sur plateaux alvéolés" },
  ];

  const protectionsAntiCasse = [
    {
      element: "Plateau d'arrivée",
      protection: "Lisse, recouvert de mousse ou plastique souple",
      icon: <Package className="h-4 w-4" />,
    },
    {
      element: "Fente progressive",
      protection: "Bords arrondis, largeur graduelle",
      icon: <Ruler className="h-4 w-4" />,
    },
    {
      element: "Hauteur de chute",
      protection: "≤ 10 cm vers bacs collecteurs",
      icon: <ArrowRight className="h-4 w-4" />,
    },
    {
      element: "Bacs collecteurs",
      protection: "Fond amorti, grande surface, inclinaison 5°",
      icon: <Layers className="h-4 w-4" />,
    },
    {
      element: "Rampe vers plateaux",
      protection: "Surface lisse + légère pente",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  const dimensions = [
    {
      composant: "Plateau d'arrivée",
      dimensions: "1,1 m × 0,9 m × 10 modules",
      capacite: "Module de 200 œufs",
    },
    {
      composant: "Fente progressive",
      dimensions: "1 m × 0,3 m par module",
      capacite: "Tri continu",
    },
    {
      composant: "Bacs collecteurs",
      dimensions: "0,5 m × 0,3 m × 4 bacs/module",
      capacite: "500 œufs par bac",
    },
    {
      composant: "Plateau conditionnement",
      dimensions: "1 m × 0,5 m par module",
      capacite: "30 œufs par plateau",
    },
  ];

  const avantages = [
    "Semi-automatique sans moteur (optionnel)",
    "Minimisation des casses grâce aux amortisseurs",
    "Flux direct vers conditionnement",
    "Gain de temps et ergonomie améliorée",
    "Modularité : 10 modules de 200 œufs",
    "Facile à manipuler et nettoyer",
  ];

  // Tailles fixes pour les œufs dans le schéma
  const eggSizes = [
    { size: "S", height: "h-6", width: "w-12" },
    { size: "M", height: "h-7", width: "w-14" },
    { size: "L", height: "h-8", width: "w-16" },
    { size: "XL", height: "h-9", width: "w-20" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-6 md:mb-8 overflow-hidden">
          <CardHeader className="bg-linear-to-r from-blue-600 to-cyan-600 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold wrap-break-word">
                  MACHINE ARTISANALE DE CALIBRAGE DES ŒUFS
                </CardTitle>
                <CardDescription className="text-blue-100 mt-1 text-sm md:text-base">
                  Système semi-automatique modulaire pour tri par diamètre
                </CardDescription>
              </div>
              <Badge className="md:mt-0 bg-white text-blue-700 hover:bg-white whitespace-nowrap">
                Capacité : 2000 œufs
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Conception optimisée pour le calibrage des œufs par diamètre (S,
              M, L, XL) avec minimisation des risques de casse et flux direct
              vers le conditionnement. Système modulaire nécessitant seulement 1
              à 2 opérateurs.
            </p>
          </CardContent>
        </Card>

        {/* Objectifs généraux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {objectifsGeneraux.map((objectif, index) => (
            <Card key={index} className="border-l-4 border-l-blue-400 h-full">
              <CardContent className="pt-4 md:pt-6 p-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                    {objectif.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 truncate">
                      {objectif.titre}
                    </p>
                    <p className="font-bold text-sm md:text-base wrap-break-word">
                      {objectif.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Zones de la machine */}
        <Card className="mb-6 md:mb-8 border-l-4 border-l-green-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex items-center">
              <Settings className="h-5 w-5 mr-2 flex-shrink-0" />
              <div className="min-w-0">
                <CardTitle className="text-lg md:text-xl font-bold">
                  Zones de la machine
                </CardTitle>
                <CardDescription className="truncate">
                  Architecture modulaire pour un flux optimal
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {zonesMachine.map((zone, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${zone.borderColor} h-full`}
                >
                  <CardContent className="pt-4 p-4">
                    <div className="flex items-start mb-3">
                      <div
                        className={`p-2 rounded-lg ${zone.color} mr-3 shrink-0`}
                      >
                        {zone.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-base md:text-lg break-words">
                          {zone.nom}
                        </h3>
                        <p className="text-sm text-gray-600 break-words">
                          {zone.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2 pl-2">
                      {zone.caracteristiques.map((caract, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs md:text-sm text-gray-600"
                        >
                          <ChevronRight className="h-3 w-3 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="break-words">{caract}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Flux opérationnel */}
        <Card className="mb-6 md:mb-8 border-l-4 border-l-purple-500 overflow-hidden">
          <CardHeader>
            <div className="flex items-center">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0" />
              <div className="min-w-0">
                <CardTitle className="text-lg md:text-xl font-bold">
                  Flux opérationnel complet
                </CardTitle>
                <CardDescription>
                  Processus étape par étape pour 2000 œufs
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-2 md:px-6">
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              <div className="space-y-3 md:space-y-4 pl-8 md:pl-12">
                {fluxOperationnel.map((etape) => (
                  <div key={etape.etape} className="relative">
                    <div className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2">
                      <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                        {etape.etape}
                      </div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg border shadow-sm">
                      <p className="text-sm md:text-base text-gray-700 break-words">
                        {etape.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Caractéristiques anti-casse et dimensions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          <Card className="border-l-4 border-l-amber-500 h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 shrink-0" />
                <div className="min-w-0">
                  <CardTitle className="text-lg md:text-xl font-bold">
                    Protections contre la casse
                  </CardTitle>
                  <CardDescription className="truncate">
                    Conception optimisée pour minimiser les pertes
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                {protectionsAntiCasse.map((protection, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3 shrink-0">
                      {protection.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm md:text-base wrap-break-word">
                        {protection.element}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 break-words mt-1">
                        {protection.protection}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-500 h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <Ruler className="h-5 w-5 mr-2 flex-shrink-0" />
                <div className="min-w-0">
                  <CardTitle className="text-lg md:text-xl font-bold">
                    Dimensions recommandées
                  </CardTitle>
                  <CardDescription>
                    Pour 2000 œufs (10 modules de 200)
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                {dimensions.map((dim, index) => (
                  <div key={index} className="border rounded-lg p-3 md:p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <h4 className="font-semibold text-sm md:text-base break-words">
                        {dim.composant}
                      </h4>
                      <Badge className="bg-cyan-100 text-cyan-800 w-fit">
                        {dim.capacite}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 wrap-break-word">
                      {dim.dimensions}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Avantages du système */}
        <Card className="mb-6 md:mb-8 border-l-4 border-l-emerald-500 overflow-hidden">
          <CardHeader className="bg-linear-to-r from-emerald-50 to-green-50">
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 flex-shrink-0" />
              <CardTitle className="text-lg md:text-xl font-bold">
                Avantages du système
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-gray-700 break-words">
                    {avantage}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-4 md:my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="pt-4 md:pt-6 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
                    10x
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Modules interchangeables
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-linear-to-br from-green-50 to-emerald-50">
                <CardContent className="pt-4 md:pt-6 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">
                    {"<1%"}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Taux de casse cible
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="pt-4 md:pt-6 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1 md:mb-2">
                    1-2
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Opérateurs nécessaires
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Schéma conceptuel */}
        <Card className="border-l-4 border-l-indigo-500 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl font-bold">
              Schéma conceptuel de la machine
            </CardTitle>
            <CardDescription>
              Représentation visuelle du flux et des zones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-linear-to-br from-gray-50 to-blue-50 rounded-lg p-4 md:p-6 border-2 border-dashed border-gray-300">
              {/* Représentation simplifiée */}
              <div className="flex flex-col items-center">
                {/* Zone d'arrivée */}
                <div className="w-full max-w-2xl bg-linear-to-r from-blue-100 to-cyan-100 rounded-t-lg p-3 md:p-4 border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-700 text-sm md:text-base">
                        Zone d'arrivée
                      </span>
                    </div>
                    <Badge className="bg-blue-500 text-xs md:text-sm w-fit">
                      Inclinaison 10°
                    </Badge>
                  </div>
                  <div className="mt-2 flex space-x-1 md:space-x-2 overflow-x-auto py-1 md:py-2 px-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-6 w-5 md:h-8 md:w-6 bg-linear-to-b from-amber-200 to-amber-300 rounded-full flex-shrink-0"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Flèche */}
                <div className="my-3 md:my-4">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-gray-400" />
                </div>

                {/* Fente progressive */}
                <div className="w-full max-w-2xl bg-gradient-to-r from-green-100 to-emerald-100 p-3 md:p-4 border border-green-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 md:mb-4">
                    <div className="flex items-center">
                      <Ruler className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-700 text-sm md:text-base">
                        Fente progressive
                      </span>
                    </div>
                    <Badge className="bg-green-500 text-xs md:text-sm w-fit">
                      40mm → 51mm
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
                    {eggSizes.map((egg, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`mx-auto ${egg.height} ${egg.width} bg-linear-to-b from-amber-200 to-amber-300 rounded-full mb-1 md:mb-2`}
                        ></div>
                        <Badge variant="outline" className="text-xs">
                          {egg.size}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flèche */}
                <div className="my-3 md:my-4">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-gray-400" />
                </div>

                {/* Zones de collecte */}
                <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                  {eggSizes.map((size, index) => (
                    <div
                      key={index}
                      className="bg-linear-to-b from-amber-50 to-amber-100 p-2 md:p-3 rounded-lg border border-amber-200"
                    >
                      <div className="text-center font-semibold text-amber-700 text-sm md:text-base mb-1 md:mb-2">
                        Bac {size.size}
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`${size.height} ${size.width} bg-linear-to-b from-amber-200 to-amber-300 rounded-full`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Légende */}
              <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 text-center">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 text-xs md:text-sm">
                    Entrée
                  </Badge>
                  <p className="text-xs text-gray-600 mt-1 wrap-break-word">
                    Œufs collectés
                  </p>
                </div>
                <div>
                  <Badge className="bg-green-100 text-green-800 text-xs md:text-sm">
                    Tri
                  </Badge>
                  <p className="text-xs text-gray-600 mt-1 wrap-break-word">
                    Calibrage par diamètre
                  </p>
                </div>
                <div>
                  <Badge className="bg-amber-100 text-amber-800 text-xs md:text-sm">
                    Collecte
                  </Badge>
                  <p className="text-xs text-gray-600 mt-1 wrap-break-word">
                    Bacs amortis
                  </p>
                </div>
                <div>
                  <Badge className="bg-purple-100 text-purple-800 text-xs md:text-sm">
                    Sortie
                  </Badge>
                  <p className="text-xs text-gray-600 mt-1 wrap-break-word">
                    Conditionnement
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
