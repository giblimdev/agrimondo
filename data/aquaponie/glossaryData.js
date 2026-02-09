// data/glossaryAquaponieData.js
export const glossaryTermsAquaponie = [
  {
    id: 111,
    term: "Aquaponie",
    definition: "Système de production intégré associant aquaculture (élevage de poissons) et hydroponie (culture de plantes hors sol).",
    detailed: "L'aquaponie est un écosystème symbiotique où les déjections de poissons sont transformées en nutriments pour les plantes, qui à leur tour purifient l'eau pour les poissons. Ce système circulaire minimise la consommation d'eau (jusqu'à 90% d'économie) et ne nécessite pas d'engrais chimiques.",
    category: "Général",
    slug: "aquaponie"
  },
  {
    id: 112,
    term: "Aquaculture",
    definition: "Élevage d'organismes aquatiques (poissons, crustacés, algues) en milieu contrôlé.",
    detailed: "Composante animale de l'aquaponie. Les poissons produisent des déchets riches en ammonium qui seront transformés par les bactéries en nutriments pour les plantes.",
    category: "Système",
    slug: "aquaculture"
  },
  {
    id: 113,
    term: "Hydroponie",
    definition: "Culture de plantes sans sol, les racines baignant dans une solution nutritive.",
    detailed: "Composante végétale de l'aquaponie. Les plantes absorbent les nutriments issus des déchets de poissons, purifiant ainsi l'eau qui retourne au bassin à poissons.",
    category: "Système",
    slug: "hydroponie"
  },
  {
    id: 114,
    term: "Bassin à poissons",
    definition: "Réservoir principal où sont élevés les poissons dans un système aquaponique.",
    detailed: "Conteneur étanche (généralement en plastique alimentaire, fibre de verre ou béton) conçu pour héberger les poissons. Sa taille dépend du nombre et de la taille des poissons, avec un volume minimal recommandé de 500 litres pour un système domestique.",
    category: "Équipement",
    slug: "bassin-poissons"
  },
  {
    id: 115,
    term: "Bac de culture",
    definition: "Réservoir contenant le substrat où poussent les plantes en aquaponie.",
    detailed: "Conteneur sans fond (ou avec trous de drainage) rempli de substrat inerte (billes d'argile, gravier, laine de roche). L'eau enrichie en nutriments circule dans le substrat où les racines des plantes les absorbent.",
    category: "Équipement",
    slug: "bac-culture"
  },
  {
    id: 116,
    term: "Substrat",
    definition: "Matériau inerte servant de support aux racines des plantes en aquaponie.",
    detailed: "Matériau neutre (ne libérant pas de substances dans l'eau) avec une bonne rétention en eau et une grande surface poreuse pour héberger les bactéries nitrifiantes. Exemples : billes d'argile expansée, gravier de granulométrie 8-16 mm, laine de roche, fibres de coco.",
    category: "Équipement",
    slug: "substrat"
  },
  {
    id: 117,
    term: "Billes d'argile expansée",
    definition: "Substrat léger et poreux couramment utilisé en aquaponie.",
    detailed: "Billes d'argile cuites à haute température, créant une structure alvéolaire. Avantages : léger, pH neutre, grande surface pour les bactéries, bonne rétention en eau et oxygénation des racines. Inconvénient : coût élevé pour les grands systèmes.",
    category: "Équipement",
    slug: "billes-argile"
  },
  {
    id: 118,
    term: "Cycle de l'azote",
    definition: "Processus biologique transformant les déchets de poissons en nutriments pour les plantes.",
    detailed: "Processus essentiel en aquaponie : 1) Les poissons produisent de l'ammoniac (NH3) via leurs déjections et branchies. 2) Les bactéries Nitrosomonas transforment l'ammoniac en nitrites (NO2-). 3) Les bactéries Nitrobacter transforment les nitrites en nitrates (NO3-). 4) Les plantes absorbent les nitrates comme engrais.",
    category: "Biologie",
    slug: "cycle-azote"
  },
  {
    id: 119,
    term: "Maturation du système",
    definition: "Période initiale permettant l'établissement des colonies bactériennes nitrifiantes.",
    detailed: "Phase critique de 4 à 6 semaines sans poissons ni plantes (ou avec peu de poissons résistants). On ajoute une source d'ammoniac (nourriture pour poissons, ammoniaque pur) pour nourrir les bactéries. Les tests d'eau montrent d'abord un pic d'ammoniac, puis de nitrites, et enfin l'apparition des nitrates indiquant que le système est cyclé.",
    category: "Technique",
    slug: "maturation-systeme"
  },
  {
    id: 120,
    term: "Bactéries nitrifiantes",
    definition: "Microorganismes essentiels convertissant l'ammoniac en nitrates assimilables par les plantes.",
    detailed: "Deux groupes principaux : Nitrosomonas (ammoniac → nitrites) et Nitrobacter/Nitrosospira (nitrites → nitrates). Ces bactéries aérobies colonisent toutes les surfaces immergées (substrat, parois, biofiltre). Sensibles aux pesticides, antibiotiques et températures extrêmes.",
    category: "Biologie",
    slug: "bacteries-nitrifiantes"
  },
  {
    id: 121,
    term: "Biofiltre",
    definition: "Composant ou zone du système dédiée à l'hébergement des bactéries nitrifiantes.",
    detailed: "Zone avec un support à grande surface (bio-médias) pour maximiser la colonisation bactérienne. Peut être intégré au bac de culture (système media bed) ou séparé (système DWC ou NFT). Les médias courants : bio-balles, mailles plastiques, pouzzolane, ou simplement le substrat.",
    category: "Équipement",
    slug: "biofiltre"
  },
  {
    id: 122,
    term: "Pompe à eau",
    definition: "Dispositif assurant la circulation de l'eau entre les différents composants du système.",
    detailed: "Pompe submersible ou externe dimensionnée selon le débit nécessaire (typiquement 1-2 fois le volume total du système par heure). Doit être adaptée à l'aquaponie (résistante aux solides en suspension). Une pompe de secours est recommandée pour les systèmes critiques.",
    category: "Équipement",
    slug: "pompe-eau"
  },
  {
    id: 123,
    term: "Pompe à air",
    definition: "Système d'aération injectant de l'oxygène dans l'eau pour poissons et bactéries.",
    detailed: "Essentiel pour maintenir l'oxygène dissous (DO) au-dessus de 5 mg/L. Les bactéries nitrifiantes et les poissons sont aérobies. Utilise des diffuseurs (pierres à air) ou des venturis. En cas de panne, les poissons peuvent mourir en quelques heures.",
    category: "Équipement",
    slug: "pompe-air"
  },
  {
    id: 124,
    term: "Tilapia",
    definition: "Poisson tropical couramment élevé en aquaponie pour sa croissance rapide et sa robustesse.",
    detailed: "Oreochromis niloticus, originaire d'Afrique. Tolère une large gamme de conditions (pH 6.5-9, température 20-30°C). Omnivore, croissance rapide (marché en 6-9 mois). Inconvénient : sensible au froid (<15°C). Réglementation stricte dans certains pays (espèce invasive).",
    category: "Poissons",
    slug: "tilapia"
  },
  {
    id: 125,
    term: "Truite arc-en-ciel",
    definition: "Poisson d'eau froide adapté aux climats tempérés en aquaponie.",
    detailed: "Oncorhynchus mykiss. Nécessite une eau fraîche (10-18°C) et très oxygénée (>7 mg/L). Croissance rapide, chair prisée. Exige une filtration mécanique efficace car produit beaucoup de déchets solides. Plus sensible aux maladies que le tilapia.",
    category: "Poissons",
    slug: "truite-arcenciel"
  },
  {
    id: 126,
    term: "Carpe",
    definition: "Poisson d'eau douce rustique, adapté aux grands systèmes aquaponiques.",
    detailed: "Cyprinus carpio. Très tolérante aux variations de qualité d'eau. Peut atteindre de grandes tailles, nécessitant un grand bassin. Variétés : carpe commune, carpe miroir, carpe koï (ornementale). Croissance lente mais bonne production de déchets pour les plantes.",
    category: "Poissons",
    slug: "carpe"
  },
  {
    id: 127,
    term: "Poisson-chat",
    definition: "Groupe de poissons sans écailles, résistants, adaptés à l'aquaponie.",
    detailed: "Plusieurs espèces : Clarias gariepinus (poisson-chat africain), Ictalurus punctatus (channel catfish américain). Tolèrent des densités élevées et une eau pauvre en oxygène (peuvent respirer l'air atmosphérique). Croissance rapide, mais prédateurs - ne pas mélanger avec des poissons plus petits.",
    category: "Poissons",
    slug: "poisson-chat"
  },
  {
    id: 128,
    term: "Perche",
    definition: "Poisson d'eau douce apprécié en aquaponie pour sa chair ferme et sa valeur commerciale.",
    detailed: "Perca fluviatilis (perche européenne) ou Morone chrysops (bar blanc). Préfère les eaux fraîches (15-22°C). Croissance modérée, nécessite une eau de bonne qualité. Comportement grégaire, à élever en groupes.",
    category: "Poissons",
    slug: "perche"
  },
  {
    id: 129,
    term: "Écrevisse",
    definition: "Crustacé d'eau douce pouvant être intégré dans un système aquaponique.",
    detailed: "Procambarus clarkii (écrevisse de Louisiane) ou Cherax quadricarinatus (écrevisse australienne). Se nourrissent de déchets organiques, aident à nettoyer le système. Production secondaire intéressante, mais peuvent endommager les racines des plantes délicates.",
    category: "Poissons",
    slug: "ecrevisse"
  },
  {
    id: 130,
    term: "Laitue",
    definition: "Plante à croissance rapide très populaire en aquaponie.",
    detailed: "Lactuca sativa. Pousse bien dans tous les systèmes aquaponiques. Cycle court (4-6 semaines), tolère une large gamme de pH (6.0-7.5) et de températures (15-24°C). Variétés : feuille de chêne, batavia, romaine. Consommation moyenne en nutriments.",
    category: "Plantes",
    slug: "laitue"
  },
  {
    id: 131,
    term: "Basilic",
    definition: "Herbe aromatique très productive en aquaponie.",
    detailed: "Ocimum basilicum. Excellente plante pour débutants. Nécessite beaucoup de lumière et de chaleur (20-30°C). Pincement régulier pour favoriser la ramification. Plusieurs variétés : grand vert, pourpre, thaï. Apprécie des niveaux de nitrates moyens à élevés.",
    category: "Plantes",
    slug: "basilic"
  },
  {
    id: 132,
    term: "Tomate",
    definition: "Plante fruitière nécessitant plus de nutriments et d'espace en aquaponie.",
    detailed: "Solanum lycopersicum. Nécessite un système bien établi et riche en nutriments (surtout potassium et calcium). Tuteurage obligatoire, taille des gourmands. Sensible aux carences (pourriture apicale). Variétés naines recommandées pour les petits systèmes.",
    category: "Plantes",
    slug: "tomate"
  },
  {
    id: 133,
    term: "Concombre",
    definition: "Plante grimpante à forte production en aquaponie.",
    detailed: "Cucumis sativus. Plante gourmande en nutriments et en eau. Nécessite un système mature et un support solide (treillis). Sensible aux acariens et à l'oïdium. Variétés de concombre libanais ou anglais (sans pépins) particulièrement adaptées.",
    category: "Plantes",
    slug: "concombre"
  },
  {
    id: 134,
    term: "Fraises",
    definition: "Fruit à petits fruits adapté aux systèmes aquaponiques.",
    detailed: "Fragaria × ananassa. Pousse bien en NFT ou en bac surélevé. Nécessite un pH légèrement acide (5.5-6.5). Production continue sous conditions optimales (température 15-25°C). Sensible aux carences en fer (chélate de fer recommandé).",
    category: "Plantes",
    slug: "fraises"
  },
  {
    id: 135,
    term: "Épinard",
    definition: "Légume-feuille à croissance rapide adapté à l'aquaponie.",
    detailed: "Spinacia oleracea. Préfère les températures fraîches (10-20°C), peut monter en graine en cas de chaleur. Tolère l'ombre partielle. Riche en fer, nécessite des niveaux moyens de nitrates. Récolte feuille par feuille possible.",
    category: "Plantes",
    slug: "epinard"
  },
  {
    id: 136,
    term: "pH",
    definition: "Mesure de l'acidité ou de la basicité de l'eau, paramètre crucial en aquaponie.",
    detailed: "Échelle de 0 (acide) à 14 (basique), 7 étant neutre. Plage idéale en aquaponie : 6.0-7.0 (compromis entre besoins des poissons, plantes et bactéries). Les poissons tolèrent 6.5-8.0, les bactéries 6.0-8.5, les plantes 5.5-7.5. Le pH tend à baisser naturellement (nitrification produit des ions H+).",
    category: "Paramètres",
    slug: "ph"
  },
  {
    id: 137,
    term: "Oxygène dissous",
    definition: "Quantité d'oxygène présente dans l'eau, vitale pour poissons et bactéries.",
    detailed: "Mesuré en mg/L ou ppm. Niveau critique : minimum 5 mg/L pour les poissons, 4 mg/L pour les bactéries. Les plantes aquatiques produisent de l'oxygène le jour mais en consomment la nuit. Facteurs influençant : température (inverse), agitation, présence de plantes, charge organique.",
    category: "Paramètres",
    slug: "oxygene-dissous"
  },
  {
    id: 138,
    term: "Ammoniac / Ammonium",
    definition: "Forme toxique (NH3) et non-toxique (NH4+) des déchets azotés des poissons.",
    detailed: "L'ammoniac (NH3) est très toxique même à faibles concentrations (>0.02 mg/L). L'ammonium (NH4+) est relativement inoffensif. Le ratio dépend du pH et température : plus le pH est élevé, plus la proportion d'ammoniac toxique augmente. Cible : <0.5 mg/L d'ammoniac total.",
    category: "Paramètres",
    slug: "ammoniac-ammonium"
  },
  {
    id: 139,
    term: "Nitrites",
    definition: "Composé intermédiaire dans le cycle de l'azote, toxique pour les poissons.",
    detailed: "NO2-. Très toxique pour les poissons (bloque l'hémoglobine). Concentrations acceptables : <1 mg/L, idéalement <0.5 mg/L. Apparaît pendant la maturation du système ou en cas de déséquilibre bactérien. Les bactéries Nitrobacter le transforment en nitrates.",
    category: "Paramètres",
    slug: "nitrites"
  },
  {
    id: 140,
    term: "Nitrates",
    definition: "Forme finale du cycle de l'azote, nutriment principal pour les plantes.",
    detailed: "NO3-. Peu toxique pour les poissons jusqu'à 100-300 mg/L selon l'espèce. Niveau idéal pour les plantes : 20-100 mg/L. Concentrations trop basses limitent la croissance des plantes, trop élevées peuvent stresser les poissons. Surveiller particulièrement en système bien équilibré.",
    category: "Paramètres",
    slug: "nitrates"
  },
  {
    id: 141,
    term: "Température",
    definition: "Paramètre critique influençant tous les organismes d'un système aquaponique.",
    detailed: "Plages idéales : poissons tropicaux 22-30°C, poissons d'eau froide 10-18°C ; bactéries 17-34°C (optimum 25-30°C) ; plantes 15-25°C (selon espèces). La température affecte la solubilité de l'oxygène, le métabolisme, et le ratio ammoniac/ammonium.",
    category: "Paramètres",
    slug: "temperature"
  },
  {
    id: 142,
    term: "Système DWC",
    definition: "Technique de culture en radeaux flottants (Deep Water Culture).",
    detailed: "Les plantes sont placées sur des radeaux de polystyrène flottant sur un bassin profond (30-60 cm). Les racines baignent directement dans l'eau nutritive. Excellente oxygénation requise. Idéal pour salades, herbes aromatiques. Peut nécessiter un biofiltre séparé.",
    category: "Système",
    slug: "systeme-dwc"
  },
  {
    id: 143,
    term: "Système NFT",
    definition: "Technique de culture en film nutritif (Nutrient Film Technique).",
    detailed: "L'eau nutritive circule en film mince (1-3 mm) dans des gouttières inclinées où les racines des plantes sont suspendues. Faible consommation d'eau, oxygénation maximale des racines. Adapté aux petites plantes à racines peu profondes (laitue, basilic). Sensible aux pannes de pompe.",
    category: "Système",
    slug: "systeme-nft"
  },
  {
    id: 144,
    term: "Système Media Bed",
    definition: "Système utilisant un lit de substrat comme support de culture et de filtration.",
    detailed: "Le plus commun pour les débutants. Le bac de culture rempli de substrat sert à la fois de support aux plantes, d'habitat pour les bactéries et de filtre mécanique. Deux types : flood and drain (marée) ou écoulement continu. Ratio recommandé : volume de substrat = volume du bassin à poissons.",
    category: "Système",
    slug: "systeme-media-bed"
  },
  {
    id: 145,
    term: "Système CHIFT PIST",
    definition: "Configuration avancée avec séparation constante des niveaux d'eau.",
    detailed: "Constant Height In Fish Tank - Pump In Sump Tank. Le niveau d'eau dans le bassin à poissons reste constant, la pompe est dans un réservoir de collecte (sump). Avantages : stabilité pour les poissons, décantation des solides dans le sump, facilité d'accès à la pompe. Configuration professionnelle courante.",
    category: "Système",
    slug: "systeme-chift-pist"
  },
  {
    id: 146,
    term: "Flood and Drain",
    definition: "Technique d'irrigation par cycles de remplissage et vidange (marée).",
    detailed: "Le bac de culture est alternativement rempli et vidé par un siphon ou une minuterie. Avantages : excellente oxygénation des racines, élimination des gaz toxiques, économie d'eau. Le mouvement d'eau stimule la croissance des plantes et des bactéries. Cycle typique : 15 minutes de remplissage, 45 minutes de vidange.",
    category: "Technique",
    slug: "flood-and-drain"
  },
  {
    id: 147,
    term: "Siphon automatique",
    definition: "Dispositif créant un effet de chasse d'eau pour vider un bac de culture.",
    detailed: "Plusieurs types : siphon cloche (bell siphon), siphon en U, siphon à vortex. Fonctionne sans électricité, uniquement par différence de pression. La cloche la plus commune : lorsque l'eau atteint un certain niveau, le siphon s'amorce et vide rapidement le bac jusqu'à ce que l'air entre, stoppant le siphonage.",
    category: "Équipement",
    slug: "siphon-automatique"
  },
  {
    id: 148,
    term: "Débit",
    definition: "Volume d'eau circulant dans le système par unité de temps.",
    detailed: "Mesuré en litres/heure (L/h) ou gallons/minute (GPM). Débit recommandé : 1 à 2 fois le volume total du système par heure. Trop faible : accumulation de déchets, zones anaérobies. Trop fort : stress pour les poissons, érosion des racines, consommation énergétique excessive.",
    category: "Paramètres",
    slug: "debit"
  },
  {
    id: 149,
    term: "Charge biologique",
    definition: "Quantité de poissons et de nourriture par rapport au volume du système.",
    detailed: "Exprimée en kg de poissons par m³ d'eau ou en ratio poissons/plantes. Une charge trop élevée produit plus de déchets que les bactéries et plantes ne peuvent traiter → accumulation de toxines. Une charge trop faible limite la production de nutriments pour les plantes. Ratio de départ : 20-40 kg de poissons par 1000 L.",
    category: "Paramètres",
    slug: "charge-biologique"
  },
  {
    id: 150,
    term: "Ratio plantes/poissons",
    definition: "Équilibre entre la biomasse végétale et piscicole pour un système stable.",
    detailed: "Pas de ratio universel, dépend des espèces, du système et des objectifs. Approche courante : 1 m² de surface de culture pour 20-40 kg de poissons (en système media bed). Surveiller les niveaux de nitrates pour ajuster : nitrates en hausse = ajouter des plantes ; nitrates en baisse = ajouter des poissons ou réduire les plantes.",
    category: "Technique",
    slug: "ratio-plantes-poissons"
  },
  {
    id: 151,
    term: "Dureté carbonatée",
    definition: "Mesure des carbonates et bicarbonates dans l'eau, pouvoir tampon du pH.",
    detailed: "KH (Karbonathärte). Mesure la capacité de l'eau à résister aux changements de pH (pouvoir tampon). En aquaponie, idéalement 60-120 mg/L de CaCO3. Un KH trop bas (<50) entraîne des fluctuations dangereuses du pH. Augmentable avec du bicarbonate de potassium.",
    category: "Paramètres",
    slug: "durete-carbonatee"
  },
  {
    id: 152,
    term: "Dureté générale",
    definition: "Concentration en ions calcium et magnésium dans l'eau.",
    detailed: "GH (Gesamthärte). Importante pour la santé des poissons (os, écailles) et certaines fonctions biologiques. Plage recommandée : 50-100 mg/L de CaCO3. Une eau trop douce peut causer des problèmes osmotiques chez les poissons. Augmentable avec du sulfate de calcium (gypse).",
    category: "Paramètres",
    slug: "durete-generale"
  },
  {
    id: 153,
    term: "Décanteur",
    definition: "Dispositif séparant les matières solides de l'eau par gravité.",
    detailed: "Composant optionnel mais recommandé pour les systèmes à forte charge. L'eau y circule lentement, permettant aux particules lourdes de se déposer au fond (boues). Réduit l'obstruction du substrat et les zones anaérobies. Nettoyage régulier nécessaire. Peut être intégré au sump.",
    category: "Équipement",
    slug: "decanteur"
  },
  {
    id: 154,
    term: "Filtre mécanique",
    definition: "Dispositif retenant physiquement les particules en suspension.",
    detailed: "Exemples : filtre à tambour, filtre à sable, filtre à poches, séparateur à vortex. Important pour les poissons produisant beaucoup de déchets (truites, carpes). Protège la pompe et évite le colmatage du substrat. Différent du biofiltre qui héberge les bactéries.",
    category: "Équipement",
    slug: "filtre-mecanique"
  },
  {
    id: 155,
    term: "Radicelles",
    definition: "Fines racines absorbantes des plantes aquaponiques.",
    detailed: "Structures délicates responsables de l'absorption des nutriments et de l'eau. Très sensibles aux dommages mécaniques et aux conditions anaérobies. Les systèmes bien oxygénés (DWC, flood and drain) favorisent leur développement. Un système racinaire blanc et dense indique une bonne santé.",
    category: "Biologie",
    slug: "radicelles"
  },
  {
    id: 156,
    term: "Zone anaérobie",
    definition: "Zone privée d'oxygène où se développent des bactéries indésirables.",
    detailed: "Se produit dans les substrats trop fins, compactés ou dans les boues accumulées. Les bactéries anaérobies produisent du méthane, du sulfure d'hydrogène (odeur d'œuf pourri) et des nitrites. Prévention : substrat à granulométrie appropriée, nettoyage des boues, système flood and drain.",
    category: "Biologie",
    slug: "zone-anaerobie"
  },
  {
    id: 157,
    term: "Mouche du terreau",
    definition: "Petit insecte volant dont les larves peuvent endommager les racines.",
    detailed: "Sciaridae. Les adultes pondent dans le substrat humide. Les larves se nourrissent de matière organique et parfois de racines délicates. Prévention : éviter l'excès de matière organique, couvrir le substrat (billes d'argile), pièges adhésifs jaunes. Lutte biologique : nématodes Steinernema feltiae.",
    category: "Santé",
    slug: "mouche-terreau"
  },
  {
    id: 158,
    term: "Pucerons",
    definition: "Petits insectes suceurs de sève attaquant les parties aériennes des plantes.",
    detailed: "Diverses espèces. Se reproduisent rapidement, affaiblissent les plantes et peuvent transmettre des virus. Prévention : plantes saines, bonne ventilation, plantes compagnes (œillets d'Inde). Lutte : savon insecticide, huile de neem, coccinelles, larves de chrysopes.",
    category: "Santé",
    slug: "pucerons"
  },
  {
    id: 159,
    term: "Oïdium",
    definition: "Maladie fongique formant un feutrage blanc sur les feuilles.",
    detailed: "Champignon se développant par temps humide avec faible circulation d'air. Affecte particulièrement cucurbitacées, tomates. Prévention : espacement des plantes, ventilation, éviter l'aspersion foliaire. Traitements : bicarbonate de potassium, soufre, lait dilué (1:10).",
    category: "Santé",
    slug: "oidium"
  },
  {
    id: 160,
    term: "Pourriture des racines",
    definition: "Maladie causée par des champignons ou bactéries en conditions anaérobies.",
    detailed: "Les racines devent brunes, molles et nauséabondes. Causée par Pythium, Phytophthora ou bactéries opportunistes. Prévention : oxygénation adéquate, éviter l'excès de matière organique, températures appropriées. Traitement difficile : améliorer l'oxygénation, retirer les plantes atteintes.",
    category: "Santé",
    slug: "pourriture-racines"
  },
  {
    id: 161,
    term: "Maladie des points blancs",
    definition: "Parasite commun des poissons d'eau douce (Ichthyophthirius multifiliis).",
    detailed: "Protozoaire formant des points blancs sur la peau, les nageoires et les branchies. Se déclare souvent lors de stress (changements brusques de température, mauvaise qualité d'eau). Traitement difficile en aquaponie (sensibilité des bactéries aux médicaments). Prévention : quarantaine des nouveaux poissons, maintien de conditions stables.",
    category: "Santé",
    slug: "points-blancs"
  },
  {
    id: 162,
    term: "Flavescence dorée",
    definition: "Jaunissement des feuilles dû à une carence en fer ou autres micronutriments.",
    detailed: "Les jeunes feuilles jaunissent tandis que les nervures restent vertes (chlorose interveinale). Carence en fer (Fe) la plus courante en aquaponie, car le fer précipite à pH >7. Solution : ajouter du chélate de fer (Fe-EDDHA efficace à pH élevé). Peut aussi être carence en manganèse (Mn) ou zinc (Zn).",
    category: "Santé",
    slug: "flavescence-doree"
  },
  {
    id: 163,
    term: "Alimentation des poissons",
    definition: "Nourriture fournie aux poissons, source principale de nutriments pour le système.",
    detailed: "Doit être complète et adaptée à l'espèce. Taux de conversion alimentaire (FCR) : 1-2 kg de nourriture pour 1 kg de poisson produit. Qualité importante : protéines (30-40%), lipides, vitamines. Suralimentation = pollution. Sous-alimentation = faible croissance. Règle : nourrir 1-3% du poids corporel par jour, en 2-3 repas.",
    category: "Technique",
    slug: "alimentation-poissons"
  },
  {
    id: 164,
    term: "Jeûne",
    definition: "Période sans nourriture pour les poissons, pratique courante en aquaponie.",
    detailed: "1-2 jours par semaine sans nourriture. Avantages : permet aux poissons de digérer complètement, réduit l'accumulation de déchets, économise la nourriture. Les poissons peuvent jeûner plusieurs jours sans problème. Important avant le nettoyage du système ou en cas de problème de qualité d'eau.",
    category: "Technique",
    slug: "jeune"
  },
  {
    id: 165,
    term: "Récolte échelonnée",
    definition: "Technique de récolte partielle permettant une production continue.",
    detailed: "Particulièrement adapté aux légumes-feuilles et herbes aromatiques. Récolter les feuilles externes des laitues, pincer le basilic. Pour les poissons, récolter les plus gros individus tout en laissant les autres grandir. Maintient un équilibre constant dans le système.",
    category: "Technique",
    slug: "recolte-echelonnee"
  },
  {
    id: 166,
    term: "Vidange partielle",
    definition: "Remplacement périodique d'une portion de l'eau du système.",
    detailed: "Remplacement de 5-10% de l'eau chaque semaine, ou 20-30% par mois. Compense l'évaporation et l'accumulation de sels non utilisés par les plantes. Utiliser de l'eau déchlorée (laisser reposer 24h ou utiliser un conditionneur d'eau). Important dans les systèmes fermés.",
    category: "Technique",
    slug: "vidange-partielle"
  },
  {
    id: 167,
    term: "Test d'eau",
    definition: "Analyse régulière des paramètres clés de l'eau en aquaponie.",
    detailed: "Tests essentiels : pH, ammoniac, nitrites, nitrates (kit gouttes recommandé). Tests secondaires : KH, GH, phosphates, fer. Fréquence : quotidienne les premières semaines, puis 1-2 fois/semaine. Tenir un journal pour suivre l'évolution. Les bandelettes sont peu précises, préférer les tests liquides.",
    category: "Technique",
    slug: "test-eau"
  },
  {
    id: 168,
    term: "Redox",
    definition: "Potentiel d'oxydoréduction, indicateur global de la qualité de l'eau.",
    detailed: "Mesure en millivolts (mV) de la capacité de l'eau à oxyder ou réduire les substances. Un redox élevé (>300 mV) indique une eau oxygénée et propre. Un redox bas (<200 mV) signale une pollution organique et des conditions réductrices. Non essentiel pour les petits systèmes, mais utile pour les grands.",
    category: "Paramètres",
    slug: "redox"
  },
  {
    id: 169,
    term: "Germination",
    definition: "Première étape de croissance d'une plante à partir de la graine.",
    detailed: "En aquaponie, germination souvent réalisée séparément dans un substrat léger (laine de roche, pastilles de coco). Transplantation lorsque les plantules ont 2-3 vraies feuilles. Certaines plantes peuvent être semées directement en système media bed (radis, carottes). Température et humidité constantes requises.",
    category: "Technique",
    slug: "germination"
  },
  {
    id: 170,
    term: "Repiquage",
    definition: "Transplantation de jeunes plants dans le système aquaponique.",
    detailed: "Choisir des plants sains et vigoureux. Rincer délicatement les racines pour enlever l'ancien substrat. Planter à la bonne profondeur, en évitant de couvrir le collet. Protéger du soleil direct les premiers jours (acclimatation). Meilleur moment : fin de journée lorsque la lumière est moins intense.",
    category: "Technique",
    slug: "repiquage"
  },
  {
    id: 171,
    term: "Éclairage artificiel",
    definition: "Système d'éclairage pour compenser le manque de lumière naturelle.",
    detailed: "Nécessaire pour l'aquaponie indoor ou en serre pendant l'hiver. Types : LED (efficacité, peu de chaleur), néons T5 (bon spectre), HPS (intense mais chaud). Durée : 12-16 heures/jour pour la plupart des plantes. Intensité : 200-400 µmol/m²/s pour les légumes-feuilles, 400-600 pour les fruitiers.",
    category: "Équipement",
    slug: "eclairage-artificiel"
  },
  {
    id: 172,
    term: "Chauffage de l'eau",
    definition: "Dispositif maintenant la température de l'eau pour les poissons tropicaux.",
    detailed: "Chauffe-eau immergé ou en ligne. Dimensionnement : 1 watt par litre d'eau environ. Utiliser un thermostat séparé pour plus de précision. Coûteux en énergie, donc bien isoler les bassins. Alternative : serre chauffée plutôt que l'eau directement. Pour l'eau froide, refroidisseurs disponibles mais très coûteux.",
    category: "Équipement",
    slug: "chauffage-eau"
  },
  {
    id: 173,
    term: "Serre aquaponique",
    definition: "Structure fermée permettant le contrôle du climat pour l'aquaponie.",
    detailed: "Avantages : prolongation de la saison, protection contre les prédateurs et intempéries, contrôle de la température et humidité. Types : tunnel plastique, verre, polycarbonate. Nécessite ventilation (manuelle ou automatique), parfois chauffage et ombrage. Coût initial élevé mais productivité accrue.",
    category: "Équipement",
    slug: "serre-aquaponique"
  },
  {
    id: 174,
    term: "Aquaponie domestique",
    definition: "Système de petite taille pour particuliers, souvent d'intérieur ou balcon.",
    detailed: "Systèmes de 100-1000 litres, souvent en kit. Poissons recommandés : poissons rouges, guppys, tilapias nains. Plantes : herbes aromatiques, salades, plantes décoratives. Défis : stabilité plus difficile dans les petits volumes, gestion précise des paramètres. Idéal pour l'éducation et l'autoconsommation.",
    category: "Système",
    slug: "aquaponie-domestique"
  },
  {
    id: 175,
    term: "Aquaponie commerciale",
    definition: "Système à grande échelle pour la production marchande.",
    detailed: "Superficie de plusieurs centaines de m² à plusieurs hectares. Production intensive de légumes et poissons pour la vente. Systèmes souvent hautement automatisés (CHIFT PIST, DWC). Rentabilité dépendante des coûts énergétiques, du marché local et du savoir-faire. Planification rigoureuse nécessaire.",
    category: "Système",
    slug: "aquaponie-commerciale"
  },
  {
    id: 176,
    term: "Aquaponie communautaire",
    definition: "Système partagé à l'échelle d'un quartier ou d'une communauté.",
    detailed: "Combine production alimentaire, éducation et lien social. Géré collectivement par des bénévoles ou une association. Formats : serre partagée, système dans une école ou un centre communautaire. Défis : gestion du système en collectivité, maintenance régulière, répartition des récoltes.",
    category: "Système",
    slug: "aquaponie-communautaire"
  },
  {
    id: 177,
    term: "Rendement",
    definition: "Quantité produite par unité de surface ou de volume en aquaponie.",
    detailed: "Varie selon les espèces et le système. Exemples : laitue : 30-50 têtes/m²/an ; tilapia : 20-50 kg/m³/an. Supérieur à l'agriculture conventionnelle pour certains légumes-feuilles. Facteurs influençant : lumière, température, charge biologique, expérience du cultivateur.",
    category: "Technique",
    slug: "rendement"
  },
  {
    id: 178,
    term: "Densité de poissons",
    definition: "Nombre ou poids de poissons par unité de volume d'eau.",
    detailed: "Exprimée en kg/m³. Pour les systèmes media bed : 10-20 kg/m³ (débutants), 20-40 kg/m³ (expérimentés). Pour DWC avec biofiltre séparé : jusqu'à 60 kg/m³. Trop élevée : stress, maladies, mortalité. Trop faible : production insuffisante de nutriments.",
    category: "Paramètres",
    slug: "densite-poissons"
  },
  {
    id: 179,
    term: "Solides en suspension",
    definition: "Particules organiques et minérales flottant dans l'eau.",
    detailed: "Les déchets de poissons, aliments non consommés, débris végétaux. Doivent être contrôlés car consomment de l'oxygène en se décomposant et peuvent obstruer les racines. Méthodes de contrôle : décanteur, filtre mécanique, vers de compost (vermifiltre). Objectif : eau claire mais pas stérile.",
    category: "Paramètres",
    slug: "solides-suspension"
  },
  {
    id: 180,
    term: "Vermifiltre",
    definition: "Filtre biologique utilisant des vers de compost pour dégrader les solides.",
    detailed: "Bac rempli de litière (fibre de coco, copeaux) peuplé de vers Eisenia fetida. L'eau traverse le vermifiltre où les vers consomment les particules organiques. Réduit considérablement l'accumulation de boues. Produit du vermicompost comme engrais supplémentaire. Placement après le décanteur.",
    category: "Équipement",
    slug: "vermifiltre"
  },
  {
    id: 181,
    term: "Vers de compost",
    definition: "Vers épigés décomposant la matière organique en vermicompost.",
    detailed: "Eisenia fetida (ver tiger) ou Eisenia hortensis. Se nourrissent des déchets organiques, les transformant en castings riches en nutriments. Utilisés dans les vermifiltres en aquaponie. Conditions idéales : température 15-25°C, humidité 70-80%, pH 6-8. Ne s'échappent pas dans le système si conditions optimales.",
    category: "Biologie",
    slug: "vers-compost"
  },
  {
    id: 182,
    term: "Micro-organismes bénéfiques",
    definition: "Ensemble de bactéries, champignons et protozoaires utiles au système.",
    detailed: "Au-delà des bactéries nitrifiantes : bactéries décomposeuses (aérobies et anaérobies facultatives), champignons mycorhiziens (symbiose avec racines), protozoaires régulant les populations bactériennes. Un écosystème microbien diversifié contribue à la stabilité et résilience du système.",
    category: "Biologie",
    slug: "microorganismes-benefiques"
  },
  {
    id: 183,
    term: "Bio-augmentation",
    definition: "Ajout délibéré de micro-organismes bénéfiques pour améliorer le système.",
    detailed: "Produits commerciaux contenant des souches sélectionnées de bactéries nitrifiantes, dénitrifiantes, ou décomposeuses. Utile lors du démarrage pour accélérer la maturation, ou après un traitement médicamenteux pour reconstituer la flore. Efficacité variable selon les produits et conditions.",
    category: "Technique",
    slug: "bio-augmentation"
  },
  {
    id: 184,
    term: "Dénitrification",
    definition: "Processus anaérobie transformant les nitrates en azote gazeux.",
    detailed: "Effectué par des bactéries spécifiques (Pseudomonas, Paracoccus) en absence d'oxygène. Peut se produire accidentellement dans les zones anaérobies (pertes d'azote). Peut être provoqué volontairement dans un réacteur anaérobie séparé pour réduire l'excès de nitrates. Rarement utilisé en aquaponie standard.",
    category: "Biologie",
    slug: "denitrification"
  },
  {
    id: 185,
    term: "Minéralisation",
    definition: "Conversion de la matière organique en formes minérales assimilables.",
    detailed: "Les déchets solides (fèces, aliments non consommés) sont progressivement décomposés par des bactéries et champignons en ammonium puis en nitrates. Processus lent dans un système aquaponique standard. Les vermifiltres accélèrent la minéralisation via l'action des vers.",
    category: "Biologie",
    slug: "mineralisation"
  },
  {
    id: 186,
    term: "Azote total",
    definition: "Somme de toutes les formes d'azote dans le système.",
    detailed: "Comprend azote organique, ammoniac, nitrites, nitrates. Suivi important pour comprendre le bilan azoté. Une grande partie de l'azote apporté via la nourriture est incorporée dans la biomasse des poissons et plantes, le reste est perdu par dénitrification ou accumulation.",
    category: "Paramètres",
    slug: "azote-total"
  },
  {
    id: 187,
    term: "Phosphore",
    definition: "Nutriment essentiel pour les plantes, présent dans les déchets de poissons.",
    detailed: "Sous forme de phosphates (PO4³⁻). Les plantes en ont besoin pour la floraison, la fructification et le développement racinaire. Niveaux en aquaponie généralement suffisants si nourriture pour poissons complète. Carence possible : plantes chétives, coloration pourpre des feuilles. Surveiller les niveaux si production fruitière.",
    category: "Paramètres",
    slug: "phosphore"
  },
  {
    id: 188,
    term: "Potassium",
    definition: "Macronutriment essentiel pour la santé globale des plantes.",
    detailed: "K+. Important pour la synthèse des protéines, la régulation hydrique, la résistance aux maladies. Souvent limitant en aquaponie, surtout pour les plantes fruitières. Sources complémentaires : cendre de bois (avec précaution), sulfate de potassium. Signes de carence : bord des feuilles brûlé, croissance réduite.",
    category: "Paramètres",
    slug: "potassium"
  },
  {
    id: 189,
    term: "Calcium",
    definition: "Nutriment important pour la structure cellulaire des plantes et la santé des poissons.",
    detailed: "Ca²+. Essentiel pour la formation des parois cellulaires chez les plantes et des os/écailles chez les poissons. Carence fréquente en aquaponie, surtout dans les eaux douces. Manifestations : pourriture apicale des tomates, nouvelles feuilles déformées. Sources : coquilles d'œufs broyées, chlorure de calcium, gypse.",
    category: "Paramètres",
    slug: "calcium"
  },
  {
    id: 190,
    term: "Magnésium",
    definition: "Élément central de la chlorophylle, essentiel à la photosynthèse.",
    detailed: "Mg²+. Carence courante en aquaponie, surtout avec eau douce. Symptômes : chlorose interveinale commençant par les feuilles âgées. Source : sulfate de magnésium (sel d'Epsom). Dosage prudent (1-2 g/100L). Attention à ne pas augmenter excessivement la conductivité.",
    category: "Paramètres",
    slug: "magnesium"
  },
  {
    id: 191,
    term: "Oligo-éléments",
    definition: "Éléments nutritifs requis en très faibles quantités mais essentiels.",
    detailed: "Fer (Fe), manganèse (Mn), zinc (Zn), cuivre (Cu), bore (B), molybdène (Mo). Présents en traces dans la nourriture pour poissons mais souvent insuffisants pour les plantes. Les carences en fer sont les plus courantes. Supplémentation avec un mélange d'oligo-éléments chélatés pour l'hydroponie.",
    category: "Paramètres",
    slug: "oligo-elements"
  },
  {
    id: 192,
    term: "Conductivité électrique",
    definition: "Mesure des sels minéraux dissous dans l'eau.",
    detailed: "EC, exprimée en mS/cm ou µS/cm. En aquaponie, généralement basse (0.2-1.0 mS/cm) comparé à l'hydroponie (1.5-2.5 mS/cm). Une EC élevée peut indiquer une accumulation de sels non utilisés. Surveillance utile mais moins critique que les tests d'azote.",
    category: "Paramètres",
    slug: "conductivite"
  },
  {
    id: 193,
    term: "Chlorose",
    definition: "Jaunissement des feuilles dû à un manque de chlorophylle.",
    detailed: "Symptôme de diverses carences (azote, fer, magnésium) ou problèmes (pH inapproprié, excès d'eau). Identifier la localisation (jeunes vs vieilles feuilles) et le motif (interveinal ou uniforme) pour diagnostiquer. Traitement selon la cause : ajustement pH, supplémentation en nutriments.",
    category: "Santé",
    slug: "chlorose"
  },
  {
    id: 194,
    term: "Nécrose",
    definition: "Mort localisée de tissus végétaux, souvent sur les bords des feuilles.",
    detailed: "Apparition de tissus bruns ou noirs, secs ou humides. Causes : brûlure par excès de sels, carence en potassium ou calcium, maladie fongique ou bactérienne, dommages physiques. Identifier la cause avant d'intervenir. Éliminer les parties nécrosées pour éviter la propagation.",
    category: "Santé",
    slug: "necrose"
  },
  {
    id: 195,
    term: "Brûlure des feuilles",
    definition: "Dessèchement des extrémités et bords des feuilles.",
    detailed: "Souvent due à un excès de sels minéraux (engrais) ou à un arrosage irrégulier en hydroponie. En aquaponie, moins fréquent car la solution nutritive est généralement diluée. Peut être causé par un vent sec ou une lumière trop intense. Vérifier la conductivité et ajuster si nécessaire.",
    category: "Santé",
    slug: "brulure-feuilles"
  },
  {
    id: 196,
    term: "Élongation",
    definition: "Croissance excessive des tiges entre les nœuds, donnant des plantes grêles.",
    detailed: "Symptôme de manque de lumière : les plantes s'étirent pour chercher la lumière. Résultat : tiges faibles, feuilles espacées, plantes peu productives. Solution : augmenter l'intensité lumineuse ou rapprocher les sources de lumière. Peut aussi être causé par un excès d'azote.",
    category: "Santé",
    slug: "elongation"
  },
  {
    id: 197,
    term: "Plants rabougris",
    definition: "Plantes de petite taille avec développement insuffisant.",
    detailed: "Multiples causes : carences nutritionnelles (azote, phosphore), pH inapproprié, températures trop basses, système racinaire endommagé, parasites, maladie. Analyser tous les paramètres. Les plantes rabougries en aquaponie indiquent souvent un problème systémique plutôt qu'isolé.",
    category: "Santé",
    slug: "plants-rabougris"
  },
  {
    id: 198,
    term: "Comportement des poissons",
    definition: "Indicateur visible de la santé et du bien-être des poissons.",
    detailed: "Signes de bonne santé : nage active, appétit vorace, couleurs vives, branchies rouges. Signes de problèmes : apathie, nage en surface (manque d'oxygène), frottements contre les parois (parasites), perte d'appétit, regroupement près de l'entrée d'eau. Observer quotidiennement pendant la distribution de nourriture.",
    category: "Santé",
    slug: "comportement-poissons"
  },
  {
    id: 199,
    term: "Quarantaine",
    definition: "Période d'isolement des nouveaux poissons avant introduction dans le système principal.",
    detailed: "Essentielle pour éviter l'introduction de maladies. Durée : 2-4 semaines dans un bac séparé avec conditions similaires. Observer l'apparition de symptômes. Traiter si nécessaire avant introduction. Appliquer aussi pour les plantes provenant de sources extérieures (risque de parasites).",
    category: "Technique",
    slug: "quarantaine"
  },
  {
    id: 200,
    term: "Vaccination des poissons",
    definition: "Méthode de prévention des maladies en aquaculture, rare en aquaponie domestique.",
    detailed: "Pratiquée en élevage commercial pour des maladies spécifiques (furonculose, vibriose). Méthodes : immersion, injection, spray. Difficile à mettre en œuvre pour les petits systèmes. La prévention par de bonnes conditions d'élevage reste la meilleure approche en aquaponie.",
    category: "Santé",
    slug: "vaccination-poissons"
  },
  {
    id: 201,
    term: "Traitement médicamenteux",
    definition: "Utilisation de médicaments pour soigner les maladies des poissons.",
    detailed: "Délicat en aquaponie car beaucoup de médicaments affectent les bactéries nitrifiantes et les plantes. Si indispensable : isoler les poissons malades dans un bac hôpital séparé. Éviter formellement : cuivre, vert de malachite, antibiotiques à large spectre dans le système principal. Privilégier les traitements naturels (sel, température) quand possible.",
    category: "Santé",
    slug: "traitement-medicamenteux"
  },
  {
    id: 202,
    term: "Sel non iodé",
    definition: "Chlorure de sodium utilisé comme traitement préventif et curatif léger.",
    detailed: "Concentration préventive : 0,1% (1 g/L). Concentration thérapeutique : 0,3-0,5% (3-5 g/L) pour 10-30 minutes en bain. Efficace contre certains parasites externes, réduit le stress osmotique. Bien toléré par la plupart des poissons d'eau douce aux doses recommandées. Rincer après traitement.",
    category: "Santé",
    slug: "sel-non-iode"
  },
  {
    id: 203,
    term: "Éclairage UV",
    definition: "Lampe ultraviolette stérilisant l'eau en détruisant micro-organismes pathogènes.",
    detailed: "Placement : généralement en by-pass sur le retour d'eau vers le bassin à poissons. Doses variables selon l'objectif (stérilisation complète ou contrôle algal). Avantages : réduit maladies, eau plus claire. Inconvénients : coût, élimine aussi les bons micro-organismes, ne doit pas traiter toute l'eau pour préserver les bactéries nitrifiantes.",
    category: "Équipement",
    slug: "eclairage-uv"
  },
  {
    id: 204,
    term: "Ozonateur",
    definition: "Générateur d'ozone pour désinfecter l'eau et oxyder les matières organiques.",
    detailed: "Technologie avancée pour grands systèmes commerciaux. Ozone (O3) puissant oxydant, détruit pathogènes, décompose les matières organiques. Nécessite un contacteur efficace et une désozonation avant retour aux poissons. Risque de toxicité pour poissons et humains si mal utilisé. Rare en systèmes domestiques.",
    category: "Équipement",
    slug: "ozonateur"
  },
  {
    id: 205,
    term: "Biocontrôle",
    definition: "Utilisation d'organismes vivants pour lutter contre les ravageurs et maladies.",
    detailed: "Approche écologique privilégiée en aquaponie. Exemples : coccinelles et chrysopes contre pucerons, nématodes bénéfiques contre mouches du terreau, bactéries Bacillus thuringiensis contre chenilles. Compatible avec l'écosystème aquaponique. Plus durable que les pesticides chimiques.",
    category: "Technique",
    slug: "biocontrole"
  },
  {
    id: 206,
    term: "Plantes compagnes",
    definition: "Plantes cultivées ensemble pour des bénéfices mutuels.",
    detailed: "En aquaponie : basilic avec tomates (repousse certains insectes), œillets d'Inde contre les nématodes, ciboulette contre les pucerons. Associer des plantes à racines profondes et superficielles, ou à cycles différents. Maximise l'utilisation de l'espace et des nutriments.",
    category: "Technique",
    slug: "plantes-compagnes"
  },
  {
    id: 207,
    term: "Rotation des cultures",
    definition: "Changement planifié des espèces cultivées dans un même espace.",
    detailed: "Appliqué en aquaponie pour éviter l'épuisement sélectif de certains nutriments et rompre les cycles des ravageurs. Exemple : laitue (légume-feuille) → tomate (légume-fruit) → haricot (légumineuse) → radis (racine). Adapté aux systèmes commerciaux avec plusieurs bacs de culture.",
    category: "Technique",
    slug: "rotation-cultures"
  },
  {
    id: 208,
    term: "Culture intercalaire",
    definition: "Cultiver plusieurs espèces simultanément dans le même espace.",
    detailed: "En aquaponie : planter des radis à croissance rapide entre des plants de choux à croissance lente. Maximise la productivité par unité de surface. Choisir des plantes compatibles en termes de besoins en lumière, espace racinaire et nutriments. Attention à ne pas surcharger le système.",
    category: "Technique",
    slug: "culture-intercalaire"
  },
  {
    id: 209,
    term: "Durée du jour",
    definition: "Nombre d'heures de lumière quotidienne influençant la croissance et floraison.",
    detailed: "Les plantes sont classées en plantes de jours courts, longs, ou indifférentes. En aquaponie indoor, contrôlable via l'éclairage artificiel. La plupart des légumes-feuilles sont indifférents, mais les plantes fruitières (tomates, fraises) nécessitent souvent des jours longs pour fleurir. À considérer pour la planification des cultures.",
    category: "Paramètres",
    slug: "duree-jour"
  },
  {
    id: 210,
    term: "Photopériode",
    definition: "Durée journalière d'exposition à la lumière, paramètre contrôlable en culture indoor.",
    detailed: "Pour la croissance végétative : 14-18 heures de lumière. Pour la floraison : 10-12 heures (plantes de jours courts) ou 14-18 heures (plantes de jours longs). Programmable avec des minuteries. Changement progressif recommandé pour éviter le stress. Important pour synchroniser les productions commerciales.",
    category: "Paramètres",
    slug: "photoperiode"
  },
  {
    id: 211,
    term: "Intensité lumineuse",
    definition: "Quantité de lumière reçue par unité de surface, mesurée en lux ou PAR.",
    detailed: "PAR (Photosynthetically Active Radiation) plus pertinent : 200-400 µmol/m²/s pour légumes-feuilles, 400-600 pour légumes-fruits. Mesurable avec un luxmètre ou PARmètre. En extérieur : 1000-2000 µmol/m²/s en plein soleil. En indoor : dépend des lampes et de la distance aux plantes.",
    category: "Paramètres",
    slug: "intensite-lumineuse"
  },
  {
    id: 212,
    term: "Spectre lumineux",
    definition: "Répartition des longueurs d'onde de la lumière, importante pour la photosynthèse.",
    detailed: "Les plantes utilisent principalement le bleu (400-500 nm) pour la croissance végétative et le rouge (600-700 nm) pour la floraison et fructification. Les LED modernes permettent d'ajuster le spectre. Lumière blanche chaude équilibrée généralement suffisante pour la plupart des cultures en aquaponie.",
    category: "Paramètres",
    slug: "spectre-lumineux"
  },
  {
    id: 213,
    term: "Ventilation",
    definition: "Mouvement d'air autour des plantes, crucial pour la santé et la pollinisation.",
    detailed: "Prévient les maladies fongiques (oïdium, botrytis), renforce les tiges, favorise les échanges gazeux. En serre : ventilateurs oscillants. En intérieur : petits ventilateurs dirigés indirectement vers les plantes. Éviter les courants d'air forts directement sur les plantes. Important pour la pollinisation des plantes fruitières.",
    category: "Équipement",
    slug: "ventilation"
  },
  {
    id: 214,
    term: "Humidité relative",
    definition: "Pourcentage de vapeur d'eau dans l'air, influençant la transpiration et les maladies.",
    detailed: "Plage idéale : 40-70%. Trop basse (<30%) : stress hydrique, brûlure des feuilles. Trop élevée (>80%) : favorise maladies fongiques, réduit la transpiration. Contrôlable avec humidificateurs, déshumidificateurs, ventilation. Varie selon stade de croissance (plus élevée pour semis).",
    category: "Paramètres",
    slug: "humidite-relative"
  },
  {
    id: 215,
    term: "Pollinisation manuelle",
    definition: "Transfert artificiel du pollen pour assurer la fructification.",
    detailed: "Nécessaire en culture indoor ou serre fermée où les insectes pollinisateurs sont absents. Méthodes : vibration douce des fleurs (tomates, aubergines), pinceau fin (courgettes, melons), secouage des plantes. Effectuer le matin lorsque le pollen est mature. Fréquence : tous les 2-3 jours pendant la floraison.",
    category: "Technique",
    slug: "pollinisation-manuelle"
  },
  {
    id: 216,
    term: "Bourgeons floraux",
    definition: "Structures donnant naissance aux fleurs, précurseurs des fruits.",
    detailed: "Leur apparition signale le passage de la croissance végétative à la phase reproductive. Influencée par la photopériode, la température, l'âge de la plante et les nutriments. En aquaponie, certaines plantes peuvent retarder la floraison si l'azote est trop abondant (priorité aux feuilles).",
    category: "Biologie",
    slug: "bourgeons-floraux"
  },
  {
    id: 217,
    term: "Fruitification",
    definition: "Processus de formation et développement des fruits après la pollinisation.",
    detailed: "Phase critique nécessitant des niveaux adéquats de potassium, phosphore et calcium. En aquaponie, les plantes fruitières peuvent montrer des carences (pourriture apicale des tomates par manque de calcium). Soutenir par des suppléments si nécessaire. Récolter régulièrement pour stimuler la production continue.",
    category: "Biologie",
    slug: "fruitification"
  },
  {
    id: 218,
    term: "Récolte des poissons",
    definition: "Prélèvement des poissons arrivés à maturité commerciale.",
    detailed: "Méthodes : épuisette, vidange partielle du bassin, piège. Pour minimiser le stress : effectuer à jeun, de préférence tôt le matin par temps frais. Méthode d'abattage recommandée : immersion dans l'eau glacée (anesthésie puis mort rapide). Respecter les réglementations locales sur l'abattage.",
    category: "Technique",
    slug: "recolte-poissons"
  },
  {
    id: 219,
    term: "Taille des plantes",
    definition: "Suppression de certaines parties pour orienter la croissance et la production.",
    detailed: "Pratiques courantes en aquaponie : pincement des apex pour faire ramifier le basilic, élimination des gourmands des tomates, effeuillage partiel pour aérer. Effectuer avec des outils propres pour éviter les maladies. Ne pas tailler trop sévèrement pour ne pas stresser la plante.",
    category: "Technique",
    slug: "taille-plantes"
  },
  {
    id: 220,
    term: "Bilan économique",
    definition: "Évaluation des coûts et revenus d'un système aquaponique.",
    detailed: "Coûts : installation (bassins, pompes, structure), énergie (pompes, éclairage, chauffage), aliments pour poissons, plants/semences, main d'œuvre. Revenus : vente de poissons, plantes, services (visites, formations). Période d'amortissement variable (2-5 ans pour les systèmes commerciaux). L'autoconsommation modifie le calcul.",
    category: "Technique",
    slug: "bilan-economique"
  }
];

export const categoriesAquaponie = [
  "Tous",
  "Général",
  "Système",
  "Poissons",
  "Plantes",
  "Bactéries",
  "Équipement",
  "Paramètres",
  "Santé",
  "Technique",
  "Produits",
  "Biologie"
];