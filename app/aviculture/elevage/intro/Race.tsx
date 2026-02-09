// app/components/Race.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Award,
  Egg,
  CheckCircle,
  AlertTriangle,
  Target,
  Shield,
  TrendingUp,
} from "lucide-react";
import { racesHybrides, racesRustiques, racesMixtes } from "./polloData";

export default function Race() {
  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-linear-to-r from-amber-700 to-orange-800 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                SÉLECTION DES RACES - ÉLEVAGE PONDEUSES
              </CardTitle>
              <CardDescription className="text-amber-100">
                Analyse comparative des races pour le projet Ovolia à Popayán
              </CardDescription>
            </div>
            <Badge className="mt-2 md:mt-0 bg-white text-amber-700 hover:bg-white">
              Recommandation : Hy-Line Brown
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700">
            Comparaison des principales races de poules pondeuses disponibles en
            Colombie, avec évaluation des performances, adaptation au climat de
            Popayán et rentabilité pour le projet Ovolia.
          </p>
        </CardContent>
      </Card>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Races hybrides</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Egg className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Production moyenne</p>
                <p className="text-2xl font-bold">310+</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Races rustiques</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Races mixtes</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Races Hybrides */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Races Commerciales Hybrides
          </CardTitle>
          <CardDescription>
            Races issues de sélection/croisements pour maximiser ponte,
            régularité et efficacité alimentaire
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-3 text-left font-semibold">Race</th>
                  <th className="border p-3 text-left font-semibold">
                    Couleur d'œuf
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Production
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Atouts principaux
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Remarques
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Recommandation
                  </th>
                </tr>
              </thead>
              <tbody>
                {racesHybrides.map((race, index) => (
                  <tr key={index} className="border hover:bg-gray-50">
                    <td className="border p-3 font-medium">{race.race}</td>
                    <td className="border p-3">
                      <Badge>
                        <Egg className="h-3 w-3 mr-1" />
                        {race.oeuf}
                      </Badge>
                    </td>
                    <td className="border p-3">{race.prod}</td>
                    <td className="border p-3 text-sm">{race.atouts}</td>
                    <td className="border p-3 text-sm text-gray-600">
                      {race.remarques}
                    </td>
                    <td className="border p-3">
                      <Badge
                        className={
                          race.tag === "Recommandée"
                            ? "bg-emerald-100 text-emerald-800"
                            : race.tag === "Performance"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }
                      >
                        {race.tag}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <AlertTriangle className="h-4 w-4 inline mr-1" />
            Les chiffres de production varient selon souche, conduite, climat,
            alimentation et système (sol/cage/plein air)
          </div>
        </CardContent>
      </Card>

      {/* Sections Races Rustiques et Mixtes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Races Rustiques */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber-600" />
              Races Traditionnelles (Rustiques)
            </CardTitle>
            <CardDescription>
              Moins productives, souvent plus robustes et adaptées aux systèmes
              extensifs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {racesRustiques.map((race, index) => (
                <Card key={index} className="border-l-4 border-l-amber-300">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{race.race}</h4>
                      <Badge>
                        {race.oeuf} • {race.prod}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{race.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Races Mixtes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-purple-600" />
              Races Mixtes (Œufs + Viande)
            </CardTitle>
            <CardDescription>
              Pour un modèle polyvalent: œufs + valorisation des réformes /
              viande
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {racesMixtes.map((race, index) => (
                <Card key={index} className="border-l-4 border-l-purple-300">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{race.race}</h4>
                      <Badge>
                        {race.oeuf} • {race.prod}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{race.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Note de Conduite */}
      <Card className="border-l-4 border-l-blue-400">
        <CardHeader className="bg-blue-50">
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
            Note de Conduite et Adaptation
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700">
                Facteurs influençant la performance
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Badge className="mr-2 bg-blue-100 text-blue-800">
                    <CheckCircle className="h-3 w-3" />
                  </Badge>
                  <span>Climat tropical d'altitude de Popayán</span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-blue-100 text-blue-800">
                    <CheckCircle className="h-3 w-3" />
                  </Badge>
                  <span>Système d'élevage (sol vs cage vs plein air)</span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-blue-100 text-blue-800">
                    <CheckCircle className="h-3 w-3" />
                  </Badge>
                  <span>Qualité et formulation de l'aliment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700">
                Recommandations pour Ovolia
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    1
                  </Badge>
                  <span>
                    Privilégier les races adaptées au climat humide (rusticité)
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    2
                  </Badge>
                  <span>
                    Considérer le marché local (préférence pour œufs bruns)
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    3
                  </Badge>
                  <span>
                    Évaluer la disponibilité locale des poussins et aliments
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6" />

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Critères de sélection pour Ovolia</AlertTitle>
            <AlertDescription className="text-sm">
              La race Hy-Line Brown est recommandée pour Popayán en raison de sa
              bonne adaptation au climat, sa productivité élevée d'œufs bruns,
              et sa disponibilité en Colombie. Les objectifs de consommation, de
              ponte et de calibre doivent être ajustés en fonction du système
              (au sol sur litière) et des conditions spécifiques du site.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
