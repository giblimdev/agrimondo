"use client";

import React from "react";
import Logo from "./Logo";
import { MainNav } from "./MainNav";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:block">
          <MainNav />
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden rounded border px-3 py-2 text-sm"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav panel */}
      {open ? (
        <div className="md:hidden border-t px-4 py-3">
          <MainNav />
        </div>
      ) : null}
    </header>
  );
}
