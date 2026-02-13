"use client";

import * as React from "react";
import Logo from "./Logo";
import { MainNav } from "./MainNav";
import UserMenu from "./UserMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:block">
          <MainNav variant="desktop" onNavigate={() => {}} />
        </div>

        <div className="flex items-center gap-3">
          <UserMenu />

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded border px-3 py-2 text-sm"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen ? (
        <div className="md:hidden border-t px-4 py-3">
          <MainNav
            variant="mobile"
            onNavigate={() => {
              setMobileOpen(false);
            }}
          />
        </div>
      ) : null}
    </header>
  );
}
