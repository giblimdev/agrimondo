// app/amenagements/page.tsx
"use client";

import { useState } from "react";
import {
  Sun,
  Battery,
  Eye,
  Zap,
  Fuel,
  Settings,
  Calendar,
  Wrench,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Download,
  Calculator,
  BarChart3,
  Shield,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Cloud,
  Wind,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Solaire() {
  const [activeTab, setActiveTab] = useState("overview");

  const systemComponents = [
    {
      id: "panels",
      name: "Panneaux Solaires",
      icon: <Sun className="w-6 h-6" />,
      count: "18 unités",
      power: "5 kWc",
      cost: "2 700 €",
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      id: "inverter",
      name: "Onduleur Hybride",
      icon: <Zap className="w-6 h-6" />,
      count: "1 unité",
      power: "10 kVA",
      cost: "2 200 €",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "batteries",
      name: "Batteries Lithium",
      icon: <Battery className="w-6 h-6" />,
      count: "4 modules",
      power: "24 kWh",
      cost: "8 800 €",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
      id: "generator",
      name: "Groupe Électrogène",
      icon: <Fuel className="w-6 h-6" />,
      count: "1 unité",
      power: "10 kVA",
      cost: "3 500 €",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
    {
      id: "accessories",
      name: "Accessoires",
      icon: <Settings className="w-6 h-6" />,
      count: "Complet",
      power: "Protections",
      cost: "850 €",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
  ];

  const solarPanelsData = [
    { parameter: "Puissance unitaire", value: "330 Wc" },
    { parameter: "Type", value: "Monocristallin haut rendement" },
    { parameter: "Rendement", value: "18–21 %" },
    { parameter: "Tension", value: "~40 V DC" },
    { parameter: "Durée de vie", value: ">25 ans" },
    { parameter: "Garantie", value: "25 ans" },
  ];

  const inverterData = [
    { parameter: "Puissance nominale", value: "10 kVA" },
    { parameter: "Tension sortie", value: "230 V AC ± 5 %" },
    { parameter: "Fréquence", value: "50 Hz" },
    { parameter: "Tension batteries", value: "48 V DC" },
    { parameter: "MPPT intégré", value: "Oui" },
    { parameter: "Rendement", value: "~95 %" },
  ];

  const batteryData = [
    { parameter: "Technologie", value: "LiFePO4 (Lithium Fer Phosphate)" },
    { parameter: "Capacité totale", value: "24 kWh" },
    { parameter: "Tension nominale", value: "48 V DC" },
    { parameter: "Profondeur de décharge", value: "90–95 %" },
    { parameter: "Cycles de charge", value: ">6 000 cycles" },
    { parameter: "Durée de vie", value: "15–20 ans" },
  ];

  const installationPhases = [
    {
      phase: "Phase 1 : Préparation",
      duration: "1-2 semaines",
      tasks: [
        "Commander les équipements",
        "Vérifier infrastructure toiture",
        "Définir emplacements",
      ],
      progress: 25,
    },
    {
      phase: "Phase 2 : Installation",
      duration: "2-3 semaines",
      tasks: [
        "Installation panneaux",
        "Câblage DC/AC",
        "Installation onduleur & batteries",
        "Installation groupe",
      ],
      progress: 50,
    },
    {
      phase: "Phase 3 : Tests",
      duration: "1 semaine",
      tasks: [
        "Tests isolation",
        "Démarrage système",
        "Vérification modes",
        "Formation utilisateur",
      ],
      progress: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Système Solaire Autonome Complet
              </h1>
              <p className="text-muted-foreground mt-2">
                Guide d'installation et de fonctionnement - Autonomie
                énergétique totale
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                <Calculator className="w-3 h-3 mr-1" />
                ROI: 6-9 ans
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-50 text-emerald-700"
              >
                <Leaf className="w-3 h-3 mr-1" />
                100% Renouvelable
              </Badge>
              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                <Shield className="w-3 h-3 mr-1" />
                Zéro coupure
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          {/* Navigation Tabs */}
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto overflow-x-auto">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Vue d'ensemble</span>
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Composants</span>
            </TabsTrigger>
            <TabsTrigger value="specs" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Spécifications</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Installation</span>
            </TabsTrigger>
            <TabsTrigger
              value="maintenance"
              className="flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Maintenance</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Budget</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
                <CardDescription>
                  Solution énergétique autonome basée sur l'énergie solaire avec
                  stockage lithium et secours automatique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertTitle>Objectif principal</AlertTitle>
                  <AlertDescription>
                    Assurer l'autonomie énergétique de votre habitation avec un
                    fonctionnement automatisé et une fiabilité maximale.
                    Consommation : 15-20 kWh/jour | Puissance crête : ~10 kW
                  </AlertDescription>
                </Alert>

                {/* System Flow Diagram */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Schéma fonctionnel global
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-amber-100 rounded-lg">
                          <Sun className="w-8 h-8 text-amber-600" />
                        </div>
                        <p className="mt-2 font-medium">
                          Panneaux Solaires 5 kWc
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-slate-300"></div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-blue-100 rounded-lg">
                          <Zap className="w-8 h-8 text-blue-600" />
                        </div>
                        <p className="mt-2 font-medium">
                          Onduleur Hybride 10 kVA
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center gap-8 mt-6">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-0.5 bg-slate-300"></div>
                          <div className="p-4 bg-emerald-100 rounded-lg mt-2">
                            <Battery className="w-8 h-8 text-emerald-600" />
                          </div>
                          <p className="mt-2 font-medium">Batteries 24 kWh</p>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="h-8 w-0.5 bg-slate-300"></div>
                          <div className="p-4 bg-slate-100 rounded-lg mt-2">
                            <Users className="w-8 h-8 text-slate-600" />
                          </div>
                          <p className="mt-2 font-medium">Maison</p>
                        </div>
                      </div>

                      <div className="flex justify-center mt-6">
                        <div className="h-8 w-0.5 bg-slate-300"></div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-orange-100 rounded-lg">
                          <Fuel className="w-8 h-8 text-orange-600" />
                        </div>
                        <p className="mt-2 font-medium">
                          Groupe Électrogène + ATS
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operation Modes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sun className="w-5 h-5 text-amber-500" />
                        Jour (Soleil)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Panneaux → Maison
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Excédent → Batteries
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Groupe arrêté
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-blue-500" />
                        Nuit (Batteries)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Batteries → Maison
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Surveillance tension
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Groupe en veille
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Secours (Groupe)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Batteries &gt; 30% → Démarrage groupe
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Groupe recharge batteries
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                          Zéro coupure perceptible
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>Les cinq éléments clés du système</CardTitle>
                <CardDescription>
                  Chaque composant joue un rôle essentiel dans l'autonomie
                  énergétique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {systemComponents.map((component) => (
                    <Card
                      key={component.id}
                      className={`border-2 ${component.color.split(" ")[2]}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`inline-flex p-3 rounded-full ${
                            component.color.split(" ")[0]
                          } mb-4`}
                        >
                          {component.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">
                          {component.name}
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Quantité:
                            </span>
                            <span className="font-medium">
                              {component.count}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Puissance:
                            </span>
                            <span className="font-medium">
                              {component.power}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Coût:</span>
                            <span className="font-medium">
                              {component.cost}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Detailed Component Info */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="panels-detail">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-3">
                        <Sun className="w-5 h-5 text-amber-500" />
                        Panneaux Solaires - Détails techniques
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          <strong>Rôle :</strong> Captent l'énergie solaire et
                          la convertissent en courant continu (DC). Source
                          d'énergie primaire du système.
                        </p>
                        <Table>
                          <TableBody>
                            {solarPanelsData.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">
                                  {item.parameter}
                                </TableCell>
                                <TableCell>{item.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="inverter-detail">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-500" />
                        Onduleur Hybride - Détails techniques
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          <strong>Rôle :</strong> Cœur du système. Convertit le
                          DC en AC, gère la charge des batteries, bascule
                          automatiquement entre les sources d'énergie.
                        </p>
                        <Table>
                          <TableBody>
                            {inverterData.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">
                                  {item.parameter}
                                </TableCell>
                                <TableCell>{item.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="batteries-detail">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-3">
                        <Battery className="w-5 h-5 text-emerald-500" />
                        Batteries Lithium - Détails techniques
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          <strong>Rôle :</strong> Stockent l'énergie électrique
                          pour les périodes sans production solaire. Permettent
                          l'autonomie du système.
                        </p>
                        <Table>
                          <TableBody>
                            {batteryData.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">
                                  {item.parameter}
                                </TableCell>
                                <TableCell>{item.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specs">
            <Card>
              <CardHeader>
                <CardTitle>Spécifications techniques détaillées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sun className="w-5 h-5" />
                        Dimensions panneaux solaires
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Caractéristiques physiques
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Dimensions:</span>
                              <span className="font-medium">
                                ~1,7 m × 1,0 m
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span>Poids:</span>
                              <span className="font-medium">~18 kg</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Surface totale (18 panneaux):</span>
                              <span className="font-medium">~30 m²</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Installation recommandée
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Orientation:</span>
                              <span className="font-medium">Plein Sud</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Inclinaison:</span>
                              <span className="font-medium">30–35°</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Production journalière:</span>
                              <span className="font-medium">~20 kWh</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Fuel className="w-5 h-5" />
                        Groupe électrogène avec ATS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Paramètre</TableHead>
                            <TableHead>Valeur</TableHead>
                            <TableHead>Détail</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              Puissance nominale
                            </TableCell>
                            <TableCell>10 kVA</TableCell>
                            <TableCell>
                              Correspond à ~8 kW électriques
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Carburant
                            </TableCell>
                            <TableCell>Diesel</TableCell>
                            <TableCell>Recommandé pour durabilité</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Autonomie
                            </TableCell>
                            <TableCell>15–25 heures</TableCell>
                            <TableCell>
                              Réservoir plein à consommation moyenne
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Démarrage
                            </TableCell>
                            <TableCell>Automatique</TableCell>
                            <TableCell>
                              Déclenché par onduleur quand batterie &lt; 30%
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Niveau sonore
                            </TableCell>
                            <TableCell>~70 dB</TableCell>
                            <TableCell>
                              À 1 mètre (standard industriel)
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Installation Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Calendrier d'installation recommandé</CardTitle>
                <CardDescription>
                  Durée totale estimée : 4–6 semaines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {installationPhases.map((phase, index) => (
                    <div key={index} className="relative">
                      <Card>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              {phase.phase}
                            </CardTitle>
                            <Badge variant="outline">{phase.duration}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progression</span>
                                <span>{phase.progress}%</span>
                              </div>
                              <Progress
                                value={phase.progress}
                                className="h-2"
                              />
                            </div>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, taskIndex) => (
                                <li
                                  key={taskIndex}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                      {index < installationPhases.length - 1 && (
                        <div className="absolute left-6 top-full w-0.5 h-6 bg-border ml-5"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Maintenance Tab */}
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Conseils de maintenance</CardTitle>
                <CardDescription>
                  Programme d'entretien pour garantir la longévité du système
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Sun className="w-5 h-5" />
                        Panneaux solaires
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Nettoyage:</span>
                            <p className="text-sm text-muted-foreground">
                              2×/an (la pluie suffit généralement)
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Inspection câblage:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Annuel
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Eye className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Vérification ombrage:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Saisonnière
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Battery className="w-5 h-5" />
                        Batteries lithium
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <BarChart3 className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Monitoring:</span>
                            <p className="text-sm text-muted-foreground">
                              Vérifier voltage/température via BMS
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Mises à jour BMS:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Annuel si disponibles
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Remplacement:</span>
                            <p className="text-sm text-muted-foreground">
                              Après &gt;6 000 cycles (15–20 ans)
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Fuel className="w-5 h-5" />
                        Groupe électrogène
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Wrench className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Révision moteur:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Tous les 500 heures
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Test démarrage:</span>
                            <p className="text-sm text-muted-foreground">
                              Mensuel (5–10 min sans charge)
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Wind className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Nettoyage filtre:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Selon conditions environnementales
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Zap className="w-5 h-5" />
                        Onduleur hybride
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <BarChart3 className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Monitoring logs:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Vérifier mensuellement
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Wind className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Ventilation:</span>
                            <p className="text-sm text-muted-foreground">
                              Nettoyer grilles régulièrement
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Mises à jour firmware:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              Annuel si disponibles
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Questions/Réponses clés</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>
                      Que se passe-t-il en cas de panne groupe électrogène ?
                    </AccordionTrigger>
                    <AccordionContent>
                      L'onduleur continue de fournir l'énergie via les batteries
                      tant qu'elles ne sont pas vides. En cas de panne groupe +
                      batteries déchargées, une coupure intervient.
                      <strong> Conseil :</strong> test mensuel du groupe et
                      révision régulière.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2">
                    <AccordionTrigger>
                      Puis-je agrandir le système à l'avenir ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Oui, vous pouvez ajouter des panneaux et des batteries par
                      paquets. L'onduleur 10 kVA supporterait jusqu'à ~8 kWc en
                      panneaux solaires. Les batteries Pylontech peuvent être
                      étendues jusqu'à 16 modules en parallèle.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3">
                    <AccordionTrigger>
                      Combien coûte à l'année en carburant groupe ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Si le groupe fonctionne 50 h/an (utilisation typique de
                      secours) : ~0,5 €/h de diesel = ~25 €/an. Très économique
                      car utilisé seulement en secours.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4">
                    <AccordionTrigger>
                      Quelle est la rentabilité du système ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>• Investissement initial : ~18 500 € HT</p>
                        <p>• Économies électricité : ~2 000–3 000 €/an</p>
                        <p>• Retour sur investissement : 6–9 ans</p>
                        <p>
                          • Après ROI : Électricité quasi-gratuite pendant 15+
                          ans
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5">
                    <AccordionTrigger>
                      Le système fonctionne-t-il pendant une coupure réseau ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Oui, c'est l'un des principaux avantages. Le système est
                      totalement autonome et fournit une alimentation
                      ininterrompue, même pendant les coupures réseau. La
                      bascule entre sources est automatique et sans coupure
                      perceptible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget">
            <Card>
              <CardHeader>
                <CardTitle>Budget détaillé et ROI</CardTitle>
                <CardDescription>
                  Investissement initial et analyse de rentabilité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Budget Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Tableau récapitulatif complet
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Équipement</TableHead>
                            <TableHead>Quantité</TableHead>
                            <TableHead>Caractéristique</TableHead>
                            <TableHead className="text-right">
                              Budget (€ HT)
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              Panneaux solaires JA Solar 330 Wc
                            </TableCell>
                            <TableCell>18</TableCell>
                            <TableCell>5 kWc total</TableCell>
                            <TableCell className="text-right">2 700</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Onduleur Victron Multiplus II 48/10
                            </TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>10 kVA, MPPT, ATS</TableCell>
                            <TableCell className="text-right">2 200</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Batteries Pylontech US5000
                            </TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>24 kWh, 48 V, LiFePO4</TableCell>
                            <TableCell className="text-right">8 800</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Groupe électrogène SDMO Diesel
                            </TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>10 kVA, démarrage auto</TableCell>
                            <TableCell className="text-right">3 500</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              ATS (Commutateur automatique)
                            </TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Compatible 230 V, 63 A</TableCell>
                            <TableCell className="text-right">400</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Accessoires (câbles, protections, boîtier)
                            </TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>Complet et sécurisé</TableCell>
                            <TableCell className="text-right">850</TableCell>
                          </TableRow>
                          <TableRow className="font-bold">
                            <TableCell colSpan={3}>TOTAL ESTIMÉ</TableCell>
                            <TableCell className="text-right">
                              18 450 € HT
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Alert className="mt-4">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Note importante</AlertTitle>
                        <AlertDescription>
                          Budget TTC (Taxe comprise) : ~22 000 € selon TVA
                          régionale (20 %)
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* ROI Analysis */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Analyse de rentabilité
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span>Investissement initial</span>
                            <Badge variant="outline" className="font-bold">
                              22 000 €
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                            <span>Économies annuelles</span>
                            <Badge variant="outline" className="font-bold">
                              2 500 €
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                            <span>Retour sur investissement</span>
                            <Badge className="bg-emerald-600 font-bold">
                              8,8 ans
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                            <span>Durée de vie système</span>
                            <Badge variant="outline" className="font-bold">
                              20+ ans
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">
                            Avantages financiers après ROI
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                              <span>
                                Électricité quasi-gratuite pendant 11+ ans
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                              <span>
                                Indépendance face à l'inflation des prix de
                                l'énergie
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                              <span>Plus-value immobilière du bien équipé</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                              <span>
                                Réduction des coûts de maintenance vs système
                                traditionnel
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger le devis détaillé
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Resources Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ressources et liens utiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fournisseurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.solaire-shop.com"
                        className="text-blue-600 hover:underline"
                      >
                        Solaire-Shop.com
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Spécialiste solaire
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://www.victronenergy.com"
                        className="text-blue-600 hover:underline"
                      >
                        VictronEnergy.com
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Onduleurs Victron
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://www.pylontech.com.cn"
                        className="text-blue-600 hover:underline"
                      >
                        PylonTech.com.cn
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Batteries Pylontech
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Normes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>NF C 15-100</li>
                    <p className="text-sm text-muted-foreground">
                      Installations électriques France
                    </p>
                    <li>IEC 61724</li>
                    <p className="text-sm text-muted-foreground">
                      Performance panneaux solaires
                    </p>
                    <li>EN 62619</li>
                    <p className="text-sm text-muted-foreground">
                      Sécurité batteries lithium
                    </p>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Support technique</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Victron : support@victronenergy.com</li>
                    <li>Pylontech : contact@pylontech.eu</li>
                    <li>SDMO : support@sdmo.com</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Conclusion */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-linear-to-r from-slate-900 to-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4">
              Ce système solaire hybride autonome représente une solution
              complète, fiable et économique pour l'autosuffisance énergétique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-white/10 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
                <p className="font-semibold">Autonomie totale</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                <p className="font-semibold">Zéro coupure de courant</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <Leaf className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
                <p className="font-semibold">Énergie 100% renouvelable</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-slate-300">
              Document version 1.0 - Janvier 2026 | Pour toute question
              technique ou devis détaillé, consulter un installateur agréé RGE
              Solaire.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
