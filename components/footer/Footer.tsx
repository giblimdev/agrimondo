// @/components/footer.tsx
import React from "react";
import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Sprout,
  Droplet,
  Egg,
  Bug,
  ChefHat,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const quickLinks = [
    {
      label: "Cultures en serre",
      href: "/cultures/serre",
      icon: <Leaf className="w-4 h-4" />,
    },
    {
      label: "Aquaponie",
      href: "/aquaponie",
      icon: <Droplet className="w-4 h-4" />,
    },
    {
      label: "Aviculture",
      href: "/aviculture",
      icon: <Egg className="w-4 h-4" />,
    },
    {
      label: "Apiculture",
      href: "/apiculture",
      icon: <Bug className="w-4 h-4" />,
    },
    {
      label: "Micropousses",
      href: "/micropousses",
      icon: <Sprout className="w-4 h-4" />,
    },
    {
      label: "Mycoculture",
      href: "/mycoculture",
      icon: <Leaf className="w-4 h-4" />,
    },
    { label: "BSF", href: "/bsf", icon: <Bug className="w-4 h-4" /> },
    {
      label: "Recettes",
      href: "/recettes",
      icon: <ChefHat className="w-4 h-4" />,
    },
  ];

  const knowledgeLinks = [
    { label: "Glossaire Apiculture", href: "/apiculture/glossary" },
    { label: "Glossaire Aquaponie", href: "/aquaponie/glossary" },
    { label: "Glossaire Aviculture", href: "/aviculture/glossary" },
    { label: "Centre de connaissances", href: "/knowledge" },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Popayán, Cauca, Colombie",
      detail: "2000m² au cœur de la vallée",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+57 123 456 7890",
      detail: "Lun-Ven 8h-18h",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "contact@hacienda-esmeralda.co",
      detail: "Réponse sous 24h",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <>
      {/* Conteneur avec vague inversée - CORRIGÉ */}
      <div className="relative mt-20">
        {/* Vague émeraude qui "sort" du footer vers le haut */}
        <div className="absolute bottom-full left-0 right-0 h-16 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute w-full h-full bottom-0 left-0"
            style={{
              // Suppression du filter pour éviter la ligne grise
              transform: "rotate(180deg)",
              // Ajustement pour un rendu plus net
              shapeRendering: "crispEdges",
            }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-emerald-50"
            />
          </svg>
        </div>

        {/* Petit ajustement pour éviter la ligne */}
        <div className="absolute bottom-full left-0 right-0 h-[1px] bg-emerald-50"></div>

        <footer className="bg-gradient-to-b from-emerald-50 to-emerald-100/30 text-gray-800 pt-12">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Logo et description */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent">
                      Hacienda Esmeralda
                    </h2>
                    <p className="text-sm text-emerald-700 font-medium">
                      Agriculture circulaire depuis 2024
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed max-w-lg">
                  Une exploitation innovante à Popayán, Colombie, dédiée à
                  l'agriculture durable, l'économie circulaire et l'autonomie
                  alimentaire. Notre mission est de créer un modèle
                  reproductible d'agriculture urbaine et périurbaine.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-emerald-700 hover:bg-white hover:text-emerald-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Liens rapides */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Productions
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-800 hover:translate-x-1 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-white/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 group-hover:scale-110 transition-all">
                          {link.icon}
                        </div>
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Centre de connaissances */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Ressources
                </h3>
                <ul className="space-y-3">
                  {knowledgeLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-700 hover:text-emerald-800 transition-colors group"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-emerald-200">
                  <Link href="/compliance">
                    <Button
                      variant="outline"
                      className="w-full bg-white/50 border-emerald-300 hover:bg-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Conformité réglementaire
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contact & Visites
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{info.text}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          {info.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all">
                  <Users className="w-5 h-5 mr-2" />
                  Réserver une visite
                </Button>
              </div>
            </div>

            {/* Séparateur stylisé */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-200/50"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-gradient-to-b from-emerald-50 to-emerald-100/30">
                  <Leaf className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Bas de footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700 mb-2">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-sm font-medium">
                    Cultivé avec passion • 🌱
                  </span>
                </div>
                <p className="text-xs text-gray-600 max-w-md">
                  Hacienda Esmeralda © {new Date().getFullYear()} • Tous droits
                  réservés • Modèle d'agriculture circulaire breveté
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="/legal"
                  className="text-sm text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  Confidentialité
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  Conditions
                </Link>
                <Link
                  href="/sitemap"
                  className="text-sm text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  Plan du site
                </Link>
              </div>
            </div>

            {/* Note écologique */}
            <div className="mt-8 pt-6 border-t border-emerald-200/50 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-xs text-gray-600">
                  🌍 Ce site consomme 80% moins d'énergie grâce à notre serveur
                  solaire
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Site éducatif et démonstratif • Les données sont mises à jour
                mensuellement • Version 2.6.1
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
