"use client";
import React, { useState } from "react";

export default function GuideMycoculture() {
  const sections = [
    {
      id: "intro",
      title: "I. Introduction générale",
      content: (
        <>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800">
                1. Objectifs du guide
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Cibler les producteurs, formateurs et techniciens.</li>
                <li>
                  Promouvoir une production efficace, modulaire et durable de
                  champignons comestibles et médicinaux.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800">
                2. Intérêt de la culture en contenants
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Contrôle de l'environnement (contamination, humidité, CO₂).
                </li>
                <li>
                  Adaptation aux espaces réduits et à la production urbaine.
                </li>
                <li>Flexibilité et rendement élevé par volume unitaire.</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h3 className="font-semibold text-amber-800">
                3. Espèces adaptées
              </h3>
              <p className="mt-2 text-gray-700">
                Pleurotes (ostreatus, djamor, pulmonarius), Shiitake (Lentinula
                edodes), Hericium, Ganoderma, autres espèces expérimentales.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800">
                4. Typologie des champignons cultivés
              </h3>
              <p className="mt-2 text-gray-700">
                Comestibles, médicinaux et fonctionnels (mycomatériaux,
                enzymes).
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border">
                <p className="font-medium text-gray-800 mb-3">
                  Vidéo (vue d'ensemble, culture en intérieur):
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/FluOpgNtXS4"
                    title="Vue d'ensemble"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border">
                <p className="font-medium text-gray-800 mb-3">
                  Vidéo (approche "revenu/production", organisation globale):
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/9R0Gy4zKZVs"
                    title="Revenu production"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "bases",
      title: "II. Bases biologiques et écophysiologiques",
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 text-lg">
                1. Cycle de vie du champignon
              </h3>
              <p className="mt-2 text-gray-700">
                De la spore au mycélium, puis au carpophore. Étapes :
                inoculation → colonisation → fructification → récolte.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 text-lg">
                2. Exigences environnementales
              </h3>
              <p className="mt-2 text-gray-700">
                Température, humidité, CO₂, oxygène, lumière — plages optimales
                selon les espèces.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 text-lg">
                3. Structure et fonction du mycélium
              </h3>
              <p className="mt-2 text-gray-700">
                Rôle du substrat : texture, porosité, rapport C/N. Interactions
                microbiologiques (compétition, synergie).
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <h4 className="font-medium text-gray-700 mb-3">
                📚 Ressources pratiques :
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://lamycosphere.com/fr-fr/blogs/the-futur-is-fungi/les-4-parametres-de-culture-a-maitriser"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start group"
                  >
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full flex-shrink-0"></span>
                    <span className="text-blue-600 hover:text-blue-800 group-hover:underline">
                      Article: les 4 paramètres de culture à maîtriser
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://substratchampignons.com/fungiculture-les-parametres-de-culture-pour-reussir-sa-champignonniere"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start group"
                  >
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full flex-shrink-0"></span>
                    <span className="text-blue-600 hover:text-blue-800 group-hover:underline">
                      Article: paramètres de culture, pilotage
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "infra",
      title: "III. Infrastructure et logistique de production",
      content: (
        <>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border">
                <h3 className="font-semibold text-gray-800 text-lg">
                  1. Aménagement du site
                </h3>
                <p className="mt-2 text-gray-700">
                  Zonage : préparation, inoculation, incubation, fructification,
                  post-récolte. Gestion des flux et prévention des
                  contaminations croisées.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-lg">
                  2. Équipements essentiels
                </h3>
                <p className="mt-2 text-gray-700">
                  Pasteurisateur, autoclave, balances, mixeurs, outils de mesure
                  (T°, HR, CO₂). Sacs PP microperforés, seaux PEHD, filtres
                  microporeux.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 text-lg">
                3. Hygiène et biosécurité
              </h3>
              <p className="mt-2 text-gray-700">
                Protocoles de désinfection, gestion des déchets organiques.
                Séparation zones propres/sales, discipline du personnel.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100">
              <p className="font-medium text-gray-800 mb-3">
                🎬 Vidéo (exemples de chambres de fructification):
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Vl4gu1LjX4c"
                  title="Chambres fructification"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "substrat",
      title: "IV. Préparation du substrat",
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 text-lg">
                1. Sélection des matières premières
              </h3>
              <p className="mt-2 text-gray-700">
                Paille, sciure, copeaux, son, marc de café, foin. Critères de
                choix : disponibilité, coût, propreté, valeur nutritive.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 text-lg">
                2. Formulation du substrat
              </h3>
              <p className="mt-2 text-gray-700">
                Recettes types selon espèces (Pleurote, Shiitake, Hericium).
                Ajustement de l'humidité (60–70 %) et du pH.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-100">
              <h3 className="font-semibold text-orange-800 text-lg">
                3. Traitement thermique
              </h3>
              <p className="mt-2 text-gray-700">
                Pasteurisation (65–80 °C / 6–8 h) ou stérilisation (121 °C / 1–2
                h). Refroidissement et stockage temporaire.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-3">
                🎬 Vidéos techniques :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/fMsI1KZH5bw"
                      title="Itinéraires techniques substrat"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/l_k9vRwt4Mk"
                      title="Sciure pasteurisée"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "inoculation",
      title: "V. Inoculation et conditionnement",
      content: (
        <>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-blue-800">
                  1. Types d'inoculum
                </h3>
                <p className="mt-2 text-gray-700">
                  Grain spawn, sciure spawn, culture liquide, gélose.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-purple-800">
                  2. Méthodes d'inoculation
                </h3>
                <p className="mt-2 text-gray-700">
                  Conditions aseptiques : hotte, gants, alcool, zone propre.
                  Dosage de spawn et mélange homogène.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-green-800">
                  3. Conditionnement
                </h3>
                <p className="mt-2 text-gray-700">
                  Mise en sacs ou seaux : remplissage, compression, perçage,
                  filtration d'air. Étiquetage et traçabilité des lots.
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-3">
                🎬 Vidéos pratiques :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/USBSKKZ5geo"
                      title="Culture sur sciure"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/9l10fUbNrzY"
                      title="Culture en seau"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "incubation",
      title: "VI. Phase d'incubation",
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 text-lg">
                1. Conditions de croissance mycélienne
              </h3>
              <p className="mt-2 text-gray-700">
                Température, obscurité, faible ventilation. Durée moyenne par
                espèce.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 text-lg">
                2. Suivi de la colonisation
              </h3>
              <p className="mt-2 text-gray-700">
                Observation du mycélium (densité, homogénéité, vitesse).
                Diagnostic des contaminations précoces.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-100">
              <h3 className="font-semibold text-purple-800 text-lg">
                3. Préparation à la fructification
              </h3>
              <p className="mt-2 text-gray-700">
                Détermination du stade de maturité. Chocs thermiques ou
                mécaniques pour l'induction.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <h4 className="font-medium text-gray-700 mb-3">
                📖 Ressources :
              </h4>
              <a
                href="https://wiki.lowtechlab.org/wiki/Sciences_Participatives_:_Culture_de_pleurotes_maison/fr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
              >
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="group-hover:underline">
                  Repères incubation pleurotes
                </span>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "fructification",
      title: "VII. Phase de fructification",
      content: (
        <>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-green-800 text-lg">
                  1. Mise en chambre de fructification
                </h3>
                <p className="mt-2 text-gray-700">
                  Gestion du microclimat : HR 90–95 %, T° spécifique, CO₂
                  contrôlé, lumière diffuse. Ventilation et nébulisation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-blue-800 text-lg">
                  2. Induction et entretien
                </h3>
                <p className="mt-2 text-gray-700">
                  Techniques de choc (hydrique, thermique, lumineux). Suivi du
                  développement des primordia.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 text-lg">
                3. Récolte
              </h3>
              <p className="mt-2 text-gray-700">
                Critères de maturité, méthode de coupe, manipulation
                post-cueillette. Gestion des vagues successives ("flushes").
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-3">
                🎬 Démonstrations en vidéo :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/g90XXuNmEZQ"
                      title="Fructification paille"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Fructification sur paille
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/MkKXyjJfgQI"
                      title="Fructifier shiitake"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Fructification Shiitake
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/Vl4gu1LjX4c"
                      title="Chambres + microclimat"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Gestion microclimat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "post",
      title: "VIII. Post-récolte et valorisation",
      content: (
        <>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-green-800">
                  1. Tri et conditionnement
                </h3>
                <p className="mt-2 text-gray-700">
                  Nettoyage, calibrage, emballage et stockage. Conservation sous
                  froid (0–4 °C).
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-blue-800">
                  2. Transformation
                </h3>
                <p className="mt-2 text-gray-700">
                  Séchage (air chaud, solaire, déshydrateur). Poudre, extraits,
                  produits dérivés.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-purple-800">
                  3. Commercialisation
                </h3>
                <p className="mt-2 text-gray-700">
                  Circuits courts, restauration, marchés spécialisés.
                  Étiquetage, traçabilité et conformité réglementaire.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
              <p className="font-medium text-gray-800 mb-3">
                🎬 Vidéo (récolte + logique économique en petite prod):
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/9R0Gy4zKZVs"
                  title="Logique économique"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "contamination",
      title: "IX. Gestion des contaminations et des pertes",
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 text-lg">
                1. Principaux contaminants
              </h3>
              <p className="mt-2 text-gray-700">
                Trichoderma, Aspergillus, bactéries lactiques, moucherons —
                symptômes, causes, identification.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-xl border border-yellow-100">
              <h3 className="font-semibold text-amber-800 text-lg">
                2. Prévention
              </h3>
              <p className="mt-2 text-gray-700">
                Hygiène du matériel, gestion de l'air et des surfaces. Rotation
                et isolement des lots.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 text-lg">
                3. Intervention corrective
              </h3>
              <p className="mt-2 text-gray-700">
                Élimination sélective, désinfection localisée. Réévaluation des
                procédures.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <h4 className="font-medium text-gray-700 mb-3">
                📖 Article utile :
              </h4>
              <a
                href="https://substratchampignons.com/fungiculture-les-parametres-de-culture-pour-reussir-sa-champignonniere"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
              >
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="group-hover:underline">
                  Paramètres, ventilation/condensation, risques
                </span>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "suivi",
      title: "X. Suivi technique et amélioration continue",
      content: (
        <>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-blue-800">
                  1. Fiches de culture
                </h3>
                <p className="mt-2 text-gray-700">
                  Suivi des paramètres : température, HR, durée, rendement.
                  Calcul du rendement biologique (BE%).
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-green-800">
                  2. Optimisation de la production
                </h3>
                <p className="mt-2 text-gray-700">
                  Réglages fins : inoculation, densité, ventilation, humidité.
                  Adaptation du substrat et réutilisation des blocs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border">
                <h3 className="font-semibold text-gray-800">
                  3. Maintenance du matériel
                </h3>
                <p className="mt-2 text-gray-700">
                  Calibration, vérification des capteurs et nettoyage
                  périodique.
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-3">
                🎬 Vidéos recommandées :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/fMsI1KZH5bw"
                      title="Standardisation substrat"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Standardisation substrat
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border">
                  <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/USBSKKZ5geo"
                      title="Optimisation"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Optimisation production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const [openId, setOpenId] = useState<string | null>(sections[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 p-4 md:p-6 ">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
            GUIDE PRATIQUE DE MYCOCULTURE EN SACS ET EN SEAUX
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Guide complet et structuré pour la production de champignons en
            contenants — avec vidéos, ressources externes et conseils pratiques.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Production durable
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              Espaces réduits
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
              Rendement élevé
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Espèces variées
            </span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          <nav className="lg:w-80 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center mb-6">
                <svg
                  className="w-5 h-5 text-green-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <h2 className="font-semibold text-gray-800">
                  Table des matières
                </h2>
              </div>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => setOpenId(s.id === openId ? null : s.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        openId === s.id
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 font-medium"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span>{s.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openId === s.id ? "rotate-180 text-green-600" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="text-sm text-blue-800">
                    Astuce : cliquez sur les sections pour les développer ou
                    réduire. Utilisez le menu pour naviguer rapidement.
                  </p>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <div className="space-y-6">
              {sections.map((s) => (
                <article
                  key={s.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                    openId === s.id ? "ring-2 ring-green-200" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenId(s.id === openId ? null : s.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mr-4">
                        <span className="font-semibold text-green-800">
                          {sections.findIndex((sec) => sec.id === s.id) + 1}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {s.title}
                      </h2>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-500 transition-transform ${openId === s.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <div
                    className={`px-6 pb-6 ${openId === s.id ? "block" : "hidden"}`}
                  >
                    <div className="border-t border-gray-100 pt-6">
                      {s.content}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <footer className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Guide complet - Prêt à l'utilisation
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ce guide contient toutes les informations nécessaires pour
                démarrer et optimiser votre production de champignons en
                contenants. Toutes les ressources sont vérifiées et
                régulièrement mises à jour.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
