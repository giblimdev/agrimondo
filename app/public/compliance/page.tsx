// @/app/compliance/page.tsx
"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Filter,
  Calendar,
  AlertCircle,
  Download,
  BookOpen,
  Building,
  FileText,
  TrendingUp,
  Shield,
} from "lucide-react";

// Importation de vos données
import {
  regulatoryDocuments,
  complianceCategories,
  regulatoryEntities,
  complianceRequirements,
  complianceUtils,
  type RegulatoryDocument,
  type ComplianceCategory,
} from "./complianceData";

export default function CompliancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEntity, setSelectedEntity] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Filtrer les documents
  const filteredDocuments = useMemo(() => {
    return regulatoryDocuments.filter((doc) => {
      const matchesSearch =
        searchQuery === "" ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        doc.category.some((cat) => cat.includes(selectedCategory));

      const matchesEntity =
        selectedEntity === "all" || doc.entityCode === selectedEntity;

      const matchesStatus =
        selectedStatus === "all" || doc.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesEntity && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedEntity, selectedStatus]);

  // Statistiques
  const stats = {
    totalDocuments: regulatoryDocuments.length,
    activeDocuments: regulatoryDocuments.filter((d) => d.status === "Vigente")
      .length,
    updatedThisYear: regulatoryDocuments.filter((d) => d.year === 2026).length,
    categories: complianceCategories.length,
  };

  // Obtenir la couleur de l'entité
  const getEntityColor = (entityCode: string) => {
    return regulatoryEntities[entityCode]?.color || "bg-gray-100 text-gray-800";
  };

  // Obtenir l'icône de l'entité
  const getEntityIcon = (entityCode: string) => {
    return regulatoryEntities[entityCode]?.icon || "🏛️";
  };

  // Formater le statut
  const getStatusVariant = (status: string) => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      Vigente: "default",
      Modificado: "secondary",
      "Derogado parcialmente": "outline",
      "En trámite": "destructive",
    };
    return variants[status] || "default";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      {/* En-tête */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Conformité Réglementaire 2026
            </h1>
            <p className="text-gray-600 mt-2">
              Base de données des réglementations agricoles et alimentaires en
              Colombie
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">
              Dernière mise à jour : {complianceUtils.formatDate("2026-02-10")}
            </span>
          </div>
        </div>
      </header>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Documents totaux
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalDocuments}
                </p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">En vigueur</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.activeDocuments}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Nouveautés 2026
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.updatedThisYear}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Catégories</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.categories}
                </p>
              </div>
              <BookOpen className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contenu principal avec onglets */}
      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList className="grid grid-cols-3 lg:w-1/2">
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Catégories
          </TabsTrigger>
          <TabsTrigger value="entities" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Entités
          </TabsTrigger>
        </TabsList>

        {/* Onglet Documents */}
        <TabsContent value="documents" className="space-y-6">
          {/* Filtres */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres avancés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Recherche
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Titre, description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Catégorie
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes catégories</SelectItem>
                      {complianceCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          <span className="flex items-center gap-2">
                            <span>{cat.icon}</span>
                            {cat.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Entité
                  </label>
                  <Select
                    value={selectedEntity}
                    onValueChange={setSelectedEntity}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes entités" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes entités</SelectItem>
                      {Object.values(regulatoryEntities).map((entity) => (
                        <SelectItem key={entity.code} value={entity.code}>
                          <span className="flex items-center gap-2">
                            <span>{entity.icon}</span>
                            {entity.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Statut
                  </label>
                  <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tous statuts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous statuts</SelectItem>
                      <SelectItem value="Vigente">Vigente</SelectItem>
                      <SelectItem value="Modificado">Modificado</SelectItem>
                      <SelectItem value="Derogado parcialmente">
                        Derogado parcialmente
                      </SelectItem>
                      <SelectItem value="En trámite">En trámite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tableau des documents */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Documents réglementaires</CardTitle>
                  <CardDescription>
                    {filteredDocuments.length} document(s) trouvé(s)
                  </CardDescription>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Exporter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Entité</TableHead>
                      <TableHead>Année</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Mise à jour</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.map((doc) => (
                      <TableRow key={doc.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div>
                            <p className="font-medium">{doc.title}</p>
                            <p className="text-sm text-gray-500 line-clamp-1">
                              {doc.description}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${getEntityColor(doc.entityCode)} flex items-center gap-1 w-fit`}
                          >
                            {getEntityIcon(doc.entityCode)} {doc.entity}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{doc.year}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusVariant(doc.status)}>
                            {doc.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">
                            {complianceUtils.formatDate(doc.lastUpdate)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="gap-1">
                            Détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Catégories */}
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {complianceCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-lg ${category.color.split(" ")[0]} w-12 h-12 flex items-center justify-center`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <Badge variant="secondary">{category.documentsCount}</Badge>
                  </div>
                  <CardTitle className="mt-4">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Voir les documents
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Onglet Entités */}
        <TabsContent value="entities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(regulatoryEntities).map((entity) => (
              <Card key={entity.code} className="hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{entity.icon}</div>
                    <div>
                      <CardTitle>{entity.name}</CardTitle>
                      <CardDescription>{entity.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Rôle</p>
                    <p className="text-sm">{entity.role}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Contact</p>
                    <p className="text-sm">{entity.contact.phone}</p>
                    <p className="text-sm">{entity.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Juridiction
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {entity.jurisdiction.slice(0, 3).map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={entity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full" variant="outline">
                      Visiter le site
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Section exigences */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Exigences par activité
          </CardTitle>
          <CardDescription>
            Délais, coûts et permis nécessaires (2026)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(complianceRequirements).map(([key, req]) => (
              <div key={key} className="border rounded-lg p-4 hover:bg-gray-50">
                <h4 className="font-semibold text-lg mb-3">{req.activity}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Permis</p>
                    <ul className="text-sm list-disc list-inside mt-1">
                      {req.permits.slice(0, 2).map((p, i) => (
                        <li key={i} className="text-gray-700">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Coût estimé
                    </p>
                    <p className="font-medium">{req.cost}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Délai</p>
                    <p className="text-sm">{req.timeline}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Détails
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Avertissement */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
        <div>
          <p className="font-medium text-amber-800">Avertissement légal</p>
          <p className="text-sm text-amber-700">
            Cette plateforme fournit des informations à titre indicatif.
            Consultez toujours les sources officielles et des conseillers
            juridiques pour des décisions de conformité.
          </p>
        </div>
      </div>
    </div>
  );
}
