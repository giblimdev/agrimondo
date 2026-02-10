// @/data/recetteData.ts
// Dernière mise à jour : février 2026
//les image sont tout en .png
//les image sont dans /recettes
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
    tags: ["Végétarien", "Sans gluten", "Riche en protéines", "Rapide"],
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
        image: "/recettes/etapes/omelette-etape1.jpg",
      },
      {
        order: 2,
        description:
          "Faites chauffer l'huile dans une poêle antiadhésive à feu moyen.",
        duration: "1 min",
        tips: [
          "Utilisez une poêle bien chaude avant d'ajouter les ingrédients",
        ],
        image: "/recettes/etapes/omelette-etape2.jpg",
      },
      {
        order: 3,
        description:
          "Faites revenir l'oignon émincé et l'ail haché jusqu'à ce qu'ils soient translucides.",
        duration: "3 min",
        image: "/recettes/etapes/omelette-etape3.jpg",
      },
      {
        order: 4,
        description:
          "Ajoutez les champignons tranchés et faites-les cuire jusqu'à ce qu'ils soient dorés.",
        duration: "4 min",
        tips: [
          "Ne salez pas les champignons trop tôt pour éviter qu'ils rendent trop d'eau",
        ],
        image: "/recettes/etapes/omelette-etape4.jpg",
      },
      {
        order: 5,
        description:
          "Versez les œufs battus sur les légumes et laissez cuire à feu doux.",
        duration: "4 min",
        tips: ["Inclinez la poêle pour répartir uniformément les œufs"],
        image: "recettes/etapes/omelette-etape5.jpg",
      },
      {
        order: 6,
        description:
          "Ajoutez les micropousses et repliez l'omelette avant de servir.",
        duration: "1 min",
        image: "/recettes/etapes/omelette-etape6.jpg",
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
        url: "/recettes/omelette-ingredients.jpg",
        alt: "Ingrédients frais pour l'omelette : œufs, champignons, micropousses",
        caption: "Ingrédients 100% frais et locaux",
      },
      {
        url: "/recettes/omelette-cuisson.jpg",
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
  { id: "dejeuner", name: "Petit-déjeuner", count: 1, icon: "☕" },
  { id: "snacks", name: "Snacks", count: 2, icon: "🥨" },
  { id: "aperitifs", name: "Apéritifs", count: 1, icon: "🥂" },
  { id: "sauces", name: "Sauces & Condiments", count: 1, icon: "🍯" },
  { id: "accompagnements", name: "Accompagnements", count: 1, icon: "🥗" },
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
