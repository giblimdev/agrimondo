//@/app/cultures/page.tsx

"use client";
import React, { useState } from "react";
import { cultures, Culture } from "./cultureData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Droplet,
  Leaf,
  Thermometer,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function CulturePage() {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"note" | "order" | "name">("note");

  const filtered =
    filter === "all" ? cultures : cultures.filter((c) => c.type === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "note") return (b.note || 0) - (a.note || 0);
    if (sortBy === "order") return (a.ordrer || 0) - (b.ordrer || 0);
    return a.nomFrancais.localeCompare(b.nomFrancais);
  });

  const typeColors: Record<string, string> = {
    legume: "bg-green-200 text-green-800",
    fruit: "bg-red-200 text-red-800",
    champignon: "bg-gray-200 text-gray-800",
    micropousse: "bg-yellow-200 text-yellow-800",
    fleur: "bg-pink-200 text-pink-800",
    "Herbe aromatique": "bg-lime-200 text-lime-800",
    arbre_et_arbustes: "bg-emerald-200 text-emerald-800",
  };

  const getNoteColor = (note?: number) => {
    if (!note) return "bg-gray-400 text-white";
    if (note >= 85) return "bg-green-500 text-white";
    if (note >= 70) return "bg-blue-500 text-white";
    if (note >= 55) return "bg-yellow-500 text-white";
    if (note >= 40) return "bg-gray-400 text-white";
    return "bg-red-500 text-white";
  };

  const getAdaptationBadge = (adaptation?: string) => {
    if (!adaptation) return null;
    const colors: Record<string, string> = {
      tres_bonne: "bg-green-100 text-green-800 border-green-300",
      bonne: "bg-blue-100 text-blue-800 border-blue-300",
      moyenne: "bg-yellow-100 text-yellow-800 border-yellow-300",
      faible: "bg-orange-100 text-orange-800 border-orange-300",
      mauvaise: "bg-red-100 text-red-800 border-red-300",
    };
    return (
      <Badge variant="outline" className={colors[adaptation] || ""}>
        {adaptation.replace(/_/g, " ")}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen mb-30">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Cultures - Popayán
        </h1>

        <div className="flex gap-2 items-center">
          <span className="text-sm text-slate-600">Trier par:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            <option value="note">Note (/100)</option>
            <option value="order">Ordre</option>
            <option value="name">Nom</option>
          </select>
        </div>
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes ({cultures.length})</TabsTrigger>
          <TabsTrigger value="legume">Légumes</TabsTrigger>
          <TabsTrigger value="fruit">Fruits</TabsTrigger>
          <TabsTrigger value="champignon">Champignons</TabsTrigger>
          <TabsTrigger value="micropousse">Micropousses</TabsTrigger>
          <TabsTrigger value="Herbe aromatique">Herbes</TabsTrigger>
          <TabsTrigger value="fleur">Fleurs</TabsTrigger>
          <TabsTrigger value="arbre_et_arbustes">Arbres/arbustes</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {sorted.map((culture: Culture) => (
            <Card
              key={culture.id}
              className="hover:shadow-xl transition-all duration-300 border-2"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
                      {culture.nomFrancais} <br />
                      {culture.ordrer}
                      {culture.note && (
                        <Badge
                          className={getNoteColor(culture.note)}
                          variant="default"
                        >
                          {culture.note}/100
                        </Badge>
                      )}
                    </CardTitle>
                    {culture.nomPopayan && (
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-600">
                        <MapPin size={12} />
                        <span className="italic">{culture.nomPopayan}</span>
                      </div>
                    )}
                  </div>
                  <Badge className={typeColors[culture.type] || "bg-gray-200"}>
                    {culture.type}
                  </Badge>
                </div>

                <CardDescription className="text-sm text-slate-600 mt-2">
                  {culture.nomScientifique}
                </CardDescription>

                {culture.adaptationPopayan?.adaptation && (
                  <div className="mt-2">
                    {getAdaptationBadge(culture.adaptationPopayan.adaptation)}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-3">
                <img
                  src={culture.image[0]}
                  alt={culture.nomFrancais}
                  className="w-full h-40 object-cover rounded-md shadow-sm"
                />

                <p className="text-sm text-slate-700 line-clamp-2">
                  {culture.presentation}
                </p>

                {/* Besoins climatiques */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="flex items-center gap-1">
                    <Sun size={14} className="text-yellow-600" />
                    {culture.besoins.climat.ensoleillement}
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplet size={14} className="text-blue-600" />
                    {culture.besoins.eau.niveau}
                  </span>
                  <span className="flex items-center gap-1">
                    <Thermometer size={14} className="text-red-600" />
                    {culture.besoins.climat.temperatureIdealeC.min}°C-
                    {culture.besoins.climat.temperatureIdealeC.max}°C
                  </span>
                  <span className="flex items-center gap-1">
                    <Leaf size={14} className="text-green-600" />
                    {culture.besoins.nutriments.exigenceGlobale}
                  </span>
                </div>

                {/* Rendement */}
                {culture.rendement && culture.rendement.valeur && (
                  <div className="bg-slate-100 p-2 rounded text-xs">
                    <div className="flex items-center gap-1 font-semibold">
                      <TrendingUp size={14} />
                      Rendement: {culture.rendement.valeur.min}-
                      {culture.rendement.valeur.max}{" "}
                      {culture.rendement.valeur.unit}
                    </div>
                    {culture.cycle && (
                      <div className="text-slate-600 mt-1">
                        Cycle: {culture.cycle.dureeCycleJours.min}-
                        {culture.cycle.dureeCycleJours.max} jours
                        {culture.cycle.nbCyclesAn && (
                          <>
                            ({culture.cycle.nbCyclesAn.min}-
                            {culture.cycle.nbCyclesAn.max} cycles/an)
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Pertinence */}
                {culture.pertiance && culture.pertiance.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs">
                    <p className="font-semibold text-blue-900 mb-1">
                      Pertinence Popayán:
                    </p>
                    <ul className="space-y-1 text-blue-800">
                      {culture.pertiance.slice(1, 4).map((p, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-600 mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {culture.difficulte && (
                    <Badge variant="outline" className="text-xs bg-purple-50">
                      {culture.difficulte}
                    </Badge>
                  )}
                  {culture.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <ul className="list-disc pl-6 space-y-1">
        <li>Valorisation des ressources locales et des circuits courts</li>
        <li>Réduction des coûts de transport et des pertes post-récolte</li>
        <li>Amélioration de la sécurité alimentaire</li>
        <li>Possibilité d’étendre la production toute l’année sous serre</li>
        <li>Production bio possible avec faible intrant chimique</li>
        <li>
          Rentabilité accrue sur les cultures à forte valeur ajoutée (herbes,
          fraises, tomates)
        </li>
        <li>Facilité de formation et d’intégration communautaire</li>
      </ul>
    </div>
  );
}
