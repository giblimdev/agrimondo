//@/app/cultures/cultureData.ts


export type UUID = string; // ou branded type si tu veux être strict

export type CultureType =
  | "arbre_et_arbustes"
  | "legume"
  | "legume-feuille"
  | "Herbe aromatique"
  | "fruit"
  | "fleur"
  | "champignon"
  | "micropousse";

export type Difficulty = "facile" | "moyenne" | "difficile";

export type CultureTechnique =
  | "plein_champ"
  | "pleine_terre"
  | "bac_exterieur"
  | "bac_sous_serre"
  | "hydroponie";

export type SunExposure =
  | "plein_soleil"
  | "mi_ombre"
  | "ombre"
  | "variable";

export type SoilMoisture = "sec" | "frais" | "humide" | "tres_humide";

export type AdaptationLevel =
  | "excellente"
  | "tres_bonne"
  | "bonne"
  | "moyenne"
  | "faible";

export type Unit = "kg" | "g" | "botte" | "piece" | "plateau" | "plant";
export type NutrientLevel = "faible" | "moyen" | "eleve";

export type CultureAssociation = {
  compatible: string[]; // ids ou noms (id recommandé)
  aEviter: string[];
  notes?: string;
};

export type Range = {
  min: number;
  max: number;
  unit: string; // ex: "°C", "pH", "L/sem/m²"
};

export type YieldInfo = {
  valeur?: Range; // ex: 2-4 kg/m², ou 4-6 kg/plant
  unite: "kg_m2" | "kg_plant" | "piece_m2" | "botte_m2" |"piece_plant";
  rendementAnnuelEstime?: Range; // optionnel
  conditions?: string; // "sous serre ventilée", etc.
};

export type WaterNeeds = {
  niveau: "faible" | "moyen" | "eleve";
  estimation?: Range; // ex: 10–25 L/sem/m²
  strategie?: string; // goutte-à-goutte, fréquence, etc.
};

export type ClimateNeeds = {
  temperatureIdealeC: Range;
  humiditeRelativePct?: Range;
  ensoleillement: SunExposure;
  luminosite?: "faible" | "moyenne" | "forte";
};

export type SoilNeeds = {
  typeSol: string; // limoneux, sableux, riche en MO, etc.
  humiditeSol: SoilMoisture;
  drainage?: "faible" | "moyen" | "bon" | "tres_bon";
  pH: Range; // ex: 6.0-6.8
};

export type NutrientNeeds = {
  exigenceGlobale: NutrientLevel;
  notes?: string; // NPK par stade, carences fréquentes
};

export type CultureCycle = {
  dureeCycleJours: Range; // ex: 30-45 j
  nbCyclesAn?: Range; // ex: 6-8
  saisonnalite?: string; // mois recommandés à Popayán
  dureeRecolteJours?: Range; // fenêtre de récolte
};

export type HowToCulture = {
  resume: string; // 2-5 lignes
  etapes: string[]; // semis, repiquage, etc.
  densite?: string; // ex: "25-35 plants/m²" (ou mets en champs dédiés)
  entretien?: string[]; // taille, palissage, paillage, etc.
  recolte?: string[]; // indices de maturité
  postRecolte?: string[]; // conservation, tri, etc.
};

export type MarketInfo = {
  prixVente: {
    min: number;
    max: number;
    unit: Unit; // kg, botte, etc.
    currency: "COP" | "USD" | "EUR";
  };
  debouches?: Array<"marche" | "restaurants" | "paniers" | "grossiste" | "transformation">;
  notes?: string; // saison de prix haut/bas
};

export type PopayanFit = {
  adaptation: AdaptationLevel;
  justification: string; // 2-4 lignes (pluie, température, maladies, etc.)
  recommandations: string[]; // serre, drainage, variétés, etc.
};

export type Culture = {
  id: string; // UUID ou slug unique0
note: number;
  type: CultureType;
  ordrer : number; // pour trier dans l'UI
  image : string[]; // URL ou chemin local
  nomFrancais: string;
  nomPopayan?: string; // nom local / espagnol / vernaculaire
  nomScientifique: string;
  familleBotanique: string;

  presentation: string; // taille, description générale
  difficulte: Difficulty;

  adaptationPopayan: PopayanFit;

  techniques: CultureTechnique[]; // ex: ["micropousse","bac_sous_serre","plein_champ"]

  cycle: CultureCycle;

  rendement: YieldInfo;

  besoins: {
    eau: WaterNeeds;
    climat: ClimateNeeds;
    sol: SoilNeeds;
    nutriments: NutrientNeeds;
  };

  associationCulture: CultureAssociation;

  howToCulture: HowToCulture;
pertiance: string[]; //
  tags?: string[]; // ex: ["mellifere","premium","transformation"]
  sources?: string[]; // URLs, livres, notes terrain
};


export const cultures: Culture[] = [
  // A. Micropousses (Microgreens)
  
    // 1) RADIS (mix variétés)
  {
    id: "micro-radis-mix",
    note: 87,
    type: "micropousse",
    ordrer: 1,
    image: ["/cultures/micro-radis-mix.png"],
    nomFrancais: "Radis (rouge, daikon, wasabi, noir) — micro-pousses",
    nomPopayan: "Rábano (microverde) — mix",
    nomScientifique: "Raphanus sativus",
    familleBotanique: "Brassicaceae",
    presentation:
      "Micro-pousse très rapide, goût piquant, couleur et intensité variables selon variétés (rouge/daikon/noir/wasabi).",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification:
        "Très adaptable car cycle court; le principal risque local est l’excès d’humidité (moisissures/fonte des semis) si faible ventilation.",
      recommandations: ["Ventilation forte", "Arrosage par le bas si possible", "Hygiène plateaux et eau propre"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 7, max: 9, unit: "jours" }, // seed → harvest
      nbCyclesAn: { min: 20, max: 40, unit: "cycles/an" },
      saisonnalite: "Toute l’année; en saison très pluvieuse, préférer abri + ventilation.",
      dureeRecolteJours: { min: 2, max: 5, unit: "jours" },
    },
    rendement: {
      unite: "botte_m2",
      valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" },
      conditions:
        "Repère pro: ~420 g cible par plateau 1020 (variable) et souvent ~340–500 g/plateau selon conduite.",
    },
    besoins: {
      eau: {
        niveau: "moyen",
        strategie: "Brumisation fine jusqu’à levée, puis arrosage bas; éviter saturation.",
      },
      climat: {
        temperatureIdealeC: { min: 18, max: 24, unit: "°C" },
        humiditeRelativePct: { min: 50, max: 75, unit: "%" },
        ensoleillement: "variable",
        luminosite: "forte",
      },
      sol: {
        typeSol: "Substrat fin (coco/terreau semis) ou tapis hydro",
        humiditeSol: "frais",
        drainage: "bon",
        pH: { min: 6.0, max: 7.0, unit: "pH" },
      },
      nutriments: {
        exigenceGlobale: "faible",
        notes: "Souvent sans fertilisation en cycle court; possible faible EC en hydro après levée.",
      },
    },
    associationCulture: { compatible: [], aEviter: [], notes: "Rotation + hygiène > associations en microgreens." },
    howToCulture: {
      resume: "Semis dense, blackout court, lumière forte, récolte à 7–9 jours.",
      etapes: ["Préparer plateau + substrat", "Semer dense", "Blackout 2–3 jours", "Lumière + ventilation", "Récolter"],
      densite: "Plateau 1020: semis dense (à standardiser par g/plateau selon tes lots).",
      entretien: ["Ventiler", "Arroser bas", "Retirer zones qui moisissent"],
      recolte: ["Couper à 2–5 cm au-dessus du substrat quand cotylédons bien ouverts"],
          postRecolte: ["Sécher surface (pas mouillé)", "Boîte fermée; froid si disponible"],
    },
    pertiance: [
        "Très adapté climat frais humide", 
        "marché important", 
        "rotation rapide 7-9j", 
        "risque moisissures si ventilation faible"],
    tags: ["« Très adapté climat frais humide, marché important, rotation rapide 7-9j, risque moisissures si ventilation faible »"],
    sources: ["https://paperpot.co/how-to-grow-radish-microgreens-in-paperpot-trays/", "https://urbanfarming.com/radish-microgreens/"],
  },

  // 2) MOUTARDE
  {
    id: "micro-moutarde-mix",
    note: 85,      
    type: "micropousse",
    ordrer: 2,
    image: ["/cultures/micro-moutarde-mix.png"],
    nomFrancais: "Moutarde (rouge, jaune, verte) — micro-pousses",
    nomPopayan: "Mostaza (microverde) — mix",
    nomScientifique: "Brassica juncea (souvent) / Sinapis alba (selon variété)",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse piquante, très aromatique, couleur variable (rouge/vert).",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification:
        "Très productive; surveiller l’humidité et la densité (risque moisissure si trop serré).",
      recommandations: ["Ventilation", "Densité maîtrisée", "Récolter avant vraies feuilles pour texture/goût"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 8, max: 12, unit: "jours" },
      nbCyclesAn: { min: 15, max: 35, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 2, max: 6, unit: "jours" },
    },
    rendement: {
      unite: "botte_m2",
      valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" },
      conditions: "Très variable selon densité et variété.",
    },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide mais jamais détrempé; préférer arrosage bas après levée." },
      climat: {
        temperatureIdealeC: { min: 18, max: 24, unit: "°C" },
        humiditeRelativePct: { min: 50, max: 80, unit: "%" },
        ensoleillement: "variable",
        luminosite: "forte",
      },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [], notes: "En microgreens, surtout hygiène + rotation." },
    howToCulture: {
      resume: "Semis dense mais aéré, lumière forte, récolte vers 8–12 jours.",
      etapes: ["Semis", "Blackout court", "Lumière + ventilation", "Récolte"],
      entretien: ["Surveiller moisissure", "Éviter sur-arrosage"],
      recolte: ["Récolter quand cotylédons bien ouverts; avant texture fibreuse/vraies feuilles trop avancées"],
    }, pertiance: ["Très productif, goût fort apprécié, gérer densité-humidité, 8-12j cycle ",

        "restaurants_gastronomiques // Piquant, couleur, fraîcheur = forte valeur ajoutée",
  "paniers_premium // Produit signature microgreens; éduque clientèle",
  "marché_local                // Volume possible si rotation optimisée"
    ],
    tags: ["microgreens", "piquant"],
    sources: ["https://www.farmeryou.com/post/grow-guide-pungent-quick-mustard-microgreens"],
  },

  // 3) MIX BRASSICACÉES (kale/brocoli/choux)
  {
    id: "micro-brassica-mix",
    note: 83,      
    type: "micropousse",
    ordrer: 3,
    image: ["/cultures/brassica-microgreens.png"],
    nomFrancais: "Chou kale / Brocoli / Chou rouge / Chou chinois — micro-pousses",
    nomPopayan: "Brássicas (microverdes) — mix",
    nomScientifique: "Brassica oleracea / Brassica rapa (selon espèces)",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousses douces à légèrement piquantes; très utilisées en mix salade premium.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court et robuste; risques principaux: densité + humidité (moisissures).",
      recommandations: ["Ventilation", "Arrosage bas", "Récolte avant vraies feuilles trop développées"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 8, max: 14, unit: "jours" },
      nbCyclesAn: { min: 15, max: 30, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 7, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humidité régulière; attention excès." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Semer dense, blackout 2–4 jours, lumière forte, récolter 8–14 jours.",
      etapes: ["Semis", "Blackout", "Lumière", "Récolte"],
    }, pertiance: ["Brassicacées robustes, climat adapté, 8-14j, ventilation critique "],
    tags: ["microgreens", "mix"],
    sources: [],
  },

  // 4) ROQUETTE
  {
    id: "micro-roquette",
    note: 81,  
    type: "micropousse",
    ordrer: 4,
    image: ["/cultures/roquette-microgreens.png"],
    nomFrancais: "Roquette (rucola) — micro-pousses",
    nomPopayan: "Rúcula (microverde)",
    nomScientifique: "Eruca sativa",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse aromatique, poivrée, très appréciée en restauration.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Bonne production; surveiller stress hydrique (goût trop fort) et humidité (maladies).",
      recommandations: ["Arrosage régulier", "Ventilation", "Récolte jeune pour douceur"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 10, max: 16, unit: "jours" }, nbCyclesAn: { min: 12, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 20, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Maintenir frais; éviter dessèchement du plateau." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Cycle 10–16 j, récolte jeune pour qualité.", etapes: ["Semis", "Blackout court", "Lumière", "Récolte"] },
pertiance: [" Bon marché restaurants, surveiller stress hydrique, 10-16j "],    tags: ["microgreens", "restaurants"],
    sources: [],
  },

  // 5) BETTERAVE
  {
    id: "micro-betterave-mix",
    note: 79,
    type: "micropousse",
    ordrer: 5,
    image: ["/cultures/betterave-microgreens.png"],
    nomFrancais: "Betterave (rouge + chioggia) — micro-pousses",
    nomPopayan: "Remolacha (microverde)",
    nomScientifique: "Beta vulgaris",
    familleBotanique: "Amaranthaceae",
    presentation: "Micro-pousse colorée (tiges rouges possibles), plus lente que les brassicacées.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "OK sous abri; attention à sur-humidité et à la lenteur (risque algues/moisissures si mal géré).",
      recommandations: ["Ventilation", "Substrat bien drainant", "Lumière forte après levée"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 12, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 20, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 4, max: 10, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 6, max: 18, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter eau stagnante (algues)." },
      climat: { temperatureIdealeC: { min: 18, max: 26, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Plus lent; viser qualité couleur, hygiène stricte.", etapes: ["Semis", "Blackout léger", "Lumière + ventilation", "Récolte"] },
pertiance: ["Couleur attractive, plus lent 12-21j, risque algues cycle long"],    tags: ["microgreens", "couleur"],
    sources: [],
  },

  // 6) TOURNESOL
  {
    id: "micro-tournesols",
    note: 80,
    type: "micropousse",
    ordrer: 6,
    image: ["/cultures/tournesol-microgreens.png"],
    nomFrancais: "Tournesol — micro-pousses",
    nomPopayan: "Girasol (microverde)",
    nomScientifique: "Helianthus annuus",
    familleBotanique: "Asteraceae",
    presentation: "Micro-pousse épaisse et croquante; nécessite souvent trempage et bon rinçage des graines.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Productif; attention aux graines mal rincées/surémpées (moisissures, odeurs).",
      recommandations: ["Trempage contrôlé", "Rinçage/égouttage", "Ventilation + arrosage bas"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: { dureeCycleJours: { min: 8, max: 14, unit: "jours" }, nbCyclesAn: { min: 12, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" }, conditions: "Souvent très lourd en biomasse vs brassicas." },
    besoins: {
      eau: { niveau: "moyen", strategie: "Après germination, arroser bas; éviter mouillage prolongé des coques." },
      climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat drainant", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Tremper (optionnel selon graines), semer, blackout, lumière, récolte 8–14 j.",
      etapes: ["Trempage (si besoin)", "Semis", "Blackout + poids", "Lumière", "Récolte"],
      entretien: ["Rincer si odeur", "Ventiler fort"],
    },
    pertiance: [" Biomasse élevée, trempage/rinçage critique, 8-14j, texture croquante"],   
    tags: ["microgreens", "croquant"],
    sources: [],
  },

  // 7) POIS (pea shoots)
  {
    id: "micro-pois-shoots",
note: 80,
    type: "micropousse",
    ordrer: 7,
    image: ["/cultures/pois-microgreens.png"],
    nomFrancais: "Pois (mange-tout / tendres / sucrés) — pousses",
    nomPopayan: "Arveja (brotes)",
    nomScientifique: "Pisum sativum",
    familleBotanique: "Fabaceae",
    presentation: "Pousses épaisses, sucrées; souvent semées très dense, blackout plus long.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Bonne production sous abri; attention à l’excès d’eau (pourritures) et au manque de lumière (étiolement).",
      recommandations: ["Blackout + poids (pour enracinement)", "Arrosage bas", "Lumière forte après sortie"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 9, max: 14, unit: "jours" },
      nbCyclesAn: { min: 12, max: 25, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 8, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 22, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Maintenir humide; éviter détrempé; arrosage bas recommandé." },
      climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat assez épais, drainant", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Trempage souvent utilisé, blackout plus long, récolte à 9–14 jours.",
      etapes: ["Trempage (souvent 8–12 h)", "Semis dense", "Blackout + poids (5–7 j)", "Lumière (2–7 j)", "Récolte"],
      entretien: ["Ventiler", "Éviter odeurs (sur-humidité)"],
      recolte: ["Couper au-dessus du substrat quand 10–20 cm selon marché"],
    },     pertiance: ["Sucrés populaires, 9-14j, blackout+poids, bon rendement"],
    tags: ["microgreens", "sucre", "restaurants"],
    sources: ["https://www.growsowgreener.co.uk/blogs/news/how-to-grow-pea-shoot-microgreens-a-complete-guide"],
  },

  // 8) CORIANDRE (micro-pousse)
  {
    id: "micro-coriandre",
note: 78,
    type: "micropousse",
    ordrer: 8,
    image: ["/cultures/coriandre-microgreens.png"],
    nomFrancais: "Coriandre — micro-pousses",
    nomPopayan: "Cilantro (microverde)",
    nomScientifique: "Coriandrum sativum",
    familleBotanique: "Apiaceae",
    presentation: "Micro-pousse très demandée, mais germination plus lente et irrégulière; valeur élevée en resto.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Faisable sous abri; le défi est surtout technique (germination lente) + risques d’humidité.",
      recommandations: ["Pré-germination/soak adapté", "Substrat propre", "Ventilation", "Patience sur cycle"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 14, max: 25, unit: "jours" },
      nbCyclesAn: { min: 8, max: 18, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri; planifier rotation car cycle long.",
      dureeRecolteJours: { min: 4, max: 10, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 5, max: 15, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation (cycle long = risque algues/moisissures)." },
      climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin, très propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Plus lente: travailler la germination, garder aéré, récolter jeune pour arôme.",
      etapes: ["Préparation/graines (selon méthode)", "Semis", "Blackout plus long", "Lumière + ventilation", "Récolte"],
      entretien: ["Hygiène stricte", "Surveiller algues/moisissures (cycle long)"],
    },     pertiance: [" Essentiel cuisine colombienne mais technique difficile, 14-25j, germination lente"],
    tags: ["microgreens", "restaurants", "premium"],
    sources: ["https://www.growsowgreener.co.uk/blogs/news/how-to-grow-pea-shoot-microgreens-a-complete-guide"],
  },
    // 9) BASILIC (génois)
  {
    id: "micro-basilic-genois",
note: 75,
    type: "micropousse",
    ordrer: 9,
    image: ["/cultures/basilic-genois-microgreens.png"],
    nomFrancais: "Basilic (génois) — micro-pousses",
    nomPopayan: "Albahaca genovesa (microverde)",
    nomScientifique: "Ocimum basilicum",
    familleBotanique: "Lamiaceae",
    presentation:
      "Micro-pousse aromatique premium; croissance souvent plus lente et plus délicate que les brassicacées.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification:
        "Faisable sous abri; sensible à l’excès d’humidité et à la manipulation (post-récolte courte).",
      recommandations: ["Ventilation", "Arrosage bas", "Récolter et vendre très frais (qualité resto)"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 10, max: 21, unit: "jours" },
      nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 8, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation et arrosage sur feuillage." },
      climat: {
        temperatureIdealeC: { min: 20, max: 28, unit: "°C" },
        humiditeRelativePct: { min: 50, max: 80, unit: "%" },
        ensoleillement: "variable",
        luminosite: "forte",
      },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible", notes: "Généralement faible apport; attention excès d’eau = fonte." },
    },
    associationCulture: { compatible: [], aEviter: [], notes: "Microgreens: priorité hygiène/rotation." },
    howToCulture: {
      resume: "Plus lent; semis fin, bonne lumière, ventilation, récolte quand parfum maximal.",
      etapes: ["Semis", "Blackout court (option)", "Lumière + ventilation", "Récolte"],
      entretien: ["Éviter condensation", "Manipuler doucement"],
      postRecolte: ["Sécher parfaitement avant emballage; durée de conservation courte."],
    },     pertiance: ["Premium restaurants, délicat humidité, 10-21j, conservation courte"],
    tags: ["microgreens", "premium", "restaurants"],
    sources: ["https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet"],
  },

  // 10) BASILIC (thaï)
  {
    id: "micro-basilic-thai",
note: 76,
    type: "micropousse",
    ordrer: 10,
    image: ["/cultures/basilic-thai-microgreens.png"],
    nomFrancais: "Basilic (thaï) — micro-pousses",
    nomPopayan: "Albahaca tailandesa (microverde)",
    nomScientifique: "Ocimum basilicum (Thai basil cultivars)",
    familleBotanique: "Lamiaceae",
    presentation: "Micro-pousse aromatique (notes anisées/épices), très demandée en cuisine asiatique.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Même contraintes que basilic: délicat, sensible humidité, valeur élevée si qualité stable.",
      recommandations: ["Ventilation", "Arrosage bas", "Standardiser durée de culture par marché"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 8, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier, jamais détrempé." },
      climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Même itinéraire que génois, ajuster durée selon taille demandée.", etapes: ["Semis", "Lumière + ventilation", "Récolte"] },
        pertiance: ["Cuisine asiatique, notes anisées, même contraintes génois "], tags: ["microgreens", "premium"],
    sources: ["https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet"],
  },

  // 11) BASILIC (pourpre / dark opal)
  {
    id: "micro-basilic-pourpre",
note: 74,
    type: "micropousse",
    ordrer: 11,
    image: ["/cultures/basilic-pourpre-microgreens.png"],
    nomFrancais: "Basilic (pourpre) — micro-pousses",
    nomPopayan: "Albahaca morada (microverde)",
    nomScientifique: "Ocimum basilicum (Dark Opal/Purple cultivars)",
    familleBotanique: "Lamiaceae",
    presentation: "Micro-pousse colorée (pourpre), très premium pour dressage.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Même contraintes basilic; valeur ajoutée par couleur, mais stabilité de lot importante.",
      recommandations: ["Lumière forte pour couleur", "Ventilation", "Récolte rapide + chaîne du froid si possible"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 8, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Arrosage bas; éviter condensation." },
      climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Chercher couleur + parfum: lumière forte, lots propres, récolte jeune.", etapes: ["Semis", "Lumière forte", "Récolte"] },
        pertiance: [" Couleur premium, lumière forte nécessaire, très délicat"], tags: ["microgreens", "premium", "couleur"],
    sources: ["https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet"],
  },

  // 12) BASILIC (citron)
  {
    id: "micro-basilic-citron",
note: 75,
    type: "micropousse",
    ordrer: 12,
    image: ["/cultures/basilic-citron-microgreens.png"],
    nomFrancais: "Basilic (citron) — micro-pousses",
    nomPopayan: "Albahaca limón (microverde)",
    nomScientifique: "Ocimum × citriodorum (souvent) / Ocimum basilicum (selon semencier)",
    familleBotanique: "Lamiaceae",
    presentation: "Micro-pousse aromatique (notes citronnées), appréciée en mix premium.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Conduite similaire au basilic; le plus difficile est d’avoir un produit régulier et très frais.",
      recommandations: ["Ventilation", "Récolte proche livraison", "Standardiser densité + jours"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 8, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation." },
      climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Comme basilic; viser parfum, pas taille excessive.", etapes: ["Semis", "Lumière + ventilation", "Récolte"] },
    pertiance: ["Arôme citronné, marché niche gastronomique "],    tags: ["microgreens", "premium"],
    sources: ["https://www.bootstrapfarmer.com/blogs/microgreens/the-ultimate-microgreen-cheat-sheet"],
  },

  // 13) FENOUIL
  {
    id: "micro-fenouil",
    note: 77,
    type: "micropousse",
    ordrer: 13,
    image: ["/cultures/fenouil-microgreens.png"],
    nomFrancais: "Fenouil — micro-pousses",
    nomPopayan: "Hinojo (microverde)",
    nomScientifique: "Foeniculum vulgare",
    familleBotanique: "Apiaceae",
    presentation: "Micro-pousse fine, parfum anisé; cycle moyen à long selon variété et taille demandée.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Faisable sous abri; attention aux problèmes de densité + humidité (fonte) typiques des microgreens.",
      recommandations: ["Ventilation", "Arrosage bas", "Ne pas trop densifier"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 10, max: 25, unit: "jours" },
      nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 4, max: 10, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 5, max: 15, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Fenouil: récolte variable (10–15 j rapide, 16–25 j lent) selon variété et taille.",
      etapes: ["Semis", "Blackout court", "Lumière + ventilation", "Récolte"],
    },
        pertiance: [" Parfum anisé, 10-25j selon taille, gérer densité "],
    tags: ["microgreens", "restaurants", "anis"],
    sources: ["https://www.johnnyseeds.com/vegetables/microgreens/microgreen-herbs/fennel-green-microgreen-seed-3152M.26.html"],
  },

  // 14) LUZERNE (ALFALFA)
  {
    id: "micro-luzerne-alfalfa",
    note: 80,
    type: "micropousse",
    ordrer: 14,
    image: ["/cultures/luzerne-microgreens.png"],
    nomFrancais: "Luzerne (alfalfa) — micro-pousses",
    nomPopayan: "Alfalfa (microverde)",
    nomScientifique: "Medicago sativa",
    familleBotanique: "Fabaceae",
    presentation: "Micro-pousse douce, très connue; croissance rapide, plutôt tolérante si hygiène correcte.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court et robuste; attention aux contaminations et à l’humidité excessive (damping-off).",
      recommandations: ["Hygiène stricte", "Ventilation", "Arrosage bas"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 7, max: 11, unit: "jours" },
      nbCyclesAn: { min: 20, max: 45, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 2, max: 6, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation du substrat." },
      climat: { temperatureIdealeC: { min: 18, max: 26, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre / tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Alfalfa: très rapide, récolte souvent autour de 7–11 jours si bien conduite.",
      etapes: ["Rinçage/soak (optionnel)", "Semis", "Blackout court", "Lumière + ventilation", "Récolte"],
      entretien: ["Éviter odeurs = signe sur-humidité", "Ventiler"],
    },
  pertiance: ["Rapide 7-11j, robuste, hygiène stricte, goût doux "],
    tags: ["microgreens", "rapide"],
    sources: ["https://www.growsowgreener.co.uk/blogs/news/alfalfa-microgreen-grow-guide"],
  },
   // 15 ÉPINARD
  {
    id: "micro-epinard",
    note: 75,
    type: "micropousse",
    ordrer: 15,
    image: ["/cultures/epinard-microgreens.png"],
    nomFrancais: "Épinard — micro-pousses",
    nomPopayan: "Espinaca (microverde)",
    nomScientifique: "Spinacia oleracea",
    familleBotanique: "Amaranthaceae",
    presentation: "Micro-pousse verte, goût doux; généralement plus lente et plus capricieuse en germination.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Faisable sous abri; le point critique est la germination (lente/irrégulière) + humidité.",
      recommandations: ["Ventilation", "Hygiène plateau", "Standardiser pré-trempage si tu l’utilises"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 10, max: 15, unit: "jours" },
      nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 8, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation prolongée." },
      climat: {
        temperatureIdealeC: { min: 16, max: 22, unit: "°C" },
        humiditeRelativePct: { min: 50, max: 80, unit: "%" },
        ensoleillement: "variable",
        luminosite: "forte",
      },
      sol: {
        typeSol: "Substrat fin, propre, bien drainant",
        humiditeSol: "frais",
        drainage: "bon",
        pH: { min: 6.0, max: 7.5, unit: "pH" },
      },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [], notes: "Microgreens: hygiène + ventilation prioritaires." },
    howToCulture: {
      resume: "Plus lent; viser une levée homogène, lumière forte, récolte jeune.",
      etapes: ["Préparer substrat", "Semis", "Gestion humidité", "Lumière + ventilation", "Récolte"],
      entretien: ["Surveiller fonte des semis", "Éviter algues (trop d’eau)"],
      recolte: ["Couper quand cotylédons ouverts; fenêtre courte avant vraies feuilles"],
    },     pertiance: ["Germination lente/irrégulière 10-15j, température fraîche Popayán adapté "      ],
    tags: ["microgreens"],
    sources: ["https://canadagrowsupplies.com/blogs/main/grow-spinach-microgreens", "https://www.epicgardening.com/spinach-microgreens/"],
  },

  // 16 CERFEUIL
  {
    id: "micro-cerfeuil",
    note: 71,
    type: "micropousse",
    ordrer: 16,
    image: ["/cultures/cerfeuil-microgreens.png"],
    nomFrancais: "Cerfeuil — micro-pousses",
    nomPopayan: "Perifollo (microverde)",
    nomScientifique: "Anthriscus cerefolium",
    familleBotanique: "Apiaceae",
    presentation: "Micro-pousse fine, parfum délicat (anis/persil léger); souvent lente.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Faisable sous abri; germination souvent lente, sensible à excès d’humidité.",
      recommandations: ["Ventilation", "Substrat propre", "Ne pas trop densifier"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 14, max: 25, unit: "jours" }, // plage prudente (microgreens lents)
      nbCyclesAn: { min: 8, max: 18, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 4, max: 10, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 3, max: 10, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation (cycle long)." },
      climat: {
        temperatureIdealeC: { min: 16, max: 22, unit: "°C" },
        humiditeRelativePct: { min: 50, max: 80, unit: "%" },
        ensoleillement: "variable",
        luminosite: "forte",
      },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Micro-pousse lente: hygiène + patience, récolter jeune pour arôme.",
      etapes: ["Semis", "Blackout (option)", "Lumière + ventilation", "Récolte"],
    },     pertiance: ["Germination lente 14-25j, arôme délicat, marché très niche "],
    tags: ["microgreens", "premium", "restaurants"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 17 NASTURTIUM / CAPUCINE
  {
    id: "micro-capucine-nasturtium",
    note: 72,
    type: "micropousse",
    ordrer: 17,
    image: ["/cultures/capucine-microgreens.png"],
    nomFrancais: "Nasturtium / Capucine — micro-pousses",
    nomPopayan: "Capuchina (microverde)",
    nomScientifique: "Tropaeolum majus",
    familleBotanique: "Tropaeolaceae",
    presentation: "Micro-pousse/jeune pousse au goût poivré; très premium en restauration.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Bonne adaptation possible; production micro exigeante (graines grosses, risque moisissure si trop humide).",
      recommandations: ["Ventilation", "Arrosage bas", "Semis pas trop dense"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 12, max: 21, unit: "jours" },
      nbCyclesAn: { min: 10, max: 20, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 4, max: 10, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 3, max: 10, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter détrempé (graines épaisses = risque)." },
      climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat drainant", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Produit premium: semer aéré, ventiler, récolter jeune (qualité visuelle).",
      etapes: ["Semis", "Germination", "Lumière + ventilation", "Récolte"],
    },     pertiance: [""],
    tags: ["microgreens", "premium", "restaurants", "fleur_comestible"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 18 LIN / CHIA (mix)
  {
    id: "micro-lin-chia",
    note: 68,
    type: "micropousse",
    ordrer: 18,
    image: ["/cultures/lin-chia-microgreens.png"],
    nomFrancais: "Lin / Chia — micro-pousses",
    nomPopayan: "Linaza / Chía (microverde)",
    nomScientifique: "Linum usitatissimum / Salvia hispanica",
    familleBotanique: "Linaceae / Lamiaceae",
    presentation: "Micro-pousses gélifiantes au semis (surtout chia); très sensibles à l’excès d’eau et à l’asphyxie.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "Faisable sous abri mais technique (mucilage/gélification → risque moisissures).",
      recommandations: ["Semis très fin", "Ventilation", "Arrosage brume/ultra léger"],
    },
    techniques: ["bac_sous_serre"],
    cycle: {
      dureeCycleJours: { min: 10, max: 16, unit: "jours" },
      nbCyclesAn: { min: 12, max: 30, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 7, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 4, max: 12, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "faible", strategie: "Très peu d’eau en surface; privilégier humidité de fond et air sec/ventilé." },
      climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, humiditeRelativePct: { min: 45, max: 70, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat très drainant", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Semis ultra fin (mucilage), ventilation forte, récolte jeune.",
      etapes: ["Semis fin", "Brumisation légère", "Lumière + ventilation", "Récolte"],
      entretien: ["Surveiller moisissures, réduire eau si odeur"],
    },     pertiance: [" Mucilage complique production, besoin ventilation forte, technique "],
    tags: ["microgreens", "technique"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 19 CRESSONNETTE (par défaut: cresson alénois)
  {
    id: "micro-cressonnette-cresson-alenois",
    note: 79,
    type: "micropousse",
    ordrer: 19,
    image: ["/cultures/cressonnette-microgreens.png"],
    nomFrancais: "Cressonnette (cresson alénois) — micro-pousses",
    nomPopayan: "Berro / Mastuerzo (microverde)",
    nomScientifique: "Lepidium sativum",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse piquante type cresson; rapide et facile, très utilisée en garniture.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court; principal risque = humidité stagnante et moisissures si densité trop forte.",
      recommandations: ["Ventilation", "Arrosage bas", "Semis pas trop compact"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 7, max: 14, unit: "jours" }, // microgreens typiques
      nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 2, max: 6, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter détrempé." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin / tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Très rapide; récolter jeune pour piquant et texture.", etapes: ["Semis", "Blackout court", "Lumière", "Récolte"] },
    pertiance: ["Aime humidité, aquaponie idéal, goût piquant "],    
    tags: ["microgreens", "rapide", "piquant"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 20 ORGE JEUNE
  {
    id: "micro-orge-jeune",
    note: 42,
    type: "micropousse",
    ordrer: 20,
    image: ["/cultures/orge-jeune-microgreens.png"],
    nomFrancais: "Orge jeune — jeunes pousses",
    nomPopayan: "Cebada (brotes)",
    nomScientifique: "Hordeum vulgare",
    familleBotanique: "Poaceae",
    presentation: "Jeunes pousses type “wheatgrass-like”; souvent utilisées en jus/poudre.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court en plateau; gérer humidité et ventilation pour éviter moisissures.",
      recommandations: ["Trempage contrôlé", "Égouttage", "Ventilation"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 7, max: 14, unit: "jours" },
      nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 7, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 20, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter eau stagnante." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fibreux/drainant ou tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Type herbe: semis dense, lumière, couper au ras.", etapes: ["Trempage (option)", "Semis dense", "Lumière", "Récolte/coupe"] },
    pertiance: [""],    tags: ["microgreens", "jus"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 21 BLÉ TENDRE (wheatgrass)
  {
    id: "micro-ble-tendre",
    note: 66,
    type: "micropousse",
    ordrer: 21,
    image: ["/cultures/ble-tendre-microgreens.png"],
    nomFrancais: "Blé tendre — jeunes pousses (wheatgrass)",
    nomPopayan: "Trigo (pasto de trigo)",
    nomScientifique: "Triticum aestivum",
    familleBotanique: "Poaceae",
    presentation: "Jeunes pousses pour jus; coupe au ras, souvent récoltées très jeunes.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Facile en plateau; attention hygiène et excès d’eau.",
      recommandations: ["Ventilation", "Arrosage bas", "Éviter sur-densité humide"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: { dureeCycleJours: { min: 7, max: 14, unit: "jours" }, nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 22, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter stagnation." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fibreux/drainant ou tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Wheatgrass: semis dense, lumière, récolte 7–14 j.", etapes: ["Trempage (option)", "Semis dense", "Lumière", "Coupe"] },
       pertiance: [" Wheatgrass peu demandé localement, équipement jus nécessaire "], tags: ["microgreens", "jus"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 23 PAK CHOI
  {
    id: "micro-pak-choi",
    note: 81,
    type: "micropousse",
    ordrer: 23,
    image: ["https://example.com/pak-choi-microgreens.jpg"],
    nomFrancais: "Pak choi — micro-pousses",
    nomPopayan: "Pak choi (microverde)",
    nomScientifique: "Brassica rapa subsp. chinensis",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse de brassica, douce; très stable, bon pour mix.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Brassica robuste en cycle court; gérer surtout humidité + densité.",
      recommandations: ["Ventilation", "Arrosage bas", "Hygiène plateaux"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 8, max: 14, unit: "jours" }, nbCyclesAn: { min: 15, max: 35, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Brassica classique: rapide et fiable.", etapes: ["Semis", "Blackout court", "Lumière", "Récolte"] },
       pertiance: ["Brassica robuste 8-14j, marché asiatique croissant Popayán "], 
       tags: ["microgreens", "mix"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 24 HARICOT MUNGO (microgreens / souvent plutôt “sprout”)
  {
    id: "micro-haricot-mungo",
    note: 88,
    type: "micropousse",
    ordrer: 24,
    image: ["https://example.com/haricot-mungo-microgreens.jpg"],
    nomFrancais: "Haricot mungo — micro-pousses",
    nomPopayan: "Frijol mungo (microverde)",
    nomScientifique: "Vigna radiata",
    familleBotanique: "Fabaceae",
    presentation:
      "Souvent consommé en germe (sprout) plutôt qu’en microgreen; en lumière il peut devenir plus vert et potentiellement plus amer si trop avancé.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle très court; le plus important est d’éviter sur-humidité et de récolter à temps.",
      recommandations: ["Blackout au départ", "Rinçage/égouttage", "Récolte jeune (6–7 j)"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: {
      dureeCycleJours: { min: 6, max: 8, unit: "jours" },
      nbCyclesAn: { min: 25, max: 60, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 1, max: 4, unit: "jours" },
    },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 22, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Rinçage/égouttage; éviter eau stagnante." },
      climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "variable", luminosite: "moyenne" },
      sol: { typeSol: "Substrat drainant ou tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Récolter très jeune (souvent 6–7 j) pour éviter amertume/texture plate.",
      etapes: ["Trempage", "Semis", "Blackout", "Lumière courte (option)", "Récolte"],
    },     pertiance: ["Très rapide 6-8j, récolter jeune éviter amertume "],
    tags: ["microgreens", "sprout_like", "rapide"],
    sources: ["https://www.reddit.com/r/microgreens/comments/14nn0zb/should_i_have_harvested_these_mung_bean/"],
  },

  // 25 AVOINE
  {
    id: "micro-avoine",
    note: 42,
    type: "micropousse",
    ordrer: 25,
    image: ["https://example.com/avoine-microgreens.jpg"],
    nomFrancais: "Avoine — jeunes pousses",
    nomPopayan: "Avena (brotes)",
    nomScientifique: "Avena sativa",
    familleBotanique: "Poaceae",
    presentation: "Jeunes pousses type herbe, similaires aux autres céréales en plateau.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Très faisable; attention humidité et hygiène.",
      recommandations: ["Ventilation", "Arrosage bas", "Ne pas détremper"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: { dureeCycleJours: { min: 7, max: 14, unit: "jours" }, nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 22, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter stagnation." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fibreux/drainant ou tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Céréale en plateau: semis dense, lumière, coupe.", etapes: ["Trempage (option)", "Semis dense", "Lumière", "Coupe"] },
    pertiance: [""],    tags: ["microgreens", "jus"],
    sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },

  // 26 SEIGLE
  {
    id: "micro-seigle",
    note: 42,type: "micropousse",
    ordrer: 26,
    image: ["https://example.com/seigle-microgreens.jpg"],
    nomFrancais: "Seigle — jeunes pousses",
    nomPopayan: "Centeno (brotes)",
    nomScientifique: "Secale cereale",
    familleBotanique: "Poaceae",
    presentation: "Jeunes pousses type herbe; conduite similaire blé/orge/avoine.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Facile en plateau; gérer humidité/ventilation.",
      recommandations: ["Ventilation", "Arrosage bas", "Hygiène"],
    },
    techniques: ["bac_sous_serre", "bac_exterieur"],
    cycle: { dureeCycleJours: { min: 7, max: 14, unit: "jours" }, nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 7, unit: "jours" } },
    rendement: { unite: "botte_m2", valeur: { min: 8, max: 22, unit: "bottes/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter stagnation." },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 80, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fibreux/drainant ou tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Semis dense, lumière, coupe 7–14 j.", etapes: ["Semis", "Lumière", "Coupe"] },
    tags: ["microgreens", "jus"],
      pertiance: [""],  sources: ["https://extension.psu.edu/the-abcs-of-microgreens/"],
  },
// B. Graines germées / Sprouts

// 27) ALFALFA (LUZERNE)
{
  id: "micro-alfalfa",
  note: 80,
  type: "micropousse",
  ordrer: 27,
  image: ["https://example.com/alfalfa.jpg"],
  nomFrancais: "Alfalfa (Luzerne) — micro-pousses",
  nomPopayan: "Alfalfa (microverde)",
  nomScientifique: "Medicago sativa",
  familleBotanique: "Fabaceae",
  presentation: "Micro-pousse croquante, saveur douce et légèrement herbacée.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle rapide et tolérant aux variations de température locales.",
    recommandations: ["Ventilation forte", "Arrosage modéré", "Hygiène plateaux"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 6, max: 10, unit: "jours" },
    nbCyclesAn: { min: 25, max: 40, unit: "cycles/an" },
    saisonnalite: "Toute l'année",
    dureeRecolteJours: { min: 3, max: 5, unit: "jours" },
  },
  rendement: {
    unite: "botte_m2",
    valeur: { min: 10, max: 20, unit: "bottes/m²/cycle" },
  },
  besoins: {
    eau: { niveau: "moyen", strategie: "Brumisation fine jusqu'à levée" },
    climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, ensoleillement: "variable" },
    sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Semis dense, récolte rapide à 6–10 jours.",
    etapes: ["Préparer plateau", "Semer dense", "Blackout 2 jours", "Ventiler", "Récolter"],
    recolte: ["Couper à 2–5 cm au-dessus du substrat"],
  },     pertiance: ["Production 6-10j, marché santé, hygiène critique"],
},

// 28) RADIS
{
  id: "micro-radis",
  note: 85,
  type: "micropousse",
  ordrer: 28,
  image: ["https://example.com/radis.jpg"],
  nomFrancais: "Radis — micro-pousses",
  nomPopayan: "Rábano (microverde)",
  nomScientifique: "Raphanus sativus",
  familleBotanique: "Brassicaceae",
  presentation: "Micro-pousse croquante et piquante, couleurs vives.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle rapide et robuste, idéal pour Popayán.",
    recommandations: ["Ventilation forte", "Arrosage modéré"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 7, max: 9, unit: "jours" }, nbCyclesAn: { min: 20, max: 40, unit: "cycles/an" } },
  rendement: { unite: "botte_m2", valeur: { min: 10, max: 25, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "faible" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis dense, récolte rapide.", etapes: ["Préparer plateau", "Semer", "Blackout 2 jours", "Ventiler", "Récolter"] },     
  pertiance: ["Goût fort, 7-9j, très rentable, rotation élevée "],
  tags: ["microgreens", "mix"],
},

// 29) MOUTARDE
{
  id: "micro-moutarde",
  note: 83,
  type: "micropousse",
  ordrer: 29,
  image: ["https://example.com/moutarde.jpg"],
  nomFrancais: "Moutarde — micro-pousses",
  nomPopayan: "Mostaza (microverde)",
  nomScientifique: "Brassica juncea",
  familleBotanique: "Brassicaceae",
  presentation: "Micro-pousse au goût légèrement piquant et épicé.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Croissance rapide et adaptée aux climats tempérés-humides.",
    recommandations: ["Semis direct, éclaircissage léger"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 7, max: 12, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 8, max: 18, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Frais, meuble", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "faible" } },
  associationCulture: { compatible: ["laitue"], aEviter: [] },
  howToCulture: { resume: "Culture rapide, idéal pour rotation.", etapes: ["Semer", "Éclaircir", "Récolter"] },
    pertiance: ["Piquant populaire, 7-12j, facile "],
    tags: ["microgreens", "rapide" ],
},

// 30) POIS CHICHES
{
  id: "micro-pois-chiche",
  note: 74,
  type: "micropousse",
  ordrer: 30,
  image: ["https://example.com/pois-chiche.jpg"],
  nomFrancais: "Pois chiches — micro-pousses",
  nomPopayan: "Garbanzos (microverde)",
  nomScientifique: "Cicer arietinum",
  familleBotanique: "Fabaceae",
  presentation: "Micro-pousse douce, croquante et très nutritive.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Tolère bien l’altitude mais nécessite substrat humide constant.",
    recommandations: ["Brumisation régulière", "Récolte à cotylédons"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 6, max: 8, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 6, max: 14, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis humide, récolte à 6–8 jours.", etapes: ["Trempage graines", "Semer dense", "Ventiler", "Récolter"] },
    pertiance: ["Nutritif, trempage long nécessaire, 6-8j, humidité altitude "],
    tags: ["microgreens", "nutritif" ],
},

// 31) LENTILLES
{
  id: "micro-lentilles",
  note: 79,
    type: "micropousse",
  ordrer: 31,
  image: ["https://example.com/lentilles.jpg"],
  nomFrancais: "Lentilles — micro-pousses",
  nomPopayan: "Lentejas (microverde)",
  nomScientifique: "Lens culinaris",
  familleBotanique: "Fabaceae",
  presentation: "Micro-pousses tendres et digestes, goût légèrement noisette.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Cycle très court et bonne tolérance aux variations locales.",
    recommandations: ["Arrosage modéré", "Bonne ventilation"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 5, max: 7, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 12, max: 20, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "faible" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis dense, récolte rapide.", etapes: ["Trempage", "Semer", "Ventiler", "Récolter"] },
    pertiance: ["Très demandées Colombie, 5-7j, faciles à cultiver "],
    tags: ["microgreens", "rapide", "populaire" ],
},

// 32) TOURNESOL
{
  id: "micro-tournesol",
  note: 75,
  type: "micropousse",
  ordrer: 32,
  image: ["/cultures/tournesol-microgreens.png"],
  nomFrancais: "Tournesol — micro-pousses",
  nomPopayan: "Girasol (microverde)",
  nomScientifique: "Helianthus annuus",
  familleBotanique: "Asteraceae",
  presentation: "Micro-pousses croquantes avec goût de noisette.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Très bien adapté aux plateaux sous serre et extérieur.",
    recommandations: ["Arrosage régulier", "Récolte avant feuilles vraies"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 7, max: 10, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 8, max: 18, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis dense, récolte 7–10 jours.", etapes: ["Semer", "Ventiler", "Récolter"] },
    pertiance: ["Décorticage nécessaire, 7-10j, biomasse bonne "],
tags: ["microgreens", "noisette" ],
},

// 33) BROCOLI
{
  id: "micro-brocoli",
  note: 72,
  type: "micropousse",
  ordrer: 33,
  image: ["/cultures/brocoli-microgreens.png"],
  nomFrancais: "Brocoli — micro-pousses",
  nomPopayan: "Brócoli (microverde)",
  nomScientifique: "Brassica oleracea var. italica",
  familleBotanique: "Brassicaceae",
  presentation: "Micro-pousses croquantes et légèrement piquantes, riches en sulforaphane.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Bien adaptée aux conditions de Popayán avec cycle court.",
    recommandations: ["Bonne ventilation", "Substrat fin"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 8, max: 12, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 8, max: 20, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "faible" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis dense, récolte 8–12 jours.", etapes: ["Semer", "Ventiler", "Récolter"] },
    pertiance: [" Sulforaphane santé, 8-12j, marché premium "],
    tags: ["microgreens", "santé" ],
},

// 34) FENUGREC
{
  id: "micro-fenugrec",
  note: 70,
  type: "micropousse",
  ordrer: 34,
  image: ["/cultures/fenugrec-microgreens.png"],
  nomFrancais: "Fenugrec — micro-pousses",
  nomPopayan: "Fenogreco (microverde)",
  nomScientifique: "Trigonella foenum-graecum",
  familleBotanique: "Fabaceae",
  presentation: "Micro-pousses aromatiques au goût légèrement amer et épicé.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle court, adaptée aux substrats humides et ventilés.",
    recommandations: ["Arrosage régulier", "Récolte précoce"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 7, max: 12, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 6, max: 14, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Récolte précoce pour éviter amertume.", etapes: ["Semer", "Ventiler", "Récolter"] },
    pertiance: ["Goût curry particulier, 7-12j, marché très limité Popayán "],
tags: ["microgreens", "aromatique" ],
},



// 35) CHOU ROUGE
{
  id: "micro-chou-rouge",
  note: 78,
  type: "micropousse",
  ordrer: 35,
  image: ["/cultures/chou-rouge-microgreens.png"],
  nomFrancais: "Chou rouge — micro-pousses",
  nomPopayan: "Repollo rojo (microverde)",
  nomScientifique: "Brassica oleracea var. capitata f. rubra",
  familleBotanique: "Brassicaceae",
  presentation: "Micro-pousses croquantes et colorées, goût doux.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle court, tolère bien les variations locales.",
    recommandations: ["Arrosage régulier", "Ventilation"],
  },
  techniques: ["bac_sous_serre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 8, max: 12, unit: "jours" } },
  rendement: { unite: "botte_m2", valeur: { min: 6, max: 16, unit: "bottes/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "variable" }, sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "faible" } },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: { resume: "Semis dense, récolte rapide.", etapes: ["Semer", "Ventiler", "Récolter"] },
    pertiance: ["Couleur violette, 8-12j, nutritif, bon marché "],
tags:["microgreens", "coloré" ],
},


  // 37) TRÈFLE ROUGE
  {
    id: "micro-trefle-rouge",
    note: 42,
    type: "micropousse",
    ordrer: 37,
    image: ["/cultures/trefle-rouge-microgreens.png"],
    nomFrancais: "Trèfle rouge — micro-pousses",
    nomPopayan: "Trébol rojo (microverde)",
    nomScientifique: "Trifolium pratense",
    familleBotanique: "Fabaceae",
    presentation: "Micro-pousse douce, très proche des “sprouts” en usage, mais peut se produire en plateau.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court; hygiène et ventilation restent critiques en saison humide.",
      recommandations: ["Hygiène eau/plateaux", "Ventilation", "Éviter sur-densité"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 7, max: 21, unit: "jours" },
      nbCyclesAn: { min: 12, max: 45, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 2, max: 6, unit: "jours" },
    },
    rendement: { unite: "kg_m2", valeur: { min: 0.15, max: 0.8, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide sans excès; réduire si odeur." },
      climat: { temperatureIdealeC: { min: 18, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre / tapis", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Microgreens: récolte 7–21 j selon préférence texture.", etapes: ["Semis", "Blackout court", "Lumière", "Récolte"] },
    pertiance: [""],    tags: ["microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },
// B. legumes feuilles
  // 38) LAITUE ROMAINE
  {
    id: "laitue-romaine",
    note: 84,
    type: "legume-feuille",
    ordrer: 38,
    image: ["/cultures/laitue-romaine-microgreens.png"],
    nomFrancais: "Laitue romaine — micro-pousses / baby leaf",
    nomPopayan: "Lechuga romana (microverde)",
    nomScientifique: "Lactuca sativa (Romaine group)",
    familleBotanique: "Asteraceae",
    presentation: "Jeunes feuilles tendres; souvent mieux valorisées en baby-leaf que microgreens stricts.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Faisable sous abri; attention chaleur + humidité (maladies) et montée en graines en plein champ.",
      recommandations: ["Sous ombrage léger si chaud", "Ventilation", "Arrosage bas"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "pleine_terre"],
    cycle: {
      dureeCycleJours: { min: 10, max: 21, unit: "jours" }, // dans la fenêtre 7–21 j microgreens
      nbCyclesAn: { min: 10, max: 30, unit: "cycles/an" },
      saisonnalite: "Toute l’année (mieux sous abri).",
      dureeRecolteJours: { min: 5, max: 14, unit: "jours" },
    },
    rendement: { unite: "kg_m2", valeur: { min: 0.2, max: 1.2, unit: "kg/m²/cycle" }, conditions: "Très dépendant de la coupe (micro vs baby leaf) et densité." },
    besoins: {
      eau: { niveau: "moyen", strategie: "Frais constant; éviter stress hydrique." },
      climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "mi_ombre", luminosite: "moyenne" },
      sol: { typeSol: "Substrat fin / sol riche et drainant", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.2, unit: "pH" } },
      nutriments: { exigenceGlobale: "moyen" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Meilleur en baby-leaf; microgreens dans 7–21 j selon objectif.", etapes: ["Semis dense", "Lumière", "Récolte"] },
    pertiance: [" Climat frais Popayán idéal, aquaponie excellent, baby-leaf 10-21j "],
        tags: ["salade", "baby_leaf", "microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 39) LAITUE BATAVIA
  {
    id: "laitue-batavia",
    note: 83,
    type: "legume-feuille",
    ordrer: 39,
    image: ["/cultures/laitue-batavia.png"],
    nomFrancais: "Laitue batavia — micro-pousses / baby leaf",
    nomPopayan: "Lechuga batavia (microverde)",
    nomScientifique: "Lactuca sativa",
    familleBotanique: "Asteraceae",
    presentation: "Jeunes feuilles plus croquantes; souvent valorisées en baby-leaf.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Bonne si gestion humidité/ventilation; sensible maladies foliaires en ambiance saturée.",
      recommandations: ["Ventilation", "Éviter mouillage feuilles", "Rotation"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "pleine_terre"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 30, unit: "cycles/an" }, saisonnalite: "Toute l’année (abri conseillé).", dureeRecolteJours: { min: 5, max: 14, unit: "jours" } },
    rendement: { unite: "kg_m2", valeur: { min: 0.2, max: 1.2, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen" },
      climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "mi_ombre", luminosite: "moyenne" },
      sol: { typeSol: "Substrat fin / sol riche", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.2, unit: "pH" } },
      nutriments: { exigenceGlobale: "moyen" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Micro/baby leaf dans fenêtre 7–21 j selon densité et coupe.", etapes: ["Semis", "Lumière", "Récolte"] },
    pertiance: ["Texture croquante, résiste humidité"],    
    tags: ["salade", "baby_leaf", "microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 40) LAITUE FEUILLE DE CHÊNE
  {
    id: "laitue-feuille-de-chene",
    note: 81,
    type: "legume-feuille",
    ordrer: 40,
    image: ["/cultures/laitue-feuille-de-chene.png"],
    nomFrancais: "Laitue feuille de chêne — micro-pousses / baby leaf",
    nomPopayan: "Lechuga hoja de roble (microverde)",
    nomScientifique: "Lactuca sativa (Oakleaf group)",
    familleBotanique: "Asteraceae",
    presentation: "Très utilisée en baby leaf; délicate, se récolte jeune.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Bonne sous abri; gérer humidité pour éviter maladies foliaires.",
      recommandations: ["Ventilation", "Arrosage bas", "Récoltes fréquentes"],
    },
    techniques: ["bac_sous_serre", "hydroponie", "pleine_terre"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 30, unit: "cycles/an" }, saisonnalite: "Toute l’année (abri conseillé).", dureeRecolteJours: { min: 5, max: 14, unit: "jours" } },
    rendement: { unite: "kg_m2", valeur: { min: 0.2, max: 1.2, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen" },
      climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "mi_ombre", luminosite: "moyenne" },
      sol: { typeSol: "Substrat fin / sol riche", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.2, unit: "pH" } },
      nutriments: { exigenceGlobale: "moyen" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Souvent mieux en baby-leaf; microgreens dans 7–21 j selon standard choisi.", etapes: ["Semis", "Lumière", "Récolte"] },
        pertiance: ["Marché restaurants, délicate"], 
        tags: ["salade", "baby_leaf", "microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 41) ÉPINARD
  {
    id: "epinards",
note: 80,
    type: "legume-feuille",
    ordrer: 41,
    image: ["/cultures/epinard.png"],
    nomFrancais: "Épinard — micro-pousses",
    nomPopayan: "Espinaca (microverde)",
    nomScientifique: "Spinacia oleracea",
    familleBotanique: "Amaranthaceae",
    presentation: "Micro-pousse douce; germination plus lente/irrégulière que brassicacées.",
    difficulte: "difficile",
    adaptationPopayan: {
      adaptation: "moyenne",
      justification: "OK sous abri; la contrainte est surtout technique (levée) + gestion humidité.",
      recommandations: ["Ventilation", "Hygiène", "Température stable"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 7, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 10, unit: "jours" } },
    rendement: { unite: "kg_m2", valeur: { min: 0.15, max: 0.8, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen" },
      climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin propre", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Récolte microgreens dans la fenêtre 7–21 j selon qualité recherchée.", etapes: ["Semis", "Gestion humidité", "Lumière", "Récolte"] },
        pertiance: ["Climat 14-19°C parfait altitude, cycles 30-40j "], tags: ["microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 42) ROQUETTE
  {
    id: "roquettes",
    note: 42,
    type: "legume-feuille",
    ordrer: 47,
    image: ["/cultures/roquette.png"],
    nomFrancais: "Roquette — micro-pousses",
    nomPopayan: "Rúcula (microverde)",
    nomScientifique: "Eruca sativa",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse aromatique, poivrée; stable et rapide.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Cycle court; gérer densité et humidité.",
      recommandations: ["Ventilation", "Arrosage bas", "Récolter jeune pour douceur"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 7, max: 21, unit: "jours" }, nbCyclesAn: { min: 12, max: 40, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 3, max: 10, unit: "jours" } },
    rendement: { unite: "kg_m2", valeur: { min: 0.2, max: 1.0, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen" },
      climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Récolte microgreens dans la fenêtre 7–21 j.", etapes: ["Semis", "Blackout court", "Lumière", "Récolte"] },
    pertiance: [""],    tags: ["microgreens"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 43) MÂCHE
  {
    id: "mache",
    note: 75,
    type: "legume-feuille",
    ordrer: 43,
    image: ["/cultures/mache.png"],
    nomFrancais: "Mâche",
    nomPopayan: "Canónigos / Valeriana",
    nomScientifique: "Valerianella locusta",
    familleBotanique: "Caprifoliaceae",
    presentation: "Micro-pousse douce; peut être plus lente, souvent mieux en baby-leaf.",
    difficulte: "moyenne",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Possible sous abri; gérer humidité et durée (peut tirer vers baby-leaf).",
      recommandations: ["Ventilation", "Arrosage bas", "Tester 2 dates de récolte (micro vs baby)"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: { dureeCycleJours: { min: 10, max: 21, unit: "jours" }, nbCyclesAn: { min: 10, max: 25, unit: "cycles/an" }, saisonnalite: "Toute l’année sous abri.", dureeRecolteJours: { min: 5, max: 14, unit: "jours" } },
    rendement: { unite: "kg_m2", valeur: { min: 0.2, max: 1.0, unit: "kg/m²/cycle" } },
    besoins: {
      eau: { niveau: "moyen" },
      climat: { temperatureIdealeC: { min: 14, max: 20, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "mi_ombre", luminosite: "moyenne" },
      sol: { typeSol: "Substrat fin / sol riche", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.2, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: { resume: "Récolter selon standard (micro vs baby) dans 7–21 j.", etapes: ["Semis", "Lumière", "Récolte"] },
    pertiance: ["Climat adapté, culture délicate "],    tags: ["microgreens", "baby_leaf"],
    sources: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },

  // 44) CHOU FRISÉ (KALE)
  {
    id: "kale",
    note: 82,   
    type: "legume-feuille",
    ordrer: 44,
    image: ["/cultures/kale.png"],
    nomFrancais: "Chou frisé (kale)",
    nomPopayan: "Kale",
    nomScientifique: "Brassica oleracea (Acephala group)",
    familleBotanique: "Brassicaceae",
    presentation: "Micro-pousse très populaire, stable, bonne conservation; récolter avant vraies feuilles.",
    difficulte: "facile",
    adaptationPopayan: {
      adaptation: "bonne",
      justification: "Très bon en microgreens sous abri; gérer surtout humidité/ventilation.",
      recommandations: ["Ventilation", "Arrosage bas", "Récolter avant vraies feuilles"],
    },
    techniques: ["bac_sous_serre", "hydroponie"],
    cycle: {
      dureeCycleJours: { min: 8, max: 12, unit: "jours" }, // guides semenciers/production
      nbCyclesAn: { min: 15, max: 40, unit: "cycles/an" },
      saisonnalite: "Toute l’année sous abri.",
      dureeRecolteJours: { min: 3, max: 7, unit: "jours" },
    },
    rendement: {
      unite: "kg_m2",
      valeur: { min: 0.2, max: 0.6, unit: "kg/m²/cycle" },
      conditions: "Repère non-académique: certains guides donnent 120–300 g par plateau 1020 (≈0,19–0,46 m²).",
    },
    besoins: {
      eau: { niveau: "moyen", strategie: "Humide régulier; éviter saturation." },
      climat: { temperatureIdealeC: { min: 16, max: 22, unit: "°C" }, humiditeRelativePct: { min: 50, max: 85, unit: "%" }, ensoleillement: "variable", luminosite: "forte" },
      sol: { typeSol: "Substrat fin", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
      nutriments: { exigenceGlobale: "faible" },
    },
    associationCulture: { compatible: [], aEviter: [] },
    howToCulture: {
      resume: "Kale: récolte typique 8–12 jours, avant vraies feuilles.",
      etapes: ["Semis", "Blackout court", "Lumière + ventilation", "Récolte"],
      recolte: ["Récolter avant apparition des premières vraies feuilles pour texture optimale"],
    }, 
        pertiance: [" Superfood, résiste altitude, climat frais excellent "],
    tags: ["microgreens", "mix"],
    sources: ["https://sowrightseeds.com/blogs/planters-library/red-kale-microgreens-how-to-grow-benefits", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10881865/"],
  },
// 45) CHOU CABUS
{
  id: "chou-cabus",
  note: 75,
  type: "legume",
  ordrer: 45,
  image: ["/cultures/chou-cabus.png"],
  nomFrancais: "Chou cabus",
  nomPopayan: "Repollo común",
  nomScientifique: "Brassica oleracea var. capitata",
  familleBotanique: "Brassicaceae",
  presentation: "Chou rond, feuilles serrées, texture ferme, polyvalent en cuisine.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Tolère les températures modérées de Popayán et saisons pluvieuses.",
    recommandations: ["Paillage", "Drainage correct", "Rotation culturale"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 70, max: 90, unit: "jours" }, saisonnalite: "Novembre–Mai" },
  rendement: { unite: "kg_m2", valeur: { min: 3, max: 5, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 15, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche en matière organique", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "céleri"], aEviter: ["tomate", "fraise"] },
  howToCulture: { resume: "Semer en pépinière, repiquer, récolte 70–90 jours.", etapes: ["Semis en pépinière", "Repiquage après 3–4 semaines", "Entretien feuilles extérieures", "Récolte à maturité"] },
    pertiance: ["Cycle long 90j, climat possible "],
    tags:["chou", "brassicaceae" ],
},

// 46) CHOU RAVE
{
  id: "chou-rave",
  note: 69,
  type: "legume-feuille",
  ordrer: 46,
  image: ["/cultures/chou-rave.png"],
  nomFrancais: "Chou-rave",
  nomPopayan: "Colinabo",
  nomScientifique: "Brassica oleracea var. gongylodes",
  familleBotanique: "Brassicaceae",
  presentation: "Tige renflée comestible, feuilles vertes tendres.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat tempéré et précipitations modérées idéales.",
    recommandations: ["Paillage léger", "Récolte jeunes bulbes"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 80, unit: "jours" }, saisonnalite: "Octobre–Mars" },
  rendement: { unite: "kg_m2", valeur: { min: 2, max: 4, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche, meuble", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["poireau", "carotte"], aEviter: ["tomate"] },
  howToCulture: { resume: "Semer, éclaircir, récolte 60–80 jours.", etapes: ["Semis direct ou en pépinière", "Éclaircir plants", "Arroser régulièrement", "Récolte à maturité"] },
    pertiance: ["peu connue, double usage"],
    tags:["chou", "brassicaceae" ], 
},

// 53) CHOU CHINOIS
{
  id: "chou-chinois",
note: 81,
  type: "legume",
  ordrer: 53,
  image: ["https://example.com/chou-chinois.jpg"],
  nomFrancais: "Chou chinois",
  nomPopayan: "Col china",
  nomScientifique: "Brassica rapa subsp. pekinensis",
  familleBotanique: "Brassicaceae",
  presentation: "Feuilles tendres, formant un cœur allongé, goût doux.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Bien adapté au climat tempéré de Popayán, pousse rapide.",
    recommandations: ["Arrosage régulier", "Protection contre vent fort"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 50, max: 70, unit: "jours" }, saisonnalite: "Octobre–Mars" },
  rendement: { unite: "kg_m2", valeur: { min: 3, max: 6, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 15, max: 22, unit: "°C" }, ensoleillement: "mi_ombre" }, sol: { typeSol: "Riche, drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "céleri"], aEviter: ["fève"] },
  howToCulture: { resume: "Semer en rang, récolte rapide.", etapes: ["Semis direct", "Éclaircir", "Arroser régulièrement", "Récolte"] },
    pertiance: ["Rapide 45-60j, aquaponie, climat adapté , "],
    tags:["chou", "brassicaceae" ],
},


// 56) BROCOLI
{
  id: "brocoli",
  note: 84,
  type: "legume",
  ordrer: 56,
  image: ["/cultures/brocoli.png"],
  nomFrancais: "Brocoli",
  nomPopayan: "Brócoli",
  nomScientifique: "Brassica oleracea var. italica",
  familleBotanique: "Brassicaceae",
  presentation: "Têtes vertes compactes, riche en vitamines et minéraux.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Adapté au climat tempéré de Popayán.",
    recommandations: ["Paillage", "Arrosage régulier"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 90, unit: "jours" }, saisonnalite: "Octobre–Avril" },
  rendement: { unite: "kg_m2", valeur: { min: 2.5, max: 5, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche, drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "céleri"], aEviter: ["tomate"] },
  howToCulture: { resume: "Semer, repiquer, récolte 60–90 jours.", etapes: ["Semis en pépinière", "Repiquage", "Arrosage", "Récolte"] },
    pertiance: ["Bonne demande, 70-90j, climat tempéré altitude stable, nuits fraîches, sol volcanique fertile, têtes compactes, croissance optimale, multiples récoltes annuelles. "],
    tags:["brocoli", "brassicaceae" ],
},

// 57) CHOU ROUGE
{
  id: "chou-rouge",
  note: 83,
  type: "legume",
  ordrer: 57,
  image: ["/cultures/chou-rouge.png"],
  nomFrancais: "Chou rouge",
  nomPopayan: "Repollo rojo",
  nomScientifique: "Brassica oleracea var. capitata f. rubra",
  familleBotanique: "Brassicaceae",
  presentation: "Feuilles rouges, goût doux, pour salade ou cuisson.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle court adapté aux saisons de Popayán.",
    recommandations: ["Paillage léger", "Arrosage modéré"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 70, max: 90, unit: "jours" }, saisonnalite: "Novembre–Mai" },
  rendement: { unite: "kg_m2", valeur: { min: 3, max: 5, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, 
  climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche, drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "céleri"], aEviter: ["tomate"] },
  howToCulture: { resume: "Semis, repiquage, récolte 70–90 jours.", etapes: ["Semis en pépinière", "Repiquage", "Arrosage", "Récolte"] },
    pertiance: ["climat tempéré stable (15-25 °C), nuits fraîches → pommes bien formées, denses et très colorées (violet intense)"],
    tags:["chou", "brassicaceae" ],
},

// 61) BLETTES
{
  id: "blettes",  
  note: 81,
  type: "legume",
  ordrer: 61,
  image: ["/cultures/blettes.png"],
  nomFrancais: "Blettes",
  nomPopayan: "Acelga",
  nomScientifique: "Beta vulgaris var. cicla",
  familleBotanique: "Amaranthaceae",
  presentation: "Feuilles vertes charnues et tiges croquantes.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat tempéré et humidité adaptée.",
    recommandations: ["Arrosage régulier", "Paillage léger"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 50, max: 70, unit: "jours" }, saisonnalite: "Toute l'année sauf forte pluie" },
  rendement: { unite: "kg_m2", valeur: { min: 3, max: 6, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 15, max: 22, unit: "°C" }, ensoleillement: "mi_ombre" }, sol: { typeSol: "Riche, humide", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "poireau"], aEviter: ["tomate"] },
  howToCulture: { resume: "Récolte progressive feuilles et côtes.", etapes: ["Semis direct", "Arrosage", "Éclaircir", "Récolte feuille à feuille"] },
pertiance: ["Très facile, climat parfait, productif continu "],
tags: ["feuille", "côte"],
},

// 62) CRESSON
{
  id: "cresson",
  note: 80,  type: "legume",
  ordrer: 62,
  image: ["/cultures/cresson.png"],
  nomFrancais: "Cresson",
  nomPopayan: "Berro",
  nomScientifique: "Nasturtium officinale",
  familleBotanique: "Brassicaceae",
  presentation: "Feuilles vertes tendres et croquantes, goût légèrement piquant.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Besoin d’eau fraîche et constante, tolère climat tempéré humide.",
    recommandations: ["Culture en hydro ou lit humide", "Arrosage fréquent"] ,
  },
  techniques: ["bac_sous_serre", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 20, max: 30, unit: "jours" }, saisonnalite: "Toute l'année avec irrigation" },
  rendement: { unite: "kg_m2", valeur: { min: 2, max: 5, unit: "kg/m²" } },
  besoins: { eau: { niveau: "eleve" }, climat: { temperatureIdealeC: { min: 14, max: 22, unit: "°C" }, ensoleillement: "mi_ombre" }, sol: { typeSol: "Humide, riche en matière organique", humiditeSol: "tres_humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["laitue", "céleri"], aEviter: ["chou"] },
  howToCulture: { resume: "Semis en lit humide, récolte progressive.", etapes: ["Préparer lit humide", "Semer", "Éclaircir", "Récolte feuilles"] },
    pertiance: ["Aquaponie idéal, aime eau, temperature adapté"],
    tags:[]
},

// C. Légumes-fruits

// 65 Poivron
{
  id: "poivron",
  note: 88,  type: "legume",
  ordrer: 65,
  image: ["/cultures/poivron.png"],
  nomFrancais: "Poivron",
  nomPopayan: "Pimentón",
  nomScientifique: "Capsicum annuum",
  familleBotanique: "Solanaceae",
  presentation: "Légume-fruit à forte valeur marchande, sensible au froid et à l’excès d’humidité.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Températures stables favorables; attention aux pluies prolongées.",
    recommandations: ["Culture sous serre", "Drainage renforcé", "Variétés résistantes"],
  },
  techniques: ["bac_sous_serre", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 120, max: 160, unit: "jours" },
    nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" },
    saisonnalite: "Toute l’année sous serre",
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 3, max: 5, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen", strategie: "Arrosage régulier sans excès" },
    climat: {
      temperatureIdealeC: { min: 18, max: 28, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche, léger",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve", notes: "Fort besoin en K et Ca" },
  },
  associationCulture: {
    compatible: ["basilic", "oignon"],
    aEviter: ["fenouil"],
  },
  howToCulture: {
    resume: "Culture exigeante mais rentable sous climat tempéré.",
    etapes: ["Semis en pépinière", "Repiquage", "Tuteurage", "Récolte progressive"],
    entretien: ["Taille légère", "Surveillance maladies"],
  },
    pertiance: ["Serre protège pluie, cycle 90-120j, température limite basse"],  
    tags: ["rentable", "serre"],
},
// 66 Concombre
{
  id: "concombre",  
  note: 81,
  type: "legume",
  ordrer: 66,
  image: ["/cultures/concombre.png"],
  nomFrancais: "Concombre",
  nomPopayan: "Pepino cohombro",
  nomScientifique: "Cucumis sativus",
  familleBotanique: "Cucurbitaceae",
  presentation: "Plante grimpante à croissance rapide, très productive.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Très bon rendement avec chaleur modérée et humidité.",
    recommandations: ["Palissage", "Bonne aération"],
  },
  techniques: ["plein_champ", "bac_sous_serre"],
  cycle: {
    dureeCycleJours: { min: 60, max: 90, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2, max: 4, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "eleve" },
    climat: {
      temperatureIdealeC: { min: 18, max: 30, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Humifère",
      humiditeSol: "humide",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: {
    compatible: ["haricot", "laitue"],
    aEviter: ["pomme_de_terre"],
  },
  howToCulture: {
    resume: "Culture rapide, idéale pour rotations courtes.",
    etapes: ["Semis direct", "Palissage", "Récolte régulière"],
  },    pertiance: ["Rapide 50-70j, aquaponie excellent, serre protège "],
   tags: ["rapide", "productif"],
},
// 67 Courgette
{
  id: "courgette",   
  note: 81,
  type: "legume",
  ordrer: 67,
  image: ["/cultures/courgette.png"],
  nomFrancais: "Courgette",
  nomPopayan: "Calabacín",
  nomScientifique: "Cucurbita pepo",
  familleBotanique: "Cucurbitaceae",
  presentation: "Plante vigoureuse, très productive mais gourmande.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Conditions idéales toute l’année.",
    recommandations: ["Espacement large", "Paillage"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 50, max: 80, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 10, max: 20, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "eleve" },
    climat: {
      temperatureIdealeC: { min: 18, max: 30, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche, profond",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: {
    compatible: ["maïs", "haricot"],
    aEviter: ["pomme_de_terre"],
  },
  howToCulture: {
    resume: "Culture facile, production abondante.",
    etapes: ["Semis direct", "Arrosage", "Récolte jeune"],
  },
    pertiance: ["Productif, serre humidité, rotation rapide "],
tags: ["productif", "facile"],
},

// 68) AUBERGINE
{
  id: "aubergine",
  note: 49,  type: "legume",
  ordrer: 68,
  image: ["/cultures/aubergine.png"],
  nomFrancais: "Aubergine",
  nomPopayan: "Berenjena",
  nomScientifique: "Solanum melongena",
  familleBotanique: "Solanaceae",
  presentation: "Légume-fruit exigeant en chaleur, très apprécié en restauration.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Climat limite en plein champ; très bon potentiel sous serre.",
    recommandations: ["Serre ventilée", "Variétés précoces", "Drainage strict"],
  },
  techniques: ["bac_sous_serre", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 130, max: 170, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 4, max: 8, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen", strategie: "Régulier sans excès" },
    climat: {
      temperatureIdealeC: { min: 20, max: 30, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche, profond",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: {
    compatible: ["basilic", "haricot"],
    aEviter: ["fenouil"],
  },
  howToCulture: {
    resume: "Culture rentable sous serre avec conduite soignée.",
    etapes: ["Semis", "Repiquage", "Tuteurage", "Récolte échelonnée"],
  },
    pertiance: ["Besoin chaleur serre, température Popayán limite "],
      tags: ["serre", "restauration"],
},



// 72) TOMATES CERISES
{
  id: "tomate-cerise",
  note: 90,  type: "fruit",
  ordrer: 72,
  image: ["/cultures/tomate-cerise.png"],
  nomFrancais: "Tomate cerise",
  nomPopayan: "Tomate cherry",
  nomScientifique: "Solanum lycopersicum var. cerasiforme",
  familleBotanique: "Solanaceae",
  presentation: "Très forte valeur ajoutée, idéale sous serre.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Conditions parfaites sous serre ventilée.",
    recommandations: ["Serre", "Palissage", "Taille"],
  },
  techniques: ["bac_sous_serre", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 90, max: 130, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 5, max: 10, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 18, max: 28, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: {
    compatible: ["basilic"],
    aEviter: ["pomme_de_terre"],
  },
  howToCulture: {
    resume: "Une des cultures les plus rentables à Popayán.",
    etapes: ["Semis", "Repiquage", "Taille", "Récolte continue"],
  },
      pertiance: ["Serre protège forte pluie Popayán, aquaponie, rentable"],
  tags: ["ultra_rentable", "serre"],
},

// 73) TOMATES GRAPPES
{
  id: "tomate-grappe",
   note: 93, type: "fruit",
  ordrer: 73,
  image: ["/cultures/tomate-grappe.png"],
  nomFrancais: "Tomate grappe",
  nomPopayan: "Tomate larga vida",
  nomScientifique: "Solanum lycopersicum",
  familleBotanique: "Solanaceae",
  presentation: "Production standard pour marché local.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Très bon rendement sous serre.",
    recommandations: ["Variétés résistantes", "Ventilation"],
  },
  techniques: ["bac_sous_serre", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 110, max: 150, unit: "jours" },
    nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 6, max: 12, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 18, max: 28, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: {
    compatible: ["basilic"],
    aEviter: [],
  },
  howToCulture: {
    resume: "Culture standard fiable.",
    etapes: ["Semis", "Palissage", "Taille"],
  },
      pertiance: ["Tomate - 95/100","Excellente pour serre + aquaponie",
"Rendement élevé (30-50 kg/m²/an en serre)",
"Forte demande locale, cycles rapides",
"Parfaite température Popayán (15-25°C)"],
    tags: ["standard", "serre"],
},

// 74) ZAPALLO
{
  id: "zapallo",
  note: 76,  type: "fruit",
  ordrer: 74,
  image: ["/cultures/zapallo.png"],
  nomFrancais: "Zapallo",
  nomPopayan: "Zapallo",
  nomScientifique: "Cucurbita spp.",
  familleBotanique: "Cucurbitaceae",
  presentation: "Courge locale très rustique.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Culture traditionnelle parfaitement adaptée.",
    recommandations: ["Culture extensive"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 120, max: 160, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 15, max: 30, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 15, max: 26, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Tous sols drainés",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 5.8, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: ["maïs"], aEviter: [] },
  howToCulture: {
    resume: "Très faible risque, forte sécurité alimentaire.",
    etapes: ["Semis direct", "Croissance libre"],
  },
  pertiance: ["Adapté Cauca, demande forte, traditionnel "],
  tags: ["traditionnel"],
},

// D. Racines et tubercules
// 76) CAROTTE
{
  id: "carotte",
  note: 79,  type: "legume",
  ordrer: 76,
  image: ["/cultures/carotte.png"],
  nomFrancais: "Carotte",
  nomPopayan: "Zanahoria",
  nomScientifique: "Daucus carota subsp. sativus",
  familleBotanique: "Apiaceae",
  presentation: "Racine classique, très demandée, bien adaptée aux climats tempérés.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Températures fraîches idéales, bonne tolérance à l’altitude.",
    recommandations: ["Sol meuble", "Drainage", "Semis direct"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 90, max: 120, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 3, max: 6, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 12, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Sableux-limoneux",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: {
    compatible: ["laitue", "oignon"],
    aEviter: ["aneth"],
  },
  howToCulture: {
    resume: "Culture sûre et régulière.",
    etapes: ["Semis direct", "Éclaircissage", "Récolte à maturité"],
  }, 
  pertiance: [" Demande constante, climat frais bon, bacs profonds ou pleine terre "],
  tags: ["basique", "rotation"],
},

// 77) BETTERAVE
{
  id: "betterave",
  note: 79,  type: "legume",
  ordrer: 77,
  image: ["/cultures/betterave.png"],
  nomFrancais: "Betterave",
  nomPopayan: "Remolacha",
  nomScientifique: "Beta vulgaris",
  familleBotanique: "Amaranthaceae",
  presentation: "Racine nutritive, bonne conservation.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Tolère bien le climat frais et humide.",
    recommandations: ["Sol drainé", "Rotation"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 80, max: 110, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2.5, max: 5, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 10, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Limoneux",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.2, max: 7.2, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: ["laitue"], aEviter: [] },
  howToCulture: {
    resume: "Facile, peu sensible aux maladies.",
    etapes: ["Semis direct", "Éclaircissage", "Récolte"],
  },
  pertiance: ["Facile, double usage feuille+racine "],
    tags: ["nutritif", "conservation"],
},

// 78) RADIS
{
  id: "radis",
  note: 86,
    type: "legume",
  ordrer: 78,
  image: ["/cultures/radis.png"],
  nomFrancais: "Radis",
  nomPopayan: "Rábano",
  nomScientifique: "Raphanus sativus",
  familleBotanique: "Brassicaceae",
  presentation: "Culture ultra-rapide, idéale en interculture.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Températures fraîches parfaites.",
    recommandations: ["Semis étalés"],
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 25, max: 40, unit: "jours" },
    nbCyclesAn: { min: 6, max: 10, unit: "cycles/an" },
  },
  rendement: {
    unite: "piece_m2",
    valeur: { min: 100, max: 200, unit: "pièces/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 10, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Léger",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: ["carotte"], aEviter: [] },
  howToCulture: {
    resume: "Très rapide, idéal pour cash-flow.",
    etapes: ["Semis direct", "Récolte jeune"],
  },
  pertiance: [" Très rapide 25-30j, rotation élevée, climat adapté "],
  tags: ["rapide", "cash"],
},

// 79) POMME DE TERRE
{
  id: "pomme-de-terre",
  note: 72,
  type: "legume",
  ordrer: 79,
  image: ["/cultures/pomme-de-terre.png"],
  nomFrancais: "Pomme de terre",
  nomPopayan: "Papa",
  nomScientifique: "Solanum tuberosum",
  familleBotanique: "Solanaceae",
  presentation: "Culture de base andine.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Origine andine, parfaitement adaptée.",
    recommandations: ["Rotation stricte", "Variétés locales"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 110, max: 150, unit: "jours" },
    nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2, max: 4, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 12, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Limoneux",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 5.5, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: { compatible: [], aEviter: ["tomate"] },
  howToCulture: {
    resume: "Culture structurante mais gourmande.",
    etapes: ["Plantation tubercules", "Buttage", "Récolte"],
  },
  pertiance: ["Marché énorme mais prix bas compétitif, climat idéal "],
  tags: ["basique", "andine"],
},

// 81) TOPINAMBOUR
{
  id: "topinambour",
  note: 75,
  type: "legume",
  ordrer: 81,
  image: ["/cultures/topinambour.png"],
  nomFrancais: "Topinambour",
  nomPopayan: "Topinambur",
  nomScientifique: "Helianthus tuberosus",
  familleBotanique: "Asteraceae",
  presentation: "Plante très rustique, peu connue localement.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Tolère bien le climat frais.",
    recommandations: ["Contrôler expansion"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 150, max: 200, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 2, max: 5, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 10, max: 25, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Tous sols",
      humiditeSol: "frais",
      drainage: "moyen",
      pH: { min: 5.5, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Rustique, peu d’entretien.",
    etapes: ["Plantation tubercules", "Croissance libre"],
  },
  
  pertiance: ["Peu connu Colombie, invasif, super aliment "],
    tags: ["rustique", "novelty"],
},

// 82) YACON
{
  id: "yacon",
  note: 82,     
  type: "legume",
  ordrer: 82,
  image: ["/cultures/yacon.png"],
  nomFrancais: "Yacon",
  nomPopayan: "Yacón",
  nomScientifique: "Smallanthus sonchifolius",
  familleBotanique: "Asteraceae",
  presentation: "Racine andine sucrée, très intéressante nutritionnellement.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Origine andine, parfaitement adaptée.",
    recommandations: ["Sol profond"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 180, max: 240, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 5, max: 10, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 12, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Culture identitaire andine.",
    etapes: ["Plantation rhizomes", "Récolte tardive"],
  },
  pertiance: ["Andin, marché santé diabétiques"],
  tags: ["andine", "sante"],
},

// 85) CHAYOTTE
{
  id: "chayotte",
  note: 79,  type: "fruit",
  ordrer: 85,
  image: ["/cultures/chayotte.png"],
  nomFrancais: "Chayotte",
  nomPopayan: "Chayote",
  nomScientifique: "Sechium edule",
  familleBotanique: "Cucurbitaceae",
  presentation: "Plante grimpante très productive.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Parfaitement adaptée au climat frais humide.",
    recommandations: ["Treille", "Taille"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 150, max: 250, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 20, max: 60, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 14, max: 26, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Riche",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Excellente culture vivace.",
    etapes: ["Plantation fruit", "Palissage", "Récolte continue"],
  }, 
  pertiance: ["Très local Cauca, grimpant, productif, adapté "],
  tags: ["treille", "tres_productif"],
},

// 86) ARRACACHA
{
  id: "arracacha",
  note: 82,  
  type: "legume",
  ordrer: 86,
  image: ["/cultures/arracacha.png"],
  nomFrancais: "Arracacha",
  nomPopayan: "Arracacha",
  nomScientifique: "Arracacia xanthorrhiza",
  familleBotanique: "Apiaceae",
  presentation: "Racine andine traditionnelle.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Culture andine historique.",
    recommandations: ["Sol profond"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 240, max: 300, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 2, max: 6, unit: "kg/plant" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 12, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Profond",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Racine identitaire très pertinente.",
    etapes: ["Plantation rejets", "Récolte tardive"],
  }, 
  pertiance: ["Tubercule andin, altitude adapté, cycle long 10-12 mois "],
  tags: ["andine", "local"],
},

// 87) ULLUCO
{
  id: "ulluco",
  note: 59,  type: "legume",
  ordrer: 87,
  image: ["/cultures/ulluco.png"],
  nomFrancais: "Ulluco",
  nomPopayan: "Ulluco",
  nomScientifique: "Ullucus tuberosus",
  familleBotanique: "Basellaceae",
  presentation: "Tubercule andin rustique.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Très tolérant au froid et à l’humidité.",
    recommandations: ["Culture associée"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 180, max: 220, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 1.5, max: 3, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 10, max: 18, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Humifère",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 5.5, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: ["maïs"], aEviter: [] },
  howToCulture: {
    resume: "Culture traditionnelle peu exigeante.",
    etapes: ["Plantation tubercules", "Récolte"],
  }, 
  pertiance: ["Andin altitude, demande locale limitée, moins rentable que yacon ou teampinanbour     "],
tags: ["andine", "traditionnel"],
},

// 88) OCA
{
  id: "oca",
  note: 49,  type: "legume",
  ordrer: 88,
  image: ["/cultures/oca.png"],
  nomFrancais: "Oca",
  nomPopayan: "Oca",
  nomScientifique: "Oxalis tuberosa",
  familleBotanique: "Oxalidaceae",
  presentation: "Tubercule andin à cycle long.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Parfaitement adaptée aux hauts plateaux.",
    recommandations: ["Patience cycle"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 200, max: 260, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 1, max: 2.5, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 8, max: 18, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Humifère",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 5.5, max: 6.8, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Tubercule rustique à forte valeur culturelle.",
    etapes: ["Plantation tubercules", "Récolte tardive"],
  }, 
  pertiance: ["Tubercule andin, besoin froid moins adapté"],
tags: ["andine", "culture_traditionnelle"],
},

// 89) MASHUA
{
  id: "mashua",
  note: 48,  type: "legume",
  ordrer: 89,
  image: ["/cultures/mashua.png"],
  nomFrancais: "Mashua",
  nomPopayan: "Mashua",
  nomScientifique: "Tropaeolum tuberosum",
  familleBotanique: "Tropaeolaceae",
  presentation: "Tubercule andin très rustique, médicinal.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Tolère sols pauvres et froid.",
    recommandations: ["Culture extensive"],
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 200, max: 260, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 1, max: 2, unit: "kg/m²" },
  },
  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 8, max: 18, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Pauvre à moyen",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 5.5, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Culture de résilience.",
    etapes: ["Plantation tubercules", "Récolte"],
  }, 
  pertiance: ["Très andin, goût fort, marché très limité, peu adapté pour popayan "],
  tags: ["resilience", "andine"],
},

// E. Légumineuses

// 90) HARICOT VERT
{
  id: "haricot-vert",
  note: 83,  
  type: "legume",
  ordrer: 90,
  image: ["/cultures/haricot-vert.png"],
  nomFrancais: "Haricot vert",
  nomPopayan: "Judía verde",
  nomScientifique: "Phaseolus vulgaris",
  familleBotanique: "Fabaceae",
  presentation: "Gousses vertes longues et tendres, riches en fibres et vitamines.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat tempéré Popayán idéal; sensible aux pluies excessives.",
    recommandations: ["Paillage léger", "Support tuteur", "Rotation culturale"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 50, max: 65, unit: "jours" }, saisonnalite: "Octobre–Mars" },
  rendement: { unite: "kg_m2", valeur: { min: 2.5, max: 4, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche en matière organique", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "maïs"], aEviter: ["oignon", "ail"] },
  howToCulture: { resume: "Semer directement, tuteurer, récolte 50–65 jours.", etapes: ["Semis direct en rangs", "Installer tuteurs", "Entretien et désherbage", "Récolte jeunes gousses"] },

  pertiance: ["Demande forte, 50-60j, climat adapté "],
tags: ["basique", "rotation"],
},

// 91) PETIT POIS
{
  id: "petit-pois",
  note: 49,
  type: "legume",
  ordrer: 91,
  image: ["/cultures/petit-pois.png"],
  nomFrancais: "Petit pois",
  nomPopayan: "Guisante",
  nomScientifique: "Pisum sativum",
  familleBotanique: "Fabaceae",
  presentation: "Petits grains verts sucrés, consommés frais ou secs.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Préférer saison fraîche; sensible chaleur et humidité élevée.",
    recommandations: ["Support tuteur", "Paillage", "Rotation culturale"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 75, unit: "jours" }, saisonnalite: "Novembre–Février" },
  rendement: { unite: "kg_m2", valeur: { min: 1.5, max: 3, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 12, max: 22, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche, meuble", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["carotte", "laitue"], aEviter: ["oignon", "ail"] },
  howToCulture: { resume: "Semer en rang, récolte grains tendres.", etapes: ["Semis direct en rangs", "Installer tuteurs", "Arroser régulièrement", "Récolte jeunes grains"] },
  pertiance: ["Climat frais excellent pour Popayán "],
tags: ["basique", "rotation"],
},



// F. Autres légumes
// 96) CÉLERI BRANCHE
{

    id: "legume-celeri",
  note: 76,  type: "legume",
  ordrer: 96,
  image: ["/cultures/celeri.png"],
  nomFrancais: "Céleri branche",
  nomPopayan: "Apio (tallo)",
  nomScientifique: "Apium graveolens var. dulce",
  familleBotanique: "Apiaceae",
  presentation: "Plante bisannuelle cultivée pour ses pétioles charnus et croquants, au goût aromatique prononcé. Hauteur 60-80 cm.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Climat frais de Popayán favorable, mais nécessite sol riche et arrosage régulier. Sensible aux excès de chaleur (>25°C).",
    recommandations: [
      "Planter en saison fraîche (octobre-mars)",
      "Sol riche en matière organique",
      "Arrosage régulier et profond",
      "Buttage pour blanchir les pétioles",
      "Protection contre les limaces"
    ]
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 120, max: 180, unit: "jours" },
    nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" },
    saisonnalite: "Octobre à mars (saison fraîche)",
    dureeRecolteJours: { min: 30, max: 60, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 3, max: 6, unit: "kg/m²/cycle" },
    conditions: "Avec irrigation et fertilisation adéquates"
  },
  besoins: {
    eau: {
      niveau: "eleve",
      estimation: { min: 25, max: 40, unit: "L/sem/plante" },
      strategie: "Arrosage régulier et profond, sol toujours frais mais non détrempé."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 21, unit: "°C" },
      humiditeRelativePct: { min: 70, max: 85, unit: "%" },
      ensoleillement: "mi_ombre",
      luminosite: "moyenne"
    },
    sol: {
      typeSol: "Riche en matière organique, profond, frais",
      humiditeSol: "humide",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "eleve",
      notes: "Faim d'azote et potassium. Apport de compost bien décomposé. Sensible aux carences en bore."
    }
  },
  associationCulture: {
    compatible: ["legume-chou", "legume-oignon", "aromatique-ciboulette"],
    aEviter: ["legume-carotte", "legume-persil", "legume-panais"],
    notes: "Favorable avec les choux (repousse la piéride), mais évite les autres Apiacées"
  },
  howToCulture: {
    resume: "Semis en pépinière, repiquage à 25 cm, arrosage abondant, buttage pour blanchiment.",
    etapes: [
      "Semis en pépinière (profondeur 0.5 cm)",
      "Repiquage au stade 4-5 feuilles (25x25 cm)",
      "Arrosage régulier pour maintenir l'humidité",
      "Paillage pour conserver la fraîcheur",
      "Buttage progressif pour blanchir les pétioles"
    ],
    entretien: [
      "Désherbage régulier",
      "Fertilisation foliaire en bore si nécessaire",
      "Surveillance des limaces et pucerons"
    ],
    recolte: [
      "Récolter pied par pied quand les pétioles sont bien développés",
      "Couper à la base avec un couteau",
      "Peut se récolter feuille par feuille"
    ],
    postRecolte: [
      "Conserver au frais (0-2°C) avec humidité élevée",
      "Se conserve 2-3 semaines au réfrigérateur",
      "Peut être congelé après blanchiment"
    ]
  },
  pertiance: ["Aquaponie adapté, lent 120-180j, marché stable "],
  tags: ["legume_feuille", "aromatique", "riche_en_fibres", "saison_fraiche"]
},



// 99 Asperge
{
  id: "legume-asperge",
   note: 75, type: "legume",
  ordrer: 99,
  image: ["/cultures/asperge.png"],
  nomFrancais: "Asperge",
  nomPopayan: "Espárrago",
  nomScientifique: "Asparagus officinalis",
  familleBotanique: "Asparagaceae",
  presentation: "Plante vivace cultivée pour ses turions (jeunes pousses). Installation longue mais production pendant 10-15 ans.",
  difficulte: "difficile",
  adaptationPopayan: {
    adaptation: "moyenne",
    justification: "Climat adapté mais nécessite sol sableux bien drainé. Sensible à l'excès d'humidité des racines.",
    recommandations: [
      "Sol sableux ou léger impératif",
      "Buttes de plantation pour drainage",
      "Patience : première récolte à la 3ème année",
      "Variétés hybrides mâles plus productives"
    ]
  },
  techniques: ["plein_champ"],
  cycle: {
    dureeCycleJours: { min: 365, max: 365, unit: "jours" }, // Plante vivace
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Récolte printanière (6-8 semaines selon climat)",
    dureeRecolteJours: { min: 30, max: 60, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 1, max: 3, unit: "kg/m²/an" },
    conditions: "Aspergeraie bien établie (à partir de la 4ème année)"
  },
  besoins: {
    eau: {
      niveau: "moyen",
      estimation: { min: 15, max: 25, unit: "L/sem/m²" },
      strategie: "Arrosage profond mais espacé. Sol doit sécher entre les arrosages."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 60, max: 75, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Sableux, léger, profond, sans cailloux",
      humiditeSol: "sec",
      drainage: "tres_bon",
      pH: { min: 6.5, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "moyen",
      notes: "Apport de phosphore important à la plantation. Fertilisation potassique annuelle."
    }
  },
  associationCulture: {
    compatible: ["aromatique-persil", "fleur-souci", "legume-tomate"],
    aEviter: ["legume-oignon", "legume-ail", "legume-pomme_de_terre"],
    notes: "Le persil repousse la mouche de l'asperge. Éviter les alliums."
  },
  howToCulture: {
    resume: "Plantation de griffes profondes, première récolte légère à la 3ème année, coupe des tiges à l'automne.",
    etapes: [
      "Creuser tranchée de 30 cm de profondeur",
      "Planter griffes (racines) à 15 cm de profondeur",
      "Recouvrir progressivement pendant 2 ans",
      "Première récolte légère la 3ème année",
      "Récolte normale à partir de la 4ème année"
    ],
    entretien: [
      "Désherbage manuel (racines superficielles)",
      "Paillage avec compost en automne",
      "Couper les tiges sèches à l'automne",
      "Buttage léger pour blanchir les turions"
    ],
    recolte: [
      "Récolter quand turions atteignent 15-20 cm",
      "Couper à la base avec couteau spécial",
      "Récolter tous les 2-3 jours pendant la saison",
      "Arrêter la récolte quand diamètre diminue"
    ],
    postRecolte: [
      "Refroidir immédiatement après récolte",
      "Conserver verticale dans l'eau comme des fleurs",
      "Se conserve 3-5 jours au réfrigérateur",
      "Peut être congelée après blanchiment"
    ]
  }, 
  pertiance: ["Installation 2-3 ans, vivace"],
  tags: ["vivace", "luxe", "long_term", "printanier", "sol_sableux"]
},



// G. Champignons

// 102) SHIITAKE
{
  id: "shiitake",   
  note: 85, 
  type: "champignon",
  ordrer: 102,
  image: ["/cultures/shiitake.png"],
  nomFrancais: "Shiitake",
  nomPopayan: "Shiitake",
  nomScientifique: "Lentinula edodes",
  familleBotanique: "Omphalotaceae",
  presentation: "Champignon asiatique très prisé, saveur umami, forte valeur marchande.",
  difficulte: "moyenne",

  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Températures fraîches et humidité naturelle idéales sous serre ou local ombragé.",
    recommandations: ["Culture en sacs", "Ventilation passive", "Humidité contrôlée"],
  },
  techniques: ["bac_sous_serre"],
  cycle: {
    dureeCycleJours: { min: 45, max: 90, unit: "jours" },
    nbCyclesAn: { min: 3, max: 5, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 10, max: 20, unit: "kg/m²/an" },
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 12, max: 22, unit: "°C" },
      humiditeRelativePct: { min: 70, max: 90, unit: "%" },
      ensoleillement: "ombre",
    },
    sol: {
      typeSol: "Substrat bois dur",
      humiditeSol: "humide",
      drainage: "bon",
      pH: { min: 5.5, max: 6.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Culture sur substrat lignocellulosique stérilisé en sacs.",
    etapes: [
      "Préparation du substrat",
      "Ensemencement",
      "Incubation",
      "Choc hydrique",
      "Fructification",
    ],
  },
  pertiance: ["Prix premium, 45-90j, demande restaurants, adapté altitude"],
  tags: ["premium", "restaurants"],
},

// 103) PLEUROTE
{
  id: "pleurote",
  note: 95,   type: "champignon",
  ordrer: 103,
  image: ["/cultures/pleurote.png"],
  nomFrancais: "Pleurote",
  nomPopayan: "Seta ostra",
  nomScientifique: "Pleurotus ostreatus",
  familleBotanique: "Pleurotaceae",
  presentation: "Champignon rustique, productif, idéal pour démarrer.",
  difficulte: "facile",

  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Tolérant, très productif en climat andin humide.",
    recommandations: ["Sacs suspendus", "Paille locale"],
  },
  techniques: ["bac_sous_serre"],
  cycle: {
    dureeCycleJours: { min: 30, max: 60, unit: "jours" },
    nbCyclesAn: { min: 5, max: 8, unit: "cycles/an" },
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 15, max: 30, unit: "kg/m²/an" },
  },

  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 15, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 70, max: 95, unit: "%" },
      ensoleillement: "ombre",
    },
    sol: {
      typeSol: "Paille / sciure",
      humiditeSol: "humide",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },

  associationCulture: { compatible: [], aEviter: [] },

  howToCulture: {
    resume: "Champignon le plus simple et rentable en petite surface.",
    etapes: ["Hydratation paille", "Ensemencement", "Incubation", "Fructification"],
  }, 
  pertiance: ["Facile 30-60j, substrat déchets ferme, très rentable, humidité Popayán parfaite "],
  tags: ["debutant", "rentable"],
},

// 104) CHAMPIGNON DE PARIS
{
  id: "champignon-paris",
  note: 35,   type: "champignon",
  ordrer: 104,
  image: ["/cultures/champignon-paris.png"],
  nomFrancais: "Champignon de Paris",
  nomPopayan: "Champiñón blanco",
  nomScientifique: "Agaricus bisporus",
  familleBotanique: "Agaricaceae",
  presentation: "Champignon blanc standard du marché.",
  difficulte: "difficile",

  adaptationPopayan: {
    adaptation: "moyenne",
    justification: "Nécessite contrôle précis température et compost.",
    recommandations: ["Local fermé", "Hygiène stricte"],
  },

  techniques: ["bac_sous_serre"],
  cycle: {
    dureeCycleJours: { min: 60, max: 120, unit: "jours" },
  },

  rendement: {
    unite: "kg_m2",
    valeur: { min: 20, max: 30, unit: "kg/m²/an" },
  },

  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 14, max: 18, unit: "°C" },
      ensoleillement: "ombre",
    },
    sol: {
      typeSol: "Compost",
      humiditeSol: "humide",
      pH: { min: 6.5, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "eleve" },
  },

  associationCulture: { compatible: [], aEviter: [] },

  howToCulture: {
    resume: "Culture technique réservée à producteurs expérimentés.",
    etapes: ["Compostage", "Pasteurisation", "Ensemencement", "Fructification"],
  },
  pertiance: [
    "Champignon de Paris - 35/100",
"Infrastructure spécialisée coûteuse",
"Contrôle strict température",
"Moins rentable que pleurote"],
  tags: ["standard", "marché" ],
},

// H.Herbes aromatiques et condimentaires

// 108) PERSIL
{
    "id": "108",   
    note: 90, 
    "type": "Herbe aromatique",
    "ordrer": 108,
    image: ["/cultures/persil.png"],
    "nomFrancais": "Persil",
    "nomPopayan": "Perejil",
    "nomScientifique": "Petroselinum crispum",
    "familleBotanique": "Apiaceae",
    "presentation": "Aromatique bisannuelle cultivée pour ses feuilles très parfumées. Apprécie les sols frais et riches; bonne production en climat tempéré ou d'altitude.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Plante tolérante, performe bien si le sol reste frais sans asphyxie. Sensible aux excès d'eau stagnante et aux fortes chaleurs sèches.",
      "recommandations": [
        "Pailler pour garder l'humidité.",
        "Assurer un bon drainage en saison de pluies.",
        "Échelonner les semis pour une récolte continue."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 90, "unit": "jours" },
      "nbCyclesAn": { "min": 3, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Semis échelonnés toute l'année si température modérée; éviter les pics de chaleur sèche.",
      "dureeRecolteJours": { "min": 60, "max": 120, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.8, "max": 2.0, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Sol riche, arrosage régulier, coupes fréquentes."
    },
    "besoins": {
      "eau": {
        "niveau": "moyen",
        "strategie": "Arrosages réguliers pour garder le sol frais (éviter détrempé); paillage conseillé."
      },
      "climat": {
        "temperatureIdealeC": { "min": 10, "max": 22, "unit": "°C" },
        "ensoleillement": "mi_ombre",
        "luminosite": "moyenne"
      },
      "sol": {
        "typeSol": "Riche en humus, léger, bien drainé.",
        "humiditeSol": "frais",
        "drainage": "bon",
        "pH": { "min": 6.0, "max": 7.5, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "moyen",
        "notes": "Apprécie un sol fertile; excès d'azote = feuillage tendre plus sensible aux maladies."
      }
    },
    "associationCulture": {
      "compatible": ["119", "109"],
      "aEviter": [],
      "notes": "Bon compagnon général au potager; éviter la compétition racinaire en bacs trop petits."
    },
    "howToCulture": {
      "resume": "Semer en place, maintenir humide jusqu'à levée, puis éclaircir. Récolter en coupant régulièrement pour stimuler la repousse.",
      "etapes": [
        "Préparer un sol fin, riche, bien drainé.",
        "Semer en ligne, recouvrir très finement.",
        "Maintenir humide jusqu'à levée.",
        "Éclaircir et pailler.",
        "Récolter feuille à feuille ou en coupe."
      ],
      "densite": "20-30 plants/m²",
      "entretien": ["Paillage", "Désherbage léger", "Arrosage régulier"],
      "recolte": ["Couper les tiges externes en priorité", "Récoltes fréquentes pour densifier"],
      "postRecolte": ["Rincer, égoutter, conserver au frais; possibilité de congélation hachée."]
    },
  pertiance: ["Usage quotidien, 60-90j, facile, productif "],
    "tags": ["fines_herbes"],
    "sources": ["https://www.gammvert.fr/conseils-idees/persil", "https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-du-persil"]
  },
  // 109) CORIANDRE
  {
    id: "coriandre",   
    note: 95, 
    "type": "Herbe aromatique",
    "ordrer": 109,
    "image": ["/cultures/coriandre.png"],
    "nomFrancais": "Coriandre",
    "nomPopayan": "Cilantro",
    "nomScientifique": "Coriandrum sativum",
    "familleBotanique": "Apiaceae",
    "presentation": "Aromatique annuelle à feuilles et graines. Monte vite en fleurs si chaleur/stress hydrique, donc semis échelonnés recommandés.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Bonne croissance en températures modérées, mais montée à graines accélérée en chaleur et manque d'eau.",
      "recommandations": [
        "Semis échelonnés toutes les 2-3 semaines.",
        "Mi-ombre légère si soleil intense.",
        "Arrosage régulier sans excès."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 30, "max": 60, "unit": "jours" },
      "nbCyclesAn": { "min": 6, "max": 10, "unit": "cycles/an" },
      "saisonnalite": "Semer toute l'année si températures modérées; éviter stress (sécheresse/chaleur).",
      "dureeRecolteJours": { "min": 15, "max": 30, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.5, "max": 1.5, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Coupes jeunes avant montée."
    },
    "besoins": {
      "eau": {
        "niveau": "moyen",
        "strategie": "Maintenir frais; stress hydrique = montaison."
      },
      "climat": {
        "temperatureIdealeC": { "min": 15, "max": 24, "unit": "°C" },
        "ensoleillement": "variable",
        "luminosite": "moyenne"
      },
      "sol": {
        "typeSol": "Meuble, réchauffant, drainant, fertile.",
        "humiditeSol": "frais",
        "drainage": "bon",
        "pH": { "min": 6.0, "max": 7.5, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "moyen",
        "notes": "Compost mûr utile; éviter excès d'azote si objectif feuilles tendres mais fragiles."
      }
    },
    "associationCulture": {
      "compatible": ["108", "119"],
      "aEviter": [],
      "notes": "Bonne en bordure; semis serrés possibles pour feuilles."
    },
    "howToCulture": {
      "resume": "Semer direct (n'aime pas trop le repiquage). Garder humide, récolter jeune et souvent; relancer par semis successifs.",
      "etapes": [
        "Semer direct en lignes ou à la volée.",
        "Éclaircir quand les plants sont manipulables.",
        "Pailler et arroser régulièrement.",
        "Récolter feuilles jeunes; laisser monter pour graines si souhaité."
      ],
      "densite": "25-50 plants/m²",
      "entretien": ["Paillage", "Arrosage régulier", "Semis successifs"],
      "recolte": ["Feuilles dès 15-25 cm", "Graines quand les ombelles sèchent"],
      "postRecolte": ["Feuilles: consommer rapide; congélation possible; graines: sécher puis stocker au sec."]
    }, 
  pertiance: ["Essentiel cuisine colombienne, cycles 30-60j rapides, demande énorme "],
    "tags": ["fines_herbes"],
    "sources": ["https://fr.voltz-maraichage.com/sites/default/files/2021-07/plaquette_fines_herbes_2021.pdf", "https://soltech.com/fr/products/cilantro-plant-care"]
  },
  
  // 111) MENTHE POIVRÉE
  {
    id: "menthe-poivree",
  note: 85,     
  type: "Herbe aromatique",
    "ordrer": 111,
    "image": ["/cultures/menthe-poivree.png"],
    "nomFrancais": "Menthe poivrée",
    "nomPopayan": "Menta piperita",
    "nomScientifique": "Mentha × piperita",
    "familleBotanique": "Lamiaceae",
    "presentation": "Vivace aromatique très parfumée (menthol), adaptée aux sols frais et riches. Comme les autres menthes, elle s'étale vite via rhizomes.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "excellente",
      "justification": "Se comporte très bien si le sol reste frais; attention aux excès d'eau stagnante et à l'envahissement.",
      "recommandations": [
        "Culture en bac recommandée.",
        "Mi-ombre si soleil fort.",
        "Apports organiques fractionnés."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre", "hydroponie"],
    "cycle": {
      "dureeCycleJours": { "min": 30, "max": 60, "unit": "jours" },
      "nbCyclesAn": { "min": 6, "max": 12, "unit": "cycles/an" },
      "saisonnalite": "Coupes régulières toute l'année si croissance active.",
      "dureeRecolteJours": { "min": 120, "max": 300, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.8, "max": 2.5, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Sol humide mais drainant; fertilité régulière."
    },
    "besoins": {
      "eau": {
        "niveau": "eleve",
        "strategie": "Maintenir frais; arrosages réguliers, surtout en bac."
      },
      "climat": {
        "temperatureIdealeC": { "min": 12, "max": 26, "unit": "°C" },
        "ensoleillement": "mi_ombre",
        "luminosite": "moyenne"
      },
      "sol": {
        "typeSol": "Riche, nutritif, humide mais drainant.",
        "humiditeSol": "humide",
        "drainage": "moyen",
        "pH": { "min": 6.0, "max": 7.0, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "moyen",
        "notes": "Relancer par compost/thé de compost après chaque coupe importante."
      }
    },
    "associationCulture": {
      "compatible": ["108"],
      "aEviter": [],
      "notes": "Éviter la pleine terre non contrôlée (envahissante)."
    },
    howToCulture: {
      resume: "Planter en bac, garder humide, récolter avant floraison pour un maximum de menthol. Pincer souvent pour densifier.",
      etapes: [
        "Planter éclats/boutures en substrat riche.",
        "Arroser pour garder frais.",
        "Pincer les têtes régulièrement.",
        "Couper avant floraison."
      ],
      "densite": "6-10 plants/m² (ou 1 plant / pot 5-10 L)",
      "entretien": ["Contrôle rhizomes", "Apport organique régulier", "Renouveler/diviser tous les 12-24 mois"],
      "recolte": ["Avant floraison", "Le matin après évaporation de la rosée"],
      "postRecolte": ["Séchage doux à l'ombre possible; stockage hermétique."]
    }, 
  pertiance: ["Tisane digestive, demande forte, vivace, cycles 30-60j "],
    "tags": ["infusion", "medicinal"],
    "sources": ["https://www.pepinieres-rouxel.fr/plantes-vivaces/5155-mentha-x-piperita-menthe-poivree.html"]
  },

  // 114) THYM
  {
    "id": "thym",   
    note: 87, 
    "type": "Herbe aromatique",
    ordrer: 114,
    image: ["/cultures/thym.png"],
    "nomFrancais": "Thym",
    "nomPopayan": "Tomillo",
    "nomScientifique": "Thymus vulgaris",
    "familleBotanique": "Lamiaceae",
    "presentation": "Vivace méditerranéenne, très aromatique, aime sols pauvres et drainants. Redoute l'excès d'eau et l'humidité stagnante.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Risque de maladies/affaiblissement si humidité élevée et sol peu drainant; très bien si culture sur butte/sol léger.",
      "recommandations": [
        "Planter sur butte ou en bac très drainant.",
        "Éviter arrosages fréquents.",
        "Aérer (espacement) pour limiter champignons."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Vivace; meilleures coupes en période plus sèche/ensoleillée.",
      "dureeRecolteJours": { "min": 180, "max": 300, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Soleil, sol drainant, coupes avant floraison."
    },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosage léger à l'installation puis espacé; éviter sol humide." },
      "climat": {
        "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Pauvre à modérément fertile, caillouteux/sableux, très drainant.",
        "humiditeSol": "sec",
        "drainage": "bon",
        "pH": { "min": 6.0, "max": 8.0, "unit": "pH" }
      },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": {
      "compatible": ["116", "118", "115"],
      "aEviter": ["110"],
      "notes": "À éloigner des cultures très gourmandes en eau (menthes)."
    },
    "howToCulture": {
      "resume": "Planter en plein soleil dans un substrat très drainant. Tailler après floraison pour garder un port compact.",
      "etapes": [
        "Préparer un sol drainant (sable/graviers).",
        "Planter et arroser légèrement à l'installation.",
        "Limiter l'arrosage ensuite.",
        "Tailler après floraison."
      ],
      "densite": "6-9 plants/m²",
      "entretien": ["Taille légère", "Désherbage", "Surveillance pourritures en saison humide"],
      "recolte": ["Couper avant floraison pour arôme", "Séchage possible"],
      "postRecolte": ["Séchage à l'ombre, stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["sec", "transformation"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-la-lavande"]
  },
  // 115) ROMARIN
  {
    id: "romarin",   
    note: 49, 
    "type": "Herbe aromatique",
    "ordrer": 115,
    image: ["/cultures/romarin.png"],
    "nomFrancais": "Romarin",
    "nomPopayan": "Romero",
    "nomScientifique": "Salvia rosmarinus",
    "familleBotanique": "Lamiaceae",
    "presentation": "Arbuste aromatique vivace, très résistant à la sécheresse une fois établi. Exige un sol drainant, craint l'excès d'humidité.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Bon potentiel si sol drainant; sensible aux périodes prolongées d'humidité + chaleur et aux sols lourds.",
      "recommandations": [
        "Buttes/bacs drainants (sable, graviers).",
        "Arrosage modéré à l'installation puis espacé.",
        "Aération et taille sanitaire."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 180, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Vivace; coupes possibles presque toute l'année selon croissance.",
      "dureeRecolteJours": { "min": 180, "max": 330, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.3, "max": 1.2, "unit": "kg/m²" },
      "unite": "kg_m2"
    },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosages espacés; éviter l'humidité permanente." },
      "climat": {
        "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Léger, caillouteux/sableux, pauvre à modérément fertile, très drainant.",
        "humiditeSol": "sec",
        "drainage": "bon",
        "pH": { "min": 6.0, "max": 7.5, "unit": "pH" }
      },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": {
      "compatible": ["114", "118", "116"],
      "aEviter": ["110"],
      "notes": "Éviter proximité avec cultures à arrosage fréquent."
    },
    "howToCulture": {
      "resume": "Planter au soleil dans un sol drainant. Tailler pour densifier et limiter le bois mort; éviter l'excès d'eau.",
      "etapes": [
        "Planter en sol drainant (amender avec sable/gravier si besoin).",
        "Arroser à la reprise puis réduire.",
        "Tailler légèrement après floraison ou après fortes pousses.",
        "Surveiller maladies si humidité prolongée."
      ],
      "densite": "1-3 plants/m² (arbuste)",
      "entretien": ["Taille", "Désherbage", "Drainage/paillage minéral"],
      "recolte": ["Rameaux jeunes toute l'année"],
      "postRecolte": ["Séchage des rameaux; stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["sec", "arbustif"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-du-romarin"]
  },
  // 116) LAVANDE
  {
    id: "lavande",
  note: 49,     "type": "fleur",
    "ordrer": 116,
    "image": ["/cultures/lavande.png"],
    "nomFrancais": "Lavande",
    "nomPopayan": "Lavanda",
    "nomScientifique": "Lavandula spp.",
    "familleBotanique": "Lamiaceae",
    "presentation": "Arbrisseau méditerranéen mellifère, recherché pour fleurs et huile essentielle. Exige soleil et drainage; craint humidité stagnante.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "faible",
      "justification": "En climat humide, les lavandes souffrent si sol peu drainant (risque fongique). Réussite possible en substrat minéral très drainant et zone bien ventilée.",
      "recommandations": [
        "Culture sur butte/rocaille ou en bac.",
        "Substrat très drainant (sable, graviers, pouzzolane).",
        "Plein soleil et forte ventilation."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 180, "max": 365, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Vivace; floraison selon conditions (souvent 1 pic/an).",
      "dureeRecolteJours": { "min": 20, "max": 45, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.1, "max": 0.5, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Fleurs récoltées au début de floraison; rendement variable selon variété."
    },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Très peu d'eau une fois établie; éviter arrosages fréquents." },
      "climat": {
        "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Léger, sableux/caillouteux, pauvre à modérément fertile, excellent drainage.",
        "humiditeSol": "sec",
        "drainage": "bon",
        "pH": { "min": 5.5, "max": 8.0, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "faible",
        "notes": "Trop riche = végétation tendre et plus sensible; privilégier substrat minéral."
      }
    },
    "associationCulture": {
      "compatible": ["114", "115"],
      "aEviter": ["110"],
      "notes": "Éviter voisinage de plantes arrosées souvent."
    },
    "howToCulture": {
      "resume": "Installer au plein soleil en sol très drainant. Tailler après floraison; éviter excès de fertilisation et d'arrosage.",
      "etapes": [
        "Préparer sol drainant (rocaille/butte).",
        "Planter, arroser à la reprise uniquement.",
        "Paillage minéral (graviers) pour limiter humidité au collet.",
        "Tailler après floraison."
      ],
      "densite": "2-4 plants/m² (selon variété)",
      "entretien": ["Taille annuelle", "Surveillance pourritures du collet", "Ventilation/espacement"],
      "recolte": ["Couper épis au début de floraison"],
      "postRecolte": ["Séchage bouquets tête en bas à l'ombre, stockage au sec."]
    },
  pertiance: [""],
    "tags": ["mellifere", "cosmetique", "sec"],
    "sources": ["https://wikifarmer.com/library/fr/article/conditions-de-culture-de-la-lavande"]
  },


  // 118) LAVANDE VRAIE
  {
    id: "lavande-vraie",   
    note: 49, 
    "type": "fleur",
    "ordrer": 118,
    image: ["/cultures/lavande-vraie.png"],
    "nomFrancais": "Lavande vraie",
    "nomPopayan": "Lavanda fina",
    "nomScientifique": "Lavandula angustifolia",
    "familleBotanique": "Lamiaceae",
    "presentation": "Lavande fine, recherchée pour parfum. Besoin de plein soleil et drainage; préfère pH neutre à alcalin.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "faible",
      "justification": "Même contrainte que les lavandes: humidité et sols lourds favorisent maladies; réussite surtout en bac/rocaille drainante.",
      "recommandations": [
        "Substrat minéral drainant; éviter compost en excès.",
        "Ventilation forte.",
        "Arrosage minimal."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 180, "max": 365, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Vivace; floraison annuelle.",
      "dureeRecolteJours": { "min": 20, "max": 45, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.1, "max": 0.5, "unit": "kg/m²" },
      "unite": "kg_m2"
    },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Très faible; éviter humidité constante." },
      "climat": {
        "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Léger, sableux/caillouteux, pauvre, très drainant.",
        "humiditeSol": "sec",
        "drainage": "bon",
        "pH": { "min": 6.5, "max": 7.5, "unit": "pH" }
      },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": {
      "compatible": ["114", "115"],
      "aEviter": ["110"]
    },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant (pH neutre à alcalin). Tailler après floraison, arrosage minimal.",
      "etapes": [
        "Choisir plein soleil.",
        "Préparer substrat drainant (sable/gravier).",
        "Planter, arroser à l'installation.",
        "Tailler après floraison."
      ],
      "densite": "2-4 plants/m²",
      "entretien": ["Taille", "Paillage minéral", "Limiter arrosage"],
      "recolte": ["Au début floraison"],
      "postRecolte": ["Séchage bouquets; stockage au sec."]
    }, 
  pertiance: [""],
    "tags": ["cosmetique", "mellifere", "sec"],
    "sources": ["https://terreugo.com/fr/guide/quand-et-comment-bien-planter-des-lavandes-dans-son-jardin-"]
  },
  // 119 Ciboulette
  {
    id: "ciboulette",
  note: 49,     
  type: "Herbe aromatique",
    ordrer: 119,
    image: ["/cultures/ciboulette.png"],
    "nomFrancais": "Ciboulette",
    "nomPopayan": "Cebollín",
    "nomScientifique": "Allium schoenoprasum",
    "familleBotanique": "Amaryllidaceae",
    "presentation": "Vivace bulbeuse à feuilles creuses, goût d'oignon doux. Aime sol frais, riche, bien drainé; supporte soleil à mi-ombre.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Tolère bien le climat si sol reste frais sans stagnation; production régulière avec coupes.",
      "recommandations": [
        "Pailler pour garder frais.",
        "Arrosage régulier surtout en bac.",
        "Diviser les touffes pour relancer."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre", "hydroponie"],
    "cycle": {
      "dureeCycleJours": { "min": 45, "max": 75, "unit": "jours" },
      "nbCyclesAn": { "min": 4, "max": 10, "unit": "cycles/an" },
      "saisonnalite": "Vivace; coupes répétées quand croissance active.",
      "dureeRecolteJours": { "min": 180, "max": 330, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.5, "max": 1.8, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Coupes fréquentes + fertilité légère."
    },
    "besoins": {
      "eau": {
        "niveau": "moyen",
        "strategie": "Arrosage modéré mais régulier; laisser sécher légèrement la surface entre apports."
      },
      "climat": {
        "temperatureIdealeC": { "min": 10, "max": 24, "unit": "°C" },
        "ensoleillement": "variable",
        "luminosite": "moyenne"
      },
      "sol": {
        "typeSol": "Frais, léger, riche en humus, drainant.",
        "humiditeSol": "frais",
        "drainage": "bon",
        "pH": { "min": 6.5, "max": 7.0, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "moyen",
        "notes": "Un peu de compost au printemps relance bien la touffe."
      }
    },
    "associationCulture": {
      "compatible": ["108", "109"],
      "aEviter": [],
      "notes": "Bonne en bordure, utile en cuisine."
    },
    "howToCulture": {
      "resume": "Planter en touffe, garder sol frais, couper souvent. Diviser la touffe périodiquement pour rajeunir.",
      "etapes": [
        "Planter touffes/divisions en sol riche et drainant.",
        "Arroser à la reprise puis régulièrement.",
        "Couper à 3-5 cm pour relancer.",
        "Diviser tous les 1-2 ans."
      ],
      "densite": "9-16 touffes/m²",
      "entretien": ["Paillage", "Division", "Apport compost léger"],
      "recolte": ["Couper quand feuilles 15-25 cm", "Éviter de tout raser trop souvent en période faible"],
      "postRecolte": ["Utiliser frais; congélation ciselée possible."]
    }, 
  pertiance: [""],
    "tags": ["fines_herbes"],
    "sources": ["https://monjardinmamaison.maison-travaux.fr/mon-jardin-ma-maison/plantes-par-type/potager-legumes/ciboulette-comment-la-recolter-et-la-conserver-228660.html"]
  },

// 120 Estragon
 {
    id: "estragon",
  note: 49,     
  "type": "Herbe aromatique",
    ordrer: 120,
    "image": ["/cultures/estragon.png"],
    "nomFrancais": "Estragon",
    "nomPopayan": "Estragón",
    "nomScientifique": "Artemisia dracunculus",
    "familleBotanique": "Asteraceae",
    "presentation": "Vivace aromatique au goût anisé. Aime les situations ensoleillées, les sols légers et bien drainés; craint les excès d'humidité stagnante.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Bon potentiel si substrat drainant et arrosage modéré; risque en sols lourds et humides.",
      "recommandations": ["Culture en bac drainant si pluies fortes.", "Éviter l'eau stagnante.", "Rabattre et pailler légèrement en période fraîche."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Vivace; coupes possibles quand la plante est bien feuillée.",
      "dureeRecolteJours": { "min": 120, "max": 240, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosage modéré, laisser sécher légèrement entre apports; éviter sol détrempé." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 28, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Léger, plutôt pauvre à moyen, très drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["122", "121"], "aEviter": ["110"], "notes": "Éviter voisinage trop irrigué." },
    "howToCulture": {
      "resume": "Planter en sol drainant au soleil. Récolter les jeunes feuilles; diviser la touffe si elle s'épuise.",
      "etapes": ["Planter en sol drainant.", "Arroser à l'installation.", "Pincer/couper pour densifier.", "Rabattre en fin de cycle, pailler léger."],
      "densite": "4-6 plants/m²",
      "entretien": ["Drainage", "Taille", "Division tous les 2-3 ans"],
      "recolte": ["Jeunes feuilles et extrémités de tiges"],
      "postRecolte": ["Utilisation fraîche recommandée; possible congélation."]
    }, 
  pertiance: [""],
    "tags": ["fines_herbes"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-lestragon"]
  },
  // 121 Aneth
  {
    "id": "aneth",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 121,
    "image": ["/cultures/aneth.png"],
    "nomFrancais": "Aneth",
    "nomPopayan": "Eneldo",
    "nomScientifique": "Anethum graveolens",
    "familleBotanique": "Apiaceae",
    "presentation": "Annuelle aromatique à feuilles fines et ombelles. N'aime pas le repiquage, préfère semis direct; peut monter vite si stress (chaleur/sécheresse).",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Réussit bien en températures modérées; montée en graines plus rapide si stress.",
      "recommandations": ["Semer direct en place.", "Arrosage régulier sans excès.", "Échelonner les semis."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 40, "max": 70, "unit": "jours" },
      "nbCyclesAn": { "min": 4, "max": 8, "unit": "cycles/an" },
      "saisonnalite": "Semis échelonnés; récolte feuilles avant floraison.",
      "dureeRecolteJours": { "min": 15, "max": 30, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.3, "max": 1.0, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Sol frais; éviter alternance sécheresse/excès." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 25, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Meuble, drainant, fertile.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["122", "120"], "aEviter": [], "notes": "Bon au potager, attire insectes auxiliaires en floraison." },
    "howToCulture": {
      "resume": "Semer directement, éclaircir, arroser régulièrement. Récolter feuilles jeunes; laisser monter pour graines si souhaité.",
      "etapes": ["Semer direct.", "Maintenir humide jusqu'à levée.", "Éclaircir.", "Récolter avant floraison; ou laisser pour graines."],
      "densite": "40-80 plants/m²",
      "entretien": ["Arrosage régulier", "Désherbage léger", "Semis successifs"],
      "recolte": ["Feuilles jeunes", "Graines quand ombelles brunissent"],
      "postRecolte": ["Feuilles: consommer rapidement; graines: sécher et stocker."]
    }, 
  pertiance: [""],
    "tags": ["fines_herbes"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-laneth"]
  },

  // 122 Cerfeuil
  {
    "id": "cerfeuil",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 122,
    "image": ["/cultures/cerfeuil.png"],
    "nomFrancais": "Cerfeuil",
    "nomPopayan": "Perifollo",
    "nomScientifique": "Anthriscus cerefolium",
    "familleBotanique": "Apiaceae",
    "presentation": "Annuelle délicate au goût anisé. Préfère fraîcheur et mi-ombre, monte vite en graines si chaleur ou sécheresse.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Réussit bien en conditions fraîches et humides; en chaleur, la montaison s'accélère.",
      "recommandations": ["Mi-ombre et arrosage régulier.", "Semis échelonnés.", "Pailler pour garder frais."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 30, "max": 60, "unit": "jours" },
      "nbCyclesAn": { "min": 6, "max": 10, "unit": "cycles/an" },
      "saisonnalite": "Semis successifs pour feuilles tendres.",
      "dureeRecolteJours": { "min": 15, "max": 25, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.3, "max": 1.0, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Sol frais en continu; éviter stress hydrique." },
      "climat": { "temperatureIdealeC": { "min": 10, "max": 20, "unit": "°C" }, "ensoleillement": "mi_ombre", "luminosite": "moyenne" },
      "sol": { "typeSol": "Humifère, léger, fertile.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["108", "119", "120"], "aEviter": [], "notes": "Bon en bordure mi-ombragée." },
    "howToCulture": {
      "resume": "Semer souvent et serré, garder frais, récolter jeune. Le cerfeuil n'aime pas la chaleur et monte vite.",
      "etapes": ["Semer en place (mi-ombre).", "Arroser finement jusqu'à levée.", "Éclaircir légèrement.", "Récolter jeune et renouveler les semis."],
      "densite": "80-150 plants/m²",
      "entretien": ["Paillage", "Arrosage régulier", "Semis successifs"],
      "recolte": ["Couper au fur et à mesure des besoins"],
      "postRecolte": ["Utiliser frais; arôme fragile au séchage."]
    }, 
  pertiance: [""],
    "tags": ["fines_herbes"],
    "sources": ["https://www.aujardin.info/plantes/anthriscus-cerefolium.php"]
  },
  // 123 Origan
  {
    "id": "123",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 123,
    "image": [],
    "nomFrancais": "Origan",
    "nomPopayan": "Orégano",
    "nomScientifique": "Origanum vulgare",
    "familleBotanique": "Lamiaceae",
    "presentation": "Vivace aromatique rustique, très parfumée, aimant les sols secs et drainants. Excellent en bordure et en bacs drainants.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Supporte mal l'humidité stagnante; bon résultat en sol drainant et en plein soleil.",
      "recommandations": ["Culture sur butte/sol léger.", "Arrosage faible.", "Tailler après floraison."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Vivace; coupes régulières en période de croissance.",
      "dureeRecolteJours": { "min": 180, "max": 300, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.2, "max": 0.9, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosage limité; laisser sécher entre apports." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Léger, drainant, plutôt pauvre.", "humiditeSol": "sec", "drainage": "bon", "pH": { "min": 6.0, "max": 8.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["114", "115", "116", "118", "128", "129"], "aEviter": ["110"] },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant. Récolter avant floraison pour arôme; tailler pour densifier.",
      "etapes": ["Planter au soleil.", "Arroser à l'installation puis réduire.", "Couper avant floraison.", "Tailler après floraison."],
      "densite": "4-8 plants/m²",
      "entretien": ["Taille", "Désherbage", "Surveillance humidité stagnante"],
      "recolte": ["Avant floraison", "Coupes régulières"],
      "postRecolte": ["Séchage à l'ombre; stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["sec", "transformation"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-l-origan"]
  },

  // 124 Sauge
  {
    "id": "124",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 124,
    "image": [],
    "nomFrancais": "Sauge",
    "nomPopayan": "Salvia (Sage)",
    "nomScientifique": "Salvia officinalis",
    "familleBotanique": "Lamiaceae",
    "presentation": "Vivace aromatique aux feuilles épaisses, appréciant les sols drainants et le plein soleil. Craint l'excès d'eau et l'humidité stagnante.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Bonne si sol drainant; l'humidité prolongée peut provoquer des dépérissements.",
      "recommandations": ["Planter sur butte/sol drainant.", "Arrosage faible.", "Tailler pour aérer."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 180, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Vivace; récolte surtout sur pousses tendres.",
      "dureeRecolteJours": { "min": 180, "max": 330, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosages espacés; éviter sol humide constant." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Drainant, plutôt calcaire, pauvre à moyen.", "humiditeSol": "sec", "drainage": "bon", "pH": { "min": 6.0, "max": 8.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["114", "115", "116", "118", "123", "128", "129"], "aEviter": ["110"] },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant. Tailler pour garder un port compact et limiter l'humidité au cœur.",
      "etapes": ["Planter en sol drainant.", "Arroser à la reprise.", "Limiter arrosage ensuite.", "Tailler après floraison/forte pousse."],
      "densite": "2-4 plants/m²",
      "entretien": ["Taille", "Drainage", "Surveillance pourriture en saison humide"],
      "recolte": ["Feuilles sur pousses jeunes; éviter défoliation excessive"],
      "postRecolte": ["Séchage possible; stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["sec", "medicinal"],
    "sources": ["https://www.plantearomatique.com/nos-plantes/365-sauge-officinale-2.html"]
  },

  // 125 Basilic thaï
  {
    "id": "125",
   note: 49,    "type": "Herbe aromatique",
    "ordrer": 125,
    "image": [],
    "nomFrancais": "Basilic thaï",
    "nomPopayan": "Albahaca tailandesa",
    "nomScientifique": "Ocimum basilicum var. thyrsiflora",
    "familleBotanique": "Lamiaceae",
    "presentation": "Basilic tropical très parfumé (notes anisées/réglisse). Demande chaleur, soleil, sol riche et arrosage régulier sans stagnation.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Aime la chaleur modérée et l'humidité régulière; attention aux excès d'eau stagnante et aux nuits trop fraîches.",
      "recommandations": ["Sol drainant mais riche.", "Arrosage régulier.", "Pincer souvent pour éviter floraison précoce."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre", "hydroponie"],
    "cycle": {
      "dureeCycleJours": { "min": 35, "max": 60, "unit": "jours" },
      "nbCyclesAn": { "min": 4, "max": 10, "unit": "cycles/an" },
      "saisonnalite": "Production continue si températures > 15°C.",
      "dureeRecolteJours": { "min": 60, "max": 150, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 1.0, "max": 3.0, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Arrosage très régulier, sol légèrement humide; éviter stagnation aux racines." },
      "climat": { "temperatureIdealeC": { "min": 18, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Riche, fertile, léger, bien drainé.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve", "notes": "Apports fractionnés après récoltes (compost/engrais doux)." }
    },
    "associationCulture": { "compatible": ["108", "119"], "aEviter": ["114", "115", "116", "117", "118", "123", "124", "128", "129"], "notes": "Besoins en eau élevés: à séparer des méditerranéennes sèches." },
    "howToCulture": {
      "resume": "Semer au chaud, repiquer en sol riche, pincer régulièrement. Récolter en coupant les têtes pour stimuler les ramifications.",
      "etapes": ["Semer au chaud.", "Repiquer quand le plant est robuste.", "Planter au soleil en sol riche.", "Pincer têtes et supprimer fleurs.", "Récolter régulièrement."],
      "densite": "9-16 plants/m²",
      "entretien": ["Arrosage régulier", "Paillage", "Pincements fréquents"],
      "recolte": ["Couper au-dessus d'un nœud pour relancer"],
      "postRecolte": ["Utiliser frais; conservation courte au froid; possibilité de pesto/congélation."]
    }, 
  pertiance: [""],
    "tags": ["premium", "fines_herbes"],
    "sources": ["https://www.promixgardening.com/fr/conseils/comment-cultiver-le-basilic-89"]
  },
  // 126 Basilic citron
  {
    "id": "126",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 126,
    "image": [],
    "nomFrancais": "Basilic citron",
    "nomPopayan": "Albahaca limón",
    "nomScientifique": "Ocimum × citriodorum",
    "familleBotanique": "Lamiaceae",
    "presentation": "Basilic au parfum citronné. Besoins proches du basilic: chaleur, soleil, sol riche, arrosage régulier sans excès d'eau stagnante.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Très adapté si chaleur suffisante et arrosage régulier; vigilance sur drainage et maladies en humidité élevée.",
      "recommandations": ["Sol bien drainé.", "Arrosage régulier.", "Pincer et supprimer fleurs."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre", "hydroponie"],
    "cycle": {
      "dureeCycleJours": { "min": 35, "max": 60, "unit": "jours" },
      "nbCyclesAn": { "min": 4, "max": 10, "unit": "cycles/an" },
      "saisonnalite": "Production continue si températures > 15°C.",
      "dureeRecolteJours": { "min": 60, "max": 150, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 1.0, "max": 3.0, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Sol légèrement humide; éviter l'eau stagnante." },
      "climat": { "temperatureIdealeC": { "min": 18, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Riche, fertile, léger, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve" }
    },
    "associationCulture": { "compatible": ["108", "119"], "aEviter": ["114", "115", "116", "117", "118", "123", "124", "128", "129"] },
    "howToCulture": {
      "resume": "Semer au chaud, planter au soleil, arroser régulièrement et pincer pour favoriser la ramification. Récolter souvent avant floraison.",
      "etapes": ["Semer au chaud.", "Repiquer.", "Planter au soleil.", "Arroser régulièrement.", "Pincer/retirer fleurs.", "Récolter souvent."],
      "densite": "9-16 plants/m²",
      "entretien": ["Arrosage régulier", "Paillage", "Pincements"],
      "recolte": ["Couper têtes régulièrement"],
      "postRecolte": ["Utiliser frais; transformation (pesto) possible."]
    }, 
  pertiance: [""],
    "tags": ["premium", "fines_herbes"],
    "sources": ["https://www.alsagarden.com/boutique/ocimum-citriodorum-basilic-citron-graines/"]
  },

  // 128 Hysope
{
    "id": "128",
  note: 49,     "type": "Herbe aromatique",
    "ordrer": 128,
    "image": [],
    "nomFrancais": "Hysope",
    "nomPopayan": "Hisopo",
    "nomScientifique": "Hyssopus officinalis",
    "familleBotanique": "Lamiaceae",
    "presentation": "Vivace mellifère, aromatique et médicinale. Aime le plein soleil et les sols légers, secs et bien drainés; l'excès d'humidité peut être fatal.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Possible si sol très drainant et plante bien aérée; l'humidité stagnante est le principal risque.",
      "recommandations": ["Sol drainant (butte/rocaille).", "Plein soleil.", "Arrosage très modéré."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 180, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 4, "unit": "cycles/an" },
      "saisonnalite": "Vivace; récoltes sur jeunes pousses, floraison mellifère.",
      "dureeRecolteJours": { "min": 180, "max": 300, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Très peu d'eau une fois installée; éviter humidité stagnante." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Léger, caillouteux/sableux, très drainant, plutôt calcaire.", "humiditeSol": "sec", "drainage": "bon", "pH": { "min": 6.5, "max": 8.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["114", "115", "116", "118", "123", "124", "129"], "aEviter": ["110"] },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant. Tailler légèrement après floraison; éviter sols lourds humides.",
      "etapes": ["Planter en sol drainant.", "Arroser à la reprise.", "Limiter ensuite.", "Tailler pour aérer après floraison."],
      "densite": "3-6 plants/m²",
      "entretien": ["Taille", "Paillage minéral", "Surveillance humidité au collet"],
      "recolte": ["Feuilles avant floraison; sommités fleuries selon usage"],
      "postRecolte": ["Séchage à l'ombre; stockage au sec."]
    }, 
  pertiance: [""],
    "tags": ["mellifere", "medicinal", "sec"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-l-hysope"]
  },

  // 129 Sarriette
  {
    "id": "129",
    note: 49,   "type": "Herbe aromatique",
    "ordrer": 129,
    "image": [],
    "nomFrancais": "Sarriette",
    "nomPopayan": "Ajedrea",
    "nomScientifique": "Satureja hortensis",
    "familleBotanique": "Lamiaceae",
    "presentation": "Aromatique condimentaire (souvent annuelle) aimant le plein soleil et les sols légers, secs, pauvres et bien drainés; supporte très bien la sécheresse.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Réussite correcte si sol drainant et arrosage limité; en climat humide, risque si sol reste constamment mouillé.",
      "recommandations": ["Butte/sol drainant.", "Arrosages occasionnels seulement.", "Plein soleil et bonne aération."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 45, "max": 75, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Semis possibles en périodes moins froides; récolte avant floraison pour arôme.",
      "dureeRecolteJours": { "min": 30, "max": 60, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" }, "unite": "kg_m2" },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosage surtout à l'installation; ensuite très limité, laisser sécher entre arrosages." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Léger, sec, pauvre, plutôt calcaire, bien drainé.", "humiditeSol": "sec", "drainage": "bon", "pH": { "min": 6.5, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["114", "115", "116", "118", "123", "124", "128"], "aEviter": ["110"] },
    "howToCulture": {
      "resume": "Semer en place au soleil, arroser à la levée puis très peu. Récolter avant floraison et sécher si besoin.",
      "etapes": ["Semer en place au soleil.", "Arroser finement jusqu'à levée.", "Éclaircir.", "Arrosages occasionnels seulement.", "Récolter avant floraison."],
      "densite": "20-40 plants/m²",
      "entretien": ["Désherbage", "Limiter arrosage", "Coupe avant floraison"],
      "recolte": ["Couper tiges feuillées avant floraison"],
      "postRecolte": ["Séchage à l'ombre; stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["sec", "transformation"],
    "sources": ["https://www.fermedesaintemarthe.com/blogs/comment-reussir-la-culture-de/reussir-la-culture-de-la-sarriette"]
  },
// 130 Fenouil
{
  id: "fenouil",   note: 49, 
  type: "legume",
  ordrer: 130,
  image: [],
  nomFrancais: "Fenouil",
  nomPopayan: "Hinojo",
  nomScientifique: "Foeniculum vulgare",
  familleBotanique: "Apiaceae",
  presentation: "Plante aromatique et légume-bulbe apprécié pour sa saveur anisée.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Températures modérées favorables, mais l’excès d’humidité peut affecter le bulbe.",
    recommandations: ["Sol très drainant", "Espacement large", "Culture en saison moins pluvieuse"]
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 90, max: 120, unit: "jours" },
    nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" },
    saisonnalite: "Saison sèche préférée"
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2, max: 4, unit: "kg/m²" }
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 15, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil"
    },
    sol: {
      typeSol: "Léger, riche, drainant",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: { exigenceGlobale: "moyen" }
  },
  associationCulture: {
    compatible: ["laitue", "oignon"],
    aEviter: ["haricot"]
  },
  howToCulture: {
    resume: "Semis direct ou repiquage avec buttage progressif.",
    etapes: ["Semis", "Éclaircissage", "Buttage", "Récolte"],
    densite: "6–8 plants/m²"
  },
  pertiance: [""],
  tags: ["aromatique", "valeur_marche"]
},

// 131 Camomille
{
  id: "camomille",
  note: 49,   type: "Herbe aromatique",
  ordrer: 131,
  image: [],
  nomFrancais: "Camomille",
  nomPopayan: "Manzanilla",
  nomScientifique: "Matricaria chamomilla",
  familleBotanique: "Asteraceae",
  presentation: "Plante médicinale très demandée en infusion.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Très bien adaptée au climat frais et humide de Popayán.",
    recommandations: ["Bonne aération", "Récolte fréquente"]
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 60, max: 90, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 0.3, max: 0.6, unit: "kg sec/m²" }
  },
  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 12, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil"
    },
    sol: {
      typeSol: "Léger",
      humiditeSol: "frais",
      pH: { min: 5.5, max: 7.0, unit: "pH" }
    },
    nutriments: { exigenceGlobale: "faible" }
  },
  associationCulture: { compatible: ["menthe"], aEviter: [] },
  howToCulture: {
    resume: "Semis direct, récolte des fleurs ouvertes.",
    etapes: ["Semis", "Désherbage", "Récolte fleurs"]
  }, 
  pertiance: [""],
  tags: ["medicinale", "rentable", "facile"]
},

// 132 Verveine
{
  id: "verveine",
  note: 49,   type: "Herbe aromatique",
  ordrer: 132,
  image: [],
  nomFrancais: "Verveine",
  nomPopayan: "Verbena",
  nomScientifique: "Verbena officinalis",
  familleBotanique: "Verbenaceae",
  presentation: "Plante médicinale et aromatique.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Bonne tolérance à l’humidité et aux températures modérées.",
    recommandations: ["Tailles régulières"]
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 90, max: 120, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 0.5, max: 1.2, unit: "kg frais/m²" }
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 14, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil"
    },
    sol: {
      typeSol: "Drainant",
      humiditeSol: "frais",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: { exigenceGlobale: "faible" }
  },
  associationCulture: { compatible: ["camomille"], aEviter: [] },
  howToCulture: {
    resume: "Culture simple, récolte des feuilles.",
    etapes: ["Plantation", "Taille", "Récolte"]
  }, 
  pertiance: [""],
    tags: ["medicinale", "facile"]  
},

// 133 Citronnelle (lemongrass)
{
  id: "citronnelle",
  note: 49,   type: "Herbe aromatique",
  ordrer: 133,
  image: [],
  nomFrancais: "Citronnelle",
  nomPopayan: "Limoncillo",
  nomScientifique: "Cymbopogon citratus",
  familleBotanique: "Poaceae",
  presentation: "Plante tropicale aromatique à forte valeur.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "moyenne",
    justification: "Climat un peu frais, croissance plus lente.",
    recommandations: ["Bac", "Zone abritée", "Paillage"]
  },
  techniques: ["bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 120, max: 180, unit: "jours" }
  },
  rendement: {
    unite: "kg_plant",
    valeur: { min: 0.8, max: 1.5, unit: "kg/plant/an" }
  },
  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 18, max: 30, unit: "°C" },
      ensoleillement: "plein_soleil"
    },
    sol: {
      typeSol: "Riche",
      humiditeSol: "frais",
      pH: { min: 5.5, max: 7.5, unit: "pH" }
    },
    nutriments: { exigenceGlobale: "moyen" }
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Division de touffes, récolte progressive.",
    etapes: ["Plantation", "Entretien", "Coupe feuilles"]
  }, 
  pertiance: [""],
  tags: ["tropical", "valeur"]
},
// 134) AIL
{
  id: "ail-commun",
  note: 49,   type: "legume",
  ordrer: 134,
  image: ["https://example.com/ail.jpg"],
  nomFrancais: "Ail",
  nomPopayan: "Ajo",
  nomScientifique: "Allium sativum",
  familleBotanique: "Amaryllidaceae",
  presentation: "Bulbe condimentaire majeur, cycle long, sensible à l’excès d’humidité.",
  difficulte: "moyenne",

  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Températures adaptées mais pluviométrie élevée → drainage indispensable.",
    recommandations: ["Buttes drainantes", "Rotation stricte", "Variétés rustiques"],
  },

  techniques: ["pleine_terre", "plein_champ"],
  cycle: {
    dureeCycleJours: { min: 150, max: 210, unit: "jours" },
    saisonnalite: "Semis en saison plus sèche (juin–août).",
  },

  rendement: {
    unite: "kg_m2",
    valeur: { min: 0.8, max: 1.5, unit: "kg/m²" },
  },

  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 12, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Limoneux léger",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },

  associationCulture: {
    compatible: ["carotte", "betterave"],
    aEviter: ["legumineuses"],
  },

  howToCulture: {
    resume: "Plantation de caïeux, culture lente, récolte après jaunissement.",
    etapes: ["Préparer sol", "Planter caïeux", "Désherbage", "Arrêt arrosage", "Récolte"],
    recolte: ["Feuillage jauni à 70%"],
  }, 
  pertiance: [""],
  tags: ["condimentaire", "rotation"],
},

// 135) AIL VIOLET
{
  id: "ail-violet",
  note: 49,   type: "legume",
  ordrer: 135,
  image: ["https://example.com/ail-violet.jpg"],
  nomFrancais: "Ail violet",
  nomPopayan: "Ajo morado",
  nomScientifique: "Allium sativum var. ophioscorodon",
  familleBotanique: "Amaryllidaceae",
  presentation: "Ail aromatique premium, mieux conservé.",
  difficulte: "moyenne",

  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Plus tolérant à l’humidité que l’ail blanc.",
    recommandations: ["Variétés andines", "Buttes"],
  },

  techniques: ["pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 160, max: 220, unit: "jours" },
  },

  rendement: {
    unite: "kg_m2",
    valeur: { min: 1.0, max: 1.8, unit: "kg/m²" },
  },

  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 10, max: 20, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Limoneux drainé",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.2, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },

  associationCulture: { compatible: ["carotte"], aEviter: [] },

  howToCulture: {
    resume: "Ail de qualité supérieure, bonne valeur marché.",
    etapes: ["Plantation", "Entretien", "Séchage long"],
  }, 
  pertiance: [""],
  tags: ["premium", "condimentaire"],
},


// 137) OIGNON
{
  id: "oignon-jaune",
  note: 49,   type: "legume",
  ordrer: 137,
  image: ["https://example.com/oignon.jpg"],
  nomFrancais: "Oignon",
  nomPopayan: "Cebolla",
  nomScientifique: "Allium cepa",
  familleBotanique: "Amaryllidaceae",
  presentation: "Bulbe de base du marché local.",
  difficulte: "moyenne",

  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Possible mais sensible à l’humidité excessive.",
    recommandations: ["Drainage", "Variétés tropicales"],
  },

  techniques: ["pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 120, max: 180, unit: "jours" },
  },

  rendement: {
    unite: "kg_m2",
    valeur: { min: 2.0, max: 4.0, unit: "kg/m²" },
  },

  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 13, max: 22, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Sableux-limoneux",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.0, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },

  associationCulture: { compatible: ["carotte"], aEviter: ["pois"] },

  howToCulture: {
    resume: "Culture classique mais demande rigueur sanitaire.",
    etapes: ["Semis", "Repiquage", "Bulbaison", "Séchage"],
  }, 
  pertiance: [""],
    tags: ["basique", "rotation"],
},

// 138) OIGNON BLANC
{
  id: "oignon-blanc",
  note: 49,   type: "legume",
  ordrer: 138,
  image: ["https://example.com/oignon-blanc.jpg"],
  nomFrancais: "Oignon blanc",
  nomPopayan: "Cebolla blanca",
  nomScientifique: "Allium cepa",
  familleBotanique: "Amaryllidaceae",
  presentation: "Oignon doux, récolte plus précoce.",
  difficulte: "facile",

  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Cycle plus court, mieux adapté au climat humide.",
    recommandations: ["Rotation courte"],
  },

  techniques: ["pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 90, max: 130, unit: "jours" },
  },

  rendement: {
    unite: "kg_m2",
    valeur: { min: 2.5, max: 4.5, unit: "kg/m²" },
  },

  besoins: {
    eau: { niveau: "moyen" },
    climat: {
      temperatureIdealeC: { min: 14, max: 24, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Sol meuble",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.2, max: 7.0, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "moyen" },
  },

  associationCulture: { compatible: ["laitue"], aEviter: [] },

  howToCulture: {
    resume: "Oignon rapide, rentable pour marchés locaux.",
    etapes: ["Semis", "Éclaircissage", "Récolte jeune"],
  },
  
  pertiance: [""],
  tags: ["rapide", "rentable"],
},

// 140) LAURIER
{
  id: "laurier-sauce",
  note: 49,   type: "arbre_et_arbustes",
  ordrer: 140,
  image: ["https://example.com/laurier.jpg"],
  nomFrancais: "Laurier sauce",
  nomPopayan: "Laurel",
  nomScientifique: "Laurus nobilis",
  familleBotanique: "Lauraceae",
  presentation: "Arbuste aromatique pérenne.",
  difficulte: "facile",

  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Très bien adapté au climat andin.",
    recommandations: ["Taille annuelle"],
  },

  techniques: ["pleine_terre", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 365, max: 365, unit: "jours" },
  },

  rendement: {
    unite: "kg_plant",
    valeur: { min: 1, max: 3, unit: "kg/plant/an" },
  },

  besoins: {
    eau: { niveau: "faible" },
    climat: {
      temperatureIdealeC: { min: 10, max: 25, unit: "°C" },
      ensoleillement: "plein_soleil",
    },
    sol: {
      typeSol: "Bien drainé",
      humiditeSol: "frais",
      pH: { min: 6.0, max: 7.5, unit: "pH" },
    },
    nutriments: { exigenceGlobale: "faible" },
  },

  associationCulture: { compatible: [], aEviter: [] },

  howToCulture: {
    resume: "Plante pérenne à faible entretien.",
    etapes: ["Plantation", "Taille", "Récolte feuilles"],
  }, 
  pertiance: [""],
    tags: ["aromatique", "perenne"],
},


// 142) MOUTARDE
{
  id: "moutarde",
  note: 49,   type: "legume",
  ordrer: 142,
  image: ["https://example.com/moutarde.jpg"],
  nomFrancais: "Moutarde",
  nomPopayan: "Mostaza",
  nomScientifique: "Brassica juncea",
  familleBotanique: "Brassicaceae",
  presentation: "Plante annuelle cultivée pour ses graines ou feuilles aromatiques, croissance rapide.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Très facile à Popayán; tolère diverses conditions et cycle court.",
    recommandations: ["Semis direct", "Éclaircissage", "Rotation pour éviter maladies"],
  },
  techniques: ["plein_champ", "bac_exterieur", "bac_sous_serre"],
  cycle: { dureeCycleJours: { min: 40, max: 60, unit: "jours" }, nbCyclesAn: { min: 6, max: 8, unit: "cycles/an" }, saisonnalite: "Toute l'année" },
  rendement: { unite: "kg_m2", valeur: { min: 1, max: 2.5, unit: "kg/m²" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" }, sol: { typeSol: "Riche, léger", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["chou", "betterave"], aEviter: ["radis"] },
  howToCulture: { resume: "Semis direct, récolte feuilles ou graines.", etapes: ["Semis en rangs", "Éclaircissage", "Arrosage régulier", "Récolte jeunes feuilles ou graines mûres"] },
  
  pertiance: [""],
  tags: ["rapide", "aromatique", "rotation"],  
},

// 146) HIERBABUENA
{
  note: 49,   id: "hierbabuena",
  type: "Herbe aromatique",
  ordrer: 146,
  image: ["https://example.com/hierbabuena.jpg"],
  nomFrancais: "Menthe locale",
  nomPopayan: "Hierbabuena",
  nomScientifique: "Mentha spicata",
  familleBotanique: "Lamiaceae",
  presentation: "Menthe aromatique, feuilles parfumées pour tisanes et cuisine.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Croissance rapide, se plait en climat tempéré de Popayán.",
    recommandations: ["Arrosage régulier", "Paillage", "Éviter stagnation eau"] },
  techniques: ["plein_champ", "bac_exterieur", "bac_sous_serre"],
  cycle: { dureeCycleJours: { min: 30, max: 45, unit: "jours" }, nbCyclesAn: { min: 8, max: 12, unit: "cycles/an" }, saisonnalite: "Toute l'année" },
  rendement: { unite: "kg_m2", valeur: { min: 0.4, max: 0.8, unit: "kg/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 16, max: 24, unit: "°C" }, ensoleillement: "mi_ombre" }, sol: { typeSol: "Riche, meuble", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["poivron", "tomate"], aEviter: ["oignon"] },
  howToCulture: { resume: "Semis ou division racines, récolte feuilles continues.", etapes: ["Semis ou division rhizomes", "Arrosage régulier", "Paillage", "Récolte feuilles"] },

  pertiance: [""],
tags: ["facile", "rapide"],
},

// 147) CEDRON
{
  id: "cedron",
  note: 49,   type: "Herbe aromatique",
  ordrer: 147,
  image: ["https://example.com/cedron.jpg"],
  nomFrancais: "Verveine citronnée",
  nomPopayan: "Cedrón",
  nomScientifique: "Aloysia citrodora",
  familleBotanique: "Verbenaceae",
  presentation: "Arbuste aromatique à feuilles parfumées pour tisanes et cuisine.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Se développe très bien à Popayán; supporte plein soleil et mi-ombre.",
    recommandations: ["Paillage", "Arrosage modéré", "Taille légère pour stimuler feuilles"] },
  techniques: ["plein_champ", "bac_exterieur", "bac_sous_serre"],
  cycle: { dureeCycleJours: { min: 60, max: 90, unit: "jours" }, nbCyclesAn: { min: 6, max: 10, unit: "cycles/an" }, saisonnalite: "Toute l'année" },
  rendement: { unite: "kg_m2", valeur: { min: 0.3, max: 0.6, unit: "kg/m²/cycle" } },
  besoins: { eau: { niveau: "moyen" }, climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "mi_ombre" }, sol: { typeSol: "Riche, meuble", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } }, nutriments: { exigenceGlobale: "moyen" } },
  associationCulture: { compatible: ["menthe", "basilic"], aEviter: ["oignon"] },
  howToCulture: { resume: "Plantation ou bouturage, récolte feuilles aromatiques.", etapes: ["Semis ou bouturage", "Arrosage régulier", "Paillage", "Récolte feuilles"] },

  pertiance: [""],
tags: ["facile", "aromatique"],
},

// I. Plantes médicinales / thérapeutiques

// 148 Gingembre
{
  id: "aromatique-gingembre",
  note: 49,   type: "Herbe aromatique",
  ordrer: 148,
  image: ["https://example.com/gingembre.jpg"],
  nomFrancais: "Gingembre",
  nomPopayan: "Jengibre",
  nomScientifique: "Zingiber officinale",
  familleBotanique: "Zingiberaceae",
  presentation: "Plante herbacée vivace cultivée pour son rhizome aromatique et médicinal. Hauteur 60-120 cm. Feuilles lancéolées, inflorescences en épi.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Climat chaud et humide de Popayán favorable, mais nécessite protection contre excès d'eau et sol bien drainé.",
    recommandations: [
      "Planter en buttes ou surélevé pour drainage",
      "Paillage épais pour conserver humidité",
      "Protection contre le soleil direct intense",
      "Récolte partielle possible (prélèvement de rhizomes latéraux)"
    ]
  },
  techniques: ["bac_exterieur", "plein_champ"],
  cycle: {
    dureeCycleJours: { min: 240, max: 300, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Plantation en début de saison des pluies, récolte en saison sèche",
    dureeRecolteJours: { min: 30, max: 60, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2, max: 4, unit: "kg/m²/cycle" },
    conditions: "Rhizomes frais après 8-10 mois"
  },
  besoins: {
    eau: {
      niveau: "eleve",
      estimation: { min: 20, max: 30, unit: "L/sem/m²" },
      strategie: "Sol constamment humide mais jamais détrempé. Arrosage régulier mais drainage parfait."
    },
    climat: {
      temperatureIdealeC: { min: 22, max: 30, unit: "°C" },
      humiditeRelativePct: { min: 70, max: 85, unit: "%" },
      ensoleillement: "mi_ombre",
      luminosite: "moyenne"
    },
    sol: {
      typeSol: "Riche en matière organique, léger, bien drainé",
      humiditeSol: "humide",
      drainage: "bon",
      pH: { min: 6.0, max: 6.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "moyen",
      notes: "Apprécie le compost bien décomposé. Éviter les excès d'azote qui favorisent le feuillage au détriment des rhizomes."
    }
  },
  associationCulture: {
    compatible: ["aromatique-curcuma", "legume-patate_douce", "aromatique-basilic"],
    aEviter: ["arbre-racines_profondes"],
    notes: "Bonne association avec autres Zingibéracées. Éviter la compétition avec arbres."
  },
  howToCulture: {
    resume: "Plantation de rhizomes frais en buttes, paillage, arrosage régulier, récolte après 8-10 mois quand feuilles jaunissent.",
    etapes: [
      "Choisir rhizomes frais avec bourgeons visibles",
      "Planter à 5-10 cm de profondeur, bourgeons vers le haut",
      "Espacement 20x30 cm",
      "Buttes de 15-20 cm de hauteur pour drainage",
      "Paillage épais (paille, feuilles)"
    ],
    entretien: [
      "Arrosage régulier pour maintenir l'humidité",
      "Désherbage manuel (racines superficielles)",
      "Apport de compost en surface"
    ],
    recolte: [
      "Récolter quand les feuilles jaunissent et sèchent",
      "Creuser délicatement pour ne pas abîmer les rhizomes",
      "Prélever les rhizomes matures, laisser les jeunes",
      "Pour récolte partielle : prélever les rhizomes latéraux"
    ],
    postRecolte: [
      "Laver soigneusement les rhizomes",
      "Sécher à l'ombre pendant 1-2 jours",
      "Conserver au frais (10-13°C) ou congeler",
      "Peut être séché et réduit en poudre"
    ]
  }, 
  pertiance: [""],
  tags: ["medicinal", "rhizome", "tropical", "digestif", "anti-inflammatoire"]
},

// 149 Curcuma
{
  id: "aromatique-curcuma",
  note: 49,   type: "Herbe aromatique",
  ordrer: 149,
  image: ["https://example.com/curcuma.jpg"],
  nomFrancais: "Curcuma",
  nomPopayan: "Cúrcuma / Azafrán de la tierra",
  nomScientifique: "Curcuma longa",
  familleBotanique: "Zingiberaceae",
  presentation: "Plante herbacée vivace proche du gingembre, cultivée pour ses rhizomes orange vif utilisés comme épice et colorant. Hauteur 60-90 cm.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Climat tropical humide adapté. Plus sensible au froid que le gingembre. Nécessite chaleur constante.",
    recommandations: [
      "Planter après les dernières gelées",
      "Protection contre le vent (feuilles fragiles)",
      "Sol riche et profond",
      "Patience : développement lent au début"
    ]
  },
  techniques: ["bac_exterieur", "plein_champ"],
  cycle: {
    dureeCycleJours: { min: 270, max: 330, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Plantation en saison des pluies, récolte en saison sèche",
    dureeRecolteJours: { min: 30, max: 45, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 1.5, max: 3, unit: "kg/m²/cycle" },
    conditions: "Rhizomes frais après 9-11 mois"
  },
  besoins: {
    eau: {
      niveau: "eleve",
      estimation: { min: 25, max: 35, unit: "L/sem/m²" },
      strategie: "Sol toujours humide, arrosage fréquent en saison sèche. Sensible à la sécheresse."
    },
    climat: {
      temperatureIdealeC: { min: 20, max: 35, unit: "°C" },
      humiditeRelativePct: { min: 75, max: 90, unit: "%" },
      ensoleillement: "mi_ombre",
      luminosite: "moyenne"
    },
    sol: {
      typeSol: "Riche en humus, profond, meuble",
      humiditeSol: "tres_humide",
      drainage: "bon",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "moyen",
      notes: "Apprécie les apports de potassium. Fumier bien décomposé avant plantation."
    }
  },
  associationCulture: {
    compatible: ["aromatique-gingembre", "aromatique-citronnelle"],
    aEviter: ["plantes_exigeantes_en_eau"],
    notes: "Bonne compagnie avec autres plantes tropicales similaires"
  },
  howToCulture: {
    resume: "Plantation de rhizomes avec bourgeons, sol riche, chaleur constante, récolte quand feuilles sèchent complètement.",
    etapes: [
      "Planter rhizomes avec 2-3 bourgeons",
      "Profondeur 5-8 cm, espacement 30x40 cm",
      "Sol riche préparé avec compost",
      "Paillage épais pour conserver humidité",
      "Protection contre le soleil direct intense"
    ],
    entretien: [
      "Arrosage régulier, jamais de sécheresse",
      "Désherbage soigneux",
      "Buttage léger pour soutenir les tiges"
    ],
    recolte: [
      "Attendre que toutes les feuilles soient sèches",
      "Creuser délicatement avec fourche",
      "Séparer les rhizomes mères des rejetons",
      "Garder les plus beaux rejetons pour replantation"
    ],
    postRecolte: [
      "Nettoyer soigneusement",
      "Faire bouillir 45 minutes pour fixer la couleur",
      "Sécher au soleil 10-15 jours",
      "Broyer pour obtenir la poudre",
      "Conserver dans un récipient hermétique à l'abri de la lumière"
    ]
  }, 
  pertiance: [""],
  tags: ["medicinal", "rhizome", "colorant", "anti-oxydant", "epice"]
},

// 150 Aloe vera
{
  id: "medicinal-aloe-vera",
  note: 80,   type: "Herbe aromatique",
  ordrer: 150,
  image: ["/cultures/aloe-vera.jpg"],
  nomFrancais: "Aloe vera",
  nomPopayan: "Sábila",
  nomScientifique: "Aloe barbadensis miller",
  familleBotanique: "Asphodelaceae",
  presentation: "Plante succulente vivace aux feuilles charnues contenant un gel aux propriétés médicinales. Hauteur 60-80 cm.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "S'adapte bien à Popayán avec un bon drainage. Supporte les périodes sèches mais sensible à l'excès d'humidité.",
    recommandations: [
      "Drainage parfait impératif",
      "Protection contre les pluies trop abondantes",
      "Planter en pente ou surélevé",
      "Éviter l'eau stagnante sur les feuilles"
    ]
  },
  techniques: ["bac_exterieur", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 365, max: 730, unit: "jours" }, // Plante vivace
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Croissance toute l'année, plus active en saison chaude",
    dureeRecolteJours: { min: 365, max: 365, unit: "jours" } // Récolte possible toute l'année
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 3, max: 6, unit: "feuilles/plant/an" },
    conditions: "Plant mature (2 ans et plus)"
  },
  besoins: {
    eau: {
      niveau: "faible",
      estimation: { min: 5, max: 10, unit: "L/sem/plant" },
      strategie: "Arrosage modéré, laisser sécher complètement entre deux arrosages. Réduire en hiver."
    },
    climat: {
      temperatureIdealeC: { min: 18, max: 30, unit: "°C" },
      humiditeRelativePct: { min: 40, max: 60, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Sableux, très drainant, pauvre",
      humiditeSol: "sec",
      drainage: "bon",
      pH: { min: 7.0, max: 8.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Tolère les sols pauvres. Excès d'engrais nuit à la qualité du gel."
    }
  },
  associationCulture: {
    compatible: ["medicinal-romarin", "medicinal-lavande"],
    aEviter: ["plantes_exigeantes_en_eau"],
    notes: "Associer avec autres plantes méditerranéennes ou succulentes"
  },
  howToCulture: {
    resume: "Multiplication par rejets, plantation en sol drainant, peu d'eau, récolte des feuilles externes matures.",
    etapes: [
      "Prélever les rejets (bébés) à la base de la plante mère",
      "Laisser sécher la coupure 2-3 jours",
      "Planter dans mélange sableux (50% sable)",
      "Arroser légèrement après 1 semaine",
      "Espacer de 50-60 cm"
    ],
    entretien: [
      "Arroser très modérément",
      "Supprimer les feuilles sèches",
      "Diviser tous les 3-4 ans",
      "Protéger des escargots et limaces"
    ],
    recolte: [
      "Récolter les feuilles externes les plus âgées",
      "Couper à la base avec un couteau propre",
      "Laisser au moins 8-10 feuilles sur la plante",
      "Ne pas récolter sur plantes de moins de 2 ans"
    ],
    postRecolte: [
      "Utiliser frais immédiatement pour qualité maximale",
      "Pour conservation : couper la feuille, extraire le gel, congeler",
      "Le gel se conserve 1 semaine au réfrigérateur",
      "Éviter le contact avec la peau de la feuille (latex irritant)"
    ]
  }, 
  pertiance: [""],
  tags: ["succulente", "medicinal", "peau", "cicatrisant", "drainage_important"]
},

// 151 Stevia
{
  id: "aromatique-stevia",
  note: 49,   type: "Herbe aromatique",
  ordrer: 151,
  image: ["https://example.com/stevia.jpg"],
  nomFrancais: "Stevia",
  nomPopayan: "Estevia",
  nomScientifique: "Stevia rebaudiana",
  familleBotanique: "Asteraceae",
  presentation: "Plante vivace arbustive aux feuilles très sucrées (édulcorant naturel). Hauteur 40-80 cm. Petites fleurs blanches.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Climat subtropical idéal. Résiste bien aux conditions de Popayán. Production abondante de feuilles sucrées.",
    recommandations: [
      "Pincer régulièrement pour favoriser la ramification",
      "Récolter avant floraison pour goût optimal",
      "Protection contre le gel occasionnel",
      "Division des touffes tous les 2-3 ans"
    ]
  },
  techniques: ["bac_exterieur", "plein_champ"],
  cycle: {
    dureeCycleJours: { min: 120, max: 150, unit: "jours" }, // Cycle de croissance avant récolte
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
    saisonnalite: "Croissance printemps-été, récoltes multiples",
    dureeRecolteJours: { min: 30, max: 60, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 0.5, max: 1.5, unit: "kg feuilles fraîches/m²/an" },
    conditions: "Feuilles sèches représentent 10-15% du poids frais"
  },
  besoins: {
    eau: {
      niveau: "moyen",
      estimation: { min: 10, max: 20, unit: "L/sem/plant" },
      strategie: "Arrosage régulier mais modéré. Supporte mieux la sécheresse que l'excès d'eau."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 30, unit: "°C" },
      humiditeRelativePct: { min: 50, max: 70, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Léger, bien drainé, pas trop riche",
      humiditeSol: "frais",
      drainage: "bon",
      pH: { min: 6.5, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Excès d'azote réduit le pouvoir sucré. Préfère sol légèrement acide à neutre."
    }
  },
  associationCulture: {
    compatible: ["aromatique-basilic", "aromatique-menthe"],
    aEviter: ["plantes_grandes_ombre"],
    notes: "Bon voisinage avec autres aromatiques"
  },
  howToCulture: {
    resume: "Bouturage ou semis, pincement pour buissonner, récolte avant floraison, séchage à l'ombre.",
    etapes: [
      "Multiplication par boutures (plus simple que semis)",
      "Planter à 40-50 cm d'intervalle",
      "Pincer l'extrémité à 20 cm pour ramification",
      "Récolter les tiges avant floraison",
      "Tailler à 10 cm du sol en fin de saison"
    ],
    entretien: [
      "Arrosage modéré",
      "Désherbage régulier",
      "Suppression des fleurs pour concentrer l'énergie dans les feuilles",
      "Protection hivernale si températures <5°C"
    ],
    recolte: [
      "Couper les tiges à 10-15 cm du sol",
      "Récolter de préférence le matin",
      "Choisir les feuilles les plus âgées (plus sucrées)",
      "Éviter de récolter plus d'1/3 de la plante à la fois"
    ],
    postRecolte: [
      "Sécher les feuilles à l'ombre dans un endroit ventilé",
      "Conserver feuilles entières pour meilleure conservation",
      "Broyer au moment de l'utilisation",
      "Conserver dans un récipient hermétique à l'abri de la lumière"
    ]
  }, 
  pertiance: [""],
  tags: ["edulcorant", "diabetique", "feuilles", "sans_calories", "vivace_tendre"]
},

// 152 Calendula / Souci
{
  id: "fleur-calendula",
  note: 49,   type: "fleur",
  ordrer: 152,
  image: ["https://example.com/calendula.jpg"],
  nomFrancais: "Calendula / Souci officinal",
  nomPopayan: "Caléndula / Mercadela",
  nomScientifique: "Calendula officinalis",
  familleBotanique: "Asteraceae",
  presentation: "Plante annuelle aux fleurs orange vif comestibles et médicinales. Hauteur 30-60 cm. Floraison abondante et prolongée.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "S'adapte parfaitement au climat de Popayán. Résiste bien aux variations. Répulsion naturelle contre certains insectes.",
    recommandations: [
      "Semis direct facile",
      "Éclaircir pour éviter la concurrence",
      "Supprimer fleurs fanées pour prolonger floraison",
      "Excellent compagnon pour légumes"
    ]
  },
  techniques: ["plein_champ", "bac_exterieur"],
  cycle: {
    dureeCycleJours: { min: 60, max: 90, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
    saisonnalite: "Toute l'année, meilleure en saison fraîche",
    dureeRecolteJours: { min: 90, max: 120, unit: "jours" }
  },
  rendement: {
    unite: "botte_m2",
    valeur: { min: 15, max: 30, unit: "bottes/m²/cycle" },
    conditions: "Fleurs fraîches pour bouquets ou séchage"
  },
  besoins: {
    eau: {
      niveau: "faible",
      estimation: { min: 5, max: 10, unit: "L/sem/m²" },
      strategie: "Arrosage modéré. Tolère bien la sécheresse une fois établie."
    },
    climat: {
      temperatureIdealeC: { min: 10, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 40, max: 70, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Tous types, même pauvres",
      humiditeSol: "sec",
      drainage: "moyen",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Trop d'azote favorise le feuillage au détriment des fleurs."
    }
  },
  associationCulture: {
    compatible: ["legume-tomate", "legume-chou", "legume-carotte"],
    aEviter: [],
    notes: "Excellente plante compagne qui repousse nématodes, pucerons et autres insectes"
  },
  howToCulture: {
    resume: "Semis direct en place, éclaircissage, récolte des fleurs épanouies, laisser quelques fleurs pour graines.",
    etapes: [
      "Semis direct à 0.5 cm de profondeur",
      "Éclaircir à 20-30 cm entre plants",
      "Arrosage léger jusqu'à la levée",
      "Paillage léger pour limiter les mauvaises herbes"
    ],
    entretien: [
      "Suppression régulière des fleurs fanées",
      "Arrosage seulement en période très sèche",
      "Pas besoin de fertilisation"
    ],
    recolte: [
      "Cueillir les fleurs en plein épanouissement, de préférence le matin",
      "Récolter avec un peu de tige",
      "Pour graines : laisser quelques fleurs sécher sur pied"
    ],
    postRecolte: [
      "Pour usage frais : mettre dans l'eau immédiatement",
      "Pour séchage : étaler à l'ombre dans un endroit ventilé",
      "Pour huile infusée : mettre fleurs fraîches dans huile d'olive",
      "Conserver fleurs sèches dans un bocal hermétique"
    ]
  },
  pertiance: [""],
  tags: ["medicinal", "comestible", "fleur_coupe", "plante_compagne", "cicatrisant"]
},

// 153 Camomille
{
  id: "medicinal-camomille",
  note: 49,   type: "Herbe aromatique",
  ordrer: 153,
  image: ["https://example.com/camomille.jpg"],
  nomFrancais: "Camomille romaine",
  nomPopayan: "Manzanilla",
  nomScientifique: "Chamaemelum nobile",
  familleBotanique: "Asteraceae",
  presentation: "Plante vivace basse (15-30 cm) aux fleurs blanches à cœur jaune, très aromatiques. Feuilles finement découpées.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "S'adapte bien au climat tempéré de Popayán. Préfère les situations ensoleillées et sols bien drainés.",
    recommandations: [
      "Sol léger et drainant",
      "Exposition ensoleillée",
      "Division des touffes tous les 2-3 ans",
      "Récolte matinale pour arôme maximum"
    ]
  },
  techniques: ["bac_exterieur", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 90, max: 120, unit: "jours" },
    nbCyclesAn: { min: 2, max: 3, unit: "cycles/an" },
    saisonnalite: "Floraison principalement printemps-été",
    dureeRecolteJours: { min: 60, max: 90, unit: "jours" }
  },
  rendement: {
    unite: "botte_m2",
    valeur: { min: 10, max: 20, unit: "bottes/m²/an" },
    conditions: "Fleurs fraîches ou sèches"
  },
  besoins: {
    eau: {
      niveau: "faible",
      estimation: { min: 5, max: 8, unit: "L/sem/m²" },
      strategie: "Arrosage modéré. Tolère bien la sécheresse."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 40, max: 60, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Léger, sableux, bien drainé",
      humiditeSol: "sec",
      drainage: "bon",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Tolère les sols pauvres. Excès d'engrais nuit à l'arôme."
    }
  },
  associationCulture: {
    compatible: ["aromatique-menthe", "fleur-lavande"],
    aEviter: ["plantes_hautes_ombre"],
    notes: "Bon voisinage avec autres plantes médicinales"
  },
  howToCulture: {
    resume: "Semis ou division, exposition ensoleillée, récolte des fleurs en boutons, séchage à l'ombre.",
    etapes: [
      "Semis en surface (graines très fines)",
      "Division de touffes au printemps",
      "Espacer de 20-30 cm",
      "Paillage léger avec gravier (conserve chaleur)"
    ],
    entretien: [
      "Arrosage seulement en période très sèche",
      "Désherbage soigneux (plante basse)",
      "Suppression des fleurs fanées",
      "Taille légère après floraison"
    ],
    recolte: [
      "Cueillir les fleurs quand les pétales blancs sont horizontaux",
      "Récolter de préférence le matin après évaporation de la rosée",
      "Choisir les fleurs sans taches ni insectes"
    ],
    postRecolte: [
      "Sécher rapidement à l'ombre dans un endroit ventilé",
      "Conserver fleurs entières pour meilleure conservation",
      "Broyer au moment de l'utilisation",
      "Durée de conservation : 1 an maximum"
    ]
  }, 
  pertiance: [""],
  tags: ["infusion", "calmant", "digestif", "fleur", "aromatique"]
},

// 156 Sauge
{
  id: "aromatique-sauge",
  note: 49,   type: "Herbe aromatique",
  ordrer: 156,
  image: ["https://example.com/sauge.jpg"],
  nomFrancais: "Sauge officinale",
  nomPopayan: "Salvia",
  nomScientifique: "Salvia officinalis",
  familleBotanique: "Lamiaceae",
  presentation: "Arbuste vivace aux feuilles gris-vert veloutées, très aromatiques. Hauteur 40-70 cm. Fleurs bleu-violet.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Très bien adaptée au climat de Popayán. Résiste bien à la sécheresse et apprécie le soleil.",
    recommandations: [
      "Sol bien drainé impératif",
      "Exposition ensoleillée",
      "Tailler après floraison pour maintenir forme compacte",
      "Diviser tous les 3-4 ans"
    ]
  },
  techniques: ["bac_exterieur", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 365, max: 365, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Vivace, récolte possible toute l'année",
    dureeRecolteJours: { min: 300, max: 365, unit: "jours" }
  },
  rendement: {
    unite: "botte_m2",
    valeur: { min: 15, max: 25, unit: "bottes/m²/an" },
    conditions: "Récoltes régulières"
  },
  besoins: {
    eau: {
      niveau: "faible",
      estimation: { min: 5, max: 10, unit: "L/sem/plant" },
      strategie: "Arrosage modéré, supporte bien la sécheresse. Éviter l'eau stagnante."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 40, max: 60, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Léger, calcaire, bien drainé",
      humiditeSol: "sec",
      drainage: "bon",
      pH: { min: 6.5, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Tolère les sols pauvres. Excès d'azote réduit l'arôme."
    }
  },
  associationCulture: {
    compatible: ["aromatique-romarin", "aromatique-thym", "legume-carotte"],
    aEviter: ["plantes_exigeantes_en_eau"],
    notes: "Repousse certains insectes nuisibles (piéride du chou)"
  },
  howToCulture: {
    resume: "Bouturage facile, plantation en sol drainant, taille régulière, récolte avant floraison.",
    etapes: [
      "Boutures de 10 cm au printemps",
      "Planter en sol léger et drainant",
      "Espacer de 40-50 cm",
      "Paillage minéral (graviers) pour drainage et chaleur"
    ],
    entretien: [
      "Tailler après floraison pour éviter le vieillissement",
      "Rajeunir en coupant à 10 cm du sol tous les 3-4 ans",
      "Protéger des limaces au printemps"
    ],
    recolte: [
      "Récolter les jeunes feuilles avant floraison",
      "Couper des tiges entières",
      "On peut récolter toute l'année, mais meilleur avant floraison",
      "Éviter de récolter trop tard en automne"
    ],
    postRecolte: [
      "Sécher à l'ombre dans un endroit ventilé",
      "Conserver feuilles entières ou légèrement écrasées",
      "Durée de conservation : 2 ans",
      "Pour usage frais : conserver au réfrigérateur 1 semaine"
    ]
  },
  pertiance: [""],
  tags: ["medicinal", "culinaire", "vivace", "drainage", "aromatique"]
},

// 157 Romarin
{
  id: "aromatique-romarin",
  note: 49,   type: "Herbe aromatique",
  ordrer: 157,
  image: ["https://example.com/romarin.jpg"],
  nomFrancais: "Romarin",
  nomPopayan: "Romero",
  nomScientifique: "Rosmarinus officinalis",
  familleBotanique: "Lamiaceae",
  presentation: "Arbuste aromatique persistant aux feuilles en aiguilles et fleurs bleu pâle. Hauteur 0.5-1.5 m selon variété.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Parfaitement adapté au climat de Popayán. Résiste à la sécheresse, apprécie le soleil et les sols drainants.",
    recommandations: [
      "Sol très drainant, même pauvre",
      "Exposition plein soleil",
      "Tailler légèrement après floraison",
      "Multiplication facile par boutures"
    ]
  },
  techniques: ["bac_exterieur", "pleine_terre"],
  cycle: {
    dureeCycleJours: { min: 365, max: 365, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Persistant, récolte toute l'année",
    dureeRecolteJours: { min: 365, max: 365, unit: "jours" }
  },
  rendement: {
    unite: "botte_m2",
    valeur: { min: 20, max: 35, unit: "bottes/m²/an" },
    conditions: "Arbuste bien établi"
  },
  besoins: {
    eau: {
      niveau: "faible",
      estimation: { min: 3, max: 8, unit: "L/sem/plant" },
      strategie: "Arrosage très modéré. Résiste très bien à la sécheresse. Danger : excès d'eau."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 30, unit: "°C" },
      humiditeRelativePct: { min: 30, max: 60, unit: "%" },
      ensoleillement: "plein_soleil",
      luminosite: "forte"
    },
    sol: {
      typeSol: "Pauvre, caillouteux, très drainant",
      humiditeSol: "sec",
      drainage: "bon",
      pH: { min: 6.5, max: 8.0, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "faible",
      notes: "Se plaît dans les sols pauvres. L'excès d'engrais réduit l'arôme."
    }
  },
  associationCulture: {
    compatible: ["aromatique-thym", "aromatique-sauge", "legume-haricot"],
    aEviter: ["plantes_exigeantes_en_eau"],
    notes: "Excellente plante compagne qui repousse certains insectes"
  },
  howToCulture: {
    resume: "Bouturage très facile, plantation en sol drainant, peu d'entretien, récolte toute l'année.",
    etapes: [
      "Boutures de 10-15 cm toute l'année",
      "Planter en mélange très drainant (sable, terre)",
      "Espacer de 50-80 cm selon variété",
      "Paillage minéral (graviers, galets)"
    ],
    entretien: [
      "Arrosage seulement en période de sécheresse extrême",
      "Tailler légèrement après floraison pour maintenir forme",
      "Rajeunissement par taille sévère si nécessaire"
    ],
    recolte: [
      "Récolter toute l'année",
      "Couper les extrémités des tiges",
      "Éviter de couper le vieux bois",
      "Pour séchage : récolter avant floraison"
    ],
    postRecolte: [
      "Sécher en petits bouquets suspendus",
      "Conserver tiges entières pour arôme maximum",
      "Effeuiller au moment de l'utilisation",
      "Durée de conservation : 2-3 ans"
    ]
  }, 
  pertiance: [""],
  tags: ["mediterraneen", "culinaire", "persistant", "drainage", "aromatique_fort"]
},

// 158 Menthe poivrée
{
  id: "aromatique-menthe-poivree",
  note: 49,   type: "Herbe aromatique",
  ordrer: 158,
  image: ["https://example.com/menthe-poivree.jpg"],
  nomFrancais: "Menthe poivrée",
  nomPopayan: "Menta piperita",
  nomScientifique: "Mentha × piperita",
  familleBotanique: "Lamiaceae",
  presentation: "Hybride de menthe verte et aquatique, aux feuilles vert foncé et arôme fortement mentholé. Hauteur 30-90 cm.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "excellente",
    justification: "Très bien adaptée à Popayán. Vigoureuse, voire envahissante. Apprécie l'humidité mais s'adapte.",
    recommandations: [
      "Culture en bac obligatoire pour contenir",
      "Division fréquente pour rajeunir",
      "Récolte avant floraison pour arôme maximum",
      "Paillage pour conserver l'humidité"
    ]
  },
  techniques: ["bac_exterieur"], // Toujours en bac !
  cycle: {
    dureeCycleJours: { min: 365, max: 365, unit: "jours" },
    nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" },
    saisonnalite: "Vivace, récolte printemps-automne",
    dureeRecolteJours: { min: 180, max: 240, unit: "jours" }
  },
  rendement: {
    unite: "kg_m2",
    valeur: { min: 2, max: 4, unit: "kg feuilles fraîches/m²/an" }
  },
  besoins: {
    eau: {
      niveau: "eleve",
      estimation: { min: 15, max: 25, unit: "L/sem/plant" },
      strategie: "Sol constamment frais. Arrosage régulier, surtout en pot."
    },
    climat: {
      temperatureIdealeC: { min: 15, max: 25, unit: "°C" },
      humiditeRelativePct: { min: 60, max: 80, unit: "%" },
      ensoleillement: "mi_ombre",
      luminosite: "moyenne"
    },
    sol: {
      typeSol: "Riche, frais, retenant l'humidité",
      humiditeSol: "tres_humide",
      drainage: "moyen",
      pH: { min: 6.0, max: 7.5, unit: "pH" }
    },
    nutriments: {
      exigenceGlobale: "moyen",
      notes: "Apprécie le compost. Fertilisation légère au printemps."
    }
  },
  associationCulture: {
    compatible: ["aromatique-camomille"],
    aEviter: ["toutes_plantes_en_pleine_terre"],
    notes: "TOUJOURS cultiver en bac isolé (racines traçantes très envahissantes)"
  },
  howToCulture: {
    resume: "Division au printemps, culture en bac, récolte avant floraison, rajeunissement annuel.",
    etapes: [
      "Division des touffes au printemps",
      "Planter dans bac profond (30 cm minimum)",
      "Mélange riche (terreau, compost)",
      "Paillage épais pour conserver l'humidité"
    ],
    entretien: [
      "Arrosage régulier, ne jamais laisser sécher",
      "Diviser tous les ans pour maintenir vigueur",
      "Supprimer fleurs pour concentrer arôme dans feuilles",
      "Tailler à 5 cm en fin d'automne"
    ],
    recolte: [
      "Récolter avant floraison pour menthol maximum",
      "Couper les tiges à 10 cm du sol",
      "On peut récolter 3-4 fois par saison",
      "Récolter de préférence le matin"
    ],
    postRecolte: [
      "Sécher rapidement à l'ombre",
      "Conserver feuilles entières dans bocal hermétique",
      "Pour huile essentielle : distillation à la vapeur",
      "Peut être congelée dans des glaçons"
    ]
  }, 
  pertiance: [""],
  tags: ["menthole", "digestif", "envahissant", "bac_obligatoire", "medicinal"]
},

// 160 Achillée millefeuille
 {
    "id": "160",
  note: 49,     "type": "fleur",
    "ordrer": 160,
    "image": [],
    "nomFrancais": "Achillée millefeuille",
    "nomPopayan": "Milenrama",
    "nomScientifique": "Achillea millefolium",
    "familleBotanique": "Asteraceae",
    "presentation": "Vivace mellifère et médicinale, très rustique, utilisée en bouquets secs et en infusion. Elle préfère les sols plutôt pauvres et bien drainés; l'humidité stagnante favorise les pourritures.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Bonne adaptation si le sol est drainant (butte/sol léger). En climat humide, le risque principal est la pourriture en sol lourd et gorgé d'eau.",
      "recommandations": [
        "Planter sur butte ou en sol léger pour éviter l'eau stagnante.",
        "Limiter les apports d'azote (sol trop riche = tiges molles, moins de fleurs).",
        "Plein soleil et bonne aération."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 180, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 3, "unit": "cycles/an" },
      "saisonnalite": "Vivace; floraison saisonnière (selon conditions).",
      "dureeRecolteJours": { "min": 30, "max": 60, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 0.2, "max": 0.8, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Récolte de sommités fleuries au début floraison; rendement variable selon densité et fertilité."
    },
    "besoins": {
      "eau": {
        "niveau": "faible",
        "strategie": "Arrosage limité; tolère bien la sécheresse une fois installée. Éviter l'excès d'eau en sol lourd."
      },
      "climat": {
        "temperatureIdealeC": { "min": 12, "max": 25, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Léger à ordinaire, plutôt pauvre, très drainant; tolère le calcaire.",
        "humiditeSol": "sec",
        "drainage": "bon",
        "pH": { "min": 4.5, "max": 7.0, "unit": "pH" }
      },
      "nutriments": {
        "exigenceGlobale": "faible",
        "notes": "Un sol trop riche diminue la qualité florale et favorise la verse."
      }
    },
    "associationCulture": {
      "compatible": ["114", "115", "116", "118", "123", "124", "128", "129"],
      "aEviter": ["110"],
      "notes": "Bonne plante auxiliaire (mellifère) en bordures ensoleillées et plutôt sèches."
    },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant. Arroser peu; rabattre après floraison pour relancer et limiter l'étalement.",
      "etapes": [
        "Choisir un emplacement au soleil et un sol drainant (butte si besoin).",
        "Planter et arroser à l'installation uniquement.",
        "Limiter les apports de fertilisants.",
        "Rabattre après floraison pour favoriser une seconde pousse."
      ],
      "densite": "6-9 plants/m² (selon variété/vigueur)",
      "entretien": ["Rabattre après floraison", "Désherbage léger", "Division des touffes tous les 2-3 ans si nécessaire"],
      "recolte": ["Sommités fleuries au début de floraison", "Feuilles jeunes selon usage"],
      "postRecolte": ["Séchage à l'ombre, bien aéré; stockage hermétique au sec."]
    }, 
  pertiance: [""],
    "tags": ["mellifere", "medicinal", "sec"],
    "sources": [
      "https://www.agrireseau.net/agriculturebiologique/documents/guide-achillee.pdf",
      "https://www.rustica.fr/fleurs-vivaces/planter-achillee,6069.html"
    ]
  },

// J. Fleurs comestibles / compagnes / ornementales / pollinisateurs

// 162 Oeillet d'Inde
  {
    "id": "162",   note: 49, 
    "type": "fleur",
    "ordrer": 162,
    "image": [],
    "nomFrancais": "Oeillet d'Inde (tagète)",
    "nomPopayan": "Clavel de Indias",
    "nomScientifique": "Tagetes patula",
    "familleBotanique": "Asteraceae",
    "presentation": "Annuelle très populaire, compacte et très florifère, souvent utilisée au potager comme plante compagne. Supporte bien la chaleur, aime le soleil et un sol drainant.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Plante robuste et adaptable; réussit bien si elle reçoit du soleil et si le sol n'est pas constamment gorgé d'eau.",
      "recommandations": [
        "Planter au plein soleil (meilleure floraison).",
        "Prévoir un sol drainant en saison de pluies (butte si besoin).",
        "Arroser modérément: laisser sécher légèrement entre apports."
      ]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 4, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; semis/plantation quand températures sont stables et croissance rapide ensuite.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": {
      "unite": "piece_m2",
      "conditions": "Production surtout florale (quantifier en fleurs/plant)."
    },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier à l'installation puis modéré; éviter excès d'eau prolongé." },
      "climat": {
        "temperatureIdealeC": { "min": 18, "max": 30, "unit": "°C" },
        "ensoleillement": "plein_soleil",
        "luminosite": "forte"
      },
      "sol": {
        "typeSol": "Ordinaire à léger, fertile mais drainant.",
        "humiditeSol": "frais",
        "drainage": "bon",
        "pH": { "min": 6.0, "max": 7.5, "unit": "pH" }
      },
      "nutriments": { "exigenceGlobale": "moyen", "notes": "Trop d'azote = feuillage au détriment des fleurs." }
    },
    "associationCulture": {
      "compatible": ["165", "164", "172", "163"],
      "aEviter": [],
      "notes": "Très utilisée en association au potager; plante compagne classique des cultures sensibles aux ravageurs."
    },
    "howToCulture": {
      "resume": "Semer ou planter au soleil en sol drainant. Arroser à l'installation puis modérément; supprimer les fleurs fanées pour prolonger la floraison.",
      "etapes": [
        "Semer en godet ou en place selon saison.",
        "Repiquer/éclaircir en laissant de l'air entre plants.",
        "Arroser à la reprise.",
        "Supprimer fleurs fanées régulièrement."
      ],
      "densite": "16-36 plants/m² (selon variété)",
      "entretien": ["Désherbage léger", "Suppression fleurs fanées", "Arrosage modéré"],
      "recolte": ["Fleurs au fur et à mesure des besoins"],
      "postRecolte": ["Séchage possible à l'ombre en endroit ventilé (usage décoratif)."]
    }, 
  pertiance: [""],
    "tags": ["compagne", "mellifere", "ornemental"],
    "sources": ["https://www.jardiner-malin.fr/fiche/oeillet-inde.html", "https://www.gerbeaud.com/reponses-experts/oeillet-inde-rose-inde-difference,176.html"]
  },

  // 163) Capucine
  {
    "id": "163",
  note: 49,     "type": "fleur",
    "ordrer": 163,
    "image": [],
    "nomFrancais": "Capucine",
    "nomPopayan": "Capuchina",
    "nomScientifique": "Tropaeolum majus",
    "familleBotanique": "Tropaeolaceae",
    "presentation": "Annuelle très populaire, comestible (fleurs/feuilles), couvre-sol ou grimpante selon conduite. Aime le soleil et les sols plutôt pauvres; trop d'azote fait beaucoup de feuilles et peu de fleurs.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Tolérante et facile; réussit bien si le sol est drainant et pas trop riche.",
      "recommandations": ["Plein soleil pour maximiser la floraison.", "Sol pas trop riche.", "Arrosages modérés en période sèche."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 50, "max": 90, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 4, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; semis direct possible.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Récolte de fleurs/feuilles (quantification en pièces/plant)." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage modéré; plus tolérante une fois installée." },
      "climat": { "temperatureIdealeC": { "min": 16, "max": 28, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Plutôt pauvre à moyen, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible", "notes": "Sol trop riche = moins de fleurs." }
    },
    "associationCulture": {
      "compatible": ["162", "165", "164"],
      "aEviter": [],
      "notes": "Bonne plante compagne et comestible; peut servir de couvre-sol."
    },
    "howToCulture": {
      "resume": "Semer en place, laisser pousser au soleil, arroser modérément. Récolter fleurs et feuilles régulièrement.",
      "etapes": ["Semer en place.", "Éclaircir si besoin.", "Guider sur support si conduite grimpante.", "Récolter souvent."],
      "densite": "4-9 plants/m²",
      "entretien": ["Arrosage modéré", "Tuteurage si grimpante", "Coupe légère si envahissante"],
      "recolte": ["Fleurs et jeunes feuilles"],
      "postRecolte": ["Consommer frais; fleurs fragiles."]
    }, 
  pertiance: [""],
    "tags": ["comestible", "compagne", "ornemental"],
    "sources": ["https://www.aujardin.info/plantes/capucine.php"]
  },

  // 164) Bourrache
  {
    "id": "164",
  note: 49,     "type": "fleur",
    "ordrer": 164,
    "image": [],
    "nomFrancais": "Bourrache",
    "nomPopayan": "Borraja",
    "nomScientifique": "Borago officinalis",
    "familleBotanique": "Boraginaceae",
    "presentation": "Annuelle mellifère très populaire, comestible (fleurs) et utile au jardin. Apprécie le soleil et un sol drainant; se ressème facilement.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Très robuste, tolère bien diverses conditions; attention seulement au sol gorgé d'eau et à la place (plante volumineuse).",
      "recommandations": ["Semer en place (racine pivot).", "Prévoir espace.", "Drainage en saison de pluies."]
    },
    "techniques": ["plein_champ", "pleine_terre", "bac_exterieur"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 3, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; se ressème souvent naturellement.",
      "dureeRecolteJours": { "min": 30, "max": 90, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Récolte principalement florale/feuilles (quantification en pièces)." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier au démarrage, puis modéré." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 25, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Ordinaire, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["162", "165", "172"], "aEviter": [], "notes": "Excellente mellifère; attire pollinisateurs." },
    "howToCulture": {
      "resume": "Semer en place au soleil, arroser à la levée, puis laisser pousser. Récolter fleurs au fur et à mesure; surveiller les semis spontanés.",
      "etapes": ["Semer en place.", "Éclaircir.", "Arroser au besoin.", "Récolter fleurs.", "Gérer les repousses spontanées."],
      "densite": "4-9 plants/m²",
      "entretien": ["Éclaircissage", "Arrosage modéré", "Gestion des semis spontanés"],
      "recolte": ["Fleurs (comestibles)"],
      "postRecolte": ["Consommer frais; fleurs très fragiles."]
    }, 
  pertiance: [""],
    "tags": ["mellifere", "comestible", "compagne"],
    "sources": ["https://www.gerbeaud.com/jardin/fiches/bourrache.php3"]
  },

  // 165) Calendula
  {
    "id": "165",
  note: 49,     "type": "fleur",
    "ordrer": 165,
    "image": [],
    "nomFrancais": "Calendula (Souci officinal)",
    "nomPopayan": "Caléndula",
    "nomScientifique": "Calendula officinalis",
    "familleBotanique": "Asteraceae",
    "presentation": "Annuelle très populaire, florifère et facile, utilisée aussi en usages traditionnels (macérats). À ne pas confondre avec les tagètes (Tagetes spp.).",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Plante très tolérante; floraison généreuse si lumière et sol drainant. Supporte bien une humidité régulière sans stagnation.",
      "recommandations": ["Plein soleil ou légère mi-ombre.", "Drainage en saison de pluies.", "Couper fleurs fanées pour relancer."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 4, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; semis direct facile.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Récolte de capitules floraux (quantification en pièces)." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier mais sans excès; laisser sécher légèrement en surface." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 25, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Ordinaire à fertile, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": {
      "compatible": ["162", "164", "172", "163"],
      "aEviter": [],
      "notes": "Très bonne plante auxiliaire et mellifère; utile en bordure de planches."
    },
    "howToCulture": {
      "resume": "Semer en place, arroser à la levée, puis récolter les fleurs régulièrement. Supprimer les fleurs fanées pour prolonger la floraison.",
      "etapes": ["Semer en place.", "Éclaircir.", "Arroser modérément.", "Récolter les capitules.", "Nettoyer fleurs fanées."],
      "densite": "9-16 plants/m²",
      "entretien": ["Désherbage léger", "Suppression fleurs fanées", "Arrosage modéré"],
      "recolte": ["Capitules bien ouverts"],
      "postRecolte": ["Séchage à l'ombre, bien ventilé; stockage hermétique."]
    }, 
  pertiance: [""],
    "tags": ["mellifere", "medicinal", "compagne"],
    "sources": ["https://eap.mcgill.ca/agrobio/ab350-06.htm", "https://www.gammvert.fr/conseils-idees/souci"]
  },
    // 166) Myosotis
  {
    "id": "166",
  note: 49,     "type": "fleur",
    "ordrer": 166,
    "image": [],
    "nomFrancais": "Myosotis",
    "nomPopayan": "Nomeolvides",
    "nomScientifique": "Myosotis sylvatica",
    "familleBotanique": "Boraginaceae",
    "presentation": "Petite annuelle/bisannuelle très populaire pour bordures, aimant les sols frais. Préfère une exposition mi-ombragée en climat chaud.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Réussit bien si le sol reste frais et si l'ensoleillement n'est pas brûlant; sensible au stress hydrique.",
      "recommandations": ["Mi-ombre et sol frais.", "Paillage fin.", "Arrosages réguliers en période sèche."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 180, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Souvent cultivé comme bisannuelle (floraison après installation).",
      "dureeRecolteJours": { "min": 30, "max": 60, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Production florale (quantification en fleurs/plant)." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Maintenir frais; éviter dessèchement prolongé." },
      "climat": { "temperatureIdealeC": { "min": 10, "max": 20, "unit": "°C" }, "ensoleillement": "mi_ombre", "luminosite": "moyenne" },
      "sol": { "typeSol": "Humifère, frais, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["167", "165"], "aEviter": [], "notes": "Très bien en massifs mi-ombragés et zones fraîches." },
    "howToCulture": {
      "resume": "Semer, repiquer en place en sol frais, arroser régulièrement. Floraison abondante si la plante ne manque pas d'eau.",
      "etapes": ["Semer.", "Repiquer en place.", "Pailler pour garder frais.", "Arroser régulièrement."],
      "densite": "16-36 plants/m²",
      "entretien": ["Paillage", "Arrosage", "Nettoyage des fleurs fanées"],
      "recolte": ["Fleurs (ornement)"],
      "postRecolte": ["Non applicable (ornement)."]
    }, 
  pertiance: [""],
    "tags": ["ornemental"],
    "sources": ["https://www.jardiner-malin.fr/fiche/myosotis-arrosage-planter-semer.html"]
  },
  
  
    // 170) Cosmos
  {
    "id": "170",   note: 49, 
    "type": "fleur",
    "ordrer": 170,
    "image": [],
    "nomFrancais": "Cosmos",
    "nomPopayan": "Cosmos",
    "nomScientifique": "Cosmos bipinnatus",
    "familleBotanique": "Asteraceae",
    "presentation": "Annuelle très populaire, florifère et légère, facile en plein soleil. Aime les sols drainants et pas trop riches.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Très tolérant; fleurit bien si plein soleil et sol drainant. Trop riche = tiges fragiles, moins de fleurs.",
      "recommandations": ["Plein soleil.", "Sol pas trop riche.", "Arrosage modéré."]
    },
    "techniques": ["plein_champ", "pleine_terre", "bac_exterieur"],
    "cycle": {
      "dureeCycleJours": { "min": 70, "max": 120, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 3, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; semis direct facile.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Production florale (fleurs/plant)." },
    "besoins": {
      "eau": { "niveau": "faible", "strategie": "Arrosage limité; plus régulier en bac." },
      "climat": { "temperatureIdealeC": { "min": 18, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Léger, drainant, pas trop riche.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": { "compatible": ["165", "164", "172"], "aEviter": [], "notes": "Très bonne plante à pollinisateurs." },
    "howToCulture": {
      "resume": "Semer en place au soleil. Arroser peu, éclaircir et éventuellement tuteurer si variétés hautes; couper les fleurs fanées pour prolonger.",
      "etapes": ["Semer en place.", "Éclaircir.", "Arroser modérément.", "Tuteurer si besoin.", "Couper fleurs fanées."],
      "densite": "9-16 plants/m² (selon taille)",
      "entretien": ["Éclaircissage", "Tuteurage (si haut)", "Suppression fleurs fanées"],
      "recolte": ["Fleurs (ornement)"],
      "postRecolte": ["Bouquets frais."]
    },
  pertiance: [""],
    "tags": ["mellifere", "ornemental"],
    "sources": ["https://www.terrevivante.org/contenu/oeillet-dinde-rose-dinde-tagetes-patula-tagetes-erecta/"]
  },
// 171) Zinnia
  {
    "id": "171",   note: 49, 
    "type": "fleur",
    "ordrer": 171,
    "image": [],
    "nomFrancais": "Zinnia",
    "nomPopayan": "Zinnia",
    "nomScientifique": "Zinnia elegans",
    "familleBotanique": "Asteraceae",
    "presentation": "Annuelle très populaire pour fleurs coupées, aimant chaleur et plein soleil. Préfère un sol drainant; l'excès d'humidité sur le feuillage favorise les maladies.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Bonne en conditions chaudes et ensoleillées; attention à l'humidité prolongée et au manque d'aération.",
      "recommandations": ["Plein soleil.", "Bonne aération (espacement).", "Arroser au pied, éviter mouiller le feuillage."]
    },
    "techniques": ["plein_champ", "pleine_terre", "bac_exterieur"],
    "cycle": {
      "dureeCycleJours": { "min": 60, "max": 110, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 3, "unit": "cycles/an" },
      "saisonnalite": "Annuelle; semis direct ou repiquage.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "unite": "piece_m2", "conditions": "Production florale (fleurs/plant) selon variété et coupe." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier au pied; éviter humidité sur feuilles." },
      "climat": { "temperatureIdealeC": { "min": 20, "max": 32, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Fertile mais drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["165", "172", "164"], "aEviter": [], "notes": "Idéal pour fleurs coupées; espacement important en climat humide." },
    "howToCulture": {
      "resume": "Semer en place ou en godet, planter au soleil, arroser au pied et couper régulièrement pour stimuler. Assurer une bonne aération.",
      "etapes": ["Semer.", "Planter au soleil.", "Espacer pour aération.", "Arroser au pied.", "Couper fleurs pour bouquets."],
      "densite": "9-16 plants/m²",
      "entretien": ["Arrosage au pied", "Espacement", "Suppression fleurs fanées"],
      "recolte": ["Fleurs ouvertes pour bouquets"],
      "postRecolte": ["Conservation en vase."]
    }, 
  pertiance: [""],
    "tags": ["ornemental", "bouquet"],
    "sources": ["https://www.truffaut.com/cultiver-oeillet-inde-tagete.html"]
  },

    // 172) Phacélie
  {
    "id": "172",
  note: 49,     "type": "fleur",
    "ordrer": 172,
    "image": [],
    "nomFrancais": "Phacélie",
    "nomPopayan": "Facelia",
    "nomScientifique": "Phacelia tanacetifolia",
    "familleBotanique": "Boraginaceae",
    "presentation": "Annuelle très populaire comme plante mellifère et engrais vert. Croissance rapide, couvre-sol efficace, attire fortement les pollinisateurs.",
    "difficulte": "facile",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Très adaptable et rapide; demande surtout une installation correcte et un sol pas gorgé d'eau en continu.",
      "recommandations": ["Semis direct.", "Arrosage léger à la levée.", "Faucher avant montée en graines si objectif engrais vert."]
    },
    "techniques": ["plein_champ", "pleine_terre"],
    "cycle": {
      "dureeCycleJours": { "min": 45, "max": 90, "unit": "jours" },
      "nbCyclesAn": { "min": 2, "max": 6, "unit": "cycles/an" },
      "saisonnalite": "Semis possible à plusieurs périodes; très rapide.",
      "dureeRecolteJours": { "min": 20, "max": 40, "unit": "jours" }
    },
    "rendement": { "unite": "kg_m2", "conditions": "Utilisée surtout en biomasse (engrais vert), rendement variable selon densité et eau." },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage léger à la levée; ensuite assez tolérante." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 25, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Ordinaire, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "faible" }
    },
    "associationCulture": {
      "compatible": ["165", "164", "168"],
      "aEviter": [],
      "notes": "Excellente mellifère; très utile en bandes fleuries/engrais vert."
    },
    "howToCulture": {
      "resume": "Semer directement, maintenir humide jusqu'à levée, puis laisser pousser. Faucher avant graines selon l'objectif (mellifère vs engrais vert).",
      "etapes": ["Semer direct.", "Arroser à la levée.", "Laisser couvrir le sol.", "Faucher avant graines si engrais vert."],
      "densite": "Semis à la volée (variable selon objectif)",
      "entretien": ["Arrosage à la levée", "Fauche/gestion de fin de cycle"],
      "recolte": ["Floraison mellifère ou biomasse"],
      "postRecolte": ["Incorporation au sol si engrais vert (après fauche)."]
    }, 
  pertiance: [""],
    "tags": ["mellifere", "engrais_vert", "compagne"],
    "sources": ["https://www.gammvert.fr/conseils-idees/comment-semer-la-phacelie", "https://monde-vegetal.fr/products/graines-phacelie"]
  }, 


// K.Fruits et petits fruits

// 175) Fraise
  {
    "id": "175",
   note: 49,     "type": "fruit",
    "ordrer": 175,
    "image": [],
    "nomFrancais": "Fraise",
    "nomPopayan": "Fresa",
    "nomScientifique": "Fragaria × ananassa",
    "familleBotanique": "Rosaceae",
    "presentation": "Petit fruit très productif en planches/bacs, sensible aux excès d'eau et aux maladies si l'aération est faible. Préfère un sol fertile, frais et bien drainé, et une exposition ensoleillée.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Très bonne en altitude/conditions tempérées si drainage et aération sont bons; les problèmes viennent surtout de l'humidité persistante (pourritures, maladies foliaires).",
      "recommandations": ["Buttes/planches surélevées pour drainer.", "Paillage pour limiter salissures et garder régularité d'eau.", "Éviter mouiller le feuillage, irriguer au pied."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre", "hydroponie"],
    "cycle": {
      "dureeCycleJours": { "min": 90, "max": 150, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Selon variété (remontante/non), production étalée si conditions stables.",
      "dureeRecolteJours": { "min": 30, "max": 120, "unit": "jours" }
    },
    "rendement": {
      "valeur": { "min": 1.0, "max": 3.0, "unit": "kg/m²" },
      "unite": "kg_m2",
      "conditions": "Dépend densité, variété, fertilité et protection contre pluie sur fruits."
    },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Arrosages réguliers, éviter alternance sec/détrempé; goutte-à-goutte conseillé." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 24, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Fertile, riche en MO, léger, bien drainé.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 5.5, "max": 6.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve", "notes": "Apports fractionnés (surtout K) pendant floraison/fructification." }
    },
    "associationCulture": { "compatible": ["165", "162", "172"], "aEviter": [], "notes": "Plantes compagnes/auxiliaires utiles; maintenir l'aération." },
    "howToCulture": {
      "resume": "Planter sur butte drainante, pailler, arroser régulièrement et récolter souvent. Remplacer/renouveler les plants périodiquement pour garder vigueur.",
      "etapes": ["Préparer planche riche et drainante.", "Planter en lignes, espacer pour aération.", "Installer goutte-à-goutte + paillage.", "Nettoyer feuilles malades.", "Récolter fréquemment."],
      "densite": "6-10 plants/m² (selon conduite)",
      "entretien": ["Paillage", "Suppression stolons (si besoin)", "Nettoyage sanitaire", "Protection pluie sur fruits si possible"],
      "recolte": ["Cueillir rouge mûr, sans tirer (couper/pincer pédoncule)"],
      "postRecolte": ["Refroidir rapidement; fruits fragiles."]
    }, 
  pertiance: [""],
    "tags": ["premium"],
    "sources": ["https://icl-growingsolutions.com/fr-fr/agriculture/crops/strawberry/"]
  },

  // 176) Framboise
  {
    "id": "176",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 176,
    "image": [],
    "nomFrancais": "Framboise",
    "nomPopayan": "Frambuesa",
    "nomScientifique": "Rubus idaeus",
    "familleBotanique": "Rosaceae",
    "presentation": "Arbrisseau à cannes, productif mais demandant taille/palissage. Aime un sol riche, frais, drainé et une exposition ensoleillée non brûlante.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Bon potentiel en climat tempéré d'altitude; risque si sol détrempé ou sécheresse prolongée.",
      "recommandations": ["Sol riche et paillé.", "Palissage pour aérer.", "Drainage en saison de pluies."]
    },
    "techniques": ["pleine_terre", "bac_exterieur"],
    "cycle": {
      "dureeCycleJours": { "min": 180, "max": 365, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Vivace; cannes à gérer (variétés remontantes/non).",
      "dureeRecolteJours": { "min": 20, "max": 60, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 1.0, "max": 3.0, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Sol frais; arroser au pied en période sèche, pailler." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 24, "unit": "°C" }, "ensoleillement": "variable", "luminosite": "moyenne" },
      "sol": { "typeSol": "Riche, profond, humifère, drainé.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 5.5, "max": 6.5, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["172", "165"], "aEviter": [], "notes": "Favoriser auxiliaires et aération pour limiter maladies." },
    "howToCulture": {
      "resume": "Planter en ligne, palisser, pailler et tailler chaque année selon type (remontant/non). Récolter tous les 2-3 jours en pleine production.",
      "etapes": ["Planter en sol riche.", "Installer fils de palissage.", "Pailler.", "Tailler cannes selon variété.", "Récolter régulièrement."],
      "densite": "0.5-1 plant/m² (selon conduite)",
      "entretien": ["Palissage", "Taille", "Paillage", "Éclaircissage des rejets"],
      "recolte": ["Cueillir quand le fruit se détache facilement"],
      "postRecolte": ["Refroidir rapidement; très fragile."]
    }, 
  pertiance: [""],
    "tags": ["premium"],
    "sources": ["https://www.algoflash.fr/conseils-et-inspirations/portraits-de-plantes/jardin-comestible/framboisier"]
  },

  // 177) Mûre
  {
    "id": "177",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 177,
    "image": ["/cultures/mora.png"],
    "nomFrancais": "Mûre",
    "nomPopayan": "Mora",
    "nomScientifique": "Rubus fruticosus",
    "familleBotanique": "Rosaceae",
    "presentation": "Ronce fruitière (souvent conduite sur fils), vigoureuse et productive. Préfère soleil et sol frais à pas trop sec, drainé.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Bonne si palissage/aération et sol drainant; vigoureuse, peut devenir envahissante sans conduite.",
      "recommandations": ["Conduire sur fils et tailler.", "Pailler pour garder sol frais.", "Éviter stagnation d'eau."]
    },
    "techniques": ["pleine_terre"],
    "cycle": {
      "dureeCycleJours": { "min": 240, "max": 365, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 1, "unit": "cycles/an" },
      "saisonnalite": "Vivace; fructifie sur cannes selon type/variété.",
      "dureeRecolteJours": { "min": 30, "max": 60, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 2.0, "max": 6.0, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Sol frais; arroser au pied en période sèche." },
      "climat": { "temperatureIdealeC": { "min": 12, "max": 26, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Normal à riche, drainé.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["172", "165"], "aEviter": [], "notes": "Prévoir espace et palissage." },
    "howToCulture": {
      "resume": "Planter avec support, palisser, tailler les cannes après récolte. Récolter à pleine maturité (noir brillant).",
      "etapes": ["Planter en ligne.", "Installer palissage.", "Attacher cannes.", "Tailler cannes ayant fructifié.", "Récolter mûr."],
      "densite": "0.3-0.7 plant/m²",
      "entretien": ["Palissage", "Taille", "Contrôle drageons/expansion"],
      "recolte": ["Quand la mûre se détache facilement et est bien noire"],
      "postRecolte": ["Fragile; refroidir rapidement."]
    },
  pertiance: [""],
    "tags": ["premium"],
    "sources": ["https://www.jardindupicvert.com/fruitiers-et-petits-fruits/15985-murier.html"]
  },

// 178) Myrtille
  {
    "id": "178",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 178,
    "image": ["/cultures/myrtille.png"],
    "nomFrancais": "Myrtille (la plus facile)",
    "nomPopayan": "Arándano",
    "nomScientifique": "Vaccinium virgatum",
    "familleBotanique": "Ericaceae",
    "presentation": "Myrtille 'rabbiteye' (souvent plus tolérante chaleur/sécheresse que V. corymbosum), mais toujours très acidophile. Réussite surtout si pH est correctement abaissé et drainage excellent.",
    "difficulte": "difficile",
    "adaptationPopayan": {
      "adaptation": "moyenne",
      "justification": "Plus tolérante que d'autres myrtilles sur chaleur et sols imparfaits, mais le pH très acide reste non négociable; en sol naturellement neutre, il faut substrat/planche dédiée.",
      "recommandations": ["Créer une planche/bac 100% substrat acidophile.", "Pailler (écorces de pin) et arroser régulièrement.", "Tester pH et corriger (soufre/acidifiants) si besoin."]
    },
    "techniques": ["bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 365, "max": 1095, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 1, "unit": "cycles/an" },
      "saisonnalite": "Vivace; production augmente avec l'âge.",
      "dureeRecolteJours": { "min": 20, "max": 45, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 1.0, "max": 5.0, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier; racines superficielles, paillage indispensable; drainage obligatoire." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 28, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Acidophile (tourbe/écorces de pin), léger, très drainant, riche en MO.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 4.5, "max": 5.8, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen", "notes": "Fertiliser avec engrais 'plantes de terre de bruyère' (ammonium) plutôt que nitrates." }
    },
    "associationCulture": { "compatible": [], "aEviter": [], "notes": "À regrouper avec autres acidophiles uniquement (sinon gestion pH impossible)." },
    "howToCulture": {
      "resume": "Cultiver en bac/planche acidophile (pH 4.5–5.8), pailler et arroser régulièrement. Sans pH acide, la plante dépérit même si tout le reste est bon.",
      "etapes": ["Préparer substrat acidophile.", "Planter sans enterrer le collet.", "Pailler écorces de pin.", "Arroser eau peu calcaire.", "Tailler légèrement pour renouveler le bois."],
      "densite": "1 plant / bac 30-60 L (ou 1-2 plants/m² en planche dédiée)",
      "entretien": ["Suivi pH", "Paillage", "Taille de renouvellement"],
      "recolte": ["Récolter quand les baies se détachent facilement et sont bien bleues"],
      "postRecolte": ["Refroidir; bonne tenue vs framboise."]
    },
  pertiance: [""],
    "tags": ["acidophile", "premium"],
    "sources": ["https://utianews.tennessee.edu/dependable-and-delicious-rabbiteye-blueberries/"]
  },

// 181) Lulo (naranjilla)
  {
    "id": "181",
   note: 49,     "type": "fruit",
    "ordrer": 181,
    "image": ["/cultures/lulo.png"],
    "nomFrancais": "Lulo (naranjilla)",
    "nomPopayan": "Lulo",
    "nomScientifique": "Solanum quitoense",
    "familleBotanique": "Solanaceae",
    "presentation": "Arbrisseau andin fruitier, sensible au plein soleil brûlant et au vent; préfère souvent mi-ombre lumineuse. Très apprécié pour jus; attention aux épines selon types/variétés.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "excellente",
      "justification": "Espèce typique des Andes humides; bonne adaptation en zone de Popayán si sol fertile et drainage correct.",
      "recommandations": ["Mi-ombre (agroforesterie légère) si soleil fort.", "Sol riche en MO.", "Arrosage régulier sans stagnation."]
    },
    "techniques": ["pleine_terre", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 180, "max": 360, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Peut produire plusieurs vagues selon gestion et climat.",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 10, "max": 30, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Arrosage régulier; paillage; éviter excès d'eau stagnante." },
      "climat": { "temperatureIdealeC": { "min": 16, "max": 28, "unit": "°C" }, "ensoleillement": "mi_ombre", "luminosite": "moyenne" },
      "sol": { "typeSol": "Fertile, riche en MO, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 5.5, "max": 6.8, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve", "notes": "Bonne réponse aux apports organiques; potassium utile en fructification." }
    },
    "associationCulture": { "compatible": ["165", "172"], "aEviter": [], "notes": "Bonne en lisière/mi-ombre, éviter vent fort." },
    "howToCulture": {
      "resume": "Planter en sol riche et drainant, en mi-ombre si besoin. Arroser régulièrement et récolter quand le fruit est bien coloré.",
      "etapes": ["Produire plants (semis) au chaud modéré.", "Planter en sol riche.", "Pailler et arroser.", "Tuteurer si nécessaire.", "Récolter mûr."],
      "densite": "1-2 plants/m²",
      "entretien": ["Paillage", "Tuteurage", "Nettoyage feuilles malades"],
      "recolte": ["Fruits mûrs, peau bien colorée"],
      "postRecolte": ["Manipulation douce; transformation rapide (jus)."]
    },
  pertiance: [""],
    "tags": ["transformation", "andins"],
    "sources": ["https://www.echocommunity.org/fr/resources/8e62dcfa-24dc-4a63-9f1a-4d8a30b54522"]
  },

// 182) Fruit de la passion (passiflore)
  {
    "id": "182",
  note: 49,      "type": "fruit",
    "ordrer": 182,
    "image": ["/cultures/passiflore.png"],
    "nomFrancais": "Fruit de la passion",
    "nomPopayan": "Maracuyá",
    "nomScientifique": "Passiflora edulis",
    "familleBotanique": "Passifloraceae",
    "presentation": "Liane fruitière très productive avec support. Préfère chaleur, lumière et un sol fertile drainant; nécessite palissage/treillis.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "tres_bonne",
      "justification": "Bonne si on fournit support, fertilité et arrosage régulier; attention aux excès d'eau et maladies si manque d'aération.",
      "recommandations": ["Treillis solide.", "Arrosage régulier au pied.", "Taille pour aérer et renouveler."]
    },
    "techniques": ["pleine_terre", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 180, "max": 365, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 2, "unit": "cycles/an" },
      "saisonnalite": "Vivace courte (souvent 2-4 ans productifs selon pression maladies).",
      "dureeRecolteJours": { "min": 60, "max": 180, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 10, "max": 30, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Arrosage régulier; éviter stress hydrique en floraison/fructification." },
      "climat": { "temperatureIdealeC": { "min": 20, "max": 30, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Fertile, riche en MO, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 6.0, "max": 7.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve" }
    },
    "associationCulture": { "compatible": ["172", "165"], "aEviter": [], "notes": "Bien associer à bandes mellifères; éviter concurrence au pied." },
    "howToCulture": {
      "resume": "Installer un treillis, planter en sol riche et drainant, arroser régulièrement. Tailler pour stimuler pousses productives et limiter l'encombrement.",
      "etapes": ["Installer support.", "Planter en sol riche.", "Former la liane sur treillis.", "Arroser/fertiliser régulièrement.", "Tailler et récolter fruits mûrs (souvent tombés)."],
      "densite": "1 plant / 2-4 m linéaires de treillis",
      "entretien": ["Palissage", "Taille", "Fertilisation fractionnée"],
      "recolte": ["Fruits à maturité (souvent lorsqu'ils se détachent)"],
      "postRecolte": ["Bonne tenue relative; stocker au frais ventilé."]
    },
  pertiance: [""],
    "tags": ["treillis", "transformation"],
    "sources": ["https://fr-fr.bakker.com/blogs/nos-conseils-pour-le-jardin/sol-ideal-pour-la-culture-de-la-passiflore"]
  },

  // 183) Goyave
  {
    "id": "183",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 183,
    "image": ["/cultures/goyave.png"],
    "nomFrancais": "Goyave",
    "nomPopayan": "Guayaba",
    "nomScientifique": "Psidium guajava",
    "familleBotanique": "Myrtaceae",
    "presentation": "Petit arbre fruitier tropical très adaptable. Demande chaleur, soleil, et un sol drainant; tolère une large gamme de pH.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Peut réussir si les températures restent suffisamment chaudes et si le sol draine; sensible au froid et à l'excès d'eau en conditions fraîches.",
      "recommandations": ["Plein soleil.", "Sol drainant.", "Arrosage régulier en établissement puis modéré."]
    },
    "techniques": ["pleine_terre", "bac_exterieur", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 365, "max": 1460, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 1, "unit": "cycles/an" },
      "saisonnalite": "Vivace; fructification selon variété et taille.",
      "dureeRecolteJours": { "min": 30, "max": 120, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 20, "max": 80, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier au départ; ensuite modéré, éviter asphyxie racinaire." },
      "climat": { "temperatureIdealeC": { "min": 20, "max": 32, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Large tolérance, mais meilleur en sol profond drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 4.5, "max": 8.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["172"], "aEviter": [], "notes": "Arbre: prévoir espace et lumière." },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant, arroser régulièrement au départ. Tailler pour former et faciliter la récolte.",
      "etapes": ["Planter au soleil.", "Arroser à l'installation.", "Pailler.", "Tailler de formation.", "Récolter fruits mûrs."],
      "densite": "1 plant / 9-25 m² (selon conduite)",
      "entretien": ["Taille", "Paillage", "Arrosage en sécheresse"],
      "recolte": ["Fruits à maturité (odeur + légère souplesse)"],
      "postRecolte": ["Conserver au frais; transformation possible."]
    },
  pertiance: [""],
    "tags": ["tropical", "transformation"],
    "sources": ["http://www.jardinet.fr/blog/tout-savoir-sur-le-goyavier"]
  },

  // 184) Tomate de árbol (tamarillo)
  {
    "id": "184",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 184,
    "image": ["/cultures/tamarillo.png"],
    "nomFrancais": "Tomate de árbol (tamarillo)",
    "nomPopayan": "Tomate de árbol",
    "nomScientifique": "Solanum betaceum",
    "familleBotanique": "Solanaceae",
    "presentation": "Arbuste andin à croissance rapide, fruit apprécié en jus. Sensible au froid, au vent et à l'eau stagnante; demande sol riche et arrosages réguliers.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "excellente",
      "justification": "Très adapté aux zones andines; réussit bien si abrité du vent et en sol fertile drainant.",
      "recommandations": ["Abri vent (haie).", "Sol riche + paillage.", "Drainage impératif en saison de pluies."]
    },
    "techniques": ["pleine_terre", "bac_sous_serre"],
    "cycle": {
      "dureeCycleJours": { "min": 240, "max": 540, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 1, "unit": "cycles/an" },
      "saisonnalite": "Vivace courte; production souvent à partir de 12-18 mois.",
      "dureeRecolteJours": { "min": 90, "max": 240, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 20, "max": 60, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "eleve", "strategie": "Arrosage régulier; éviter stress hydrique; drainage pour ne pas asphyxier." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 25, "unit": "°C" }, "ensoleillement": "variable", "luminosite": "moyenne" },
      "sol": { "typeSol": "Riche, profond, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 5.5, "max": 7.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "eleve" }
    },
    "associationCulture": { "compatible": ["172", "165"], "aEviter": [], "notes": "Prévoir tuteurage si vent." },
    "howToCulture": {
      "resume": "Planter en sol riche, arroser régulièrement et protéger du vent. Récolter quand la couleur est uniforme et le fruit légèrement souple.",
      "etapes": ["Planter en sol riche.", "Tuteurer/protéger du vent.", "Pailler.", "Arroser régulièrement.", "Récolter mûr."],
      "densite": "1 plant / 4-9 m²",
      "entretien": ["Tuteurage", "Taille légère", "Paillage"],
      "recolte": ["Fruits mûrs, couleur stable"],
      "postRecolte": ["Transformation rapide (jus) ou conservation courte."]
    },
  pertiance: [""],
    "tags": ["andins", "transformation"],
    "sources": ["https://www.boutique-vegetale.com/p/tamarillo-cyphomandra-betacea"]
  },

  // 185) Feijoa
  {
    "id": "185",
  note: 49,      "type": "arbre_et_arbustes",
    "ordrer": 185,
    "image": ["/cultures/feijoa.png"],
    "nomFrancais": "Feijoa",
    "nomPopayan": "Feijoa",
    "nomScientifique": "Acca sellowiana",
    "familleBotanique": "Myrtaceae",
    "presentation": "Arbuste fruitier (aussi haie) donnant des fruits parfumés. Tolère assez bien divers sols si drainants; préfère sol acide à neutre et climat doux.",
    "difficulte": "moyenne",
    "adaptationPopayan": {
      "adaptation": "bonne",
      "justification": "Peut réussir en zone andine douce si drainage et exposition correcte; plus robuste que beaucoup de tropicaux.",
      "recommandations": ["Plein soleil pour fructification.", "Sol drainant.", "Arrosage régulier en établissement."]
    },
    "techniques": ["pleine_terre", "bac_exterieur"],
    "cycle": {
      "dureeCycleJours": { "min": 365, "max": 1825, "unit": "jours" },
      "nbCyclesAn": { "min": 1, "max": 1, "unit": "cycles/an" },
      "saisonnalite": "Vivace; mise à fruit après installation (souvent 2-4 ans).",
      "dureeRecolteJours": { "min": 20, "max": 60, "unit": "jours" }
    },
    "rendement": { "valeur": { "min": 10, "max": 40, "unit": "kg/plant" }, "unite": "kg_plant" },
    "besoins": {
      "eau": { "niveau": "moyen", "strategie": "Arrosage régulier au départ; ensuite modéré." },
      "climat": { "temperatureIdealeC": { "min": 15, "max": 28, "unit": "°C" }, "ensoleillement": "plein_soleil", "luminosite": "forte" },
      "sol": { "typeSol": "Fertile, drainant.", "humiditeSol": "frais", "drainage": "bon", "pH": { "min": 5.5, "max": 7.0, "unit": "pH" } },
      "nutriments": { "exigenceGlobale": "moyen" }
    },
    "associationCulture": { "compatible": ["172"], "aEviter": [], "notes": "Peut se conduire en haie; bon brise-vent léger." },
    "howToCulture": {
      "resume": "Planter au soleil en sol drainant. Arroser à l'installation, tailler pour former; récolter fruits à maturité (souvent quand ils tombent).",
      "etapes": ["Planter.", "Arroser à la reprise.", "Pailler.", "Tailler de formation.", "Récolter fruits mûrs."],
      "densite": "1 plant / 4-12 m² (ou haie espacée)",
      "entretien": ["Taille", "Paillage", "Arrosage en sécheresse"],
      "recolte": ["Fruits mûrs (souvent lorsqu'ils se détachent)"],
      "postRecolte": ["Conserver au frais; transformation possible."]
    },
  pertiance: [""],
    "tags": ["haie", "tropical"],
    "sources": ["https://www.bio-enligne.com/jardin-biologique/835-feijoa.html"]
  },
 
// L. Arbres fruitiers / tropicaux / subtropicaux

// 190) Avocatier
{
  id: "avocatier",
  note: 49,    type: "arbre_et_arbustes",
  ordrer: 190,
  image: ["/cultures/avocatier.png"],
  nomFrancais: "Avocatier",
  nomPopayan: "Aguacate",
  nomScientifique: "Persea americana",
  familleBotanique: "Lauraceae",
  presentation: "Arbre tropical produisant des fruits riches en lipides sains, idéal pour climat tempéré-tropical de Popayán.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Supporte bien la pluie modérée et les températures douces de Popayán; attention aux gelées rares.",
    recommandations: ["Planter en sol bien drainé", "Paillage et irrigation en saison sèche", "Choisir variété locale résistante aux maladies"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 1460, max: 2190, unit: "jours" }, nbCyclesAn: { min: 1, max: 1, unit: "cycles/an" }, saisonnalite: "Floraison et fructification possible toute l'année avec irrigation" },
  rendement: { unite: "kg_plant", valeur: { min: 30, max: 80, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation modérée, éviter stagnation" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil", humiditeRelativePct: { min: 50, max: 80, unit: "%" } },
    sol: { typeSol: "limoneux, riche en matière organique", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Arbre fruitier à planter en pleine terre, besoin d'irrigation modérée, récolte annuelle.",
    etapes: ["Choisir semis ou greffe", "Planter en sol drainé", "Pailler", "Irrigation régulière", "Taille pour fructification"],
    recolte: ["Fruits mûrs selon variété (souvent 8–12 mois après floraison)"],
    postRecolte: ["Stockage à l’ombre, consommation ou vente fraîche"],
  },
  pertiance: [""],
  tags: ["fruit", "tropical", "plein_champ"],
  sources: ["https://www.fao.org/avocado-production", "https://www.agriculture-colombia.gov.co"]
},


// 192) Papayer
{
  id: "papayer",   note: 49,  
  type: "arbre_et_arbustes",
  ordrer: 192,
  image: ["/cultures/papayer.png"],
  nomFrancais: "Papayer",
  nomPopayan: "Papaya",
  nomScientifique: "Carica papaya",
  familleBotanique: "Caricaceae",
  presentation: "Arbre tropical à croissance rapide, produit des fruits riches en vitamines et digestifs.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Croissance rapide adaptée au climat doux et humide de Popayán; sensible aux gelées légères.",
    recommandations: ["Plantation en pleine terre bien drainée", "Arrosage régulier", "Paillage"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 270, max: 365, unit: "jours" }, nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" }, saisonnalite: "Toute l'année si irrigation" },
  rendement: { unite: "kg_plant", valeur: { min: 20, max: 60, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation régulière, éviter stagnation" },
    climat: { temperatureIdealeC: { min: 22, max: 28, unit: "°C" }, ensoleillement: "plein_soleil", humiditeRelativePct: { min: 60, max: 80, unit: "%" } },
    sol: { typeSol: "limoneux, bien drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Arbre rapide à fruits, plantation en plein soleil, récolte rapide dès 9–12 mois.",
    etapes: ["Planter semis ou greffe", "Arrosage régulier", "Paillage", "Taille minimale"],
    recolte: ["Fruits verts mûrs pour consommation (6–12 mois après plantation)"],
    postRecolte: ["Consommation fraîche, jus ou transformation"],
  },
  pertiance: [""],
  tags: ["fruit", "rapide", "plein_champ"],
  sources: ["https://www.fao.org/papaya-production"]
},

// 193) Bananier
{
  id: "bananier",
   note: 49,   type: "arbre_et_arbustes",
  ordrer: 193,
  image: ["/cultures/bananier.png"],
  nomFrancais: "Bananier",
  nomPopayan: "Banano",
  nomScientifique: "Musa spp.",
  familleBotanique: "Musaceae",
  presentation: "Plante herbacée géante à fruits tropicaux riches en glucides et énergie.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat idéal doux et humide; sensible au vent fort et gelées.",
    recommandations: ["Abri vent", "Irrigation régulière", "Paillage", "Drainage suffisant"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 365, max: 450, unit: "jours" }, nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" }, saisonnalite: "Toute l'année" },
  rendement: { unite: "kg_plant", valeur: { min: 20, max: 50, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "eleve", strategie: "Arrosage fréquent, éviter sécheresse prolongée" },
    climat: { temperatureIdealeC: { min: 22, max: 30, unit: "°C" }, ensoleillement: "plein_soleil", humiditeRelativePct: { min: 60, max: 90, unit: "%" } },
    sol: { typeSol: "riche, humifère, bien drainé", humiditeSol: "tres_humide", drainage: "bon", pH: { min: 5.5, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "eleve" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plante herbacée à croissance rapide, plantation en plein soleil, récolte 9–12 mois après plantation.",
    etapes: ["Planter rejets ou rhizomes", "Irrigation fréquente", "Paillage", "Protection vent/gel"],
    recolte: ["Bananes mûres selon variété"],
    postRecolte: ["Consommation fraîche, transformation, stockage frais"],
  },
  pertiance: [""],
  tags: ["fruit", "tropical", "rapide"],
  sources: ["https://www.fao.org/banana-production"]
},

// 194) Oranger
{
  id: "oranger",
  note: 49,    type: "arbre_et_arbustes",
  ordrer: 194,
  image: ["/cultures/oranger.png"],
  nomFrancais: "Oranger",
  nomPopayan: "Naranja",
  nomScientifique: "Citrus sinensis",
  familleBotanique: "Rutaceae",
  presentation: "Arbre fruitier à agrumes, fructifie régulièrement et très apprécié localement.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat tempéré à doux adapté aux agrumes; résiste à la pluie modérée.",
    recommandations: ["Irrigation modérée", "Drainage suffisant", "Protection contre maladies fongiques"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 365, max: 450, unit: "jours" }, nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" }, saisonnalite: "Floraison printemps, fruits été" },
  rendement: { unite: "kg_plant", valeur: { min: 30, max: 80, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation modérée" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil", humiditeRelativePct: { min: 50, max: 80, unit: "%" } },
    sol: { typeSol: "limoneux, bien drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plantation en plein soleil, irrigation régulière, récolte annuelle.",
    etapes: ["Greffe ou semis", "Irrigation", "Paillage", "Taille légère", "Protection maladies"],
    recolte: ["Fruits mûrs selon variété"],
    postRecolte: ["Consommation fraîche, jus, confitures"],
  },
  pertiance: [""],
  tags: ["fruit", "agrumes", "plein_champ"],
  sources: ["https://www.fao.org/citrus-production"]
},

// 195) Citronnier
{
  id: "citronnier",
  note: 49,    type: "arbre_et_arbustes",
  ordrer: 195,
  image: ["/cultures/citronnier.png"],
  nomFrancais: "Citronnier",
  nomPopayan: "Limón",
  nomScientifique: "Citrus limon",
  familleBotanique: "Rutaceae",
  presentation: "Arbre fruitier à agrumes, très productif et apprécié pour jus et cuisine.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "S’adapte au climat tempéré de Popayán; nécessite sols drainés.",
    recommandations: ["Irrigation modérée", "Paillage", "Taille et protection contre maladies"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 365, max: 450, unit: "jours" }, nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" }, saisonnalite: "Floraison printemps, récolte continue" },
  rendement: { unite: "kg_plant", valeur: { min: 20, max: 60, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation régulière, éviter stagnation" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil", humiditeRelativePct: { min: 50, max: 80, unit: "%" } },
    sol: { typeSol: "limoneux, riche en MO", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plantation en plein soleil, entretien facile, récolte régulière.",
    etapes: ["Greffe ou semis", "Paillage", "Irrigation", "Taille légère"],
    recolte: ["Fruits mûrs selon variété"],
    postRecolte: ["Consommation fraîche, jus"],
  },
  pertiance: [""],
  tags: ["fruit", "agrumes", "plein_champ"],
  sources: ["https://www.fao.org/citrus-production"]
},

// 196) Mandarinier
{
  id: "mandarinier",   note: 49,  
  type: "arbre_et_arbustes",
  ordrer: 196,
  image: ["/cultures/mandarinier.png"],
  nomFrancais: "Mandarinier",
  nomPopayan: "Mandarina",
  nomScientifique: "Citrus reticulata",
  familleBotanique: "Rutaceae",
  presentation: "Petit agrume doux, adapté à climat tempéré, fruits sucrés et parfumés.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Climat de Popayán favorable; préfère sols drainés et ensoleillement complet.",
    recommandations: ["Irrigation modérée", "Paillage", "Protection maladies fongiques"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 365, max: 450, unit: "jours" }, nbCyclesAn: { min: 1, max: 2, unit: "cycles/an" } },
  rendement: { unite: "kg_plant", valeur: { min: 20, max: 50, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation régulière" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "humide", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Petit agrume facile à cultiver, récolte annuelle.",
    etapes: ["Greffe ou semis", "Paillage", "Irrigation", "Taille légère"],
    recolte: ["Fruits mûrs selon variété"],
    postRecolte: ["Consommation fraîche ou jus"],
  },
  pertiance: [""],
  tags: ["fruit", "agrumes", "plein_champ"],
  sources: ["https://www.fao.org/citrus-production"]
},

// 198) Grenadier
{
  id: "grenadier",
    note: 49,  type: "arbre_et_arbustes",
  ordrer: 198,
  image: ["cultures/grenadier.png"],
  nomFrancais: "Grenadier",
  nomPopayan: "Granada",
  nomScientifique: "Punica granatum",
  familleBotanique: "Lythraceae",
  presentation: "Arbre fruitier à fruits rouges, riches en antioxydants, résistant à sécheresse modérée.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Supporte climat doux de Popayán et périodes de sécheresse modérées.",
    recommandations: ["Sol drainé", "Irrigation modérée", "Taille légère pour fructification"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 365, max: 730, unit: "jours" } },
  rendement: { unite: "kg_plant", valeur: { min: 15, max: 40, unit: "kg/plant/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation modérée" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 5.5, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Petit arbre fruitier, facile à cultiver, récolte annuelle.",
    etapes: ["Planter greffe ou semis", "Irrigation", "Paillage", "Taille légère"],
    recolte: ["Fruits mûrs selon variété"],
    postRecolte: ["Consommation fraîche, jus, confiture"],
  },
  pertiance: [""],
  tags: ["fruit", "antioxydant", "plein_champ"],
  sources: ["https://www.fao.org/pomegranate"]
},


// 204) Tournesol
{
  id: "tournesol",
  note: 49,    type: "legume",
  ordrer: 204,
  image: ["/cultures/tournesol.png"],
  nomFrancais: "Tournesol",
  nomPopayan: "Girasol",
  nomScientifique: "Helianthus annuus",
  familleBotanique: "Asteraceae",
  presentation: "Plante annuelle cultivée pour graines oléagineuses et décoratives.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "S’adapte bien au climat tempéré de Popayán; supporte sols modérément fertiles.",
    recommandations: ["Soleil direct", "Drainage correct", "Irrigation modérée"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 90, max: 120, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.5, max: 1.5, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Irrigation modérée, éviter excès" },
    climat: { temperatureIdealeC: { min: 20, max: 28, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plante annuelle facile, adaptée aux sols tempérés, graines comestibles et huile.",
    etapes: ["Semer en rangs", "Éclaircir plants", "Irrigation modérée", "Récolte graines"],
    recolte: ["Graines mûres, capitules bien secs"],
    postRecolte: ["Stockage graines, transformation huile ou consommation"],
  },
  pertiance: [""],
  tags: ["oléagineux", "annuel", "plein_champ"],
  sources: ["https://www.fao.org/sunflower-production"]
},

// 205) Quinoa
{
  id: "quinoa",
  note: 49,    type: "legume",
  ordrer: 205,
  image: ["/cultures/quinoa.png"],
  nomFrancais: "Quinoa",
  nomPopayan: "Quínoa",
  nomScientifique: "Chenopodium quinoa",
  familleBotanique: "Amaranthaceae",
  presentation: "Céréale pseudo-grain nutritive, riche en protéines et minéraux.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "S’adapte au climat tempéré; tolère sols pauvres, mais rendement optimal sur sol fertile et drainé.",
    recommandations: ["Soleil direct", "Irrigation modérée", "Paillage possible"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 90, max: 120, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.3, max: 0.8, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen", strategie: "Arrosage régulier sans saturation" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, bien drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plante annuelle, récolte de graines nutritives, adaptée aux sols tempérés et drainés.",
    etapes: ["Semer en rangs", "Éclaircir plants", "Irrigation modérée", "Récolte graines"],
    recolte: ["Graines mûres, capitules secs"],
    postRecolte: ["Nettoyage et stockage graines"],
  },
  pertiance: [""],
  tags: ["pseudo-céréale", "annuel", "plein_champ"],
  sources: ["https://www.fao.org/quinoa"]
},

// 206) Amaranto
{
  id: "amaranto",
   note: 49,   type: "legume",
  ordrer: 206,
  image: ["/cultures/amaranto.png"],
  nomFrancais: "Amaranto",
  nomPopayan: "Amaranto",
  nomScientifique: "Amaranthus spp.",
  familleBotanique: "Amaranthaceae",
  presentation: "Plante annuelle cultivée pour feuilles et graines riches en protéines.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Supporte bien climat tempéré, croissance rapide et cycle court.",
    recommandations: ["Soleil direct", "Irrigation modérée", "Sol drainé"],
  },
  techniques: ["plein_champ", "pleine_terre", "bac_exterieur"],
  cycle: { dureeCycleJours: { min: 60, max: 90, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.5, max: 1.2, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 18, max: 28, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plante annuelle polyvalente, feuilles et graines comestibles, cycle court.",
    etapes: ["Semer en rangs", "Éclaircir plants", "Irrigation modérée", "Récolte feuilles et graines"],
    recolte: ["Feuilles jeunes pour consommation, graines mûres pour stockage"],
    postRecolte: ["Nettoyage feuilles et graines, stockage sec"],
  },
  pertiance: [""],
  tags: ["feuilles", "graines", "annuel"],
  sources: ["https://www.fao.org/amaranth"]
},

// 207) Linaza (lin)
{
  id: "linaza",
  note: 49,    type: "legume",
  ordrer: 207,
  image: ["/cultures/linaza.png"],
  nomFrancais: "Lin",
  nomPopayan: "Lino",
  nomScientifique: "Linum usitatissimum",
  familleBotanique: "Linaceae",
  presentation: "Plante annuelle cultivée pour graines oléagineuses et fibres.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Supporte climat tempéré, sols drainés et fertiles.",
    recommandations: ["Soleil direct", "Irrigation modérée", "Paillage possible"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 90, max: 120, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.4, max: 0.8, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Plante annuelle, récolte graines oléagineuses et fibres.",
    etapes: ["Semer en rangs", "Éclaircir plants", "Irrigation modérée", "Récolte graines"],
    recolte: ["Graines mûres, capitules secs"],
    postRecolte: ["Nettoyage graines, stockage"],
  },
  pertiance: [""],
  tags: ["oléagineux", "annuel", "plein_champ"],
  sources: ["https://www.fao.org/flax"]
},

//M. Engrais verts / Couvre-sols / Fixateurs d’azote

// 209) Trèfle
{
  id: "trefle",
  note: 49,
  type: "legume",
  ordrer: 209,
  image: ["cultures/trefle.png"],
  nomFrancais: "Trèfle",
  nomPopayan: "Trébol",
  nomScientifique: "Trifolium spp.",
  familleBotanique: "Fabaceae",
  presentation: "Plante légumineuse utilisée comme engrais vert ou pâturage; fixe l’azote.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "S’adapte aux sols tempérés et modérément humides de Popayán.",
    recommandations: ["Semis en pleine terre", "Rotation avec cultures principales", "Éviter sols très acides"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 120, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.5, max: 1.2, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Engrais vert et fourrage, facile à cultiver, fixe l’azote et améliore le sol.",
    etapes: ["Semer en rangs ou broadcast", "Maintenir sol humide", "Couper avant floraison si utilisation comme fourrage"],
    recolte: ["Couper feuillage vert ou semer pour graines"],
    postRecolte: ["Incorporation au sol ou stockage fourrage"],
  },
  pertiance: [""],
  tags: ["engrais_vert", "fixateur_azote"],
  sources: ["https://www.fao.org/cover-crops"]
},

// 210) Luzerne
{
  id: "luzerne",
  note: 49,    type: "legume",
  ordrer: 210,
  image: ["/cultures/luzerne.png"],
  nomFrancais: "Luzerne",
  nomPopayan: "Alfalfa",
  nomScientifique: "Medicago sativa",
  familleBotanique: "Fabaceae",
  presentation: "Plante fourragère et engrais vert, très riche en protéines.",
  difficulte: "moyenne",
  adaptationPopayan: {
    adaptation: "bonne",
    justification: "Tolère climat tempéré de Popayán, nécessite sol bien drainé et fertile.",
    recommandations: ["Irrigation régulière", "Paillage possible", "Surveillance maladies foliaires"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 120, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 1, max: 2, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux fertile, drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.5, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "moyen" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Engrais vert ou fourrage riche, cycle modéré, entretien moyen.",
    etapes: ["Semer en rangs", "Maintenir humidité", "Éclaircir si trop dense"],
    recolte: ["Feuilles jeunes pour fourrage", "Couper avant floraison"],
    postRecolte: ["Stockage fourrage sec ou incorporation au sol"],
  },
  pertiance: [""],
  tags: ["engrais_vert", "fourrage"],
  sources: ["https://www.fao.org/alfalfa"]
},

// 211) Phacélie
{
  id: "phacelie",
  note: 49,
  type: "legume",
  ordrer: 211,
  image: ["/cultures/phacelie.png"],
  nomFrancais: "Phacélie",
  nomPopayan: "Phacelia",
  nomScientifique: "Phacelia tanacetifolia",
  familleBotanique: "Boraginaceae",
  presentation: "Plante annuelle utilisée comme engrais vert, attractif pour pollinisateurs.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Croissance rapide, adaptée au climat tempéré, améliore structure du sol.",
    recommandations: ["Soleil direct", "Sol drainé", "Arrosage modéré"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 90, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.5, max: 1.5, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Engrais vert rapide et attractif pour pollinisateurs; facile à cultiver.",
    etapes: ["Semer en rangs ou broadcast", "Maintenir sol humide", "Couper avant floraison"],
    recolte: ["Incorporation au sol comme engrais vert"],
    postRecolte: ["Compostage ou couverture du sol"],
  },
  pertiance: [""],
  tags: ["engrais_vert", "pollinisateur"],
  sources: ["https://www.fao.org/phacelia"]
},

// 212) Vesce
{
  id: "vesce",
  note: 49,    type: "legume",
  ordrer: 212,
  image: ["/cultures/vesce.png"],
  nomFrancais: "Vesce",
  nomPopayan: "Vicia spp.",
  nomScientifique: "Vicia sativa",
  familleBotanique: "Fabaceae",
  presentation: "Légumineuse utilisée comme engrais vert et fourrage, fixe l’azote.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Adaptée aux sols tempérés de Popayán, cycle court et facile à cultiver.",
    recommandations: ["Soleil direct ou mi-ombre", "Sol fertile et drainé", "Maintenir humidité modérée"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 60, max: 90, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.5, max: 1.5, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.5, unit: "pH" } },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Légumineuse fixatrice d’azote, facile et rapide à cultiver comme engrais vert.",
    etapes: ["Semer en rangs", "Maintenir humidité", "Couper avant floraison"],
    recolte: ["Incorporation au sol pour enrichissement azote"],
    postRecolte: ["Compostage ou paillage"],
  },
  pertiance: [""],
  tags: ["engrais_vert", "fixateur_azote"],
  sources: ["https://www.fao.org/vetch"]
},

// 214) Moutarde (engrais vert)
{
  id: "moutarde-vert",
  note: 49,    type: "legume",
  ordrer: 214,
  image: ["/cultures/moutarde.png"],
  nomFrancais: "Moutarde (engrais vert)",
  nomPopayan: "Mostaza",
  nomScientifique: "Brassica juncea",
  familleBotanique: "Brassicaceae",
  presentation: "Plante à croissance rapide utilisée pour couvrir sol et enrichir azote.",
  difficulte: "facile",
  adaptationPopayan: {
    adaptation: "tres_bonne",
    justification: "Très adaptée au climat tempéré de Popayán, croissance rapide, protège sol et lutte contre adventices.",
    recommandations: ["Soleil direct", "Irrigation modérée", "Sol fertile et drainé"],
  },
  techniques: ["plein_champ", "pleine_terre"],
  cycle: { dureeCycleJours: { min: 40, max: 60, unit: "jours" } },
  rendement: { unite: "kg_m2", valeur: { min: 0.3, max: 0.8, unit: "kg/m²/an" } },
  besoins: {
    eau: { niveau: "moyen" },
    climat: { temperatureIdealeC: { min: 15, max: 25, unit: "°C" }, ensoleillement: "plein_soleil" },
    sol: { typeSol: "limoneux drainé", humiditeSol: "frais", drainage: "bon", pH: { min: 6.0, max: 7.0, unit: "pH" } },
    nutriments: { exigenceGlobale: "faible" },
  },
  associationCulture: { compatible: [], aEviter: [] },
  howToCulture: {
    resume: "Engrais vert rapide, protège sol et enrichit azote.",
    etapes: ["Semer en rangs ou broadcast", "Maintenir humidité modérée", "Couper avant floraison"],
    recolte: ["Incorporation au sol comme engrais vert"],
    postRecolte: ["Compostage ou paillage"],
  },
  pertiance: [""],
  tags: ["engrais_vert", "rapide", "fixateur_azote"],
  sources: ["https://www.fao.org/mustard-cover-crop"]
}

];


/*
CLASSEMENT DES CULTURES PAR PERTINENCE
🏆 TRÈS HAUTE PERTINENCE (85-100/100)




Laitue - 92/100

Idéale aquaponie, croissance rapide (30-45 jours)
Rendement excellent en serre (25-30 kg/m²/an)
Climat frais de Popayán parfait
Demande constante


Pleurote - 90/100

Croissance sur déchets organiques = zéro déchet
Climat humide Popayán idéal
Rentabilité élevée, pas besoin de lumière
Valorise substrats (paille, marc café)


Basilic - 88/100

Excellente en aquaponie/serre
Haute valeur ajoutée, forte demande
Croissance rapide, multiples récoltes
Températures Popayán convenables


Micropousses variées - 87/100

Cycles ultra-courts (7-14 jours)
Très haute valeur ajoutée
Faible espace requis (bâtiment dédié)
Marché premium



🥈 HAUTE PERTINENCE (70-84/100)

Concombre - 82/100

Excellent serre + aquaponie
Haut rendement (20-30 kg/m²)
Aime humidité Popayán


Poivron - 80/100

Rentable en serre
Longue production, prix élevé
Besoin chaleur = serre obligatoire


Épinard - 78/100

Parfait climat frais Popayán
Aquaponie possible
Croissance rapide


Menthe - 76/100

Ultra-facile, robuste
Pousse bien climat humide
Peu d'entretien, vente directe/infusions


Persil - 75/100

Climat frais idéal
Demande constante
Facile culture


Coriandre - 74/100

Croissance rapide
Demande locale forte (cuisine latine)
Températures Popayán OK


Radis - 72/100

Cycle ultra-court (25-30 jours)
Aquaponie possible
Rotation rapide


Chou kale - 71/100

Climat frais excellent
Marché santé croissant
Résistant



🥉 PERTINENCE MOYENNE (55-69/100)

Fraise - 68/100

Climat Popayán adapté
Rentable mais exigeante
Nécessite protection (serre)


Courgette - 66/100

Productif mais besoin espace
Serre recommandée
Bon rendement


Aubergine - 64/100

Besoin chaleur = serre
Plus long cycle
Marché limité


Chou-fleur - 62/100

Climat frais OK
Exigeant en nutriments
Cycle long


Brocoli - 61/100

Aime climat frais
Cycle moyen (70-90 jours)
Nutriments élevés


Betterave - 60/100

Facile mais cycle long
Climat OK
Rendement moyen


Carotte - 58/100

Cycle long (70-90 jours)
Besoin sol profond
Difficile aquaponie


Thym - 56/100

Préfère climat sec (Popayán trop humide)
Croissance lente
Marché limité



⚠️ PERTINENCE FAIBLE (40-54/100)

Romarin - 52/100

Climat Popayán trop humide
Préfère sec/chaud
Croissance lente


Piment - 50/100

Besoin chaleur constante
Climat Popayán limite
Marché restreint




Pastèque - 46/100

Trop froid Popayán
Besoin chaleur 25-30°C
Espace important


Avocat - 44/100

Arbre = espace important (2000m² limité)
Rendement après 3-5 ans
Gel possible Popayán


Citronnier - 42/100

Sensible froid (<15°C)
Espace arbre
Rendement tardif



❌ NON RECOMMANDÉ (< 40/100)




*/