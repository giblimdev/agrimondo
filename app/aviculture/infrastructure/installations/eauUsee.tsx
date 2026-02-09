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
  Droplets,
  Filter,
  Trees,
  Shield,
  Wrench,
  BarChart,
  Recycle,
  TestTube,
  AlertTriangle,
  CheckCircle,
  Sprout,
  Calendar,
  Drill,
  Layers,
} from "lucide-react";

export default function EauUsee() {
  const objectifs = [
    {
      titre: "Hygiène et biosécurité",
      description:
        "Éviter la contamination croisée entre les zones propres et les zones de litière/déchets",
      impact: "Réduction des risques sanitaires et pathogènes",
      icon: <Shield className="h-5 w-5" />,
      couleur: "bg-red-100 text-red-800",
    },
    {
      titre: "Conformité environnementale",
      description:
        "Respect des normes colombiennes de rejets et d'infiltration",
      impact: "Respect Decreto 1076/2015, ICA et ICONTEC",
      icon: <CheckCircle className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      titre: "Valorisation écologique",
      description:
        "Infiltration contrôlée avec recharge des nappes phréatiques",
      impact: "Amélioration de la qualité des sols et recharge des aquifères",
      icon: <Sprout className="h-5 w-5" />,
      couleur: "bg-emerald-100 text-emerald-800",
    },
    {
      titre: "Durabilité",
      description: "Minimiser l'impact environnemental des effluents",
      impact: "Limitation des contaminations des sols et cours d'eau",
      icon: <Recycle className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
  ];

  const bilanEauxUsees = [
    {
      usage: "Nettoyage bâtiments",
      quotidien: "200 L/j",
      annuel: "~10 400 L/an",
      remarques: "Contient litière, fientes, poussières",
      couleur: "border-red-300",
    },
    {
      usage: "Litière humide et sols",
      quotidien: "100 L/j",
      annuel: "~36 500 L/an",
      remarques: "Après rinçage, récupération au sol ou dans caniveaux",
      couleur: "border-orange-300",
    },
    {
      usage: "Divers (équipements, abreuvoirs)",
      quotidien: "50 L/j",
      annuel: "~18 250 L/an",
      remarques: "Eau légèrement contaminée",
      couleur: "border-yellow-300",
    },
  ];

  const etapesTraitement = [
    {
      etape: "Décantation primaire",
      description:
        "Bassin ou fosse de décantation pour retenir matières solides",
      duree: "1-2 jours",
      reduction: "40-60% solides",
    },
    {
      etape: "Filtration grossière",
      description: "Tamis 5-10 mm pour éviter obstruction conduites",
      duree: "Immédiate",
      reduction: "Grosses particules",
    },
    {
      etape: "Lagunage / Biofiltration",
      description:
        "Bassin biologique ou filtre planté pour réduire charge organique",
      duree: "5-7 jours",
      reduction: "60-80% BOD/COD",
    },
    {
      etape: "Désinfection finale",
      description: "UV ou dosage léger hypochlorite",
      duree: "Immédiate",
      reduction: "99% pathogènes",
    },
  ];

  const normesReglementaires = [
    {
      parametre: "Coliformes totaux",
      norme: "< 1000 UFC/100 mL",
      reference: "Infiltration contrôlée",
    },
    {
      parametre: "Azote total",
      norme: "< 50 mg/L",
      reference: "Normes infiltration sol",
    },
    {
      parametre: "pH",
      norme: "6,5-8,5",
      reference: "Decreto 1076/2015",
    },
    {
      parametre: "Turbidité",
      norme: "< 10 NTU",
      reference: "Pour éviter colmatage",
    },
  ];

  const maintenance = [
    {
      element: "Bassin de décantation",
      frequence: "Mensuelle",
      action: "Retirer boues, nettoyer grilles",
    },
    {
      element: "Biofiltre / Lagune",
      frequence: "Trimestrielle",
      action: "Vérifier plantes, déboucher conduites",
    },
    {
      element: "Système UV / Chlore",
      frequence: "Mensuelle",
      action: "Vérification intensité, dosage",
    },
    {
      element: "Système d'infiltration",
      frequence: "Semestrielle",
      action: "Contrôle débit, inspection puits",
    },
  ];

  const caracteristiquesInfiltration = [
    {
      titre: "Puits d'infiltration",
      description: "Puits de 1,5-2m de diamètre, 2-3m de profondeur",
      capacite: "500-1000 L/jour",
      materiau: "Graviers, géotextile, parois poreuses",
    },
    {
      titre: "Tranchées d'infiltration",
      description: "Tranchées de 0,5-1m de profondeur, longueur variable",
      capacite: "200-500 L/m²/jour",
      materiau: "Graviers lavés, tuyaux perforés",
    },
    {
      titre: "Champ d'épuration",
      description: "Surface drainante avec couches filtrantes",
      capacite: "100-300 L/m²/jour",
      materiau: "Sable, gravier, terre végétale",
    },
  ];

  const considerationsInfiltration = [
    "Distance minimum 30m des puits d'eau potable",
    "Sols à perméabilité moyenne à bonne (sableux, limoneux)",
    "Niveau de la nappe phréatique > 1,5m de profondeur",
    "Pente naturelle du terrain pour écoulement gravitaire",
    "Prévoir système de dérivation en cas de saturation",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-emerald-600 to-teal-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  SYSTÈME DE TRAITEMENT ET D'INFILTRATION DES EAUX USÉES
                </CardTitle>
                <CardDescription className="text-emerald-100">
                  Élevage de poules pondeuses – Popayán, Colombie
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-emerald-700 hover:bg-white">
                Système d'évacuation souterraine
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Système de traitement progressif des effluents avec infiltration
              contrôlée dans le sol pour 2 500 poules pondeuses, respectant les
              normes environnementales colombiennes et assurant une évacuation
              écologique par recharge des nappes phréatiques.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Droplets className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Eaux usées quotidiennes
                  </p>
                  <p className="text-2xl font-bold">350 L/j</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Filter className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Réduction charge organique
                  </p>
                  <p className="text-2xl font-bold">60-80%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Drill className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Capacité infiltration</p>
                  <p className="text-2xl font-bold">500 L/j</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Layers className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Profondeur minimale nappe
                  </p>
                  <p className="text-2xl font-bold">1,5 m</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="objectifs" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            <TabsTrigger value="traitement">Traitement</TabsTrigger>
            <TabsTrigger value="infiltration">Infiltration</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Section Objectifs */}
          <TabsContent value="objectifs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Objectifs du système
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {objectifs.map((objectif, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-gray-300"
                      >
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <div
                              className={`p-2 rounded-lg ${objectif.couleur}`}
                            >
                              {objectif.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">
                                {objectif.titre}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {objectif.description}
                              </p>
                              <div className="mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {objectif.impact}
                                </Badge>
                              </div>
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
                    <Droplets className="h-5 w-5 mr-2" />
                    Bilan des eaux usées
                  </CardTitle>
                  <CardDescription>
                    Pour un élevage de 2 500 poules pondeuses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Usage
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Volume quotidien
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Volume annuel
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Remarques
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bilanEauxUsees.map((ligne, index) => (
                          <tr key={index} className={`border ${ligne.couleur}`}>
                            <td className="border p-3 font-medium">
                              {ligne.usage}
                            </td>
                            <td className="border p-3">{ligne.quotidien}</td>
                            <td className="border p-3">{ligne.annuel}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {ligne.remarques}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-gray-50">
                        <tr className="border">
                          <td className="border p-3 font-bold">Total</td>
                          <td className="border p-3 font-bold">350 L/j</td>
                          <td className="border p-3 font-bold">~65 150 L/an</td>
                          <td className="border p-3 text-sm text-gray-600">
                            À traiter avant infiltration
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <Alert className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Ces volumes sont approximatifs et peuvent varier selon
                      l'humidité ambiante et la fréquence de nettoyage.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Traitement */}
          <TabsContent value="traitement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Conception du système de traitement
                </CardTitle>
                <CardDescription>
                  Étapes de traitement progressif avant infiltration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    Principes de traitement
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-red-700 mb-2">
                        Séparation des flux
                      </h5>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                          <span>Eau fortement chargée (litière + fientes)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                          <span>Eau faiblement chargée (rinçages, divers)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-700 mb-2">
                        Traitement avant infiltration
                      </h5>
                      <p className="text-sm">
                        Décantation → Filtration → Biofiltration → Désinfection
                        pour garantir une eau adaptée à l'infiltration sans
                        colmatage du sol.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4 text-lg">
                  Étapes de traitement
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {etapesTraitement.map((etape, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-bold mb-2">
                            {index + 1}
                          </div>
                          <h5 className="font-bold">{etape.etape}</h5>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {etape.description}
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span>Durée :</span>
                            <Badge variant="outline">{etape.duree}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Réduction :</span>
                            <span className="font-medium">
                              {etape.reduction}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3 text-green-700">
                      Dimensionnement - Bassin de décantation
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Volume quotidien max :</span>
                        <Badge>350 L/j</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Capacité recommandée :</span>
                        <Badge variant="outline">700-1 000 L</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Matériau :</span>
                        <span className="font-medium">
                          Béton étanche ou PEHD
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3 text-emerald-700">
                      Dimensionnement - Lagunage / Biofiltre
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">
                          Objectif réduction BOD :
                        </span>
                        <Badge className="bg-emerald-100 text-emerald-800">
                          60-80%
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Durée séjour :</span>
                        <Badge variant="outline">5-7 jours</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Plantes filtrantes :</span>
                        <span className="font-medium">
                          Roseaux, massettes, lentilles d'eau
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Infiltration */}
          <TabsContent value="infiltration" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Drill className="h-5 w-5 mr-2" />
                    Système d'infiltration dans le sol
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-emerald-700">
                      Principe d'infiltration
                    </h4>
                    <p className="text-sm text-gray-700">
                      Les eaux traitées sont infiltrées dans le sol via des
                      puits ou tranchées d'infiltration. Cette méthode permet
                      une évacuation naturelle par percolation dans le sol, avec
                      filtration supplémentaire par les couches géologiques et
                      recharge contrôlée des nappes phréatiques.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Caractéristiques techniques
                    </h4>
                    <div className="space-y-4">
                      {caracteristiquesInfiltration.map(
                        (caracteristique, index) => (
                          <div
                            key={index}
                            className="border-b pb-3 last:border-0"
                          >
                            <h5 className="font-medium mb-1">
                              {caracteristique.titre}
                            </h5>
                            <p className="text-sm text-gray-600 mb-2">
                              {caracteristique.description}
                            </p>
                            <div className="flex justify-between text-sm">
                              <span>Capacité :</span>
                              <Badge variant="outline">
                                {caracteristique.capacite}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                              <span>Matériaux :</span>
                              <span className="text-gray-600">
                                {caracteristique.materiau}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Considérations techniques
                    </h4>
                    <div className="space-y-3">
                      {considerationsInfiltration.map(
                        (consideration, index) => (
                          <div
                            key={index}
                            className="flex items-center p-2 bg-gray-50 rounded"
                          >
                            <div className="p-2 bg-gray-100 rounded mr-3">
                              <CheckCircle className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="text-sm">{consideration}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Aspects sanitaires et réglementaires
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Paramètre
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Norme / Référence
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Remarques
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {normesReglementaires.map((norme, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {norme.parametre}
                            </td>
                            <td className="border p-3">{norme.norme}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {norme.reference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Remarque réglementaire</AlertTitle>
                    <AlertDescription className="text-sm">
                      En Colombie, l'infiltration d'effluents traités est
                      autorisée sous réserve de respecter les distances
                      minimales par rapport aux puits d'eau potable et de
                      garantir l'absence de contamination des nappes phréatiques
                      (Decreto 1076/2015, Code de bonnes pratiques avicoles).
                    </AlertDescription>
                  </Alert>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-3 text-yellow-700">
                      Bonnes pratiques d'infiltration
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>Étude préalable de la perméabilité du sol</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Surveillance régulière du niveau de la nappe
                          phréatique
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Prévoir système de dérivation en période de saturation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Éviter l'infiltration en période de pluies intenses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Contrôles périodiques de la qualité des eaux
                          infiltrées
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Maintenance */}
          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Entretien et maintenance
                  </CardTitle>
                  <CardDescription>
                    Plan de maintenance préventive recommandé
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Élément
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Fréquence
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {maintenance.map((item, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {item.element}
                            </td>
                            <td className="border p-3">
                              <Badge
                                className={
                                  item.frequence === "Mensuelle"
                                    ? "bg-blue-100 text-blue-800"
                                    : item.frequence === "Trimestrielle"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-amber-100 text-amber-800"
                                }
                              >
                                {item.frequence}
                              </Badge>
                            </td>
                            <td className="border p-3">{item.action}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Carnet de suivi obligatoire pour chaque opération et
                      mesure microbiologique afin d'assurer conformité et
                      traçabilité. Inclure les données de perméabilité du sol et
                      les contrôles de qualité des eaux avant infiltration.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Conclusion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="p-2 bg-green-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Fiable</p>
                        <p className="text-sm text-gray-600">
                          Traitement progressif adapté à l'infiltration
                          souterraine
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-blue-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Écologique</p>
                        <p className="text-sm text-gray-600">
                          Recharge naturelle des nappes avec filtration
                          complémentaire par le sol
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                      <div className="p-2 bg-emerald-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium">Conforme</p>
                        <p className="text-sm text-gray-600">
                          Respecte les normes colombiennes d'infiltration
                          contrôlée
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                      <div className="p-2 bg-amber-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Durable</p>
                        <p className="text-sm text-gray-600">
                          Solution pérenne avec faible impact environnemental
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Avec un entretien adapté, ce système d'infiltration dans
                      le sol complète efficacement le système de récupération
                      d'eaux pluviales, en garantissant une évacuation sanitaire
                      des eaux usées traitées tout en participant à la recharge
                      durable des ressources hydriques souterraines.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
