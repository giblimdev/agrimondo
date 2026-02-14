import ResponsiveNav from "./ResponsiveNav";
import { buildNavTree } from "./navUtils";
import { NAV_FLAT } from "./MainNaveData";

export default function Navigation() {
  // Transformer les données plates en arbre hiérarchique
  const navTree = buildNavTree(NAV_FLAT);

  return (
    <ResponsiveNav
      navItems={navTree}
      userRole="public" // ou récupérer depuis votre système d'auth
    />
  );
}
