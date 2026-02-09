"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
      { label: "Dashboard", href: "/cultures" },
      { label: "Production", href: "/cultures/production" },
      { label: "Serre", href: "/serre" },
      { label: "Recettes", href: "/recettes" },
    ],
  },
  {
    label: "Champignon",
    href: "/mycoculture",
    children: [
      { label: "Guide de culture", href: "/mycoculture/guideMycoculture" },
      { label: "Glossaire", href: "/mycoculture/glossary" },
    ],
  },
  {
    label: "Aquaponie",
    href: "/aquaponie",
    children: [
      { label: "Guide de culture", href: "/aquaponie/guideAquaponie" },
      { label: "Glossaire", href: "/aquaponie/glossary" },
    ],
  },
  {
    label: "Apiculture",
    href: "/apiculture",
    children: [
      { label: "Dashboard", href: "/apiculture" },
      { label: "Glossaire", href: "/apiculture/glossary" },
    ],
  },
  {
    label: "Aviculture",
    href: "/aviculture",
    children: [
      { label: "Dashboard", href: "/aviculture" },
      { label: "Admin", href: "/aviculture/admin" },
      { label: "Glossaire", href: "/aviculture/glossary" },
    ],
  },
  {
    label: "BSF",
    href: "/bsf",
    children: [
      { label: "Dashboard", href: "/bsf" },
      { label: "Production", href: "/bsf/production" },
      { label: "Recettes", href: "/bsf/recettes" },
    ],
  },
  {
    label: "Recettes",
    href: "/recettes",
    children: [
      { label: "Dashboard", href: "/recettes" },
      { label: "Oeuf", href: "/recettes/oeuf" },
      { label: "Poule", href: "/recettes/poule" },
      { label: "Legumes", href: "/recettes/legumes" },
    ],
  },
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAV.map((item) => {
          const hasChildren = (item.children?.length ?? 0) > 0;

          if (!hasChildren) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-[320px] p-3 md:w-95">
                  {/* Lien “entrée” */}
                  <Link
                    href={item.href}
                    className="block rounded-md p-3 text-sm font-medium hover:bg-accent"
                  >
                    Aller à {item.label}
                    <div className="mt-1 text-xs text-muted-foreground">
                      Ouvrir le dashboard / vue principale
                    </div>
                  </Link>

                  <div className="mt-2 grid gap-1">
                    {item.children!.map((child) => (
                      <NavigationMenuLink asChild key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        >
                          {child.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
