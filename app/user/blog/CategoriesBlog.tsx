"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { mockCategories, Category } from "./categories";

export default function CategoriesOverview() {
  // On ne prend que les catégories de niveau 1 (parentId = null ou undefined)
  const topCategories = mockCategories.filter((cat) => !cat.parentId);

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-extrabold mb-6">
        Vue d’ensemble des Catégories
      </h1>
      <p className="text-muted-foreground mb-8">
        Catégories principales et leurs sous-catégories
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCategories.map((cat) => (
          <div
            key={cat.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{cat.img || "📌"}</span>
                <span className="font-semibold text-lg">{cat.label}</span>
              </div>
              {cat.posts && cat.posts.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {cat.posts.length} article{cat.posts.length > 1 ? "s" : ""}
                </Badge>
              )}
            </div>

            {cat.children && cat.children.length > 0 && (
              <div className="space-y-2">
                {cat.children.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded-md text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span>{sub.img || "📌"}</span>
                      <span>{sub.label}</span>
                    </div>
                    {sub.posts && sub.posts.length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {sub.posts.length}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
