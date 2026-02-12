// app/public/elevage/kpi-elevage/page.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { kpiCategories } from "./kpiData";

const categoryStyles: Record<
  string,
  {
    accentClass: string; // barre / point de couleur
    headerBgClass: string; // fond du trigger
    badgeBgClass: string; // badge freq/unit
    badgeTextClass: string;
  }
> = {
  production: {
    accentClass: "bg-emerald-500",
    headerBgClass: "bg-emerald-50/70 dark:bg-emerald-950/30",
    badgeBgClass: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeTextClass: "text-emerald-800 dark:text-emerald-200",
  },
  egg_mass_calibre: {
    accentClass: "bg-amber-500",
    headerBgClass: "bg-amber-50/70 dark:bg-amber-950/30",
    badgeBgClass: "bg-amber-100 dark:bg-amber-950/60",
    badgeTextClass: "text-amber-800 dark:text-amber-200",
  },
  feed: {
    accentClass: "bg-blue-500",
    headerBgClass: "bg-blue-50/70 dark:bg-blue-950/30",
    badgeBgClass: "bg-blue-100 dark:bg-blue-950/60",
    badgeTextClass: "text-blue-800 dark:text-blue-200",
  },
  quality_losses_floor: {
    accentClass: "bg-rose-500",
    headerBgClass: "bg-rose-50/70 dark:bg-rose-950/30",
    badgeBgClass: "bg-rose-100 dark:bg-rose-950/60",
    badgeTextClass: "text-rose-800 dark:text-rose-200",
  },
  health_welfare: {
    accentClass: "bg-violet-500",
    headerBgClass: "bg-violet-50/70 dark:bg-violet-950/30",
    badgeBgClass: "bg-violet-100 dark:bg-violet-950/60",
    badgeTextClass: "text-violet-800 dark:text-violet-200",
  },
  water_climate_litter: {
    accentClass: "bg-cyan-500",
    headerBgClass: "bg-cyan-50/70 dark:bg-cyan-950/30",
    badgeBgClass: "bg-cyan-100 dark:bg-cyan-950/60",
    badgeTextClass: "text-cyan-800 dark:text-cyan-200",
  },
  flock_management: {
    accentClass: "bg-slate-500",
    headerBgClass: "bg-slate-50/70 dark:bg-slate-950/30",
    badgeBgClass: "bg-slate-100 dark:bg-slate-950/60",
    badgeTextClass: "text-slate-800 dark:text-slate-200",
  },
};

const defaultStyle = {
  accentClass: "bg-slate-400",
  headerBgClass: "bg-muted/40",
  badgeBgClass: "bg-muted",
  badgeTextClass: "text-muted-foreground",
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6">
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h1 className="text-2xl font-semibold">
          KPI – Poules pondeuses (au sol)
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Présentation des indicateurs clés par catégorie.
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-3">
        {kpiCategories.map((cat) => {
          const style = categoryStyles[cat.id] ?? defaultStyle;

          return (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex w-full items-stretch gap-3 text-left">
                  {/* Accent couleur */}
                  <span
                    className={`mt-1 h-10 w-1.5 shrink-0 rounded-full ${style.accentClass}`}
                  />

                  {/* Zone titre */}
                  <div
                    className={`flex-1 rounded-lg p-2 ${style.headerBgClass}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-base font-medium">{cat.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {cat.kpis.length} KPI
                      </span>
                    </div>

                    {cat.description ? (
                      <div className="mt-1 text-sm text-muted-foreground">
                        {cat.description}
                      </div>
                    ) : null}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3 pt-2">
                  {cat.kpis.map((kpi) => (
                    <div
                      key={kpi.id}
                      className="rounded-xl border bg-background/40 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="text-sm font-semibold">
                            {kpi.name}
                          </div>
                          {kpi.description ? (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {kpi.description}
                            </p>
                          ) : null}
                        </div>

                        <div className="flex items-center gap-2">
                          {kpi.frequency ? (
                            <span
                              className={`rounded-full px-2 py-1 text-xs ${style.badgeBgClass} ${style.badgeTextClass}`}
                            >
                              {kpi.frequency}
                            </span>
                          ) : null}
                          {kpi.unit ? (
                            <span
                              className={`rounded-full px-2 py-1 text-xs ${style.badgeBgClass} ${style.badgeTextClass}`}
                            >
                              {kpi.unit}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {kpi.formula ? (
                        <pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-3 text-xs">
                          {kpi.formula}
                        </pre>
                      ) : null}

                      {kpi.notes?.length ? (
                        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                          {kpi.notes.map((n, idx) => (
                            <li key={idx}>{n}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
