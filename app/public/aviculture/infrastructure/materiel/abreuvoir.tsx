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
  Droplets,
  Filter,
  Thermometer,
  Shield,
  Wrench,
  Zap,
  Scale,
  Calculator,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Gauge,
  Package,
  ClipboardCheck,
  Droplet,
  TestTube,
} from "lucide-react";

export default function Abreuvoir() {
  const statistiquesAbreuvement = [
    {
      titre: "Consommation quotidienne",
      valeur: "500-750 L",
      detail: "pour 2,500 poules",
      icon: <Droplets className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
      borderColor: "border-l-blue-500",
    },
    {
      titre: "Points d'eau nécessaires",
      valeur: "210-310",
      detail: "pipettes",
      icon: <Droplet className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
      borderColor: "border-l-green-500",
    },
    {
      titre: "Ratio poules/pipette",
      valeur: "8-12",
      detail: "poules par point",
      icon: <Gauge className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
      borderColor: "border-l-purple-500",
    },
    {
      titre: "Débit recommandé",
      valeur: "60-80 mL/min",
      detail: "par pipette",
      icon: <BarChart3 className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
      borderColor: "border-l-amber-500",
    },
  ];

  const typesAbreuvoirs = [
    {
      type: "Ligne à pipettes/nipples",
      description: "Système fermé automatique - Standard industriel",
      avantages: [
        "Hygiène maximale (eau protégée)",
        "Gaspillage d'eau minimal",
        "Adaptable à tous âges",
        "Compatible avec additifs",
      ],
      inconvenients: ["Coût initial élevé", "Maintenance technique nécessaire"],
      icon: <Zap className="h-5 w-5" />,
      couleur: "bg-emerald-100 text-emerald-800",
      recommandation: "Recommandé",
    },
    {
      type: "Abreuvoirs traditionnels (ouverts)",
      description: "Bacs, seaux ou siphoïdes - Solution basique",
      avantages: ["Coût très faible", "Simplicité d'installation"],
      inconvenients: [
        "Faible hygiène (contamination rapide)",
        "Gaspillage d'eau important",
        "Humidité élevée dans litière",
      ],
      icon: <Droplets className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
      recommandation: "Déconseillé",
    },
    {
      type: "Bell drinkers / Cup systems",
      description: "Semi-ouvert - Compromis hygiène/coût",
      avantages: ["Meilleure hygiène que bac ouvert", "Installation simple"],
      inconvenients: ["Nettoyage fréquent nécessaire", "Gaspillage modéré"],
      icon: <Package className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
      recommandation: "Alternative",
    },
  ];

  const comparatifTechnique = [
    {
      critere: "Hygiène",
      pipettes: "Très élevée",
      traditionnels: "Faible",
      bell: "Moyenne",
      couleurPipettes: "bg-emerald-100 text-emerald-800",
    },
    {
      critere: "Gaspillage d'eau",
      pipettes: "Faible",
      traditionnels: "Élevé",
      bell: "Moyen",
      couleurPipettes: "bg-emerald-100 text-emerald-800",
    },
    {
      critere: "Coût initial",
      pipettes: "Moyen à élevé",
      traditionnels: "Faible",
      bell: "Moyen",
      couleurPipettes: "bg-amber-100 text-amber-800",
    },
    {
      critere: "Maintenance",
      pipettes: "Moyenne à élevée",
      traditionnels: "Moyenne",
      bell: "Moyenne",
      couleurPipettes: "bg-amber-100 text-amber-800",
    },
    {
      critere: "Adapté à 2,500 poules",
      pipettes: "Oui",
      traditionnels: "Non",
      bell: "Partiellement",
      couleurPipettes: "bg-emerald-100 text-emerald-800",
    },
  ];

  const etapesInstallation = [
    {
      etape: "1. Conception du réseau",
      description:
        "Planifier le tracé des conduites principales et secondaires",
      details: [
        "PVC alimentaire ou acier inoxydable",
        "Pente minimale 1% pour drainage",
      ],
      icon: <Calculator className="h-4 w-4" />,
    },
    {
      etape: "2. Installation supports",
      description: "Pose des systèmes de levage pour ajustement hauteur",
      details: [
        "Hauteur réglable selon âge des poules",
        "Support tous les 2-3 mètres",
      ],
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      etape: "3. Pose conduites & pipettes",
      description: "Installation des lignes avec régulateurs de pression",
      details: [
        "Un régulateur par ligne",
        "Test d'étanchéité avant mise en service",
      ],
      icon: <Droplet className="h-4 w-4" />,
    },
    {
      etape: "4. Système filtration",
      description: "Installation filtres à l'entrée et sur chaque ligne",
      details: ["Filtre 100-150 microns", "Vanne antiretour obligatoire"],
      icon: <Filter className="h-4 w-4" />,
    },
    {
      etape: "5. Tests & calibration",
      description: "Vérification débit et apprentissage des animaux",
      details: [
        "Ajustement progressif pression",
        "Surveillance consommation initiale",
      ],
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
  ];

  const protocoleHygiene = [
    {
      action: "Filtration permanente",
      frequence: "Continu",
      objectif: "Éliminer particules et contaminants",
      icon: <Filter className="h-4 w-4" />,
    },
    {
      action: "Nettoyage lignes",
      frequence: "Entre chaque lot",
      objectif: "Éliminer biofilms et dépôts",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      action: "Désinfection",
      frequence: "Mensuelle ou selon besoin",
      objectif: "Contrôle bactérien (E. coli, Salmonella)",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      action: "Contrôle qualité eau",
      frequence: "Trimestrielle",
      objectif: "Analyses bactériologiques et chimiques",
      icon: <TestTube className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  SYSTÈMES D'ABREUVEMENT - ÉLEVAGE DE 2,500 PONDEUSES
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Guide technique complet : dimensionnement, installation,
                  hygiène et maintenance
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Solution optimale : Ligne à pipettes
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Documentation complète pour la conception et la gestion d'un
              système d'abreuvement adapté à un élevage de 2,500 poules
              pondeuses. Ce guide couvre la comparaison des systèmes, le
              dimensionnement technique, les protocoles d'hygiène et les bonnes
              pratiques de maintenance pour garantir une eau propre et
              accessible en permanence.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {statistiquesAbreuvement.map((stat, index) => (
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
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="hygiene">Hygiène & Maintenance</TabsTrigger>
            <TabsTrigger value="conseils">Conseils pratiques</TabsTrigger>
          </TabsList>

          {/* SECTION : COMPARAISON SYSTÈMES */}
          <TabsContent value="comparaison" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {typesAbreuvoirs.map((type, index) => (
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
                            : type.recommandation === "Déconseillé"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {type.recommandation}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                  <Scale className="h-5 w-5 mr-2" />
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
                          Ligne à pipettes
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Traditionnels (ouverts)
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Bell drinkers
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
                            <Badge className={ligne.couleurPipettes}>
                              {ligne.pipettes}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-gray-100 text-gray-800">
                              {ligne.traditionnels}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-blue-100 text-blue-800">
                              {ligne.bell}
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
                        <Droplets className="h-4 w-4 inline mr-2" />
                        Besoins en eau
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Consommation par poule/jour :</span>
                          <Badge>200-300 mL</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Total quotidien (2,500 poules) :</span>
                          <Badge className="bg-blue-100 text-blue-800">
                            500-750 L
                          </Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Capacité réservoir minimum :</span>
                          <Badge>1,000-1,500 L</Badge>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        <Gauge className="h-4 w-4 inline mr-2" />
                        Distribution et accès
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Nombre de pipettes nécessaires :</span>
                          <Badge className="bg-green-100 text-green-800">
                            210-310
                          </Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Ratio optimal :</span>
                          <Badge>1 pipette / 8-12 poules</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Espacement entre pipettes :</span>
                          <Badge>20-30 cm</Badge>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">
                        <BarChart3 className="h-4 w-4 inline mr-2" />
                        Paramètres hydrauliques
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Pression de service :</span>
                          <Badge>0.8-1.5 bar</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Débit par pipette :</span>
                          <Badge className="bg-purple-100 text-purple-800">
                            60-80 mL/min
                          </Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Diamètre conduite principale :</span>
                          <Badge>25-32 mm</Badge>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-700">
                        <Thermometer className="h-4 w-4 inline mr-2" />
                        Considérations climatiques
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Variation consommation (été) :</span>
                          <Badge>+30-40%</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Température eau idéale :</span>
                          <Badge>15-20°C</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Prévention gel (si applicable) :</span>
                          <Badge>Résistances chauffantes</Badge>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : INSTALLATION */}
          <TabsContent value="installation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2" />
                  Procédure d'installation type
                </CardTitle>
                <CardDescription>
                  Étapes clés pour la mise en place d'une ligne à pipettes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {etapesInstallation.map((etape, index) => (
                    <div key={index} className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold mr-4">
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

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Points d'attention critiques</AlertTitle>
                  <AlertDescription className="text-sm">
                    • Tester impérativement l'étanchéité complète du système
                    avant introduction des animaux • Vérifier l'absence de
                    bulles d'air dans les conduites • Ajuster progressivement la
                    hauteur des pipettes selon la croissance des poules
                  </AlertDescription>
                </Alert>
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
                    Programme de nettoyage et désinfection pour eau de qualité
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {protocoleHygiene.map((protocole, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-l-blue-300 pl-4 py-2"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="p-1 bg-blue-100 rounded mr-2">
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
                          Vérifier pression et débit aux extrémités de ligne
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Observer comportement des poules aux abreuvoirs
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          Surveiller consommation anormale
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
                          Nettoyer filtres chaque semaine
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Vérifier joints et pipettes tous les mois
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-2" />
                          Rincer et désinfecter lignes entre chaque lot
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION : CONSEILS PRATIQUES */}
          <TabsContent value="conseils" className="space-y-6">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-emerald-600" />
                  Optimisation et bonnes pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-emerald-700">
                      Installation et configuration
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          1
                        </Badge>
                        <span>
                          Installer plusieurs lignes parallèles plutôt qu'une
                          seule longue ligne
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          2
                        </Badge>
                        <span>
                          Positionner les lignes dans des zones ombragées pour
                          limiter la prolifération algale
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          3
                        </Badge>
                        <span>
                          Ajuster progressivement la pression au démarrage pour
                          familiariser les poules
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-emerald-700">
                      Gestion quotidienne
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          4
                        </Badge>
                        <span>
                          Surveiller les signes de déshydratation (crêtes pâles,
                          léthargie)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          5
                        </Badge>
                        <span>
                          Purger régulièrement les lignes pour éliminer les
                          bulles d'air
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                          6
                        </Badge>
                        <span>
                          Tenir un registre de consommation pour détecter
                          anomalies précoces
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Recommandation finale pour Ovolia</AlertTitle>
                  <AlertDescription className="text-sm">
                    Pour un élevage de 2,500 pondeuses à Popayán, investir dans
                    un système d'abreuvement automatique à pipettes avec
                    régulateurs de pression et filtration représente la solution
                    la plus rentable à long terme. Ce choix garantit une eau de
                    qualité, réduit les problèmes sanitaires liés à l'humidité,
                    et optimise la productivité du troupeau.
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
