"use client";

import Link from "next/link";
import * as React from "react";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/", children: [] },
  {
    label: "Cultures",
    href: "/cultures",
    children: [
      { label: "Production", href: "/cultures/production" },
      { label: "Serre", href: "/cultures/serre" },
      { label: "Hydroponie", href: "/cultures/hydroponie" },
      { label: "Micropousses", href: "/cultures/micropousses" },
    ],
  },
  {
    label: "Champignon",
    href: "/mycoculture",
    children: [
      { label: "Guide de Culture", href: "/mycoculture/guideMycoculture" },
      { label: "Glossaire", href: "/mycoculture/glossary" },
    ],
  },
  {
    label: "Aquaponie",
    href: "/aquaponie",
    children: [
      { label: "Guide de Culture", href: "/aquaponie/guideAquaponie" },
      { label: "Glossaire", href: "/aquaponie/glossary" },
    ],
  },
  {
    label: "Apiculture",
    href: "/apiculture",
    children: [
      { label: "Guide de Production", href: "/apiculture" },
      { label: "Glossaire", href: "/apiculture/glossary" },
    ],
  },
  {
    label: "Aviculture",
    href: "/aviculture",
    children: [
      { label: "Guide d'Elevage", href: "/aviculture" },
      { label: "Admin", href: "/aviculture/admin" },
      { label: "Glossaire", href: "/aviculture/glossary" },
    ],
  },
  {
    label: "BSF",
    href: "/bsf",
    children: [
      { label: "Production de BSF", href: "/bsf" },
      { label: "Production", href: "/bsf/production" },
      { label: "Recettes", href: "/bsf/recettes" },
    ],
  },
  {
    label: "Recettes",
    href: "/recettes",
    children: [{ label: "Liste des recettes", href: "/recettes" }],
  },
  {
    label: "Réglementations",
    href: "/compliance",
    children: [{ label: "Guide", href: "/compliance" }],
  },
];

export function MainNav() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = React.useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterNav = (href: string) => {
    // Annuler tout timer de fermeture en cours
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(href);
  };

  const handleMouseLeaveNav = () => {
    // Démarrer un timer pour fermer le menu seulement si on ne survole pas le dropdown
    if (!isHoveringDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        setOpenMenu(null);
      }, 150); // Délai court mais confortable
    }
  };

  const handleMouseEnterDropdown = () => {
    setIsHoveringDropdown(true);
    // Annuler tout timer de fermeture
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseLeaveDropdown = () => {
    setIsHoveringDropdown(false);
    // Démarrer un timer pour fermer le dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // Délai légèrement plus long pour permettre de revenir au menu
  };

  // Nettoyer les timeouts à la destruction
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleClickNav = (href: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenu(openMenu === href ? null : href);
  };

  return (
    <nav className="relative">
      <ul className="flex items-center space-x-4">
        {NAV.map((item) => {
          const hasChildren = (item.children?.length ?? 0) > 0;

          if (!hasChildren) {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => handleMouseEnterNav(item.href)}
              onMouseLeave={handleMouseLeaveNav}
            >
              <button
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center group"
                onClick={() => handleClickNav(item.href)}
                aria-expanded={openMenu === item.href}
              >
                {item.label}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    openMenu === item.href ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openMenu === item.href && (
                <div
                  className="absolute left-0 top-full pt-2 z-50"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  {/* Zone invisible pour faciliter la transition */}
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />

                  {/* Menu déroulant */}
                  <div className="min-w-[240px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="p-4">
                      {/* Lien principal */}
                      <Link
                        href={item.href}
                        className="mb-3 block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 group"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Vue d'ensemble
                        </div>
                      </Link>

                      {/* Séparateur */}
                      <div className="h-px bg-gray-200 dark:bg-gray-800 mb-3" />

                      {/* Sous-pages */}
                      <div className="space-y-2">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200">
                              {child.label}
                            </span>
                            <svg
                              className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
