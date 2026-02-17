/* ==========================================================================
   AgentAIBank.com — Main Script (i18n + Scroll Reveal)
   ========================================================================== */

// --- TRANSLATIONS ---
const translations = {
  cs: {
    // Nav
    patentBadge: 'Patent Pending',

    // Hero
    heroPretitle: 'Chybějící infrastruktura',
    heroTitle: 'Lidi mají banky od roku 1472. <br>Stroje nemají nic.',
    heroSub: 'Každý AI agent na světě umí myslet. Mluvit. Rozhodovat se. Žádný z nich neumí vypořádat.',
    heroAside: 'Est. 2025 — Ostrava, Česká republika',
    scrollHint: 'scroll',

    // 01 — Problém
    s01Label: '01 — Problém',
    s01Title: 'Stroje transakují. Nikdo nezúčtuje.',
    s01P1: 'Tvoje auto prodá energii do sítě. Platba přijde za tři týdny. Dva AI agenti uzavřou deal. Žádný z nich nenese odpovědnost. Robot svaří díl. Kvalita selže. Audit trail říká: <em>neznámý.</em>',
    s01P2: 'Dali jsme strojům inteligenci. Dali jsme jim hlas. Dali jsme jim autonomii. Zapomněli jsme jim dát <strong>odpovědnost.</strong>',

    // Timeline
    tl1472: 'Banca Monte dei Paschi di Siena. Lidi dostali bankovnictví.',
    tl1973: 'SWIFT. Banky si začaly povídat.',
    tl2009: 'Bitcoin. Stroje dostaly účetní knihu. Lidi dostali nadšení.',
    tl2024: 'AI agenti všude. Infrastruktura pro vypořádání? Nula.',
    tl2025: 'Začali jsme to řešit. Z vesnice s 200 lidmi.',

    // 01b — Use cases
    s01bLabel: '01b — Co bychom mohli vyřešit',
    s01bTitle: '10 věcí, které stroje dělají. A nikdo za to nenese odpovědnost.',

    uc01Title: 'Tvoje auto prodává energii do sítě.',
    uc01Text: 'Platba přijde za tři týdny. Mohli bychom to vypořádat v reálném čase. Atomicky. Auto dodá, síť zaplatí, pojišťovna kryje — všechno najednou, nebo nic.',
    uc02Title: 'Dron doručí balík.',
    uc02Text: 'Cestou ho shodí vítr. Kdo nese odpovědnost? Mohli bychom to mít jasné ještě před vzletem. Každá strana podepsaná, každá podmínka definovaná, každý scénář pokrytý.',
    uc03Title: 'Sousedé si prodávají solární energii.',
    uc03Text: 'Střecha vyrábí, soused spotřebovává, síť balancuje. Mohli bychom to vypořádat tři strany najednou, v reálném čase, bez faktur z roku 1998.',
    uc04Title: 'Robot svaří díl v továrně.',
    uc04Text: 'Kamera říká: špatný svar. Mohli bychom mít audit trail, který v milisekundě řekne: robot podepsal teplotu, linka podepsala pozici, ERP podepsalo dávku. Odpovědnost přiřazená automaticky.',
    uc05Title: 'Dva AI agenti uzavřou obchod.',
    uc05Text: 'Agent A objedná. Agent B dodá. Výstup je halucinace. Mohli bychom to mít ošetřené — identita, odpovědnost, kůže ve hře. Ještě před prvním tokenem.',
    uc06Title: 'Kontejner pluje přes oceán.',
    uc06Text: 'Senzory, celnice, banka, pojišťovna, prodejce. Pět stran, pět systémů. Mohli bychom to spojit do jedné transakce. Všechno najednou, nebo nic. Ne Letter of Credit z roku 1850.',
    uc07Title: 'Autonomní truck jede přes tři země.',
    uc07Text: 'Německo, Rakousko, Česko. Tři jurisdikce. Mohli bychom mít compliance vloženou přímo v transakci. Per-země, per-pravidlo, automaticky. Truck to ví ještě před startem.',
    uc08Title: 'Nemocnice trénují AI na datech pacientů.',
    uc08Text: 'Tři nemocnice, žádná nechce sdílet data. Mohli bychom kryptograficky dokázat, že každá přispěla kvalitními daty — bez toho, aby ta data kdokoliv viděl. Důvěra nahrazená matematikou.',
    uc09Title: 'Továrna objednává prediktivní údržbu.',
    uc09Text: 'Senzor, dodavatel, pojišťovna. Tři podmínky. Mohli bychom to spojit do jedné atomické transakce. Splněno všechno = provedeno. Nesplněno cokoliv = nic. Žádné volání, mailování, čekání.',
    uc10Title: 'Carbon credit změní vlastníka.',
    uc10Text: 'Mohli bychom garantovat, že ten samý kredit nebyl prodán dvakrát. Ne manuálním registrem. Ne lidskou kontrolou. Protokolem. Na úrovni infrastruktury.',

    closerP1: 'Deset příkladů. Jeden vzorec. Mohli bychom to vyřešit. Všechno najednou.',
    closerP2: 'Máme na to patent pending. Architektura je navržená. Validovaná proti GDPR, EU AI Act a zdravému rozumu.',
    closerP3: 'Full patent čeká, až to nadefinujeme spolu. S někým, kdo staví reálné systémy, ne PowerPointy.',

    // 02 — Filozofie
    s02Label: '02 — Filozofie',
    s02Title: 'Ne platební systém. Architektura odpovědnosti.',
    s02P1: 'Všichni v Silicon Valley staví trubky, aby si stroje povídaly. Protokoly, aby se agenti našli. Frameworky, aby spolupracovali.',
    s02P2: 'Nikdo nestaví vrstvu, která řekne: <strong>kdo je zodpovědný, když se něco posere.</strong>',
    s02P3: 'My ano.',
    s02P4: 'Ne proto, že je to sexy. Není. Infrastruktura pro vypořádání je ta nejnudnější, nejneviditelnější a nejkritičtější vrstva v každé ekonomice. Platilo to pro lidi v roce 1472. Platí to pro stroje teď.',
    s02Quote: 'Pokud žádná změna stavu není validní bez přiřazené odpovědnosti — pak každá akce má vlastníka. Každá transakce má stopu. A každý stroj má kůži ve hře.',
    s02QuoteSource: '— Základní designový princip',

    // 02b — Co nejsme
    s02bLabel: '02b — Co nejsme',
    s02bText: 'Nejsme blockchain. Nejsme startup. Nejsme platební systém. Nehledáme investory. Neděláme PowerPointy. Nepotřebujeme vaše peníze. Potřebujeme vaše inženýry.',

    // 03 — Co stavíme
    s03Label: '03 — Co stavíme',
    s03Title: 'Pravidla jsou jednoduchá.',
    pr01Title: 'Atomické. Všechno nebo nic.',
    pr01Text: 'Transakce proběhne POUZE když VŠECHNY strany splní VŠECHNY podmínky. Když jedna selže — všechno se vrátí. Žádné mezistaty. Žádné "ups." Žádné "opravíme to potom."',
    pr02Title: 'N-stran. Ne jen dvě.',
    pr02Text: 'Reálný svět není bilaterální. Auto, síť, pojišťovna, trh, regulátor — všichni v jedné transakci. 2 strany. Nebo 200. Protokolu je to jedno.',
    pr03Title: 'Odpovědné. Od základu.',
    pr03Text: 'Každá akce kryptograficky podepsaná. Každý účastník identifikovaný. Každá změna stavu přiřazená. Ne jako funkce. Jako požadavek. Bez podpisu žádná transakce.',
    pr04Title: 'Compliantní. Ne dodatečně.',
    pr04Text: 'GDPR. EU AI Act. Právo na výmaz. Audit trail. Kill-switch. Zabudované v protokolu, ne přilepené. Protože regulátora nezajímá tvoje architektura — zajímá ho tvoje odpovědnost.',
    pr05Title: 'Žádný blockchain. Žádný bullshit.',
    pr05Text: 'Globální konsensus milionů pro transakci mezi třemi? To není architektura. To je divadlo. Používáme lokální konsensus mezi přímými účastníky. Milisekundy, ne minuty. HTTP, ne hype.',

    // 03b — Origin
    s03bLabel: '03b — Jak to vzniklo',
    s03bP1: 'Neřešili jsme machine economy. Řešili jsme svůj malý problém — jak udělat, aby normální lidi mohli používat AI, aniž by věděli co je API. A náhodou jsme vyřešili ten velký.',
    s03bP2: 'Nikdo v San Francisku tohle nehledal zdola. Všichni řešili trilionový problém top-down. McKinsey reporty za dva miliony. Armády analytiků. A výsledek? Paralýza. Příliš velké = nikdy nezačnou.',
    s03bP3: 'My jsme začali s jedním problémem. A skončili s protokolem.',

    // 04 — Jedno číslo
    s04Label: '04 — Jedno číslo',
    s04P1: 'Miliardy strojových transakcí denně. Clearing vrstva pro ně?',
    s04Meta: 'Jako by internet neměl DNS.',

    // 05 — Kam jdeme
    s05Label: '05 — Kam jdeme',
    s05Title: 'Strojová ekonomika potřebuje clearingovou vrstvu.',
    s05Sub: 'Ne zítra. Teď.',
    s05P1: 'AI agenti jsou nasazováni každou velkou technologickou firmou na světě. Autonomní vozidla vyjednávají s infrastrukturou. Továrny běží na machine-to-machine operacích ve velkém. Energetické sítě se mění na peer-to-peer trhy.',
    s05P2: 'Všichni potřebují totéž: způsob, jak <strong>transakovat s odpovědností.</strong> Atomicky. S audit trailem. S regulatorní compliance. S kůží ve hře.',
    s05P3: 'Tohle stavíme. Tu nudnou, neviditelnou, kritickou vrstvu pod tím vším.',
    rmBase: 'Základ',
    rmBaseText: 'Protokol navržen. Patent podán. Validováno proti GDPR, EU AI Act a zdravému rozumu.',
    rmNow: 'Teď',
    rmNowText: 'Hledáme anchor partnery. Ne investory. Inženýry a firmy, které chápou, že strojová ekonomika potřebuje instalatéry, ne básníky.',
    rmHorizon: 'Horizont',
    rmHorizonText: 'Otevřený standard. Protože infrastruktura patří všem. Nebo nikomu. Nic mezi tím neexistuje.',

    // 06 — EU AI Act
    s06Label: '06 — EU AI Act',
    s06Title: 'EU AI Act. Co platí. Co se posunulo. A proč to není výmluva.',
    s06Intro: 'Sledujeme to. Reagujeme. A víme, co to znamená pro infrastrukturu, kterou stavíme.',

    regNowTitle: 'Co už platí — teď, dnes, bez výjimky',
    regArt4Title: 'Únor 2025 — Článek 4: AI gramotnost',
    regArt4Text: 'Každý, kdo vyvíjí nebo nasazuje AI systémy, musí zajistit dostatečnou úroveň AI gramotnosti svých zaměstnanců a všech lidí, kteří s AI pracují. Ne doporučení. Povinnost. Platí od 2. února 2025. Enforcement od srpna 2026 — národními dozorovými orgány v každém členském státě EU.',
    regArt5Title: 'Únor 2025 — Článek 5: Zakázané praktiky',
    regArt5Text: 'Sociální scoring. Manipulativní AI. Biometrická identifikace v reálném čase. Zakázáno. Platí. Pokuty? Až 35 milionů EUR nebo 7 % globálního obratu. Podle toho, co je vyšší.',
    regGpaiTitle: 'Srpen 2025 — GPAI povinnosti',
    regGpaiText: 'Poskytovatelé general-purpose AI modelů — transparentnost, technická dokumentace, pravidla pro trénink. Platí pro všechny nové modely od srpna 2025. Modely na trhu před tímto datem mají čas do srpna 2027.',

    regShiftTitle: 'Co se posunulo — a proč',
    regHrTitle: 'High-risk AI systémy: z srpna 2026 na prosinec 2027',
    regHrText: 'Původní plán: plná aplikace pravidel pro high-risk AI od srpna 2026. Realita: Evropská komise v listopadu 2025 v rámci balíčku Digital Omnibus navrhla posun na prosinec 2027. Proč? Standardizační orgány CEN a CENELEC nestihly vytvořit technické standardy. Členské státy nestihly jmenovat dozorové orgány. Guidelines pro klasifikaci high-risk systémů nebyly hotové včas.',
    regProdTitle: 'AI v regulovaných produktech: až srpen 2028',
    regProdText: 'Pro high-risk AI systémy zabudované do produktů pod existující EU legislativou — nejzazší termín posunutý na srpen 2028.',

    regViewTitle: 'Co to znamená — náš pohled',
    regViewP1: 'Odklad není úleva. Je to iluze času.',
    regViewP2: 'Článek 4 platí TEĎ. Accountability povinnost běží. A kdo nemá infrastrukturu pro audit trail, transparentnost a odpovědnost dnes, nebude ji mít ani za rok. Protože rok navíc bez standardů, bez nástrojů a bez architektury je jen rok navíc ve tmě.',
    regViewP3: 'Posun high-risk pravidel neznamená, že se problém zmenšil. Znamená, že se zvětšilo okno pro ty, kdo začnou stavět teď.',
    regViewP4: 'My jsme začali.',
    regUpdate: 'Poslední aktualizace: únor 2026. Sledujeme vývoj průběžně.',

    // 07 — Kdo
    s07Label: '07 — Kdo',
    s07Title: 'Postaveno v Ostravě. Ne v Silicon Valley.',
    s07P1: 'Nejsem PhD. Nejsem miláček investorů. Neumím programovat. Jsem systémový architekt z české vesnice s 200 lidmi, 30 let v byznysu, a s hlubokým přesvědčením, že pokud stroje budou řídit ekonomiku, někdo se sakra musí postarat o to, aby za to nesly odpovědnost.',
    s07P2: 'Nikdo v San Francisku tohle neřeší. Ne proto, že nemůže. Ale protože je příliš zaneprázdněný stavěním těch <em>sexy</em> částí.',
    s07P3: 'Já stavím instalatérku. A instalatérka funguje.',
    usPatentPending: 'US Patent Pending',

    // TOC (homepage)
    tocLabel: 'Stránky',
    toc01Title: 'Problém + případy',
    toc01Text: 'Miliardy strojových transakcí denně. Žádná clearing vrstva. 10 reálných scénářů, kde stroje jednají — a nikdo za to nenese odpovědnost.',
    toc02Title: 'Filozofie + architektura',
    toc02Text: 'Ne platební systém. Architektura odpovědnosti. Pět principů protokolu, který řeší to, co blockchain slíbil a nesplnil.',
    toc03Title: 'Plán + zákon EU o umělé inteligenci',
    toc03Text: 'Co platí teď. Co se posunulo. A proč odklad regulace není úleva, ale okno pro ty, kdo začnou stavět dnes.',
    toc04Title: 'Kdo + kontakt',
    toc04Text: 'Systémový architekt z české vesnice s 200 lidmi. Žádný PhD. Žádný investor. Jen přesvědčení, že stroje potřebují instalatérku.',

    // Footer
    footerCta: 'Pokud ti tohle rezonuje — a jsi někdo, kdo staví infrastrukturu, ne hype — tak bychom si měli promluvit.',
    footerQuote: '"Stroje potřebují banku. Lidi potřebují rovnici."',
    footerQuoteSource: 'sumofhuman.com',
    footerCopy: '© 2026 Agent AI Bank — a farky.tech project | Ostrava, Czech Republic',
  },

  en: {
    patentBadge: 'Patent Pending',

    heroPretitle: 'The missing infrastructure',
    heroTitle: 'Humans have had banks since 1472. <br>Machines have nothing.',
    heroSub: 'Every AI agent in the world can think. Talk. Decide. None of them can settle.',
    heroAside: 'Est. 2025 — Ostrava, Czech Republic',
    scrollHint: 'scroll',

    s01Label: '01 — The Problem',
    s01Title: 'Machines transact. Nobody settles.',
    s01P1: 'Your car sells energy to the grid. Payment arrives in three weeks. Two AI agents close a deal. Neither bears responsibility. A robot welds a part. Quality fails. Audit trail says: <em>unknown.</em>',
    s01P2: 'We gave machines intelligence. We gave them a voice. We gave them autonomy. We forgot to give them <strong>accountability.</strong>',

    tl1472: 'Banca Monte dei Paschi di Siena. Humans got banking.',
    tl1973: 'SWIFT. Banks started talking.',
    tl2009: 'Bitcoin. Machines got a ledger. Humans got excited.',
    tl2024: 'AI agents everywhere. Settlement infrastructure? Zero.',
    tl2025: 'We started solving it. From a village of 200 people.',

    s01bLabel: '01b — What we could solve',
    s01bTitle: '10 things machines do. And nobody is accountable for.',

    uc01Title: 'Your car sells energy to the grid.',
    uc01Text: 'Payment arrives in three weeks. We could settle it in real time. Atomically. Car delivers, grid pays, insurer covers — all at once, or nothing.',
    uc02Title: 'A drone delivers a package.',
    uc02Text: 'Wind blows it off course. Who is responsible? We could make that clear before takeoff. Every party signed, every condition defined, every scenario covered.',
    uc03Title: 'Neighbors sell solar energy to each other.',
    uc03Text: 'Rooftop produces, neighbor consumes, grid balances. We could settle three parties at once, in real time, without invoices from 1998.',
    uc04Title: 'A robot welds a part in a factory.',
    uc04Text: 'Camera says: bad weld. We could have an audit trail that answers in milliseconds: robot signed the temperature, line signed position, ERP signed the batch. Accountability assigned automatically.',
    uc05Title: 'Two AI agents close a deal.',
    uc05Text: 'Agent A orders. Agent B delivers. Output is a hallucination. We could have it covered — identity, accountability, skin in the game. Before the first token.',
    uc06Title: 'A container sails across the ocean.',
    uc06Text: 'Sensors, customs, bank, insurer, seller. Five parties, five systems. We could connect them in one transaction. All at once, or nothing. Not a Letter of Credit from 1850.',
    uc07Title: 'An autonomous truck drives across three countries.',
    uc07Text: 'Germany, Austria, Czechia. Three jurisdictions. We could embed compliance directly in the transaction. Per-country, per-rule, automatically. The truck knows before it starts.',
    uc08Title: 'Hospitals train AI on patient data.',
    uc08Text: 'Three hospitals, none wants to share data. We could cryptographically prove each contributed quality data — without anyone seeing the data. Trust replaced by mathematics.',
    uc09Title: 'A factory orders predictive maintenance.',
    uc09Text: 'Sensor, supplier, insurer. Three conditions. We could join them into one atomic transaction. Everything met = executed. Anything missing = nothing. No calls, emails, waiting.',
    uc10Title: 'A carbon credit changes ownership.',
    uc10Text: 'We could guarantee the same credit was not sold twice. Not by a manual registry. Not by human oversight. By protocol. At the infrastructure level.',

    closerP1: 'Ten examples. One pattern. We could solve it. All at once.',
    closerP2: 'We have a patent pending. The architecture is designed. Validated against GDPR, EU AI Act, and common sense.',
    closerP3: 'Full patent is waiting until we define it together. With someone who builds real systems, not PowerPoints.',

    s02Label: '02 — Philosophy',
    s02Title: 'Not a payment system. An architecture of accountability.',
    s02P1: 'Everyone in Silicon Valley is building pipes for machines to talk. Protocols for agents to find each other. Frameworks to collaborate.',
    s02P2: 'Nobody is building the layer that says: <strong>who is responsible when something goes wrong.</strong>',
    s02P3: 'We are.',
    s02P4: 'Not because it\'s sexy. It isn\'t. Settlement infrastructure is the most boring, most invisible, and most critical layer in any economy. It was true for humans in 1472. It\'s true for machines now.',
    s02Quote: 'If no state change is valid without assigned accountability — then every action has an owner. Every transaction has a trail. And every machine has skin in the game.',
    s02QuoteSource: '— Core design principle',

    s02bLabel: '02b — What we\'re not',
    s02bText: 'We\'re not blockchain. We\'re not a startup. We\'re not a payment system. We\'re not looking for investors. We don\'t do PowerPoints. We don\'t need your money. We need your engineers.',

    s03Label: '03 — What we build',
    s03Title: 'The rules are simple.',
    pr01Title: 'Atomic. All or nothing.',
    pr01Text: 'A transaction executes ONLY when ALL parties meet ALL conditions. If one fails — everything rolls back. No intermediate states. No "oops." No "we\'ll fix it later."',
    pr02Title: 'N-party. Not just two.',
    pr02Text: 'The real world isn\'t bilateral. Car, grid, insurer, market, regulator — all in one transaction. 2 parties. Or 200. The protocol doesn\'t care.',
    pr03Title: 'Accountable. By design.',
    pr03Text: 'Every action cryptographically signed. Every participant identified. Every state change assigned. Not as a feature. As a requirement. No signature, no transaction.',
    pr04Title: 'Compliant. Not as an afterthought.',
    pr04Text: 'GDPR. EU AI Act. Right to erasure. Audit trail. Kill-switch. Built into the protocol, not bolted on. Because the regulator doesn\'t care about your architecture — they care about your accountability.',
    pr05Title: 'No blockchain. No bullshit.',
    pr05Text: 'Global consensus of millions for a transaction between three? That\'s not architecture. That\'s theater. We use local consensus among direct participants. Milliseconds, not minutes. HTTP, not hype.',

    s03bLabel: '03b — How it started',
    s03bP1: 'We weren\'t solving the machine economy. We were solving our own small problem — how to let normal people use AI without knowing what an API is. And accidentally solved the big one.',
    s03bP2: 'Nobody in San Francisco was looking for this from the bottom up. Everyone was solving the trillion-dollar problem top-down. McKinsey reports for two million. Armies of analysts. And the result? Paralysis. Too big = never start.',
    s03bP3: 'We started with one problem. And ended with a protocol.',

    s04Label: '04 — One number',
    s04P1: 'Billions of machine transactions daily. Clearing layer for them?',
    s04Meta: 'As if the internet had no DNS.',

    s05Label: '05 — Where we\'re going',
    s05Title: 'The machine economy needs a clearing layer.',
    s05Sub: 'Not tomorrow. Now.',
    s05P1: 'AI agents are being deployed by every major tech company in the world. Autonomous vehicles negotiate with infrastructure. Factories run on machine-to-machine operations at scale. Energy grids are transforming into peer-to-peer markets.',
    s05P2: 'Everyone needs the same thing: a way to <strong>transact with accountability.</strong> Atomically. With an audit trail. With regulatory compliance. With skin in the game.',
    s05P3: 'This is what we build. That boring, invisible, critical layer underneath it all.',
    rmBase: 'Foundation',
    rmBaseText: 'Protocol designed. Patent filed. Validated against GDPR, EU AI Act, and common sense.',
    rmNow: 'Now',
    rmNowText: 'Looking for anchor partners. Not investors. Engineers and companies who understand that the machine economy needs plumbers, not poets.',
    rmHorizon: 'Horizon',
    rmHorizonText: 'Open standard. Because infrastructure belongs to everyone. Or no one. Nothing in between exists.',

    s06Label: '06 — EU AI Act',
    s06Title: 'EU AI Act. What\'s in force. What shifted. And why it\'s not an excuse.',
    s06Intro: 'We\'re tracking it. Responding. And we know what it means for the infrastructure we\'re building.',

    regNowTitle: 'What\'s already in force — now, today, no exceptions',
    regArt4Title: 'February 2025 — Article 4: AI Literacy',
    regArt4Text: 'Anyone developing or deploying AI systems must ensure adequate AI literacy of their employees and everyone who works with AI. Not a recommendation. An obligation. In force since February 2, 2025. Enforcement from August 2026 — by national supervisory authorities in every EU member state.',
    regArt5Title: 'February 2025 — Article 5: Prohibited Practices',
    regArt5Text: 'Social scoring. Manipulative AI. Real-time biometric identification. Prohibited. In force. Fines? Up to €35 million or 7% of global turnover. Whichever is higher.',
    regGpaiTitle: 'August 2025 — GPAI Obligations',
    regGpaiText: 'Providers of general-purpose AI models — transparency, technical documentation, training rules. Applies to all new models from August 2025. Models on the market before this date have until August 2027.',

    regShiftTitle: 'What shifted — and why',
    regHrTitle: 'High-risk AI systems: from August 2026 to December 2027',
    regHrText: 'Original plan: full application of high-risk AI rules from August 2026. Reality: The European Commission in November 2025, as part of the Digital Omnibus package, proposed a shift to December 2027. Why? Standardization bodies CEN and CENELEC failed to create technical standards in time. Member states failed to appoint supervisory authorities. Guidelines for classifying high-risk systems weren\'t ready.',
    regProdTitle: 'AI in regulated products: until August 2028',
    regProdText: 'For high-risk AI systems embedded in products under existing EU legislation — the latest deadline pushed to August 2028.',

    regViewTitle: 'What it means — our view',
    regViewP1: 'The delay is not relief. It\'s an illusion of time.',
    regViewP2: 'Article 4 applies NOW. The accountability obligation is running. And those without infrastructure for audit trails, transparency, and accountability today won\'t have it in a year either. Because a year more without standards, without tools, and without architecture is just a year more in the dark.',
    regViewP3: 'The high-risk delay doesn\'t mean the problem shrank. It means the window expanded for those who start building now.',
    regViewP4: 'We\'ve started.',
    regUpdate: 'Last update: February 2026. We track developments continuously.',

    s07Label: '07 — Who',
    s07Title: 'Built in Ostrava. Not in Silicon Valley.',
    s07P1: 'I\'m not a PhD. I\'m not an investor darling. I can\'t code. I\'m a systems architect from a Czech village of 200 people, 30 years in business, with a deep conviction that if machines are going to run the economy, someone damn well needs to make sure they\'re accountable for it.',
    s07P2: 'Nobody in San Francisco is solving this. Not because they can\'t. But because they\'re too busy building the <em>sexy</em> parts.',
    s07P3: 'I build the plumbing. And the plumbing works.',
    usPatentPending: 'US Patent Pending',

    // TOC (homepage)
    tocLabel: 'Pages',
    toc01Title: 'Problem + cases',
    toc01Text: 'Billions of machine transactions daily. No clearing layer. 10 real scenarios where machines act — and nobody is accountable.',
    toc02Title: 'Philosophy + architecture',
    toc02Text: 'Not a payment system. An architecture of accountability. Five protocol principles that solve what blockchain promised and never delivered.',
    toc03Title: 'Roadmap + EU AI Act',
    toc03Text: 'What\'s in force now. What shifted. And why the regulatory delay isn\'t relief — it\'s a window for those who start building today.',
    toc04Title: 'Who + contact',
    toc04Text: 'A systems architect from a Czech village of 200 people. No PhD. No investors. Just conviction that machines need plumbing.',

    footerCta: 'If this resonates — and you\'re someone who builds infrastructure, not hype — we should talk.',
    footerQuote: '"Machines need a bank. Humans need an equation."',
    footerQuoteSource: 'sumofhuman.com',
    footerCopy: '© 2026 Agent AI Bank — a farky.tech project | Ostrava, Czech Republic',
  }
};

// --- LANGUAGE LOGIC ---
let currentLang = localStorage.getItem('aab-lang') || 'cs';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aab-lang', lang);

  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

// --- SCROLL REVEAL ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);

  // Language switcher click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Scroll reveal
  initScrollReveal();

  // Scroll hint click
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    scrollHint.addEventListener('click', () => {
      const firstSection = document.querySelector('.section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    scrollHint.style.cursor = 'pointer';
  }
});
