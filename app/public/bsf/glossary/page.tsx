// app/bsf/glossary/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Worm } from "lucide-react";
import GlossaryCard from "../../../../components/GlossaryCard";
import SearchBar from "../../../../components/SearchBar";
import AlphabetFilter from "../../../../components/AlphabetFilter";

// ----- DONNÉES DU GLOSSAIRE BSF -----
const categoriesBSF = [
  "Tous",
  "Biologie",
  "Élevage",
  "Substrat",
  "Valorisation",
  "Paramètres",
  "Matériel",
];

const glossaryTermsBSF = [
  {
    id: "1",
    term: "Adulte",
    definition:
      "Stade reproducteur de la mouche soldat noire. L'adulte ne se nourrit pas, ne pique pas et vit 5 à 8 jours uniquement pour s'accoupler et pondre.",
    category: "Biologie",
  },
  {
    id: "2",
    term: "Bac d'élevage",
    definition:
      "Conteneur (généralement en PEHD, 40-60 L) où les larves sont déposées avec le substrat. Il doit être aéré et permettre la migration des pré-nymphes.",
    category: "Élevage",
  },
  {
    id: "3",
    term: "C/N (rapport)",
    definition:
      "Rapport carbone/azote du substrat. Idéal pour les larves de BSF : 15 à 25. Un bon équilibre favorise la croissance et limite les odeurs.",
    category: "Substrat",
  },
  {
    id: "4",
    term: "Cage d'accouplement",
    definition:
      "Structure fermée en toile fine (maillage < 2 mm) abritant les adultes. Équipée d'une source lumineuse (LED, 150-200 µmol/m²/s) et d'abreuvoirs.",
    category: "Élevage",
  },
  {
    id: "5",
    term: "Cycle de vie",
    definition:
      "Œuf → Larve (5-6 stades) → Pré-nymphe → Nymphe → Adulte. Durée totale : 35-45 jours à 28°C.",
    category: "Biologie",
  },
  {
    id: "6",
    term: "Déchets organiques",
    definition:
      "Intrant principal de l'élevage. Épluchures, marc de café, drêches, pain rassis, résidus de fruits/légumes. Broyage recommandé (1-3 cm).",
    category: "Substrat",
  },
  {
    id: "7",
    term: "Farine de larves",
    definition:
      "Produit obtenu après séchage (<10% d'humidité) et broyage des larves. Riche en protéines (40-45%) et en lipides (30-35%), utilisée en alimentation animale.",
    category: "Valorisation",
  },
  {
    id: "8",
    term: "Frass",
    definition:
      "Résidu solide de l'élevage (déjections, exuvies, substrat non consommé). Engrais organique NPK, riche en microbiote bénéfique.",
    category: "Valorisation",
  },
  {
    id: "9",
    term: "Hermetia illucens",
    definition:
      "Nom scientifique de la mouche soldat noire. Espèce originaire d'Amérique tropicale, aujourd'hui élevée mondialement pour la bioconversion des déchets.",
    category: "Biologie",
  },
  {
    id: "10",
    term: "Humidité du substrat",
    definition:
      "Taux d'eau dans le substrat. Plage optimale : 65-75%. Trop sec → arrêt de l'alimentation ; trop humide → asphyxie des larves.",
    category: "Paramètres",
  },
  {
    id: "11",
    term: "Larve",
    definition:
      "Stade juvénile de la BSF, unique à se nourrir. Croissance de 14 à 21 jours, passe par 5-6 mues. C'est la larve qui est récoltée et valorisée.",
    category: "Biologie",
  },
  {
    id: "12",
    term: "Leurre de ponte",
    definition:
      "Dispositif placé dans la cage d'accouplement pour attirer les femelles et recueillir les œufs. Souvent en carton ondulé, bois fendu ou substrat humide.",
    category: "Élevage",
  },
  {
    id: "13",
    term: "Luminosité",
    definition:
      "Paramètre critique pour l'accouplement. Intensité requise : 150-200 µmol/m²/s, photopériode 12-14h. L'ombre inhibe la reproduction.",
    category: "Paramètres",
  },
  {
    id: "14",
    term: "Migration",
    definition:
      "Comportement des larves matures (pré-nymphes) qui quittent le substrat pour trouver un endroit sec où se nymphoser. Exploité pour la récolte automatique.",
    category: "Élevage",
  },
  {
    id: "15",
    term: "Nymphe",
    definition:
      "Stade de transformation entre la pré-nymphe et l'adulte. Immobile, ne s'alimente pas. Dure environ 10-14 jours.",
    category: "Biologie",
  },
  {
    id: "16",
    term: "Œuf",
    definition:
      "Pondus en masse (500-900 œufs) par la femelle. Éclosion après 4 jours à 28°C et 70% HR. Fragile, ne doit pas sécher.",
    category: "Biologie",
  },
  {
    id: "17",
    term: "pH du substrat",
    definition:
      "Acidité du milieu de croissance. Tolérance large (6.0-8.0). En dessous de 5.5, risque de moisissures et de ralentissement.",
    category: "Paramètres",
  },
  {
    id: "18",
    term: "Pré-nymphe",
    definition:
      "Larve ayant terminé sa croissance, plus foncée, plus sèche, et qui migre. Stade idéal pour la récolte (teneur maximale en protéines).",
    category: "Biologie",
  },
  {
    id: "19",
    term: "Rampe de collecte",
    definition:
      "Plan incliné placé en sortie du bac d'élevage. Les pré-nymphes grimpent et tombent dans un récipient de récolte.",
    category: "Matériel",
  },
  {
    id: "20",
    term: "Séchage",
    definition:
      "Opération de conservation des larves récoltées. Four à 60-70°C pendant 12-24h. Taux d'humidité final <10%.",
    category: "Valorisation",
  },
  {
    id: "21",
    term: "Température (larves)",
    definition:
      "Plage optimale : 27-30°C. En dessous de 20°C, croissance très lente ; au-dessus de 35°C, mortalité.",
    category: "Paramètres",
  },
  {
    id: "22",
    term: "Température (adultes)",
    definition: "Idéal : 25-28°C. Influence l'accouplement et la longévité.",
    category: "Paramètres",
  },
];

export default function GlossaryPageBSF() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedLetter, setSelectedLetter] = useState(null);

  const filteredTerms = useMemo(() => {
    return glossaryTermsBSF.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Tous" || term.category === selectedCategory;
      const matchesLetter =
        !selectedLetter || term.term[0].toUpperCase() === selectedLetter;

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Worm className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Glossaire BSF</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-3xl">
            Maîtrisez le vocabulaire de l'élevage de la Mouche Soldat Noire
            (Hermetia illucens). Plus de {glossaryTermsBSF.length} termes
            techniques expliqués simplement.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtres et recherche */}
        <div className="mb-12 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Rechercher un terme BSF..."
              />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-amber-600" />
                  <label className="text-sm font-semibold text-gray-700">
                    Catégorie
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoriesBSF.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-amber-600 text-white"
                          : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <AlphabetFilter
              selectedLetter={selectedLetter}
              onSelectLetter={setSelectedLetter}
            />
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredTerms.length} terme{filteredTerms.length > 1 ? "s" : ""}{" "}
              trouvé{filteredTerms.length > 1 ? "s" : ""}
            </h2>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Tous");
                setSelectedLetter(null);
              }}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>

          {filteredTerms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow">
              <Worm className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Aucun terme trouvé
              </h3>
              <p className="text-gray-500">
                Essayez avec d'autres critères de recherche
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((term) => (
                <GlossaryCard key={term.id} term={term} />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Un terme manque à notre glossaire ?
          </h3>
          <p className="mb-6 text-amber-100">
            Contribuez à enrichir notre base de connaissances sur l'élevage de
            la BSF
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
            Proposer un nouveau terme
          </button>
        </div>
      </div>
    </div>
  );
}
