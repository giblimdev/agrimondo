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
  Thermometer,
  Shield,
  Wrench,
  BarChart,
  Zap,
  TestTube,
  AlertTriangle,
  CheckCircle,
  Gauge,
  Recycle,
  Cloud,
  Wind,
  Droplet,
  Battery,
} from "lucide-react";

export default function Eau() {
  const objectifs = [
    {
      titre: "Hydratation optimale",
      description: "Assurer une disponibilité permanente d'eau potable",
      resultat: "Consommation stable (0,22–0,28 L/poule/jour)",
      icon: <Droplets className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      titre: "Hygiène de l'eau",
      description: "Prévenir la contamination bactérienne et les biofilms",
      resultat: "Réduction maladies digestives",
      icon: <Shield className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      titre: "Efficacité énergétique",
      description: "Minimiser pertes et débordements",
      resultat: "Litière sèche, confort animal",
      icon: <Zap className="h-5 w-5" />,
      couleur: "bg-yellow-100 text-yellow-800",
    },
    {
      titre: "Compatibilité climatique",
      description: "Adapter pression et température à Popayán",
      resultat: "Moindre stress thermique",
      icon: <Thermometer className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
    },
    {
      titre: "Traçabilité sanitaire",
      description: "Contrôle de la qualité de l'eau (chlore, pH, turbidité)",
      resultat: "Conformité réglementaire ICA / OMS",
      icon: <TestTube className="h-5 w-5" />,
      couleur: "bg-red-100 text-red-800",
    },
  ];

  const besoinsHydriques = [
    {
      phase: "Début de ponte (18-25 sem.)",
      consommation: "0,20 L/poule/jour",
      total: "500 L/j",
      observations: "Température modérée",
    },
    {
      phase: "Pic de ponte",
      consommation: "0,25-0,28 L/poule/jour",
      total: "625-700 L/j",
      observations: "Maximal",
    },
    {
      phase: "Fin de cycle",
      consommation: "0,22 L/poule/jour",
      total: "550 L/j",
      observations: "Diminue avec l'âge",
    },
  ];

  const ratioDisposition = [
    {
      element: "Pipettes (nipple drinkers)",
      ratio: "1 pour 10-12 poules",
      total: "210-250 unités",
      longueur: "5 lignes × 20 m",
    },
    {
      element: "Lignes d'abreuvement",
      ratio: "1 pour 500 poules",
      total: "5 lignes",
      longueur: "Espacées 1,2-1,5 m",
    },
    {
      element: "Hauteur réglable",
      ratio: "40-70 cm",
      total: "Ajustable",
      longueur: "Selon âge et morphologie",
    },
    {
      element: "Abreuvoirs de secours",
      ratio: "1/500 poules",
      total: "5 abreuvoirs suspendus",
      longueur: "En cas de panne réseau",
    },
  ];

  const typesAbreuvoirs = [
    {
      type: "Pipettes à bas débit (nipple)",
      description: "Goutte contrôlée (30-80 mL/min) avec coupelle anti-goutte",
      avantages: "Hygiène, pas de gaspillage, automatisable",
      limites: "Prix unitaire plus élevé",
      recommandation: true,
    },
    {
      type: "Abreuvoirs suspendus automatiques",
      description: "Coupelle centrale remplie par flotteur",
      avantages: "Simple, bon débit, entretien facile",
      limites: "Risque de salissure, humidité litière",
      recommandation: false,
    },
    {
      type: "Abreuvoirs de secours manuels",
      description: "Réserve gravitaire 8-12 L",
      avantages: "Autonomie en cas de panne",
      limites: "Utilisation ponctuelle seulement",
      recommandation: false,
    },
  ];

  const equipements = [
    {
      equipement: "Pompe principale",
      fonction: "Pression constante 1,5 bar",
      specification: "Pompe à variateur - 0,75 kW",
    },
    {
      equipement: "Réservoir tampon",
      fonction: "Régulation de pression et chloration",
      specification: "500 L en PEHD alimentaire",
    },
    {
      equipement: "Pompe doseuse",
      fonction: "Médication / désinfection",
      specification: "Débit 1-5 L/h, précision ± 2 %",
    },
    {
      equipement: "Filtration terminale",
      fonction: "Protection pipettes",
      specification: "Cartouches 10 µm",
    },
    {
      equipement: "Purge automatique",
      fonction: "Évacuation des sédiments",
      specification: "Programmation quotidienne",
    },
  ];

  const entretien = [
    {
      frequence: "Quotidienne",
      action: "Vérifier débit, absence de fuites",
      responsable: "Chef d'élevage",
      objectif: "Continuité d'alimentation",
    },
    {
      frequence: "Hebdomadaire",
      action: "Purger les lignes d'eau (2 min/ligne)",
      responsable: "Ouvrier",
      objectif: "Évacuer dépôts / air",
    },
    {
      frequence: "Mensuelle",
      action: "Nettoyer réservoir + filtres + pipettes",
      responsable: "Technicien",
      objectif: "Maintenir débit nominal",
    },
    {
      frequence: "Trimestrielle",
      action: "Désinfection circuit complet (chloration 50 ppm, 1 h)",
      responsable: "Technicien",
      objectif: "Prévention biofilm",
    },
    {
      frequence: "Annuelle",
      action: "Remplacement cartouches / joints",
      responsable: "Responsable maintenance",
      objectif: "Performance système",
    },
  ];

  const normesQualite = [
    {
      parametre: "pH",
      seuil: "6,5-8,5",
      methode: "pH-mètre",
      action: "Ajuster CO₂ ou neutralisant",
    },
    {
      parametre: "Turbidité",
      seuil: "< 5 NTU",
      methode: "Turbidimètre",
      action: "Rincer filtres",
    },
    {
      parametre: "Chlore libre",
      seuil: "0,2-0,5 ppm",
      methode: "Test DPD",
      action: "Réajuster doseur",
    },
    {
      parametre: "Coliformes totaux",
      seuil: "0 UFC/100 mL",
      methode: "Analyse lab. mensuelle",
      action: "Désinfection réseau",
    },
    {
      parametre: "Température",
      seuil: "15-25 °C",
      methode: "Thermomètre",
      action: "Ombre ou isolation réservoir",
    },
    {
      parametre: "Fer total",
      seuil: "< 0,3 mg/L",
      methode: "Test colorimétrique",
      action: "Filtre spécifique si besoin",
    },
  ];

  const indicateurs = [
    {
      indicateur: "Consommation journalière",
      cible: "0,25 L/poule/j",
      interpretation: "Stabilité de l'ingestion",
    },
    {
      indicateur: "Ratio eau/aliment",
      cible: "1,8-2,0 : 1",
      interpretation: "Normal (hydratation équilibrée)",
    },
    {
      indicateur: "Pertes visibles au sol",
      cible: "< 2 %",
      interpretation: "Étanchéité correcte",
    },
    {
      indicateur: "Poules actives aux pipettes",
      cible: "5-10 % simultanément",
      interpretation: "Bon débit et comportement normal",
    },
    {
      indicateur: "Fientes liquides",
      cible: "Absence",
      interpretation: "Qualité d'eau correcte",
    },
    {
      indicateur: "Litière humide",
      cible: "< 10 % surface",
      interpretation: "Ventilation et goutte-à-goutte maîtrisés",
    },
  ];

  const adaptationsClimatiques = [
    {
      risque: "Humidité ambiante > 80 %",
      mesure: "Ventilation douce, purge fréquente",
      benefice: "Litière sèche, moins de bactéries",
    },
    {
      risque: "Eau tiède (réchauffement solaire)",
      mesure: "Réservoir ombragé ou enterré",
      benefice: "Moindre développement algues",
    },
    {
      risque: "Biofilm accéléré",
      mesure: "Nettoyage mensuel + peroxyde 1 %",
      benefice: "Réduction coliformes",
    },
    {
      risque: "Pression instable réseau",
      mesure: "Pompe avec variateur et réservoir 500 L",
      benefice: "Débit constant et sans rupture",
    },
  ];

  const syntheseTechnique = [
    {
      element: "Lignes pipettes",
      specification: "PVC alimentaire PN10",
      quantite: "5 × 20 m",
      duree: "10 ans",
    },
    {
      element: "Pipettes",
      specification: "Débit 60 mL/min",
      quantite: "250 unités",
      duree: "5 ans",
    },
    {
      element: "Abreuvoirs secours",
      specification: "Flotteur 8 L",
      quantite: "5 unités",
      duree: "5 ans",
    },
    {
      element: "Pompe + réservoir",
      specification: "1,5 bar, 0,75 kW, 500 L",
      quantite: "1",
      duree: "10 ans",
    },
    {
      element: "Filtres sédiments / charbon",
      specification: "10 µm / actif",
      quantite: "2 étages",
      duree: "1 an (cartouches)",
    },
    {
      element: "Stérilisateur UV",
      specification: "30 mJ/cm²",
      quantite: "1",
      duree: "5 ans (lampe)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  FOCUS TECHNIQUE : SYSTÈME D'ABREUVEMENT
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Élevage de 2 500 poules pondeuses – Popayán, Colombie
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Système haute hygiène
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Système à pipettes (nipple) haute hygiène combinant filtration,
              stérilisation UV et chloration légère, adapté au climat humide de
              Popayán pour garantir une hydratation optimale avec réduction de
              80% des contaminations bactériennes.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consommation pic</p>
                  <p className="text-2xl font-bold">700 L/j</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Droplet className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pipettes</p>
                  <p className="text-2xl font-bold">250 unités</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Gauge className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pression réseau</p>
                  <p className="text-2xl font-bold">1,5 bar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Battery className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Réduction bactéries</p>
                  <p className="text-2xl font-bold">80%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="objectifs" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            <TabsTrigger value="dimensionnement">Dimensionnement</TabsTrigger>
            <TabsTrigger value="equipements">Équipements</TabsTrigger>
            <TabsTrigger value="entretien">Entretien</TabsTrigger>
            <TabsTrigger value="qualite">Qualité eau</TabsTrigger>
            <TabsTrigger value="indicateurs">Indicateurs</TabsTrigger>
          </TabsList>

          {/* Section Objectifs */}
          <TabsContent value="objectifs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Objectifs du système d'abreuvement
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
                                  {objectif.resultat}
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
                    Principes d'alimentation en eau
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Source et qualité
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-blue-100 text-blue-800">
                            Origine
                          </Badge>
                          <span>
                            Système récupération eau pluie + réseau secours
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Traitement
                          </Badge>
                          <div>
                            <p>1. Filtration sédiments 10 µm</p>
                            <p>2. Filtration charbon actif</p>
                            <p>3. Stérilisation UV (≥ 30 mJ/cm²)</p>
                            <p>4. Chlore résiduel 0,2-0,5 ppm</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Distribution
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Type
                          </Badge>
                          <span>Circuit fermé basse pression (1,5-2 bar)</span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Matériaux
                          </Badge>
                          <span>PVC alimentaire PN10 ou PEHD PN16</span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Longueur
                          </Badge>
                          <span>100 m linéaires (bâtiment complet)</span>
                        </li>
                      </ul>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>Conformité réglementaire</AlertTitle>
                      <AlertDescription className="text-sm">
                        L'eau traitée répond aux exigences OMS / Resolución 2115
                        de 2007 pour usage animal
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Dimensionnement */}
          <TabsContent value="dimensionnement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplets className="h-5 w-5 mr-2" />
                    Besoins hydriques
                  </CardTitle>
                  <CardDescription>
                    Capacité réseau : débit minimal 10 L/min à 1,5 bar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Phase
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Consommation moyenne
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Volume total (2 500 poules)
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Observations
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {besoinsHydriques.map((besoin, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {besoin.phase}
                            </td>
                            <td className="border p-3">
                              {besoin.consommation}
                            </td>
                            <td className="border p-3">{besoin.total}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {besoin.observations}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2" />
                    Ratio et disposition
                  </CardTitle>
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
                            Ratio / poule
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Nombre total
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Longueur totale
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ratioDisposition.map((ratio, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {ratio.element}
                            </td>
                            <td className="border p-3">{ratio.ratio}</td>
                            <td className="border p-3">{ratio.total}</td>
                            <td className="border p-3">{ratio.longueur}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Chaque ligne dessert environ 500 poules, alimentée par
                      canalisation principale latérale avec vannes indépendantes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplet className="h-5 w-5 mr-2" />
                  Types d'abreuvoirs recommandés
                </CardTitle>
                <CardDescription>
                  Choix recommandé : 5 lignes pipettes + 5 abreuvoirs suspendus
                  de secours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {typesAbreuvoirs.map((type, index) => (
                    <Card
                      key={index}
                      className={
                        type.recommandation ? "border-2 border-green-500" : ""
                      }
                    >
                      <CardHeader
                        className={type.recommandation ? "bg-green-50" : ""}
                      >
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{type.type}</CardTitle>
                          {type.recommandation && (
                            <Badge className="bg-green-100 text-green-800">
                              Recommandé
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          {type.description}
                        </p>
                        <div className="space-y-2">
                          <div className="bg-blue-50 p-2 rounded">
                            <p className="text-xs font-semibold text-blue-700">
                              Avantages
                            </p>
                            <p className="text-xs">{type.avantages}</p>
                          </div>
                          <div className="bg-red-50 p-2 rounded">
                            <p className="text-xs font-semibold text-red-700">
                              Limites
                            </p>
                            <p className="text-xs">{type.limites}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    Alimentation par pompe doseuse intégrée pour médicaments ou
                    vitamines hydrosolubles
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Équipements */}
          <TabsContent value="equipements" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Équipements complémentaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Équipement
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Fonction
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Spécification
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipements.map((equipement, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {equipement.equipement}
                            </td>
                            <td className="border p-3">
                              {equipement.fonction}
                            </td>
                            <td className="border p-3 text-sm text-gray-600">
                              {equipement.specification}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="h-5 w-5 mr-2" />
                    Adaptations climatiques à Popayán
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adaptationsClimatiques.map((adaptation, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-blue-300"
                      >
                        <CardContent className="pt-4">
                          <div className="mb-2">
                            <Badge variant="destructive" className="mb-1">
                              Risque
                            </Badge>
                            <p className="font-medium">{adaptation.risque}</p>
                          </div>
                          <div className="flex items-start mb-2">
                            <Badge className="mr-2 bg-blue-100 text-blue-800">
                              Mesure
                            </Badge>
                            <p className="text-sm">{adaptation.mesure}</p>
                          </div>
                          <div className="flex items-start">
                            <Badge className="mr-2 bg-green-100 text-green-800">
                              Bénéfice
                            </Badge>
                            <p className="text-sm text-gray-600">
                              {adaptation.benefice}
                            </p>
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
                  <BarChart className="h-5 w-5 mr-2" />
                  Synthèse technique
                </CardTitle>
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
                          Spécification
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Quantité / Dimension
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Durée de vie
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {syntheseTechnique.map((element, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {element.element}
                          </td>
                          <td className="border p-3">
                            {element.specification}
                          </td>
                          <td className="border p-3">{element.quantite}</td>
                          <td className="border p-3">
                            <Badge variant="outline">{element.duree}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Entretien */}
          <TabsContent value="entretien" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2" />
                  Entretien et biosécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    Plan d'entretien préventif
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Fréquence
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Action
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Responsable
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Objectif
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {entretien.map((item, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3">
                              <Badge
                                className={
                                  item.frequence === "Quotidienne"
                                    ? "bg-red-100 text-red-800"
                                    : item.frequence === "Hebdomadaire"
                                    ? "bg-orange-100 text-orange-800"
                                    : item.frequence === "Mensuelle"
                                    ? "bg-blue-100 text-blue-800"
                                    : item.frequence === "Trimestrielle"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }
                              >
                                {item.frequence}
                              </Badge>
                            </td>
                            <td className="border p-3">{item.action}</td>
                            <td className="border p-3">{item.responsable}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {item.objectif}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-3 text-yellow-700">
                    Prévention des contaminations
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        Système fermé → éviter contact avec poussières et
                        insectes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        Eau stagnante interdite → purge automatique après 24 h
                        d'inactivité
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        Chlore libre maintenu à 0,3-0,5 ppm (test DPD
                        hebdomadaire)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        pH optimal entre 6,5 et 7,5 pour efficacité désinfectant
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        Rinçage post-médication systématique pour éviter dépôts
                        visqueux
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Qualité */}
          <TabsContent value="qualite" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="h-5 w-5 mr-2" />
                  Qualité de l'eau - Normes de référence (ICA / OMS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Paramètre
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Seuil recommandé
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Méthode contrôle
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Action corrective
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {normesQualite.map((norme, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {norme.parametre}
                          </td>
                          <td className="border p-3">
                            <Badge className="bg-blue-100 text-blue-800">
                              {norme.seuil}
                            </Badge>
                          </td>
                          <td className="border p-3">{norme.methode}</td>
                          <td className="border p-3 text-sm text-gray-600">
                            {norme.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Indicateurs */}
          <TabsContent value="indicateurs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Indicateurs de bon fonctionnement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {indicateurs.map((indicateur, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-green-300"
                      >
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">
                              {indicateur.indicateur}
                            </h4>
                            <Badge className="bg-green-100 text-green-800">
                              {indicateur.cible}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {indicateur.interpretation}
                          </p>
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
                        <p className="font-medium">Technologie adaptée</p>
                        <p className="text-sm text-gray-600">
                          Pipettes haute hygiène pour climat humide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="p-2 bg-blue-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Distribution optimisée</p>
                        <p className="text-sm text-gray-600">
                          Pression et débit régulés contre l'humidité excessive
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <div className="p-2 bg-purple-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Traitement complet</p>
                        <p className="text-sm text-gray-600">
                          Filtration + UV + chloration légère
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                      <div className="p-2 bg-amber-100 rounded mr-3">
                        <CheckCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Maintenance rigoureuse</p>
                        <p className="text-sm text-gray-600">
                          Plan préventif garantissant qualité constante
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Ce système assure consommation stable de 600-700 L/jour,
                      zéro stagnation dans le réseau, et réduction de 80% des
                      contaminations bactériennes. Il constitue un élément
                      critique du bien-être, de la biosécurité et de la
                      performance de ponte, conforme aux directives ICA et FAO
                      pour élevages avicoles semi-intensifs tropicaux.
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
