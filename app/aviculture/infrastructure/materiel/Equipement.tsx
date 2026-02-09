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
  Package,
  Shield,
  Zap,
  Thermometer,
  Gauge,
  Wrench,
  Filter,
  SprayCan,
  Brush,
  Container,
  Scale,
  Power,
  Ambulance,
  AlertTriangle,
  CheckCircle,
  Warehouse,
  Droplet,
  ThermometerSun,
  Wind,
  Fuel,
} from "lucide-react";

export default function Equipement() {
  const statistiquesEquipement = [
    {
      titre: "Nettoyeur haute pression",
      valeur: "120-180 bars",
      detail: "Pression recommandée",
      icon: <SprayCan className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
      borderColor: "border-l-blue-500",
    },
    {
      titre: "Stockage aliment",
      valeur: "1-2 tonnes",
      detail: "Capacité silo",
      icon: <Package className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
      borderColor: "border-l-green-500",
    },
    {
      titre: "Stockage eau",
      valeur: "≥ 3,000 L",
      detail: "Réservoir principal",
      icon: <Droplets className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
      borderColor: "border-l-purple-500",
    },
    {
      titre: "Température eau",
      valeur: "≥ 60°C",
      detail: "Pour nettoyage efficace",
      icon: <Thermometer className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
      borderColor: "border-l-amber-500",
    },
  ];

  const equipementsHygiene = [
    {
      equipement: "Nettoyeur haute pression",
      fonction: "Décollement fientes, poussières et dépôts organiques",
      specifications: [
        "Pression : 120–180 bars",
        "Débit : ≥ 10 L/min",
        "Eau chaude (≥ 60 °C) recommandée",
        "Modèle mobile à chariot",
      ],
      recommandation:
        "Un appareil par bâtiment ou modèle mobile pour tout le site",
      icon: <SprayCan className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      equipement: "Pulvérisateur motorisé",
      fonction: "Application désinfectants, insecticides, détergents",
      specifications: [
        "Motorisé thermique ou électrique",
        "Capacité : 25-100 L",
        "Buse réglable",
        "Tuyau flexible longue portée",
      ],
      recommandation: "Pour grandes surfaces après nettoyage mécanique",
      icon: <Wind className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      equipement: "Outils manuels de nettoyage",
      fonction: "Entretien quotidien zones sensibles",
      specifications: [
        "Brosses dures et raclettes caoutchouc",
        "Seaux de désinfectant",
        "Serpillères industrielles",
        "Équipement spécifique par bâtiment",
      ],
      recommandation: "Éviter contamination croisée entre bâtiments",
      icon: <Brush className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
    },
    {
      equipement: "Pulvérisateur manuel",
      fonction: "Application précise sur petites zones",
      specifications: [
        "Pression préalable 15–20 L",
        "Pour zones restreintes",
        "Utilisation complémentaire",
        "Manutention facile",
      ],
      recommandation: "Pour nids, trappes, zones difficiles d'accès",
      icon: <SprayCan className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
    },
  ];

  const desinfectantsHomologues = [
    {
      type: "Glutaraldéhyde + ammoniums quaternaires",
      exemples: "CID20, TH4+, Virocid",
      application: "Pulvérisation complète mur à mur",
      efficacite: "Large spectre bactéricide et virucide",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      type: "Peroxyde d'hydrogène / acide peracétique",
      exemples: "Nébulisation",
      application: "Désinfection aérienne",
      efficacite: "Action rapide, résidus minimaux",
      icon: <Wind className="h-4 w-4" />,
    },
    {
      type: "Chaux vive",
      exemples: "Pour sols",
      application: "Assainissement des sols",
      efficacite: "Désinfection profonde, contrôle pH",
      icon: <Droplet className="h-4 w-4" />,
    },
  ];

  const stockageAliment = [
    {
      element: "Silo de stockage",
      specifications: "Métallique ou plastique, capacité 1-2 tonnes",
      fonction: "Conservation aliments secs, protection contre rongeurs",
      icon: <Warehouse className="h-4 w-4" />,
    },
    {
      element: "Auges / bacs de pesée",
      specifications: "Inox ou plastique alimentaire",
      fonction: "Distribution quotidienne, contrôle portions",
      icon: <Container className="h-4 w-4" />,
    },
    {
      element: "Balance d'aliment",
      specifications: "Plateforme ou suspendue, précision ± 50 g",
      fonction: "Pesée précise des rations",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      element: "Local de stockage",
      specifications: "Abri ventilé, sol cimenté, accès protégé",
      fonction: "Préserver qualité aliments, prévenir contamination",
      icon: <Package className="h-4 w-4" />,
    },
  ];

  const stockageEau = [
    {
      element: "Réservoir principal",
      capacite: "≥ 3,000 L",
      fonction: "Stockage eau brute, autonomie 24-48h",
      specifications: "Citerne polyéthylène alimentaire, couvercle étanche",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      element: "Réservoir tampon par bâtiment",
      capacite: "≥ 1,000 L",
      fonction: "Distribution localisée, régulation pression",
      specifications: "Inox ou plastique, avec indicateur niveau",
      icon: <Container className="h-4 w-4" />,
    },
    {
      element: "Pompe et système filtration",
      capacite: "Débit adapté aux besoins",
      fonction: "Distribution pression constante, filtration particules",
      specifications: "Filtre 100-150 microns, vanne antiretour",
      icon: <Filter className="h-4 w-4" />,
    },
  ];

  const equipementsSecurite = [
    {
      categorie: "Protection incendie",
      equipements: [
        "Extincteurs à poudre sèche (6 kg minimum)",
        "Couvertures anti-feu",
        "Détecteurs de fumée",
      ],
      emplacement: "Entrée bâtiment, local technique, zones à risque",
      icon: <AlertTriangle className="h-4 w-4" />,
      couleur: "bg-red-100 text-red-800",
    },
    {
      categorie: "Premiers secours",
      equipements: [
        "Trousse complète premiers secours",
        "Défibrillateur (optionnel mais recommandé)",
        "Poste de lavage oculaire",
      ],
      emplacement: "Bureau, salle de repos, entrée principale",
      icon: <Ambulance className="h-4 w-4" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      categorie: "Énergie de secours",
      equipements: [
        "Générateur diesel ou solaire",
        "Onduleurs pour équipements critiques",
        "Éclairage de secours",
      ],
      emplacement: "Local technique protégé, accès facile",
      icon: <Power className="h-4 w-4" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      categorie: "Signalisation",
      equipements: [
        "Panneaux sécurité électrique",
        "Signalisation incendie",
        "Plan d'évacuation",
        "Consignes d'urgence",
      ],
      emplacement: "Points stratégiques, sorties, zones dangereuses",
      icon: <Shield className="h-4 w-4" />,
      couleur: "bg-amber-100 text-amber-800",
    },
  ];

  const protocoleNettoyage = [
    {
      etape: "1. Pré-nettoyage à sec",
      description: "Élimination grossière des fientes et déchets",
      outils: ["Raclette", "Brosse", "Balai"],
      duree: "2-3 heures",
    },
    {
      etape: "2. Nettoyage humide haute pression",
      description: "Décollage des dépôts avec eau chaude sous pression",
      outils: ["Nettoyeur 120-180 bars", "Eau ≥ 60°C"],
      duree: "4-6 heures",
    },
    {
      etape: "3. Application détergent",
      description: "Élimination des graisses et biofilms résiduels",
      outils: ["Pulvérisateur", "Détergent avicole"],
      duree: "1-2 heures",
    },
    {
      etape: "4. Rinsage complet",
      description: "Élimination des résidus de détergent",
      outils: ["Nettoyeur haute pression", "Eau propre"],
      duree: "2-3 heures",
    },
    {
      etape: "5. Désinfection",
      description: "Application du désinfectant homologué",
      outils: ["Pulvérisateur", "Désinfectant avicole"],
      duree: "1-2 heures",
    },
    {
      etape: "6. Séchage",
      description: "Séchage complet avant introduction nouveau lot",
      outils: ["Ventilation naturelle", "Ventilateurs"],
      duree: "24-48 heures",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-indigo-700 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  ÉQUIPEMENTS TECHNIQUES & HYGIÈNE - OVOLIA
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Matériel de nettoyage, stockage et sécurité pour 2,500
                  pondeuses
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Protocole biosécurité strict
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Documentation complète des équipements nécessaires pour l'hygiène
              des bâtiments, le stockage des intrants et la sécurité de
              l'élevage. Ce guide couvre les spécifications techniques, les
              protocoles d'utilisation et les bonnes pratiques pour maintenir un
              environnement sain et productif.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {statistiquesEquipement.map((stat, index) => (
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
        <Tabs defaultValue="hygiene" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hygiene">Hygiène & Nettoyage</TabsTrigger>
            <TabsTrigger value="stockage">Stockage Intrants</TabsTrigger>
            <TabsTrigger value="securite">Sécurité & Urgence</TabsTrigger>
            <TabsTrigger value="protocole">Protocole complet</TabsTrigger>
          </TabsList>

          {/* SECTION : HYGIÈNE & NETTOYAGE */}
          <TabsContent value="hygiene" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {equipementsHygiene.map((equip, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-300">
                    <CardContent className="pt-4">
                      <div className="flex items-start mb-3">
                        <div className={`p-2 rounded-lg ${equip.couleur} mr-3`}>
                          {equip.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold">
                              {equip.equipement}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {equip.fonction}
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Spécifications :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {equip.specifications.map((spec, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Recommandation :</span>{" "}
                        {equip.recommandation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Désinfectants homologués pour aviculture
                  </CardTitle>
                  <CardDescription>
                    Produits autorisés et recommandés pour la désinfection des
                    bâtiments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {desinfectantsHomologues.map((desinfectant, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-l-green-300 pl-4 py-2"
                      >
                        <div className="flex items-center mb-1">
                          <div className="p-1 bg-green-100 rounded mr-2">
                            {desinfectant.icon}
                          </div>
                          <h4 className="font-medium">{desinfectant.type}</h4>
                        </div>
                        <div className="ml-6">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Exemples :</span>{" "}
                            {desinfectant.exemples}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Application :</span>{" "}
                            {desinfectant.application}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Efficacité :</span>{" "}
                            {desinfectant.efficacite}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Alert className="mt-6">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Règle d'or d'hygiène</AlertTitle>
                    <AlertDescription className="text-sm">
                      Utiliser des outils spécifiques à chaque bâtiment pour
                      éviter la contamination croisée. Désinfecter avant chaque
                      entrée de lot et hebdomadairement pour les zones
                      sensibles.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION : STOCKAGE INTRANTS */}
          <TabsContent value="stockage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Stockage des aliments
                  </CardTitle>
                  <CardDescription>
                    Équipements pour conservation et distribution des aliments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stockageAliment.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{item.element}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">
                              Spécifications :
                            </span>{" "}
                            {item.specifications}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Fonction :</span>{" "}
                            {item.fonction}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-amber-700">
                      Conditions optimales de stockage
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2" />
                        Température : 10-15°C constante
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2" />
                        Humidité relative : 65%
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2" />
                        Protection absolue contre rongeurs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2" />
                        Rotation FIFO (First In, First Out)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplets className="h-5 w-5 mr-2" />
                    Stockage et distribution d'eau
                  </CardTitle>
                  <CardDescription>
                    Systèmes pour garantir une eau de qualité en permanence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stockageEau.map((item, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-blue-300"
                      >
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <div className="p-1 bg-blue-100 rounded mr-2">
                                {item.icon}
                              </div>
                              <h4 className="font-medium">{item.element}</h4>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800">
                              {item.capacite}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Fonction :</span>{" "}
                            {item.fonction}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">
                              Spécifications :
                            </span>{" "}
                            {item.specifications}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      Contrôles qualité eau recommandés
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <p className="font-medium">Bactériologie</p>
                        <p className="text-gray-600">Mensuelle</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="font-medium">pH</p>
                        <p className="text-gray-600">Hebdomadaire</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="font-medium">Dureté</p>
                        <p className="text-gray-600">Trimestrielle</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="font-medium">Nitrates</p>
                        <p className="text-gray-600">Semestrielle</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION : SÉCURITÉ & URGENCE */}
          <TabsContent value="securite" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {equipementsSecurite.map((categorie, index) => (
                <Card key={index} className="border-l-4 border-l-red-300">
                  <CardHeader>
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg ${categorie.couleur} mr-3`}
                      >
                        {categorie.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {categorie.categorie}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Équipements requis :
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {categorie.equipements.map((equip, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-red-400 rounded-full mt-1.5 mr-2"></div>
                            {equip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Emplacement :
                      </p>
                      <p className="text-sm text-gray-600">
                        {categorie.emplacement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="bg-emerald-50">
                <CardTitle>Plan d'urgence recommandé</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-red-100 text-red-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">Incendie</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Extincteurs accessibles, évacuation immédiate
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Power className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">Panne électrique</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Générateur démarrage automatique en 30 secondes
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Ambulance className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">Accident personnel</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Trousse premiers secours complète, formation obligatoire
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : PROTOCOLE COMPLET */}
          <TabsContent value="protocole" className="space-y-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Protocole complet de nettoyage et désinfection
                </CardTitle>
                <CardDescription>
                  Étapes successives pour l'assainissement entre chaque lot de
                  pondeuses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {protocoleNettoyage.map((etape, index) => (
                    <div key={index} className="flex items-start">
                      <div className="shrink-0 w-10 h-10 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-bold mr-4">
                        {etape.etape.split(".")[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold">{etape.etape}</h4>
                          <Badge variant="outline">{etape.duree}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {etape.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {etape.outils.map((outil, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {outil}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">
                      Fréquence recommandée
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex justify-between">
                        <span>Entre chaque lot (vide sanitaire) :</span>
                        <Badge className="bg-green-100 text-green-800">
                          Complet
                        </Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Zones sensibles (nids, abreuvoirs) :</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          Hebdomadaire
                        </Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Allées et circulation :</span>
                        <Badge className="bg-amber-100 text-amber-800">
                          Quotidien
                        </Badge>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      Contrôles qualité post-nettoyage
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Contrôle visuel (absence dépôts, propreté)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Tests bactériologiques surfaces (boîtes contact)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Vérification séchage complet avant réintroduction
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommandations finales */}
        <Card className="mt-8 border-l-4 border-l-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle>Investissements prioritaires pour Ovolia</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Équipements indispensables
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      1
                    </Badge>
                    <span>
                      Nettoyeur haute pression mobile (180 bars, eau chaude)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      2
                    </Badge>
                    <span>
                      Pulvérisateur motorisé 100L pour désinfection complète
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      3
                    </Badge>
                    <span>
                      Système complet stockage eau avec filtration et pompe
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Planification et formation
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      A
                    </Badge>
                    <span>
                      Établir un programme rigoureux de nettoyage entre lots
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      B
                    </Badge>
                    <span>Former le personnel aux protocoles biosécurité</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      C
                    </Badge>
                    <span>
                      Tenir un registre des nettoyages et désinfections
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <Alert>
              <Zap className="h-4 w-4" />
              <AlertTitle>Impact sur la santé du troupeau</AlertTitle>
              <AlertDescription className="text-sm">
                Un protocole d'hygiène rigoureux avec les équipements adaptés
                peut réduire l'incidence des maladies de 40-60%, améliorer les
                performances de ponte de 5-10%, et diminuer significativement
                l'utilisation d'antibiotiques.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
