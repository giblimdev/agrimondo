"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Recycle,
  Leaf,
  Droplet,
  Egg,
  Worm,
  Fish,
  ArrowRightCircle,
  ArrowLeftCircle,
  Zap,
  Shield,
  Sprout,
  Apple,
  Users,
  DollarSign,
  Target,
  Globe,
  Heart,
  Sun,
  Award,
  Scale,
  Truck,
  Coffee,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const arrowVariants = {
  initial: { scale: 0.9, opacity: 0.7 },
  animate: {
    scale: [0.9, 1.15, 0.9],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function CircularEconomySection() {
  const flows = [
    {
      from: "Déchets organiques (serre & cuisine)",
      fromIcon: <Apple className="w-6 h-6" />,
      to: "Larves BSF",
      toIcon: <Worm className="w-6 h-6" />,
      description:
        "Résidus végétaux, fanes, fruits abîmés → nourriture pour les larves.",
      color: "from-lime-50 to-emerald-100",
      arrowColor: "text-emerald-600",
    },
    {
      from: "Fientes & litière des poules",
      fromIcon: <Egg className="w-6 h-6" />,
      to: "Larves BSF",
      toIcon: <Worm className="w-6 h-6" />,
      description: "Déjections → assainissement + alimentation des larves.",
      color: "from-amber-50 to-yellow-100",
      arrowColor: "text-amber-600",
    },
    {
      from: "Larves BSF (protéines)",
      fromIcon: <Worm className="w-6 h-6" />,
      to: "Nourriture des poules",
      toIcon: <Egg className="w-6 h-6" />,
      description:
        "Remplacement partiel des aliments importés → plus d'autonomie.",
      color: "from-orange-50 to-amber-100",
      arrowColor: "text-orange-600",
      isReverse: true,
    },
    {
      from: "Eau riche en nutriments (tilapias)",
      fromIcon: <Fish className="w-6 h-6" />,
      to: "Cultures hydroponiques",
      toIcon: <Leaf className="w-6 h-6" />,
      description: "Aquaponie → 90% d'économie d'eau.",
      color: "from-blue-50 to-cyan-100",
      arrowColor: "text-blue-600",
    },
    {
      from: "Frass (déjections BSF)",
      fromIcon: <Worm className="w-6 h-6" />,
      to: "Engrais organique serre",
      toIcon: <Sprout className="w-6 h-6" />,
      description: "Fertilisant naturel riche → substitut aux chimiques.",
      color: "from-purple-50 to-violet-100",
      arrowColor: "text-purple-600",
    },
    {
      from: "Tout résidu restant",
      fromIcon: <Recycle className="w-6 h-6" />,
      to: "Nouveau cycle",
      toIcon: <ArrowRightCircle className="w-6 h-6" />,
      description: "Boucle fermée – zéro déchet.",
      color: "from-green-50 to-emerald-100",
      arrowColor: "text-green-700",
      isCycle: true,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Section de présentation du projet */}
      <div className="bg-gradient-to-b from-emerald-50 via-white to-white py-16 md:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête inspirante */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-emerald-700" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-amber-700" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-lg">
                <Scale className="w-8 h-8 text-blue-700" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Hacienda Esmeralda :{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                L'Agriculture de Demain
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8 max-w-4xl mx-auto">
              Une ferme{" "}
              <strong className="font-semibold">100% circulaire</strong>,
              <strong className="font-semibold text-emerald-700">
                {" "}
                écologique
              </strong>{" "}
              et{" "}
              <strong className="font-semibold text-blue-700">
                citoyenne
              </strong>{" "}
              au service de notre communauté
            </p>
          </div>

          {/* Valeurs fondamentales */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Notre Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>
                    Produire une alimentation saine, locale et accessible
                  </strong>
                  tout en régénérant notre écosystème. Nous démontrons qu'une
                  agriculture respectueuse de la terre peut être{" "}
                  <strong className="text-emerald-700">
                    économiquement viable
                  </strong>
                  ,
                  <strong className="text-amber-700">
                    {" "}
                    socialement inclusive
                  </strong>{" "}
                  et{" "}
                  <strong className="text-blue-700">
                    écologiquement régénératrice
                  </strong>
                  .
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-emerald-100 rounded-lg">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Autonomie alimentaire locale :</strong> Réduction
                      de la dépendance aux importations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-amber-100 rounded-lg">
                      <div className="w-3 h-3 bg-amber-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Création d'emplois verts :</strong> Formation et
                      insertion professionnelle
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-blue-100 rounded-lg">
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Éducation environnementale :</strong> Centre de
                      démonstration et visites pédagogiques
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-amber-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Egg className="w-8 h-8 text-amber-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    L'Excellence des Œufs
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">
                      🥇{" "}
                      <span className="text-amber-700">
                        Nutrition Supérieure
                      </span>
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <strong>+30% d'oméga-3</strong> grâce à l'alimentation
                        naturelle
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <strong>Vitamines A, D, E</strong> en concentrations
                        optimales
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <strong>Zéro antibiotiques</strong>, zéro OGM, zéro
                        pesticides
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">
                      🤝{" "}
                      <span className="text-emerald-700">
                        Avantages Économiques
                      </span>
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <strong>Prix stable et abordable</strong> grâce à
                        l'autonomie alimentaire
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <strong>Circuit ultra-court</strong> : du poulailler à
                        l'assiette en 24h
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <strong>Valeur ajoutée locale</strong> : chaque euro
                        reste dans la communauté
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chiffres clés impressionnants */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Des Impacts Mesurables & Concrets
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Droplet className="w-8 h-8 text-blue-600" />,
                  value: "90%",
                  label: "Économie d'eau",
                  color: "bg-blue-50",
                },
                {
                  icon: <Recycle className="w-8 h-8 text-emerald-600" />,
                  value: "100%",
                  label: "Déchets valorisés",
                  color: "bg-emerald-50",
                },
                {
                  icon: <Truck className="w-8 h-8 text-amber-600" />,
                  value: "0km",
                  label: "Transport local",
                  color: "bg-amber-50",
                },
                {
                  icon: <Users className="w-8 h-8 text-purple-600" />,
                  value: "50+",
                  label: "Familles nourries",
                  color: "bg-purple-50",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.color} p-6 rounded-2xl border shadow-sm text-center`}
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appel à l'action pour partenaires */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-200 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Rejoignez Notre Révolution Agricole
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl">
                  Investissez dans un projet qui combine{" "}
                  <strong>rentabilité économique</strong>,{" "}
                  <strong>impact social</strong> et{" "}
                  <strong>régénération écologique</strong>. Ensemble,
                  construisons un modèle alimentaire résilient.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Devenir Partenaire
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl"
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Visiter la Ferme
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Économie Circulaire (existante) */}
      <div className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_30%,#10b981_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#059669_0%,transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-tête + texte de présentation */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 mb-6 shadow-sm">
              <Recycle className="w-10 h-10" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-5">
              Le Cœur du Système : Une Économie 100% Circulaire
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              À Hacienda Esmeralda,{" "}
              <strong className="font-semibold text-emerald-700">
                chaque "déchet" est une ressource précieuse
              </strong>
              . Notre modèle ingénieux transforme les pertes en opportunités,
              créant une boucle fermée qui maximise chaque goutte d'eau, chaque
              calorie, chaque nutriment.
            </p>

            <div className="mt-6 inline-flex flex-wrap justify-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2">
                <Clock className="w-4 h-4 mr-1" />
                Rendement optimisé 24h/24
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-4 py-2">
                <Droplet className="w-4 h-4 mr-1" />
                +90% économie d'eau
              </Badge>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-4 py-2">
                <Award className="w-4 h-4 mr-1" />
                Qualité certifiée
              </Badge>
            </div>
          </div>

          {/* Grille des flux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {flows.map((flow, idx) => (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${flow.color} border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden`}
              >
                <CardHeader className="pb-3 pt-6 px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/70 rounded-xl shadow-sm">
                        {flow.fromIcon}
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                        {flow.from}
                      </CardTitle>
                    </div>

                    <motion.div
                      variants={arrowVariants}
                      initial="initial"
                      animate="animate"
                      className={`text-3xl sm:text-4xl ${flow.arrowColor}`}
                    >
                      {flow.isCycle ? (
                        <Recycle />
                      ) : flow.isReverse ? (
                        <ArrowLeftCircle />
                      ) : (
                        <ArrowRightCircle />
                      )}
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/60 rounded-xl shadow-sm mt-1">
                      {flow.toIcon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-base mb-1.5">
                        → {flow.to}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {flow.description}
                      </p>
                    </div>
                  </div>

                  {flow.isCycle && (
                    <div className="mt-5 pt-4 border-t border-green-200/50 text-center">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-1.5 text-sm">
                        <Sun className="w-4 h-4 mr-1" />
                        Boucle fermée – Ressource infinie
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-14 bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent" />

          {/* 3 bénéfices clés */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <Zap className="w-10 h-10 text-emerald-600" />,
                title: "Optimisation des Ressources",
                text: "Aliments, engrais, eau → coûts réduits de 40%",
              },
              {
                icon: <Shield className="w-10 h-10 text-teal-600" />,
                title: "Zéro Impact Environnemental",
                text: "Pas d'enfouissement, pas de rejets chimiques, biodiversité préservée",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-green-600" />,
                title: "Accessibilité Sociale",
                text: "Produits de qualité à prix abordable pour toute la communauté",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100/60 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Témoignage/Conclusion */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-emerald-200 shadow-sm max-w-3xl mx-auto">
              <div className="text-5xl text-emerald-600">"</div>
              <div className="text-left">
                <p className="text-lg text-gray-700 italic mb-4">
                  En optimisant chaque ressource et en créant des synergies
                  naturelles, nous produisons <strong>plus avec moins</strong>.
                  Nos œufs sont le parfait exemple : riches en nutriments,
                  produits localement, et accessibles à tous grâce à notre
                  modèle circulaire.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Modèle Hacienda Esmeralda
                    </div>
                    <div className="text-sm text-gray-600">
                      Agriculture régénératrice & économie circulaire
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section d'appel final */}
      <div className="bg-gradient-to-r from-gray-900 to-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Prêt à Investir dans un Futur Durable ?
          </h3>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            Subventionnez l'innovation agricole, soutenez l'autonomie
            alimentaire locale, et participez à la création d'un modèle
            reproductible partout en France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              Dossier de Subvention
            </Button>
            <Button
              variant="outline"
              className="border-white text-gray-900 hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
            >
              <Users className="w-5 h-5 mr-2" />
              Devenir Partenaire Stratégique
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
