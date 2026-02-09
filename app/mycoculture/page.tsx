// app/champignons-en-sac/page.tsx
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Culture des champignons en sac (Pleurotes)",
  description:
    "Manuel complet : choix du mycélium, formulation substrat, pasteurisation, stérilisation, ensemencement, incubation, fructification, hygiène, contrôle de l'environnement et dépannage.",
};

function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur supports-backdrop-filter:bg-white/5">
      <CardHeader className="pb-2">
        <CardDescription className="text-white/70">{label}</CardDescription>
        <CardTitle className="text-2xl text-white">{value}</CardTitle>
      </CardHeader>
      {hint ? (
        <CardContent className="pt-0 text-sm text-white/70">{hint}</CardContent>
      ) : null}
    </Card>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-sm leading-6 text-slate-200/90">
      <span className="text-slate-200">{children}</span>
    </li>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(34,197,94,0.20),transparent_55%),radial-gradient(1000px_circle_at_80%_30%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_60%_90%,rgba(168,85,247,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/20">
              Pleurotes
            </Badge>
            <Badge className="bg-blue-500/15 text-blue-200 hover:bg-blue-500/20">
              Culture en sac
            </Badge>
            <Badge className="bg-violet-500/15 text-violet-200 hover:bg-violet-500/20">
              Manuel complet
            </Badge>
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Manuel : culture des champignons en sac (pleurotes)
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/75">
            Guide pratique et technique pour produire pleurotes en sac : de la
            préparation du substrat à la récolte et au dépannage. Convient pour
            petits ateliers ou expérimentations de la ferme au garage.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Metric
              label="Incubation"
              value="20–30°C"
              hint="Évite de dépasser ~30°C. Optimale 22–26°C selon souche."
            />
            <Metric
              label="Humidité (incub.)"
              value="≈ 90–95%"
              hint="Sac fermé + filtre = atmosphère humide."
            />
            <Metric
              label="Volées"
              value="2–4"
              hint="Souvent espacées de 7–21 jours selon substrat et température."
            />
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Objectif</CardTitle>
                <CardDescription className="text-white/70">
                  Obtenir des blocs colonisés rapidement, résilients aux
                  contaminations et produisant plusieurs volées.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-white/75">
                La réussite repose sur trois piliers : substrat uniformément
                traité et humidifié, mycélium sain et procédures d’ensemencement
                propres, contrôle de l’air frais et de l’humidité en
                fructification.
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Pour démarrer vite</CardTitle>
                <CardDescription className="text-white/70">
                  Paille + pleurote + méthode eau chaude (pasteurisation).
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-white/75">
                La paille pasteurisée est tolérante aux erreurs: moins de
                stérilité requise que pour des blocs enrichis. Recommandé pour
                premiers essais et formation.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Tabs defaultValue="checklist" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 sm:w-130 sm:grid-cols-4">
            <TabsTrigger value="checklist">Checklist</TabsTrigger>
            <TabsTrigger value="substrat">Substrat & Formulations</TabsTrigger>
            <TabsTrigger value="phases">Phases détaillées</TabsTrigger>
            <TabsTrigger value="depannage">Dépannage & Sécurité</TabsTrigger>
          </TabsList>

          {/* Checklist */}
          <TabsContent value="checklist" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Matériel essentiel
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Pour 5–20 sacs selon taille.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5">
                    <Bullet>
                      Paille propre (ou sciure feuillus) et eau potable.
                    </Bullet>
                    <Bullet>
                      Mycélium (grain spawn, plugs ou son de riz).
                    </Bullet>
                    <Bullet>
                      Sacs de culture (polypropylène) avec filtre ou un tissu
                      respirant.
                    </Bullet>
                    <Bullet>
                      Thermomètre, hygromètre, chronomètre/horloge.
                    </Bullet>
                    <Bullet>
                      Brumisateur, pulvérisateur manuel, gant/masque.
                    </Bullet>
                    <Bullet>
                      Grand bac pour pasteurisation ou cuve (si paille).
                    </Bullet>
                    <Bullet>Balance (±10 g) et seaux propres.</Bullet>
                    <Bullet>
                      Racloir/outil pour manipuler substrat et sac.
                    </Bullet>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Approvisionnement
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Contrôles avant achat.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5">
                    <Bullet>
                      Mycélium: source fiable, date et lot connus.
                    </Bullet>
                    <Bullet>
                      Paille: exempte de moisissure et odeurs fortes.
                    </Bullet>
                    <Bullet>
                      Sciure: provenant de feuillus non traités (pas de résineux
                      ni produits chimiques).
                    </Bullet>
                    <Bullet>
                      Chaux/agents d'ajustement si tu utilises méthode chaux.
                    </Bullet>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="border-white/10 bg-white/5 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">
                    Procédure d'hygiène rapide
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Routines à appliquer systématiquement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      Se laver les mains et porter des gants propres. Si
                      possible, alcooliser les gants (70%) avant manipulation.
                    </li>
                    <li>
                      Travailler dans un espace propre, essuyer les surfaces
                      avec de l'alcool ou détergent, limiter les courants d'air.
                    </li>
                    <li>
                      Minimiser le temps d'exposition du spawn et du substrat à
                      l'air libre.
                    </li>
                    <li>
                      Étiqueter chaque sac (date ensemencement, souche, lot).
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Substrat */}
          <TabsContent value="substrat" className="mt-6">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="border-white/10 bg-white/5 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">
                    Paille — méthode eau chaude (pasteurisation simple)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Très répandue pour pleurotes: équilibre entre simplicité et
                    fiabilité.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-white/75">
                  <h3 className="font-semibold">Ingrédients & ratios</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      100 kg paille sèche → hydrate selon besoin (exemple 1:2
                      poids eau).
                    </li>
                    <li>
                      Spawn : 2–6% du poids humide du substrat (en grains) — 4%
                      courant pour paille.
                    </li>
                    <li>
                      Optionnel : 5–10% son de riz ou blé pour accélérer la
                      colonisation.
                    </li>
                  </ul>

                  <h3 className="font-semibold">Protocole (résumé)</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Hacher paille (5–20 cm). Rincer si poussiéreuse.</li>
                    <li>
                      Chauffer l'eau à ≈ 71°C. Immerger la paille 60 minutes
                      (maintenir 65–75°C si possible).
                    </li>
                    <li>
                      Égoutter 4–6 heures jusqu'à humidité "humide mais non
                      dégoulinant" (contenu en eau util. ~60–65%).
                    </li>
                    <li>
                      Refroidir à ≤ 30°C, répartir sur surface propre, mélanger
                      spawn rapidement — en couches de 5–10 cm.
                    </li>
                    <li>
                      Tasser légèrement, remplir sacs et sceller (scellage ou
                      cordon + filtre pour respiration).
                    </li>
                  </ol>

                  <h3 className="font-semibold">Contrôle hygrométrique</h3>
                  <p>
                    Un substrat trop humide fermente; trop sec ralentit la
                    colonisation. Test: serrer poignée — quelques gouttes = OK;
                    eau libre = trop humide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Trempage à la chaux (méthode froide)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Alternative utile si pas d'accès à chauffage. Procure
                    protection microbiologique via pH élevé.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Préparer solution de chaux (hydratée) : 10–20 g chaux / L
                      (selon recette).
                    </li>
                    <li>
                      Immerger paille 8–18 h selon densité; laisser égoutter 3–6
                      h.
                    </li>
                    <li>
                      Rincer légèrement si surdosage; inoculer sans laisser
                      sécher complètement.
                    </li>
                  </ol>
                  <p className="mt-2">
                    Attention : manipuler la chaux avec précautions (gants,
                    lunettes). Bien étiqueter.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-white">
                    Sciure / Blocs (stérilisation et enrichissement)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Sciure de feuillus permet blocs denses et rendement plus
                    élevé mais demande plus de rigueur (stérilisation +
                    inoculation propre).
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Formulation classique: 80–90% sciure + 10–20% son de riz
                      ou farine (pour nutrition).
                    </li>
                    <li>
                      Sterilisation en autoclave ou cuisson (121°C, 60–120 min
                      selon volume).
                    </li>
                    <li>
                      Après refroidissement, inoculer en chambre propre ou sous
                      hotte laminaire si possible.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Les blocs stériles ont moins de compétiteurs mais toute
                    erreur d'hygiène peut être catastrophique — commencer petit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Phases détaillées */}
          <TabsContent value="phases" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Incubation (colonisation)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Période où le mycélium se développe à l'intérieur du sac.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-white/75">
                  <h3 className="font-semibold">Conditions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Température: 20–30°C (idéal selon souche: 22–26°C).</li>
                    <li>
                      Humidité ambiante: 60–80% (le sac retient l'humidité
                      locale du substrat).
                    </li>
                    <li>Lumière: faible, pas de lumière directe.</li>
                    <li>
                      CO₂: tolérance élevée en incubation; éviter courants d'air
                      forts.
                    </li>
                  </ul>

                  <h3 className="font-semibold">Durée</h3>
                  <p>
                    Colonisation complète typique: 10–21 jours pour paille, plus
                    long pour sciure/blocs riches (14–30 jours).
                  </p>

                  <h3 className="font-semibold">Signes d'alerte</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Odeurs aigres, visqueuses → probabilité de contamination
                      bactérienne ou levurienne.
                    </li>
                    <li>
                      Taches colorées (vert/bleu/noir) → moisissures (isoler et
                      détruire si nécessaire).
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Initiation de la fructification
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Basculer de l'incubation à un environnement qui déclenche la
                    formation des primordia.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-white/75">
                  <h3 className="font-semibold">Déclencheurs</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Chute de température de 3–10°C selon souche.</li>
                    <li>
                      Apport d'air frais — réduction du CO₂ (ventilation courte
                      et fréquente).
                    </li>
                    <li>
                      Lumière diffuse 8–12 h/j (lumière naturelle ou LED douce).
                    </li>
                    <li>
                      Humidité relative de 75–90% et brumisations régulières.
                    </li>
                  </ul>

                  <h3 className="font-semibold">Techniques</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Faire des entailles en "X" (ou trous) au niveau du sac
                      pour les bouquets.
                    </li>
                    <li>
                      Exposer les sacs à air frais 3–6 fois par jour, 1–3 min
                      selon volume et ventilation.
                    </li>
                    <li>
                      Brumiser sans créer d'eau libre: gouttelettes fines pour
                      maintenir humidité.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">
                    Récolte & post-récolte
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Moment et méthode de récolte pour qualité et prolongation
                    des volées.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Récolte dès que les bords des chapeaux commencent à se
                      déployer; éviter la sporulation excessive.
                    </li>
                    <li>
                      Couper au couteau propre ou tordre la grappe selon
                      préférence — méthode propre pour éviter blessures.
                    </li>
                    <li>
                      Nettoyage: retirer débris et champignons abîmés pour
                      réduire contamination.
                    </li>
                    <li>
                      Après récolte, laisser le sac se reposer 3–7 jours; il
                      peut produire plusieurs volées.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">
                    Routine quotidienne (exemple)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Procédure simple pour gestion journalière.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="m1">
                      <AccordionTrigger>Matin (3–6 min)</AccordionTrigger>
                      <AccordionContent>
                        Vérifier thermomètre/hygromètre, brumiser selon besoin,
                        ouvrir légèrement la zone pour 1–2 min d'aération.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="m2">
                      <AccordionTrigger>Après-midi (2–4 min)</AccordionTrigger>
                      <AccordionContent>
                        Contrôle visuel des primordia, ajuster humidité, retirer
                        signes visibles de contamination.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="m3">
                      <AccordionTrigger>Récolte & maintenance</AccordionTrigger>
                      <AccordionContent>
                        Récolter au besoin, nettoyer surface, remplacer sacs
                        fortement contaminés, noter observations (tailles, temps
                        de colonisation).
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dépannage */}
          <TabsContent value="depannage" className="mt-6">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Moisissure verte / bleue
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Contamination mycologique commune (Trichoderma,
                    Penicillium...)
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <p>
                    Causes probables : substrat insuffisamment traité,
                    inoculation dans des conditions sales, humidité stagnante,
                    sacs non filtrés.
                  </p>
                  <p className="mt-2">Actions recommandées :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Isoler le sac contaminé immédiatement.</li>
                    <li>
                      Ne pas essayer de sauver le sac en grattant — risque de
                      dispersion.
                    </li>
                    <li>
                      Réviser protocoles de pasteurisation/stérilisation et
                      hygiène.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Odeur acide / slime (fermentation)
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Indique domination bactérienne / levurienne.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <p>
                    Causes: substrat trop humide ou température trop élevée
                    pendant pasteurisation/stockage; contamination pendant
                    ensemencement.
                  </p>
                  <p className="mt-2">Actions :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Isoler et détruire si odeur forte/visqueuse persistante.
                    </li>
                    <li>Revoir égouttage et réduire teneur en eau.</li>
                    <li>
                      Protocole: travailler plus proprement et au frais (≤30°C)
                      pour éviter fermentation.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white">
                    Petits chapeaux, longs pieds
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Signe typique de CO₂ élevé / manque d'air frais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <p>Solutions :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Augmenter ventilation (plus d'aérations courtes) sans
                      dessécher.
                    </li>
                    <li>
                      Vérifier densité d'entailles — ouvrir plus de sorties si
                      besoin.
                    </li>
                    <li>
                      Augmenter luminosité indirecte si primordia semblent
                      étiolés.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-white">
                    Checklist qualité avant d'accuser le mycélium
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    6 points à valider systématiquement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ul className="list-disc space-y-2 pl-5">
                    <Bullet>
                      Substrat: propre, exempt d'odeurs rances ou moisies.
                    </Bullet>
                    <Bullet>
                      Traitement: températures/temps vérifiés (ou recette chaux
                      respectée).
                    </Bullet>
                    <Bullet>
                      Égouttage: pas d'eau libre visible dans le sac.
                    </Bullet>
                    <Bullet>
                      Inoculation: temps d'exposition minimisé, mains et
                      surfaces désinfectées.
                    </Bullet>
                    <Bullet>
                      Sac: filtre fonctionnel, pas de trous parasites ou fuites.
                    </Bullet>
                    <Bullet>
                      Fructification: apport d'air frais suffisant et
                      hygrométrie contrôlée.
                    </Bullet>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-white">
                    Sécurité & respect
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Bonnes pratiques pour toi et l'environnement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-white/75">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Utiliser gants et protection lors de manipulation de chaux
                      ou produits chimiques.
                    </li>
                    <li>
                      Éviter de brûler ou disperser substrat contaminé à
                      proximité de zones cultivées.
                    </li>
                    <li>
                      Éliminer les sacs fortement contaminés en respectant les
                      règles locales (compostage contrôlé ou incinération si
                      autorisé).
                    </li>
                    <li>
                      Tenir un registre: lot, dates, observations; utile pour
                      traçabilité et amélioration.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="mt-6 text-sm text-white/55">
              Note: si tu veux, j'adapte le manuel à ta situation (type de
              pleurote, climat/altitude, matériel dispo et taille des sacs).
              Dis-moi les paramètres et je fournis une version optimisée pour
              ton contexte.
            </p>
          </TabsContent>
        </Tabs>

        <p className="mt-10 text-sm text-white/55">
          Version : Manuel enrichi — structures, protocoles et dépannage.
        </p>
      </section>
    </main>
  );
}
