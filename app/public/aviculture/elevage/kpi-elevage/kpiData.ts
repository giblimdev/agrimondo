// kpiData.ts
// Objectif: structurer l'affichage des KPI par catégorie (élevage au sol)

export type KpiFrequency = "quotidien" | "hebdo" | "mensuel" | "par_lot";

export type KpiItem = {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  formula?: string; // string lisible pour UI
  frequency?: KpiFrequency;
  notes?: string[];
};

export type KpiCategory = {
  id: string;
  title: string;
  description?: string;
  kpis: KpiItem[];
};

export const kpiCategories: KpiCategory[] = [
  {
    id: "production",
    title: "Production",
    description:
      "Indicateurs de volume et de dynamique de ponte (base du pilotage quotidien).",
    kpis: [
      {
        id: "hdep",
        name: "Taux de ponte Hen‑Day (HDEP)",
        unit: "%",
        frequency: "quotidien",
        formula: "(œufs_du_jour / poules_présentes) × 100",
        description:
          "Mesure la performance de ponte des poules présentes le jour J.",
        notes: ["À suivre aussi en moyenne hebdomadaire pour lisser les pics."],
      },
      {
        id: "hhep",
        name: "Taux de ponte Hen‑Housed (HHEP)",
        unit: "%",
        frequency: "hebdo",
        description:
          "Mesure la production en tenant compte des pertes (mortalité/réforme) depuis la mise en place.",
      },
      {
        id: "eggs_per_hen_housed",
        name: "Œufs / poule logée (cumul période)",
        unit: "œufs/poule_logée",
        frequency: "mensuel",
        description:
          "Cumul d’œufs rapporté aux poules logées au démarrage (utile pour comparer lots).",
      },
      {
        id: "persistency",
        name: "Persistance de ponte",
        unit: "%",
        frequency: "hebdo",
        description:
          "Capacité à maintenir un bon niveau de ponte après le pic (courbe de ponte).",
      },
      {
        id: "age_50",
        name: "Âge à 50% de ponte",
        unit: "jours",
        frequency: "par_lot",
        description:
          "Repère technique de démarrage de ponte (stimulation, conduite, poids, lumière).",
      },
    ],
  },

  {
    id: "egg_mass_calibre",
    title: "Masse d’œufs & calibre",
    description:
      "Indicateurs liés au poids d’œuf, à la valeur commerciale et aux comparaisons entre lots.",
    kpis: [
      {
        id: "avg_egg_weight",
        name: "Poids moyen de l’œuf",
        unit: "g",
        frequency: "hebdo",
        description:
          "Moyenne d’un échantillon représentatif (à heure/collecte comparable).",
      },
      {
        id: "egg_mass",
        name: "Masse d’œufs (Egg mass)",
        unit: "g/poule/j",
        frequency: "hebdo",
        formula: "HDEP(%) × poids_moyen_œuf(g)",
        description:
          "Indicateur plus robuste que le nombre d’œufs car il intègre le poids moyen.",
        notes: ["Formule usuelle: %HDEP × poids moyen (g)."],
      },
      {
        id: "size_distribution",
        name: "Répartition des calibres",
        unit: "% (S/M/L/XL)",
        frequency: "mensuel",
        description:
          "Part de chaque calibre selon ton standard commercial (impact direct sur prix moyen).",
      },
    ],
  },

  {
    id: "feed",
    title: "Aliment",
    description:
      "Le poste de coût principal: consommation et efficacité de conversion en œufs.",
    kpis: [
      {
        id: "feed_intake",
        name: "Consommation d’aliment",
        unit: "g/poule/j",
        frequency: "quotidien",
        description:
          "À suivre en tendance; une baisse précède souvent une baisse de ponte.",
      },
      {
        id: "fcr_egg_mass",
        name: "Indice de consommation (FCR / kg masse d’œufs)",
        unit: "kg/kg",
        frequency: "hebdo",
        formula: "kg_aliment / kg_œufs",
        description: "Efficacité alimentaire (plus bas = mieux).",
      },
      {
        id: "feed_per_dozen",
        name: "Aliment par douzaine",
        unit: "kg/douzaine",
        frequency: "hebdo",
        formula: "(kg_aliment × 12) / nombre_œufs",
        description: "Très parlant pour relier aliment ↔ production vendable.",
      },
    ],
  },

  {
    id: "quality_losses_floor",
    title: "Qualité & pertes (au sol)",
    description:
      "Au sol, la propreté et la casse deviennent des KPI majeurs (nids, litière, collecte).",
    kpis: [
      {
        id: "saleable_rate",
        name: "Œufs commercialisables",
        unit: "%",
        frequency: "quotidien",
        formula: "(œufs_vendables / œufs_totaux) × 100",
        description: "KPI business: ce qui peut réellement être vendu.",
      },
      {
        id: "dirty_eggs",
        name: "Œufs sales",
        unit: "%",
        frequency: "quotidien",
        formula: "(œufs_sales / œufs_totaux) × 100",
        description:
          "Très sensible à la litière, aux nids et à la fréquence de collecte.",
      },
      {
        id: "cracked_broken",
        name: "Œufs fêlés/cassés",
        unit: "%",
        frequency: "quotidien",
        formula: "((fêlés + cassés) / œufs_totaux) × 100",
        description:
          "À segmenter si possible: fêlés vs cassés (manipulation/transport interne).",
      },
      {
        id: "floor_eggs",
        name: "Œufs au sol (hors nid)",
        unit: "%",
        frequency: "quotidien",
        formula: "(œufs_hors_nid / œufs_totaux) × 100",
        description:
          "KPI spécifique au sol: reflète dressage au nid + design + gestion.",
      },
    ],
  },

  {
    id: "health_welfare",
    title: "Santé & bien‑être",
    description:
      "Suivi des pertes et alertes sanitaires (impact direct sur production et HHEP).",
    kpis: [
      {
        id: "mortality_daily",
        name: "Mortalité (jour/semaine) et cumulée",
        unit: "%",
        frequency: "quotidien",
        formula: "(morts / effectif) × 100",
        description:
          "À suivre en quotidien + cumul lot (et idéalement par cause).",
      },
      {
        id: "culling",
        name: "Taux de réforme (culling)",
        unit: "%",
        frequency: "hebdo",
        formula: "(réformes / effectif) × 100",
        description: "Sorties volontaires (à distinguer des morts).",
      },
      {
        id: "mortality_causes",
        name: "Répartition des causes de mortalité",
        unit: "% par cause",
        frequency: "mensuel",
        description:
          "Ex: picage/cannibalisme, infections, prédation, accidents, etc.",
      },
    ],
  },

  {
    id: "water_climate_litter",
    title: "Eau, climat, litière",
    description:
      "Indicateurs de prévention (confort, hygiène, stabilité) très corrélés aux pertes au sol.",
    kpis: [
      {
        id: "water_intake",
        name: "Consommation d’eau",
        unit: "ml/poule/j",
        frequency: "quotidien",
        description:
          "Indicateur sentinelle: chaleur, débit, santé digestive, salinité.",
      },
      {
        id: "water_feed_ratio",
        name: "Ratio eau/aliment",
        unit: "L/kg",
        frequency: "quotidien",
        description:
          "Détecte les anomalies (eau trop élevée/basse vs conso aliment).",
      },
      {
        id: "temperature_humidity",
        name: "Température & humidité",
        unit: "°C / %",
        frequency: "quotidien",
        description:
          "Explique souvent variations de consommation, ponte, qualité coquille.",
      },
      {
        id: "litter_score",
        name: "Score litière (humidité/croûtage/ammoniac)",
        unit: "score 1–5",
        frequency: "quotidien",
        description:
          "À noter par zone; impact direct sur œufs sales et santé des pattes/respiration.",
      },
      {
        id: "collection_frequency",
        name: "Fréquence de collecte",
        unit: "collectes/jour",
        frequency: "quotidien",
        description:
          "Plus la collecte est fréquente, plus on réduit sales/cassés.",
      },
    ],
  },

  {
    id: "flock_management",
    title: "Conduite du lot",
    description:
      "Qualité de croissance et homogénéité: base de la stabilité en production.",
    kpis: [
      {
        id: "body_weight",
        name: "Poids vif moyen",
        unit: "g ou kg",
        frequency: "hebdo",
        description: "Suivi hebdomadaire + comparaison à l’objectif de souche.",
      },
      {
        id: "uniformity",
        name: "Uniformité de poids",
        unit: "%",
        frequency: "hebdo",
        description:
          "% de poules dans ±10% du poids moyen (plus haut = plus homogène).",
      },
      {
        id: "stocking_density_resources",
        name: "Densité & accès ressources",
        unit: "poules/m², poules/nid, poules/abreuvoir",
        frequency: "par_lot",
        description:
          "KPI structurels: expliquent une grande part des problèmes (œufs au sol, stress, casse).",
      },
    ],
  },
];
