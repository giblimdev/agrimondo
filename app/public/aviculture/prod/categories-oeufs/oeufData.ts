// oeufData.ts
// 1) Norme Colombie (NTC 1240) — avec équivalent UE indicatif (par poids)
// 2) Norme Europe (S / M / L / XL) — tableau séparé
//
// NB: diameterApproxCm = estimation indicative (largeur max/breadth), pas une valeur normative.

export type EuCode = "S" | "M" | "L" | "XL";

export type EggCaliberRow = {
  code: string;
  label: string;
  weightMinG?: number; // inclusif
  weightMaxG?: number; // inclusif
  diameterApproxCm?: number; // indicatif
  notes?: string[];

  // Info seulement (utile dans le tableau Colombie)
  euEquivalent?: EuCode[];
};

export type EggCaliberCategory = {
  id: "ue" | "colombie";
  title: string;
  subtitle?: string;
  rows: EggCaliberRow[];
};

const DIAMETER_METHOD_NOTE =
  "Diamètre = estimation indicative de la largeur maximale (breadth); varie selon la forme.";

export const oeufEurope: EggCaliberCategory = {
  id: "ue",
  title: "Calibres Européens (UE)",
  subtitle: `Classification par poids (S / M / L / XL). ${DIAMETER_METHOD_NOTE}`,
  rows: [
    {
      code: "XL",
      label: "Extra Large",
      weightMinG: 73,
      diameterApproxCm: 4.46,
      notes: ["UE: ≥ 73 g."], // [web:218]
    },
    {
      code: "L",
      label: "Large",
      weightMinG: 63,
      weightMaxG: 72.99,
      diameterApproxCm: 4.34,
      notes: ["UE: 63 g à < 73 g."], // [web:218]
    },
    {
      code: "M",
      label: "Medium",
      weightMinG: 53,
      weightMaxG: 62.99,
      diameterApproxCm: 4.18,
      notes: ["UE: 53 g à < 63 g."], // [web:218]
    },

    {
      code: "S",
      label: "Small",
      weightMaxG: 52.99,
      diameterApproxCm: 4.02,
      notes: ["UE: < 53 g. (Bandes: jusqu’à 52,99 g)"], // seuil UE [web:218]
    },
  ],
};

export const oeufColombie: EggCaliberCategory = {
  id: "colombie",
  title: "Calibres Colombie (NTC 1240)",
  subtitle: `Classification par poids selon la Norma Técnica Colombiana NTC 1240 (à partir du 01/02/2012). ${DIAMETER_METHOD_NOTE}`,
  rows: [
    {
      code: "Jumbo",
      label: "Jumbo",
      weightMinG: 78.01,
      diameterApproxCm: 4.52,
      euEquivalent: ["XL"],
      notes: ["NTC 1240: > 78,0 g"],
    },
    {
      code: "AAA",
      label: "AAA",
      weightMinG: 67,
      weightMaxG: 77.0,
      diameterApproxCm: 4.42,
      euEquivalent: ["L", "XL"], // chevauchement avec L (63-73) et XL (73+)
    },
    {
      code: "AA",
      label: "AA",
      weightMinG: 60,
      weightMaxG: 66.9,
      diameterApproxCm: 4.28,
      euEquivalent: ["M", "L"], // chevauchement avec M (53-63) et L (63-73)
    },
    {
      code: "A",
      label: "A",
      weightMinG: 53,
      weightMaxG: 59.9,
      diameterApproxCm: 4.16,
      euEquivalent: ["M"], // correspond à M (53-63)
    },
    {
      code: "B",
      label: "B",
      weightMinG: 46,
      weightMaxG: 52.9,
      diameterApproxCm: 4.0,
      euEquivalent: ["S"], // correspond à S (moins de 53)
    },
    {
      code: "C",
      label: "C",
      weightMaxG: 45.99,
      diameterApproxCm: 3.92,
      euEquivalent: ["S"], // correspond à S (moins de 53)
      notes: ["NTC 1240: < 46,0 g"],
    },
  ],
};

// Optionnel: si tu veux quand même une liste "catégories" pour des pages génériques
export const oeufCategories: EggCaliberCategory[] = [oeufColombie, oeufEurope];
