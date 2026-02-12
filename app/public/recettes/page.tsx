// @/app/recettes/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Clock,
  Users,
  Star,
  ChefHat,
  Leaf,
  Droplet,
  Egg,
  Bug,
  Filter,
  ArrowRight,
  Calendar,
  Thermometer,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// Importation de vos données
import {
  recipes,
  recipeUtils,
  recipeCategories,
  recipeTags,
  seasons,
  type Recipe,
} from "./recettesData";

export default function RecettesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedSeason, setSelectedSeason] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");

  // Filtrer les recettes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        searchQuery === "" ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" ||
        recipe.category.some((cat) =>
          cat.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

      const matchesTag =
        selectedTag === "all" ||
        recipe.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase(),
        );

      const matchesSeason =
        selectedSeason === "all" ||
        recipe.season.includes(selectedSeason) ||
        (selectedSeason === "toutes" &&
          recipe.season.includes("Toutes saisons"));

      const matchesDifficulty =
        difficultyFilter === "all" ||
        recipe.difficulty.toLowerCase() === difficultyFilter.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesTag &&
        matchesSeason &&
        matchesDifficulty
      );
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedTag,
    selectedSeason,
    difficultyFilter,
  ]);

  // Obtenir l'icône pour la catégorie
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      "Plat principal": <ChefHat className="w-4 h-4" />,
      "Petit-déjeuner": <Thermometer className="w-4 h-4" />,
      Snack: <Leaf className="w-4 h-4" />,
      Apéritif: <Sparkles className="w-4 h-4" />,
      Sauce: <Droplet className="w-4 h-4" />,
      Accompagnement: <Egg className="w-4 h-4" />,
    };
    return icons[category] || <ChefHat className="w-4 h-4" />;
  };

  // Obtenir la couleur pour la difficulté
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Facile: "bg-green-100 text-green-800 border-green-200",
      Moyen: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Difficile: "bg-red-100 text-red-800 border-red-200",
    };
    return (
      colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  // Compter les ingrédients de la ferme
  const countFarmIngredients = (recipe: Recipe) => {
    return recipe.ingredients.filter((ing) => ing.source === "ferme").length;
  };

  // Mettre en forme la durée
  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h${mins > 0 ? ` ${mins}min` : ""}`;
  };

  // Obtenir la note en étoiles
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Statistiques
  const stats = {
    totalRecipes: recipes.length,
    farmIngredients: recipes.reduce(
      (acc, recipe) => acc + countFarmIngredients(recipe),
      0,
    ),
    averageRating: (
      recipes.reduce((acc, recipe) => acc + recipe.rating, 0) / recipes.length
    ).toFixed(1),
    featuredRecipes: recipes.filter((r) => r.featured).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mb-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <ChefHat className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Recettes de la Ferme
              </h1>
              <p className="text-emerald-100 mt-2">
                Des créations culinaires mettant en valeur nos productions
                locales
              </p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{stats.totalRecipes}</div>
              <div className="text-sm text-emerald-200">Recettes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{stats.farmIngredients}</div>
              <div className="text-sm text-emerald-200">
                Ingrédients fermiers
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{stats.averageRating}</div>
              <div className="text-sm text-emerald-200">Note moyenne</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">{stats.featuredRecipes}</div>
              <div className="text-sm text-emerald-200">Vedettes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtres et recherche */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-emerald-600" />
                <CardTitle>Rechercher & Filtrer</CardTitle>
              </div>
              <div className="text-sm text-gray-500">
                {filteredRecipes.length} recette
                {filteredRecipes.length !== 1 ? "s" : ""} trouvée
                {filteredRecipes.length !== 1 ? "s" : ""}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Barre de recherche */}
              <div className="lg:col-span-2">
                <label className="text-sm font-medium mb-2 block">
                  Recherche
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une recette, un ingrédient..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Filtre par catégorie */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Catégorie
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes catégories</SelectItem>
                    {recipeCategories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        <span className="flex items-center gap-2">
                          {cat.icon} {cat.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtre par tag */}
              <div>
                <label className="text-sm font-medium mb-2 block">Tag</label>
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous tags</SelectItem>
                    {recipeTags.map((tag) => (
                      <SelectItem key={tag.id} value={tag.id}>
                        <span
                          className={tag.color + " px-2 py-1 rounded text-xs"}
                        >
                          {tag.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtre par saison */}
              <div>
                <label className="text-sm font-medium mb-2 block">Saison</label>
                <Select
                  value={selectedSeason}
                  onValueChange={setSelectedSeason}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes saisons" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes saisons</SelectItem>
                    {seasons.map((season) => (
                      <SelectItem key={season.id} value={season.id}>
                        <span className="flex items-center gap-2">
                          {season.emoji} {season.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filtres supplémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Difficulté
                </label>
                <Select
                  value={difficultyFilter}
                  onValueChange={setDifficultyFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes difficultés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes difficultés</SelectItem>
                    <SelectItem value="facile">Facile</SelectItem>
                    <SelectItem value="moyen">Moyen</SelectItem>
                    <SelectItem value="difficile">Difficile</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedTag("all");
                    setSelectedSeason("all");
                    setDifficultyFilter("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>

              <div className="flex items-end">
                <Link href="/recettes/nouvelle" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <ChefHat className="w-4 h-4 mr-2" />
                    Proposer une recette
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onglets de navigation */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="featured">Vedettes</TabsTrigger>
            <TabsTrigger value="quick">Rapides</TabsTrigger>
            <TabsTrigger value="farm">100% Ferme</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes
                .filter((recipe) => recipe.featured)
                .map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="quick" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes
                .filter((recipe) => recipe.totalTime <= 30)
                .map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="farm" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes
                .filter((recipe) =>
                  recipe.ingredients.every((ing) => ing.source === "ferme"),
                )
                .map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Section recettes vedettes */}
        {recipeUtils.getFeaturedRecipes().length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                Recettes Vedettes
              </h2>
              <Link href="/recettes/featured">
                <Button variant="ghost" className="gap-2">
                  Voir toutes
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recipeUtils
                .getFeaturedRecipes()
                .slice(0, 2)
                .map((recipe) => (
                  <FeaturedRecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
          </div>
        )}

        {/* Section statistiques */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Statistiques des Recettes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700">
                  {
                    recipeUtils
                      .sortByDifficulty()
                      .filter((r) => r.difficulty === "Facile").length
                  }
                </div>
                <div className="text-sm text-gray-600">Recettes Faciles</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {recipes.reduce((acc, r) => acc + r.servings, 0)}
                </div>
                <div className="text-sm text-gray-600">Portions totales</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {Math.floor(
                    recipes.reduce((acc, r) => acc + r.totalTime, 0) /
                      recipes.length,
                  )}{" "}
                  min
                </div>
                <div className="text-sm text-gray-600">Temps moyen</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">
                  {
                    recipes.filter(
                      (r) => r.nutrition && r.nutrition.proteins > 20,
                    ).length
                  }
                </div>
                <div className="text-sm text-gray-600">Riches en protéines</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section catégories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Parcourir par Catégorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recipeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/recettes/categorie/${category.id}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow h-full text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="font-medium text-gray-800 group-hover:text-emerald-700">
                      {category.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {category.count} recette{category.count !== 1 ? "s" : ""}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Section saisons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-600" />
            Recettes de Saison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((season) => (
              <Card
                key={season.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">{season.emoji}</span>
                    {season.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-3">
                    {recipeUtils.getRecipesBySeason(season.id).length} recette
                    {recipeUtils.getRecipesBySeason(season.id).length !== 1
                      ? "s"
                      : ""}{" "}
                    disponible
                    {recipeUtils.getRecipesBySeason(season.id).length !== 1
                      ? "s"
                      : ""}
                  </div>
                  <Link href={`/recettes/saison/${season.id}`}>
                    <Button variant="outline" className="w-full">
                      Voir les recettes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Vous avez une recette à partager ?
                </h3>
                <p className="text-gray-600">
                  Contribuez à notre collection de recettes et faites découvrir
                  vos créations culinaires à base de produits de la ferme.
                </p>
              </div>
              <Link href="/recettes/nouvelle">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <ChefHat className="w-5 h-5 mr-2" />
                  Proposer une recette
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Composant Carte de Recette
function RecipeCard({ recipe }: { recipe: Recipe }) {
  const mainImage = recipeUtils.getMainImage(recipe);
  const farmIngredientsCount = countFarmIngredients(recipe);

  function countFarmIngredients(recipe: Recipe): number {
    return recipe.ingredients.filter((ing) => ing.source === "ferme").length;
  }

  return (
    <Link href={`/recettes/${recipe.id}`}>
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border-2 border-transparent hover:border-emerald-200">
        <CardHeader className="pb-3">
          {/* Badge vedette */}
          {recipe.featured && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-amber-500 hover:bg-amber-600">
                <Star className="w-3 h-3 mr-1" />
                Vedette
              </Badge>
            </div>
          )}

          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            {mainImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={mainImage.url}
                  alt={mainImage.alt || recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-emerald-300" />
              </div>
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Tags en overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
              {recipe.tags.slice(0, 2).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors line-clamp-1">
            {recipe.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {recipe.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipeUtils.formatTime(recipe.totalTime)}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {recipe.servings} pers.
            </div>
            <Badge className={getDifficultyColor(recipe.difficulty)}>
              {recipe.difficulty}
            </Badge>
          </div>

          {/* Ingrédients de la ferme */}
          {farmIngredientsCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-emerald-700 mb-3">
              <Leaf className="w-4 h-4" />
              <span>
                {farmIngredientsCount} ingrédient
                {farmIngredientsCount > 1 ? "s" : ""} de la ferme
              </span>
            </div>
          )}

          {/* Note */}
          {recipe.rating && (
            <div className="mb-3">{renderStars(recipe.rating)}</div>
          )}
        </CardContent>
        <CardFooter className="pt-3 border-t">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm font-medium text-emerald-700">
              {recipe.costPerServing || "Coût non spécifié"}
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="gap-1 group-hover:gap-2 transition-all"
            >
              Voir la recette
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

// Composant Carte Vedette (grand format)
function FeaturedRecipeCard({ recipe }: { recipe: Recipe }) {
  const mainImage = recipeUtils.getMainImage(recipe);

  return (
    <Link href={`/recettes/${recipe.id}`}>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image */}
          <div className="md:w-2/5 relative h-64 md:h-auto">
            {mainImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={mainImage.url}
                  alt={mainImage.alt || recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
                <ChefHat className="w-16 h-16 text-emerald-300" />
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge className="bg-amber-500 hover:bg-amber-600">
                <Sparkles className="w-3 h-3 mr-1" />
                Vedette
              </Badge>
            </div>
          </div>

          {/* Contenu */}
          <div className="md:w-3/5 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <CardTitle className="text-2xl mb-2 group-hover:text-emerald-700">
                  {recipe.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {recipe.subtitle}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(recipe.rating)}
              </div>
            </div>

            <p className="text-gray-600 mb-6 line-clamp-3">
              {recipe.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-500">Préparation</div>
                <div className="font-bold text-lg">{recipe.prepTime} min</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Portions</div>
                <div className="font-bold text-lg">{recipe.servings}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Coût</div>
                <div className="font-bold text-lg">{recipe.costPerServing}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.slice(0, 4).map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Découvrir la recette
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}

// Fonction pour obtenir la couleur de difficulté
function getDifficultyColor(difficulty: string): string {
  const colors = {
    Facile: "bg-green-100 text-green-800 hover:bg-green-100",
    Moyen: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    Difficile: "bg-red-100 text-red-800 hover:bg-red-100",
  };
  return (
    colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800"
  );
}

// Fonction pour afficher les étoiles
function renderStars(rating: number) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}
