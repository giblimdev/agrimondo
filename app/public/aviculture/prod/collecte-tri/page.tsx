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
  Egg,
  Filter,
  Package,
  Printer,
  Warehouse,
  ArrowDown,
  ArrowUp,
  Layers,
  Shield,
  Thermometer,
} from "lucide-react";
import Trieuse from "./trieuse";

export default function Page() {
  const etapesCollecte = [
    {
      titre: "Fréquence",
      description: "2-3 collectes par jour minimum",
      details: "Réduction des œufs sales et fêlés",
      icon: <Egg className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      titre: "Manipulation",
      description: "Gants propres et mains désinfectées",
      details: "Prévention des contaminations",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      titre: "Température",
      description: "18-20°C immédiatement après collecte",
      details: "Maintien de la fraîcheur optimale",
      icon: <Thermometer className="h-5 w-5" />,
      color: "bg-red-100 text-red-800",
    },
  ];

  const zonesTri = [
    {
      nom: "Zone d'arrivée",
      description: "Réception des œufs après collecte",
      icon: <ArrowDown className="h-4 w-4" />,
    },
    {
      nom: "Fentes de calibration",
      description: "Séparation par diamètre (fentes hautes → basses)",
      icon: <Filter className="h-4 w-4" />,
    },
    {
      nom: "Collecte calibrée",
      description: "Plateaux spécifiques par catégorie",
      icon: <Package className="h-4 w-4" />,
    },
    {
      nom: "Sortie conditionnement",
      description: "Vers mise en plateau et emballage",
      icon: <ArrowUp className="h-4 w-4" />,
    },
  ];

  const reglesConditionnement = [
    {
      regle: "Positionnement",
      description: "Pointe vers le bas, bout arrondi vers le haut",
      raison:
        "Préservation de la chambre à air et réduction des risques de contamination",
      badge: "ESSENTIEL",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      regle: "Résistance structurelle",
      description: "Le bout pointu supporte mieux le poids",
      raison: "Réduction des casses lors de l'empilage",
      badge: "SÉCURITÉ",
      color: "bg-amber-100 text-amber-800",
    },
    {
      regle: "Conservation",
      description: "Limite la diffusion d'humidité",
      raison: "Prolongation de 1-2 semaines la durée de conservation",
      badge: "QUALITÉ",
      color: "bg-blue-100 text-blue-800",
    },
  ];

  const mentionsObligatoires = [
    {
      mention: "Catégorie de qualité",
      examples: ["A", "Extra", "Frais"],
      icon: <Egg className="h-4 w-4" />,
    },
    {
      mention: "Calibre (poids)",
      examples: ["S (<53g)", "M (53-63g)", "L (63-73g)", "XL (>73g)"],
      icon: <Filter className="h-4 w-4" />,
    },
    {
      mention: "Date de durabilité minimale",
      examples: ["À consommer de préférence avant..."],
      icon: <Package className="h-4 w-4" />,
    },
    {
      mention: "Numéro de lot",
      examples: ["Lote: 12345ABC"],
      icon: <Shield className="h-4 w-4" />,
    },
  ];

  const reglesStockage = [
    "Température constante : 15-18°C",
    "Humidité relative : 70-80%",
    "Pas d'exposition directe au soleil",
    "Rotation FIFO (First In, First Out)",
    "Empilage maximal : 6 plateaux",
    "Éloignement des produits odorants",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  PROCÉDÉS DE COLLECTE & TRI – OVOLIA
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Chaîne de valeur post-ponte : efficacité, qualité et
                  traçabilité
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-amber-700 hover:bg-white">
                Post-production • 2024
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Optimisation des processus de collecte, tri, conditionnement et
              stockage pour garantir la qualité premium des œufs Ovolia tout en
              respectant les normes sanitaires et commerciales.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de collecte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {etapesCollecte.map((etape, index) => (
            <Card key={index} className="border-l-4 border-l-amber-500">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${etape.color}`}>
                    {etape.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{etape.titre}</p>
                    <p className="font-bold">{etape.description}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {etape.details}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="tri" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="collecte">Collecte</TabsTrigger>
            <TabsTrigger value="tri">Tri & Calibration</TabsTrigger>
            <TabsTrigger value="conditionnement">Conditionnement</TabsTrigger>
            <TabsTrigger value="impression">Impression</TabsTrigger>
            <TabsTrigger value="stockage">Stockage</TabsTrigger>
          </TabsList>

          {/* Section Collecte */}
          <TabsContent value="collecte" className="space-y-6">
            <Card className="border-l-4 border-l-amber-400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Egg className="h-5 w-5 mr-2" />
                  Protocole de collecte optimisé
                </CardTitle>
                <CardDescription>
                  Procédures garantissant la fraîcheur et l'intégrité des œufs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Étapes clés</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-amber-100 text-amber-800">
                          1
                        </Badge>
                        <span>
                          Inspection visuelle du nid (propreté, intégrité)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-amber-100 text-amber-800">
                          2
                        </Badge>
                        <span>Collecte dans des conteneurs désinfectés</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-amber-100 text-amber-800">
                          3
                        </Badge>
                        <span>Tri grossier (œufs sales/cassés séparés)</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 bg-amber-100 text-amber-800">
                          4
                        </Badge>
                        <span>Transport immédiat vers la salle de tri</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Contrôles qualité</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-amber-400 rounded-full mt-1.5 mr-2"></div>
                        Température de la salle de collecte : 18-20°C
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-amber-400 rounded-full mt-1.5 mr-2"></div>
                        Désinfection des mains entre chaque lot
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-amber-400 rounded-full mt-1.5 mr-2"></div>
                        Registre horaire de chaque collecte
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-amber-400 rounded-full mt-1.5 mr-2"></div>
                        Traçabilité immédiate (heure, secteur, opérateur)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Tri - MODIFIÉ pour empiler verticalement */}
          <TabsContent value="tri" className="space-y-6">
            {/* Première section : Processus de tri par diamètre */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Filter className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Processus de tri par diamètre</CardTitle>
                    <CardDescription>
                      Calibration précise par poids
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Flux de traitement :</h4>
                    <div className="space-y-3">
                      {zonesTri.map((zone, index) => (
                        <div key={index} className="flex items-center">
                          <div className="p-2 bg-gray-100 rounded-lg mr-3">
                            {zone.icon}
                          </div>
                          <div>
                            <p className="font-medium">{zone.nom}</p>
                            <p className="text-sm text-gray-600">
                              {zone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">
                      Description du processus :
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Les œufs arrivent sur le convoyeur et sont dirigés vers
                      les fentes de calibration. Les fentes les plus hautes
                      laissent passer les petits œufs, tandis que les plus
                      basses retiennent les œufs plus gros. Chaque catégorie est
                      collectée dans des plateaux spécifiques avant d'être
                      conditionnée.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deuxième section : Machine à trier - EMPILÉE VERTICALEMENT */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <Filter className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Machine à trier</CardTitle>
                    <CardDescription>
                      Visualisation du système de calibration
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
                  <div className="max-h-[500px] overflow-y-auto">
                    <Trieuse />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  <Badge className="bg-blue-100 text-blue-800 text-center">
                    Fentes hautes : S/M
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 text-center">
                    Fentes moyennes : L
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 text-center">
                    Fentes basses : XL
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 text-center">
                    Rejet : Cassés/Inadéquats
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Conditionnement */}
          <TabsContent value="conditionnement" className="space-y-6">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Règles de positionnement des œufs
                </CardTitle>
                <CardDescription>
                  Position correcte : pointe vers le bas, bout arrondi vers le
                  haut
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {reglesConditionnement.map((regle, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className={regle.color}>{regle.badge}</Badge>
                        </div>
                        <h4 className="font-semibold mb-2">{regle.regle}</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          {regle.description}
                        </p>
                        <p className="text-xs text-gray-600">{regle.raison}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Conditions optimales</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Thermometer className="h-4 w-4 mr-2 text-blue-500" />
                        <span>Température : 15–18 °C</span>
                      </div>
                      <div className="flex items-center">
                        <Layers className="h-4 w-4 mr-2 text-green-500" />
                        <span>Humidité : 70–80 %</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-amber-500" />
                        <span>
                          Durée de conservation prolongée de 1-2 semaines
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Avantages techniques</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                        Chambre à air stable (bout large vers le haut)
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                        Coquille plus épaisse au pointu supporte mieux le poids
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                        Réduction des contacts blanc/coquille
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Impression */}
          <TabsContent value="impression" className="space-y-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Printer className="h-5 w-5 mr-2" />
                  Marquage et traçabilité
                </CardTitle>
                <CardDescription>
                  Mentions obligatoires et marque Ovolia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">
                      Informations réglementaires
                    </h4>
                    <div className="space-y-4">
                      {mentionsObligatoires.map((mention, index) => (
                        <div key={index} className="flex items-start">
                          <div className="p-2 bg-gray-100 rounded-lg mr-3">
                            {mention.icon}
                          </div>
                          <div>
                            <p className="font-medium">{mention.mention}</p>
                            <p className="text-sm text-gray-600">
                              {mention.examples.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Marquage Ovolia</h4>
                    <Card className="bg-amber-50 border-amber-200">
                      <CardContent className="pt-4">
                        <div className="flex items-center mb-3">
                          <Egg className="h-6 w-6 text-amber-600 mr-2" />
                          <span className="font-bold text-xl text-amber-800">
                            OVOLIA
                          </span>
                          <Badge className="ml-auto bg-amber-100 text-amber-800">
                            Premium
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p>• Logo et marque déposée</p>
                          <p>• Origine : Popayán, Cauca</p>
                          <p>• Méthode d'élevage : Plein air</p>
                          <p>• QR Code pour traçabilité complète</p>
                        </div>
                        <div className="mt-4 p-2 bg-white rounded border">
                          <p className="text-xs text-gray-500">
                            Exemple complet : "OVOLIA Premium • L (63-73g) •
                            Cat. A • Lot: 12345ABC • À consommer avant:
                            15/12/2024"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Stockage */}
          <TabsContent value="stockage" className="space-y-6">
            <Card className="border-l-4 border-l-gray-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Warehouse className="h-5 w-5 mr-2" />
                  Protocole de stockage optimal
                </CardTitle>
                <CardDescription>
                  Conservation avant distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Règles fondamentales</h4>
                    <div className="space-y-3">
                      {reglesStockage.map((regle, index) => (
                        <div key={index} className="flex items-start">
                          <div className="h-2 w-2 bg-gray-400 rounded-full mt-2 mr-3"></div>
                          <span>{regle}</span>
                        </div>
                      ))}
                    </div>

                    <Card className="mt-6 border-l-4 border-l-red-300">
                      <CardContent className="pt-4">
                        <div className="flex items-center">
                          <Layers className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="font-semibold">
                            Attention à l'empilage
                          </h4>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Ne pas empiler plus de 6 plateaux</strong>{" "}
                          pour éviter les risques de casse en bas de pile et la
                          déformation des emballages.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">
                      Organisation de l'entrepôt
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Badge className="w-full bg-blue-100 text-blue-800">
                            Zone Réception
                          </Badge>
                          <p className="text-sm text-gray-600">
                            Contrôle température/humidité
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Badge className="w-full bg-green-100 text-green-800">
                            Zone Conditionné
                          </Badge>
                          <p className="text-sm text-gray-600">
                            Œufs calibrés et emballés
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Badge className="w-full bg-amber-100 text-amber-800">
                            Zone Expedition
                          </Badge>
                          <p className="text-sm text-gray-600">
                            Préparation des commandes
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Badge className="w-full bg-red-100 text-red-800">
                            Zone Quarantaine
                          </Badge>
                          <p className="text-sm text-gray-600">
                            Produits non conformes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">
                        Rotation des stocks
                      </h4>
                      <div className="flex items-center">
                        <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                          <ArrowUp className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Système FIFO (First In, First Out)
                          </p>
                          <p className="text-sm text-gray-600">
                            Les premiers œufs stockés sont les premiers expédiés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Synthèse qualité */}
        <Card className="mt-8 border-l-4 border-l-amber-500">
          <CardHeader className="bg-amber-50">
            <CardTitle>Indicateurs de performance post-ponte</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-amber-600">{"<1%"}</div>
                <p className="text-sm text-gray-600">Taux de casse</p>
                <Badge className="mt-2 bg-amber-100 text-amber-800">
                  Objectif
                </Badge>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-emerald-600">
                  {"<2h"}
                </div>
                <p className="text-sm text-gray-600">
                  Collecte → Refroidissement
                </p>
                <Badge className="mt-2 bg-emerald-100 text-emerald-800">
                  Standard
                </Badge>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <p className="text-sm text-gray-600">Traçabilité complète</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">
                  Obligatoire
                </Badge>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600">
                  {"<0.5%"}
                </div>
                <p className="text-sm text-gray-600">Rejet calibration</p>
                <Badge className="mt-2 bg-purple-100 text-purple-800">
                  Efficacité
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
