import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Download,
  Printer,
  FileText,
  Shield,
  Droplets,
  Users,
  FileCheck,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Qualité et Biosécurité en Élevage de Poules
                </CardTitle>
                <CardDescription className="text-emerald-100">
                  Standardisation des pratiques pour réduire les risques
                  sanitaires et sécuriser votre production
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-emerald-700 hover:bg-white">
                Document d'exploitation
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Cette page vous aide à standardiser les pratiques qui réduisent
              les risques sanitaires et sécurisent votre production (œufs et
              poules) grâce à des procédures écrites et vérifiables. Vous y
              trouverez des modèles simples (checklists, registres, calendrier)
              pour être prêt en cas d'audit ou de contrôle, et pour piloter
              votre élevage au quotidien.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Checklists disponibles
                  </p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Procédures standard</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Droplets className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vide sanitaire</p>
                  <p className="text-2xl font-bold">3 semaines</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Documents traçabilité</p>
                  <p className="text-2xl font-bold">6</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full mb-8 space-y-4">
          {/* Section 1 : Quarantaine & Introductions */}
          <Card>
            <AccordionItem value="quarantaine" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">
                      Quarantaine & Introductions de nouveaux animaux
                    </h3>
                    <p className="text-sm text-gray-500">
                      Protocole pour l'arrivée de nouveaux lots
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 pb-6 space-y-6">
                  <Card>
                    <CardHeader className="bg-blue-50">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <CardTitle>
                          Checklist "Arrivée d'un nouveau lot"
                        </CardTitle>
                      </div>
                      <CardDescription>
                        Vérifications à réaliser systématiquement lors de
                        l'introduction de poulettes ou poules de remplacement
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>
                              Origine du lot (nom du fournisseur, n° d'agrément)
                            </span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Documents accompagnateurs</span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>État général à l'arrivée</span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Mortalité pendant le transport</span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Mise en isolement immédiat</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Plan de soins / vaccins appliqué</span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>
                              Observation quotidienne pendant 2 semaines
                            </span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Traitement antiparasitaire systématique</span>
                          </div>
                          <div className="flex items-start">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>
                              Absence de contact avec le reste du troupeau
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button>
                          <Download className="mr-2 h-4 w-4" /> Télécharger la
                          checklist (PDF)
                        </Button>
                        <Button variant="outline">
                          <Printer className="mr-2 h-4 w-4" /> Imprimer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-green-50">
                      <CardTitle>Règles de circulation et d'hygiène</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3 text-green-700">
                            Direction de circulation
                          </h4>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="font-semibold">
                              Toujours du plus jeune / plus sain vers le plus
                              âgé / à risque
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3 text-green-700">
                            Équipements obligatoires
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <Badge className="mr-2">1</Badge>
                              Vêtements et bottes dédiés
                            </li>
                            <li className="flex items-center">
                              <Badge className="mr-2">2</Badge>
                              Pédiluve actif à chaque entrée/sortie
                            </li>
                            <li className="flex items-center">
                              <Badge className="mr-2">3</Badge>
                              Lavage/désinfection des mains
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>

          {/* Section 2 : Biosécurité, hygiène, vide sanitaire */}
          <Card>
            <AccordionItem value="biosecurite" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">
                      Biosécurité, Hygiène & Vide Sanitaire
                    </h3>
                    <p className="text-sm text-gray-500">
                      Protocoles de nettoyage et désinfection
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 pb-6 space-y-6">
                  <Card>
                    <CardHeader className="bg-green-50">
                      <CardTitle>
                        Procédure "Sortie de lot → Vide sanitaire"
                      </CardTitle>
                      <CardDescription>
                        Étapes obligatoires après chaque lot (bâtiment +
                        parcours)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {[
                          {
                            step: 1,
                            title: "Évacuation",
                            desc: "Animaux et matériel mobile",
                            color: "bg-red-100 border-red-200",
                          },
                          {
                            step: 2,
                            title: "Nettoyage",
                            desc: "Balayage et lavage haute pression",
                            color: "bg-orange-100 border-orange-200",
                          },
                          {
                            step: 3,
                            title: "Désinfection",
                            desc: "Produit homologué, temps de contact",
                            color: "bg-amber-100 border-amber-200",
                          },
                          {
                            step: 4,
                            title: "Séchage",
                            desc: "Complet des surfaces",
                            color: "bg-blue-100 border-blue-200",
                          },
                          {
                            step: 5,
                            title: "Dératisation",
                            desc: "Si nécessaire",
                            color: "bg-purple-100 border-purple-200",
                          },
                          {
                            step: 6,
                            title: "Contrôle",
                            desc: "Visuel et bactériologique",
                            color: "bg-emerald-100 border-emerald-200",
                          },
                        ].map((item) => (
                          <Card key={item.step} className={item.color}>
                            <CardContent className="pt-6">
                              <div className="text-center">
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full mb-2">
                                  <span className="font-bold">{item.step}</span>
                                </div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-600">
                                  {item.desc}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Separator className="my-6" />

                      <div>
                        <h4 className="font-medium mb-3">
                          Paramètres à renseigner pour chaque lot
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                          {[
                            "Date de sortie du lot",
                            "Date de nettoyage",
                            "Date de désinfection",
                            "Date de fin de vide sanitaire",
                            "Durée effective du vide sanitaire",
                          ].map((item, index) => (
                            <div key={index} className="text-center">
                              <Badge variant="outline" className="mb-2">
                                {index + 1}
                              </Badge>
                              <p className="text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm text-gray-600 mb-4">
                          Respect d'un vide sanitaire minimum de{" "}
                          <Badge className="ml-2">3 semaines</Badge> entre
                          chaque lot
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button>
                            <Download className="mr-2 h-4 w-4" /> Modèle
                            procédure vide sanitaire (PDF)
                          </Button>
                          <Button variant="outline">
                            <Printer className="mr-2 h-4 w-4" /> Imprimer le
                            calendrier
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>

          {/* Section 3 : Traçabilité & Documents */}
          <Card>
            <AccordionItem value="tracabilite" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">
                      Traçabilité & Documents d'élevage
                    </h3>
                    <p className="text-sm text-gray-500">
                      Dossiers standardisés et registres obligatoires
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 pb-6">
                  <Card>
                    <CardHeader className="bg-purple-50">
                      <CardTitle>Dossier lot standardisé</CardTitle>
                      <CardDescription>
                        Regroupe toutes les informations obligatoires par lot
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-lg">Fiche lot</h4>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Date d'entrée et effectif initial",
                              "Origine (fournisseur, n° lot amont)",
                              "Mortalité cumulée et causes si connues",
                              "Traitements et interventions",
                              "Observations quotidiennes ou hebdomadaires",
                            ].map((item, index) => (
                              <li key={index} className="flex items-center">
                                <Badge variant="outline" className="mr-3">
                                  {index + 1}
                                </Badge>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <Shield className="h-5 w-5 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-lg">
                              Registre sanitaire
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Actes vétérinaires et médicamenteux",
                              "Produit utilisé, quantité, date, motif",
                              "Temps d'attente / retrait respecté",
                              "Signature du vétérinaire si prescription",
                              "Archivage minimum 5 ans",
                            ].map((item, index) => (
                              <li key={index} className="flex items-center">
                                <Badge className="mr-3 bg-green-100 text-green-800">
                                  {index + 1}
                                </Badge>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <Alert className="mb-6">
                        <FileText className="h-4 w-4" />
                        <AlertTitle>Conservation des documents</AlertTitle>
                        <AlertDescription>
                          Obligatoire pendant au minimum <strong>5 ans</strong>.
                          Fonction d'export PDF disponible pour remise rapide
                          aux autorités lors d'un contrôle.
                        </AlertDescription>
                      </Alert>

                      <div className="flex flex-wrap gap-3">
                        <Button>
                          <Download className="mr-2 h-4 w-4" /> Télécharger
                          modèle dossier lot (Excel)
                        </Button>
                        <Button variant="secondary">
                          <Download className="mr-2 h-4 w-4" /> Télécharger
                          modèle registre (PDF)
                        </Button>
                        <Button variant="outline">
                          <Printer className="mr-2 h-4 w-4" /> Exporter mon
                          dossier actuel (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>

        {/* Section Rappel */}
        <Card className="mt-8 border-l-4 border-l-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-emerald-600" />
              Rappel important
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              La mise en œuvre rigoureuse de ces procédures et la tenue à jour
              des documents constituent les bases d'une biosécurité efficace et
              d'une traçabilité irréprochable. Elles vous protègent contre les
              risques sanitaires et facilitent grandement le passage des audits
              et contrôles.
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <Badge variant="outline" className="mr-2">
                i
              </Badge>
              Ces documents sont conformes aux exigences réglementaires en
              vigueur
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
