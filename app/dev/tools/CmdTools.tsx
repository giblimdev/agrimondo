"use client";

import React from "react";
import { Copy, Check, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Cmd, CMD } from "./cmdData";
import CmdForm from "./CmdForm";

function categoryLabel(c: Cmd["category"]) {
  switch (c) {
    case "next":
      return "Next.js";
    case "prisma":
      return "Prisma";
    case "database":
      return "Database";
    case "design":
      return "Design/UI";
    case "libs":
      return "Librairies";
  }
}

function categoryVariant(c: Cmd["category"]) {
  const map: Record<Cmd["category"], "default" | "secondary" | "outline"> = {
    next: "default",
    prisma: "secondary",
    database: "outline",
    design: "outline",
    libs: "outline",
  };
  return map[c];
}

export default function CmdTools() {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<
    Cmd["category"] | "all"
  >("all");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [cmds, setCmds] = React.useState<Cmd[]>(CMD); // état local pour les commandes

  const filteredRows = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return cmds
      .filter((cmd) =>
        activeCategory === "all" ? true : cmd.category === activeCategory,
      )
      .filter((cmd) =>
        q
          ? [cmd.label, cmd.content, cmd.category, cmd.note ?? ""].some((f) =>
              f.toLowerCase().includes(q),
            )
          : true,
      )
      .sort((a, b) => a.order - b.order);
  }, [query, activeCategory, cmds]);

  const handleCopy = async (cmd: Cmd) => {
    try {
      await navigator.clipboard.writeText(cmd.content);
      setCopiedId(cmd.id);
      setTimeout(() => setCopiedId(null), 1200);
    } catch {
      alert("Erreur lors de la copie");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10">
      <section className="mx-auto max-w-6xl px-4">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            🚀 Commandes Utiles
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Liste rapide de commandes Next.js, Prisma, Docker, et plus encore.
          </p>
        </header>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-slate-800">
            Table des commandes
          </h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add CMD
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Ajouter une commande</DialogTitle>
              </DialogHeader>

              <CmdForm
                onClose={() => setOpen(false)}
                onSuccess={(newCmd) => {
                  setCmds((prev) => [...prev, newCmd]); // ajoute la commande au state local
                  alert("Commande ajoutée !");
                }}
              />
            </DialogContent>
          </Dialog>
        </div>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="space-y-4">
            <CardTitle className="text-lg font-semibold text-slate-800">
              Liste interactive
            </CardTitle>
            <CardDescription className="text-slate-600">
              Filtre par catégorie, recherche plein texte et copie rapide.
            </CardDescription>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => setActiveCategory("all")}
                >
                  Toutes
                </Button>
                {(
                  ["next", "prisma", "database", "design", "libs"] as const
                ).map((cat) => (
                  <Button
                    key={cat}
                    size="sm"
                    variant={activeCategory === cat ? "default" : "outline"}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {categoryLabel(cat)}
                  </Button>
                ))}
              </div>

              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  aria-label="Rechercher une commande"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="pl-8 text-sm"
                />
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Catégorie</TableHead>
                    <TableHead>Label</TableHead>
                    <TableHead>Commande</TableHead>
                    <TableHead className="w-[120px] text-right">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRows.map((cmd) => (
                    <TableRow key={cmd.id}>
                      <TableCell className="align-top">
                        <Badge variant={categoryVariant(cmd.category)}>
                          {categoryLabel(cmd.category)}
                        </Badge>
                      </TableCell>
                      <TableCell className="align-top">
                        <div className="font-medium text-slate-900">
                          {cmd.label}
                        </div>
                        {cmd.note && (
                          <div className="mt-1 text-xs text-slate-600">
                            {cmd.note}
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="align-top">
                        <pre className="rounded-md bg-slate-900 px-3 py-2 text-xs text-slate-50 shadow-inner">
                          <code>{cmd.content}</code>
                        </pre>
                      </TableCell>
                      <TableCell className="align-top text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCopy(cmd)}
                          className={cn(
                            copiedId === cmd.id &&
                              "border-green-400 bg-green-50",
                          )}
                        >
                          {copiedId === cmd.id ? (
                            <>
                              <Check className="mr-1 h-4 w-4 text-green-500" />{" "}
                              Copié
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-4 w-4" /> Copier
                            </>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredRows.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="py-10 text-center text-slate-600 text-sm"
                      >
                        Aucun résultat trouvé.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
