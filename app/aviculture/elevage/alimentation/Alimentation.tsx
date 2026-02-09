// app/nutrition-poules/page.tsx
"use client";

import { useState } from "react";
import {
  BarChart3,
  Feather,
  Egg,
  ThermometerSun,
  Beaker,
  ShieldCheck,
  Calendar,
  Droplets,
  Scale,
  ChefHat,
  TestTube2,
  Eye,
  Zap,
  Package,
  Calculator,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export default function NutritionPoulesPage() {
  const [activePhase, setActivePhase] = useState("poussin");
  const [activeIngredient, setActiveIngredient] = useState("cereales");

  const phases = {
    poussin: {
      title: "Phase Poussin",
      weeks: "J0 - 6 semaines",
      icon: <Feather className="w-5 h-5" />,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    croissance: {
      title: "Phase Croissance",
      weeks: "7-14 semaines",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    preponte: {
      title: "Phase Pré-Ponte",
      weeks: "15-17 semaines",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    ponte: {
      title: "Phase Ponte",
      weeks: "18 semaines et +",
      icon: <Egg className="w-5 h-5" />,
      color: "bg-rose-100 text-rose-700 border-rose-200",
    },
  };

  const phaseData = {
    poussin: {
      em: "2850-2950 kcal/kg",
      pb: "19-21%",
      ca: "0.9-1.0%",
      pd: "0.45-0.50%",
      objectif: "Croissance osseuse & immunité",
      forme: "Miettes (crumbles)",
      progress: 25,
    },
    croissance: {
      em: "2750-2850 kcal/kg",
      pb: "16-17%",
      ca: "0.9-1.0%",
      pd: "0.40-0.45%",
      objectif: "Développement sans engraissement",
      forme: "Miettes/Farine",
      progress: 50,
    },
    preponte: {
      em: "2750-2850 kcal/kg",
      pb: "15-16%",
      ca: "2.0-2.5%",
      pd: "0.45-0.50%",
      objectif: "Préparation des réserves de calcium",
      forme: "Farine",
      progress: 75,
    },
    ponte: {
      em: "2750-2950 kcal/kg",
      pb: "15.5-18%",
      ca: "3.8-4.8%",
      pd: "0.40-0.50%",
      objectif: "Production d'œufs de qualité",
      forme: "Farine",
      progress: 100,
    },
  };

  const recipes = {
    demarrage: [
      { ingredient: "Maïs", quantity: "500 kg", role: "Énergie, appétence" },
      { ingredient: "Blé", quantity: "120 kg", role: "Énergie complémentaire" },
      {
        ingredient: "Tourteau de Soja 44%",
        quantity: "300 kg",
        role: "Protéines de qualité",
      },
      {
        ingredient: "Huile végétale",
        quantity: "15 kg",
        role: "Concentration énergétique",
      },
      {
        ingredient: "Carbonate de Calcium fin",
        quantity: "10 kg",
        role: "Calcium pour les os",
      },
      {
        ingredient: "DL-Méthionine (99%)",
        quantity: "2.5 kg",
        role: "Acide aminé limitant",
      },
    ],
  };

  const bsfData = [
    {
      nutriment: "Protéines Brutes",
      soja: "44%",
      bsf: "45-55%",
      impact: "Légère augmentation",
    },
    {
      nutriment: "Méthionine",
      soja: "0.65%",
      bsf: "0.8-1.2%",
      impact: "AMÉLIORATION (moins besoin de DL-Meth)",
    },
    {
      nutriment: "Lipides",
      soja: "2%",
      bsf: "15-35%",
      impact: "Augmentation significative",
    },
    {
      nutriment: "Calcium",
      soja: "0.3%",
      bsf: "4-8%",
      impact: "Énorme augmentation",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50/30 to-orange-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Egg className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Nutrition & Fabrication d'Aliment pour Poules
                </h1>
                <Badge
                  variant="outline"
                  className="mt-1 bg-amber-50 text-amber-700 border-amber-200"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  Popayán, Colombia
                </Badge>
              </div>
            </div>

            <Alert className="max-w-md">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Adaptation locale requise</AlertTitle>
              <AlertDescription>
                Ajustez les formules selon le climat humide et les matières
                premières disponibles localement.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="phases" className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto">
            <TabsTrigger value="phases" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Phases</span>
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Ingrédients</span>
            </TabsTrigger>
            <TabsTrigger value="recettes" className="flex items-center gap-2">
              <ChefHat className="w-4 h-4" />
              <span className="hidden sm:inline">Recettes</span>
            </TabsTrigger>
            <TabsTrigger
              value="fabrication"
              className="flex items-center gap-2"
            >
              <Beaker className="w-4 h-4" />
              <span className="hidden sm:inline">Fabrication</span>
            </TabsTrigger>
            <TabsTrigger value="conseils" className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Conseils</span>
            </TabsTrigger>
            <TabsTrigger value="bsf" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">BSF</span>
            </TabsTrigger>
          </TabsList>

          {/* Phases Section */}
          <TabsContent value="phases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Les Grandes Phases d'Élevage</CardTitle>
                <CardDescription>
                  Fournir à chaque stade ce dont la poule a exactement besoin,
                  ni plus ni moins.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Phase Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {Object.entries(phases).map(([key, phase]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        activePhase === key ? "ring-2 ring-amber-500" : ""
                      }`}
                      onClick={() => setActivePhase(key)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`p-2 rounded-lg ${
                              phase.color.split(" ")[0]
                            }`}
                          >
                            {phase.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-foreground">
                              {phase.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {phase.weeks}
                            </p>
                          </div>
                        </div>
                        <Progress
                          value={
                            phaseData[key as keyof typeof phaseData].progress
                          }
                          className="h-2"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Active Phase Data */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {phases[activePhase as keyof typeof phases].icon}
                      {phases[activePhase as keyof typeof phases].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      {Object.entries(
                        phaseData[activePhase as keyof typeof phaseData]
                      ).map(([key, value]) => {
                        if (key === "progress") return null;
                        return (
                          <Card key={key} className="text-center">
                            <CardContent className="p-4">
                              <div className="text-sm font-medium text-muted-foreground mb-1 uppercase">
                                {key === "em"
                                  ? "Énergie"
                                  : key === "pb"
                                  ? "Protéines"
                                  : key === "ca"
                                  ? "Calcium"
                                  : key === "pd"
                                  ? "Phosphore"
                                  : key === "objectif"
                                  ? "Objectif"
                                  : "Forme"}
                              </div>
                              <div className="text-xl font-bold text-foreground">
                                {value}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Concepts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500" />
                        Énergie Métabolisable (EM)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Partie de l'aliment transformable en énergie. Comme
                        l'essence pour une voiture.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TestTube2 className="w-5 h-5 text-blue-500" />
                        Acides Aminés Digestibles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Partie utile des protéines, celle que la poule absorbe
                        vraiment. Lysine et Méthionine sont essentielles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Scale className="w-5 h-5 text-emerald-500" />
                        Calcium (Ca)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Minéral clé pour les coquilles. Fines pour le jour,
                        grosses (2-4 mm) pour la nuit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ingrédients Section */}
          <TabsContent value="ingredients">
            <Card>
              <CardHeader>
                <CardTitle>La Boîte à Outils : Nos Ingrédients</CardTitle>
                <CardDescription>
                  Chaque ingrédient a un rôle spécifique dans la santé et la
                  productivité des poules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs
                  defaultValue="cereales"
                  onValueChange={setActiveIngredient}
                >
                  <TabsList className="mb-4">
                    <TabsTrigger value="cereales">Céréales</TabsTrigger>
                    <TabsTrigger value="tourteaux">Tourteaux</TabsTrigger>
                    <TabsTrigger value="mineraux">Minéraux</TabsTrigger>
                    <TabsTrigger value="additifs">Additifs</TabsTrigger>
                  </TabsList>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ingrédient</TableHead>
                        <TableHead>Rôle Principal</TableHead>
                        <TableHead>Commentaire Pratique</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Maïs, Blé</TableCell>
                        <TableCell>
                          Énergie. Apportent des calories sous forme d'amidon.
                        </TableCell>
                        <TableCell>
                          Le maïs est souvent la base. Le blé peut rendre
                          l'aliment pâteux, on utilise des enzymes (xylanase)
                          pour compenser.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Tourteau de Soja
                        </TableCell>
                        <TableCell>
                          Protéines de qualité. Source majeure d'acides aminés
                          (Lysine).
                        </TableCell>
                        <TableCell>
                          Incontournable. On choisit le taux de protéines (44%
                          ou 48%).
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Carbonate de Calcium
                        </TableCell>
                        <TableCell>
                          Source de Calcium pour la coquille.
                        </TableCell>
                        <TableCell>
                          Fin : Action rapide. Gros (2-4mm) : Libération lente,
                          essentiel la nuit.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recettes Section */}
          <TabsContent value="recettes">
            <Card>
              <CardHeader>
                <CardTitle>Recettes Types (pour 1000 kg)</CardTitle>
                <CardDescription>
                  Bases de travail à ajuster après analyse de vos matières
                  premières.
                </CardDescription>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Ces formules sont des bases de travail. Elles DOIVENT être
                    ajustées après analyse.
                  </AlertDescription>
                </Alert>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="demarrage">
                  <TabsList className="mb-4">
                    <TabsTrigger value="demarrage">Démarrage</TabsTrigger>
                    <TabsTrigger value="croissance">Croissance</TabsTrigger>
                    <TabsTrigger value="preponte">Pré-Ponte</TabsTrigger>
                    <TabsTrigger value="ponte">Ponte</TabsTrigger>
                  </TabsList>

                  <TabsContent value="demarrage">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ChefHat className="w-5 h-5" />
                          Recette "DÉMARRAGE" Poussin (0-6 semaines)
                        </CardTitle>
                        <CardDescription>
                          Donner un coup de starter pour une croissance
                          vigoureuse
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Ingrédient</TableHead>
                              <TableHead>Quantité (kg/1000kg)</TableHead>
                              <TableHead>Rôle Principal</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {recipes.demarrage.map((item, idx) => (
                              <TableRow key={idx}>
                                <TableCell className="font-medium">
                                  {item.ingredient}
                                </TableCell>
                                <TableCell>
                                  <Badge variant="secondary">
                                    {item.quantity}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {item.role}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-lg font-bold">
                          Total :{" "}
                          <span className="text-amber-600">1000 kg</span>
                        </div>
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger la fiche
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fabrication Section */}
          <TabsContent value="fabrication">
            <Card>
              <CardHeader>
                <CardTitle>
                  Guide Pas à Pas pour Fabriquer Notre Aliment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "S'Approvisionner et Analyser",
                      description:
                        "Analyser chaque lot : Humidité, Protéines Brutes, Mycotoxines. Ne jamais formuler sans analyse.",
                      icon: <TestTube2 className="w-6 h-6" />,
                    },
                    {
                      step: "2",
                      title: "Calculer la Recette",
                      description:
                        "Utiliser un logiciel de formulation (Least-Cost) ou la méthode Carré de Pearson pour ajuster les taux.",
                      icon: <Calculator className="w-6 h-6" />,
                    },
                    {
                      step: "3",
                      title: "Processus de Fabrication",
                      description:
                        "Nettoyage → Broyage → Dosage & Mélange → Granulation (si besoin) → Refroidissement → Stockage",
                      icon: <Beaker className="w-6 h-6" />,
                    },
                    {
                      step: "4",
                      title: "Contrôles Qualité",
                      description:
                        "Test d'homogénéité, analyses de routine, suivi chez les poules (consommation, ponte, qualité des coquilles).",
                      icon: <ShieldCheck className="w-6 h-6" />,
                    },
                  ].map((etape) => (
                    <div key={etape.step} className="relative">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <span className="text-xl font-bold text-primary">
                                {etape.step}
                              </span>
                            </div>
                            <div className="grow">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  {etape.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                  {etape.title}
                                </h3>
                              </div>
                              <p className="text-muted-foreground">
                                {etape.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {etape.step !== "4" && (
                        <div className="absolute left-6 top-full w-0.5 h-6 bg-border ml-5"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* BSF Section */}
          <TabsContent value="bsf">
            <Card>
              <CardHeader>
                <CardTitle>
                  Intégration des Larves de Mouche Soldat Noire (BSF)
                </CardTitle>
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Avertissement</AlertTitle>
                  <AlertDescription>
                    Vérifiez la réglementation colombienne (ICA) avant
                    utilisation
                  </AlertDescription>
                </Alert>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Comparison Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Comparaison Nutritionnelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nutriment</TableHead>
                          <TableHead>Soja 44%</TableHead>
                          <TableHead>BSF séchée</TableHead>
                          <TableHead>Impact du remplacement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bsfData.map((row, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">
                              {row.nutriment}
                            </TableCell>
                            <TableCell>{row.soja}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="bg-emerald-50 text-emerald-700 border-emerald-200"
                              >
                                {row.bsf}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  row.impact.includes("AMÉLIORATION")
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {row.impact}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Integration Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Avec 5% de BSF (50 kg/tonne)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            label: "Réduire le tourteau de soja",
                            value: "30-40 kg",
                          },
                          {
                            label: "Réduire l'huile végétale",
                            value: "5-10 kg",
                          },
                          {
                            label: "Réduire le carbonate de calcium",
                            value: "15-20 kg",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                          >
                            <span className="text-sm">{item.label}</span>
                            <Badge variant="outline" className="font-bold">
                              {item.value}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        Procédure d'introduction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Démarrage progressif : Commencer à 2-3%",
                          "Surveillance : Observer consommation et fientes",
                          "Recalcul : Ajuster toute la formule",
                          "Qualité : BSF issue d'élevages autorisés",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conseils Section */}
          <TabsContent value="conseils">
            <Card>
              <CardHeader>
                <CardTitle>Conseils de Pro pour le Terrain</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Le Truc du Calcium",
                      description:
                        "Distribuer des granulés de calcium gros en fin d'après-midi pour la formation nocturne des coquilles.",
                      icon: <Scale className="w-5 h-5" />,
                    },
                    {
                      title: "Gestion de la Chaleur",
                      description:
                        "Donner à manger aux heures fraîches, ajuster l'aliment : + Bicarbonate, + Energie, - Protéines.",
                      icon: <ThermometerSun className="w-5 h-5" />,
                    },
                    {
                      title: "L'Eau est Cruciale",
                      description:
                        "Aussi importante que l'aliment ! Propre, fraîche, accessible. Vérifier le débit en période chaude.",
                      icon: <Droplets className="w-5 h-5" />,
                    },
                    {
                      title: "Transitions Progressives",
                      description:
                        "Changer d'aliment sur 4-5 jours en mélangeant ancien et nouveau pour éviter les chocs digestifs.",
                      icon: <Filter className="w-5 h-5" />,
                    },
                    {
                      title: "Observer le Troupeau",
                      description:
                        "Plumage lisse, crêtes rouges, fientes bien moulées = signes d'une alimentation adaptée.",
                      icon: <Eye className="w-5 h-5" />,
                    },
                    {
                      title: "Ajustements Rapides",
                      description:
                        "Coquilles fragiles ? + Calcium gros. Jaune pâle ? + Pigments. Fientes liquides ? Vérifier fibres.",
                      icon: <Beaker className="w-5 h-5" />,
                    },
                  ].map((conseil, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-center gap-2">
                          {conseil.icon}
                          {conseil.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {conseil.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <Card className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-center">Règle d'Or</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg">
                      Fabriquer son aliment, c'est maîtriser un process :<br />
                      <span className="font-bold text-amber-300">
                        Bons ingrédients + Bonne recette + Bon mélange +
                        Contrôles réguliers
                      </span>
                      <br />= Poules en bonne santé et œufs de qualité
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Egg className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">PoultryPro Nutrition</p>
                <p className="text-sm text-muted-foreground">
                  Guide pratique pour l'élevage à Popayán • Dernière mise à jour
                  : {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
              <Button variant="outline" size="sm">
                Imprimer
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for MapPin icon
function MapPin(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
