import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" aria-label="Accueil">
      <span style={{ fontWeight: 800, letterSpacing: 0.5 }}>
        AGRI <span style={{ fontWeight: 400 }}>Mundo</span>
      </span>
    </Link>
  );
}
