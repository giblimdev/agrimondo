"use client";
import React, { useState } from "react";

export default function GuideAquaponie() {
  const sections = [
    {
      id: "intro",
      title: "I. Introduction générale à l'aquaponie",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Objectifs du guide</h3>
          <ul className="list-disc pl-6 mt-1">
            <li>
              Cibler les particuliers, producteurs urbains, formateurs et
              techniciens.
            </li>
            <li>
              Promouvoir une production circulaire, économe en eau et sans
              engrais chimiques.
            </li>
            <li>
              Permettre de démarrer un système domestique ou semi-professionnel
              viable.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">
            2. Principe de base et avantages
          </h3>
          <ul className="list-disc pl-6 mt-1">
            <li>
              Symbiose poissons → plantes → eau recyclée (économie d’eau &gt;90
              %).
            </li>
            <li>Production simultanée de protéines animales et végétales.</li>
            <li>Adaptation à l’urbain, au balcon, à la serre ou au jardin.</li>
            <li>
              Rendement élevé par m², résilience climatique, faible empreinte
              écologique.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">
            3. Échelles et types de systèmes
          </h3>
          <p className="mt-1">
            Domestique (50-500 L), semi-pro (1-10 m³), commerciale ({">"}50 m³).
            Principaux systèmes : Media Bed, DWC (rafts), NFT, CHIFT-PIST.
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm">
              Vidéo (vue d’ensemble et principe de base) :
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/gjcxL3mVVe0"
                title="Monter une installation aquaponie chez soi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>

            <p className="text-sm mt-2">
              Vidéo (exemple domestique simple et explication cycle) :
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Mm6-JkjYDnk"
                title="Installation système T'air-eau"
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
          <h3 className="font-semibold mt-2">
            1. Cycle de l’azote (clé du système)
          </h3>
          <p className="mt-1">
            Poissons → ammoniac (déjections) → Nitrosomonas (nitrites) →
            Nitrobacter (nitrates) → absorption par les plantes → eau propre
            pour poissons.
          </p>

          <h3 className="font-semibold mt-3">2. Exigences environnementales</h3>
          <p className="mt-1">
            pH 6.5–7.0 | Température 18–28 °C (selon poissons) | Oxygène dissous
            &gt;5 mg/L | Nitrates 20–100 mg/L | KH 60–120 mg/L (tampon pH).
          </p>

          <h3 className="font-semibold mt-3">3. Rôles des acteurs</h3>
          <p className="mt-1">
            Poissons : source d’azote | Bactéries nitrifiantes : biofiltre |
            Plantes : pompe biologique | Eau : milieu de vie partagé.
          </p>

          <p className="mt-3 text-sm">Ressources :</p>
          <ul className="pl-6 list-disc text-sm">
            <li>
              <a
                href="https://www.aquaponie-maison.com/guide-complet.html"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Guide complet Aquaponie Maison
              </a>
            </li>
            <li>
              <a
                href="https://www.aquaponie.fr/conseils-aquaponie/debuter-aquaponie"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Premiers pas – Aquaponie.fr
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "infra",
      title: "III. Infrastructure et logistique",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Zonage du site</h3>
          <p className="mt-1">
            Bassin poissons → décanteur / filtre mécanique → biofiltre → zone
            culture → retour au bassin. Séparer zones sales (poissons) et
            propres (inoculation, stockage).
          </p>

          <h3 className="font-semibold mt-3">2. Équipements essentiels</h3>
          <p className="mt-1">
            Bassin (IBC, cuve ronde), pompe à eau, pompe à air, siphon (bell ou
            U), tuyaux PVC, substrat (billes d’argile, gravier), radeaux (DWC),
            capteurs (pH, T°, EC).
          </p>

          <h3 className="font-semibold mt-3">3. Hygiène et biosécurité</h3>
          <p className="mt-1">
            Eau déchlorée, quarantaine poissons/plantes, désinfection outils
            (eau de Javel diluée), éviter pesticides/antibiotiques.
          </p>

          <p className="mt-3 text-sm">Vidéo (exemple de montage complet) :</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/gjcxL3mVVe0"
              title="Monter une installation aquaponie chez soi"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        </>
      ),
    },
    {
      id: "substrat",
      title: "IV. Choix du système et préparation",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Principaux systèmes</h3>
          <ul className="list-disc pl-6 mt-1">
            <li>
              <strong>Media Bed</strong> : lit de substrat (billes d’argile) –
              flood & drain ou continu – filtration intégrée.
            </li>
            <li>
              <strong>DWC (Deep Water Culture)</strong> : radeaux flottants –
              racines immergées – bon pour salades/herbes.
            </li>
            <li>
              <strong>NFT</strong> : film nutritif dans gouttières – oxygénation
              élevée – sensible aux pannes.
            </li>
            <li>
              <strong>CHIFT-PIST</strong> : niveau constant poissons + sump –
              pro et stable.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">
            2. Préparation substrat / média
          </h3>
          <p className="mt-1">
            Billes d’argile : rinçage + désinfection. Gravier : calibre 8-16 mm.
            Maturation : cycle azote 4-6 semaines (source ammoniac).
          </p>

          <p className="mt-3 text-sm">Vidéos :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Mm6-JkjYDnk"
                title="Installation système T'air-eau"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/gjcxL3mVVe0"
                title="Montage installation domestique"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      id: "poissons",
      title: "V. Choix et gestion des poissons",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Espèces adaptées</h3>
          <p className="mt-1">
            Tilapia (tropical, croissance rapide), Truite arc-en-ciel (froid),
            Carpe, Poisson-chat, Perche. Débutants : tilapia ou poissons rouges
            (test).
          </p>

          <h3 className="font-semibold mt-3">2. Densité et alimentation</h3>
          <p className="mt-1">
            10-30 kg/m³ (débutants &lt;15 kg/m³). Nourriture 1-3 % poids
            corporel/jour. Jeûne 1-2 j/semaine.
          </p>

          <h3 className="font-semibold mt-3">3. Santé et quarantaine</h3>
          <p className="mt-1">
            Observer comportement (nage, appétit). Quarantaine 2-4 semaines
            nouveaux poissons.
          </p>
        </>
      ),
    },
    {
      id: "plantes",
      title: "VI. Choix et gestion des plantes",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Espèces adaptées</h3>
          <p className="mt-1">
            Laitue, basilic, épinard, fraises (débutants) ; tomate, concombre,
            poivron (système mature, potassium/calcium).
          </p>

          <h3 className="font-semibold mt-3">2. Germination et repiquage</h3>
          <p className="mt-1">
            Semis hors système puis repiquage. Rinçage racines. pH 5.8-6.8 idéal
            pour absorption.
          </p>

          <h3 className="font-semibold mt-3">3. Carences courantes</h3>
          <p className="mt-1">
            Fer (chlorose), calcium (pourriture apicale), potassium (bords
            brûlés). Supplémentation chélatée si besoin.
          </p>
        </>
      ),
    },
    {
      id: "suivi",
      title: "VII. Suivi et maintenance quotidienne",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Tests eau</h3>
          <p className="mt-1">
            pH, ammoniac, nitrites, nitrates, KH, température (kit liquide
            préférable). Fréquence : 2-3×/semaine.
          </p>

          <h3 className="font-semibold mt-3">2. Gestion des pertes</h3>
          <p className="mt-1">
            Vidange partielle 5-10 %/semaine. Nettoyage décanteur/filtres.
            Surveillance parasites (Ich, pucerons).
          </p>

          <h3 className="font-semibold mt-3">3. Optimisation</h3>
          <p className="mt-1">
            Ajuster charge biologique, ratio plantes/poissons. Ajouter vers
            (vermifiltre) pour solides.
          </p>

          <p className="mt-3 text-sm">Vidéo (suivi et maintenance) :</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/Mm6-JkjYDnk"
              title="Installation et suivi T'air-eau"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        </>
      ),
    },
    {
      id: "post",
      title: "VIII. Post-récolte et valorisation",
      content: (
        <>
          <h3 className="font-semibold mt-2">1. Récolte poissons & plantes</h3>
          <p className="mt-1">
            Poissons : épuisette, jeûne préalable. Plantes : feuille par feuille
            ou entière.
          </p>

          <h3 className="font-semibold mt-3">
            2. Conservation & transformation
          </h3>
          <p className="mt-1">
            Poisson : glace ou congélation. Légumes : frais ou transformation
            (séchage herbes).
          </p>

          <h3 className="font-semibold mt-3">3. Économie & circuits courts</h3>
          <p className="mt-1">
            Vente directe, AMAP, restauration. Calcul BE (rendement biologique)
            et amortissement.
          </p>
        </>
      ),
    },
  ];

  const [openId, setOpenId] = useState<string | null>(sections[0].id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          GUIDE PRATIQUE D'AQUAPONIE
        </h1>
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
              Astuce : cliquez sur les titres pour développer / réduire chaque
              section.
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
