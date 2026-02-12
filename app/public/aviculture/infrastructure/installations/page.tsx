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
  Building,
  MapPin,
  Droplets,
  Thermometer,
  Sun,
  Package,
  Egg,
  Trash2,
  Wrench,
  Shield,
} from "lucide-react";
import Solaire from "./solaire";
import EauUsee from "./eauUsee";
import Recupeau from "./recupeau";

export default function Page() {
  const zones = [
    {
      nom: "Zone d'élevage",
      surface: "280-300 m²",
      role: "Hébergement, alimentation, ponte, repos",
      icon: <Building className="h-5 w-5" />,
      couleur: "border-blue-500",
      details: [
        "Densité : 9 poules/m²",
        "Hauteur sous plafond : 3,0-3,5 m",
        "Litière sèche (copeaux, sciure, balle de riz)",
        "Rideaux latéraux pour aération",
      ],
    },
    {
      nom: "Stockage alimentaire",
      surface: "15-25 m²",
      role: "Conservation des aliments secs",
      icon: <Package className="h-5 w-5" />,
      couleur: "border-green-500",
      details: [
        "Sacs sur palettes (FIFO)",
        "Protection anti-rongeurs",
        "Isolé de la zone animaux",
        "Traçabilité des lots",
      ],
    },
    {
      nom: "Sas sanitaire",
      surface: "10-12 m²",
      role: "Barrière sanitaire, hygiène du personnel",
      icon: <Shield className="h-5 w-5" />,
      couleur: "border-red-500",
      details: [
        "Changement de tenue obligatoire",
        "Lave-mains et pédiluve",
        "Séparation zone sale/propre",
        "Registre visiteurs",
      ],
    },
    {
      nom: "Conditionnement œufs",
      surface: "12-20 m²",
      role: "Collecte, tri, stockage court",
      icon: <Egg className="h-5 w-5" />,
      couleur: "border-yellow-500",
      details: [
        "Température : 18-20°C",
        "Humidité < 75%",
        "Table de tri et balance",
        "Flux unidirectionnel",
      ],
    },
    {
      nom: "Cestières",
      surface: "10-15 m²",
      role: "Stockage litière et consommables",
      icon: <Package className="h-5 w-5" />,
      couleur: "border-purple-500",
      details: [
        "Sol surélevé et aéré",
        "Organisation par type",
        "Matériel propre/contaminé séparé",
        "EPI et produits d'entretien",
      ],
    },
    {
      nom: "Local technique",
      surface: "8-15 m²",
      role: "Électricité, eau, ventilation, solaire",
      icon: <Wrench className="h-5 w-5" />,
      couleur: "border-gray-500",
      details: [
        "Tableau électrique et onduleur",
        "Pompe et filtre eau",
        "Contrôleurs solaires",
        "Registre maintenance",
      ],
    },
    {
      nom: "Local déchets",
      surface: "6-10 m²",
      role: "Gestion des flux sales",
      icon: <Trash2 className="h-5 w-5" />,
      couleur: "border-orange-500",
      details: [
        "Accès indépendant",
        "Conteneur fermé et lavable",
        "Aire cimentée",
        "Registre sortie déchets",
      ],
    },
    {
      nom: "Couloirs service",
      surface: "20-40 m²",
      role: "Circulation interne et logistique",
      icon: <MapPin className="h-5 w-5" />,
      couleur: "border-teal-500",
      details: [
        "Largeur minimale : 1,2 m",
        "Revêtement lavable",
        "Séparation zones propres/sales",
        "Circulation optimisée",
      ],
    },
  ];

  const caracteristiques = [
    { label: "Capacité totale", value: "2,500 pondeuses" },
    { label: "Type de système", value: "Au sol sur litière" },
    { label: "Densité", value: "9 poules/m²" },
    { label: "Surface utile", value: "≈ 278 m²" },
    { label: "Structure", value: "Semi-ouverte à rideaux" },
    { label: "Climat adapté", value: "Humide tropical d'altitude" },
    { label: "Éclairage", value: "14-16 h/jour, 5-10 lux" },
    { label: "Consommation eau", value: "2,500 L/jour minimum" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Présentation des Bâtiments et Installations
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Élevage de poules pondeuses au sol "libres de cages" - Système
                  à 5 lots successifs
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Capacité : 2,500 poules
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Bâtiment unique compartimenté en 5 lots successifs, permettant une
              rotation continue de la production et un meilleur contrôle
              sanitaire. Conception adaptée au climat humide tropical d'altitude
              de Popayán.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Surface totale estimée
                  </p>
                  <p className="text-2xl font-bold">360-420 m²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Zones fonctionnelles</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Droplets className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Débit eau minimum</p>
                  <p className="text-2xl font-bold">2,500 L/j</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Thermometer className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Température cible</p>
                  <p className="text-2xl font-bold">18-20°C</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="zones" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="zones">Zones fonctionnelles</TabsTrigger>
            <TabsTrigger value="caracteristiques">Caractéristiques</TabsTrigger>
            <TabsTrigger value="energies">Énergies & Eau</TabsTrigger>
            <TabsTrigger value="schema">Schéma fonctionnel</TabsTrigger>
          </TabsList>

          {/* Section Zones */}
          <TabsContent value="zones" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Répartition des surfaces par zone fonctionnelle
                </CardTitle>
                <CardDescription>
                  Organisation spatiale optimisée pour les flux de production et
                  la biosécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {zones.map((zone, index) => (
                    <Card key={index} className={`border-l-4 ${zone.couleur}`}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {zone.icon}
                          </div>
                          <div>
                            <h3 className="font-bold">{zone.nom}</h3>
                            <p className="text-sm text-gray-500">
                              {zone.surface}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {zone.role}
                        </p>
                        <ul className="space-y-1">
                          {zone.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-gray-500 flex items-start"
                            >
                              <div className="h-1 w-1 bg-gray-400 rounded-full mt-2 mr-2 shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">
                    Objectifs de conception
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          ✓
                        </Badge>
                        <span>
                          Assurer confort thermique et aération naturelle
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          ✓
                        </Badge>
                        <span>Prévenir les contaminations croisées</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          ✓
                        </Badge>
                        <span>
                          Faciliter les flux (aliments, œufs, déchets)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-green-100 text-green-800">
                          ✓
                        </Badge>
                        <span>
                          Minimiser les coûts d'énergie et d'entretien
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Caractéristiques */}
          <TabsContent value="caracteristiques">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Caractéristiques techniques</CardTitle>
                  <CardDescription>
                    Spécifications générales du bâtiment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {caracteristiques.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b"
                      >
                        <span className="font-medium text-gray-700">
                          {item.label}
                        </span>
                        <Badge variant="outline">{item.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Points techniques complémentaires</CardTitle>
                  <CardDescription>
                    Détails de construction et équipements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Structure
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Métallique galvanisée ou bois traité</li>
                        <li>• Toiture : tôle isolée, pente 20-25%</li>
                        <li>• Sol : béton lissé avec pente 1-2%</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Sécurité & Conformité
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Clôture périmétrique et portail</li>
                        <li>• Affichage biosécurité obligatoire</li>
                        <li>• Matériaux lisses, non poreux, lavables</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-700">
                        Spécificités climatiques
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Ventilation transversale naturelle</li>
                        <li>• Ventilateurs d'appoint si nécessaire</li>
                        <li>• Gestion stricte drainage et humidité</li>
                        <li>• Contrôle nuisibles intégré</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Énergies & Eau */}
          <TabsContent value="energies">
            <div className="space-y-6">
              <Solaire />
              <Recupeau />
              <EauUsee />
            </div>
          </TabsContent>

          {/* Section Schéma fonctionnel */}
          <TabsContent value="schema">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Schéma fonctionnel recommandé
                </CardTitle>
                <CardDescription>
                  Flux linéaire : propre vers sale, sans croisement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <Badge className="mb-2 bg-blue-100 text-blue-800">
                        Entrée
                      </Badge>
                      <div className="text-sm">↓</div>
                    </div>

                    <Card className="w-full max-w-md border-2 border-red-300">
                      <CardContent className="pt-6 text-center">
                        <Shield className="h-8 w-8 mx-auto mb-2 text-red-500" />
                        <h4 className="font-bold">SAS sanitaire</h4>
                        <p className="text-sm text-gray-600">
                          Barrière sanitaire
                        </p>
                      </CardContent>
                    </Card>

                    <div className="text-sm">↓</div>

                    <Card className="w-full max-w-lg border-2 border-blue-300">
                      <CardContent className="pt-6 text-center">
                        <Building className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                        <h4 className="font-bold">Salle pondeuses</h4>
                        <p className="text-sm text-gray-600">
                          Zone principale - 280-300 m²
                        </p>
                      </CardContent>
                    </Card>

                    <div className="flex justify-around w-full max-w-2xl mt-4">
                      <div className="text-center">
                        <div className="text-sm mb-2">↓ Sortie œufs</div>
                        <Card className="border-2 border-yellow-300">
                          <CardContent className="pt-6 text-center">
                            <Egg className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                            <h4 className="font-bold text-sm">Local œufs</h4>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="text-center">
                        <div className="text-sm mb-2">↓ Flux déchets</div>
                        <Card className="border-2 border-orange-300">
                          <CardContent className="pt-6 text-center">
                            <Trash2 className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                            <h4 className="font-bold text-sm">Local déchets</h4>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Flux propres
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          →
                        </Badge>
                        <span>Aliments → Stockage → Distribution</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          →
                        </Badge>
                        <span>Personnel → SAS → Zone élevage</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-blue-100 text-blue-800">
                          →
                        </Badge>
                        <span>Œufs → Collecte → Conditionnement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-red-700">
                      Flux sales
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-red-100 text-red-800">
                          →
                        </Badge>
                        <span>Déchets → Local déchets → Évacuation</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-red-100 text-red-800">
                          →
                        </Badge>
                        <span>Matériel contaminé → SAS → Nettoyage</span>
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-red-100 text-red-800">
                          →
                        </Badge>
                        <span>Eaux usées → Traitement → Recyclage</span>
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
            <CardTitle>Recommandations finales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Planification future
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      1
                    </Badge>
                    <span>Prévoir zones d'expansion (3 000-3 500 poules)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      2
                    </Badge>
                    <span>
                      Système collecte eaux de pluie pour lavage et
                      refroidissement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-700">
                  Maintenance et conformité
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      3
                    </Badge>
                    <span>
                      Plan d'entretien et désinfection mensuel documenté
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                      4
                    </Badge>
                    <span>
                      Tous matériaux intérieurs lisses, non poreux et lavables
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
