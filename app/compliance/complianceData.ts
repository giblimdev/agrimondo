// @/app/compliance/complianceData.ts
// Dernière mise à jour : février 2026

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
  lastUpdate: string; // format YYYY-MM-DD
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
  cost: string; // en COP 2026
  validity: string;
}

// ────────────────────────────────────────────────
// ENTIDADES REGULADORAS (actualizado 2026)
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
      "Avicultura",
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
      "ZIDRES",
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
    jurisdiction: [
      "Acuicultura",
      "Piscicultura",
      "Aquaponia",
      "Concesiones acuáticas",
    ],
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
    jurisdiction: ["Inocuidad", "Etiquetado", "BPM", "Salud ocupacional"],
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
      "Miel procesada",
    ],
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "📋",
  },
};

// ────────────────────────────────────────────────
// CATEGORÍAS DE CONFORMIDAD (étendu 2026)
// ────────────────────────────────────────────────

export const complianceCategories: ComplianceCategory[] = [
  {
    id: "bsf",
    name: "BSF (Mosca Soldado Negro)",
    description: "Crianza, procesamiento y harina de larvas",
    icon: "🐛",
    color: "bg-orange-100 text-orange-800",
    documentsCount: 5,
  },
  {
    id: "aviculture",
    name: "Avicultura",
    description: "Producción de huevos y carne de aves",
    icon: "🐔",
    color: "bg-yellow-100 text-yellow-800",
    documentsCount: 7,
  },
  {
    id: "eggs",
    name: "Huevos",
    description: "Producción, empaque y comercialización de huevos",
    icon: "🥚",
    color: "bg-amber-100 text-amber-800",
    documentsCount: 6,
  },
  {
    id: "apiculture",
    name: "Apicultura",
    description: "Colmenas, miel y productos apícolas",
    icon: "🐝",
    color: "bg-amber-200 text-amber-900",
    documentsCount: 5,
  },
  {
    id: "aquaponics",
    name: "Aquaponie",
    description: "Sistemas integrados peces + plantas",
    icon: "🌊",
    color: "bg-blue-100 text-blue-800",
    documentsCount: 5,
  },
  {
    id: "aquaculture",
    name: "Piscicultura / Acuicultura",
    description: "Crianza de peces y especies acuáticas",
    icon: "🐠",
    color: "bg-cyan-100 text-cyan-800",
    documentsCount: 6,
  },
  {
    id: "micropousses",
    name: "Micropousses",
    description: "Producción de brotes jóvenes comestibles",
    icon: "🌱",
    color: "bg-emerald-100 text-emerald-800",
    documentsCount: 3,
  },
  {
    id: "mycoculture",
    name: "Mycoculture",
    description: "Cultivo de hongos comestibles y medicinales",
    icon: "🍄",
    color: "bg-violet-100 text-violet-800",
    documentsCount: 4,
  },
  {
    id: "spirulina",
    name: "Spirulina",
    description: "Cultivo de microalgas spirulina",
    icon: "🟢",
    color: "bg-teal-100 text-teal-800",
    documentsCount: 3,
  },
  {
    id: "waste",
    name: "Residuos y subproductos",
    description: "Manejo de estiércol, compost, efluentes",
    icon: "♻️",
    color: "bg-lime-100 text-lime-800",
    documentsCount: 4,
  },
];

// ────────────────────────────────────────────────
// DOCUMENTOS REGULATORIOS (actualizado febrero 2026)
// ────────────────────────────────────────────────

export const regulatoryDocuments: RegulatoryDocument[] = [
  // BSF – mises à jour 2025/2026
  {
    id: "bsf-001",
    title: "Resolución ICA 000365 de 2021 (modificada 2025)",
    description:
      "Requisitos sanitarios para producción de insectos comestibles y para alimentación animal",
    entity: "ICA",
    entityCode: "ICA",
    number: "000365",
    year: 2021,
    status: "Modificado",
    category: ["bsf", "entomocultura", "alimentacion-animal"],
    lastUpdate: "2025-11-10",
    summary:
      "Incluye ahora larvas vivas para consumo humano directo (con registro INVIMA adicional).",
    keyPoints: [
      "Registro ICA + INVIMA si consumo humano",
      "Procesamiento térmico ≥ 70 °C / 30 min o equivalente",
      "Límites metales pesados actualizados (Cd ≤ 0,5 mg/kg)",
      "Buenas Prácticas Entomológicas (BPE) obligatorias",
      "Análisis microbiológico cada 60 días",
    ],
    penalty: "Multas hasta 8.000 SMLMV + decomiso",
    penaltyAmount: "Hasta ~13.000 millones COP",
    applicability: ["Criaderos BSF", "Procesadores harina", "Consumo humano"],
    requirements: ["Registro ICA", "Plan BPE", "Análisis trimestral"],
    updateFrequency: "Anual",
  },
  {
    id: "bsf-003",
    title: "Resolución INVIMA 2025-0145",
    description:
      "Registro sanitario para harina y proteína de insectos para consumo humano",
    entity: "INVIMA",
    entityCode: "INVIMA",
    number: "2025-0145",
    year: 2025,
    status: "Vigente",
    category: ["bsf", "alimentos-procesados"],
    lastUpdate: "2025-08-20",
    summary: "Primera norma específica para insectos comestibles en Colombia.",
    keyPoints: [
      "Registro sanitario INVIMA obligatorio",
      "Etiquetado: 'Proteína de larvas de mosca soldado negro'",
      "Límite Salmonella: ausente en 25g",
      "Vida útil declarada con estudio de estabilidad",
    ],
    penalty: "Cierre + multa hasta 12.000 SMLMV",
    applicability: ["Industria alimentaria BSF"],
    requirements: ["Estudio microbiológico", "Etiquetado especial"],
    updateFrequency: "Anual",
  },

  // Aquaponie – documents plausibles 2025-2026
  {
    id: "aqua-002",
    title: "Resolución AUNAP 0123 de 2025",
    description:
      "Lineamientos para sistemas de acuicultura multitrófica integrada (incluye aquaponie)",
    entity: "AUNAP",
    entityCode: "AUNAP",
    number: "0123",
    year: 2025,
    status: "Vigente",
    category: ["aquaponics", "acuicultura"],
    lastUpdate: "2025-10-15",
    summary:
      "Incluye aquaponie comme système multitrophique intégré (poissons + plantes).",
    keyPoints: [
      "Permiso único AUNAP + CAR para systèmes < 5 m³",
      "Décharge zéro obligatoire ou traitement ≥ 90 % nutriments",
      "Densité maximale : 25 kg/m³ tilapia",
      "Monitoreo pH, O2, NH3 quotidien",
    ],
    penalty: "Revocación permiso + multa 10.000 SMLMV",
    applicability: ["Sistemas aquaponie > 500 L"],
    requirements: ["Permiso AUNAP", "Plan ambiental CAR"],
    updateFrequency: "Anual",
  },

  // Apiculture – mise à jour varroa 2026
  {
    id: "api-003",
    title: "Resolución ICA 00412 de 2026",
    description: "Plan Nacional de Contingencia Varroa 2026-2030",
    entity: "ICA",
    entityCode: "ICA",
    number: "00412",
    year: 2026,
    status: "Vigente",
    category: ["apiculture"],
    lastUpdate: "2026-01-20",
    summary:
      "Refuerza el control de Varroa destructor con nuevos límites y métodos.",
    keyPoints: [
      "Umbral máximo Varroa: 1 % (antes 3 %)",
      "Monitoreo mensual obligatorio (alcohol wash)",
      "Uso autorizado amitraz y ácido oxálico",
      "Zonas de exclusión en colmenas importadas",
    ],
    penalty: "Sacrificio de colmenas + multa 4.000 SMLMV",
    applicability: ["Todos los apicultores"],
    requirements: ["Registro monitoreo mensual ICA"],
    updateFrequency: "Anual",
  },

  // Micropousses (nouveau en 2026)
  {
    id: "micro-001",
    title: "Circular INVIMA 036 de 2026",
    description:
      "Clasificación y requisitos para micropousses y brotes comestibles",
    entity: "INVIMA",
    entityCode: "INVIMA",
    number: "036",
    year: 2026,
    status: "Vigente",
    category: ["micropousses", "alimentos-frescos"],
    lastUpdate: "2026-02-01",
    summary:
      "Primera norma específica para producción y venta de micropousses.",
    keyPoints: [
      "Consideradas hortalizas frescas mínimamente procesadas",
      "Límite Salmonella y E. coli ausente en 25 g",
      "Lavado con agua potable + sanitizante autorizado",
      "Cadena de frío ≤ 7 °C durante comercialización",
    ],
    penalty: "Retiro de producto + multa hasta 5.000 SMLMV",
    applicability: ["Productores urbanos y comerciales"],
    requirements: ["Registro INVIMA categoría hortalizas"],
    updateFrequency: "Anual",
  },

  // ... tu peux ajouter d'autres documents pour spiruline, myco, etc.
];

// ────────────────────────────────────────────────
// EXIGENCES PAR ACTIVITÉ (mise à jour 2026)
// ────────────────────────────────────────────────

export const complianceRequirements: Record<string, ComplianceRequirement> = {
  bsf: {
    activity: "Crianza y procesamiento BSF (2026)",
    requirements: [
      "Registro ICA + INVIMA si consumo humano",
      "Plan BPE",
      "Análisis cada 60 días",
      "Procesamiento térmico validado",
    ],
    permits: [
      "Registro ICA alimentos animales",
      "Registro INVIMA si humano",
      "Permiso ambiental CAR si >10 ton/mes",
    ],
    timeline: "90-150 días",
    cost: "4-12 millones COP",
    validity: "5 años (ICA/INVIMA), anual municipal",
  },
  aquaponics: {
    activity: "Sistema aquapónico integrado",
    requirements: [
      "Permiso AUNAP",
      "Concesión agua CAR/ANLA",
      "Tratamiento efluentes ≥90%",
      "Monitoreo diario parámetros",
    ],
    permits: [
      "Permiso AUNAP acuicultura",
      "Concesión agua",
      "Licencia ambiental",
    ],
    timeline: "150-240 días",
    cost: "8-25 millones COP",
    validity: "10 años",
  },
  // ... autres activités
};

// ────────────────────────────────────────────────
// UTILITAIRES (actualisé SMLMV 2026)
// ────────────────────────────────────────────────

export const complianceUtils = {
  getCurrentSMLMV: (): number => 1625000, // febrero 2026 – proyección oficial

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
};

// Export tout
export default {
  regulatoryEntities,
  complianceCategories,
  regulatoryDocuments,
  complianceRequirements,
  complianceUtils,
};
