// @/data/recetteData.ts
// Dernière mise à jour : février 2026
// Les images sont toutes en .png dans /recettes

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit?: string;
  note?: string;
  source?: "ferme" | "local" | "extérieur";
}

export interface RecipeStep {
  order: number;
  description: string;
  duration?: string;
  tips?: string[];
  image?: string; // Image pour cette étape spécifique
}

export interface NutritionInfo {
  calories: number;
  proteins: number; // en grammes
  carbs: number; // en grammes
  fats: number; // en grammes
  fiber?: number; // en grammes
}

export interface RecipeImage {
  url: string;
  alt: string;
  caption?: string;
  isMain?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  prepTime: number; // en minutes
  cookTime: number; // en minutes
  totalTime: number; // en minutes
  difficulty: "Facile" | "Moyen" | "Difficile";
  servings: number;
  category: (
    | "Plat principal"
    | "Dessert"
    | "Apéritif"
    | "Petit-déjeuner"
    | "Snack"
    | "Boisson"
    | "Sauce"
    | "Accompagnement"
  )[];
  tags: string[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  nutrition?: NutritionInfo;
  images: RecipeImage[]; // Tableau d'images
  season: string[];
  notes?: string[];
  yield?: string;
  equipment: string[];
  createdAt: string;
  lastUpdated: string;
  author: string;
  rating: number; // de 1 à 5
  source?: string;
  costPerServing?: string; // en COP
  featured: boolean;
  videoUrl?: string; // Lien vers une vidéo tutorielle
}

// ────────────────────────────────────────────────
// DONNÉES DES RECETTES AVEC IMAGES
// ────────────────────────────────────────────────

export const recipes: Recipe[] = [
  // 1) Omelette aux micropousses et champignons
  {
    id: "rec-001",
    title: "Omelette aux micropousses et champignons",
    subtitle: "Un petit-déjeuner protéiné et plein de vitalité",
    description:
      "Une omelette légère et nutritive garnie de micropousses fraîches et de champignons cultivés sur place. Parfaite pour commencer la journée avec énergie.",
    prepTime: 10,
    cookTime: 8,
    totalTime: 18,
    difficulty: "Facile",
    servings: 2,
    category: ["Petit-déjeuner", "Plat principal"],
    tags: [
      "Végétarien",
      "Sans gluten",
      "Riche en protéines",
      "Rapide",
      "Oeuf",
      "Ferme",
    ],
    ingredients: [
      {
        id: "ing-001",
        name: "Œufs de poules fermières",
        quantity: "4",
        unit: "unités",
        source: "ferme",
      },
      {
        id: "ing-002",
        name: "Champignons shiitake",
        quantity: "150",
        unit: "g",
        source: "ferme",
        note: "Tranchés finement",
      },
      {
        id: "ing-003",
        name: "Micropousses de tournesol",
        quantity: "1",
        unit: "poignée",
        source: "ferme",
      },
      {
        id: "ing-004",
        name: "Oignon rouge",
        quantity: "0.5",
        unit: "unité",
        source: "local",
      },
      {
        id: "ing-005",
        name: "Ail",
        quantity: "1",
        unit: "gousse",
        source: "local",
      },
      {
        id: "ing-006",
        name: "Huile d'olive",
        quantity: "1",
        unit: "c. à soupe",
        source: "extérieur",
      },
      {
        id: "ing-007",
        name: "Sel de l'Himalaya",
        quantity: "1",
        unit: "pincée",
        source: "extérieur",
      },
      {
        id: "ing-008",
        name: "Poivre noir",
        quantity: "1",
        unit: "pincée",
        source: "extérieur",
      },
      {
        id: "ing-009",
        name: "Ciboulette fraîche",
        quantity: "1",
        unit: "c. à soupe",
        source: "ferme",
        note: "Cisellée",
      },
    ],
    steps: [
      {
        order: 1,
        description:
          "Dans un bol, battez les œufs avec une pincée de sel et de poivre.",
        duration: "2 min",
        tips: ["Battez juste assez pour mélanger les blancs et les jaunes"],
        image: "/recettes/etapes/omelette-etape1.png",
      },
      {
        order: 2,
        description:
          "Faites chauffer l'huile dans une poêle antiadhésive à feu moyen.",
        duration: "1 min",
        tips: [
          "Utilisez une poêle bien chaude avant d'ajouter les ingrédients",
        ],
        image: "/recettes/etapes/omelette-etape2.png",
      },
      {
        order: 3,
        description:
          "Faites revenir l'oignon émincé et l'ail haché jusqu'à ce qu'ils soient translucides.",
        duration: "3 min",
        image: "/recettes/etapes/omelette-etape3.png",
      },
      {
        order: 4,
        description:
          "Ajoutez les champignons tranchés et faites-les cuire jusqu'à ce qu'ils soient dorés.",
        duration: "4 min",
        tips: [
          "Ne salez pas les champignons trop tôt pour éviter qu'ils rendent trop d'eau",
        ],
        image: "/recettes/etapes/omelette-etape4.png",
      },
      {
        order: 5,
        description:
          "Versez les œufs battus sur les légumes et laissez cuire à feu doux.",
        duration: "4 min",
        tips: ["Inclinez la poêle pour répartir uniformément les œufs"],
        image: "/recettes/etapes/omelette-etape5.png",
      },
      {
        order: 6,
        description:
          "Ajoutez les micropousses et repliez l'omelette avant de servir.",
        duration: "1 min",
        image: "/recettes/etapes/omelette-etape6.png",
      },
      {
        order: 7,
        description: "Parsemez de ciboulette fraîche et servez immédiatement.",
        image: "/recettes/etapes/omelette-etape7.png",
      },
    ],
    nutrition: {
      calories: 280,
      proteins: 22,
      carbs: 8,
      fats: 18,
      fiber: 3,
    },
    images: [
      {
        url: "/recettes/omelette-micropousses-main.png",
        alt: "Omelette dorée aux champignons et micropousses, servie sur une assiette blanche",
        caption: "Un petit-déjeuner équilibré avec nos produits de la ferme",
        isMain: true,
      },
      {
        url: "/recettes/omelette-ingredients.png",
        alt: "Ingrédients frais pour l'omelette : œufs, champignons, micropousses",
        caption: "Ingrédients 100% frais et locaux",
      },
      {
        url: "/recettes/omelette-cuisson.png",
        alt: "Omelette en cours de cuisson dans une poêle",
        caption: "Cuisson lente pour une texture parfaite",
      },
    ],
    season: ["Toutes saisons"],
    notes: [
      "Les micropousses ajoutent une touche de fraîcheur et de nutriments",
      "Vous pouvez remplacer les shiitake par des pleurotes",
      "Servez avec une tranche de pain complet pour un repas complet",
    ],
    yield: "1 omelette pour 2 personnes",
    equipment: [
      "Poêle antiadhésive",
      "Bol",
      "Fouet",
      "Couteau",
      "Planche à découper",
    ],
    createdAt: "2025-03-15",
    lastUpdated: "2026-01-20",
    author: "Chef Maria Rodriguez",
    rating: 4.8,
    source: "Recette traditionnelle adaptée",
    costPerServing: "4.500 COP",
    featured: true,
    videoUrl: "https://youtube.com/watch?v=exemple-omelette",
  },

  // 2) Gaufres croustillantes à l’œuf fermier
  {
    id: "rec-002",
    title: "Gaufres croustillantes à l’œuf fermier",
    subtitle: "Petit-déjeuner doré et gourmand",
    description:
      "Des gaufres moelleuses à l’intérieur, croustillantes à l’extérieur, parfaites pour valoriser les œufs frais de la ferme.",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    difficulty: "Facile",
    servings: 4,
    category: ["Petit-déjeuner", "Dessert"],
    tags: ["Oeuf", "Poule", "Ferme", "Rapide"],
    ingredients: [
      {
        id: "ing-101",
        name: "Œufs de la ferme",
        quantity: "3",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-102", name: "Farine de blé", quantity: "250", unit: "g" },
      { id: "ing-103", name: "Lait", quantity: "30", unit: "cl" },
      { id: "ing-104", name: "Beurre fondu", quantity: "100", unit: "g" },
      {
        id: "ing-105",
        name: "Levure chimique",
        quantity: "1",
        unit: "c. à café",
      },
      { id: "ing-106", name: "Sucre", quantity: "30", unit: "g" },
      { id: "ing-107", name: "Sel", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description: "Mélangez la farine, le sucre, le sel et la levure.",
      },
      {
        order: 2,
        description: "Ajoutez les œufs, puis le lait et le beurre fondu.",
      },
      { order: 3, description: "Laissez reposer 15 minutes." },
      {
        order: 4,
        description:
          "Versez la pâte dans le gaufrier chaud et cuisez 3–4 minutes par gaufre.",
      },
    ],
    nutrition: { calories: 310, proteins: 9, carbs: 38, fats: 14 },
    images: [
      {
        url: "/recettes/gaufres-main.png",
        alt: "Gaufres dorées et croustillantes",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    yield: "8 gaufres",
    equipment: ["Gaufrier", "Bol", "Fouet"],
    createdAt: "2026-02-10",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.7,
    featured: true,
    costPerServing: "3.500 COP",
  },

  // 3) Crêpes moelleuses aux herbes du jardin
  {
    id: "rec-003",
    title: "Crêpes moelleuses aux herbes du jardin",
    description:
      "Des crêpes salées parfumées aux herbes aromatiques de la ferme, idéales avec un œuf ou du fromage frais.",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: "Facile",
    servings: 4,
    category: ["Petit-déjeuner", "Plat principal"],
    tags: ["Oeuf", "Ferme", "Herbes aromatiques"],
    ingredients: [
      {
        id: "ing-201",
        name: "Œufs",
        quantity: "3",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-202", name: "Farine", quantity: "200", unit: "g" },
      { id: "ing-203", name: "Lait", quantity: "40", unit: "cl" },
      {
        id: "ing-204",
        name: "Persil et ciboulette",
        quantity: "2",
        unit: "c. à soupe",
        source: "ferme",
      },
      { id: "ing-205", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description: "Fouettez les œufs, la farine, le lait et les herbes.",
      },
      { order: 2, description: "Laissez reposer 10 minutes." },
      {
        order: 3,
        description:
          "Cuisez chaque crêpe 1 à 2 minutes par face dans une poêle chaude.",
      },
    ],
    nutrition: { calories: 220, proteins: 10, carbs: 22, fats: 9 },
    images: [
      {
        url: "/recettes/crepes-herbes-main.png",
        alt: "Crêpes dorées aux herbes vertes",
        isMain: true,
      },
    ],
    season: ["Printemps", "Été"],
    equipment: ["Poêle", "Bol"],
    createdAt: "2026-02-10",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.6,
    featured: true,
  },

  // 4) Crème anglaise maison
  {
    id: "rec-004",
    title: "Crème anglaise maison",
    description:
      "Une sauce sucrée onctueuse à base de jaunes d’œufs fermiers, idéale pour accompagner desserts et fruits.",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    difficulty: "Moyen",
    servings: 6,
    category: ["Dessert", "Sauce"],
    tags: ["Oeuf", "Dessert", "Ferme"],
    ingredients: [
      {
        id: "ing-301",
        name: "Jaunes d’œufs",
        quantity: "4",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-302", name: "Lait entier", quantity: "50", unit: "cl" },
      { id: "ing-303", name: "Sucre", quantity: "80", unit: "g" },
      { id: "ing-304", name: "Vanille", quantity: "1", unit: "gousse" },
    ],
    steps: [
      { order: 1, description: "Faites chauffer le lait avec la vanille." },
      {
        order: 2,
        description: "Fouettez les jaunes et le sucre jusqu’à blanchiment.",
      },
      {
        order: 3,
        description:
          "Versez le lait chaud sur les œufs, puis cuisez à feu doux jusqu’à épaississement (ne pas faire bouillir).",
        duration: "6-8 min",
      },
    ],
    nutrition: { calories: 180, proteins: 6, carbs: 18, fats: 9 },
    images: [
      {
        url: "/recettes/creme-anglaise-main.png",
        alt: "Crème anglaise onctueuse",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Casserole", "Fouet", "Saladier"],
    createdAt: "2026-02-10",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.9,
    featured: false,
  },

  // 5) Tilapia rôti aux herbes fraîches
  {
    id: "rec-005",
    title: "Tilapia rôti aux herbes fraîches",
    description:
      "Un plat équilibré et savoureux mettant en valeur le tilapia fermier et les herbes du potager.",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: "Facile",
    servings: 2,
    category: ["Plat principal"],
    tags: ["Tilapia", "Herbes", "Ferme", "Durable"],
    ingredients: [
      {
        id: "ing-401",
        name: "Tilapia frais",
        quantity: "2",
        unit: "filets",
        source: "ferme",
      },
      {
        id: "ing-402",
        name: "Thym et basilic",
        quantity: "1",
        unit: "c. à soupe",
        source: "ferme",
      },
      {
        id: "ing-403",
        name: "Huile d’olive",
        quantity: "1",
        unit: "c. à soupe",
      },
      {
        id: "ing-404",
        name: "Citron",
        quantity: "0.5",
        unit: "unité",
        source: "local",
      },
      { id: "ing-405", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      { order: 1, description: "Préchauffez le four à 180°C." },
      {
        order: 2,
        description:
          "Disposez les filets dans un plat, arrosez d’huile et de jus de citron, parsemez d’herbes.",
      },
      {
        order: 3,
        description: "Enfournez 18–20 minutes jusqu’à cuisson parfaite.",
      },
    ],
    nutrition: { calories: 240, proteins: 30, carbs: 2, fats: 12 },
    images: [
      {
        url: "/recettes/tilapia-herbes-main.png",
        alt: "Tilapia rôti aux herbes",
        isMain: true,
      },
    ],
    season: ["Été", "Automne"],
    equipment: ["Four", "Plat à four"],
    createdAt: "2026-02-11",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.8,
    featured: true,
    costPerServing: "6.000 COP",
  },

  // 6) Poêlée de pleurotes à la ciboulette
  {
    id: "rec-006",
    title: "Poêlée de pleurotes à la ciboulette",
    description:
      "Une garniture simple et parfumée mettant en avant les pleurotes de la ferme.",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Facile",
    servings: 2,
    category: ["Accompagnement", "Plat principal"],
    tags: ["Pleurotte", "Herbes", "Ferme", "Végétarien"],
    ingredients: [
      {
        id: "ing-501",
        name: "Pleurotes fraîches",
        quantity: "200",
        unit: "g",
        source: "ferme",
      },
      { id: "ing-502", name: "Beurre", quantity: "20", unit: "g" },
      {
        id: "ing-503",
        name: "Ciboulette fraîche",
        quantity: "1",
        unit: "c. à soupe",
        source: "ferme",
      },
      {
        id: "ing-504",
        name: "Ail",
        quantity: "1",
        unit: "gousse",
        source: "local",
      },
      { id: "ing-505", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description: "Faites fondre le beurre et faites revenir l’ail.",
      },
      {
        order: 2,
        description:
          "Ajoutez les pleurotes et faites sauter 8 minutes à feu vif.",
      },
      { order: 3, description: "Parsemez de ciboulette et servez chaud." },
    ],
    nutrition: { calories: 150, proteins: 7, carbs: 6, fats: 10 },
    images: [
      {
        url: "/recettes/pleurotes-main.png",
        alt: "Poêlée de pleurotes dorées",
        isMain: true,
      },
    ],
    season: ["Automne", "Hiver"],
    equipment: ["Poêle", "Spatule"],
    createdAt: "2026-02-11",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.7,
    featured: true,
  },

  // 7) Salade du potager et œuf mollet
  {
    id: "rec-007",
    title: "Salade du potager et œuf mollet",
    description:
      "Une salade colorée et fraîche mettant en valeur les légumes du jardin et les œufs de la ferme.",
    prepTime: 15,
    cookTime: 6,
    totalTime: 21,
    difficulty: "Facile",
    servings: 2,
    category: ["Plat principal", "Accompagnement"],
    tags: ["Oeuf", "Ferme", "Micropousses", "Légumes", "Végétarien"],
    ingredients: [
      {
        id: "ing-601",
        name: "Œufs frais",
        quantity: "2",
        unit: "unités",
        source: "ferme",
      },
      {
        id: "ing-602",
        name: "Laitue croquante",
        quantity: "1",
        unit: "tête",
        source: "ferme",
      },
      {
        id: "ing-603",
        name: "Tomates cerises",
        quantity: "100",
        unit: "g",
        source: "ferme",
      },
      {
        id: "ing-604",
        name: "Concombre",
        quantity: "0.5",
        unit: "unité",
        source: "ferme",
      },
      {
        id: "ing-605",
        name: "Micropousses variées",
        quantity: "1",
        unit: "poignée",
        source: "ferme",
      },
      {
        id: "ing-606",
        name: "Huile d’olive",
        quantity: "2",
        unit: "c. à soupe",
      },
      {
        id: "ing-607",
        name: "Vinaigre balsamique",
        quantity: "1",
        unit: "c. à soupe",
      },
      { id: "ing-608", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description:
          "Plongez les œufs dans l’eau bouillante pendant 6 minutes, puis rafraîchissez-les dans l’eau froide.",
      },
      { order: 2, description: "Lavez et coupez les légumes du jardin." },
      {
        order: 3,
        description:
          "Mélangez les ingrédients dans un grand bol, ajoutez les micropousses.",
      },
      {
        order: 4,
        description:
          "Préparez la vinaigrette avec l’huile, le vinaigre, le sel et le poivre.",
      },
      {
        order: 5,
        description:
          "Disposez les œufs mollets sur la salade et servez immédiatement.",
      },
    ],
    nutrition: { calories: 230, proteins: 12, carbs: 8, fats: 18 },
    images: [
      {
        url: "/recettes/salade-oeuf-mollet-main.png",
        alt: "Salade du jardin avec œuf mollet",
        isMain: true,
      },
    ],
    season: ["Printemps", "Été"],
    equipment: ["Casserole", "Saladier", "Couteau"],
    createdAt: "2026-02-11",
    lastUpdated: "2026-02-11",
    author: "Ferme Gourmet",
    rating: 4.9,
    featured: true,
    costPerServing: "4.000 COP",
  },

  {
    id: "rec-008",
    title: "Œufs durs de la ferme",
    description:
      "Un classique simple et nutritif pour profiter des œufs frais de la ferme.",
    prepTime: 2,
    cookTime: 10,
    totalTime: 12,
    difficulty: "Facile",
    servings: 2,
    category: ["Petit-déjeuner", "Accompagnement"],
    tags: ["Oeuf", "Ferme", "Rapide", "Protéines"],
    ingredients: [
      {
        id: "ing-801",
        name: "Œufs frais",
        quantity: "4",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-802", name: "Eau", quantity: "1", unit: "l" },
      { id: "ing-803", name: "Sel", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description:
          "Plongez les œufs dans une casserole d’eau froide avec une pincée de sel.",
      },
      {
        order: 2,
        description: "Portez à ébullition et laissez cuire 10 minutes.",
      },
      {
        order: 3,
        description:
          "Refroidissez immédiatement dans l’eau froide avant d’écaler.",
      },
    ],
    nutrition: { calories: 155, proteins: 13, carbs: 1, fats: 11 },
    images: [
      {
        url: "/recettes/oeufs-durs-main.png",
        alt: "Œufs durs écalés coupés en deux",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Casserole", "Cuillère", "Bol d’eau froide"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.6,
    featured: false,
  },
  {
    id: "rec-009",
    title: "Œufs mollets parfaits",
    description:
      "Jaune coulant, blanc juste pris : l’œuf mollet dans sa perfection.",
    prepTime: 2,
    cookTime: 6,
    totalTime: 8,
    difficulty: "Facile",
    servings: 2,
    category: ["Petit-déjeuner", "Accompagnement"],
    tags: ["Oeuf", "Ferme", "Rapide"],
    ingredients: [
      {
        id: "ing-901",
        name: "Œufs frais",
        quantity: "2",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-902", name: "Eau", quantity: "1", unit: "l" },
      { id: "ing-903", name: "Sel", quantity: "1", unit: "pincée" },
    ],
    steps: [
      { order: 1, description: "Faites bouillir de l’eau dans une casserole." },
      {
        order: 2,
        description: "Plongez les œufs et cuisez exactement 6 minutes.",
      },
      {
        order: 3,
        description:
          "Refroidissez immédiatement dans l’eau glacée avant de servir.",
      },
    ],
    nutrition: { calories: 150, proteins: 12, carbs: 1, fats: 10 },
    images: [
      {
        url: "/recettes/oeuf-mollet-main.png",
        alt: "Œuf mollet ouvert au jaune coulant",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Casserole", "Minuteur"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.8,
    featured: true,
  },
  {
    id: "rec-010",
    title: "Œuf sur le plat fermier",
    description:
      "Œuf au plat simple et doré, préparé avec des œufs frais et du beurre.",
    prepTime: 2,
    cookTime: 4,
    totalTime: 6,
    difficulty: "Facile",
    servings: 1,
    category: ["Petit-déjeuner"],
    tags: ["Oeuf", "Ferme", "Rapide"],
    ingredients: [
      {
        id: "ing-1001",
        name: "Œufs frais",
        quantity: "2",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-1002", name: "Beurre", quantity: "10", unit: "g" },
      { id: "ing-1003", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description: "Faites fondre le beurre dans une poêle à feu doux.",
      },
      {
        order: 2,
        description:
          "Cassez les œufs délicatement et laissez cuire sans retourner jusqu’à ce que le blanc soit pris.",
      },
      { order: 3, description: "Salez, poivrez et servez aussitôt." },
    ],
    nutrition: { calories: 180, proteins: 13, carbs: 0, fats: 14 },
    images: [
      {
        url: "/recettes/oeuf-sur-le-plat-main.png",
        alt: "Œuf sur le plat avec jaune brillant",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Poêle", "Spatule"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.7,
    featured: true,
  },
  {
    id: "rec-011",
    title: "Soupe au poulet colombienne (Sancocho de pollo)",
    description:
      "Une soupe rustique et nourrissante, emblématique de la cuisine colombienne, avec poulet, maïs et légumes du jardin.",
    prepTime: 20,
    cookTime: 60,
    totalTime: 80,
    difficulty: "Moyen",
    servings: 4,
    category: ["Plat principal"],
    tags: ["Poulet", "Colombien", "Ferme", "Traditionnel"],
    ingredients: [
      {
        id: "ing-1101",
        name: "Poulet fermier",
        quantity: "1",
        unit: "kg",
        source: "ferme",
      },
      {
        id: "ing-1102",
        name: "Maïs en épis",
        quantity: "2",
        unit: "unités",
        source: "ferme",
      },
      {
        id: "ing-1103",
        name: "Pommes de terre",
        quantity: "400",
        unit: "g",
        source: "ferme",
      },
      {
        id: "ing-1104",
        name: "Manioc ou plantain",
        quantity: "200",
        unit: "g",
        source: "ferme",
      },
      {
        id: "ing-1105",
        name: "Coriandre fraîche",
        quantity: "1",
        unit: "c. à soupe",
        source: "ferme",
      },
      {
        id: "ing-1106",
        name: "Oignon et ail",
        quantity: "1",
        unit: "chacun",
        source: "local",
      },
      { id: "ing-1107", name: "Sel et poivre", quantity: "1", unit: "pincée" },
    ],
    steps: [
      {
        order: 1,
        description: "Faites revenir oignon et ail dans un peu d’huile.",
      },
      {
        order: 2,
        description: "Ajoutez les morceaux de poulet, faites dorer légèrement.",
      },
      {
        order: 3,
        description:
          "Couvrez d’eau, ajoutez les légumes et le maïs, puis laissez mijoter 1 heure.",
      },
      {
        order: 4,
        description:
          "Rectifiez l’assaisonnement et ajoutez la coriandre juste avant de servir.",
      },
    ],
    nutrition: { calories: 380, proteins: 35, carbs: 20, fats: 15 },
    images: [
      {
        url: "/recettes/soupe-poulet-colombienne-main.png",
        alt: "Bol de sancocho colombien",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Cocotte", "Loupe"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.9,
    featured: true,
  },
  {
    id: "rec-012",
    title: "Ratatouille fermière",
    description:
      "Un mélange méditerranéen de légumes frais du potager mijotés à l’huile d’olive.",
    prepTime: 15,
    cookTime: 40,
    totalTime: 55,
    difficulty: "Facile",
    servings: 4,
    category: ["Plat principal", "Accompagnement"],
    tags: ["Légumes", "Ferme", "Végétarien", "Durable"],
    ingredients: [
      {
        id: "ing-1201",
        name: "Aubergine",
        quantity: "1",
        unit: "unité",
        source: "ferme",
      },
      {
        id: "ing-1202",
        name: "Courgette",
        quantity: "2",
        unit: "unités",
        source: "ferme",
      },
      {
        id: "ing-1203",
        name: "Poivron rouge",
        quantity: "1",
        unit: "unité",
        source: "ferme",
      },
      {
        id: "ing-1204",
        name: "Tomate",
        quantity: "3",
        unit: "unités",
        source: "ferme",
      },
      {
        id: "ing-1205",
        name: "Oignon",
        quantity: "1",
        unit: "unité",
        source: "local",
      },
      {
        id: "ing-1206",
        name: "Ail",
        quantity: "2",
        unit: "gousses",
        source: "local",
      },
      {
        id: "ing-1207",
        name: "Herbes de Provence",
        quantity: "1",
        unit: "c. à café",
        source: "ferme",
      },
    ],
    steps: [
      { order: 1, description: "Coupez tous les légumes en dés." },
      {
        order: 2,
        description:
          "Faites revenir oignon et ail dans l’huile, ajoutez les légumes.",
      },
      {
        order: 3,
        description: "Laissez mijoter 40 minutes à feu doux avec les herbes.",
      },
    ],
    nutrition: { calories: 150, proteins: 4, carbs: 18, fats: 6 },
    images: [
      {
        url: "/recettes/ratatouille-main.png",
        alt: "Ratatouille aux légumes du jardin",
        isMain: true,
      },
    ],
    season: ["Été", "Automne"],
    equipment: ["Casserole", "Spatule"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.8,
    featured: true,
  },
  {
    id: "rec-013",
    title: "Crêpes au miel fermier",
    description: "De délicieuses crêpes sucrées nappées de miel de la ferme.",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: "Facile",
    servings: 4,
    category: ["Dessert", "Petit-déjeuner"],
    tags: ["Oeuf", "Miel", "Ferme"],
    ingredients: [
      {
        id: "ing-1301",
        name: "Œufs frais",
        quantity: "3",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-1302", name: "Farine", quantity: "250", unit: "g" },
      { id: "ing-1303", name: "Lait", quantity: "50", unit: "cl" },
      { id: "ing-1304", name: "Beurre fondu", quantity: "30", unit: "g" },
      {
        id: "ing-1305",
        name: "Miel",
        quantity: "4",
        unit: "c. à soupe",
        source: "ferme",
      },
    ],
    steps: [
      { order: 1, description: "Préparez la pâte à crêpes classique." },
      { order: 2, description: "Faites cuire les crêpes à feu moyen." },
      { order: 3, description: "Servez tiède avec un filet de miel." },
    ],
    nutrition: { calories: 260, proteins: 8, carbs: 35, fats: 10 },
    images: [
      {
        url: "/recettes/crepe-miel-main.png",
        alt: "Crêpes au miel dorées",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Poêle", "Bol", "Fouet"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.8,
    featured: true,
  },
  {
    id: "rec-014",
    title: "Crème aux œufs traditionnelle",
    description:
      "Une crème douce et fondante, parfaite pour mettre en valeur les œufs frais.",
    prepTime: 10,
    cookTime: 40,
    totalTime: 50,
    difficulty: "Moyen",
    servings: 6,
    category: ["Dessert"],
    tags: ["Oeuf", "Ferme", "Dessert"],
    ingredients: [
      {
        id: "ing-1401",
        name: "Œufs",
        quantity: "4",
        unit: "unités",
        source: "ferme",
      },
      { id: "ing-1402", name: "Lait entier", quantity: "50", unit: "cl" },
      { id: "ing-1403", name: "Sucre", quantity: "80", unit: "g" },
      { id: "ing-1404", name: "Vanille", quantity: "1", unit: "gousse" },
    ],
    steps: [
      { order: 1, description: "Faites chauffer le lait avec la vanille." },
      {
        order: 2,
        description: "Fouettez les œufs et le sucre, versez le lait chaud.",
      },
      {
        order: 3,
        description:
          "Versez en ramequins et cuisez au bain-marie 40 minutes à 160°C.",
      },
    ],
    nutrition: { calories: 190, proteins: 7, carbs: 20, fats: 9 },
    images: [
      {
        url: "/recettes/creme-aux-oeufs-main.png",
        alt: "Crème aux œufs dorée",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Casserole", "Fouet", "Ramequins"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.9,
    featured: true,
  },
  {
    id: "rec-015",
    title: "Crème chantilly maison",
    description:
      "Une crème fouettée légère et sucrée parfaite pour accompagner desserts et fruits.",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    difficulty: "Facile",
    servings: 6,
    category: ["Dessert", "Accompagnement"],
    tags: ["Dessert", "Crème", "Ferme"],
    ingredients: [
      {
        id: "ing-1501",
        name: "Crème entière",
        quantity: "25",
        unit: "cl",
        source: "ferme",
      },
      { id: "ing-1502", name: "Sucre glace", quantity: "30", unit: "g" },
      {
        id: "ing-1503",
        name: "Extrait de vanille",
        quantity: "1",
        unit: "c. à café",
      },
    ],
    steps: [
      {
        order: 1,
        description:
          "Fouettez la crème bien froide avec le sucre glace et la vanille.",
      },
      { order: 2, description: "Arrêtez dès qu’elle forme des pics fermes." },
    ],
    nutrition: { calories: 220, proteins: 2, carbs: 6, fats: 22 },
    images: [
      {
        url: "/recettes/chantilly-main.png",
        alt: "Bol de chantilly maison",
        isMain: true,
      },
    ],
    season: ["Toutes saisons"],
    equipment: ["Bol froid", "Fouet électrique"],
    createdAt: "2026-02-12",
    lastUpdated: "2026-02-12",
    author: "Ferme Gourmet",
    rating: 4.8,
    featured: false,
  },
];

// ────────────────────────────────────────────────
// FONCTIONS UTILITAIRES AVEC SUPPORT D'IMAGES
// ────────────────────────────────────────────────

export const recipeUtils = {
  // Obtenir l'image principale d'une recette
  getMainImage: (recipe: Recipe): RecipeImage | undefined => {
    return recipe.images.find((img) => img.isMain) || recipe.images[0];
  },

  // Obtenir les images secondaires
  getSecondaryImages: (recipe: Recipe): RecipeImage[] => {
    return recipe.images.filter((img) => !img.isMain);
  },

  // Obtenir les images d'étapes
  getStepImages: (steps: RecipeStep[]): string[] => {
    return steps
      .map((step) => step.image)
      .filter((img): img is string => img !== undefined);
  },

  // Formater une image pour l'affichage
  formatImageUrl: (
    imageUrl: string,
    size: "thumb" | "medium" | "large" = "medium",
  ): string => {
    const sizes = {
      thumb: "/thumb/300x300",
      medium: "/medium/800x600",
      large: "/large/1200x800",
    };
    // Ici vous pourriez intégrer avec un service de CDN ou de redimensionnement d'images
    return imageUrl; // Pour l'instant, retourne l'URL originale
  },

  // Obtenir toutes les images d'une recette (étapes + galerie)
  getAllRecipeImages: (recipe: Recipe): string[] => {
    const stepImages = recipeUtils.getStepImages(recipe.steps);
    const galleryImages = recipe.images.map((img) => img.url);
    return [...new Set([...galleryImages, ...stepImages])]; // Évite les doublons
  },

  // Filtrer par catégorie
  filterByCategory: (category: Recipe["category"][number]): Recipe[] => {
    return recipes.filter((recipe) => recipe.category.includes(category));
  },

  // Filtrer par tag
  filterByTag: (tag: string): Recipe[] => {
    return recipes.filter((recipe) => recipe.tags.includes(tag));
  },

  // Rechercher par mot-clé
  searchRecipes: (query: string): Recipe[] => {
    const searchTerm = query.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
        recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(searchTerm),
        ),
    );
  },

  // Obtenir les recettes vedettes
  getFeaturedRecipes: (): Recipe[] => {
    return recipes.filter((recipe) => recipe.featured);
  },

  // Obtenir les recettes par saison
  getRecipesBySeason: (season: string): Recipe[] => {
    return recipes.filter(
      (recipe) =>
        recipe.season.includes(season) ||
        recipe.season.includes("Toutes saisons"),
    );
  },

  // Calculer le coût total d'une recette
  calculateTotalCost: (recipeId: string): string => {
    const recipe = recipes.find((r) => r.id === recipeId);
    if (!recipe || !recipe.costPerServing) return "N/A";

    const costPerServing = parseInt(
      recipe.costPerServing.replace(/[^0-9]/g, ""),
    );
    const totalCost = costPerServing * recipe.servings;

    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(totalCost);
  },

  // Obtenir les ingrédients provenant de la ferme
  getFarmIngredients: (recipeId: string): Ingredient[] => {
    const recipe = recipes.find((r) => r.id === recipeId);
    if (!recipe) return [];

    return recipe.ingredients.filter((ing) => ing.source === "ferme");
  },

  // Formater le temps de préparation
  formatTime: (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}min` : ""}`;
  },

  // Trier par difficulté
  sortByDifficulty: (): Recipe[] => {
    const difficultyOrder = { Facile: 1, Moyen: 2, Difficile: 3 };
    return [...recipes].sort(
      (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty],
    );
  },

  // Obtenir les recettes les mieux notées
  getTopRatedRecipes: (limit?: number): Recipe[] => {
    const sorted = [...recipes].sort((a, b) => b.rating - a.rating);
    return limit ? sorted.slice(0, limit) : sorted;
  },

  // Obtenir les recettes avec vidéo
  getRecipesWithVideo: (): Recipe[] => {
    return recipes.filter((recipe) => recipe.videoUrl);
  },
};

// ────────────────────────────────────────────────
// CATÉGORIES DISPONIBLES
// ────────────────────────────────────────────────

export const recipeCategories = [
  { id: "plats", name: "Plats principaux", count: 3, icon: "🍽️" },
  { id: "dejeuner", name: "Petit-déjeuner", count: 3, icon: "☕" },
  { id: "snacks", name: "Snacks", count: 2, icon: "🥨" },
  { id: "aperitifs", name: "Apéritifs", count: 1, icon: "🥂" },
  { id: "sauces", name: "Sauces & Condiments", count: 1, icon: "🍯" },
  { id: "accompagnements", name: "Accompagnements", count: 2, icon: "🥗" },
];

// ────────────────────────────────────────────────
// TAGS DISPONIBLES
// ────────────────────────────────────────────────

export const recipeTags = [
  {
    id: "vegetarien",
    name: "Végétarien",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "poule",
    name: "Poule",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "oeuf",
    name: "Oeuf",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "sans-gluten",
    name: "Sans gluten",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "proteines",
    name: "Riche en protéines",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "ecologique",
    name: "Écologique",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "rapide",
    name: "Rapide",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "vegan",
    name: "Végétalien",
    color: "bg-lime-100 text-lime-800",
  },
  {
    id: "durable",
    name: "Durable",
    color: "bg-teal-100 text-teal-800",
  },
  {
    id: "ferme",
    name: "Ingrédients de la ferme",
    color: "bg-amber-100 text-amber-800",
  },
];

// ────────────────────────────────────────────────
// MAPPING DES SAISONS
// ────────────────────────────────────────────────

export const seasons = [
  { id: "printemps", name: "Printemps", emoji: "🌸" },
  { id: "ete", name: "Été", emoji: "☀️" },
  { id: "automne", name: "Automne", emoji: "🍂" },
  { id: "hiver", name: "Hiver", emoji: "⛄" },
  { id: "toutes", name: "Toutes saisons", emoji: "🔄" },
];

// ────────────────────────────────────────────────
// IMAGES PAR DÉFAUT (fallback)
// ────────────────────────────────────────────────

export const defaultRecipeImages = {
  main: "/images/recettes/default-main.jpg",
  ingredient: "/images/recettes/default-ingredient.jpg",
  step: "/images/recettes/default-step.jpg",
  category: {
    plat: "/images/recettes/categories/plat.jpg",
    dessert: "/images/recettes/categories/dessert.jpg",
    petitDejeuner: "/images/recettes/categories/petit-dejeuner.jpg",
    snack: "/images/recettes/categories/snack.jpg",
  },
};

// Export par défaut
export default {
  recipes,
  recipeCategories,
  recipeTags,
  seasons,
  defaultRecipeImages,
  recipeUtils,
};
