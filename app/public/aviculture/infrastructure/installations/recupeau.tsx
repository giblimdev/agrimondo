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
  CloudRain,
  Thermometer,
  MapPin,
  Calculator,
  Filter,
  Database,
  Wrench,
  Shield,
  Zap,
  BarChart,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  DollarSign,
} from "lucide-react";

export default function Recupeau() {
  const objectifsStrategiques = [
    {
      titre: "Autonomie hydrique",
      description: "Réduire la dépendance au réseau municipal",
      impact: "Couvrir 40-60% des besoins annuels",
      icon: <Droplets className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      titre: "Réduction des coûts",
      description: "Diminuer la facture d'eau potable",
      impact: "Économie estimée (ex. COP/an)",
      icon: <DollarSign className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      titre: "Résilience climatique",
      description: "Maintenir stock tampon lors de sécheresses",
      impact: "≥ 15 jours de consommation",
      icon: <Shield className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
    },
    {
      titre: "Développement durable",
      description: "Valoriser une ressource naturelle abondante",
      impact: "Réduction empreinte hydrique",
      icon: <CheckCircle className="h-5 w-5" />,
      couleur: "bg-emerald-100 text-emerald-800",
    },
  ];

  const besoinsEau = [
    {
      usage: "Abreuvement pondeuses (2 500)",
      consommation: "625 L/jour",
      annuel: "~228 000 L",
      qualite: "Potable",
      couleur: "border-blue-300",
    },
    {
      usage: "Nettoyage bâtiments",
      consommation: "200 L (1x/semaine)",
      annuel: "~10 400 L",
      qualite: "Non potable",
      couleur: "border-green-300",
    },
    {
      usage: "Refroidissement",
      consommation: "150 L/jour",
      annuel: "~27 000 L",
      qualite: "Non potable",
      couleur: "border-purple-300",
    },
    {
      usage: "Jardin & utilités",
      consommation: "100 L/jour",
      annuel: "~18 000 L",
      qualite: "Non potable",
      couleur: "border-yellow-300",
    },
    {
      usage: "Divers",
      consommation: "50 L/jour",
      annuel: "~18 250 L",
      qualite: "Variable",
      couleur: "border-gray-300",
    },
  ];

  const composantsTechniques = [
    {
      composant: "Gouttières",
      spec: "Section profonde ≥150 mm",
      materiau: "PVC/aluminium",
      duree: "20 ans",
    },
    {
      composant: "Conduites descentes",
      spec: "Ø 100 mm",
      materiau: "PVC stabilisé UV",
      duree: "25 ans",
    },
    {
      composant: "Déviateur first flush",
      spec: "Volume 20-50 L",
      materiau: "PEHD",
      duree: "10 ans",
    },
    {
      composant: "Filtres primaires",
      spec: "Maille ~2 mm",
      materiau: "Acier inox",
      duree: "15 ans",
    },
    {
      composant: "Citernes",
      spec: "20 000 L × 2",
      materiau: "Polyéthylène",
      duree: "25 ans",
    },
  ];

  const maintenance = [
    {
      element: "Gouttières",
      frequence: "Mensuelle",
      action: "Nettoyage des débris",
    },
    {
      element: "Déviateurs / filtres",
      frequence: "Après fortes pluies",
      action: "Vidange & nettoyage",
    },
    {
      element: "Citernes",
      frequence: "Semestrielle",
      action: "Inspection interne & désinfection",
    },
    {
      element: "Système UV",
      frequence: "Mensuelle",
      action: "Vérification puissance, nettoyage",
    },
    {
      element: "Pompes",
      frequence: "Trimestrielle",
      action: "Révision joints / débit",
    },
  ];
 
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  SYSTÈME DE RECUEIL ET VALORISATION DES EAUX DE PLUIE
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Élevage de poules pondeuses – Popayán, Colombie
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Système durable
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Système dimensionné pour collecter ~547 m³/an d'eau de pluie et
              stocker 40 000 L, couvrant ≥ 60% des besoins hydriques annuels de
              l'élevage tout en améliorant la résilience climatique.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CloudRain className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Collecte annuelle</p>
                  <p className="text-2xl font-bold">547 m³</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Capacité stockage</p>
                  <p className="text-2xl font-bold">40 000 L</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Thermometer className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pluviométrie annuelle</p>
                  <p className="text-2xl font-bold">1 900 mm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Altitude site</p>
                  <p className="text-2xl font-bold">1 760 m</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="objectifs" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            <TabsTrigger value="conception">Conception</TabsTrigger>
            <TabsTrigger value="composants">Composants</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Section Objectifs */}
          <TabsContent value="objectifs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CloudRain className="h-5 w-5 mr-2" />
                    Contexte climatique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Localisation</span>
                      <Badge variant="outline">Popayán, Cauca, Colombie</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Climat</span>
                      <Badge className="bg-blue-100 text-blue-800">
                        Tropical d'altitude humide (Cfb)
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Température moyenne</span>
                      <Badge>18-20°C</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Surface collecte</span>
                      <Badge variant="secondary">400 m²</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Saisons pluvieuses</span>
                      <div className="text-right">
                        <p className="text-sm">Mars-Mai</p>
                        <p className="text-sm">Septembre-Novembre</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Objectifs stratégiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {objectifsStrategiques.map((objectif, index) => (
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
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-5 w-5 mr-2" />
                  Besoins en eau de l'élevage
                </CardTitle>
                <CardDescription>
                  Estimation annuelle - Total moyen : ~1 125 L/jour → ~301 775
                  L/an
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
                          Consommation/jour
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Volume/an
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Qualité requise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {besoinsEau.map((besoin, index) => (
                        <tr key={index} className={`border ${besoin.couleur}`}>
                          <td className="border p-3 font-medium">
                            {besoin.usage}
                          </td>
                          <td className="border p-3">{besoin.consommation}</td>
                          <td className="border p-3">{besoin.annuel}</td>
                          <td className="border p-3">
                            <Badge
                              className={
                                besoin.qualite === "Potable"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                              }
                            >
                              {besoin.qualite}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    Ce total est une approximation standard pour un élevage de
                    cette taille, à ajuster après mesure réelle de consommation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Conception */}
          <TabsContent value="conception" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Dimensionnement technique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Potentiel de collecte
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Formule :</span>
                        <code className="text-xs bg-white px-2 py-1 rounded">
                          V = P × S × C × E
                        </code>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Précipitations (P):</div>
                        <div className="font-medium">1 900 mm/an</div>
                        <div>Surface collecte (S):</div>
                        <div className="font-medium">400 m²</div>
                        <div>Coefficient ruissellement (C):</div>
                        <div className="font-medium">0,9</div>
                        <div>Facteur pertes (E):</div>
                        <div className="font-medium">0,8</div>
                      </div>
                      <Separator className="my-2" />
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">
                          547 200 L/an
                        </p>
                        <p className="text-sm text-gray-600">(~547 m³/an)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-700">
                      Capacité de stockage optimale
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Période sèche critique:</span>
                        <Badge>45 jours</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Consommation minimale:</span>
                        <Badge variant="outline">800 L/jour</Badge>
                      </div>
                      <Separator />
                      <div className="text-center">
                        <p className="font-bold">Stockage nécessaire:</p>
                        <p className="text-xl font-bold text-green-600">
                          36 000 L
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm">Recommandation:</p>
                        <p className="font-semibold">2 citernes de 20 000 L</p>
                        <p className="text-sm text-gray-600">
                          Stockage total utile = 40 000 L
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Principe de fonctionnement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 mb-3">
                        Collecte des eaux de pluie ruisselant sur la toiture via
                        un réseau de gouttières, filtration et direction vers
                        des citernes de stockage.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Traitement selon usage:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <div className="p-2 bg-blue-100 rounded mr-3">
                            <Filter className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Traitement avancé</p>
                            <p className="text-sm text-gray-600">
                              UV + filtration → Abreuvement pondeuses
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-2 bg-green-50 rounded">
                          <div className="p-2 bg-green-100 rounded mr-3">
                            <Filter className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Traitement léger</p>
                            <p className="text-sm text-gray-600">
                              Filtration simple → Nettoyage & usages divers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Remarque réglementaire</AlertTitle>
                      <AlertDescription className="text-sm">
                        En Colombie, la réglementation environnementale générale
                        (ex. Decreto 1076/2015) fixe un cadre pour l'utilisation
                        des ressources en eau, mais ne publie pas un ouvrage
                        exhaustif de normes de réutilisation des eaux pluviales
                        spécifiquement agrées.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Schéma d'implantation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="font-bold text-gray-700">NORD</div>
                    <div className="text-sm">↑</div>

                    <Card className="mx-auto max-w-md border-2 border-blue-300">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <BuildingIcon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                          <h4 className="font-bold">BÂTIMENT PRINCIPAL</h4>
                          <p className="text-sm text-gray-600">(400 m²)</p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-sm">↓</div>

                    <div className="text-sm font-medium">
                      [Gouttières périphériques]
                    </div>
                    <div className="text-sm">↓</div>

                    <div className="text-sm font-medium">
                      [Conduites descente × 8 branches]
                    </div>
                    <div className="text-sm">↓</div>

                    <div className="flex justify-center space-x-8">
                      <div className="text-center">
                        <div className="text-sm mb-2">Filtrage initial</div>
                        <div className="text-sm">↓</div>
                        <div className="text-sm mb-2">
                          [Déviateur premier flush]
                        </div>
                        <div className="text-sm">↓</div>
                        <Card className="border-2 border-blue-300">
                          <CardContent className="pt-6">
                            <Database className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                            <p className="font-bold">Citerne 1</p>
                            <p className="text-sm">20 000 L</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="text-center">
                        <Card className="border-2 border-green-300 mt-12">
                          <CardContent className="pt-6">
                            <Database className="h-6 w-6 mx-auto mb-2 text-green-500" />
                            <p className="font-bold">Citerne 2</p>
                            <p className="text-sm">20 000 L</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="text-sm mt-4">↓</div>
                    <div className="text-sm font-medium">
                      [Pompe & systèmes de traitement]
                    </div>
                    <div className="text-sm">↓</div>
                    <div className="text-sm font-medium">
                      Réseaux distribution → usages
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Composants */}
          <TabsContent value="composants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2" />
                  Composants techniques
                </CardTitle>
                <CardDescription>
                  Collecte et transport - Caractéristiques principales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Composant
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Spécifications
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Matériau
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Durée de vie estimée
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {composantsTechniques.map((composant, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {composant.composant}
                          </td>
                          <td className="border p-3">{composant.spec}</td>
                          <td className="border p-3">{composant.materiau}</td>
                          <td className="border p-3">
                            <Badge variant="outline">{composant.duree}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Qualité exigée selon usage
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="font-medium">Potabilité pour animaux</p>
                          <p className="text-sm text-gray-600">
                            Filtration fine (10–0,5 µm) + désinfection UV (dose
                            ≥30 mJ/cm²)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="font-medium">
                            Eau technique / nettoyage
                          </p>
                          <p className="text-sm text-gray-600">
                            Filtration sédiments et charbon actif, désinfection
                            légère
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertTitle className="text-amber-700">
                      Attention
                    </AlertTitle>
                    <AlertDescription className="text-sm text-amber-700">
                      L'eau de pluie n'est pas intrinsèquement potable sans
                      traitement adéquat, car elle peut contenir des
                      contaminants microbiologiques et chimiques issus du
                      ruissellement sur toit et stockage.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Maintenance */}
          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Plan de maintenance préventive
                  </CardTitle>
                  <CardDescription>
                    Actions recommandées pour garantir la durabilité du système
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
                                    : item.frequence === "Semestrielle"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-green-100 text-green-800"
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
                      Un carnet de suivi doit être tenu pour les opérations
                      d'entretien, les données de volume collecté, et les
                      contrôles qualité, afin de faciliter la surveillance par
                      les autorités ou partenaires.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Aspects sanitaires et gestion des risques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="p-2 bg-red-100 rounded mr-3">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Réseaux séparés obligatoires
                        </p>
                        <p className="text-sm text-gray-600">
                          Les circuits d'eau pluviale doivent être physiquement
                          séparés du réseau d'eau potable
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <div className="p-2 bg-yellow-100 rounded mr-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Signalisation obligatoire</p>
                        <p className="text-sm text-gray-600">
                          "Eau non potable" à tous points d'usage non potables
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-blue-100 rounded mr-3">
                        <Filter className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Contrôles microbiologiques réguliers
                        </p>
                        <p className="text-sm text-gray-600">
                          Agents coliformes, turbidité avec actions correctives
                          planifiées
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-emerald-700">
                      Conclusion
                    </h4>
                    <p className="text-sm text-gray-700">
                      Ce système, dimensionné à ~547 m³/an de collecte et ~40
                      000 L de stockage, est techniquement viable et adapté aux
                      besoins hydriques estimés de l'élevage avicole de Popayán.
                      Il permet de couvrir une part significative (≥ 60%) des
                      besoins annuels en eau utile, tout en améliorant la
                      résilience face aux variations climatiques et en
                      valorisant une ressource naturelle disponible.
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

// Composant d'icône pour le bâtiment (car Lucide n'a pas d'icône Building simple)
function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}
