// app/aquaponue/glossary/page.jsx
"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Bug } from "lucide-react";
import {
  glossaryTermsAquaponie,
  categoriesAquaponie,
} from "@/data/aquaponie/glossaryData";
import GlossaryCard from "../../../components/GlossaryCard";
import SearchBar from "../../../components/SearchBar";
import AlphabetFilter from "../../../components/AlphabetFilter";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedLetter, setSelectedLetter] = useState(null);

  const filteredTerms = useMemo(() => {
    return glossaryTermsAquaponie.filter((term) => {
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
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Bug className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Glossaire aquaponie
            </h1>
          </div>
          <p className="text-xl text-amber-100 max-w-3xl">
            Découvrez le vocabulaire essentiel de l'aquaponie moderne. Plus de{" "}
            {glossaryTermsAquaponie.length} termes expliqués simplement.
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
                placeholder="Rechercher un terme apicole..."
              />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-amber-600" />
                  <label className="text-sm font-semibold text-gray-700">
                    Catégorie
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoriesAquaponie.map((category) => (
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
              <Bug className="w-16 h-16 text-amber-300 mx-auto mb-4" />
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
            Contribuez à enrichir notre base de connaissances apicoles
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
            Proposer un nouveau terme
          </button>
        </div>
      </div>
    </div>
  );
}
