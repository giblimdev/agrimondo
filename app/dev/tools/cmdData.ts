export type Cmd = {
  id: string;
  category: "next" | "prisma" | "database" | "design" | "libs";
  label: string;
  order: number;
  content: string;
  note?: string;
};

export const CMD: Cmd[] = [
  {
    id: "next-create-app",
    category: "next",
    label: "Créer un projet Next.js",
    order: 1,
    content: "npx create-next-app@latest",
    note: "Initialise un projet Next.js avec TypeScript.",
  },
  {
    id: "next-dev",
    category: "next",
    label: "Lancer le serveur dev",
    order: 2,
    content: "npm run dev",
  },
  {
    id: "next-build",
    category: "next",
    label: "Build de production",
    order: 3,
    content: "npm run build && npm start",
  },
  {
    id: "prisma-init",
    category: "prisma",
    label: "Initialiser Prisma",
    order: 1,
    content: "npx prisma init",
  },
  {
    id: "prisma-migrate-dev",
    category: "prisma",
    label: "Migration (dev)",
    order: 2,
    content: "npx prisma migrate dev --name init",
    note: "Crée et applique la migration sur la base locale.",
  },
  {
    id: "prisma-generate",
    category: "prisma",
    label: "Générer le client Prisma",
    order: 3,
    content: "npx prisma generate",
  },
  {
    id: "prisma-studio",
    category: "prisma",
    label: "Ouvrir Prisma Studio",
    order: 4,
    content: "npx prisma studio",
  },
  {
    id: "docker-postgres",
    category: "database",
    label: "Démarrer PostgreSQL (Docker)",
    order: 1,
    content:
      "docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16",
  },
  {
    id: "db-pull",
    category: "database",
    label: "Importer le schéma depuis la DB",
    order: 2,
    content: "npx prisma db pull",
  },
  {
    id: "db-push",
    category: "database",
    label: "Pousser le schéma vers la DB",
    order: 3,
    content: "npx prisma db push",
  },
  {
    id: "shadcn-init",
    category: "design",
    label: "Initialiser shadcn/ui",
    order: 1,
    content: "npx shadcn@latest init",
  },
  {
    id: "shadcn-add",
    category: "design",
    label: "Ajouter un composant shadcn/ui",
    order: 2,
    content: "npx shadcn@latest add button card table",
  },
  {
    id: "tailwind",
    category: "design",
    label: "Configurer TailwindCSS",
    order: 3,
    content: "npx tailwindcss init -p",
  },
  {
    id: "lib-zod",
    category: "libs",
    label: "Validation (Zod)",
    order: 1,
    content: "npm install zod",
  },
  {
    id: "lib-zustand",
    category: "libs",
    label: "State management (Zustand)",
    order: 2,
    content: "npm install zustand",
  },
  {
    id: "lib-react-hook-form",
    category: "libs",
    label: "Formulaires (React Hook Form)",
    order: 3,
    content: "npm install react-hook-form",
  },
];
