"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  Calendar,
  TrendingUp,
  DollarSign,
  Scale,
  Droplets,
  Thermometer,
} from "lucide-react";

export default function ConduiteLots() {
  const [activeSection, setActiveSection] = useState("concept");
  const [selectedLot, setSelectedLot] = useState(1);
  const [currentYear, setCurrentYear] = useState(1);

  const sections = [
    { id: "concept", title: "Concept", icon: "📋" },
    { id: "production", title: "Production", icon: "📊" },
    { id: "rotation", title: "Rotation", icon: "🔄" },
    { id: "calendrier", title: "Calendrier", icon: "📅" },
    { id: "sanitaire", title: "Sanitaire", icon: "🏥" },
    { id: "alimentation", title: "Alimentation", icon: "🌾" },
    { id: "conditions", title: "Conditions", icon: "🏠" },
    { id: "performance", title: "Performance", icon: "📈" },
    { id: "economie", title: "Économie", icon: "💰" },
  ];

  const lots = [
    {
      id: 1,
      nom: "Lot 1",
      miseEnPlace: "Janvier",
      couleur: "border-blue-500 bg-blue-50",
    },
    {
      id: 2,
      nom: "Lot 2",
      miseEnPlace: "Avril",
      couleur: "border-green-500 bg-green-50",
    },
    {
      id: 3,
      nom: "Lot 3",
      miseEnPlace: "Juillet",
      couleur: "border-amber-500 bg-amber-50",
    },
    {
      id: 4,
      nom: "Lot 4",
      miseEnPlace: "Octobre",
      couleur: "border-purple-500 bg-purple-50",
    },
    {
      id: 5,
      nom: "Lot 5",
      miseEnPlace: "Janvier An2",
      couleur: "border-pink-500 bg-pink-50",
    },
  ];

  const calculateProduction = () => {
    const totalPoules = 2500;
    const tauxMoyen = 0.85;
    const oeufsParPoule = 348;
    return (totalPoules * tauxMoyen * oeufsParPoule).toLocaleString();
  };

  const getLotDetails = (lotId: number) => {
    const details: Record<number, any> = {
      1: {
        periode: "Janvier à Juillet (18 mois)",
        etapes: [
          { semaine: "1-3", activite: "Vide sanitaire", couleur: "bg-red-100" },
          {
            semaine: "4",
            activite: "Arrivée poulettes",
            couleur: "bg-green-100",
          },
          {
            semaine: "5-8",
            activite: "Démarrage production",
            couleur: "bg-blue-100",
          },
          {
            semaine: "9-16",
            activite: "Montée en production",
            couleur: "bg-amber-100",
          },
          {
            semaine: "17-28",
            activite: "Pic de production",
            couleur: "bg-emerald-100",
          },
          {
            semaine: "29-60",
            activite: "Production stable",
            couleur: "bg-green-100",
          },
          {
            semaine: "61-80",
            activite: "Déclin progressif",
            couleur: "bg-orange-100",
          },
          {
            semaine: "81+",
            activite: "Réforme + vide sanitaire",
            couleur: "bg-red-100",
          },
        ],
      },
    };
    return details[lotId] || {};
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Plan de Gestion - Élevage Poules Pondeuses
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Production Continue par Rotation de Lots • 2500 poules • 5
                  lots de 500
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Document d'exploitation
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Scale className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Capacité totale</p>
                      <p className="text-2xl font-bold">2,500 poules</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Production annuelle
                      </p>
                      <p className="text-2xl font-bold">
                        {calculateProduction()} œufs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Durée de cycle</p>
                      <p className="text-2xl font-bold">80 semaines</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Coût par œuf</p>
                      <p className="text-2xl font-bold">€0.02</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lots Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vue d'ensemble des Lots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lots.map((lot) => (
                  <Card
                    key={lot.id}
                    className={`cursor-pointer transition-all hover:scale-[1.02] ${
                      lot.couleur
                    } ${
                      selectedLot === lot.id
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedLot(lot.id);
                      setActiveSection("calendrier");
                    }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold">{lot.nom}</h3>
                          <p className="text-sm text-gray-600">
                            Mise en place: {lot.miseEnPlace}
                          </p>
                        </div>
                        <Badge variant="outline">500 poules</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Indicateurs Clés */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Indicateurs Clés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Taux ponte au pic</span>
                  <span className="text-sm font-bold text-green-600">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Taux moyen</span>
                  <span className="text-sm font-bold text-blue-600">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    Mortalité acceptable
                  </span>
                  <span className="text-sm font-bold text-red-600">3%</span>
                </div>
                <Progress value={3} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Alertes */}
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Alerte sanitaire</AlertTitle>
            <AlertDescription className="text-sm">
              Mortalité &gt;2/jour → Contact vétérinaire
            </AlertDescription>
          </Alert>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Year Selector */}
          <div className="mb-6">
            <Tabs defaultValue="1" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="1" onClick={() => setCurrentYear(1)}>
                  Année 1
                </TabsTrigger>
                <TabsTrigger value="2" onClick={() => setCurrentYear(2)}>
                  Année 2
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Section: Concept */}
          {activeSection === "concept" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">📋</span>
                  Concept de Gestion en Rotation
                </CardTitle>
                <CardDescription>
                  Système à 5 lots pour une production continue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">
                      🎯 Objectif Principal
                    </h3>
                    <p className="text-gray-700">
                      Assurer une <strong>production constante</strong> d'œufs
                      toute l'année en exploitant une rotation alternée de lots,
                      avec vide sanitaire de 3 semaines entre chaque cycle.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        🏗️ Configuration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span>5 bâtiments ou zones d'élevage</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span>500 poules par lot</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span>Mise en place échelonnée</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span>80 semaines en production</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span>3 semaines vide sanitaire</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">✅ Avantages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Production continue sans interruption</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Distribution équilibrée de la charge</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Meilleure prévention sanitaire</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Facilité de gestion des cycles</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section: Production */}
          {activeSection === "production" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">📊</span>
                  Paramètres de Production
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Paramètre</TableHead>
                        <TableHead>Valeur</TableHead>
                        <TableHead>Détails</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Effectif par lot
                        </TableCell>
                        <TableCell>
                          <Badge>500 poules</Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Nombre de lots
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">5</Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Effectif total
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">2500 poules</Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          Simultanément en production
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Taux de ponte moyen
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800">
                            85%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          Moyenne pondérée
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Production annuelle
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            {calculateProduction()} œufs
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          348 œufs × 2500 poules
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        📈 Cycle de Production
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Âge à l'arrivée</span>
                        <Badge>16-18 semaines</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Début de ponte</span>
                        <Badge variant="outline">Semaine 1-2</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pic de production</span>
                        <Badge className="bg-green-100 text-green-800">
                          Semaine 24-28
                        </Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Durée du cycle</span>
                        <Badge className="bg-purple-100 text-purple-800">
                          80 semaines
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🎯 Performances</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taux au pic</span>
                        <Badge className="bg-emerald-100 text-emerald-800">
                          90-95%
                        </Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taux moyen</span>
                        <Badge variant="secondary">85%</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Production/cycle</span>
                        <Badge>340-360 œufs</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Cycles/an</span>
                        <Badge variant="outline">4.6 cycles</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section: Rotation */}
          {activeSection === "rotation" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🔄</span>
                  Chronogramme de Rotation
                </CardTitle>
                <CardDescription>
                  Année {currentYear} • Visualisation des 5 lots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-green-500 rounded mr-2"></div>
                      <span className="text-sm">Production active</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded mr-2"></div>
                      <span className="text-sm">Vide sanitaire</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-gray-300 rounded mr-2"></div>
                      <span className="text-sm">Inactif/attente</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Période</TableHead>
                          <TableHead>Lot 1</TableHead>
                          <TableHead>Lot 2</TableHead>
                          <TableHead>Lot 3</TableHead>
                          <TableHead>Lot 4</TableHead>
                          <TableHead>Lot 5</TableHead>
                          <TableHead className="text-right">
                            Effectif en production
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentYear === 1 ? (
                          <>
                            <TableRow>
                              <TableCell className="font-medium">
                                M1-M3 (Sem 1-13)
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                500 poules
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                M4-M6 (Sem 14-26)
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                1000 poules
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                M7-M9 (Sem 27-39)
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">-</Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                1500 poules
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                M10-M12 (Sem 40-52)
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                2000 poules
                              </TableCell>
                            </TableRow>
                          </>
                        ) : (
                          <>
                            <TableRow>
                              <TableCell className="font-medium">
                                M13-M15 (Sem 53-65)
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                2000 poules
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                M16-M18 (Sem 66-78)
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="destructive">V</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-800">
                                  P
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                2000 poules
                              </TableCell>
                            </TableRow>
                          </>
                        )}
                      </TableBody>
                    </Table>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>État du système</AlertTitle>
                    <AlertDescription>
                      {currentYear === 1
                        ? "Année 1 : Montée progressive jusqu'à 2000 poules en production simultanée"
                        : "Année 2 : Production stabilisée à 2000 poules simultanées"}
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section: Calendrier */}
          {activeSection === "calendrier" && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center">
                      <span className="mr-2">📅</span>
                      Calendrier Détaillé par Lot
                    </CardTitle>
                    <CardDescription>Suivi du lot sélectionné</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {lots.map((lot) => (
                      <Button
                        key={lot.id}
                        variant={selectedLot === lot.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLot(lot.id)}
                      >
                        {lot.nom}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card
                    className={lots.find((l) => l.id === selectedLot)?.couleur}
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">
                            {lots.find((l) => l.id === selectedLot)?.nom}
                          </h3>
                          <p className="text-gray-600">
                            Mise en place:{" "}
                            {
                              lots.find((l) => l.id === selectedLot)
                                ?.miseEnPlace
                            }
                          </p>
                        </div>
                        <Badge className="text-lg px-3 py-1">500 poules</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {selectedLot === 1
                          ? "Cycle complet de 80 semaines + 3 semaines de vide sanitaire"
                          : "Cycle décalé de 3 mois par rapport au lot précédent"}
                      </p>
                    </CardContent>
                  </Card>

                  <Accordion type="single" collapsible className="w-full">
                    {getLotDetails(selectedLot).etapes?.map(
                      (etape: any, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger
                            className={`${etape.couleur} px-4 rounded-t-lg`}
                          >
                            <div className="flex items-center">
                              <span className="font-bold mr-4">
                                Semaines {etape.semaine}
                              </span>
                              <span>{etape.activite}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            {index === 0 && (
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-3"></div>
                                  <span>
                                    Nettoyage et désinfection des bâtiments
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-3"></div>
                                  <span>Réparation des équipements</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 mr-3"></div>
                                  <span>
                                    Préparation des abreuvoirs et mangeoires
                                  </span>
                                </li>
                              </ul>
                            )}
                            {index === 1 && (
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3"></div>
                                  <span>
                                    Réception des 500 poulettes (16-18 semaines)
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3"></div>
                                  <span>
                                    Contrôle de l'état sanitaire à l'arrivée
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3"></div>
                                  <span>Observation de l'adaptation</span>
                                </li>
                              </ul>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold mb-2">
                            📊 Production estimée
                          </h4>
                          <div className="text-3xl font-bold text-green-600">
                            170,000 œufs
                          </div>
                          <p className="text-sm text-gray-600">
                            soit ~340 œufs/poule
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">📅 Durée totale</h4>
                          <div className="text-3xl font-bold text-blue-600">
                            80 semaines
                          </div>
                          <p className="text-sm text-gray-600">
                            + 3 semaines vide sanitaire
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section: Sanitaire */}
          {activeSection === "sanitaire" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🏥</span>
                  Gestion Sanitaire
                </CardTitle>
                <CardDescription>
                  Protocole de vide sanitaire et suivi continu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-red-200">
                    <CardHeader className="bg-red-50">
                      <CardTitle className="text-lg text-red-700">
                        Semaine 1 : Nettoyage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">Évacuation des poules</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Retrait de la litière usagée
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Nettoyage à haute pression
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardHeader className="bg-orange-50">
                      <CardTitle className="text-lg text-orange-700">
                        Semaine 2 : Désinfection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Désinfection des bâtiments
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Traitement des équipements
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Nettoyage des parcours
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-lg text-green-700">
                        Semaine 3 : Préparation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Mise en place nouvelle litière
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Installation équipements
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-sm">
                            Réglage température/aération
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      📋 Suivi Sanitaire Continu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Fréquence</TableHead>
                          <TableHead>Activités</TableHead>
                          <TableHead>Responsable</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Quotidien
                          </TableCell>
                          <TableCell>
                            Observation générale, collecte mortalités, nettoyage
                            nids
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">Éleveur</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Hebdomadaire
                          </TableCell>
                          <TableCell>
                            Nettoyage litière, inspection sanitaire, pesée
                            contrôle
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">Éleveur</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Bimensuel
                          </TableCell>
                          <TableCell>
                            Prélèvements surveillance, contrôle parasites
                          </TableCell>
                          <TableCell>
                            <Badge>Vétérinaire</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          )}

          {/* Section: Alimentation */}
          {activeSection === "alimentation" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🌾</span>
                  Gestion Alimentation & Eau
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Phase</TableHead>
                        <TableHead>Aliment</TableHead>
                        <TableHead>Consommation/jour</TableHead>
                        <TableHead>Durée</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Acclimatation
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Aliment démarrage</Badge>
                        </TableCell>
                        <TableCell>50-60 g</TableCell>
                        <TableCell>Semaines 1-4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Montée production
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Aliment complet</Badge>
                        </TableCell>
                        <TableCell>100-110 g</TableCell>
                        <TableCell>Semaines 5-12</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Production pic
                        </TableCell>
                        <TableCell>
                          <Badge>Aliment production</Badge>
                        </TableCell>
                        <TableCell>110-120 g</TableCell>
                        <TableCell>Semaines 13-60</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fin cycle</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Aliment maintien</Badge>
                        </TableCell>
                        <TableCell>105-115 g</TableCell>
                        <TableCell>Semaines 61-80</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center text-lg">
                        <Droplets className="h-5 w-5 mr-2 text-blue-600" />
                        Gestion de l'Eau
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">
                              Consommation moyenne
                            </span>
                            <span className="font-bold">250 mL/jour</span>
                          </div>
                          <Progress value={50} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">
                              Total par lot (500 poules)
                            </span>
                            <span className="font-bold">125 L/jour</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span>Accès continu 24h/24</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span>Renouvellement quotidien minimum</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span>Nettoyage conduites hebdomadaire</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center text-lg">
                        <Thermometer className="h-5 w-5 mr-2 text-green-600" />
                        Conditions Optimales
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Température</span>
                          <Badge className="bg-blue-100 text-blue-800">
                            16-20°C
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-sm">Humidité relative</span>
                          <Badge className="bg-green-100 text-green-800">
                            50-70%
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-sm">Photopériode</span>
                          <Badge className="bg-purple-100 text-purple-800">
                            16h/jour
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section: Conditions */}
          {activeSection === "conditions" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🏠</span>
                  Conditions d'Élevage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cette section contient les détails complets sur les conditions
                  optimales d'élevage.
                </p>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Le contenu complet est disponible dans le document original.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Section: Performance */}
          {activeSection === "performance" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">📈</span>
                  Indicateurs de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cette section contient les indicateurs clés de suivi et
                  d'alerte.
                </p>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Le contenu complet est disponible dans le document original.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Section: Économie */}
          {activeSection === "economie" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">💰</span>
                  Aspects Économiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cette section contient les estimations de coûts et revenus.
                </p>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Le contenu complet est disponible dans le document original.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-8 border-t">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-gray-600">
              <p className="font-medium">
                Plan de Gestion de l'Élevage de Poules Pondeuses • Version
                interactive
              </p>
              <p className="text-sm mt-1">
                Production continue par rotation de lots • 5 lots de 500 poules
                • 2500 poules total
              </p>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
