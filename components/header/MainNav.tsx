import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  {
    label: "homr",
    href: "/",
    children: [],
  },
  {
    label: "Cultures",
    href: "/cultures",
    children: [
      { label: "Dashboard", href: "/cultures" },
      { label: "Production", href: "/cultures/production" },
      { label: "Recettes", href: "/cultures/recettes" },
    ],
  },
 
 {
    label: "BSF",
    href: "/bsf",
    children: [
      { label: "Dashboard", href: "/bsf" },
      { label: "Production", href: "/bsf/production" },
      { label: "Recettes", href: "/bsf/recettes" },
    ],
  },
  {
    label: "Hydroponie",
    href: "/hydroponie",
    children: [
      { label: "Systèmes", href: "/hydroponie/systemes" },
      { label: "Cultures", href: "/hydroponie/cultures" },
    ],
  },
  {
    label: "Serre",
    href: "/serre",
    children: [
      { label: "Parcelles", href: "/serre/parcelles" },
      { label: "Climat", href: "/serre/climat" },
    ],
  },
  {
    label: "Pleine terre",
    href: "/pleine-terre",
    children: [
      { label: "Parcelles", href: "/pleine-terre/parcelles" },
      { label: "Travaux", href: "/pleine-terre/travaux" },
    ],
  },
  {
    label: "Champignon",
    href: "/champignon",
    children: [
      { label: "Salles", href: "/champignon/salles" },
      { label: "Cycles", href: "/champignon/cycles" },
    ],
  },
  {
    label: "Aquaponie",
    href: "/aquaponie",
    children: [
      { label: "Bassins", href: "/aquaponie/bassins" },
      { label: "Planches", href: "/aquaponie/planches" },
    ],
  },
];

export function MainNav() {
  return (
    <nav aria-label="Navigation principale">
      <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0, margin: 0 }}>
        {NAV.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>

            {item.children?.length ? (
              <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
