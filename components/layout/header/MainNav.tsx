"use client";

import Link from "next/link";
import * as React from "react";

type Role = "public" | "user" | "client" | "pro" | "dev" | "admin";

type NavItem = {
  id: string;
  label: string;
  href?: string | null;
  order: number;
  parentId?: string | null;
  allowedRoles: Role[];
  isVisible: boolean;
  children: NavItem[];
};

const NAV_FLAT: Omit<NavItem, "children">[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    order: 1,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: false,
  },

  {
    id: "cultures",
    label: "Cultures",
    href: "/public/cultures",
    order: 2,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "cultures-production",
    label: "Production",
    href: "/public/cultures/production",
    order: 1,
    parentId: "cultures",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "cultures-serre",
    label: "Serre",
    href: "/public/cultures/serre",
    order: 2,
    parentId: "cultures",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "cultures-hydro",
    label: "Hydroponie",
    href: "/public/cultures/hydroponie",
    order: 3,
    parentId: "cultures",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "cultures-micro",
    label: "Micropousses",
    href: "/public/cultures/micropousses",
    order: 4,
    parentId: "cultures",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "myco",
    label: "Champignon",
    href: "/public/mycoculture",
    order: 3,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "myco-guide",
    label: "Guide de Culture",
    href: "/public/mycoculture/guideMycoculture",
    order: 1,
    parentId: "myco",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "myco-gloss",
    label: "Glossaire",
    href: "/public/mycoculture/glossary",
    order: 2,
    parentId: "myco",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "aqua",
    label: "Aquaponie",
    href: "/public/aquaponie",
    order: 4,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "aqua-guide",
    label: "Guide de Culture",
    href: "/public/aquaponie/guideAquaponie",
    order: 1,
    parentId: "aqua",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "aqua-gloss",
    label: "Glossaire",
    href: "/public/aquaponie/glossary",
    order: 2,
    parentId: "aqua",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "api",
    label: "Apiculture",
    href: "/public/apiculture",
    order: 5,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "api-guide",
    label: "Guide de Production",
    href: "/public/apiculture",
    order: 1,
    parentId: "api",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "api-gloss",
    label: "Glossaire",
    href: "/public/apiculture/glossary",
    order: 2,
    parentId: "api",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "avi",
    label: "Aviculture",
    href: "/public/aviculture",
    order: 6,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "avi-guide",
    label: "Guide d'Elevage",
    href: "/public/aviculture",
    order: 1,
    parentId: "avi",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "avi-admin",
    label: "Admin",
    href: "/public/aviculture/admin",
    order: 2,
    parentId: "avi",
    allowedRoles: ["admin", "dev"],
    isVisible: true,
  },
  {
    id: "avi-gloss",
    label: "Glossaire",
    href: "/public/aviculture/glossary",
    order: 3,
    parentId: "avi",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "bsf",
    label: "BSF",
    href: "/public/bsf",
    order: 7,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "bsf-guide",
    label: "Guide de Production",
    href: "/public/bsf/guideBsf",
    order: 1,
    parentId: "bsf",
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "bsf-gloss",
    label: "Glossaire",
    href: "/public/bsf/glossary",
    order: 2,
    parentId: "bsf",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "recettes",
    label: "Recettes",
    href: "/public/recettes",
    order: 8,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "recettes-list",
    label: "Liste des recettes",
    href: "/public/recettes",
    order: 1,
    parentId: "recettes",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "compliance",
    label: "Réglementations",
    href: "/public/compliance",
    order: 9,
    parentId: null,
    allowedRoles: ["public"],
    isVisible: true,
  },
  {
    id: "compliance-guide",
    label: "Guide",
    href: "/public/compliance",
    order: 1,
    parentId: "compliance",
    allowedRoles: ["public"],
    isVisible: true,
  },

  {
    id: "pro",
    label: "Business / Pro",
    href: "/pro",
    order: 10,
    parentId: null,
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-dashboard",
    label: "Tableau de bord",
    href: "/pro/dashboard",
    order: 1,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-organisation",
    label: "Organisation",
    href: "/pro/organisation",
    order: 2,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-produit",
    label: "Produit",
    href: "/pro/produit",
    order: 3,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-client",
    label: "Client",
    href: "/pro/client",
    order: 4,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-vente",
    label: "Ventes",
    href: "/pro/vente",
    order: 5,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-apro",
    label: "Approvisionnement",
    href: "/pro/aprovisonement",
    order: 6,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },
  {
    id: "pro-stock",
    label: "Stocks",
    href: "/pro/stock",
    order: 7,
    parentId: "pro",
    allowedRoles: ["public", "pro", "admin"],
    isVisible: true,
  },

  {
    id: "dev",
    label: "Dev",
    href: "/dev",
    order: 11,
    parentId: null,
    allowedRoles: ["public", "dev", "admin"],
    isVisible: true,
  },
  {
    id: "dev-feature",
    label: "feature",
    href: "/dev/feature",
    order: 1,
    parentId: "dev",
    allowedRoles: ["public", "dev", "admin"],
    isVisible: true,
  },
  {
    id: "dev-schema",
    label: "Schema DB",
    href: "/dev/schema",
    order: 2,
    parentId: "dev",
    allowedRoles: ["public", "dev", "admin"],
    isVisible: true,
  },
  {
    id: "dev-tools",
    label: "Tools",
    href: "/dev/tools",
    order: 3,
    parentId: "dev",
    allowedRoles: ["public", "dev", "admin"],
    isVisible: true,
  },

  {
    id: "admin",
    label: "Admin",
    href: "/admin",
    order: 12,
    parentId: null,
    allowedRoles: ["public", "admin"],
    isVisible: true,
  },
  {
    id: "admin-manifest",
    label: "Brain Storming Manifest",
    href: "/admin/manifest",
    order: 1,
    parentId: "admin",
    allowedRoles: ["public", "admin"],
    isVisible: true,
  },
];

function toTree(items: Omit<NavItem, "children">[]): NavItem[] {
  const map = new Map<string, NavItem>();

  for (const it of items) {
    map.set(it.id, { ...it, children: [] });
  }

  const roots: NavItem[] = [];
  for (const it of items) {
    const node = map.get(it.id)!;
    const parentId = it.parentId ?? null;

    if (!parentId) {
      roots.push(node);
      continue;
    }

    const parent = map.get(parentId);
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const sortRec = (nodes: NavItem[]) => {
    nodes.sort((a, b) => a.order - b.order);
    for (const n of nodes) sortRec(n.children);
  };
  sortRec(roots);

  return roots;
}

function filterByRole(nodes: NavItem[], role: Role): NavItem[] {
  return nodes
    .filter((n) => n.isVisible && n.allowedRoles.includes(role))
    .map((n) => ({ ...n, children: filterByRole(n.children, role) }));
}

function useClickOutside<T extends HTMLElement>(
  onOutside: () => void,
  enabled: boolean,
) {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    if (!enabled) return;

    const handler = (event: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (event.target instanceof Node && !el.contains(event.target)) {
        onOutside();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [enabled, onOutside]);

  return ref;
}

export function MainNav({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const userRole: Role = "public";

  const NAV = React.useMemo(() => {
    const tree = toTree(NAV_FLAT);
    return filterByRole(tree, userRole);
  }, [userRole]);

  // Desktop dropdown state
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const closeAll = React.useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(null);
    setIsHoveringDropdown(false);
  }, []);

  const containerRef = useClickOutside<HTMLElement>(
    closeAll,
    openMenu !== null,
  );

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeAll]);

  const handleMouseEnterNav = (id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(id);
  };

  const handleMouseLeaveNav = () => {
    if (!isHoveringDropdown) {
      closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
    }
  };

  const handleMouseEnterDropdown = () => {
    setIsHoveringDropdown(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseLeaveDropdown = () => {
    setIsHoveringDropdown(false);
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleClickNav = (id: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu((cur) => (cur === id ? null : id));
  };

  // Mobile accordion state
  const [mobileOpenId, setMobileOpenId] = React.useState<string | null>(null);

  if (variant === "mobile") {
    return (
      <nav aria-label="Navigation principale">
        <ul className="flex flex-col gap-1">
          {NAV.map((item) => {
            const hasChildren = item.children.length > 0;
            const isOpen = mobileOpenId === item.id;

            if (!hasChildren) {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                    onClick={() => onNavigate?.()}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.id} className="rounded-md border border-gray-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium hover:bg-gray-50"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setMobileOpenId((cur) => (cur === item.id ? null : item.id))
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
                </button>

                {isOpen ? (
                  <div className="border-t bg-white">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => onNavigate?.()}
                      >
                        Vue d&apos;ensemble
                      </Link>
                    ) : null}

                    <div className="px-1 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href || "#"}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => onNavigate?.()}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  // Desktop:
  // - Option A: flex-wrap (évite de sortir de l’écran) [web:16]
  // - + fallback: overflow-x-auto + whitespace-nowrap pour scroll horizontal si nécessaire [web:32][web:31]
  return (
    <nav
      ref={containerRef}
      className="relative max-w-full"
      aria-label="Navigation principale"
    >
      <ul
        className={[
          "flex items-center",
          "flex-wrap", // Option A
          "gap-2 md:gap-1 lg:gap-2",
          "max-w-full",
          "overflow-x-auto", // fallback scroll
          "whitespace-nowrap", // garde les libellés sur une ligne (avec scroll si besoin)
          "py-1",
        ].join(" ")}
      >
        {NAV.map((item) => {
          const hasChildren = item.children.length > 0;

          if (!hasChildren) {
            return (
              <li key={item.id} className="shrink-0">
                <Link
                  href={item.href || "#"}
                  className="rounded-md px-2 py-2 md:px-2 lg:px-3 text-sm font-medium transition-colors hover:bg-gray-100"
                  onClick={() => {
                    closeAll();
                    onNavigate?.();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openMenu === item.id;

          return (
            <li
              key={item.id}
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnterNav(item.id)}
              onMouseLeave={handleMouseLeaveNav}
            >
              <button
                className="flex items-center rounded-md px-2 py-2 md:px-2 lg:px-3 text-sm font-medium transition-colors hover:bg-gray-100"
                onClick={() => handleClickNav(item.id)}
                aria-expanded={isOpen}
                type="button"
              >
                {item.label}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
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

              {isOpen ? (
                <div
                  className="absolute left-0 top-full z-50 pt-2"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <div className="min-w-[240px] rounded-md border border-gray-200 bg-white shadow-lg">
                    <div className="p-3">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="group mb-2 block rounded-lg border border-transparent p-3 transition-colors hover:border-gray-200 hover:bg-gray-100"
                          onClick={() => {
                            closeAll();
                            onNavigate?.();
                          }}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-emerald-700">
                            {item.label}
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Vue d&apos;ensemble
                          </div>
                        </Link>
                      ) : (
                        <div className="mb-2 rounded-lg bg-gray-50 p-3 text-sm font-semibold text-gray-800">
                          {item.label}
                        </div>
                      )}

                      <div className="mb-2 h-px bg-gray-200" />

                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href || "#"}
                            className="group flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100"
                            onClick={() => {
                              closeAll();
                              onNavigate?.();
                            }}
                          >
                            <span className="text-gray-700 transition-all duration-200 group-hover:translate-x-1 group-hover:text-emerald-700">
                              {child.label}
                            </span>
                            <svg
                              className="ml-auto h-4 w-4 text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100"
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
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
