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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Package,
  Scale,
  Ruler,
  Settings,
  Shield,
  Zap,
  Gauge,
  Calculator,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Wrench,
  ClipboardCheck,
  Target,
  Droplet,
  Filter,
  Thermometer,
  Users,
} from "lucide-react";

export default function Mangeoires() {
  const statistiquesAlimentation = [
    {
      titre: "Longueur totale nécessaire",
      valeur: "625-750 m",
      detail: "linéaires de mangeoires",
      icon: <Ruler className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
      borderColor: "border-l-blue-500",
    },
    {
      titre: "Consommation journalière",
      valeur: "275 kg",
      detail: "d'aliment",
      icon: <Scale className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
      borderColor: "border-l-green-500",
    },
    {
      titre: "Autonomie trémie",
      valeur: "48-72 h",
      detail: "capacité minimale",
      icon: <Package className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
      borderColor: "border-l-purple-500",
    },
    {
      titre: "Points d'accès",
      valeur: "2,500",
      detail: "poules à servir",
      icon: <Users className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
      borderColor: "border-l-amber-500",
    },
  ];

  const typesMangeoires = [
    {
      type: "Trémie automatique (auger/convoyeur)",
      description: "Système automatisé avec vis sans fin ou tapis transporteur",
      avantages: [
        "Distribution continue et homogène",
        "Faible main-d'œuvre nécessaire",
        "Gaspillage réduit",
        "Adapté aux grands lots",
      ],
      inconvenients: [
        "Coût d'installation élevé",
        "Maintenance technique requise",
        "Risque de blocage avec humidité",
      ],
      icon: <Zap className="h-5 w-5" />,
      couleur: "bg-emerald-100 text-emerald-800",
      recommandation: "Recommandé",
      ratio: "1 trémie / 500-800 poules",
    },
    {
      type: "Mangeoires tubulaires",
      description: "Tubes horizontaux avec feeder rings - manuel ou semi-auto",
      avantages: [
        "Installation simple et économique",
        "Contrôle visuel facile",
        "Adaptable à différents âges",
      ],
      inconvenients: [
        "Distribution moins uniforme",
        "Plus de main-d'œuvre",
        "Gaspillage potentiel",
      ],
      icon: <Package className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
      recommandation: "Alternative économique",
      ratio: "25-30 cm linéaire/poule",
    },
    {
      type: "Mangeoires suspendues réglables",
      description: "Auges suspendues avec réglage hauteur - plastique ou inox",
      avantages: [
        "Hauteur ajustable selon âge",
        "Moins de contamination litière",
        "Bonne accessibilité",
      ],
      inconvenients: [
        "Réglages précis nécessaires",
        "Coût moyen à élevé",
        "Installation plus complexe",
      ],
      icon: <Settings className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
      recommandation: "Solution hybride",
      ratio: "30-35 cm linéaire/poule",
    },
    {
      type: "Mangeoires anti-gaspillage",
      description:
        "Systèmes avec grilles ou déflecteurs limitant la dispersion",
      avantages: [
        "Réduction gaspillage 20-40%",
        "Litière plus propre",
        "Meilleure conversion alimentaire",
      ],
      inconvenients: [
        "Coût supérieur",
        "Réglages précis critiques",
        "Adaptation nécessaire animaux",
      ],
      icon: <Target className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
      recommandation: "Optimisation coût",
      ratio: "Selon système choisi",
    },
  ];

  const comparatifTechnique = [
    {
      critere: "Distribution uniformité",
      tremie: "Excellente",
      tubulaire: "Bonne",
      suspendue: "Très bonne",
      antiGaspillage: "Excellente",
      couleurTremie: "bg-emerald-100 text-emerald-800",
    },
    {
      critere: "Gaspillage aliment",
      tremie: "Faible",
      tubulaire: "Moyen à élevé",
      suspendue: "Moyen",
      antiGaspillage: "Très faible",
      couleurTremie: "bg-emerald-100 text-emerald-800",
    },
    {
      critere: "Coût initial",
      tremie: "Élevé",
      tubulaire: "Faible",
      suspendue: "Moyen",
      antiGaspillage: "Moyen à élevé",
      couleurTremie: "bg-amber-100 text-amber-800",
    },
    {
      critere: "Maintenance",
      tremie: "Moyenne à élevée",
      tubulaire: "Faible",
      suspendue: "Moyenne",
      antiGaspillage: "Moyenne",
      couleurTremie: "bg-amber-100 text-amber-800",
    },
    {
      critere: "Adapté à 2,500 poules",
      tremie: "Oui",
      tubulaire: "Oui (avec supervision)",
      suspendue: "Oui",
      antiGaspillage: "Oui",
      couleurTremie: "bg-emerald-100 text-emerald-800",
    },
  ];

  const dimensionnementDetaille = [
    {
      parametre: "Espace linéaire total",
      valeur: "625-750 m",
      calcul: "2,500 poules × (0.25 à 0.30 m/poule)",
      icon: <Ruler className="h-4 w-4" />,
    },
    {
      parametre: "Consommation quotidienne",
      valeur: "275 kg",
      calcul: "2,500 poules × 0.11 kg/jour/poule",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      parametre: "Capacité trémie minimale",
      valeur: "550 kg",
      calcul: "275 kg/jour × 48h autonomie",
      icon: <Package className="h-4 w-4" />,
    },
    {
      parametre: "Nombre de lignes recommandé",
      valeur: "3-5 lignes",
      calcul: "Selon configuration bâtiment (15-20m/ligne)",
      icon: <Gauge className="h-4 w-4" />,
    },
    {
      parametre: "Hauteur d'installation",
      valeur: "Niveau sternum",
      calcul: "Ajustable selon âge (30-60 cm du sol)",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  const etapesImplantation = [
    {
      etape: "1. Analyse du bâtiment",
      description: "Évaluation des dimensions et contraintes spatiales",
      details: [
        "Planifier flux animaux",
        "Identifier zones mortes",
        "Optimiser circulation",
      ],
      icon: <Calculator className="h-4 w-4" />,
    },
    {
      etape: "2. Choix du système",
      description: "Sélection basée sur budget et niveau d'automatisation",
      details: [
        "Trémie automatique recommandée",
        "Prévoir extensions possibles",
        "Intégrer anti-gaspillage",
      ],
      icon: <Target className="h-4 w-4" />,
    },
    {
      etape: "3. Installation supports",
      description: "Mise en place des structures porteuses",
      details: [
        "Système de réglage hauteur",
        "Supports tous les 2-3 m",
        "Alignement parfait",
      ],
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      etape: "4. Pose lignes & convoyeurs",
      description: "Installation des mangeoires et systèmes de distribution",
      details: [
        "Vérifier pentes (1-2%)",
        "Test fonctionnement à vide",
        "Ajuster débit",
      ],
      icon: <Package className="h-4 w-4" />,
    },
    {
      etape: "5. Calibration & tests",
      description: "Réglages fins et formation des animaux",
      details: [
        "Programmer cycles alimentation",
        "Surveiller accès égal",
        "Ajuster ouvertures",
      ],
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
  ];

  const protocoleHygiene = [
    {
      action: "Nettoyage trémies et tubes",
      frequence: "Hebdomadaire",
      objectif: "Éliminer poussière et particules humides",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      action: "Contrôle convoyeurs/vis",
      frequence: "Quotidien",
      objectif: "Prévenir blocages et usure",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      action: "Désinfection complète",
      frequence: "Entre chaque lot",
      objectif: "Élimination moisissures et pathogènes",
      icon: <Filter className="h-4 w-4" />,
    },
    {
      action: "Vérification usure",
      frequence: "Mensuelle",
      objectif: "Remplacement pièces défectueuses",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
  ];

  const checklistAchat = [
    {
      element: "Longueur totale mangeoires",
      minimum: "625-750 m",
      priorite: "Critique",
    },
    { element: "Autonomie trémie", minimum: "48-72 h", priorite: "Critique" },
    { element: "Nombre de lignes", minimum: "3-5", priorite: "Important" },
    {
      element: "Système réglage hauteur",
      minimum: "Oui",
      priorite: "Important",
    },
    {
      element: "Dispositif anti-gaspillage",
      minimum: "Recommandé",
      priorite: "Recommandé",
    },
    { element: "Jauges de niveau", minimum: "Oui", priorite: "Utile" },
    {
      element: "Protections contre poussière",
      minimum: "Optionnel",
      priorite: "Optionnel",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-amber-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-amber-700 to-orange-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  SYSTÈMES DE DISTRIBUTION D'ALIMENTS - 2,500 PONDEUSES
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Guide technique complet : dimensionnement, implantation,
                  hygiène et optimisation
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-amber-700 hover:bg-white">
                Solution recommandée : Trémie automatique
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Documentation complète pour la conception et la gestion d'un
              système de distribution d'aliments adapté à un élevage de 2,500
              poules pondeuses. Ce guide couvre la comparaison des systèmes, le
              dimensionnement technique, les protocoles d'hygiène et les bonnes
              pratiques pour minimiser le gaspillage et maximiser la
              productivité.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {statistiquesAlimentation.map((stat, index) => (
            <Card key={index} className={stat.borderColor}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${stat.couleur}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.titre}</p>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-bold">{stat.valeur}</p>
                    </div>
                    <p className="text-sm text-gray-500">{stat.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="comparaison" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="comparaison">Comparaison systèmes</TabsTrigger>
            <TabsTrigger value="dimensionnement">Dimensionnement</TabsTrigger>
            <TabsTrigger value="implantation">Implantation</TabsTrigger>
            <TabsTrigger value="hygiene">Hygiène & Maintenance</TabsTrigger>
            <TabsTrigger value="checklist">Checklist achat</TabsTrigger>
          </TabsList>

          {/* SECTION : COMPARAISON SYSTÈMES */}
          <TabsContent value="comparaison" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {typesMangeoires.map((type, index) => (
                <Card
                  key={index}
                  className={
                    type.recommandation === "Recommandé"
                      ? "border-l-4 border-l-emerald-500"
                      : ""
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${type.couleur} mr-3`}>
                          {type.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{type.type}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                      <Badge
                        className={
                          type.recommandation === "Recommandé"
                            ? "bg-emerald-100 text-emerald-800"
                            : type.recommandation === "Alternative économique"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }
                      >
                        {type.recommandation}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <Badge variant="outline" className="mb-2">
                        Ratio : {type.ratio}
                      </Badge>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Avantages :
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.avantages.map((avantage, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 mr-2" />
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Inconvénients :
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.inconvenients.map((inconvenient, idx) => (
                          <li key={idx} className="flex items-start">
                            <AlertTriangle className="h-3 w-3 text-amber-500 mt-0.5 mr-2" />
                            {inconvenient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Comparatif technique détaillé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Critère
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Trémie automatique
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Tubulaire
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Suspendue réglable
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Anti-gaspillage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparatifTechnique.map((ligne, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {ligne.critere}
                          </td>
                          <td className="border p-3">
                            <Badge className={ligne.couleurTremie}>
                              {ligne.tremie}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-blue-100 text-blue-800">
                              {ligne.tubulaire}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-purple-100 text-purple-800">
                              {ligne.suspendue}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-amber-100 text-amber-800">
                              {ligne.antiGaspillage}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : DIMENSIONNEMENT */}
          <TabsContent value="dimensionnement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Dimensionnement technique pour 2,500 poules
                </CardTitle>
                <CardDescription>
                  Calculs et spécifications pour une installation optimale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        <Ruler className="h-4 w-4 inline mr-2" />
                        Espacement et accès
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {dimensionnementDetaille
                          .slice(0, 3)
                          .map((item, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-center py-1"
                            >
                              <span>{item.parametre}</span>
                              <div className="flex items-center">
                                <Badge className="bg-blue-100 text-blue-800">
                                  {item.valeur}
                                </Badge>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        <Users className="h-4 w-4 inline mr-2" />
                        Confort et accessibilité
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Zone circulation : 30-40 cm devant mangeoires
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Accès simultané pour toutes les poules
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Aucune zone d'ombre ou de congestion
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">
                        <Package className="h-4 w-4 inline mr-2" />
                        Capacité et autonomie
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {dimensionnementDetaille.slice(2).map((item, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center py-1"
                          >
                            <span>{item.parametre}</span>
                            <div className="flex items-center">
                              <Badge className="bg-purple-100 text-purple-800">
                                {item.valeur}
                              </Badge>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-700">
                        <AlertTriangle className="h-4 w-4 inline mr-2" />
                        Facteurs d'ajustement
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Température : +10% consommation si 25°C
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Stress : augmentation consommation irrégulière
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Phase de ponte : besoins nutritionnels variables
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-700">
                    <Calculator className="h-4 w-4 inline mr-2" />
                    Formules de calcul
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium">Longueur totale</p>
                      <p className="text-gray-600">
                        = Nombre poules × 0.25-0.30 m
                      </p>
                      <p className="text-xs text-gray-500">
                        = 2,500 × 0.275 = 687.5 m
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium">Consommation journalière</p>
                      <p className="text-gray-600">
                        = Nombre poules × 110 g/jour
                      </p>
                      <p className="text-xs text-gray-500">
                        = 2,500 × 0.11 = 275 kg
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : IMPLANTATION */}
          <TabsContent value="implantation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Implantation pratique dans le bâtiment
                </CardTitle>
                <CardDescription>
                  Organisation spatiale et réglages dynamiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {etapesImplantation.map((etape, index) => (
                    <div key={index} className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold mr-4">
                        {etape.etape.split(".")[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <div className="p-1 bg-gray-100 rounded mr-2">
                            {etape.icon}
                          </div>
                          <h4 className="font-semibold">{etape.etape}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {etape.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {etape.details.map((detail, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      Configuration spatiale optimale
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
                        <span>
                          Disposition linéaire ou en U suivant longueur bâtiment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
                        <span>
                          Passages larges entre lignes (80-100 cm minimum)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
                        <span>Éviter angles morts et zones de congestion</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">
                      Réglages dynamiques
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                        <span>Ajuster hauteur selon âge (niveau sternum)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                        <span>
                          Contrôler largeur ouvertures selon taille granulés
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                        <span>
                          Programmer cycles alimentation (4-6 fois/jour)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : HYGIÈNE & MAINTENANCE */}
          <TabsContent value="hygiene" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Protocole d'hygiène
                  </CardTitle>
                  <CardDescription>
                    Programme de nettoyage et désinfection pour éviter
                    moisissures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {protocoleHygiene.map((protocole, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-l-amber-300 pl-4 py-2"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="p-1 bg-amber-100 rounded mr-2">
                              {protocole.icon}
                            </div>
                            <div>
                              <p className="font-medium">{protocole.action}</p>
                              <Badge className="bg-gray-100 text-gray-800 mt-1">
                                {protocole.frequence}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {protocole.objectif}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardCheck className="h-5 w-5 mr-2" />
                    Maintenance préventive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Contrôles quotidiens
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Vérifier niveau aliment dans trémies (2x/jour)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Observer comportement aux mangeoires
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Contrôler fonctionnement convoyeurs
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-700">
                        Maintenance périodique
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Graisser roulements et axes (mensuel)
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Vérifier usure pièces mobiles (trimestriel)
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Remplacer sections endommagées (immédiat)
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION : CHECKLIST ACHAT */}
          <TabsContent value="checklist" className="space-y-6">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2 text-emerald-600" />
                  Checklist d'achat & installation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Élément
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Minimum recommandé
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Priorité
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {checklistAchat.map((item, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {item.element}
                          </td>
                          <td className="border p-3">{item.minimum}</td>
                          <td className="border p-3">
                            <Badge
                              className={
                                item.priorite === "Critique"
                                  ? "bg-red-100 text-red-800"
                                  : item.priorite === "Important"
                                  ? "bg-amber-100 text-amber-800"
                                  : item.priorite === "Recommandé"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                              }
                            >
                              {item.priorite}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Separator className="my-6" />

                <Alert>
                  <Target className="h-4 w-4" />
                  <AlertTitle>Recommandations finales pour Ovolia</AlertTitle>
                  <AlertDescription className="text-sm">
                    Pour un élevage de 2,500 pondeuses à Popayán, investir dans
                    un système de trémies automatiques avec convoyeurs,
                    dispositifs anti-gaspillage et réglage de hauteur représente
                    la solution la plus rentable à long terme. Ce choix garantit
                    une distribution uniforme, réduit le travail manuel,
                    minimise le gaspillage et optimise la conversion
                    alimentaire.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
