"use client";

import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

import Ecocircle from "./ecocircle";

export default function Page() {
  const stats = [
    {
      label: "Superficie totale",
      value: "2 000 m²",
      icon: <MapPin className="h-4 w-4" />,
    },
    { label: "Serre", value: "200 m²", icon: <Building className="h-4 w-4" /> },
    {
      label: "Poules pondeuses",
      value: "500",
      icon: <Egg className="h-4 w-4" />,
    },
    { label: "Ruches", value: "3", icon: <Bug className="h-4 w-4" /> },
    {
      label: "Production annuelle estimée",
      value: "10T",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      label: "Économie d'eau",
      value: "90%",
      icon: <Droplet className="h-4 w-4" />,
    },
  ];

  const cards = [
    {
      title: "Cultures en serre",
      description:
        "Serre de 200 m² pour cultures en bacs ou au sol et aquaponie. Optimisation de la lumière et température pour production maximale.",
      href: "/cultures/serre",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      tags: ["Hydroponie", "Sol", "Optimisation"],
      stats: ["200 m²", "Contrôle climatique", "Annuelle"],
    },
    {
      title: "Aquaponie",
      description:
        "Système intégré avec tilapia, utilisant les nutriments des poissons pour la culture hydroponique dans la serre.",
      href: "/aquaponie",
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
      tags: ["Tilapia", "Circularité", "Économe en eau"],
      stats: ["90% d'économie d'eau", "Production intégrée", "Autonome"],
    },
    {
      title: "Élevage de Poules",
      description:
        "500 poules pondeuses élevées sur le terrain, production d'œufs, alimentation partiellement à base de BSF. Pas de parcours plein air.",
      href: "/aviculture",
      icon: <Egg className="h-6 w-6 text-amber-600" />,
      color: "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200",
      tags: ["500 poules", "BSF", "Œufs bio"],
      stats: ["500 pondeuses", "Alimentation BSF", "Contrôle sanitaire"],
    },
    {
      title: "Production Spécialisée",
      description:
        "Ces productions sont dans bâtiments dédiés, séparés de la serre, pour un contrôle optimal des conditions (humidité, température, hygiène).",
      icon: <GitPullRequest className="h-6 w-6 text-purple-600" />,
      color: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200",
      links: [
        {
          href: "/micropousses",
          label: "Micropousses",
          icon: <Sprout className="h-4 w-4" />,
        },
        {
          href: "/mycoculture",
          label: "Champignons",
          icon: <Leaf className="h-4 w-4" />,
        },
        { href: "/bsf", label: "BSF", icon: <Worm className="h-4 w-4" /> },
      ],
    },
    {
      title: "Apiculture",
      description:
        "3 ruches intégrées pour pollinisation et production de miel, soutenant la biodiversité et l'autonomie alimentaire.",
      href: "/apiculture",
      icon: <Bug className="h-6 w-6 text-orange-600" />,
      color: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200",
      tags: ["3 ruches", "Pollinisation", "Miel local"],
      stats: ["Pollinisation", "Miel produit", "Biodiversité"],
    },
    {
      title: "Recettes & Transformation",
      description:
        "Valorisation des productions via des recettes innovantes et transformation des produits pour une meilleure conservation.",
      href: "/recettes",
      icon: <ChefHat className="h-6 w-6 text-red-600" />,
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
      icon: <Zap className="h-5 w-5 text-green-600" />,
      tint: "bg-green-100",
    },
    {
      title: "Zéro Déchet",
      description:
        "Système conçu pour minimiser et réutiliser tous les résidus",
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      tint: "bg-blue-100",
    },
    {
      title: "Autonomie Alimentaire",
      description:
        "Production locale pour une alimentation de qualité à prix accessible",
      icon: <Users className="h-5 w-5 text-purple-600" />,
      tint: "bg-purple-100",
    },
    {
      title: "Durabilité",
      description:
        "Pratiques respectueuses de l'environnement et des ressources",
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
      tint: "bg-emerald-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Leaf className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">
              Hacienda Esmeralda
            </h1>
          </div>

          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="flex-1">
              <p className="max-w-3xl text-lg text-emerald-100">
                Exploitation durable à Popayán (Cauca, Colombie) sur 2 000 m²,
                pensée en économie circulaire et avec une approche zéro déchet.
                Notre modèle innovant intègre production végétale, élevage et
                transformation pour une autonomie alimentaire optimale.
              </p>

              {/* BLOG CTA (intégration propre) */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="bg-white text-emerald-700 hover:bg-emerald-50"
                >
                  <Link href="/user/blog">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Blog
                  </Link>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-md flex-1 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold">Chiffres clés</h3>
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

      {/* Principles */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Nos principes fondamentaux
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`rounded-lg p-2 ${p.tint}`}>{p.icon}</div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Productions */}
        <div className="mb-12">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
              Nos productions
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span className="text-sm">
                Temps réel • Mise à jour quotidienne
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) =>
              card.links ? (
                <Card
                  key={index}
                  className={`${card.color} border-2 transition-all duration-300 hover:shadow-xl`}
                >
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
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
                    <div className="rounded-lg bg-white/50 p-4">
                      <h4 className="mb-3 font-semibold text-gray-700">
                        Accès rapide
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {card.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="group flex flex-col items-center rounded-lg bg-white p-3 transition-colors hover:bg-white/80"
                          >
                            <div className="mb-2 text-gray-600 group-hover:text-purple-600">
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
                      Productions sous contrôle strict d&apos;hygiène et
                      température
                    </div>
                  </CardFooter>
                </Card>
              ) : (
                <Link href={card.href!} key={index} className="group">
                  <Card
                    className={`${card.color} h-full border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                  >
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {card.icon}
                          <CardTitle className="text-xl">
                            {card.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
                      </div>
                      <CardDescription className="text-gray-600">
                        {card.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4 flex flex-wrap gap-2">
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
                        {card.stats?.map((s, statIndex) => (
                          <div
                            key={statIndex}
                            className="rounded bg-white/50 p-2 text-center"
                          >
                            <div className="text-xs text-gray-500">
                              Indicateur
                            </div>
                            <div className="font-semibold text-gray-700">
                              {s}
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

        {/* Knowledge */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 p-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-emerald-700" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Centre de connaissances
                </h3>
              </div>

              <p className="mb-6 text-gray-600">
                Accédez à nos glossaires techniques et guides pratiques pour
                maîtriser les techniques de production durable.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/apiculture/glossary">
                  <Button
                    variant="outline"
                    className="border-emerald-300 bg-white"
                  >
                    <Bug className="mr-2 h-4 w-4" />
                    Glossaire Apiculture
                  </Button>
                </Link>

                <Link href="/aquaponie/glossary">
                  <Button
                    variant="outline"
                    className="border-emerald-300 bg-white"
                  >
                    <Droplet className="mr-2 h-4 w-4" />
                    Glossaire Aquaponie
                  </Button>
                </Link>

                <Link href="/aviculture/glossary">
                  <Button
                    variant="outline"
                    className="border-emerald-300 bg-white"
                  >
                    <Egg className="mr-2 h-4 w-4" />
                    Glossaire Aviculture
                  </Button>
                </Link>

                <Link href="/recettes">
                  <Button
                    variant="outline"
                    className="border-emerald-300 bg-white"
                  >
                    <ChefHat className="mr-2 h-4 w-4" />
                    Recettes
                  </Button>
                </Link>
              </div>
            </div>

            <div className="max-w-md rounded-xl bg-white p-6 shadow-lg">
              <h4 className="mb-3 font-semibold text-gray-800">
                Prochaines actions
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm">
                    Récolte des micropousses - Aujourd&apos;hui
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm">
                    Contrôle qualité aquaponie - Demain
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm">
                    Collecte des œufs - Quotidienne
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span className="text-sm">Visite technique - Vendredi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Un projet d&apos;agriculture durable ?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600">
            Découvrez notre modèle, nos techniques et échangez avec notre équipe
            pour dupliquer cette approche innovante.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Users className="mr-2 h-5 w-5" />
              Nous contacter
            </Button>
            <Button size="lg" variant="outline">
              Voir les visites virtuelles
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Ecocircle />
      </div>
    </div>
  );
}
