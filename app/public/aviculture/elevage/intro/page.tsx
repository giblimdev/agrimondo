// app/page.tsx (ou votre page principale)
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
import {
  Target,
  Shield,
  Users,
  Award,
  Globe,
  Building,
  Egg,
  TrendingUp,
  Package,
} from "lucide-react";
import MercadoColombiano from "./MercadoColombiano";
import Race from "./Race";

export default function Page() {
  const objetivosProyecto = [
    {
      titulo: "Objectif principal",
      descripcion:
        "Produire des œufs frais de haute qualité pour le marché local et régional",
      icon: <Target className="h-5 w-5" />,
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      titulo: "Méthode",
      descripcion:
        "Pratiques modernes, gestion rigoureuse des lots, suivi zootechnique & sanitaire",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      titulo: "Impact social",
      descripcion:
        "Emploi local, autonomie alimentaire, valorisation des sous-produits (compost, etc.)",
      icon: <Users className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
    },
  ];

  const estructuraProyecto = [
    {
      seccion: "Structure de l'unité avicole",
      items: [
        "Bâtiments adaptés au climat de Popayán",
        "Ventilation et alimentation (semi) automatisée",
        "Poules sélectionnées pour productivité et résistance",
        "Alimentation équilibrée (matières premières locales)",
        "Protocoles de biosécurité + registres de production",
        "Commercialisation: marchés urbains, hôtels, restaurants",
      ],
      icon: <Building className="h-5 w-5" />,
      borderColor: "border-blue-500",
    },
    {
      seccion: "Contribution & durabilité",
      items: [
        "Création d'emplois (jeunes, femmes rurales)",
        "Dynamisation économique locale",
        "Renforcement de l'autonomie alimentaire",
        "Économie circulaire: valorisation fientes/coquilles",
        "Diffusion de bonnes pratiques agricoles",
        "Gestion responsable des ressources",
      ],
      icon: <Globe className="h-5 w-5" />,
      borderColor: "border-green-500",
    },
  ];

  const decisionSouche = [
    {
      etape: "Choix retenu",
      description: "Souche commerciale 'œuf brun' : Hy‑Line Brown",
      icon: <Target className="h-4 w-4" />,
    },
    {
      etape: "Pourquoi maintenant",
      description: "Verrouiller une base génétique stable avant investissement",
      icon: <Award className="h-4 w-4" />,
    },
    {
      etape: "Impact attendu",
      description:
        "Meilleure prévisibilité des coûts (aliment) et des volumes (œufs)",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  const argumentsHyLine = [
    {
      titre: "Efficacité alimentaire (poste #1 des coûts)",
      description:
        "Repères d'ingéré 109–117 g/jour, conversion 2.06–2.14 kg d'aliment/kg d'œufs",
      details:
        "Meilleure conversion = marge plus stable quand le prix de l'aliment monte",
      icon: <Package className="h-4 w-4" />,
    },
    {
      titre: "Efficacité 'par œufs' (très lisible)",
      description: "Consommation: 1.23–1.28 kg/10 œufs (20–60 semaines)",
      details: "KPI simple pour suivi de performance en exploitation",
      icon: <Egg className="h-4 w-4" />,
    },
    {
      titre: "Cycle long possible (80 semaines +)",
      description: "Objectifs sur cycles étendus (jusqu'à 90–100 semaines)",
      details:
        "Compatible avec stratégie de cycle long si qualité coquille suivante",
      icon: <Target className="h-4 w-4" />,
    },
    {
      titre: "Standardisation de conduite",
      description: "Guide de performance facilite mise en place de procédures",
      details:
        "Courbe d'ingéré, suivi IC, objectifs de ponte, routines de pesées",
      icon: <Shield className="h-4 w-4" />,
    },
  ];

  const phasesAlimentation = [
    { phase: "Starter", duree: "0–6 sem", color: "bg-blue-100 text-blue-800" },
    {
      phase: "Grower / Developer",
      duree: "7–16 sem",
      color: "bg-green-100 text-green-800",
    },
    {
      phase: "Pré‑ponte",
      duree: "~17–20 sem",
      color: "bg-amber-100 text-amber-800",
    },
    {
      phase: "Pondeuse",
      duree: "entrée en ponte → fin cycle",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-emerald-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-emerald-700 to-green-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  PRÉSENTATION DU PROJET – OVOLIA
                </CardTitle>
                <CardDescription className="text-emerald-100">
                  Élevage de poules pondeuses à Popayán - Qualité, biosécurité,
                  traçabilité et rentabilité
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-emerald-700 hover:bg-white">
                Projet Agricole • 2024
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Un projet d'élevage de poules pondeuses à Popayán axé sur la
              qualité des œufs, la biosécurité, le bien-être animal, la
              traçabilité et la rentabilité, avec une logique de valorisation
              locale et d'économie circulaire.
            </p>
          </CardContent>
        </Card>

        {/* Cartes d'objectifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {objetivosProyecto.map((objetivo, index) => (
            <Card key={index} className="border-l-4 border-l-emerald-500">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${objetivo.color}`}>
                    {objetivo.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{objetivo.titulo}</p>
                    <p className="font-bold">{objetivo.descripcion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="presentacion" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="presentacion">Présentation</TabsTrigger>
            <TabsTrigger value="marche">Marché Colombien</TabsTrigger>
            <TabsTrigger value="races">Sélection des Races</TabsTrigger>
            <TabsTrigger value="decision">Décision Technique</TabsTrigger>
          </TabsList>

          {/* Section Présentation */}
          <TabsContent value="presentacion" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {estructuraProyecto.map((estructura, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${estructura.borderColor}`}
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        {estructura.icon}
                      </div>
                      <div>
                        <CardTitle>{estructura.seccion}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {estructura.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Approche intégrée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <Badge className="bg-emerald-100 text-emerald-800 mb-2">
                      Qualité
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Production d'œufs frais premium avec traçabilité complète
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Badge className="bg-blue-100 text-blue-800 mb-2">
                      Biosécurité
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Protocoles stricts pour santé animale et sécurité
                      alimentaire
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Badge className="bg-amber-100 text-amber-800 mb-2">
                      Durabilité
                    </Badge>
                    <p className="text-sm text-gray-600">
                      Économie circulaire et impact social positif
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Marché */}
          <TabsContent value="marche">
            <MercadoColombiano />
          </TabsContent>

          {/* Section Races */}
          <TabsContent value="races">
            <Race />
          </TabsContent>

          {/* Section Décision Technique */}
          <TabsContent value="decision" className="space-y-6">
            <Card className="border-l-4 border-l-amber-400">
              <CardHeader className="bg-linear-to-r from-amber-50 to-amber-100">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className="bg-amber-500/15 text-amber-700 ring-amber-600/20">
                    Décision souche
                  </Badge>
                  <Badge className="bg-emerald-500/15 text-emerald-700 ring-emerald-600/20">
                    Œufs bruns
                  </Badge>
                  <Badge className="bg-blue-500/15 text-blue-700 ring-blue-600/20">
                    Projet Ovolia • Popayán
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Pourquoi nous choisissons la souche Hy‑Line Brown
                </CardTitle>
                <CardDescription>
                  Maximiser la rentabilité et la stabilité de production d'œufs
                  bruns tout en gardant une conduite simple et standardisable
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {decisionSouche.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4">
                        <div className="flex items-center mb-2">
                          <div className="p-1 bg-gray-100 rounded mr-2">
                            {item.icon}
                          </div>
                          <h4 className="font-semibold">{item.etape}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <h3 className="text-lg font-semibold mb-4">
                  Arguments clés (orientés performance)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {argumentsHyLine.map((arg, index) => (
                    <Card key={index} className="border-l-4 border-l-green-300">
                      <CardContent className="pt-4">
                        <div className="flex items-center mb-2">
                          <div className="p-1 bg-green-100 rounded mr-2">
                            {arg.icon}
                          </div>
                          <h4 className="font-semibold">{arg.titre}</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          {arg.description}
                        </p>
                        <p className="text-sm text-gray-600">{arg.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Implications sur l'alimentation (plan simple)
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Le choix Hy‑Line Brown implique une alimentation par phases
                    et une transition pré‑ponte → pondeuse bien maîtrisée, avec
                    pilotage de l'ingéré et du calcium.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {phasesAlimentation.map((phase, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4 text-center">
                          <Badge className={phase.color}>{phase.phase}</Badge>
                          <p className="text-sm text-gray-600 mt-2">
                            {phase.duree}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-6 border-l-4 border-l-blue-300">
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-700">
                        <strong>KPI alimentaire à suivre :</strong> ingéré
                        (g/j), IC (kg alim/kg œufs), et consommation/10 œufs
                        (kg) comme indicateur opérationnel.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommandations finales */}
        <Card className="mt-8 border-l-4 border-l-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle>Vision et perspectives</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Objectifs à court terme
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      1
                    </Badge>
                    <span>
                      Mise en place de la première unité de 2,500 poules
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      2
                    </Badge>
                    <span>Développement du réseau de distribution local</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      3
                    </Badge>
                    <span>Obtention des certifications ICA et INVIMA</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Perspectives à moyen terme
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      4
                    </Badge>
                    <span>Extension à 5,000 poules pondeuses</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      5
                    </Badge>
                    <span>Développement de la marque Ovolia Premium</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      6
                    </Badge>
                    <span>Exportation vers les marchés régionaux</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
