"use client";
import React, { useState } from "react";

const PRODUCTS = [
  {
    id: 2,
    name: "Pomme de terre",
    category: "Légume",
    notes: "Sol frais et drainé; cultivate facile en bac.",
    methods: [
      "Pleine terre",
      "Bac",
      "Pleine terre sous serre",
      "Bac sous serre",
    ],
    benefits: "Aliment de base; rotation des cultures; bonne productivité.",
    facilities: "Rotation, semences certifiées, irrigation localisée.",
  },
  {
    id: 3,
    name: "Haricot commun",
    category: "Légume",
    notes: "Bonne fixation d’azote; adapté aux parcelles familiales.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Source de protéines; améliore le sol.",
    facilities: "Tuteurs légers pour variantes grimpantes; stockage sec.",
  },
  {
    id: 4,
    name: "Fraises",
    category: "Fruit",
    notes:
      "Très rentable en bac ou sous serre; attention aux maladies fongiques.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Haut rendement par m²; marché local premium.",
    facilities:
      "Serres simples, irrigation goutte à goutte, mélange de substrat.",
  },
  {
    id: 5,
    name: "Avocat",
    category: "Fruit",
    notes:
      "Existence de petites plantations dans la zone; préfère sols profonds.",
    methods: ["Pleine terre"],
    benefits: "Fort potentiel commercial; longue durée de production.",
    facilities:
      "Espaces larges, protection contre vent fort, irrigation saisonnière.",
  },
  {
    id: 6,
    name: "Mûres / Framboises",
    category: "Fruit",
    notes: "Bonne adaptation aux hautes terres; excellent en tunnel.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Fruits à haute valeur ajoutée; adapté aux cultures de niche.",
    facilities: "Tuteurs, serres légères pour prolonger saisons.",
  },
  {
    id: 7,
    name: "Tomate",
    category: "Légume",
    notes: "Très cultivée localement; mieux sous serre pour qualité.",
    methods: [
      "Pleine terre",
      "Bac",
      "Pleine terre sous serre",
      "Bac sous serre",
    ],
    benefits: "Forte demande locale; transformation possible (sauces).",
    facilities: "Serre pour calibre, irrigation, lutte intégrée.",
  },
  {
    id: 8,
    name: "Poivron / Piment doux",
    category: "Légume",
    notes: "Favorise culture sous serre pour calibre.",
    methods: [
      "Pleine terre",
      "Bac",
      "Pleine terre sous serre",
      "Bac sous serre",
    ],
    benefits: "Bon prix en marché urbain; durable en culture protégée.",
    facilities: "Serre, substrats de qualité, palissage.",
  },
  {
    id: 9,
    name: "Carotte",
    category: "Légume",
    notes: "Sol profond et meuble requis; rentable en plein champ.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Stockage longue durée; transformation possible.",
    facilities: "Préparation fine du sol, irrigation azote contrôlé.",
  },
  {
    id: 10,
    name: "Chou / Chou de Savoie",
    category: "Légume",
    notes: "Bien adapté aux climats tempérés.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Demande en circuit court; rotation utile.",
    facilities: "Protection contre limaces; fertilisation équilibrée.",
  },
  {
    id: 11,
    name: "Laitue (variétés) ",
    category: "Légume",
    notes: "Très adaptée à culture en bac et sous serre.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Récoltes rapides; multiple récoltes par an (coupe).",
    facilities: "Serre froide possible, irrigation et ombrage léger.",
  },
  {
    id: 12,
    name: "Épinard / Acelga",
    category: "Légume",
    notes: "Croissance rapide; convient au maraîchage urbain.",
    methods: ["Bac", "Pleine terre", "Pleine terre sous serre"],
    benefits: "Feuilles à haute valeur nutritive; rotation rapide.",
    facilities: "Sol riche en matière organique, irrigation.",
  },
  {
    id: 13,
    name: "Coriandre",
    category: "Herbe aromatique",
    notes: "Production rapide; sensible à la chaleur.",
    methods: ["Bac", "Pleine terre", "Pleine terre sous serre"],
    benefits: "Demande constante en cuisine locale; cycles courts.",
    facilities: "Semis successifs, ombrage partiel en saison chaude.",
  },
  {
    id: 14,
    name: "Persil",
    category: "Herbe aromatique",
    notes: "Très demandé; bon en bac.",
    methods: ["Bac", "Pleine terre", "Pleine terre sous serre"],
    benefits: "Vente en botte; valeur ajoutée dans marchés urbains.",
    facilities: "Substrat riche, irrigation régulière.",
  },
  {
    id: 15,
    name: "Basilic",
    category: "Herbe aromatique",
    notes: "Idéal en serre ou bacs; sensible au froid et excès d’humidité.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Haute marge en condition commerciale; transformable (pesto).",
    facilities: "Serre chaude ou tunnel, récolte successive.",
  },
  {
    id: 16,
    name: "Menthe",
    category: "Herbe aromatique",
    notes: "Plante envahissante; culture mieux en bac.",
    methods: ["Bac", "Pleine terre", "Pleine terre sous serre"],
    benefits: "Usages culinaires et médicinaux; facile à cultiver.",
    facilities: "Bacs pour contenir rhizomes, arrosage modéré.",
  },
  {
    id: 17,
    name: "Thym",
    category: "Herbe aromatique",
    notes: "Adapté aux sols drainés; faible entretien.",
    methods: ["Bac", "Pleine terre"],
    benefits: "Longue récolte; séchage facile.",
    facilities: "Substrat drainant, exposition ensoleillée.",
  },
  {
    id: 18,
    name: "Romarin",
    category: "Herbe aromatique",
    notes: "Tolère sols pauvres; plante pérenne.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Plante à longue durée; demande paysagère et culinaire.",
    facilities: "Drainage, peu d’irrigation.",
  },
  {
    id: 19,
    name: "Ail",
    category: "Légume",
    notes: "Bonne conservation; rentable en petites superficies.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Stockage longue durée; marché stable.",
    facilities: "Bulbes sains, travail du sol léger.",
  },
  {
    id: 20,
    name: "Oignon",
    category: "Légume",
    notes: "Cultivé localement; adapté au séchage.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Base culinaire; bonne conservation.",
    facilities: "Séchoir, stockage ventilé.",
  },
  {
    id: 21,
    name: "Poire",
    category: "Fruit",
    notes: "Variétés tempérées possibles en altitude.",
    methods: ["Pleine terre"],
    benefits: "Marché de niche; conservation sous froid.",
    facilities: "Espaces arborés, quelques heures de fraîcheur requises.",
  },
  {
    id: 22,
    name: "Pêche / Nectarine",
    category: "Fruit",
    notes: "Certaines variétés s’adaptent aux hauts plateaux.",
    methods: ["Pleine terre"],
    benefits: "Produits premium; transformation possible.",
    facilities: "Protection contre gel occasionnel; taille.",
  },
  {
    id: 23,
    name: "Poireau",
    category: "Légume",
    notes: "Adapté au climat tempéré; culture longue.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Valeur culinaire; bonne conservation.",
    facilities: "Terres riches, irrigation constante.",
  },
  {
    id: 24,
    name: "Radis",
    category: "Légume",
    notes: "Cycle très court; idéal pour rotations.",
    methods: ["Bac", "Pleine terre"],
    benefits: "Récolte rapide; bonne rentrée de trésorerie.",
    facilities: "Semis en lignes, récolte précoce.",
  },
  {
    id: 25,
    name: "Aubergine",
    category: "Légume",
    notes: "Meilleure qualité sous serre; sensible aux basses températures.",
    methods: [
      "Pleine terre",
      "Bac",
      "Pleine terre sous serre",
      "Bac sous serre",
    ],
    benefits: "Demande locale; produit transformable.",
    facilities: "Serre chaude, tuteurage.",
  },
  {
    id: 26,
    name: "Courgette",
    category: "Légume",
    notes: "Très productive en bac ou plein champ.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Haut rendement; multiple récoltes.",
    facilities: "Support pour fleurs, irrigation.",
  },
  {
    id: 27,
    name: "Patate douce",
    category: "Légume/Other",
    notes: "Certaines variétés tolèrent altitude; préfèrent sols meubles.",
    methods: ["Pleine terre"],
    benefits: "Aliment énergétique; stockage relativement bon.",
    facilities: "Préparation du sol, paillage.",
  },
  {
    id: 28,
    name: "Mango (variétés haut plateau)",
    category: "Fruit",
    notes: "Moins commun en Popayán mais possible en microclimats chauds.",
    methods: ["Pleine terre"],
    benefits: "Forte demande; export possible.",
    facilities: "Sites chauds protégés, irrigation.",
  },
  {
    id: 29,
    name: "Papaye (petite échelle)",
    category: "Fruit",
    notes: "Nécessite microclimat chaud; possible en serres chauffées.",
    methods: ["Pleine terre sous serre", "Bac sous serre"],
    benefits: "Fruits frais; marché niche.",
    facilities: "Serres chauffantes, pollinisation si nécessaire.",
  },
  {
    id: 30,
    name: "Citrus (mandarine, orange, lime)",
    category: "Fruit",
    notes: "Certaines variétés s’adaptent au climat tempéré des vallées.",
    methods: ["Pleine terre"],
    benefits: "Consommation locale élevée; transformation (jus).",
    facilities: "Protection contre excès de pluie, lutte contre maladies.",
  },
  {
    id: 31,
    name: "Mango",
    category: "Fruit",
    notes: "Redundant placeholder",
    methods: ["Pleine terre"],
    benefits: "—",
    facilities: "—",
  },
  {
    id: 32,
    name: "Piments piquants (aji)",
    category: "Légume",
    notes: "Très demandé; adapté aux bacs et serres.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Haut rendement, conservation et transformation.",
    facilities: "Serres, séchoirs pour piment sec.",
  },
  {
    id: 33,
    name: "Mais (maïs)",
    category: "Céréale",
    notes: "Culture traditionnelle; nécessite espace.",
    methods: ["Pleine terre"],
    benefits: "Aliment de base, ensemencement local.",
    facilities: "Semis en lignes, fertilité du sol.",
  },
  {
    id: 34,
    name: "Banane plantain (petite production)",
    category: "Fruit",
    notes: "Peut être produite dans zones plus chaudes du département.",
    methods: ["Pleine terre"],
    benefits: "Source calorique locale.",
    facilities: "Espaces humides, gestion des maladies bactériennes.",
  },
  {
    id: 35,
    name: "Figue",
    category: "Fruit",
    notes: "Adaptée aux microclimats tempérés.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Produit de niche; peu d’entretien.",
    facilities: "Drainage, taille légère.",
  },
  {
    id: 36,
    name: "Kiwi (variétés résistantes)",
    category: "Fruit",
    notes: "Peut réussir en zones froides et humides.",
    methods: ["Pleine terre", "Pleine terre sous serre"],
    benefits: "Valuable niche crop; high price per kg.",
    facilities: "Tuteurs, protection hivernale légère.",
  },
  {
    id: 37,
    name: "Aneth",
    category: "Herbe aromatique",
    notes: "Usage culinaire et transformation.",
    methods: ["Bac", "Pleine terre"],
    benefits: "Marché local constant.",
    facilities: "Semis successifs, récoltes répétées.",
  },
  {
    id: 38,
    name: "Céleri",
    category: "Légume",
    notes: "Précoce et demande eau constante.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Vente en botte; valeur ajoutée en circuits courts.",
    facilities: "Irrigation régulière, substrats riches.",
  },
  {
    id: 39,
    name: "Fenouil",
    category: "Légume",
    notes: "Bon pour divers marchés; préfère sol profond.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Marché local et restaurants.",
    facilities: "Préparation du sol, récolte mécanique manuelle.",
  },
  {
    id: 40,
    name: "Tours de fleurs comestibles (capucine, souci)",
    category: "Herbe/Ornement",
    notes: "Complément pour marché gastronomique.",
    methods: ["Bac", "Pleine terre", "Pleine terre sous serre"],
    benefits: "Valeur ajoutée pour restaurants et marchés fermiers.",
    facilities: "Serres pour production continue.",
  },
  {
    id: 41,
    name: "Gingembre",
    category: "Autre",
    notes: "Culture possible en bacs ou plein champ sous ombrage.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Racine à forte valeur; usage médicinal et culinaire.",
    facilities: "Paillage, sol riche en matière organique.",
  },
  {
    id: 42,
    name: "Curcuma",
    category: "Autre",
    notes: "Similaire au gingembre; marché en croissance.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Produit transformable; valeur exportable.",
    facilities: "Substrat humifère, protection du gel.",
  },
  {
    id: 43,
    name: "Pomelo (pamplemousse)",
    category: "Fruit",
    notes: "Microclimats chauds requis.",
    methods: ["Pleine terre"],
    benefits: "Marché jus frais; complément citrus.",
    facilities: "Espaces plus chauds, gestion sanitaire.",
  },
  {
    id: 44,
    name: "Mora de Castilla (mûre andine)",
    category: "Fruit",
    notes: "Très adaptée à la région andina; culture répandue.",
    methods: ["Pleine terre", "Bac", "Pleine terre sous serre"],
    benefits: "Fruit local très demandé; transformation (confitures).",
    facilities: "Tuteurs, serres pour récoltes étendues.",
  },
  {
    id: 45,
    name: "Tomatillo / Tomate de árbol (tree tomato - tamarillo)",
    category: "Fruit/Légume",
    notes: "Très adapté aux Andes; culture traditionnelle.",
    methods: ["Pleine terre"],
    benefits: "Fruité pour marchés locaux et transformation.",
    facilities: "Espaliers, gestion parasitaire.",
  },
  {
    id: 46,
    name: "Pois (petit pois)",
    category: "Légume",
    notes: "Adaptés aux hautes terres; cycle court.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Marché frais; fixation azote.",
    facilities: "Tuteurs, irrigation ponctuelle.",
  },
  {
    id: 47,
    name: "Betterave",
    category: "Légume",
    notes: "Sol meuble et profond requis.",
    methods: ["Pleine terre", "Bac"],
    benefits: "Transformation en jus; conservation fraîche.",
    facilities: "Préparation du sol, irrigation.",
  },
  {
    id: 48,
    name: "Mâche / Valerianella",
    category: "Légume",
    notes: "Feuilles fines adaptées aux cycles courts.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Marché gastronomique; rotations rapides.",
    facilities: "Serre froide, récolte mécanique manuelle.",
  },
  {
    id: 49,
    name: "Nopal (figuier de Barbarie)",
    category: "Autre",
    notes: "Peu commun mais possible en sites secs.",
    methods: ["Pleine terre"],
    benefits: "Usage alimentaire et médicinal; faible entretien.",
    facilities: "Sol drainant, faible irrigation.",
  },
  {
    id: 50,
    name: "Microgreens (divers)",
    category: "Herbe aromatique/Légume",
    notes: "Production intensive en bacs et sous serre; rotation très courte.",
    methods: ["Bac", "Pleine terre sous serre", "Bac sous serre"],
    benefits: "Très haute marge par surface; clients restaurants.",
    facilities:
      "Bacs peu profonds, LED ou luminosité contrôlée, substrat stérile.",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Fruit",
    "Légume",
    "Herbe aromatique",
    "Autre",
    "Céréale",
    "Fruit/Other",
  ];

  const filtered = PRODUCTS.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">
          Productions agricoles pertinentes pour Popayán (Cauca)
        </h1>
        <p className="mt-2 text-gray-700">
          Liste de 50 produits recommandés, méthodes de culture (pleine terre,
          bac, sous serre), bénéfices et installations minimales.
        </p>
        <div className="mt-4 flex gap-3 items-center">
          <label className="text-sm font-medium">Filtrer par catégorie :</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((prod) => (
          <article key={prod.id} className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold">{prod.name}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Catégorie: {prod.category}
            </p>
            <div className="flex gap-2 flex-wrap mb-3">
              {prod.methods.map((m) => (
                <span key={m} className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {m}
                </span>
              ))}
            </div>
            <p className="font-medium">Bénéfices</p>
            <p className="text-sm mb-2">{prod.benefits}</p>
            <p className="font-medium">Installations recommandées</p>
            <p className="text-sm mb-2">{prod.facilities}</p>
            <details className="text-sm text-gray-600">
              <summary className="cursor-pointer">
                Notes spécifiques pour Popayán
              </summary>
              <p className="mt-2">{prod.notes}</p>
            </details>
          </article>
        ))}
      </section>

      <footer className="max-w-5xl mx-auto mt-8 text-sm text-gray-600">
        <p>
          Conseils généraux: privilégier variétés adaptées à altitude ~1 700–1
          800 m, sols riches en matière organique, systèmes d’irrigation goutte
          à goutte et serres simples pour prolonger les saisons et améliorer la
          qualité commerciale.
        </p>
      </footer>
    </main>
  );
}
