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
  Droplets,
  Package,
  Wrench,
  Settings,
  Zap,
  Scale,
  Building,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Abreuvoir from "./abreuvoir";
import Mangeoires from "./mangeoir";
import Equipement from "./Equipement";

export default function EquipmentPage() {
  const equipmentStats = [
    {
      title: "Système d'abreuvement",
      value: "Ligne à pipettes",
      status: "Recommandé",
      icon: <Droplets className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Système d'alimentation",
      value: "Trémie automatique",
      status: "Recommandé",
      icon: <Package className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      title: "Installation",
      value: "Semi-automatisée",
      status: "Optimale",
      icon: <Settings className="h-5 w-5" />,
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Maintenance",
      value: "Programmée",
      status: "Essentielle",
      icon: <Wrench className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const benefits = [
    {
      title: "Réduction du gaspillage",
      description: "Systèmes fermés limitant les pertes d'eau et d'aliments",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      title: "Amélioration de l'hygiène",
      description: "Moins de contamination et meilleure santé du troupeau",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      title: "Optimisation du travail",
      description: "Moins de main-d'œuvre manuelle, plus de contrôle",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      title: "Adaptabilité",
      description: "Systèmes réglables selon l'âge et les besoins des poules",
      icon: <Settings className="h-4 w-4" />,
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
                  MATÉRIEL D'ÉLEVAGE - OVOLIA
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Solutions techniques pour l'abreuvement et l'alimentation de
                  2,500 pondeuses
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Capacité : 2,500 poules
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Documentation complète des systèmes d'abreuvement et
              d'alimentation pour l'élevage de poules pondeuses à Popayán. Ces
              guides techniques détaillent le dimensionnement, l'installation,
              la maintenance et les bonnes pratiques pour optimiser la
              productivité et la santé du troupeau.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {equipmentStats.map((stat, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="font-bold">{stat.value}</p>
                    <Badge className="mt-1 bg-gray-100 text-gray-800">
                      {stat.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Avantages clés */}
        <Card className="mb-8 border-l-4 border-l-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-green-600" />
              Avantages des systèmes recommandés
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 text-center">
                    <div
                      className={`p-2 rounded-lg inline-flex ${
                        index === 0
                          ? "bg-blue-100 text-blue-800"
                          : index === 1
                          ? "bg-green-100 text-green-800"
                          : index === 2
                          ? "bg-amber-100 text-amber-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold mt-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Onglets principaux - MODIFIÉ pour 3 onglets */}
        <Tabs defaultValue="abreuvoirs" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="abreuvoirs" className="flex items-center">
              <Droplets className="h-4 w-4 mr-2" />
              Systèmes d'Abreuvement
            </TabsTrigger>
            <TabsTrigger value="mangeoires" className="flex items-center">
              <Package className="h-4 w-4 mr-2" />
              Systèmes d'Alimentation
            </TabsTrigger>
            <TabsTrigger value="equipement" className="flex items-center">
              <Building className="h-4 w-4 mr-2" />
              Équipement Général
            </TabsTrigger>
          </TabsList>

          <TabsContent value="abreuvoirs" className="mt-6">
            <Abreuvoir />
          </TabsContent>

          <TabsContent value="mangeoires" className="mt-6">
            <Mangeoires />
          </TabsContent>

          <TabsContent value="equipement" className="mt-6">
            <Equipement /> {/* Composant ajouté ici */}
          </TabsContent>
        </Tabs>

        {/* Recommandations finales */}
        <Card className="mt-8 border-l-4 border-l-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle>Synthèse des recommandations pour Ovolia</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  <CheckCircle className="h-4 w-4 inline mr-2 text-emerald-600" />
                  Investissements prioritaires
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      1
                    </Badge>
                    <span>
                      Système d'abreuvement à pipettes avec régulateurs de
                      pression
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      2
                    </Badge>
                    <span>
                      Trémie automatique d'alimentation avec convoyeur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      3
                    </Badge>
                    <span>
                      Dispositifs anti-gaspillage sur les deux systèmes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  <AlertTriangle className="h-4 w-4 inline mr-2 text-amber-600" />
                  Points de vigilance
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-amber-100 text-amber-800">
                      A
                    </Badge>
                    <span>
                      Planifier l'entretien régulier des systèmes automatisés
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-amber-100 text-amber-800">
                      B
                    </Badge>
                    <span>
                      Former le personnel à l'utilisation et aux réglages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-amber-100 text-amber-800">
                      C
                    </Badge>
                    <span>
                      Prévoir un système de secours (alimentation manuelle)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-700">
                Impact attendu sur la rentabilité
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-white p-3 rounded border">
                  <p className="text-gray-500">Réduction gaspillage</p>
                  <p className="font-semibold text-green-600">20-40%</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-gray-500">Économie main-d'œuvre</p>
                  <p className="font-semibold text-green-600">60-70%</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-gray-500">Amélioration santé</p>
                  <p className="font-semibold text-green-600">
                    Réduction mortalité
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
