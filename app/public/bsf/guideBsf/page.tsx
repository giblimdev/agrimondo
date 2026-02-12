"use client";

import React, { useState, useCallback } from "react";

// ---------- VideoModal ----------
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
            className="p-2 hover:bg-gray-100 rounded-full"
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
      </div>
    </div>
  );
};

// ---------- VideoCard ----------
interface VideoCardProps {
  videoUrl: string;
  videoTitle: string;
  description?: string;
}

const VideoCard = ({ videoUrl, videoTitle, description }: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getThumbnailUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/s]{11})/,
    )?.[1];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : null;
  };

  const thumbnailUrl = getThumbnailUrl(videoUrl);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
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
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-amber-600/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-gray-100">
                <svg
                  className="w-12 h-12 text-gray-400"
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

// ---------- Sections Data ----------
const sectionsData = [
  {
    id: "intro",
    title: "I. Introduction & intérêt de l’élevage BSF",
    index: 1,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Découvrir pourquoi l’élevage de la **mouche soldat noire (Hermetia
          illucens)** est important : valorisation des déchets organiques,
          production de protéines efficaces, réduction de l’empreinte carbone.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/e518LrMSr_4"
          videoTitle="How to Raise Black Soldier Flies – Tutorial"
          description="Introduction générale à l’élevage de BSF et principes de base."
        />
      </div>
    ),
  },
  {
    id: "biologie",
    title: "II. Biologie & cycle de vie",
    index: 2,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Comprendre le cycle de vie de la BSF : œufs, larves, pré-nymphes,
          nymphes, adultes — conditions optimales de croissance et paramètres
          biologiques clés.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/l7NBtN20hWg"
          videoTitle="Complete BSF Lifecycle Explained"
          description="Cycle de vie complet et recommandations de gestion."
        />
      </div>
    ),
  },
  {
    id: "infrastructure",
    title: "III. Infrastructure & équipements",
    index: 3,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Cahier des charges des équipements : cages d’accouplement, bacs
          larvaires, zones d’incubation, tri et collecte des pré-nymphes.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/b5kn8SliYFQ"
          videoTitle="Black Soldier Fly Farming Setup"
          description="Comment installer et organiser efficacement votre ferme BSF."
        />
      </div>
    ),
  },
  {
    id: "substrat",
    title: "IV. Substrat & alimentation",
    index: 4,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Que donner aux larves ? Types de substrats valorisables, formulation,
          humidité, équilibre C/N, fréquence d’apport et gestion des matières.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/xPqz6BRCSwU"
          videoTitle="Ultimate Guide to BSF Substrate"
          description="Formulation et gestion du substrat dans une exploitation BSF."
        />
      </div>
    ),
  },
  {
    id: "conduite",
    title: "V. Conduite de l’élevage",
    index: 5,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Gestion quotidienne des lots : gestion des œufs, incubation,
          croissance larvaire, densité, brassage, et suivi des paramètres.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/jMVHZNUjPlg"
          videoTitle="Harvesting BSF Larvae – Practical"
          description="Techniques de récolte des larves et automatisation simple."
        />
      </div>
    ),
  },
  {
    id: "transformation",
    title: "VI. Transformation & valorisation",
    index: 6,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Comment transformer les larves : séchage, farine, huile, frass
          (engrais organique), applications agricoles et marché.
        </p>
        <VideoCard
          videoUrl="https://www.youtube.com/embed/zS5UxH0Dxqc"
          videoTitle="BSF Production from Scratch"
          description="De la collecte aux produits commercialisables."
        />
      </div>
    ),
  },
  {
    id: "sante",
    title: "VII. Santé, hygiène & prévention",
    index: 7,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Les défis sanitaires : excès d’humidité, prédateurs, moisissures,
          nuisances, gestion des risques et bonnes pratiques d’hygiène.
        </p>
      </div>
    ),
  },
  {
    id: "suivi",
    title: "VIII. Suivi technique & optimisation",
    index: 8,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Indicateurs à suivre : taux de conversion du substrat, poids moyen,
          taux d’éclosion, productivité et optimisation continue des procédés.
        </p>
      </div>
    ),
  },
];

// ---------- Main Component ----------
export default function GuideBSF() {
  const [openId, setOpenId] = useState<string | null>(sectionsData[0].id);

  const toggleSection = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
            GUIDE COMPLET DE L'ÉLEVAGE DE LA MOUCHE SOLDAT NOIRE (BSF)
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sommaire */}
          <nav className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-6">
              <h2 className="font-semibold text-gray-800 mb-4">Sommaire</h2>
              <ul className="space-y-2">
                {sectionsData.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => toggleSection(s.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        openId === s.id
                          ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 text-amber-800 font-medium"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span>{`${s.index}. ${s.title}`}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openId === s.id ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
            </div>
          </nav>

          {/* Contenu */}
          <main className="flex-1 space-y-6">
            {sectionsData.map((s) => (
              <article
                key={s.id}
                className="bg-white rounded-2xl shadow-sm border overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(s.id)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h2 className="text-xl font-semibold text-gray-800">{`${s.index}. ${s.title}`}</h2>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openId === s.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openId === s.id && (
                  <div className="p-6 border-t">{s.content}</div>
                )}
              </article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
