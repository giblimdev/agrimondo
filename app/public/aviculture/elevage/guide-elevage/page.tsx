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
  Thermometer,
  Droplets,
  Sun,
  Utensils,
  Stethoscope,
  Activity,
  AlertTriangle,
  Info,
  Egg,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Heart,
  Users,
  Package,
} from "lucide-react";
import LifeCycle from "./lifeCycle";
import AlimentationGuide from "../alimentation/Alimentation";

export default function GuideElevagePage() {
  const CheckCircle = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const phasesCycle = [
    {
      phase: "Démarrage (0-6 semaines)",
      objectif: "Développement squelettique et immunitaire",
      temperature: "32-35°C → 20-22°C",
      densite: "15-20 poussins/m²",
      icon: <Activity className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      phase: "Croissance (7-16 semaines)",
      objectif: "Développement corporel harmonieux",
      temperature: "18-22°C constante",
      densite: "8-10 poulettes/m²",
      icon: <TrendingUp className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      phase: "Pré-ponte (17-20 semaines)",
      objectif: "Maturation reproductive",
      temperature: "18-20°C",
      densite: "7-9 poulettes/m²",
      icon: <Egg className="h-5 w-5" />,
      couleur: "bg-amber-100 text-amber-800",
    },
    {
      phase: "Ponte (21-72/80 semaines)",
      objectif: "Production optimale d'œufs",
      temperature: "18-20°C",
      densite: "7-9 poules/m²",
      icon: <Package className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
    },
  ];

  const criteresDecision = [
    {
      duree: "Fin à 72 semaines (≈16.5 mois)",
      avantages: [
        "Meilleure qualité coquille",
        "Moins de problèmes sanitaires",
        "Ponte encore à 70-75%",
        "Conversion alimentaire acceptable",
      ],
      icon: <CheckCircle className="h-4 w-4" />,
      couleur: "bg-emerald-100 text-emerald-800",
    },
    {
      duree: "Fin à 80 semaines (≈18.5 mois)",
      avantages: ["Plus d'œufs totaux", "Mieux amortie"],
      risques: [
        "Qualité coquille réduite",
        "Mortalité augmentée",
        "Nécessite excellente gestion",
        "Aliment adapté vieilles pondeuses",
      ],
      icon: <AlertTriangle className="h-4 w-4" />,
      couleur: "bg-amber-100 text-amber-800",
    },
  ];

  const considerationsEnvironnementales = [
    {
      aspect: "Température optimale",
      valeur: "18-22°C",
      impact: "Meilleure conversion alimentaire et ponte",
      icon: <Thermometer className="h-4 w-4" />,
    },
    {
      aspect: "Humidité relative",
      valeur: "60-70%",
      impact: "Prévention problèmes respiratoires",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      aspect: "Éclairage",
      valeur: "14-16 heures/jour",
      impact: "Stimulation ponte et comportement",
      icon: <Sun className="h-4 w-4" />,
    },
    {
      aspect: "Ventilation",
      valeur: "4-6 renouvellements/heure",
      impact: "Qualité air et contrôle ammoniac",
      icon: <Activity className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  GUIDE TECHNIQUE D'ÉLEVAGE - OVOLIA
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Protocoles de conduite, gestion sanitaire et optimisation des
                  performances
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Hy-Line Brown • Popayán
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Guide complet pour l'élevage de poules pondeuses Hy-Line Brown
              dans les conditions climatiques de Popayán. Ce document couvre le
              cycle de vie, l'alimentation, la gestion sanitaire et les critères
              de décision pour optimiser la rentabilité.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cycle de production</p>
                  <p className="text-2xl font-bold">72-80 sem</p>
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
                  <p className="text-sm text-gray-500">Production cible</p>
                  <p className="text-2xl font-bold">300+</p>
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
                  <p className="text-sm text-gray-500">Température idéale</p>
                  <p className="text-2xl font-bold">18-22°C</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Utensils className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phases alimentaires</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="cycle" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cycle">Cycle de Vie</TabsTrigger>
            <TabsTrigger value="alimentation">Alimentation</TabsTrigger>
            <TabsTrigger value="environnement">Environnement</TabsTrigger>
            <TabsTrigger value="decision">Décision Fin Cycle</TabsTrigger>
          </TabsList>

          {/* SECTION : CYCLE DE VIE */}
          <TabsContent value="cycle" className="space-y-6">
            <LifeCycle />
          </TabsContent>

          {/* SECTION : ALIMENTATION */}
          <TabsContent value="alimentation" className="space-y-6">
            <Card className="border-l-4 border-l-orange-400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2 text-orange-600" />
                  Stratégie Nutritionnelle
                </CardTitle>
                <CardDescription>
                  Programme alimentaire par phases pour optimiser croissance et
                  production
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlimentationGuide />
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION : ENVIRONNEMENT */}
          <TabsContent value="environnement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="h-5 w-5 mr-2 text-red-500" />
                    Conditions Environnementales Optimales
                  </CardTitle>
                  <CardDescription>
                    Paramètres critiques pour le bien-être et la productivité
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {considerationsEnvironnementales.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{item.aspect}</h4>
                            <Badge className="bg-blue-100 text-blue-800">
                              {item.valeur}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.impact}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Gestion Sanitaire Préventive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Programme de vaccination
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          <span>Jour 1 : Newcastle + Bronchite</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          <span>Semaine 6 : Rappel Newcastle</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          <span>Semaine 10 : Gumboro</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          <span>Semaine 16 : Rappel Bronchite</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Contrôles réguliers
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                          <span>Pesées hebdomadaires (échantillon)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                          <span>Analyse eau mensuelle</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                          <span>Contrôle qualité œufs quotidien</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SECTION : DÉCISION FIN CYCLE */}
          <TabsContent value="decision" className="space-y-6">
            <Card className="border-l-4 border-l-purple-400">
              <CardHeader className="bg-linear-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Critères de Décision - Fin de Cycle
                </CardTitle>
                <CardDescription>
                  Analyse comparative des scénarios 72 vs 80 semaines
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {criteresDecision.map((critere, index) => (
                    <Card
                      key={index}
                      className={`border-l-4 ${
                        index === 0
                          ? "border-l-emerald-400"
                          : "border-l-amber-400"
                      }`}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div
                              className={`p-2 rounded-lg mr-3 ${critere.couleur}`}
                            >
                              {critere.icon}
                            </div>
                            <h3 className="text-lg font-semibold">
                              {critere.duree}
                            </h3>
                          </div>
                          <Badge
                            className={
                              index === 0
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }
                          >
                            {index === 0 ? "Recommandé" : "Optionnel"}
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">✅ Avantages</h4>
                          <ul className="space-y-1">
                            {critere.avantages.map((avantage, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                                {avantage}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {critere.risques && (
                          <div>
                            <h4 className="font-medium mb-2">
                              ⚠️ Risques & Exigences
                            </h4>
                            <ul className="space-y-1">
                              {critere.risques.map((risque, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-sm text-gray-600"
                                >
                                  <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
                                  {risque}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Recommandation pour Ovolia</AlertTitle>
                  <AlertDescription className="text-sm">
                    Pour une première mise en route à Popayán, privilégier un
                    cycle de 72 semaines pour limiter les risques sanitaires et
                    maintenir une bonne qualité de coquille. Passer à 80
                    semaines une fois l'expérience et la maîtrise technique
                    acquises.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommandations finales */}
        <Card className="mt-8 border-l-4 border-l-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle>Points clés de suivi</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Indicateurs de performance
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      1
                    </Badge>
                    <span>
                      Taux de ponte hebdomadaire (cible : ≥90% en pic)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      2
                    </Badge>
                    <span>
                      Indice de consommation (cible : 2.0-2.2 kg alim/kg œufs)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      3
                    </Badge>
                    <span>
                      Mortalité cumulée (acceptable : 5-7% sur 72 semaines)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Actions correctives prioritaires
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      A
                    </Badge>
                    <span>
                      Si ponte &lt;85% : vérifier alimentation, éclairage,
                      température
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      B
                    </Badge>
                    <span>
                      Si mortalité &gt;0.1%/semaine : audit sanitaire urgent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      C
                    </Badge>
                    <span>
                      Si qualité coquille faible : ajuster calcium et phosphore
                    </span>
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
