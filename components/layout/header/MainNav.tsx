// MainNav.tsx
"use client";

import React, { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NAV_FLAT,
  NavItem as NavItemType,
  Role,
} from "@/components/layout/header/MainNavData";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

interface MainNavProps {
  variant: "desktop" | "mobile";
  onNavigate: () => void;
  userRole?: Role;
}

export default function MainNav({
  variant,
  onNavigate,
  userRole = "public",
}: MainNavProps) {
  const pathname = usePathname();

  const navTree = useMemo(() => {
    const itemMap = new Map<string, NavItemType>();
    NAV_FLAT.forEach((item) => {
      itemMap.set(item.id, { ...item, children: [] as NavItemType[] });
    });

    const roots: NavItemType[] = [];
    itemMap.forEach((item) => {
      if (item.parentId && itemMap.has(item.parentId)) {
        itemMap.get(item.parentId)!.children!.push(item);
      } else if (!item.parentId) {
        roots.push(item);
      }
    });

    const sortByOrder = (items: NavItemType[]) => {
      items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
      items.forEach((item) => item.children && sortByOrder(item.children));
    };
    sortByOrder(roots);

    return roots
      .filter((item) => item.isVisible && item.allowedRoles.includes(userRole))
      .map((item) => ({
        ...item,
        children: (item.children || []).filter(
          (child) => child.isVisible && child.allowedRoles.includes(userRole)
        ),
      }))
      .filter((item) => item.children.length > 0 || item.href);
  }, [userRole]);

  if (navTree.length === 0) return null;

  if (variant === "desktop") {
    return (
      <ul className="flex items-center gap-1 list-none m-0 p-0">
        {navTree.map((item) => (
          <DesktopNavItem
            key={item.id}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-1">
      {navTree.map((item) => (
        <MobileNavItem
          key={item.id}
          item={item}
          pathname={pathname}
          onLinkClick={onNavigate}
          level={0}
        />
      ))}
    </div>
  );
}

// ─── Desktop Nav Item (portal dropdown) ──────────────────────────────────────

interface DesktopNavItemProps {
  item: NavItemType;
  pathname: string;
  onNavigate: () => void;
}

function DesktopNavItem({ item, pathname, onNavigate }: DesktopNavItemProps) {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + "/")
    : item.children?.some(
        (child) =>
          child.href &&
          (pathname === child.href || pathname.startsWith(child.href + "/"))
      );

  const openDropdown = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      });
    }
    setOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href ?? "#"}
          onClick={onNavigate}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            isActive &&
              "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative list-none">
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={openDropdown}
        onMouseLeave={scheduleClose}
        onFocus={openDropdown}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors cursor-pointer",
          "hover:bg-accent hover:text-accent-foreground",
          isActive &&
            "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
          open && "bg-accent text-accent-foreground"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown via React Portal — bypasses any overflow:hidden/auto on parent elements */}
      {mounted &&
        open &&
        createPortal(
          <div
            role="menu"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: dropdownPos.top,
              left: dropdownPos.left,
              zIndex: 9999,
              minWidth: "220px",
            }}
            className="rounded-lg border border-border bg-popover shadow-xl overflow-hidden"
          >
            {/* "Voir tout" link for the parent page */}
            {item.href && (
              <Link
                href={item.href}
                role="menuitem"
                onClick={() => {
                  onNavigate();
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-foreground bg-muted/50 hover:bg-accent hover:text-accent-foreground border-b border-border transition-colors"
              >
                Voir tout — {item.label}
              </Link>
            )}

            {item.children.map((child) =>
              child.href ? (
                <Link
                  key={child.id}
                  href={child.href}
                  role="menuitem"
                  onClick={() => {
                    onNavigate();
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    pathname === child.href ||
                      pathname.startsWith(child.href + "/")
                      ? "bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-950 dark:text-emerald-300"
                      : "text-foreground"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-70 flex-shrink-0" />
                  {child.label}
                </Link>
              ) : null
            )}
          </div>,
          document.body
        )}
    </li>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

function MobileNavItem({
  item,
  pathname,
  onLinkClick,
  level = 0,
}: {
  item: NavItemType;
  pathname: string;
  onLinkClick: () => void;
  level?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + "/")
    : false;

  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between rounded-lg transition-colors",
          isActive
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
            : "hover:bg-accent hover:text-accent-foreground"
        )}
        style={{ paddingLeft: `${12 + level * 16}px` }}
      >
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 py-2.5 pr-2 text-sm font-medium"
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        ) : (
          <span className="flex-1 py-2.5 pr-2 text-sm font-medium">
            {item.label}
          </span>
        )}

        {hasChildren && (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 mr-1 rounded-md hover:bg-muted transition-colors"
            aria-label={isOpen ? "Fermer" : "Ouvrir"}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-90"
              )}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="mt-0.5 space-y-0.5 border-l-2 border-emerald-200 ml-4 dark:border-emerald-800">
          {item.children.map((child) => (
            <MobileNavItem
              key={child.id}
              item={child}
              pathname={pathname}
              onLinkClick={onLinkClick}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}