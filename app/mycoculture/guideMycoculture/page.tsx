"use client";
import React, { useState } from "react";

export default function GuideMycoculture() {
  const sections = [
    {
      id: "intro",
      title: "I. Introduction générale",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Objectifs du guide</h3>
          <ul className="list-disc pl-6 mt-1">
            <li>Cibler les producteurs, formateurs et techniciens.</li>
            <li>
              Promouvoir une production efficace, modulaire et durable de
              champignons comestibles et médicinaux.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">
            2. Intérêt de la culture en contenants
          </h3>
          <ul className="list-disc pl-6 mt-1">
            <li>Contrôle de l’environnement (contamination, humidité, CO₂).</li>
            <li>Adaptation aux espaces réduits et à la production urbaine.</li>
            <li>Flexibilité et rendement élevé par volume unitaire.</li>
          </ul>

          <h3 className="font-semibold mt-3">3. Espèces adaptées</h3>
          <p className="mt-1">
            Pleurotes (ostreatus, djamor, pulmonarius), Shiitake (Lentinula
            edodes), Hericium, Ganoderma, autres espèces expérimentales.
          </p>

          <h3 className="font-semibold mt-3">
            4. Typologie des champignons cultivés
          </h3>
          <p className="mt-1">
            Comestibles, médicinaux et fonctionnels (mycomatériaux, enzymes).
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm">
              Vidéo (vue d’ensemble, culture en intérieur):
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/FluOpgNtXS4"
                title="Vue d'ensemble"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <p className="text-sm mt-2">
              Vidéo (approche “revenu/production”, organisation globale):
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/9R0Gy4zKZVs"
                title="Revenu production"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
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
          <h3 className="font-semibold mt-2">1. Cycle de vie du champignon</h3>
          <p className="mt-1">
            De la spore au mycélium, puis au carpophore. Étapes : inoculation →
            colonisation → fructification → récolte.
          </p>

          <h3 className="font-semibold mt-3">2. Exigences environnementales</h3>
          <p className="mt-1">
            Température, humidité, CO₂, oxygène, lumière — plages optimales
            selon les espèces.
          </p>

          <h3 className="font-semibold mt-3">
            3. Structure et fonction du mycélium
          </h3>
          <p className="mt-1">
            Rôle du substrat : texture, porosité, rapport C/N. Interactions
            microbiologiques (compétition, synergie).
          </p>

          <p className="mt-3 text-sm">Ressources pratiques :</p>
          <ul className="pl-6 list-disc text-sm">
            <li>
              <a
                href="https://lamycosphere.com/fr-fr/blogs/the-futur-is-fungi/les-4-parametres-de-culture-a-maitriser"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Article: les 4 paramètres de culture à maîtriser
              </a>
            </li>
            <li>
              <a
                href="https://substratchampignons.com/fungiculture-les-parametres-de-culture-pour-reussir-sa-champignonniere"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Article: paramètres de culture, pilotage
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "infra",
      title: "III. Infrastructure et logistique de production",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Aménagement du site</h3>
          <p className="mt-1">
            Zonage : préparation, inoculation, incubation, fructification,
            post-récolte. Gestion des flux et prévention des contaminations
            croisées.
          </p>

          <h3 className="font-semibold mt-3">2. Équipements essentiels</h3>
          <p className="mt-1">
            Pasteurisateur, autoclave, balances, mixeurs, outils de mesure (T°,
            HR, CO₂). Sacs PP microperforés, seaux PEHD, filtres microporeux.
          </p>

          <h3 className="font-semibold mt-3">3. Hygiène et biosécurité</h3>
          <p className="mt-1">
            Protocoles de désinfection, gestion des déchets organiques.
            Séparation zones propres/sales, discipline du personnel.
          </p>

          <p className="mt-3 text-sm">
            Vidéo (exemples de chambres de fructification):
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/Vl4gu1LjX4c"
              title="Chambres fructification"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        </>
      ),
    },
    {
      id: "substrat",
      title: "IV. Préparation du substrat",
      content: (
        <>
          <h3 className="font-semibold mt-2">
            1. Sélection des matières premières
          </h3>
          <p className="mt-1">
            Paille, sciure, copeaux, son, marc de café, foin. Critères de choix
            : disponibilité, coût, propreté, valeur nutritive.
          </p>

          <h3 className="font-semibold mt-3">2. Formulation du substrat</h3>
          <p className="mt-1">
            Recettes types selon espèces (Pleurote, Shiitake, Hericium).
            Ajustement de l’humidité (60–70 %) et du pH.
          </p>

          <h3 className="font-semibold mt-3">3. Traitement thermique</h3>
          <p className="mt-1">
            Pasteurisation (65–80 °C / 6–8 h) ou stérilisation (121 °C / 1–2 h).
            Refroidissement et stockage temporaire.
          </p>

          <p className="mt-3 text-sm">Vidéos techniques :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/fMsI1KZH5bw"
                title="Itinéraires techniques substrat"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/l_k9vRwt4Mk"
                title="Sciure pasteurisée"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
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
          <h3 className="font-semibold mt-2">1. Types d’inoculum</h3>
          <p className="mt-1">
            Grain spawn, sciure spawn, culture liquide, gélose.
          </p>

          <h3 className="font-semibold mt-3">2. Méthodes d’inoculation</h3>
          <p className="mt-1">
            Conditions aseptiques : hotte, gants, alcool, zone propre. Dosage de
            spawn et mélange homogène.
          </p>

          <h3 className="font-semibold mt-3">3. Conditionnement</h3>
          <p className="mt-1">
            Mise en sacs ou seaux : remplissage, compression, perçage,
            filtration d’air. Étiquetage et traçabilité des lots.
          </p>

          <p className="mt-3">Vidéos pratiques :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/USBSKKZ5geo"
                title="Culture sur sciure"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/9l10fUbNrzY"
                title="Culture en seau"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      id: "incubation",
      title: "VI. Phase d’incubation",
      content: (
        <>
          <h3 className="font-semibold mt-2">
            1. Conditions de croissance mycélienne
          </h3>
          <p className="mt-1">
            Température, obscurité, faible ventilation. Durée moyenne par
            espèce.
          </p>

          <h3 className="font-semibold mt-3">2. Suivi de la colonisation</h3>
          <p className="mt-1">
            Observation du mycélium (densité, homogénéité, vitesse). Diagnostic
            des contaminations précoces.
          </p>

          <h3 className="font-semibold mt-3">
            3. Préparation à la fructification
          </h3>
          <p className="mt-1">
            Détermination du stade de maturité. Chocs thermiques ou mécaniques
            pour l’induction.
          </p>

          <p className="mt-3 text-sm">Ressources :</p>
          <ul className="pl-6 list-disc text-sm">
            <li>
              <a
                href="https://wiki.lowtechlab.org/wiki/Sciences_Participatives_:_Culture_de_pleurotes_maison/fr"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Repères incubation pleurotes
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "fructification",
      title: "VII. Phase de fructification",
      content: (
        <>
          <h3 className="font-semibold mt-2">
            1. Mise en chambre de fructification
          </h3>
          <p className="mt-1">
            Gestion du microclimat : HR 90–95 %, T° spécifique, CO₂ contrôlé,
            lumière diffuse. Ventilation et nébulisation.
          </p>

          <h3 className="font-semibold mt-3">2. Induction et entretien</h3>
          <p className="mt-1">
            Techniques de choc (hydrique, thermique, lumineux). Suivi du
            développement des primordia.
          </p>

          <h3 className="font-semibold mt-3">3. Récolte</h3>
          <p className="mt-1">
            Critères de maturité, méthode de coupe, manipulation
            post-cueillette. Gestion des vagues successives ("flushes").
          </p>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/g90XXuNmEZQ"
                title="Fructification paille"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/MkKXyjJfgQI"
                title="Fructifier shiitake"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Vl4gu1LjX4c"
                title="Chambres + microclimat"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
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
          <h3 className="font-semibold mt-2">1. Tri et conditionnement</h3>
          <p className="mt-1">
            Nettoyage, calibrage, emballage et stockage. Conservation sous froid
            (0–4 °C).
          </p>

          <h3 className="font-semibold mt-3">2. Transformation</h3>
          <p className="mt-1">
            Séchage (air chaud, solaire, déshydrateur). Poudre, extraits,
            produits dérivés.
          </p>

          <h3 className="font-semibold mt-3">3. Commercialisation</h3>
          <p className="mt-1">
            Circuits courts, restauration, marchés spécialisés. Étiquetage,
            traçabilité et conformité réglementaire.
          </p>

          <p className="mt-3">
            Vidéo (récolte + logique économique en petite prod):
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/9R0Gy4zKZVs"
              title="Logique économique"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        </>
      ),
    },
    {
      id: "contamination",
      title: "IX. Gestion des contaminations et des pertes",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Principaux contaminants</h3>
          <p className="mt-1">
            Trichoderma, Aspergillus, bactéries lactiques, moucherons —
            symptômes, causes, identification.
          </p>

          <h3 className="font-semibold mt-3">2. Prévention</h3>
          <p className="mt-1">
            Hygiène du matériel, gestion de l’air et des surfaces. Rotation et
            isolement des lots.
          </p>

          <h3 className="font-semibold mt-3">3. Intervention corrective</h3>
          <p className="mt-1">
            Élimination sélective, désinfection localisée. Réévaluation des
            procédures.
          </p>

          <p className="mt-3 text-sm">Article utile :</p>
          <a
            href="https://substratchampignons.com/fungiculture-les-parametres-de-culture-pour-reussir-sa-champignonniere"
            target="_blank"
            rel="noreferrer"
            className="underline text-sm"
          >
            Paramètres, ventilation/condensation, risques
          </a>
        </>
      ),
    },
    {
      id: "suivi",
      title: "X. Suivi technique et amélioration continue",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Fiches de culture</h3>
          <p className="mt-1">
            Suivi des paramètres : température, HR, durée, rendement. Calcul du
            rendement biologique (BE%).
          </p>

          <h3 className="font-semibold mt-3">
            2. Optimisation de la production
          </h3>
          <p className="mt-1">
            Réglages fins : inoculation, densité, ventilation, humidité.
            Adaptation du substrat et réutilisation des blocs.
          </p>

          <h3 className="font-semibold mt-3">3. Maintenance du matériel</h3>
          <p className="mt-1">
            Calibration, vérification des capteurs et nettoyage périodique.
          </p>

          <p className="mt-3 text-sm">Vidéos recommandées :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/fMsI1KZH5bw"
                title="Standardisation substrat"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/USBSKKZ5geo"
                title="Optimisation"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  const [openId, setOpenId] = useState<string | null>(sections[0].id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          GUIDE PRATIQUE DE MYCOCULTURE EN SACS ET EN SEAUX
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Complet, structuré et prêt à intégrer dans une application Next.js —
          sections, vidéos et ressources externes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <nav className="md:col-span-1 bg-white shadow-sm rounded-md p-4 sticky top-6 h-fit">
          <h2 className="font-semibold mb-3">Table des matières</h2>
          <ul className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => setOpenId(s.id === openId ? null : s.id)}
                  className={`text-left w-full ${openId === s.id ? "font-medium" : "text-gray-700"} hover:underline`}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-gray-500">
            <p>
              Astuce: utilisez le menu pour naviguer rapidement entre les
              chapitres.
            </p>
          </div>
        </nav>

        <main className="md:col-span-3 space-y-6">
          {sections.map((s) => (
            <article key={s.id} className="bg-white shadow-sm rounded-md p-5">
              <header className="flex items-start justify-between">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <button
                  onClick={() => setOpenId(s.id === openId ? null : s.id)}
                  aria-expanded={openId === s.id}
                  className="text-sm text-blue-600 underline"
                >
                  {openId === s.id ? "Réduire" : "Développer"}
                </button>
              </header>

              <section
                className={`mt-4 ${openId === s.id ? "block" : "hidden"}`}
              >
                {s.content}
              </section>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
