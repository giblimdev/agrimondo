import { NavItem } from "./ResponsiveNav";

type FlatNavItem = Omit<NavItem, "children">;

/**
 * Transforme un tableau plat d'items de navigation en structure hiérarchique
 */
export function buildNavTree(flatItems: FlatNavItem[]): NavItem[] {
  const itemMap = new Map<string, NavItem>();
  const rootItems: NavItem[] = [];

  // Initialiser tous les items avec un tableau children vide
  flatItems.forEach((item) => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  // Construire la hiérarchie
  flatItems.forEach((item) => {
    const navItem = itemMap.get(item.id)!;

    if (item.parentId) {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(navItem);
      }
    } else {
      rootItems.push(navItem);
    }
  });

  // Trier les items par ordre
  const sortByOrder = (items: NavItem[]) => {
    items.sort((a, b) => a.order - b.order);
    items.forEach((item) => {
      if (item.children.length > 0) {
        sortByOrder(item.children);
      }
    });
  };

  sortByOrder(rootItems);

  return rootItems;
}
