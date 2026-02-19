// Header.tsx
"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import MainNav from "./MainNav";
import UserMenu from "./UserMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:px-4 lg:px-6">
        {/* Logo + Desktop Nav */}
        <div className="flex flex-1 items-center gap-4">
          <Logo />

          {/* Desktop nav : PAS de overflow-x-auto ici, ça couperait les dropdowns */}
          <nav className="hidden flex-1 lg:block">
            <MainNav variant="desktop" onNavigate={closeMobile} />
          </nav>
        </div>

        {/* Right side: user + burger */}
        <div className="ml-2 flex items-center gap-3">
          <UserMenu />

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={toggleMobile}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background p-2 text-foreground hover:bg-accent hover:text-accent-foreground lg:hidden"
            aria-label={
              mobileOpen ? "Fermer la navigation" : "Ouvrir la navigation"
            }
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <MainNav variant="mobile" onNavigate={closeMobile} />
          </div>
        </div>
      )}
    </header>
  );
}