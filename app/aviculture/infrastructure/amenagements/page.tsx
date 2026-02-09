import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Home,
  Egg,
  Feather,
  Thermometer,
  Droplets,
  Sun,
  Shield,
  Wrench,
  BarChart,
  Users,
  Cloud,
  Wind,
  Lightbulb,
  Scale,
  CheckCircle,
} from "lucide-react";

import Alimdistrib from "./alimdistrib";
import Eau from "./eau";

export default function AmenagementElevage() {
  const zonesFonctionnelles = [
    {
      zone: "Aire de vie / Litière",
      surface: "277-312 m²",
      densite: "8-9 poules/m²",
      fonction: "Déplacement, picorage, repos",
      couleur: "border-blue-500",
    },
    {
      zone: "Ligne d'alimentation",
      surface: "Intégrée",
      densite: "> 12 cm/poule",
      fonction: "Apport énergétique quotidien",
      couleur: "border-green-500",
    },
    {
      zone: "Zone de Ponte (Nids)",
      surface: "24-26 m²",
      densite: "1 m²/100-120 poules",
      fonction: "Sécurité et qualité de l'œuf",
      couleur: "border-yellow-500",
    },
    {
      zone: "Bains de Poussière",
      surface: "20-25 m²",
      densite: "1 m²/100-120 poules",
      fonction: "Hygiène, plumage, lutte anti-parasite",
      couleur: "border-amber-500",
    },
    {
      zone: "Perchoirs",
      surface: "Surélevés",
      densite: "15-18 cm/poule",
      fonction: "Repos nocturne, confort osseux",
      couleur: "border-purple-500",
    },
    {
      zone: "Couloir Technique",
      surface: "15-20 m²",
      densite: "Largeur > 1.2 m",
      fonction: "Service, observation, circulation",
      couleur: "border-gray-500",
    },
  ];

  const caracteristiquesNids = [
    {
      element: "Type",
      caracteristique: "Nids collectifs modulaires",
      justification: "Robuste, facilite l'installation naturelle",
    },
    {
      element: "Planher",
      caracteristique: "Inclinaison 8° vers l'arrière",
      justification: "Récupération douce, casse minimisée",
    },
    {
      element: "Revêtement",
      caracteristique: "Tapis ajouré ou caillebotis plastique",
      justification: "Hygiénique, garde œufs propres, amortit choc",
    },
    {
      element: "Accès",
      caracteristique: "Rampe large 30-35 cm, pente ≤ 20°",
      justification: "Facilite accès, évite glissures",
    },
    {
      element: "Lumière",
      caracteristique: "Éclairage tamisé 5-10 lux",
      justification: "Attractif mais calme (pas d'éblouissement)",
    },
    {
      element: "Hauteur",
      caracteristique: "Rehausse 20-25 cm du sol",
      justification: "Évite accumulation litière",
    },
  ];

  const compositionSubstrat = [
    {
      composant: "Sable sec et fin",
      proportion: "50%",
      role: "Abrasif mécanique",
      granulometrie: "< 1mm",
    },
    {
      composant: "Terre de diatomée",
      proportion: "30%",
      role: "Destruction parasites par dessiccation",
      granulometrie: "Amorphe",
    },
    {
      composant: "Cendre de bois",
      proportion: "20%",
      role: "Oligo-éléments, effet asséchant",
      granulometrie: "Tamisée",
    },
  ];

  const indicateursPerformance = [
    {
      indicateur: "Taux ponte au sol",
      cible: "< 2%",
      action: "Vérifier confort nids, luminosité",
    },
    {
      indicateur: "État de la litière",
      cible: "Friable, sèche",
      action: "Augmenter ventilation si humide",
    },
    {
      indicateur: "État du plumage",
      cible: "Propre, intact",
      action: "Vérifier bains poussière, absence cannibalisme",
    },
  ];

  const specificitesPopayan = [
    {
      parametre: "Température",
      valeur: "Moyenne 18°C",
      recommandation: "Fermer rideaux nocturnes, ventilation 0.5 m/s",
      icon: <Thermometer className="h-4 w-4" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      parametre: "Hygrométrie",
      valeur: "Risque condensation élevé",
      recommandation: "Abreuvoirs à nipple obligatoires",
      icon: <Droplets className="h-4 w-4" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      parametre: "Lumière naturelle",
      valeur: "12h/jour stable",
      recommandation: "Programme artificiel pour 16h total",
      icon: <Sun className="h-4 w-4" />,
      couleur: "bg-yellow-100 text-yellow-800",
    },
    {
      parametre: "Altitude",
      valeur: "1 760 m",
      recommandation: "Adaptation progressive des poulettes",
      icon: <Cloud className="h-4 w-4" />,
      couleur: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-amber-600 to-orange-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  GUIDE TECHNIQUE D'AMÉNAGEMENT - ZONE D'ÉLEVAGE POUR PONDEUSES
                  AU SOL
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Système alternatif • 2 500 pondeuses • Bâtiment unique (~400
                  m²) • Popayán, Colombie
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-amber-700 hover:bg-white">
                Confort thermique & bien-être
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Conception optimisée pour maximiser le confort thermique et le
              bien-être des poules, facteurs clés de rentabilité à Popayán.
              Adaptation spécifique au climat tempéré avec variations d'humidité
              et nuits fraîches.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Home className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Surface élevage active
                  </p>
                  <p className="text-2xl font-bold">300 m²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Egg className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Surface nids</p>
                  <p className="text-2xl font-bold">25 m²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Densité optimale</p>
                  <p className="text-2xl font-bold">8-9/m²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ratio nipples</p>
                  <p className="text-2xl font-bold">1/10-12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="zonage" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="zonage">Zonage</TabsTrigger>
            <TabsTrigger value="ponte">Zone ponte</TabsTrigger>
            <TabsTrigger value="bains">Bains poussière</TabsTrigger>
            <TabsTrigger value="specificites">Spécificités</TabsTrigger>
          </TabsList>

          {/* Section Zonage */}
          <TabsContent value="zonage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  Concept général et zonage
                </CardTitle>
                <CardDescription>
                  Répartition spatiale optimisée - Zone d'élevage active : 300
                  m² (75% du bâtiment)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Zone Fonctionnelle
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Surface estimée
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Densité
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Fonction Clé
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {zonesFonctionnelles.map((zone, index) => (
                        <tr key={index} className={`border ${zone.couleur}`}>
                          <td className="border p-3 font-medium">
                            {zone.zone}
                          </td>
                          <td className="border p-3">{zone.surface}</td>
                          <td className="border p-3">{zone.densite}</td>
                          <td className="border p-3 text-sm text-gray-600">
                            {zone.fonction}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 text-amber-700">
                    Objectif principal
                  </h4>
                  <p className="text-sm text-gray-700">
                    Maximiser le confort thermique et le bien-être, deux
                    facteurs clés pour la rentabilité à Popayán (climat tempéré
                    mais frais les nuits, variations d'humidité).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2" />
                  Schéma fonctionnel amélioré
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="font-mono text-sm">
                    <div className="border border-gray-300 p-4 bg-white">
                      <div className="flex justify-between mb-4">
                        <div className="w-1/3">
                          <div className="bg-blue-100 p-2 rounded text-center">
                            <p className="font-bold">LIGNE D'EAU</p>
                            <p className="text-xs">(Nipples)</p>
                          </div>
                          <div className="text-center mt-2">↓</div>
                        </div>
                        <div className="w-1/3"></div>
                        <div className="w-1/3">
                          <div className="bg-yellow-100 p-2 rounded text-center">
                            <p className="font-bold">ZONE DE PONTE</p>
                            <p className="text-xs">(Nids Collectifs)</p>
                          </div>
                          <div className="text-center mt-2">↑</div>
                          <p className="text-xs text-center">
                            Collecte par extérieur
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-300 mb-4">
                        <h4 className="font-bold text-center mb-2">
                          LITIÈRE ACTIVE + PERCHOIRS + MANGEOIRES + BAINS
                          POUSSIÈRE
                        </h4>
                        <p className="text-xs text-center text-gray-600">
                          Zone de vie principale - 220 m²
                        </p>
                      </div>

                      <Separator className="my-4" />

                      <div className="bg-gray-100 p-3 rounded">
                        <h4 className="font-bold text-center">
                          COULOIR DE SERVICE (1.2m - 1.5m)
                        </h4>
                        <p className="text-xs text-center text-gray-600">
                          Accès aux bains, inspection des oiseaux, réglage
                          matériel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      Disposition logique favorisant le flux{" "}
                      <span className="font-semibold">"Sale → Propre"</span>
                      (litière → couloir service → local œufs)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Feather className="h-5 w-5 mr-2" />
                    Équipements complémentaires
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      Perchoirs
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          Rôle
                        </Badge>
                        <span>
                          Réduit conflits sociaux, améliore solidité osseuse
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          Surface
                        </Badge>
                        <span>Minimum 15 cm linéaires/poule (idéal 18 cm)</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          Hauteur
                        </Badge>
                        <span>40-80 cm, escalier ou décalés</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          Matériau
                        </Badge>
                        <span>Bois brossé ou plastique rugueux</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">
                      Alimentation et Abreuvement
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          Mangeoires
                        </Badge>
                        <span>Chaînes ou trémies circulaires, 12 cm/poule</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          Abreuvoirs
                        </Badge>
                        <span>
                          À nipple recommandés pour garder litière sèche
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          Ratio
                        </Badge>
                        <span>
                          1 nipple pour 10-12 poules avec gouttière PVC
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Guide d'entretien et suivi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-700">
                        Routine Quotidienne
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-2 mr-2"></div>
                          <span>
                            Matin : Distribution aliment, vérification eau,
                            collecte œufs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-2 mr-2"></div>
                          <span>
                            Soir : Ramassage fin œufs, fermeture nids,
                            vérification éclairage
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Routine Hebdomadaire
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                          <span>Litière : Grattage zones humides</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                          <span>
                            Bains poussière : Tamisage pour retirer fientes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                          <span>
                            Nids : Changement matériau de ponte si nécessaire
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">
                        Indicateurs de Performance
                      </h4>
                      <div className="space-y-2">
                        {indicateursPerformance.map((indicateur, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-2 bg-gray-50 rounded"
                          >
                            <div>
                              <span className="font-medium">
                                {indicateur.indicateur}
                              </span>
                              <p className="text-xs text-gray-600">
                                {indicateur.action}
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {indicateur.cible}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Zone de ponte */}
          <TabsContent value="ponte" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Egg className="h-5 w-5 mr-2" />
                  Zone de ponte collective - Conception détaillée
                </CardTitle>
                <CardDescription>
                  Objectif : Taux de ponte au sol inférieur à 1-2%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Dimensionnement et Configuration
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Ratio :</span>
                        <Badge>1 m²/100-120 poules</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Besoins 2 500 poules :</span>
                        <Badge variant="outline">22-25 m²</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Disposition :</span>
                        <span className="font-medium">
                          Bande centrale ou latérale continue
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-yellow-700">
                      Gestion Opérationnelle
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-sm">
                          Matériel de ponte :
                        </p>
                        <p className="text-sm text-gray-600">
                          Paille de blé ou copeaux de peuplier (sec), changé
                          1x/semaine
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          Fermeture des nids :
                        </p>
                        <p className="text-sm text-gray-600">
                          Système volets/rideaux fermés 1h avant coucher du
                          soleil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4 text-lg">
                  Spécifications techniques matérielles
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Élément
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Caractéristique Technique
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Justification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {caracteristiquesNids.map((caract, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {caract.element}
                          </td>
                          <td className="border p-3">
                            {caract.caracteristique}
                          </td>
                          <td className="border p-3 text-sm text-gray-600">
                            {caract.justification}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Bains de poussière */}
          <TabsContent value="bains" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Feather className="h-5 w-5 mr-2" />
                  Zone de bains de poussière - Bien-être & Santé
                </CardTitle>
                <CardDescription>
                  Indispensable en système alternatif pour le contrôle naturel
                  des parasites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-amber-700">
                      Conception
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Surface :</span>
                        <Badge>20-25 m² (10% surface totale)</Badge>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Type :</p>
                        <p className="text-sm text-gray-600">
                          Bacs rectangulaires surélevés (20 cm) ou zones
                          délimitées au sol
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Localisation :</p>
                        <p className="text-sm text-gray-600">
                          Zone centrale, bien éclairée, protégée des courants
                          d'air
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-700">
                      Substrat "Bio-Securisé"
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Mélange à renouveler partiellement chaque mois :
                    </p>
                    <div className="space-y-3">
                      {compositionSubstrat.map((composant, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-white rounded"
                        >
                          <div>
                            <span className="font-medium">
                              {composant.composant}
                            </span>
                            <p className="text-xs text-gray-600">
                              {composant.role}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-green-100 text-green-800">
                              {composant.proportion}
                            </Badge>
                            <p className="text-xs text-gray-600">
                              {composant.granulometrie}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Option anti-parasitaire</AlertTitle>
                  <AlertDescription className="text-sm">
                    En cas de forte infestation : ajouter 1-2% de soufre
                    agricole en poudre au mélange
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Spécificités */}
          <TabsContent value="specificites" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="h-5 w-5 mr-2" />
                    Spécificités contexte Popayán
                  </CardTitle>
                  <CardDescription>
                    Adaptations spécifiques au climat tempéré d'altitude (1 760
                    m)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {specificitesPopayan.map((spec, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-gray-300"
                      >
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${spec.couleur}`}>
                              {spec.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-semibold">
                                  {spec.parametre}
                                </h4>
                                <Badge variant="outline" className="text-xs">
                                  {spec.valeur}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {spec.recommandation}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Résumé des points clés d'amélioration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="p-2 bg-green-100 rounded">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Ajout des perchoirs</h4>
                        <p className="text-sm text-gray-600">
                          Élément manquant crucial pour le bien-être et la santé
                          des os
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-blue-100 rounded">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Précisions techniques sur l'eau
                        </h4>
                        <p className="text-sm text-gray-600">
                          Recommandation des pipettes (nipples) pour gérer
                          l'humidité de la litière
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="p-2 bg-yellow-100 rounded">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Gestion des nids</h4>
                        <p className="text-sm text-gray-600">
                          Ajout de la consigne de fermeture nocturne pour
                          propreté
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="p-2 bg-purple-100 rounded">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Adaptation locale</h4>
                        <p className="text-sm text-gray-600">
                          Recommandations spécifiques pour Popayán (ventilation
                          nocturne, gestion humidité)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Eau />
      </div>
      <div>
        <Alimdistrib />
      </div>
    </div>
  );
}
