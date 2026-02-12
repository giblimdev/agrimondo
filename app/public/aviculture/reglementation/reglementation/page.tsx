import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Building,
  FileText,
  Shield,
  Globe,
  Scale,
  BookOpen,
  FileCheck,
  Users,
  Award,
  ClipboardCheck,
  Download,
  Calendar,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function Reglementation() {
  const autorites = [
    {
      nom: "ICA (Institut Colombien Agropecuario)",
      role: "Contrôle sanitaire et permis d'importation",
      responsabilites: [
        "Inspection sanitaire des animaux vivants",
        "Certification des établissements avicoles",
        "Contrôle des maladies animales",
        "Délivrance des permis d'importation",
      ],
      site: "www.ica.gov.co",
      icon: <Shield className="h-5 w-5" />,
      couleur: "bg-blue-100 text-blue-800",
    },
    {
      nom: "INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos)",
      role: "Sécurité alimentaire et certification produits transformés",
      responsabilites: [
        "Inspection des usines de transformation",
        "Certification des produits alimentaires",
        "Contrôle des additifs et contaminants",
        "Agrément des emballages alimentaires",
      ],
      site: "www.invima.gov.co",
      icon: <FileCheck className="h-5 w-5" />,
      couleur: "bg-green-100 text-green-800",
    },
    {
      nom: "FENAVI (Fédération Nationale des Producteurs Avicoles)",
      role: "Représentation des producteurs et développement sectoriel",
      responsabilites: [
        "Défense des intérêts des aviculteurs",
        "Formation et assistance technique",
        "Collecte de données statistiques",
        "Promotion de la consommation",
      ],
      site: "www.fenavi.org",
      icon: <Users className="h-5 w-5" />,
      couleur: "bg-orange-100 text-orange-800",
    },
    {
      nom: "Ministerio de Salud y Protección Social",
      role: "Santé publique et protection sociale",
      responsabilites: [
        "Établissement des politiques sanitaires",
        "Surveillance épidémiologique",
        "Protection des consommateurs",
        "Gestion des risques sanitaires",
      ],
      site: "www.minsalud.gov.co",
      icon: <Building className="h-5 w-5" />,
      couleur: "bg-purple-100 text-purple-800",
    },
  ];

  const normesNationales = [
    {
      reference: "Resolución 779 de 2006 (INVIMA)",
      titre: "Réglementation technique sur l'hygiène alimentaire",
      domaine: "BPA (Buenas Prácticas Avícolas)",
      statut: "En vigueur",
      lien: "Descargar PDF",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      reference: "Decreto 1500 de 2007",
      titre: "Système sanitaire et inspection des établissements",
      domaine: "Santé animale et sécurité alimentaire",
      statut: "En vigueur",
      lien: "Descargar PDF",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      reference: "Resolución 2115 de 2007",
      titre: "Normes de qualité de l'eau pour consommation humaine",
      domaine: "Qualité de l'eau",
      statut: "En vigueur",
      lien: "Descargar PDF",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      reference: "Resolución 5109 de 2005",
      titre: "Exigences sanitaires pour production avicole",
      domaine: "Biosécurité et bien-être animal",
      statut: "En vigueur",
      lien: "Descargar PDF",
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
    {
      reference: "Resolución 3750 de 2023",
      titre: "Actualisation des protocoles sanitaires avicoles",
      domaine: "Santé publique et surveillance",
      statut: "Récent (2023)",
      lien: "Descargar PDF",
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  const normesNTC = [
    {
      code: "NTC 1257",
      titre: "Aliments concentrés para animales",
      description: "Exigences nutritionnelles pour aliments avicoles",
      statut: "Obligatoire",
      annee: "2014",
    },
    {
      code: "NTC 2857",
      titre: "Buenas Prácticas Avícolas (BPA)",
      description: "Guide pour production avicole responsable",
      statut: "Recommandé",
      annee: "2018",
    },
    {
      code: "NTC 3655",
      titre: "Instalaciones avícolas - Requisitos",
      description: "Normes pour conception et construction des bâtiments",
      statut: "Obligatoire",
      annee: "2015",
    },
    {
      code: "NTC 1240",
      titre: "Huevos de gallina para mesa. Clasificación.",
      description: "Classification et qualité des œufs de consommation",
      statut: "Obligatoire",
      annee: "2020",
    },
  ];

  const normesInternationales = [
    {
      organisation: "Codex Alimentarius",
      reference: "CX 5-1977",
      titre: "Norme pour les œufs et produits à base d'œufs",
      pays: "International",
      statut: "Recommandé",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      organisation: "Organisation Mondiale de la Santé Animale (OMSA)",
      reference: "Code Terrestre",
      titre: "Normes sanitaires pour animaux terrestres",
      pays: "International",
      statut: "Recommandé",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      organisation: "FAO",
      reference: "Guide BPA",
      titre: "Bonne Pratiques d'Élevage Avicole",
      pays: "International",
      statut: "Recommandé",
      icon: <Globe className="h-4 w-4" />,
    },
  ];

  const supervision = [
    {
      domaine: "Produits alimentaires transformés",
      autorite: "INVIMA",
      frequence: "Inspection trimestrielle",
      exigences: [
        "Registre Sanitaire",
        "BPA certifiées",
        "Traçabilité complète",
      ],
    },
    {
      domaine: "Santé animale et biosécurité",
      autorite: "ICA",
      frequence: "Inspection semestrielle",
      exigences: [
        "Carnet sanitaire à jour",
        "Programme vaccination",
        "Contrôle des maladies",
      ],
    },
    {
      domaine: "Bien-être animal",
      autorite: "ICA + FENAVI",
      frequence: "Audit annuel",
      exigences: [
        "Espace minimum garanti",
        "Conditions environnementales",
        "Gestion du stress",
      ],
    },
  ];

  const exigencesCertification = [
    {
      certification: "Registro Sanitario (INVIMA)",
      pour: "Œufs commercialisés",
      delai: "3-6 mois",
      validite: "10 ans",
      cout: "Variable selon volume",
    },
    {
      certification: "Certificado ICA - Granja Avícola",
      pour: "Exploitation avicole",
      delai: "2-4 mois",
      validite: "2 ans",
      cout: "Basé sur capacité",
    },
    {
      certification: "Sello Fenavi de Calidad",
      pour: "Produits premium",
      delai: "4-8 semaines",
      validite: "1 an",
      cout: "Membres FENAVI",
    },
  ];

  const miseEnConformite = [
    {
      etape: "1. Diagnostic initial",
      description: "Évaluation de la conformité actuelle",
      delai: "2-4 semaines",
      responsable: "Consultant certifié",
    },
    {
      etape: "2. Plan d'action",
      description: "Élaboration des correctifs nécessaires",
      delai: "1-2 semaines",
      responsable: "Équipe technique",
    },
    {
      etape: "3. Mise en œuvre",
      description: "Application des mesures correctives",
      delai: "1-3 mois",
      responsable: "Équipe d'élevage",
    },
    {
      etape: "4. Audit de certification",
      description: "Visite des autorités compétentes",
      delai: "1 journée",
      responsable: "Autorités (ICA/INVIMA)",
    },
    {
      etape: "5. Suivi continu",
      description: "Maintenance de la conformité",
      delai: "Continu",
      responsable: "Responsable qualité",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader className="bg-linear-to-r from-indigo-700 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  CADRE RÉGLEMENTAIRE AVICOLE - COLOMBIE
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Exigences légales et normatives pour élevage de poules
                  pondeuses à Popayán
                </CardDescription>
              </div>
              <Badge className="mt-2 md:mt-0 bg-white text-blue-700 hover:bg-white">
                Mise à jour : 2024
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Panorama complet des autorités compétentes, normes nationales et
              internationales, et procédures de certification pour l'élevage
              avicole commercial en Colombie. Conformité ICA, INVIMA et FENAVI
              garantissant qualité et sécurité sanitaire.
            </p>
          </CardContent>
        </Card>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Autorités principales</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Normes nationales</p>
                  <p className="text-2xl font-bold">12+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Normes internationales
                  </p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Certifications requises
                  </p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="autorites" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="autorites">Autorités</TabsTrigger>
            <TabsTrigger value="normes">Normes Nationales</TabsTrigger>
            <TabsTrigger value="ntc">NTC Colombiennes</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="supervision">Supervision</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          {/* Section Autorités */}
          <TabsContent value="autorites" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {autorites.map((autorite, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`p-2 rounded-lg ${autorite.couleur} mr-3`}
                          >
                            {autorite.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {autorite.nom}
                            </CardTitle>
                            <CardDescription>{autorite.role}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">Gouvernemental</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Responsabilités :
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {autorite.responsabilites.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <Badge className="bg-gray-100 text-gray-800">
                          {autorite.site}
                        </Badge>
                        <div className="text-xs text-gray-500">
                          Contact : info@{autorite.site.split("www.")[1]}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-5 w-5 mr-2" />
                    Hiérarchie réglementaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Niveau National
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span>Ministerio de Salud y Protección Social</span>
                        </li>
                        <li className="flex items-center ml-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>ICA - Santé animale</span>
                        </li>
                        <li className="flex items-center ml-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>INVIMA - Sécurité alimentaire</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Niveau Sectoriel
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span>FENAVI - Représentation professionnelle</span>
                        </li>
                        <li className="flex items-center ml-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span>ICONTEC - Normalisation technique</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">
                        Niveau Local (Popayán)
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                          <span>Secrétariat Municipal de la Santé</span>
                        </li>
                        <li className="flex items-center ml-4">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>Direction Départementale de l'Agriculture</span>
                        </li>
                      </ul>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>
                        Coordination interinstitutionnelle
                      </AlertTitle>
                      <AlertDescription className="text-sm">
                        Les autorités collaborent via le Système National de
                        Sécurité Alimentaire et Nutritionnelle (SINSAN) pour
                        inspections conjointes
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Normes Nationales */}
          <TabsContent value="normes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Normes et résolutions en vigueur
                </CardTitle>
                <CardDescription>
                  Cadre légal principal pour activité avicole commerciale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">
                          Référence
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Titre / Objectif
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Domaine d'application
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Statut
                        </th>
                        <th className="border p-3 text-left font-semibold">
                          Document
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {normesNationales.map((norme, index) => (
                        <tr key={index} className="border hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            <div className="flex items-center">
                              <div className="mr-2">{norme.icon}</div>
                              {norme.reference}
                            </div>
                          </td>
                          <td className="border p-3">{norme.titre}</td>
                          <td className="border p-3">
                            <Badge className="bg-blue-100 text-blue-800">
                              {norme.domaine}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <Badge
                              className={
                                norme.statut === "En vigueur"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                              }
                            >
                              {norme.statut}
                            </Badge>
                          </td>
                          <td className="border p-3">
                            <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                              <Download className="h-3 w-3 mr-1" />
                              {norme.lien}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-3 text-yellow-700">
                    Points d'attention critiques
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        <strong>Decreto 1500 de 2007</strong> : Exige système
                        HACCP pour établissements de transformation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        <strong>Resolución 3750 de 2023</strong> : Introduit
                        nouvelles exigences de biosécurité post-pandémie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                      <span>
                        <strong>Resolución 5109 de 2005</strong> : Définit
                        espace minimum de 450 cm² par poule pondeuse au sol
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section NTC */}
          <TabsContent value="ntc" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Normes Techniques Colombiennes (NTC)
                  </CardTitle>
                  <CardDescription>
                    Élaborées par ICONTEC - Institut Colombien de Normes
                    Techniques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Code NTC
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Titre
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Description
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Statut
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Année
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {normesNTC.map((norme, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-mono font-medium">
                              {norme.code}
                            </td>
                            <td className="border p-3">{norme.titre}</td>
                            <td className="border p-3 text-sm text-gray-600">
                              {norme.description}
                            </td>
                            <td className="border p-3">
                              <Badge
                                className={
                                  norme.statut === "Obligatoire"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-blue-100 text-blue-800"
                                }
                              >
                                {norme.statut}
                              </Badge>
                            </td>
                            <td className="border p-3">{norme.annee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardCheck className="h-5 w-5 mr-2" />
                    Application pratique des NTC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        NTC 1257 - Aliments concentrados
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Exigences protéiques minimales par phase</li>
                        <li>• Limites maximales de mycotoxines</li>
                        <li>• Étiquetage nutritionnel obligatoire</li>
                        <li>• Fréquence d'analyse : mensuelle</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        NTC 2857 - Buenas Prácticas Avícolas
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Programme de nettoyage et désinfection</li>
                        <li>• Gestion des déchets et sous-produits</li>
                        <li>• Formation du personnel obligatoire</li>
                        <li>• Traçabilité des animaux et aliments</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">
                        NTC 3655 - Installations avícolas
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • Ventilation minimale : 4 renouvellements/heure
                        </li>
                        <li>• Isolation thermique toiture : R≥2.5</li>
                        <li>• Pente sol : 2-3% pour drainage</li>
                        <li>• Zone tampon périmètre : 50 m minimum</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section International */}
          <TabsContent value="international" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Normes et référentiels internationaux
                </CardTitle>
                <CardDescription>
                  Standards reconnus mondialement applicables en Colombie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {normesInternationales.map((norme, index) => (
                    <Card key={index} className="border-l-4 border-l-green-300">
                      <CardHeader>
                        <div className="flex items-center">
                          <div className="p-2 bg-green-100 rounded-lg mr-3">
                            {norme.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {norme.organisation}
                            </CardTitle>
                            <CardDescription>{norme.reference}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          {norme.titre}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">{norme.pays}</Badge>
                          <Badge className="bg-green-100 text-green-800">
                            {norme.statut}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-700">
                    Harmonisation normative
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    La Colombie aligne progressivement ses normes avec les
                    standards internationaux pour faciliter les exportations
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded border">
                      <p className="text-xs text-gray-500">NTC vs Codex</p>
                      <p className="font-semibold">95% aligné</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-xs text-gray-500">NTC vs OMSA</p>
                      <p className="font-semibold">90% aligné</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-xs text-gray-500">NTC vs UE</p>
                      <p className="font-semibold">85% aligné</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Supervision */}
          <TabsContent value="supervision" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Supervision et inspection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {supervision.map((item, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-blue-300"
                      >
                        <CardContent className="pt-4">
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold text-lg">
                                {item.domaine}
                              </h4>
                              <Badge className="bg-blue-100 text-blue-800">
                                {item.autorite}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mb-3">
                              <Calendar className="h-3 w-3 mr-1" />
                              Fréquence : {item.frequence}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">
                              Exigences principales :
                            </p>
                            <div className="space-y-2">
                              {item.exigences.map((exigence, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center bg-gray-50 p-2 rounded"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                  <span className="text-sm">{exigence}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Préparation aux inspections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        30 jours avant inspection
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Vérifier complétude registres sanitaires</li>
                        <li>• Actualiser programme de vaccination</li>
                        <li>• Réviser fiches techniques des produits</li>
                        <li>• Planifier nettoyage approfondi</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-700">
                        Jour de l'inspection
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Désigner responsable d'accompagnement</li>
                        <li>• Préparer salle de réunion avec documentation</li>
                        <li>• Informer tout le personnel</li>
                        <li>• Vérifier EPI disponibles pour visiteurs</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">
                        Après inspection
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Obtenir copie du rapport d'inspection</li>
                        <li>• Élaborer plan d'action pour observations</li>
                        <li>• Soumettre correctifs dans délai imparti</li>
                        <li>• Archiver documentation de suivi</li>
                      </ul>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Sanctions potentielles</AlertTitle>
                      <AlertDescription className="text-sm">
                        Non-conformités majeures peuvent entraîner amendes
                        (jusqu'à 2.000 SMLV), suspension d'activité ou fermeture
                        définitive
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Section Certification */}
          <TabsContent value="certification" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Certifications requises
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-3 text-left font-semibold">
                            Certification
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Pour
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Délai d'obtention
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Validité
                          </th>
                          <th className="border p-3 text-left font-semibold">
                            Coût approximatif
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exigencesCertification.map((cert, index) => (
                          <tr key={index} className="border hover:bg-gray-50">
                            <td className="border p-3 font-medium">
                              {cert.certification}
                            </td>
                            <td className="border p-3">{cert.pour}</td>
                            <td className="border p-3">
                              <Badge className="bg-blue-100 text-blue-800">
                                {cert.delai}
                              </Badge>
                            </td>
                            <td className="border p-3">
                              <Badge className="bg-green-100 text-green-800">
                                {cert.validite}
                              </Badge>
                            </td>
                            <td className="border p-3">{cert.cout}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-700">
                      Avantages des certifications
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Accès aux marchés formels et supermarchés</li>
                      <li>• Prix de vente 15-30% supérieur</li>
                      <li>• Réduction primes d'assurance</li>
                      <li>• Facilité d'obtention crédits bancaires</li>
                      <li>• Reconnaissance qualité auprès consommateurs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardCheck className="h-5 w-5 mr-2" />
                    Processus de mise en conformité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {miseEnConformite.map((etape, index) => (
                      <div key={index} className="flex items-start">
                        <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold mr-4">
                          {etape.etape.split(".")[0]}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{etape.etape}</h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {etape.description}
                          </p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Délai : {etape.delai}</span>
                            <span>Responsable : {etape.responsable}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">
                        Budget estimé pour conformité complète
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Consultant technique</p>
                          <p className="font-semibold">$5-8 millions COP</p>
                        </div>
                        <div>
                          <p className="text-gray-600">
                            Améliorations infrastructures
                          </p>
                          <p className="font-semibold">$10-15 millions COP</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Frais certification</p>
                          <p className="font-semibold">$2-4 millions COP</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Formation personnel</p>
                          <p className="font-semibold">$1-2 millions COP</p>
                        </div>
                      </div>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>Retour sur investissement</AlertTitle>
                      <AlertDescription className="text-sm">
                        La mise en conformité complète offre un ROI de 18-24
                        mois grâce à meilleurs prix de vente et réduction pertes
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
