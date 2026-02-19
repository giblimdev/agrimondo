// Logo.tsx
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold tracking-tight"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-sm font-bold text-white">
        AM
      </span>
      <span className="hidden sm:inline-block">
        <span className="font-extrabold">AGRI</span>{" "}
        <span className="text-muted-foreground">Mundo</span>
      </span>
    </Link>
  );
}
