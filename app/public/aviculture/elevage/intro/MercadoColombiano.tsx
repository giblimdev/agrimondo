// app/components/MercadoColombiano.tsx
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
  TrendingUp,
  Users,
  ShoppingCart,
  Globe,
  BarChart3,
  DollarSign,
  Target,
  MapPin,
  Package,
  Heart,
  Building,
  Egg,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function MercadoColombiano() {
  const estadisticas = [
    {
      titulo: "Production nationale",
      valor: "16 milliards",
      unidad: "œufs/an",
      tendencia: "+3.5%",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
      borderColor: "border-l-blue-500",
    },
    {
      titulo: "Consommation/habitant",
      valor: "320",
      unidad: "œufs/personne/an",
      tendencia: "+2.8%",
      icon: <Users className="h-5 w-5" />,
      color: "bg-green-100 text-green-800",
      borderColor: "border-l-green-500",
    },
    {
      titulo: "Poules pondeuses",
      valor: "14 millions",
      unidad: "têtes",
      tendencia: "+4.2%",
      icon: <ShoppingCart className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-800",
      borderColor: "border-l-purple-500",
    },
    {
      titulo: "Part marché œufs bruns",
      valor: "65%",
      unidad: "du marché",
      tendencia: "+1.5%",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
      borderColor: "border-l-amber-500",
    },
  ];

  const regionesProductoras = [
    {
      region: "Cundinamarca/Boyacá",
      participacion: "35%",
      caracteristicas: "Zone la plus productive, clusters industriels",
      icon: <MapPin className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      region: "Valle del Cauca",
      participacion: "18%",
      caracteristicas: "Production intensive, exportations",
      icon: <MapPin className="h-4 w-4" />,
      color: "bg-green-100 text-green-800",
    },
    {
      region: "Antioquia",
      participacion: "15%",
      caracteristicas: "Marché régional fort, consommation élevée",
      icon: <MapPin className="h-4 w-4" />,
      color: "bg-purple-100 text-purple-800",
    },
    {
      region: "Santander",
      participacion: "12%",
      caracteristicas: "Croissance rapide, investissements récents",
      icon: <MapPin className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-800",
    },
  ];

  const tendenciasConsumo = [
    {
      tendencia: "Œufs enrichis (Omega-3, vitamines)",
      crecimiento: "Forte croissance",
      segmento: "Premium",
      icon: <Heart className="h-4 w-4" />,
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      tendencia: "Bien-être animal et plein air",
      croissance: "Croissance rapide",
      segmento: "Éthique",
      icon: <Shield className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      tendencia: "Traçabilité et origine locale",
      croissance: "Demande croissante",
      segmento: "Qualité",
      icon: <Package className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      tendencia: "Emballage écologique",
      croissance: "Nouvelle tendance",
      segmento: "Durabilité",
      icon: <Globe className="h-4 w-4" />,
      color: "bg-green-100 text-green-800",
    },
  ];

  const estructuraPrecios = [
    {
      tipo: "Œuf standard (blanc)",
      precioProductor: "$180 - $220 COP",
      precioConsumidor: "$280 - $350 COP",
      margen: "35-40%",
      tendencia: "Stable",
      color: "bg-blue-100 text-blue-800",
    },
    {
      tipo: "Œuf brun standard",
      precioProductor: "$200 - $250 COP",
      precioConsumidor: "$320 - $400 COP",
      margen: "35-45%",
      tendencia: "↑ Croissance",
      color: "bg-green-100 text-green-800",
    },
    {
      tipo: "Œuf enrichi (Omega-3)",
      precioProductor: "$300 - $350 COP",
      precioConsumidor: "$450 - $550 COP",
      margen: "40-50%",
      tendencia: "↑↑ Forte croissance",
      color: "bg-purple-100 text-purple-800",
    },
    {
      tipo: "Œuf bio/free-range",
      precioProductor: "$400 - $500 COP",
      precioConsumidor: "$600 - $800 COP",
      margen: "40-50%",
      tendencia: "↑↑ Niche en expansion",
      color: "bg-amber-100 text-amber-800",
    },
  ];

  const oportunidadesOvolia = [
    {
      titulo: "Marché local sous-approvisionné",
      items: [
        "Moins de 30% des œufs consommés produits localement",
        "Importations depuis autres régions (coûts logistiques élevés)",
        "Demande croissante avec urbanisation de Popayán",
      ],
      icon: <Building className="h-5 w-5" />,
      borderColor: "border-l-emerald-400",
    },
    {
      titulo: "Segment premium en croissance",
      items: [
        "Œufs frais de qualité supérieure (marge 40-50%)",
        "Certification bien-être animal possible",
        "Emballage écologique et traçabilité complète",
      ],
      icon: <Egg className="h-5 w-5" />,
      borderColor: "border-l-blue-400",
    },
    {
      titulo: "Valorisation locale",
      items: [
        "Création d'emplois dans la région (jeunes, femmes rurales)",
        "Circuit court et développement économique local",
        "Partenaire des hôtels, restaurants et épiceries fines",
      ],
      icon: <Target className="h-5 w-5" />,
      borderColor: "border-l-green-400",
    },
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-linear-to-r from-green-700 to-emerald-800 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                MARCHÉ DES ŒUFS EN COLOMBIE
              </CardTitle>
              <CardDescription className="text-green-100">
                Analyse complète du secteur avicole colombien - Tendances 2024
              </CardDescription>
            </div>
            <Badge className="mt-2 md:mt-0 bg-white text-green-700 hover:bg-white">
              Mise à jour : 2024
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700">
            Panorama complet du secteur avicole colombien avec statistiques de
            production, analyse des tendances de consommation, structure des
            prix et opportunités pour le projet Ovolia à Popayán. Données basées
            sur FENAVI, DANE et analyses de marché.
          </p>
        </CardContent>
      </Card>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {estadisticas.map((estad, index) => (
          <Card key={index} className={estad.borderColor}>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg">
                  <div className={estad.color}>{estad.icon}</div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{estad.titulo}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold">{estad.valor}</p>
                    <span className="ml-2 text-sm text-gray-500">
                      {estad.unidad}
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 mt-1">
                    {estad.tendencia} vs 2023
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sections principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Régions productrices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Principales régions productrices
            </CardTitle>
            <CardDescription>
              Répartition géographique de la production (80% de la production
              nationale)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionesProductoras.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg mr-3">
                      <div className={region.color}>{region.icon}</div>
                    </div>
                    <div>
                      <p className="font-medium">{region.region}</p>
                      <p className="text-sm text-gray-600">
                        {region.caracteristicas}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    {region.participacion}
                  </Badge>
                </div>
              ))}
            </div>

            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Opportunité pour le Cauca</AlertTitle>
              <AlertDescription className="text-sm">
                Production locale insuffisante pour couvrir la demande, avec
                importations depuis d'autres régions générant des coûts
                logistiques élevés.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Tendances de consommation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Tendances de consommation
            </CardTitle>
            <CardDescription>
              Évolution des préférences des consommateurs colombiens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tendenciasConsumo.map((tendencia, index) => (
                <div
                  key={index}
                  className="border-l-4 border-l-green-300 pl-4 py-2"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="p-1 rounded mr-2">
                        <div className={tendencia.color}>{tendencia.icon}</div>
                      </div>
                      <div>
                        <p className="font-medium">{tendencia.tendencia}</p>
                        <Badge className="bg-gray-100 text-gray-800 mt-1">
                          {tendencia.segmento}
                        </Badge>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {tendencia.crecimiento}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-700">
                Challenges du secteur
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
                  Volatilité des prix des matières premières (aliments)
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
                  Pressions sanitaires (influenza aviaire, autres maladies)
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
                  Concurrence des grands producteurs industrialisés
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Structure des prix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Structure des prix 2024
          </CardTitle>
          <CardDescription>
            Prix moyens par segment de marché et tendances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-3 text-left font-semibold">
                    Type d'œuf
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Prix producteur (unité)
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Prix consommateur (unité)
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Marge distribution
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Tendance marché
                  </th>
                </tr>
              </thead>
              <tbody>
                {estructuraPrecios.map((precio, index) => (
                  <tr key={index} className="border hover:bg-gray-50">
                    <td className="border p-3 font-medium">{precio.tipo}</td>
                    <td className="border p-3">
                      <Badge className={precio.color}>
                        {precio.precioProductor}
                      </Badge>
                    </td>
                    <td className="border p-3">
                      <Badge className="bg-green-100 text-green-800">
                        {precio.precioConsumidor}
                      </Badge>
                    </td>
                    <td className="border p-3">
                      <Badge className="bg-purple-100 text-purple-800">
                        {precio.margen}
                      </Badge>
                    </td>
                    <td className="border p-3">
                      <Badge
                        className={
                          precio.tendencia.includes("↑↑")
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {precio.tendencia}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <AlertTriangle className="h-3 w-3 inline mr-1" />
            Source : FENAVI 2024, DANE, analyse de marché
          </div>
        </CardContent>
      </Card>

      {/* Opportunités pour Ovolia */}
      <Card className="border-l-4 border-l-amber-400">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2 text-amber-600" />
            Opportunités pour Ovolia à Popayán
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {oportunidadesOvolia.map((oportunidad, index) => (
              <Card key={index} className={oportunidad.borderColor}>
                <CardContent className="pt-4">
                  <div className="flex items-center mb-2">
                    <div className="p-1 bg-gray-100 rounded mr-2">
                      {oportunidad.icon}
                    </div>
                    <h4 className="font-semibold">{oportunidad.titulo}</h4>
                  </div>
                  <ul className="space-y-1">
                    {oportunidad.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start"
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

          <Separator className="my-6" />

          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Potentiel de croissance</AlertTitle>
            <AlertDescription className="text-sm">
              Le Cauca présente une consommation d'œufs inférieure à la moyenne
              nationale (280 vs 320 œufs/personne/an), indiquant un potentiel de
              croissance important pour des produits locaux de qualité.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Recommandations */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader className="bg-emerald-50">
          <CardTitle>Stratégies recommandées pour Ovolia</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                Positionnement marché
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    1
                  </Badge>
                  <span>
                    Focus sur le segment œufs bruns premium avec traçabilité
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    2
                  </Badge>
                  <span>
                    Développement de partenariats avec hôtels et restaurants de
                    qualité
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    3
                  </Badge>
                  <span>
                    Communication sur l'origine locale et le bien-être animal
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                Avantages compétitifs
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    4
                  </Badge>
                  <span>
                    Fraîcheur garantie (circuit court vs importations)
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    5
                  </Badge>
                  <span>
                    Réduction des coûts logistiques pour le marché local
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-emerald-100 text-emerald-800">
                    6
                  </Badge>
                  <span>
                    Impact social positif et création d'emplois locaux
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
