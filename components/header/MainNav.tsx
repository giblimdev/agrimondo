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

  const handleMouseEnter = (href: string) => {
    setOpenMenu(href);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
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
              onMouseEnter={() => handleMouseEnter(item.href)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                onClick={() =>
                  setOpenMenu(openMenu === item.href ? null : item.href)
                }
              >
                {item.label}
                <svg
                  className="w-4 h-4 ml-1"
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
                <div className="absolute left-0 top-full mt-1 min-w-[240px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg z-50">
                  <div className="p-4">
                    {/* Lien principal */}
                    <Link
                      href={item.href}
                      className="mb-3 block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
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
                          <span className="group-hover:translate-x-1 transition-transform text-gray-700 dark:text-gray-300">
                            {child.label}
                          </span>
                        </Link>
                      ))}
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
