"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NAV_FLAT,
  NavItem as NavItemType,
  Role,
} from "@/components/layout/header/MainNavData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

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

  // Build and filter navigation tree based on role and visibility
  const navTree = useMemo(() => {
    const itemMap = new Map<string, NavItemType>();
    NAV_FLAT.forEach((item) => {
      itemMap.set(item.id, { ...item, children: [] });
    });

    const roots: NavItemType[] = [];
    itemMap.forEach((item) => {
      if (item.parentId && itemMap.has(item.parentId)) {
        const parent = itemMap.get(item.parentId)!;
        parent.children.push(item);
      } else if (!item.parentId) {
        roots.push(item);
      }
    });

    const sortByOrder = (items: NavItemType[]) => {
      items.sort((a, b) => a.order - b.order);
      items.forEach((item) => sortByOrder(item.children));
    };
    sortByOrder(roots);

    const filterByRole = (items: NavItemType[]): NavItemType[] => {
      return items
        .filter(
          (item) => item.isVisible && item.allowedRoles.includes(userRole),
        )
        .map((item) => ({
          ...item,
          children: filterByRole(item.children),
        }))
        .filter((item) => item.children.length > 0 || item.href);
    };

    return filterByRole(roots);
  }, [userRole]);

  if (navTree.length === 0) return null;

  if (variant === "desktop") {
    return (
      <NavigationMenu suppressHydrationWarning>
        {" "}
        {/* 👈 FIX : ignore les différences d'IDs Radix */}
        <NavigationMenuList>
          {navTree.map((item) => (
            <DesktopNavItem
              key={item.id}
              item={item}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  // Mobile variant
  return (
    <nav className="flex flex-col gap-1">
      {navTree.map((item) => (
        <MobileNavItem
          key={item.id}
          item={item}
          pathname={pathname}
          onLinkClick={onNavigate}
          level={0}
        />
      ))}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop navigation item (with optional dropdown)                          */
/* -------------------------------------------------------------------------- */
function DesktopNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItemType;
  pathname: string;
  onNavigate: () => void;
}) {
  const hasChildren = item.children.length > 0;
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + "/")
    : false;

  if (hasChildren) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(isActive && "text-foreground font-medium")}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.children
              .filter((child) => child.href)
              .map((child) => (
                <ListItem
                  key={child.id}
                  href={child.href!}
                  title={child.label}
                  onClick={onNavigate}
                  className={cn(
                    child.href &&
                      (pathname === child.href ||
                        pathname.startsWith(child.href + "/")) &&
                      "bg-accent text-accent-foreground",
                  )}
                />
              ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (!item.href) return null;

  return (
    <NavigationMenuItem>
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          onClick={onNavigate}
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
            isActive && "bg-accent text-accent-foreground",
          )}
        >
          {item.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile navigation item (expandable)                                       */
/* -------------------------------------------------------------------------- */
function MobileNavItem({
  item,
  pathname,
  onLinkClick,
  level,
}: {
  item: NavItemType;
  pathname: string;
  onLinkClick: () => void;
  level: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children.length > 0;
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + "/")
    : false;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors hover:text-foreground",
              isActive
                ? "text-foreground font-semibold"
                : "text-muted-foreground",
              level > 0 && "pl-4",
            )}
          >
            {item.label}
          </Link>
        ) : (
          <span
            className={cn(
              "flex-1 py-2 text-sm font-medium",
              level > 0 && "pl-4",
            )}
          >
            {item.label}
          </span>
        )}
        {hasChildren && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8"
            aria-expanded={isOpen}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180",
              )}
            />
            <span className="sr-only">{isOpen ? "Collapse" : "Expand"}</span>
          </Button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4 border-l pl-2">
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

/* -------------------------------------------------------------------------- */
/* ListItem component used inside dropdown                                    */
/* -------------------------------------------------------------------------- */
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
