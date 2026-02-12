"use client";
import React, { useState, useCallback } from "react";

// Composant Modal pour les vidéos
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle: string;
}

const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  videoTitle,
}: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{videoTitle}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Fermer"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            src={videoUrl}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            Vidéo intégrée depuis YouTube. Vous pouvez agrandir en plein écran
            en cliquant sur l'icône carrée en bas à droite.
          </p>
        </div>
      </div>
    </div>
  );
};

// Composant pour afficher les vidéos avec bouton d'agrandissement
interface VideoCardProps {
  videoUrl: string;
  videoTitle: string;
  description?: string;
}

const VideoCard = ({ videoUrl, videoTitle, description }: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getThumbnailUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
    )?.[1];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : null;
  };

  const thumbnailUrl = getThumbnailUrl(videoUrl);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md">
        <div className="relative group">
          <div className="aspect-w-16 aspect-h-9 bg-black/5 rounded-lg overflow-hidden">
            {thumbnailUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={thumbnailUrl}
                  alt={`Miniature: ${videoTitle}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label={`Ouvrir la vidéo: ${videoTitle}`}
                >
                  <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition transform hover:scale-110"
                    aria-label="Agrandir la vidéo"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
                <svg
                  className="w-12 h-12 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <p className="font-medium text-gray-800 mb-2">{videoTitle}</p>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
        videoTitle={videoTitle}
      />
    </>
  );
};

// Définir les sections AVANT le composant principal
const sectionsData = [
  {
    id: "intro",
    title: "I. Introduction générale à l'aquaponie",
    content: (
      <>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 text-lg">
              1. Objectifs du guide
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Cibler les particuliers, producteurs urbains, formateurs et
                techniciens.
              </li>
              <li>
                Promouvoir une production circulaire, économe en eau et sans
                engrais chimiques.
              </li>
              <li>
                Permettre de démarrer un système domestique ou
                semi-professionnel viable.
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
            <h3 className="font-semibold text-green-800 text-lg">
              2. Principe de base et avantages
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Symbiose poissons → plantes → eau recyclée (économie d'eau
                &gt;90%).
              </li>
              <li>Production simultanée de protéines animales et végétales.</li>
              <li>
                Adaptation à l'urbain, au balcon, à la serre ou au jardin.
              </li>
              <li>
                Rendement élevé par m², résilience climatique, faible empreinte
                écologique.
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-semibold text-amber-800 text-lg">
              3. Échelles et types de systèmes
            </h3>
            <p className="mt-2 text-gray-700">
              Domestique (50-500 L), semi-pro (1-10 m³), commerciale (&gt;50
              m³). Principaux systèmes : Media Bed, DWC (rafts), NFT,
              CHIFT-PIST.
            </p>
          </div>

          <div className="space-y-4 mt-6">
            <p className="font-medium text-gray-800">
              🎬 Vidéos introductives :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VideoCard
                videoUrl="https://www.youtube.com/embed/gjcxL3mVVe0"
                videoTitle="Monter une installation aquaponie chez soi"
                description="Guide complet pour une installation domestique"
              />
              <VideoCard
                videoUrl="https://www.youtube.com/embed/Mm6-JkjYDnk"
                videoTitle="Installation système T'air-eau"
                description="Exemple concret d'un système aquaponique"
              />
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
              1. Cycle de l'azote (clé du système)
            </h3>
            <p className="mt-2 text-gray-700">
              Poissons → ammoniac (déjections) → Nitrosomonas (nitrites) →
              Nitrobacter (nitrates) → absorption par les plantes → eau propre
              pour poissons.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 text-lg">
              2. Exigences environnementales
            </h3>
            <p className="mt-2 text-gray-700">
              pH 6.5–7.0 | Température 18–28 °C (selon poissons) | Oxygène
              dissous &gt;5 mg/L | Nitrates 20–100 mg/L | KH 60–120 mg/L (tampon
              pH).
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-semibold text-purple-800 text-lg">
              3. Rôles des acteurs
            </h3>
            <p className="mt-2 text-gray-700">
              Poissons : source d'azote | Bactéries nitrifiantes : biofiltre |
              Plantes : pompe biologique | Eau : milieu de vie partagé.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border">
            <h4 className="font-medium text-gray-700 mb-3">
              📚 Ressources pratiques :
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.aquaponie-maison.com/guide-complet.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start group"
                >
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="text-blue-600 hover:text-blue-800 group-hover:underline">
                    Guide complet Aquaponie Maison
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.aquaponie.fr/conseils-aquaponie/debuter-aquaponie"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start group"
                >
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="text-blue-600 hover:text-blue-800 group-hover:underline">
                    Premiers pas – Aquaponie.fr
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
    title: "III. Infrastructure et logistique",
    content: (
      <>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-blue-800 text-lg">
                1. Zonage du site
              </h3>
              <p className="mt-2 text-gray-700">
                Bassin poissons → décanteur / filtre mécanique → biofiltre →
                zone culture → retour au bassin. Séparer zones sales (poissons)
                et propres (inoculation, stockage).
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 text-lg">
                2. Équipements essentiels
              </h3>
              <p className="mt-2 text-gray-700">
                Bassin (IBC, cuve ronde), pompe à eau, pompe à air, siphon (bell
                ou U), tuyaux PVC, substrat (billes d'argile, gravier), radeaux
                (DWC), capteurs (pH, T°, EC).
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-semibold text-amber-800 text-lg">
              3. Hygiène et biosécurité
            </h3>
            <p className="mt-2 text-gray-700">
              Eau déchlorée, quarantaine poissons/plantes, désinfection outils
              (eau de Javel diluée), éviter pesticides/antibiotiques.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-gray-800">
              🎬 Vidéo démonstration :
            </p>
            <VideoCard
              videoUrl="https://www.youtube.com/embed/gjcxL3mVVe0"
              videoTitle="Monter une installation aquaponie chez soi"
              description="Guide étape par étape pour l'installation"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "substrat",
    title: "IV. Choix du système et préparation",
    content: (
      <>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 text-lg">
              1. Principaux systèmes
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Media Bed</strong> : lit de substrat (billes d'argile) –
                flood & drain ou continu – filtration intégrée.
              </li>
              <li>
                <strong>DWC (Deep Water Culture)</strong> : radeaux flottants –
                racines immergées – bon pour salades/herbes.
              </li>
              <li>
                <strong>NFT</strong> : film nutritif dans gouttières –
                oxygénation élevée – sensible aux pannes.
              </li>
              <li>
                <strong>CHIFT-PIST</strong> : niveau constant poissons + sump –
                pro et stable.
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
            <h3 className="font-semibold text-green-800 text-lg">
              2. Préparation substrat / média
            </h3>
            <p className="mt-2 text-gray-700">
              Billes d'argile : rinçage + désinfection. Gravier : calibre 8-16
              mm. Maturation : cycle azote 4-6 semaines (source ammoniac).
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-800 mb-4">
              🎬 Vidéos techniques :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VideoCard
                videoUrl="https://www.youtube.com/embed/Mm6-JkjYDnk"
                videoTitle="Installation système T'air-eau"
                description="Exemple de système Media Bed"
              />
              <VideoCard
                videoUrl="https://www.youtube.com/embed/gjcxL3mVVe0"
                videoTitle="Montage installation domestique"
                description="Guide pratique pour débutants"
              />
            </div>
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
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-blue-800">
                1. Espèces adaptées
              </h3>
              <p className="mt-2 text-gray-700">
                Tilapia (tropical, croissance rapide), Truite arc-en-ciel
                (froid), Carpe, Poisson-chat, Perche. Débutants : tilapia ou
                poissons rouges (test).
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-green-800">
                2. Densité et alimentation
              </h3>
              <p className="mt-2 text-gray-700">
                10-30 kg/m³ (débutants &lt;15 kg/m³). Nourriture 1-3 % poids
                corporel/jour. Jeûne 1-2 j/semaine.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-purple-800">
                3. Santé et quarantaine
              </h3>
              <p className="mt-2 text-gray-700">
                Observer comportement (nage, appétit). Quarantaine 2-4 semaines
                nouveaux poissons.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "plantes",
    title: "VI. Choix et gestion des plantes",
    content: (
      <>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-green-800">
                1. Espèces adaptées
              </h3>
              <p className="mt-2 text-gray-700">
                Laitue, basilic, épinard, fraises (débutants) ; tomate,
                concombre, poivron (système mature, potassium/calcium).
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-blue-800">
                2. Germination et repiquage
              </h3>
              <p className="mt-2 text-gray-700">
                Semis hors système puis repiquage. Rinçage racines. pH 5.8-6.8
                idéal pour absorption.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-amber-800">
                3. Carences courantes
              </h3>
              <p className="mt-2 text-gray-700">
                Fer (chlorose), calcium (pourriture apicale), potassium (bords
                brûlés). Supplémentation chélatée si besoin.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "suivi",
    title: "VII. Suivi et maintenance quotidienne",
    content: (
      <>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-blue-800">1. Tests eau</h3>
              <p className="mt-2 text-gray-700">
                pH, ammoniac, nitrites, nitrates, KH, température (kit liquide
                préférable). Fréquence : 2-3×/semaine.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-green-800">
                2. Gestion des pertes
              </h3>
              <p className="mt-2 text-gray-700">
                Vidange partielle 5-10 %/semaine. Nettoyage décanteur/filtres.
                Surveillance parasites (Ich, pucerons).
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-purple-800">3. Optimisation</h3>
              <p className="mt-2 text-gray-700">
                Ajuster charge biologique, ratio plantes/poissons. Ajouter vers
                (vermifiltre) pour solides.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-gray-800">🎬 Vidéo maintenance :</p>
            <VideoCard
              videoUrl="https://www.youtube.com/embed/Mm6-JkjYDnk"
              videoTitle="Installation et suivi T'air-eau"
              description="Démonstration de suivi et entretien"
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
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-green-800">
                1. Récolte poissons & plantes
              </h3>
              <p className="mt-2 text-gray-700">
                Poissons : épuisette, jeûne préalable. Plantes : feuille par
                feuille ou entière.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-blue-800">
                2. Conservation & transformation
              </h3>
              <p className="mt-2 text-gray-700">
                Poisson : glace ou congélation. Légumes : frais ou
                transformation (séchage herbes).
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border">
              <h3 className="font-semibold text-purple-800">
                3. Économie & circuits courts
              </h3>
              <p className="mt-2 text-gray-700">
                Vente directe, AMAP, restauration. Calcul BE (rendement
                biologique) et amortissement.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

// Composant principal
export default function GuideAquaponie() {
  const [openId, setOpenId] = useState<string | null>(sectionsData[0].id);

  const toggleSection = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
            GUIDE PRATIQUE D'AQUAPONIE
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Guide complet pour la production aquaponique circulaire — avec
            vidéos, ressources externes et conseils pratiques pour débutants et
            producteurs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              Économie d'eau &gt;90%
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Production circulaire
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
              Urbain & balcon
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Protéines + végétaux
            </span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          <nav className="lg:w-80 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center mb-6">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
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
                  />
                </svg>
                <h2 className="font-semibold text-gray-800">
                  Table des matières
                </h2>
              </div>
              <ul className="space-y-2">
                {sectionsData.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => toggleSection(s.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        openId === s.id
                          ? "bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-800 font-medium"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="text-sm">{s.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openId === s.id
                            ? "rotate-180 text-blue-600"
                            : "text-gray-400"
                        }`}
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
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
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
                    />
                  </svg>
                  <p className="text-sm text-green-800">
                    Astuce : cliquez sur les sections pour les développer ou
                    réduire. Utilisez le menu pour naviguer rapidement.
                  </p>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <div className="space-y-6">
              {sectionsData.map((s) => (
                <article
                  key={s.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                    openId === s.id ? "ring-2 ring-blue-200" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleSection(s.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-4">
                        <span className="font-semibold text-blue-800">
                          {sectionsData.findIndex((sec) => sec.id === s.id) + 1}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {s.title}
                      </h2>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        openId === s.id ? "rotate-180" : ""
                      }`}
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
                      />
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

            <footer className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Guide complet - Prêt à l'utilisation
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ce guide contient toutes les informations nécessaires pour
                démarrer et optimiser votre système aquaponique. Toutes les
                ressources sont vérifiées et régulièrement mises à jour.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
