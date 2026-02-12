"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Cmd } from "./cmdData";

type CmdFormProps = {
  /** Cmd existante à modifier (ou undefined pour ajout) */
  initialData?: Partial<Cmd>;
  /** Callback appelée après enregistrement */
  onSuccess?: (cmd: Cmd) => void;
  /** Ferme le modal/drawer parent */
  onClose?: () => void;
};

export default function CmdForm({
  initialData,
  onSuccess,
  onClose,
}: CmdFormProps) {
  const [formData, setFormData] = React.useState({
    label: initialData?.label ?? "",
    category: initialData?.category ?? "next",
    content: initialData?.content ?? "",
    note: initialData?.note ?? "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isEdit = Boolean(initialData?.id);
    const endpoint = isEdit ? `/api/cmd/${initialData?.id}` : "/api/cmd";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur réseau");

      const newCmd: Cmd = await res.json();
      onSuccess?.(newCmd);
      onClose?.();
    } catch (err) {
      console.error("Erreur formulaire Cmd:", err);
      alert("Impossible d’enregistrer la commande.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="label">Label</Label>
        <Input
          id="label"
          name="label"
          required
          value={formData.label}
          onChange={handleChange}
          placeholder="Ex: Lancer le serveur Next.js"
        />
      </div>

      <div>
        <Label htmlFor="category">Catégorie</Label>
        <select
          id="category"
          name="category"
          required
          className="w-full rounded-md border border-slate-300 bg-white p-2 text-sm"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="next">Next.js</option>
          <option value="prisma">Prisma</option>
          <option value="database">Database</option>
          <option value="design">Design/UI</option>
          <option value="libs">Librairies</option>
        </select>
      </div>

      <div>
        <Label htmlFor="content">Commande</Label>
        <Textarea
          id="content"
          name="content"
          required
          value={formData.content}
          onChange={handleChange}
          placeholder="npx prisma migrate dev --name init"
        />
      </div>

      <div>
        <Label htmlFor="note">Note (optionnelle)</Label>
        <Input
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Commentaire ou précision"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full mt-4">
        {loading
          ? initialData?.id
            ? "Mise à jour..."
            : "Ajout..."
          : initialData?.id
            ? "Mettre à jour"
            : "Enregistrer"}
      </Button>
    </form>
  );
}
/*


button dropdown-menu context-menu menubar navigation-menu toggle toggle-group
badge card carousel chart table separator aspect-ratio
alert progress skeleton sonner spinner (inclus dans bundle)
form input textarea checkbox radio-group switch select label input-otp slider
dialog alert-dialog drawer sheet popover hover-card tooltip
tabs pagination breadcrumb accordion collapsible
command calendar resizable scroll-area sidebar
avatar

*/
