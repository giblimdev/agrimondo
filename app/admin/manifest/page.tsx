import React from "react";
import { bstags, BsCategory } from "./bsData";

// Pour avoir un affichage lisible des noms de catégories
const categoryLabels: Record<BsCategory, string> = {
  vision: "Vision & Identité",
  spiritualite: "Spiritualité",
  culture: "Culture & Traditions",
  gouvernance: "Gouvernance",
  infrastructure: "Infrastructure",
  ecologie: "Écologie",
  economie: "Économie",
  social: "Social & Liens",
  sante: "Santé",
  dimensions: "Dimensions humaines",
};

// Couleurs selon le statut (draft / ok / todo)
const statusColor = {
  draft: "#f59e0b", // orange
  ok: "#10b981", // vert
  todo: "#6b7280", // gris
};

export default function Page() {
  // 1. Regrouper les tags par catégorie
  const grouped = bstags.reduce(
    (acc, tag) => {
      const cat = tag.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(tag);
      return acc;
    },
    {} as Record<BsCategory, typeof bstags>,
  );

  // 2. Trier les catégories (ordre alphabétique ou personnalisé)
  const sortedCategories = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b),
  ) as BsCategory[];

  // 3. Pour l'affichage des tags liés (related)
  const getRelatedLabels = (relatedIds: string[]) => {
    return relatedIds
      .map((id) => bstags.find((t) => t.id === id)?.label)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Manifeste EcoMondo — Tags
      </h1>

      {/* Légende des statuts */}
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
        {Object.entries(statusColor).map(([status, color]) => (
          <div
            key={status}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
            <span style={{ textTransform: "capitalize" }}>{status}</span>
          </div>
        ))}
      </div>

      {/* Parcours des catégories */}
      {sortedCategories.map((cat) => (
        <section
          key={cat}
          style={{
            marginBottom: "2.5rem",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#1f2937",
            }}
          >
            {categoryLabels[cat] || cat}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {grouped[cat]
              .sort((a, b) => a.order - b.order)
              .map((tag) => (
                <div
                  key={tag.id}
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "1rem",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  {/* En‑tête avec label et statut */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong style={{ fontSize: "1.1rem" }}>{tag.label}</strong>
                    <span>{tag.order}</span>
                    {tag.status && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          backgroundColor: statusColor[tag.status],
                          color: "white",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "12px",
                          fontWeight: 500,
                          textTransform: "uppercase",
                        }}
                      >
                        {tag.status}
                      </span>
                    )}
                  </div>

                  {/* Définition */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      marginBottom: "0.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {tag.definition}
                  </p>

                  {/* Mots‑clés */}
                  {tag.keywords.length > 0 && (
                    <div
                      style={{ marginBottom: "0.3rem", fontSize: "0.85rem" }}
                    >
                      <span style={{ fontWeight: 600, color: "#4b5563" }}>
                        Mots‑clés :
                      </span>{" "}
                      {tag.keywords.join(", ")}
                    </div>
                  )}

                  {/* Tags liés */}
                  {tag.related.length > 0 && (
                    <div style={{ fontSize: "0.85rem" }}>
                      <span style={{ fontWeight: 600, color: "#4b5563" }}>
                        Liens :
                      </span>{" "}
                      {getRelatedLabels(tag.related) || "—"}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      ))}

      {/* Placeholder pour le texte du manifeste */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2rem",
          backgroundColor: "#e0f2fe",
          border: "1px dashed #0284c7",
          borderRadius: "8px",
          textAlign: "center",
          color: "#075985",
        }}
      >
        <strong>Texte du manifeste à venir</strong>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
          Ici sera rédigé le manifeste complet.
        </p>
      </div>
    </div>
  );
}
