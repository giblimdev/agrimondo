// lib/compliance.ts
// Mise à jour : février 2026

export interface RegulatoryDocument {
  id: string;
  title: string;
  description: string;
  entity: string;
  entityCode:
    | "ICA"
    | "MADR"
    | "AUNAP"
    | "MINSA"
    | "INVIMA"
    | "CONGRESO"
    | "CAR"
    | "ANLA";
  number: string;
  year: number;
  status: "Vigente" | "Modificado" | "Derogado parcialmente" | "En trámite";
  category: string[];
  lastUpdate: string; // YYYY-MM-DD
  summary: string;
  keyPoints: string[];
  url?: string;
  penalty: string;
  penaltyAmount?: string;
  applicability: string[];
  requirements: string[];
  updateFrequency:
    | "Mensual"
    | "Trimestral"
    | "Anual"
    | "Bianual"
    | "Según necesidad";
}

export interface RegulatoryEntity {
  code: string;
  name: string;
  fullName: string;
  role: string;
  website: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  jurisdiction: string[];
  color: string;
  icon: string;
}

export interface ComplianceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  documentsCount: number;
}

export interface ComplianceRequirement {
  activity: string;
  requirements: string[];
  permits: string[];
  timeline: string;
  cost: string;
  validity: string;
}

// ────────────────────────────────────────────────
// ENTIDADES REGULADORAS
// ────────────────────────────────────────────────

export const regulatoryEntities: Record<string, RegulatoryEntity> = {
  ICA: {
    code: "ICA",
    name: "ICA",
    fullName: "Instituto Colombiano Agropecuario",
    role: "Autoridad sanitaria y fitosanitaria nacional",
    website: "https://www.ica.gov.co",
    contact: {
      phone: "+57 601 7563030",
      email: "contacto@ica.gov.co",
      address: "Carrera 41 # 17-81, Bogotá D.C.",
    },
    jurisdiction: [
      "Sanidad animal",
      "Sanidad vegetal",
      "Inocuidad",
      "Entomocultura",
      "Apicultura",
    ],
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: "🏛️",
  },
  MADR: {
    code: "MADR",
    name: "MinAgricultura",
    fullName: "Ministerio de Agricultura y Desarrollo Rural",
    role: "Política agropecuaria y desarrollo rural",
    website: "https://www.minagricultura.gov.co",
    contact: {
      phone: "+57 601 2544744",
      email: "atencionciudadano@minagricultura.gov.co",
      address: "Avenida Jiménez No. 7-65, Bogotá D.C.",
    },
    jurisdiction: [
      "Políticas",
      "Subsidios",
      "Certificaciones",
      "Agricultura urbana",
    ],
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "🌱",
  },
  AUNAP: {
    code: "AUNAP",
    name: "AUNAP",
    fullName: "Autoridad Nacional de Acuicultura y Pesca",
    role: "Regulación acuicultura y pesca",
    website: "https://www.aunap.gov.co",
    contact: {
      phone: "+57 601 5878500",
      email: "contactenos@aunap.gov.co",
      address: "Calle 25B # 95-54, Bogotá D.C.",
    },
    jurisdiction: ["Acuicultura", "Piscicultura", "Aquaponia"],
    color: "bg-cyan-100 text-cyan-800 border-cyan-200",
    icon: "🐟",
  },
  MINSA: {
    code: "MINSA",
    name: "MinSalud",
    fullName: "Ministerio de Salud y Protección Social",
    role: "Salud pública e inocuidad alimentaria",
    website: "https://www.minsalud.gov.co",
    contact: {
      phone: "+57 601 3305041",
      email: "contactenos@minsalud.gov.co",
      address: "Carrera 13 # 32-76, Bogotá D.C.",
    },
    jurisdiction: ["Inocuidad", "Etiquetado", "BPM"],
    color: "bg-red-100 text-red-800 border-red-200",
    icon: "🏥",
  },
  INVIMA: {
    code: "INVIMA",
    name: "INVIMA",
    fullName: "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
    role: "Registro sanitario alimentos y suplementos",
    website: "https://www.invima.gov.co",
    contact: {
      phone: "+57 601 2948700",
      email: "contactenos@invima.gov.co",
      address: "Calle 26 # 13-19, Bogotá D.C.",
    },
    jurisdiction: [
      "Registro sanitario",
      "Alimentos procesados",
      "Harinas insectos",
    ],
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "📋",
  },
};

// ────────────────────────────────────────────────
// CATEGORÍAS
// ────────────────────────────────────────────────

export const complianceCategories: ComplianceCategory[] = [
  {
    id: "bsf",
    name: "BSF",
    description: "Mosca soldado negro",
    icon: "🐛",
    color: "bg-orange-100 text-orange-800",
    documentsCount: 5,
  },
  {
    id: "aviculture",
    name: "Avicultura",
    description: "Producción avícola",
    icon: "🐔",
    color: "bg-yellow-100 text-yellow-800",
    documentsCount: 7,
  },
  {
    id: "eggs",
    name: "Huevos",
    description: "Producción y venta de huevos",
    icon: "🥚",
    color: "bg-amber-100 text-amber-800",
    documentsCount: 6,
  },
  {
    id: "apiculture",
    name: "Apicultura",
    description: "Miel y colmenas",
    icon: "🐝",
    color: "bg-amber-200 text-amber-900",
    documentsCount: 5,
  },
  {
    id: "aquaponics",
    name: "Aquaponie",
    description: "Sistemas integrados",
    icon: "🌊",
    color: "bg-blue-100 text-blue-800",
    documentsCount: 5,
  },
  {
    id: "aquaculture",
    name: "Piscicultura",
    description: "Crianza de peces",
    icon: "🐠",
    color: "bg-cyan-100 text-cyan-800",
    documentsCount: 6,
  },
  {
    id: "micropousses",
    name: "Micropousses",
    description: "Brotes jóvenes",
    icon: "🌱",
    color: "bg-emerald-100 text-emerald-800",
    documentsCount: 3,
  },
  {
    id: "mycoculture",
    name: "Mycoculture",
    description: "Cultivo de hongos",
    icon: "🍄",
    color: "bg-violet-100 text-violet-800",
    documentsCount: 4,
  },
];

// ────────────────────────────────────────────────
// DOCUMENTS (exemples – tu peux en ajouter)
// ────────────────────────────────────────────────

export const regulatoryDocuments: RegulatoryDocument[] = [
  // Exemple BSF
  {
    id: "bsf-001",
    title: "Resolución ICA 000365 de 2021 (modif. 2025)",
    description: "Requisitos sanitarios para producción de insectos",
    entity: "ICA",
    entityCode: "ICA",
    number: "000365",
    year: 2021,
    status: "Modificado",
    category: ["bsf", "entomocultura"],
    lastUpdate: "2025-11-10",
    summary: "Norma clave para BSF – incluye consumo humano.",
    keyPoints: [
      "Registro ICA + INVIMA",
      "Procesamiento ≥70°C",
      "Análisis cada 60 días",
    ],
    penalty: "Multas hasta 8.000 SMLMV",
    penaltyAmount: "Hasta ~13.000 millones COP",
    applicability: ["Criaderos BSF", "Procesadores"],
    requirements: ["Registro ICA", "Plan BPE"],
    updateFrequency: "Anual",
  },
  // Ajoute ici tes autres documents réels...
];

// ────────────────────────────────────────────────
// EXIGENCES PAR ACTIVITÉ (exemples)
// ────────────────────────────────────────────────

export const complianceRequirements: Record<string, ComplianceRequirement> = {
  bsf: {
    activity: "Crianza BSF",
    requirements: ["Registro ICA", "Plan BPE", "Análisis microbiológico"],
    permits: ["Registro ICA", "Permiso ambiental si >10 ton/mes"],
    timeline: "90-150 días",
    cost: "4-12 millones COP",
    validity: "5 años",
  },
  // Ajoute les autres...
};

// ────────────────────────────────────────────────
// UTILITAIRES (avec getComplianceStats restaurée)
// ────────────────────────────────────────────────

export const complianceUtils = {
  getCurrentSMLMV: (): number => 1625000, // février 2026

  calculatePenalty: (smlmvMultiplier: number): string => {
    const smlmv = complianceUtils.getCurrentSMLMV();
    const amount = smlmv * smlmvMultiplier;
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount);
  },

  formatDate: (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  getLatestDocumentYear: (): number => {
    return Math.max(...regulatoryDocuments.map((d) => d.year));
  },

  filterByYearRange: (
    start: number,
    end: number = 2026,
  ): RegulatoryDocument[] => {
    return regulatoryDocuments.filter((d) => d.year >= start && d.year <= end);
  },

  // FONCTION RESTAURÉE – celle que ton page.tsx attend
  getComplianceStats: () => {
    const stats = {
      totalDocuments: regulatoryDocuments.length,
      activeDocuments: regulatoryDocuments.filter((d) => d.status === "Vigente")
        .length,
      byCategory: {} as Record<string, number>,
      byEntity: {} as Record<string, number>,
      lastUpdate: regulatoryDocuments.reduce((latest, doc) => {
        const docDate = new Date(doc.lastUpdate);
        const latestDate = new Date(latest);
        return docDate > latestDate ? doc.lastUpdate : latest;
      }, "2000-01-01"),
    };

    // Comptage par catégorie
    complianceCategories.forEach((cat) => {
      stats.byCategory[cat.id] = regulatoryDocuments.filter((doc) =>
        doc.category.includes(cat.id),
      ).length;
    });

    // Comptage par entité
    Object.keys(regulatoryEntities).forEach((entity) => {
      stats.byEntity[entity] = regulatoryDocuments.filter(
        (doc) => doc.entityCode === entity,
      ).length;
    });

    return stats;
  },

  // Bonus : filtre par catégorie (si tu veux l'utiliser plus tard)
  filterDocumentsByCategory: (categoryId: string): RegulatoryDocument[] => {
    if (categoryId === "all") return regulatoryDocuments;
    return regulatoryDocuments.filter((doc) =>
      doc.category.includes(categoryId),
    );
  },
};
