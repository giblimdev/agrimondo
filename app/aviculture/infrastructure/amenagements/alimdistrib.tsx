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
  Target,
  Utensils,
  Ruler,
  Layout,
  Wrench,
  Users,
  AlertTriangle,
  Calendar,
  CheckCircle,
  Shield,
  Gauge,
  Droplets,
  Wind,
  Sun,
  Zap,
  ClipboardCheck,
  Package,
  Settings,
  BarChart,
} from "lucide-react";

export default function Mangeoires() {
  const objectifsFonctionnels = [
    {
      titre: "Accès égal",
      description:
        "Permettre à toutes les poules de s'alimenter sans compétition",
      resultat: "Réduction du stress et comportement uniforme",
      icon: <Users className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      titre: "Distribution contrôlée",
      description: "Limiter le gaspillage et optimiser la consommation",
      resultat: "Réduction des pertes d'aliment",
      icon: <Gauge className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      titre: "Hygiène optimale",
      description: "Réduire risques sanitaires (mycotoxines, moisissures)",
      resultat: "Prévention des contaminations fécales",
      icon: <Shield className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
    },
    {
      titre: "Adaptation aux phases",
      description: "Ajustement selon âge et production",
      resultat: "Optimisation nutritionnelle par cycle",
      icon: <Calendar className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
    },
    {
      titre: "Ergonomie de travail",
      description: "Charge de travail réduite et remplissage facilité",
      resultat: "Efficacité opérationnelle",
      icon: <Settings className="h-5 w-5" />,
      couleur: "bg-cyan-100 text-cyan-800",
    },
  ];

  const typesMangeoires = [
    {
      type: "Mangeoires à trémie linéaires",
      description:
        "Virole cylindrique avec trémie supérieure et gouttière linéaire",
      avantages:
        "Distribution uniforme, stockage tampon (1-2 jours), limite contamination",
      limites: "Requiert espace linéaire suffisant",
      recommandation: true,
      caracteristiques: [
        "Largeur: 8-12 cm/poule",
        "Hauteur réglable: 40-60 cm",
        "Capacité trémie: 10-30 kg/ligne",
      ],
    },
    {
      type: "Mangeoires à tasseaux (Pan Feeders)",
      description: "Distributeur à rotation avec cuvettes individuelles",
      avantages:
        "Contrôle de portion précis, nettoyage facile, moins de contact avec fientes",
      limites: "Moins adapté pour 2 500 pondeuses, coût plus élevé",
      recommandation: false,
      caracteristiques: [
        "Portionnement précis",
        "Cuves individuelles",
        "Adapté jeunes animaux",
      ],
    },
  ];

  const criteresChoix = [
    {
      critere: "Accessibilité",
      importance: "Très élevée",
      cible: "10-12 cm de mangeoire/poule",
      icon: <Users className="h-4 w-4" />,
    },
    {
      critere: "Contrôle du gaspillage",
      importance: "Élevée",
      cible: "Mangeoires à trémie ou tasseaux",
      icon: <Gauge className="h-4 w-4" />,
    },
    {
      critere: "Hygiène",
      importance: "Très élevée",
      cible: "Surface lisse, drainage facile",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      critere: "Automatisation",
      importance: "Moyenne",
      cible: "Remplissage semi-automatique",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      critere: "Coût d'installation",
      importance: "Moyenne",
      cible: "Trémie linéaire standard",
      icon: <Package className="h-4 w-4" />,
    },
    {
      critere: "Maintenance",
      importance: "Moyenne",
      cible: "Pièces modulaires remplaçables",
      icon: <Wrench className="h-4 w-4" />,
    },
  ];

  const dimensionnement = [
    {
      parametre: "Longueur totale requise",
      calcul: "2 500 × 0,12 = 300 m",
      resultat: "300 m linéaires",
      details: "10-12 cm/poule",
    },
    {
      parametre: "Configuration lignes",
      calcul: "6 lignes × 50 m ou 5 × 60 m",
      resultat: "5-6 lignes parallèles",
      details: "Selon géométrie bâtiment",
    },
    {
      parametre: "Espacement",
      calcul: "Minimum requis",
      resultat: "1,2-1,4 m entre lignes",
      details: "Pour circulation optimale",
    },
    {
      parametre: "Hauteur réglable",
      calcul: "Adaptation selon âge",
      resultat: "40-60 cm",
      details: "40-50 cm jeunes → 50-60 cm adultes",
    },
  ];

  const implantation = [
    {
      zone: "Configuration type",
      description: "Lignes parallèles espacées 1,2-1,4 m",
      details: "Alternance mangeoire/abreuvoir",
      icon: <Layout className="h-4 w-4" />,
    },
    {
      zone: "Positionnement",
      description: "À mi-hauteur du profil des poules",
      details: "Zone de litière active",
      icon: <Ruler className="h-4 w-4" />,
    },
    {
      zone: "Aires tampons",
      description: "Extrémités équipées pour nettoyage",
      details: "Accès pour tracteur manuel ou pelle à vide",
      icon: <Settings className="h-4 w-4" />,
    },
    {
      zone: "Alignement",
      description: "Ligne droite ou légèrement courbe",
      details: "Selon contrainte structurelle",
      icon: <Wind className="h-4 w-4" />,
    },
  ];

  const entretien = [
    {
      frequence: "Quotidienne",
      actions: [
        "Éliminer restes visibles autour mangeoires",
        "Ramasser grains dispersés",
        "Vérifier niveau d'aliment",
      ],
      objectif: "Réduction vecteurs de maladies",
    },
    {
      frequence: "Hebdomadaire",
      actions: [
        "Nettoyer trémie des poussières",
        "Vérifier usure bordures protection",
        "Contrôler supports et crochets",
      ],
      objectif: "Maintenance préventive",
    },
    {
      frequence: "Mensuelle",
      actions: [
        "Rinçage détergent alcalin",
        "Désinfection (quats/peroxydes)",
        "Séchage complet",
      ],
      objectif: "Conformité ICA",
    },
  ];

  const pointsCritiques = [
    {
      point: "Trappes d'accès",
      description: "Sécurisées mais accessibles",
      importance: "Haute",
    },
    {
      point: "Étanchéité trémie",
      description: "Éviter humidité et agglomération",
      importance: "Haute",
    },
    {
      point: "Supports robustes",
      description: "Éviter basculement ou balancement",
      importance: "Moyenne",
    },
  ];

  const ergonomie = [
    {
      aspect: "Hauteur d'accès",
      solution: "Trémies à 1,5 m maximum",
      benefice: "Réduction fatigue sans échelle",
    },
    {
      aspect: "Zone de remplissage",
      solution: "Auvent ou aire latérale",
      benefice: "Approvisionnement facilité",
    },
    {
      aspect: "Visualisation niveau",
      solution: "Fenêtre translucide sur trémie",
      benefice: "Contrôle sans ouverture fréquente",
    },
    {
      aspect: "Éclairage",
      solution: "Éclairage dirigé opérations",
      benefice: "Sécurité et efficacité",
    },
  ];

  const problemesCourants = [
    {
      probleme: "Gaspillage excessif",
      causes: [
        "Mangeoires trop larges",
        "Niveau d'aliment trop haut",
        "Abreuvoirs trop proches → humidité",
      ],
      solutions: [
        "Réduire largeur par barrières internes",
        "Ajuster niveau distribution",
        "Séparer mangeoires/abreuvoirs",
      ],
    },
    {
      probleme: "Aliments humides/moisissures",
      causes: [
        "Contact avec fientes",
        "Entrée d'eau climat humide",
        "Étanchéité insuffisante",
      ],
      solutions: [
        "Surélever mangeoires de la litière",
        "Vérifier étanchéité toiture/rideaux",
        "Maintenir drainage efficace",
      ],
    },
  ];

  const recommandationsPhase = [
    {
      phase: "Démarrage (0-6 sem.)",
      ajustement: "Réduction hauteur, plus de postes courts",
      notes: "Faciliter accès jeunes poules",
    },
    {
      phase: "Croissance (7-14 sem.)",
      ajustement: "Hauteur progressive",
      notes: "Suivre morphologie croissance",
    },
    {
      phase: "Pré-ponte",
      ajustement: "Standard hauteur, flux stable",
      notes: "Préparer pic consommation",
    },
    {
      phase: "Ponte pic",
      ajustement: "Maintien débit constant",
      notes: "Éviter stress alimentaire",
    },
    {
      phase: "Fin de cycle",
      ajustement: "Pas de changement majeur",
      notes: "Contrôle gaspillage",
    },
  ];

  const syntheseTechnique = [
    {
      element: "Largeur de mangeoire",
      norme: "10-12 cm/poule",
      details: "Accès optimal",
    },
    {
      element: "Longueur totale",
      norme: "~300 m linéaires",
      details: "2 500 × 0,12 m",
    },
    {
      element: "Nombre de lignes",
      norme: "5 à 6 lignes parallèles",
      details: "Selon configuration bâtiment",
    },
    {
      element: "Hauteur réglable",
      norme: "40-60 cm",
      details: "Adaptation selon âge",
    },
    {
      element: "Type préconisé",
      norme: "Trémie linéaire",
      details: "+ Pan feeders optionnels",
    },
    {
      element: "Matériau",
      norme: "PVC alimentaire / acier galvanisé",
      details: "Facilité nettoyage et durabilité",
    },
    {
      element: "Distance abreuvoirs",
      norme: "Alternance mangeoire/pipettes",
      details: "Optimisation circulation",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-amber-700 to-orange-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  DOCUMENT TECHNIQUE SUR LES MANGEOIRES
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Élevage de poules pondeuses au sol – 2 500 sujets – Popayán,
                  Colombie
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-amber-700 hover:bg-white">
                Système haute performance
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Système de mangeoires à trémie linéaire offrant distribution
              uniforme, contrôle optimal du gaspillage et hygiène renforcée pour
              élevage au sol tropical. Configuration adaptée au climat humide de
              Popayán avec ergonomie améliorée pour l'équipe d'élevage.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Ruler className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Longueur totale</p>
                  <p className="text-2xl font-bold">300 m</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Layout className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nombre de lignes</p>
                  <p className="text-2xl font-bold">5-6</p>
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
                  <p className="text-sm text-gray-500">Espace par poule</p>
                  <p className="text-2xl font-bold">12 cm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Gauge className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Réduction gaspillage</p>
                  <p className="text-2xl font-bold"> 30%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="objectifs" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="criteres">Critères</TabsTrigger>
            <TabsTrigger value="dimension">Dimension</TabsTrigger>
            <TabsTrigger value="implantation">Implantation</TabsTrigger>
            <TabsTrigger value="entretien">Entretien</TabsTrigger>
            <TabsTrigger value="ergonomie">Ergonomie</TabsTrigger>
            <TabsTrigger value="synthese">Synthèse</TabsTrigger>
          </TabsList>

          {/* Section Objectifs */}
          <TabsContent value="objectifs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Objectifs fonctionnels du système d'alimentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {objectifsFonctionnels.map((objectif, index) => (
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
                    <BarChart className="h-5 w-5 mr-2" />
                    Principes de conception
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-700">
                        Contexte Popayán
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-amber-100 text-amber-800">
                            Climat
                          </Badge>
                          <span>
                            Humide tropical (70-90% HR) → contrôle humidité
                            critique
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Matériaux
                          </Badge>
                          <div>
                            <p>• PVC alimentaire résistant à l'humidité</p>
                            <p>• Acier galvanisé anti-corrosion</p>
                            <p>• Surfaces lisses pour nettoyage facile</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Stratégie d'alimentation
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Distribution
                          </Badge>
                          <span>
                            Programme horaire adapté aux pics d'activité
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Contrôle
                          </Badge>
                          <span>
                            Mesure quotidienne des restes et ajustements
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Badge className="mr-2 bg-green-100 text-green-800">
                            Complémentarité
                          </Badge>
                          <span>Coordination avec système d'abreuvement</span>
                        </li>
                      </ul>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>Équité d'accès</AlertTitle>
                      <AlertDescription className="text-sm">
                        L'espace de 12 cm par poule garantit que toutes les
                        animaux puissent s'alimenter simultanément sans stress
                        compétitif
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Types de mangeoires */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2" />
                  Types de mangeoires recommandés
                </CardTitle>
                <CardDescription>
                  Choix recommandé : Mangeoires à trémie linéaires pour
                  distribution uniforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {typesMangeoires.map((type, index) => (
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

                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-700 mb-1">
                            Caractéristiques :
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {type.caracteristiques.map((caract, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mt-1 mr-2"></div>
                                {caract}
                              </li>
                            ))}
                          </ul>
                        </div>

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

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 text-amber-700">
                    Configuration mixte possible
                  </h4>
                  <p className="text-sm text-gray-700">
                    Combinaison possible : trémies linéaires principales +
                    quelques mangeoires à tasseaux pour zones spécifiques
                    (jeunes animaux ou surveillance rapprochée)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Critères de choix */}
          <TabsContent value="criteres" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2" />
                  Critères de choix
                </CardTitle>
                <CardDescription>
                  Priorisation des critères pour sélection du système optimal
                </CardDescription>
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
                          Importance
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Cible pour 2 500 pondeuses
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {criteresChoix.map((critere, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3">
                            <div className="flex items-center">
                              <div className="mr-2">{critere.icon}</div>
                              <span className="font-medium">
                                {critere.critere}
                              </span>
                            </div>
                          </td>
                          <td className="border p-3">
                            <Badge
                              className={
                                critere.importance === "Très élevée"
                                  ? "bg-red-100 text-red-800"
                                  : critere.importance === "Élevée"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-blue-100 text-blue-800"
                              }
                            >
                              {critere.importance}
                            </Badge>
                          </td>
                          <td className="border p-3">{critere.cible}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-700">
                    Justification des critères
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                      <span>
                        <strong>Accessibilité prioritaire :</strong> Évite
                        compétition et stress, impact direct sur bien-être et
                        production
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                      <span>
                        <strong>Hygiène élevée :</strong> Climat humide de
                        Popayán augmente risques de mycotoxines et moisissures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                      <span>
                        <strong>Automatisation modérée :</strong> Équilibre
                        entre investissement et réduction charge de travail
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Dimensionnement */}
          <TabsContent value="dimension" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Ruler className="h-5 w-5 mr-2" />
                    Dimensionnement technique
                  </CardTitle>
                  <CardDescription>
                    Calculs basés sur 2 500 poules pondeuses au sol
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Paramètre
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Calcul
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Résultat
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Détails
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dimensionnement.map((item, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {item.parametre}
                            </td>
                            <td className="border p-3 font-mono">
                              {item.calcul}
                            </td>
                            <td className="border p-3">
                              <Badge className="bg-blue-100 text-blue-800">
                                {item.resultat}
                              </Badge>
                            </td>
                            <td className="border p-3 text-sm text-gray-600">
                              {item.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">
                      Règle fondamentale
                    </h4>
                    <p className="text-sm text-gray-600">
                      Pour éviter compétition : minimum 10 cm linéaire/poule.
                      Pour confort optimal : 12 cm linéaire/poule recommandé.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layout className="h-5 w-5 mr-2" />
                    Schéma de disposition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <div className="text-center font-mono text-sm mb-4">
                      +----------------------------------------------+
                    </div>
                    <div className="text-center font-mono text-sm mb-2">
                      | Entrée / Couloir service |
                    </div>
                    <div className="text-center font-mono text-sm mb-2">
                      | |
                    </div>
                    <div className="text-center font-mono text-sm mb-2 text-green-600 font-semibold">
                      | Mangeoires (6 lignes, 50 m) |
                    </div>
                    <div className="text-center font-mono text-sm mb-2 text-blue-600">
                      | Abreuvoirs (pipettes alignées par ligne) |
                    </div>
                    <div className="text-center font-mono text-sm mb-2">
                      | |
                    </div>
                    <div className="text-center font-mono text-sm mb-2">
                      | Zone de litière active |
                    </div>
                    <div className="text-center font-mono text-sm mb-2">
                      | Bains de poussière / Perchoirs / Nids |
                    </div>
                    <div className="text-center font-mono text-sm">
                      +----------------------------------------------+
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <Badge className="mr-2 bg-green-100 text-green-800">
                        Note
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Alternance mangeoire/abreuvoir pour limiter queue devant
                        une seule ligne et optimiser circulation
                      </p>
                    </div>

                    <div className="flex items-start">
                      <Badge className="mr-2 bg-red-100 text-red-800">
                        Important
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Bloquer accès extrémités avec butoirs pour éviter
                        raclage du sol vers l'intérieur des mangeoires
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Implantation */}
          <TabsContent value="implantation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layout className="h-5 w-5 mr-2" />
                  Implantation pratique dans le bâtiment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">
                      Configuration spatiale
                    </h4>
                    <div className="space-y-4">
                      {implantation.map((item, index) => (
                        <Card
                          key={index}
                          className="border-l-4 border-l-amber-300"
                        >
                          <CardContent className="pt-4">
                            <div className="flex items-start">
                              <div className="p-2 bg-amber-100 rounded-lg mr-3">
                                {item.icon}
                              </div>
                              <div>
                                <h5 className="font-medium">{item.zone}</h5>
                                <p className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </p>
                                <Badge
                                  variant="outline"
                                  className="mt-2 text-xs"
                                >
                                  {item.details}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">
                      Considérations climatiques
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Droplets className="h-4 w-4 mr-2 text-blue-600" />
                          <h5 className="font-medium text-blue-700">
                            Humidité élevée
                          </h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Prévoir surélévation supplémentaire (5-10 cm) pour
                          éviter contact avec litière humide
                        </p>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Sun className="h-4 w-4 mr-2 text-yellow-600" />
                          <h5 className="font-medium text-yellow-700">
                            Exposition solaire
                          </h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Éviter exposition directe prolongée qui pourrait
                          dégrader qualité aliment
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Wind className="h-4 w-4 mr-2 text-green-600" />
                          <h5 className="font-medium text-green-700">
                            Ventilation
                          </h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Positionner pour ne pas obstruer circulation d'air
                          dans zone litière active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Entretien */}
          <TabsContent value="entretien" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Hygiène et maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {entretien.map((item, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-gray-300"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              {item.frequence}
                            </CardTitle>
                            <Badge
                              className={
                                item.frequence === "Quotidienne"
                                  ? "bg-red-100 text-red-800"
                                  : item.frequence === "Hebdomadaire"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-blue-100 text-blue-800"
                              }
                            >
                              {item.frequence}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">
                              Actions :
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {item.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mt-1.5 mr-2"></div>
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-xs font-medium text-gray-700">
                              Objectif : {item.objectif}
                            </p>
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
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Points critiques d'entretien
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pointsCritiques.map((point, index) => (
                      <Card key={index} className="border-l-4 border-l-red-300">
                        <CardContent className="pt-4">
                          <div className="mb-2">
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium">{point.point}</h5>
                              <Badge
                                className={
                                  point.importance === "Haute"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {point.importance}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {point.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-3 text-yellow-700">
                      Désinfection conforme ICA
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Produits homologués : quats ammonium ou peroxydes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Rinçage eau claire après désinfection obligatoire
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>Séchage complet avant remise en service</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                        <span>
                          Tenue registre de désinfection avec date et produit
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Ergonomie */}
          <TabsContent value="ergonomie" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Ergonomie de travail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ergonomie.map((item, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-green-300"
                      >
                        <CardContent className="pt-4">
                          <div className="mb-2">
                            <h5 className="font-medium">{item.aspect}</h5>
                          </div>
                          <div className="flex items-start mb-2">
                            <Badge className="mr-2 bg-blue-100 text-blue-800">
                              Solution
                            </Badge>
                            <p className="text-sm">{item.solution}</p>
                          </div>
                          <div className="flex items-start">
                            <Badge className="mr-2 bg-green-100 text-green-800">
                              Bénéfice
                            </Badge>
                            <p className="text-sm text-gray-600">
                              {item.benefice}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      Organisation du travail
                    </h4>
                    <p className="text-sm text-gray-600">
                      Planification des tâches d'alimentation aux heures
                      fraîches (matin/tard) pour améliorer confort opérateur et
                      réduire stress thermique
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Prévention des problèmes courants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {problemesCourants.map((probleme, index) => (
                      <Card key={index} className="border-l-4 border-l-red-300">
                        <CardContent className="pt-4">
                          <h5 className="font-medium text-red-700 mb-3">
                            {probleme.probleme}
                          </h5>

                          <div className="mb-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">
                              Causes possibles :
                            </p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {probleme.causes.map((cause, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-red-400 rounded-full mt-1 mr-2"></div>
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-medium text-gray-700 mb-1">
                              Solutions recommandées :
                            </p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {probleme.solutions.map((solution, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-green-400 rounded-full mt-1 mr-2"></div>
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Synthèse */}
          <TabsContent value="synthese" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardCheck className="h-5 w-5 mr-2" />
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
                            Norme / Recommandation
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Détails
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {syntheseTechnique.map((item, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {item.element}
                            </td>
                            <td className="border p-3">
                              <Badge className="bg-blue-100 text-blue-800">
                                {item.norme}
                              </Badge>
                            </td>
                            <td className="border p-3 text-sm text-gray-600">
                              {item.details}
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
                    <Calendar className="h-5 w-5 mr-2" />
                    Recommandations par phase d'élevage
                  </CardTitle>
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
                            Ajustement mangeoire
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recommandationsPhase.map((phase, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {phase.phase}
                            </td>
                            <td className="border p-3">{phase.ajustement}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {phase.notes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

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
                      <p className="font-medium">Système optimal</p>
                      <p className="text-sm text-gray-600">
                        Mangeoires à trémie linéaires pour uniformité et stock
                        tampon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded mr-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Dimensionnement précis</p>
                      <p className="text-sm text-gray-600">
                        300 m linéaires répartis sur 5-6 lignes parallèles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded mr-3">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Adaptation climatique</p>
                      <p className="text-sm text-gray-600">
                        Surélévation et matériaux adaptés à l'humidité de
                        Popayán
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                    <div className="p-2 bg-amber-100 rounded mr-3">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Ergonomie améliorée</p>
                      <p className="text-sm text-gray-600">
                        Hauteur d'accès et visualisation facilitées pour
                        l'équipe
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Ce système de mangeoires bien dimensionné et correctement
                    implanté constitue un élément clé de la productivité et du
                    bien-être dans un élevage de pondeuses au sol. La
                    combinaison proposée offre un excellent compromis
                    performance/hygiène/ergonomie/coût, garantissant accès
                    équitable à l'aliment, réduction des pertes, meilleure
                    gestion sanitaire et ergonomie facilitée pour l'équipe
                    d'élevage, conforme aux directives ICA pour élevages
                    avicoles semi-intensifs tropicaux.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
