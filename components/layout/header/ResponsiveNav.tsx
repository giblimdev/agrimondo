"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Sprout,
  Droplets,
  Bird,
  Bug,
  UtensilsCrossed,
  FileText,
  Briefcase,
  Code,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Role = "public" | "user" | "client" | "pro" | "dev" | "admin";

export type NavItem = {
  id: string;
  label: string;
  href?: string | null;
  order: number;
  parentId?: string | null;
  allowedRoles: Role[];
  isVisible: boolean;
  children: NavItem[];
};

// Icônes pour chaque section
const getIcon = (id: string) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home className="w-5 h-5" />,
    cultures: <Sprout className="w-5 h-5" />,
    myco: <Sprout className="w-5 h-5" />,
    aqua: <Droplets className="w-5 h-5" />,
    api: <Bug className="w-5 h-5" />,
    avi: <Bird className="w-5 h-5" />,
    bsf: <Bug className="w-5 h-5" />,
    recettes: <UtensilsCrossed className="w-5 h-5" />,
    compliance: <FileText className="w-5 h-5" />,
    pro: <Briefcase className="w-5 h-5" />,
    dev: <Code className="w-5 h-5" />,
    admin: <Shield className="w-5 h-5" />,
  };
  return icons[id] || <Sprout className="w-5 h-5" />;
};

// Couleurs pour chaque section
const getColorClass = (id: string) => {
  const colors: Record<string, string> = {
    cultures: "hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950",
    myco: "hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-950",
    aqua: "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950",
    api: "hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-950",
    avi: "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950",
    bsf: "hover:bg-orange-50 hover:text-orange-700 dark:hover:bg-orange-950",
    recettes: "hover:bg-rose-50 hover:text-rose-700 dark:hover:bg-rose-950",
    compliance:
      "hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-slate-950",
    pro: "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-950",
    dev: "hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-teal-950",
    admin: "hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950",
  };
  return colors[id] || "hover:bg-gray-50 hover:text-gray-700";
};

interface ResponsiveNavProps {
  navItems: NavItem[];
  userRole?: Role;
  className?: string;
}

export default function ResponsiveNav({
  navItems,
  userRole = "public",
  className,
}: ResponsiveNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Filtrer les items selon le rôle
  const visibleItems = navItems.filter(
    (item) =>
      item.isVisible && item.allowedRoles.includes(userRole) && !item.parentId,
  );

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg dark:bg-gray-950/80",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            <Sprout className="w-8 h-8 text-green-600" />
            <span>AgroHub</span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {visibleItems.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;

                  if (!hasChildren && item.href) {
                    return (
                      <NavigationMenuItem key={item.id}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                              getColorClass(item.id),
                            )}
                          >
                            <span className="mr-2">{getIcon(item.id)}</span>
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={item.id}>
                      <NavigationMenuTrigger
                        className={cn(
                          "h-10 px-4 py-2 text-sm font-medium",
                          getColorClass(item.id),
                        )}
                      >
                        <span className="mr-2">{getIcon(item.id)}</span>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.href || "#"}
                                legacyBehavior
                                passHref
                              >
                                <NavigationMenuLink
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                    getColorClass(item.id),
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.label}
                                  </div>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Menu Mobile */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Sprout className="w-6 h-6 text-green-600" />
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      AgroHub
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-2">
                  {visibleItems.map((item) => {
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isOpen = openSubmenu === item.id;

                    if (!hasChildren && item.href) {
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center space-x-3 rounded-lg px-4 py-3 transition-colors",
                            getColorClass(item.id),
                          )}
                        >
                          {getIcon(item.id)}
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    }

                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          onClick={() =>
                            setOpenSubmenu(isOpen ? null : item.id)
                          }
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors",
                            getColorClass(item.id),
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            {getIcon(item.id)}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isOpen && "rotate-180",
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="ml-8 space-y-1 border-l-2 border-gray-200 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
