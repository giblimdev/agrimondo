"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Droplet,
  Egg,
  GitPullRequest,
  Bug,
  ChefHat,
  BookOpen,
  Sprout,
  Worm,
  Shield,
  Zap,
  Users,
  BarChart,
  Clock,
  MapPin,
  Building,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  const stats = [
    {
      label: "Superficie totale",
      value: "2 000 m²",
      icon: <MapPin className="w-4 h-4" />,
    },
    { label: "Serre", value: "200 m²", icon: <Building className="w-4 h-4" /> },
    {
      label: "Poules pondeuses",
      value: "500",
      icon: <Egg className="w-4 h-4" />,
    },
    { label: "Ruches", value: "3", icon: <Bug className="w-4 h-4" /> },
    {
      label: "Production annuelle estimée",
      value: "10T",
      icon: <BarChart className="w-4 h-4" />,
    },
    {
      label: "Économie d'eau",
      value: "90%",
      icon: <Droplet className="w-4 h-4" />,
    },
  ];

  const cards = [
    {
      title: "Cultures en serre",
      description:
        "Serre de 200 m² pour cultures en bacs ou au sol et aquaponie. Optimisation de la lumière et température pour production maximale.",
      href: "/cultures/serre",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      tags: ["Hydroponie", "Sol", "Optimisation"],
      stats: ["200 m²", "Contrôle climatique", "Annuelle"],
    },
    {
      title: "Aquaponie",
      description:
        "Système intégré avec tilapia, utilisant les nutriments des poissons pour la culture hydroponique dans la serre.",
      href: "/aquaponie",
      icon: <Droplet className="w-6 h-6 text-blue-600" />,
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
      tags: ["Tilapia", "Circularité", "Économe en eau"],
      stats: ["90% d'économie d'eau", "Production intégrée", "Autonome"],
    },
    {
      title: "Élevage de Poules",
      description:
        "500 poules pondeuses élevées sur le terrain, production d'œufs, alimentation partiellement à base de BSF. Pas de parcours plein air.",
      href: "/aviculture",
      icon: <Egg className="w-6 h-6 text-amber-600" />,
      color: "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200",
      tags: ["500 poules", "BSF", "Œufs bio"],
      stats: ["500 pondeuses", "Alimentation BSF", "Contrôle sanitaire"],
    },
    {
      title: "Production Spécialisée",
      description:
        "Ces productions sont dans bâtiments dédiés, séparés de la serre, pour un contrôle optimal des conditions (humidité, température, hygiène).",
      icon: <GitPullRequest className="w-6 h-6 text-purple-600" />,
      color: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200",
      links: [
        {
          href: "/micropousses",
          label: "Micropousses",
          icon: <Sprout className="w-4 h-4" />,
        },
        {
          href: "/mycoculture",
          label: "Champignons",
          icon: <Leaf className="w-4 h-4" />,
        },
        { href: "/bsf", label: "BSF", icon: <Worm className="w-4 h-4" /> },
      ],
    },
    {
      title: "Apiculture",
      description:
        "3 ruches intégrées pour pollinisation et production de miel, soutenant la biodiversité et l'autonomie alimentaire.",
      href: "/apiculture",
      icon: <Bug className="w-6 h-6 text-orange-600" />,
      color: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200",
      tags: ["3 ruches", "Pollinisation", "Miel local"],
      stats: ["Pollinisation", "Miel produit", "Biodiversité"],
    },
    {
      title: "Recettes & Transformation",
      description:
        "Valorisation des productions via des recettes innovantes et transformation des produits pour une meilleure conservation.",
      href: "/recettes",
      icon: <ChefHat className="w-6 h-6 text-red-600" />,
      color: "bg-gradient-to-br from-red-50 to-pink-50 border-red-200",
      tags: ["Recettes", "Transformation", "Conservation"],
      stats: ["Valeur ajoutée", "Innovation", "Circularité"],
    },
  ];

  const principles = [
    {
      title: "Économie Circulaire",
      description:
        "Tous les déchets sont valorisés en ressources pour d'autres productions",
      icon: <Zap className="w-5 h-5 text-green-600" />,
    },
    {
      title: "Zéro Déchet",
      description:
        "Système conçu pour minimiser et réutiliser tous les résidus",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Autonomie Alimentaire",
      description:
        "Production locale pour une alimentation de qualité à prix accessible",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Durabilité",
      description:
        "Pratiques respectueuses de l'environnement et des ressources",
      icon: <Leaf className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hacienda Esmeralda
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-lg text-emerald-100 max-w-3xl flex-1">
              Exploitation durable à Popayán (Cauca, Colombie) sur 2 000 m²,
              pensée en économie circulaire et avec une approche zéro déchet.
              Notre modèle innovant intègre production végétale, élevage et
              transformation pour une autonomie alimentaire optimale.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Chiffres clés</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-emerald-300">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-emerald-200">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Nos principes fondamentaux
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-2 bg-opacity-10 rounded-lg"
                  style={{
                    backgroundColor: `${principle.icon.props.className.includes("green") ? "#dcfce7" : principle.icon.props.className.includes("blue") ? "#dbeafe" : "#f3e8ff"}`,
                  }}
                >
                  {principle.icon}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {principle.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{principle.description}</p>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Main Cards Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Nos productions
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span className="text-sm">
                Temps réel • Mise à jour quotidienne
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) =>
              card.links ? (
                <Card
                  key={index}
                  className={`${card.color} hover:shadow-xl transition-all duration-300 border-2`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {card.icon}
                        <CardTitle className="text-xl">{card.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-white/50">
                        Multiple
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-3">
                        Accès rapide
                      </h4>
                      <div className="grid grid-cols-3 gap-2 ">
                        {card.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="group flex flex-col items-center p-3 rounded-lg bg-white hover:bg-white/80 transition-colors"
                          >
                            <div className="text-gray-600 group-hover:text-purple-600 mb-2">
                              {link.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                              {link.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm text-gray-500">
                      Productions sous contrôle strict d'hygiène et température
                    </div>
                  </CardFooter>
                </Card>
              ) : (
                <Link href={card.href} key={index}>
                  <Card
                    className={`${card.color} hover:shadow-xl transition-all duration-300 border-2 h-full hover:scale-[1.02]`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {card.icon}
                          <CardTitle className="text-xl">
                            {card.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </div>
                      <CardDescription className="text-gray-600">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.tags?.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-white/70"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {card.stats?.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="text-center p-2 bg-white/50 rounded"
                          >
                            <div className="text-xs text-gray-500">
                              Indicateur
                            </div>
                            <div className="font-semibold text-gray-700">
                              {stat}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Knowledge Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-700" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Centre de connaissances
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Accédez à nos glossaires techniques et guides pratiques pour
                maîtriser les techniques de production durable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/apiculture/glossary">
                  <Button
                    variant="outline"
                    className="bg-white border-emerald-300"
                  >
                    <Bug className="w-4 h-4 mr-2" />
                    Glossaire Apiculture
                  </Button>
                </Link>
                <Link href="/aquaponie/glossary">
                  <Button
                    variant="outline"
                    className="bg-white border-emerald-300"
                  >
                    <Droplet className="w-4 h-4 mr-2" />
                    Glossaire Aquaponie
                  </Button>
                </Link>
                <Link href="/aviculture/glossary">
                  <Button
                    variant="outline"
                    className="bg-white border-emerald-300"
                  >
                    <Droplet className="w-4 h-4 mr-2" />
                    Glossaire Aquaponie
                  </Button>
                </Link>
                <Link href="/recettes">
                  <Button
                    variant="outline"
                    className="bg-white border-emerald-300"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Recettes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-md">
              <h4 className="font-semibold text-gray-800 mb-3">
                Prochaines actions
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">
                    Récolte des micropousses - Aujourd'hui
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">
                    Contrôle qualité aquaponie - Demain
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm">
                    Collecte des œufs - Quotidienne
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Visite technique - Vendredi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Un projet d'agriculture durable ?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Découvrez notre modèle, nos techniques et échangez avec notre équipe
            pour dupliquer cette approche innovante.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Users className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
            <Button size="lg" variant="outline">
              Voir les visites virtuelles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
