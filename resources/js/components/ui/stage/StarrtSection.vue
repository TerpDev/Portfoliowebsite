<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { BookOpen, Target, Wrench, RefreshCcw, Repeat } from 'lucide-vue-next';

import AnimatedTabs from '@/components/ui/stage/AnimatedTabs.vue';

type StarrtSectionKey = 'situatie' | 'taak' | 'actie' | 'resultaat' | 'reflectie' | 'transfer';

type StarrtItem = {
    id: string;
    label: string;
    werkproces?: string;
    sections: Record<StarrtSectionKey, { title: string; icon: any; paragraphs: string[] }>;
};

const tabs = [
    { id: 'starrt1', label: 'Werkplek en werkomgeving' },
    { id: 'starrt2', label: 'Ontwikkeling van Cube Wiki' },
    { id: 'starrt3', label: 'Ontwikkeling van Filament Wiki' },
    { id: 'starrt4', label: 'Functionaliteiten Filament Wiki' },
    { id: 'starrt5', label: 'Oplevering & repository' },
    { id: 'starrt6', label: 'SSH-tool' },
];

const starrtItems: StarrtItem[] = [
    {
        id: 'starrt1',
        label: 'STARRT 1 – Werkplek en werkomgeving',
        werkproces: 'Samenwerken in een professionele werkomgeving en communiceren met collega’s en begeleiders.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Tijdens mijn stage bij Cube kreeg ik beschikking over een MacBook om op te werken. Mijn werkplek bevond zich op kantoor, waar ik samen met collega’s in een prettige en professionele omgeving kon werken. Dit bood een fijne sfeer waarin ik mij goed kon concentreren en mijn werkzaamheden zelfstandig kon uitvoeren.',
                    'Wanneer ik vragen had of ergens tegenaan liep, kon ik altijd terecht bij mijn praktijkopleider (eerst Ties, later Kevin) of andere collega’s. Daarnaast had ik iedere maandag een vast gesprek om de voortgang te bespreken en hoe het in het algemeen ging.',
                    'In de pauzes lunchten we gezamenlijk aan de bar en werd er door sommige collega’s een stukje gelopen en in mijn geval vaak even gevoetbald.',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was het uitvoeren van mijn stageopdracht binnen Cube in een professionele werkomgeving. Hierbij was het belangrijk dat ik zelfstandig kon werken, maar ook wist wanneer ik vragen moest stellen.',
                    'Voor mijn werkzaamheden had ik geen complexe materialen nodig: vooral een MacBook, een rustige werkplek, toegang tot documentatie en begeleiding wanneer nodig.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Ik werkte dagelijks zelfstandig aan mijn opdracht en hield mijn voortgang bij.',
                    'Wanneer ik ergens tegenaan liep, stelde ik vragen aan mijn praktijkopleider of collega’s.',
                    'Tijdens het vaste overleg op maandag besprak ik mijn voortgang, ontving ik feedback en verwerkte ik die direct.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'Door de vaste structuur (zelfstandig werken + wekelijkse check-in) bleef ik goed in control over mijn stageopdracht en kon ik snel bijsturen wanneer dat nodig was.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: [
                    'Ik vond dat ik prettig heb gewerkt in deze omgeving. De combinatie van zelfstandig werken en goede begeleiding werkte voor mij erg goed.',
                    'De volgende keer zou ik sommige vragen misschien wat eerder willen stellen, zodat ik nog sneller door kan pakken.',
                ],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: ['Deze manier van werken en communiceren kan ik zeker toepassen bij andere stages of toekomstige banen.'],
            },
        },
    },
    {
        id: 'starrt2',
        label: 'STARRT 2 – Ontwikkeling van Cube Wiki',
        werkproces: 'Ontwerpen en realiseren van softwareoplossingen.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Mijn stageopdracht richtte zich op de ontwikkeling van Cube Wiki: een SaaS-platform voor het beheren van documentatie. Cube Wiki is bedoeld om documentatie centraal te beheren en beschikbaar te maken voor verschillende toepassingen binnen en buiten Cube.',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was het ontwikkelen van Cube Wiki als backend-applicatie. Cube Wiki moest documentatie, categorieën en navigatiestructuren kunnen beheren en een API bieden waarmee deze gegevens opgehaald kunnen worden.',
                    'Hiervoor gebruikte ik Laravel en Filament.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Ik begon met het ontwerpen van een ERD (Entity Relationship Diagram) om de datastructuur inzichtelijk te maken.',
                    'Vervolgens heb ik de basis van Cube Wiki opgezet met Laravel en Filament. Daarna heb ik de benodigde migrations en models aangemaakt en correct uitgevoerd.',
                    'Daarna heb ik een Filament Panel ingericht en de benodigde Resources toegevoegd zodat alles beheersbaar werd vanuit een admin-omgeving.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'Cube Wiki stond als backend goed neer: de basis-data structuur werkte, beheer kon via Filament, en de API-laag was een duidelijke fundering voor andere toepassingen.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: [
                    'Ik vond dit een belangrijk onderdeel van mijn stage. Door stap voor stap te werken hield ik goed overzicht.',
                    'In het begin was het soms even zoeken, maar gaandeweg kreeg ik steeds meer grip op het project.',
                ],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: ['Deze kennis die ik heb opgedaan kan ik zeker goed gebruiken in andere backend- en SaaS-projecten.'],
            },
        },
    },
    {
        id: 'starrt3',
        label: 'STARRT 3 – Ontwikkeling van Filament Wiki',
        werkproces: 'Ontwikkelen van herbruikbare softwarecomponenten.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Toen Cube Wiki goed werkte (API endpoints etc.) ben ik gestart met het ontwikkelen van Filament Wiki. Dit is een Filament package die documentatie vanuit Cube Wiki kan tonen binnen een Filament omgeving via de API.',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was het ontwikkelen van een Filament Wiki package die via de API documentatie ophaalt uit Cube Wiki en deze weergeeft in een aparte Filament omgeving.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Ik heb een package skeleton gebruikt als basis. In het begin was het lastig om te bepalen waar ik moest beginnen, omdat package development nieuw voor mij was.',
                    'Met behulp van documentatie en overleg met mijn praktijkopleider ben ik de structuur en werking beter gaan begrijpen.',
                    'Daarna heb ik Filament geïntegreerd en een panel gemaakt waarin de Markdown content via de API wordt opgehaald en weergegeven.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'De package werkte zoals bedoeld: documentatie vanuit Cube Wiki kon in een Filament omgeving bekeken worden, waardoor het herbruikbaar werd binnen meerdere projecten.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: [
                    'Ik heb hiervan echt veel geleerd. Package development was nieuw voor mij en Filament ook.',
                    'Door door te werken, goede vragen te stellen en veel online uit te zoeken, ben ik het steeds beter gaan begrijpen.',
                ],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: ['Deze kennis kan ik toepassen in andere Filament projecten en natuurlijk ook in bredere Laravel projecten.'],
            },
        },
    },
    {
        id: 'starrt4',
        label: 'STARRT 4 – Functionaliteiten Filament Wiki',
        werkproces: 'Verbeteren en uitbreiden van softwarefunctionaliteit.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Tijdens de ontwikkeling van Filament Wiki heb ik gewerkt aan het verbeteren van de gebruikerservaring binnen Filament, zodat documentatie sneller en makkelijker beschikbaar is.',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was het ontwikkelen van extra functionaliteiten binnen Filament Wiki om documentatie toegankelijker te maken voor gebruikers, zonder dat ze steeds naar een apart scherm hoeven te navigeren.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Ik heb een plugin gemaakt met meerdere features. Bijvoorbeeld een automatische documentatie-knop in de sidebar waarmee je naar het Filament Wiki panel kan.',
                    'Ook heb ik een HelpAction gebouwd met een dropdown in de navbar: gebruikers kiezen pagina’s en zien de content in een slideover.',
                    'Daarnaast heb ik een HintAction gemaakt die je naast een form component kan gebruiken, waarbij je documentatie in een modal kan tonen.',
                    'Verder heb ik een Inline Action toegevoegd zodat je vanuit tekst (bijv. een beschrijving bij een form component) direct een documentatiepagina kan openen in een slideover.',
                    'Tot slot heb ik een “Terug naar panel” knop toegevoegd in het Wiki panel. Als er meerdere panels zijn, komt er een dropdown om te kiezen naar welk panel je terug wil.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'Door deze features werd documentatie veel sneller bereikbaar tijdens het werken, en hoefde je minder te schakelen tussen verschillende plekken.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: [
                    'Ik vond dit echt leuk om te doen omdat ik creatief kon nadenken over de gebruikerservaring en hoe ik het beter kan maken.',
                    'Ik heb hier veel van geleerd: niet alleen technisch, maar ook hoe je UX slim verbetert met kleine maar sterke features.',
                ],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: ['Deze manier van programmeren en denken over gebruikerservaring kan ik zeker toepassen in toekomstige projecten.'],
            },
        },
    },
    {
        id: 'starrt5',
        label: 'STARRT 5 – Oplevering, online zetten en repository',
        werkproces: 'Opleveren, beheren en beschikbaar stellen van software.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Aan het einde van mijn stageopdracht moest de ontwikkelde software worden opgeleverd en beschikbaar worden gemaakt voor verder gebruik binnen Cube en voor developers.',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was het online zetten van Cube Wiki en het toevoegen van de Filament Wiki package aan de Cube package repository, zodat deze herbruikbaar is voor andere projecten.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Ik heb Cube Wiki samen met mijn praktijkopleider online gezet, zodat deze toegankelijk en bruikbaar is.',
                    'Daarnaast heb ik de Filament Wiki package toegevoegd aan de Cube package repository met behulp van Satis.',
                    'De installatie en het gebruik staan duidelijk uitgelegd in de README.md.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'Cube Wiki stond online en de Filament Wiki package was beschikbaar als herbruikbare package binnen de interne repository, klaar voor gebruik in andere projecten.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: ['Ik heb geleerd dat het opleveren en beschikbaar maken van software net zo belangrijk is als het bouwen ervan.'],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: ['Deze kennis neem ik mee naar toekomstige projecten waarin software gedeployed en gedeeld moet worden.'],
            },
        },
    },
    {
        id: 'starrt6',
        label: 'STARRT 6 – SSH-tool (Hackathon)',
        werkproces: 'Samenwerking met collega’s en verbeteren van bestaande tooling.',
        sections: {
            situatie: {
                title: 'S – Situatie',
                icon: BookOpen,
                paragraphs: [
                    'Bij Cube is er elke drie maanden een hackatondag. Tijdens zo’n dag werken medewerkers samen aan interne projecten.',
                    'Tijdens deze hackathon heb ik samen met twee collega’s gewerkt aan een SSH-tool: een Laravel Filament platform waarmee SSH-keys van medewerkers centraal beheerd worden.',
                    'Met deze tool kunnen SSH-keys toegevoegd en verwijderd worden van servers, zodat toegang snel verleend of ingetrokken kan worden (bijvoorbeeld wanneer iemand uit dienst gaat).',
                ],
            },
            taak: {
                title: 'T – Taak',
                icon: Target,
                paragraphs: [
                    'Mijn taak was om samen met twee collega’s het bestaande SSH-tool te verbeteren. Na de hackathon heb ik zelfstandig doorgewerkt om het project volledig af te ronden.',
                    'Daarvoor moest ik eerst goed begrijpen hoe het project technisch in elkaar zat en hoe het SSH-beheer binnen Cube precies werkte.',
                ],
            },
            actie: {
                title: 'A – Actie',
                icon: Wrench,
                paragraphs: [
                    'Tijdens de hackathon hebben we het project doorgenomen, verbeteringen doorgevoerd en uiteindelijk gepresenteerd wat we hadden gemaakt.',
                    'Na de hackathon heb ik zelfstandig open punten uitgewerkt, zoals:',
                    '• Voorkomen dat SSH-keys met dezelfde hash meerdere keren toegevoegd kunnen worden.',
                    '• Verbeteren van notificaties wanneer de naam van een sleutel ontbreekt.',
                    '• Zorgen dat public SSH-keys correct van servers worden verwijderd.',
                    '• Oplossen van situaties waarin SSH-keys niet gekoppeld zijn aan een GitLab-gebruiker.',
                    '• Oplossen van een lege modal bij het bekijken van SSH-gebruikers.',
                    '• Toevoegen van inzicht in SSH-logs en command-logs binnen het platform.',
                    'Bij vragen kon ik altijd nog overleggen met mijn praktijkopleider of collega’s.',
                ],
            },
            resultaat: {
                title: 'R – Resultaat',
                icon: Wrench,
                paragraphs: [
                    'Het SSH-tool werd inhoudelijk sterker en betrouwbaarder door de fixes en verbeteringen. Het project is nu klaar om in productie te gaan en echt gebruikt te worden.',
                ],
            },
            reflectie: {
                title: 'R – Reflectie',
                icon: RefreshCcw,
                paragraphs: [
                    'Ik vond dit project echt erg leuk om te maken. Door de hackathon kreeg ik eerst duidelijke uitleg, waardoor ik daarna zelfstandig verder kon.',
                    'Het afronden van de todo’s gaf me veel vertrouwen, omdat ik merkte dat ik echt zelfstandig een intern project productieklaar kan maken.',
                ],
            },
            transfer: {
                title: 'T – Transfer',
                icon: Repeat,
                paragraphs: [
                    'Deze ervaring neem ik mee naar toekomstige projecten: zowel samenwerken onder tijdsdruk (hackathon) als zelfstandig doorpakken daarna.',
                    'Ook heb ik weer extra backend-ervaring opgedaan binnen Laravel/Filament, wat ik later opnieuw kan toepassen.',
                ],
            },
        },
    },
];

const expanded = reactive<Record<string, Record<StarrtSectionKey, boolean>>>(
    Object.fromEntries(
        starrtItems.map((item) => [
            item.id,
            { situatie: false, taak: false, actie: false, resultaat: false, reflectie: false, transfer: false },
        ]),
    ),
);

const hasOverflow = reactive<Record<string, Record<StarrtSectionKey, boolean>>>(
    Object.fromEntries(
        starrtItems.map((item) => [
            item.id,
            { situatie: false, taak: false, actie: false, resultaat: false, reflectie: false, transfer: false },
        ]),
    ),
);

const contentRefs = ref<Record<string, HTMLElement | null>>({});

function setContentRef(starrtId: string, key: StarrtSectionKey, el: HTMLElement | null) {
    const refKey = `${starrtId}-${key}`;
    contentRefs.value[refKey] = el;
    if (el) {
        // Check overflow immediately and after a delay (for tabs that aren't visible yet)
        checkOverflow(starrtId, key, el);

        // Use requestAnimationFrame to recheck after render
        requestAnimationFrame(() => {
            checkOverflow(starrtId, key, el);
        });

        // Also check after a small delay for hidden tabs
        setTimeout(() => {
            checkOverflow(starrtId, key, el);
        }, 100);
    }
}

function checkOverflow(starrtId: string, key: StarrtSectionKey, el: HTMLElement) {
    // Check if element has content that overflows
    // Use a threshold to account for slight differences
    const hasContentOverflow = el.scrollHeight > el.clientHeight + 1;

    // Also check based on text content length as fallback
    // If text is longer than ~200 chars, it likely overflows max-h-40 (160px)
    const textContent = el.textContent || '';
    const likelyOverflows = textContent.length > 300;

    hasOverflow[starrtId][key] = hasContentOverflow || likelyOverflows;
}

function toggle(itemId: string, key: StarrtSectionKey) {
    expanded[itemId][key] = !expanded[itemId][key];
}

const byId = computed(() => Object.fromEntries(starrtItems.map((s) => [s.id, s])));
</script>

<template>
    <section id="starrt" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <!-- achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 mx-auto max-w-7xl space-y-10 px-4 py-16 md:px-6 md:py-24 lg:py-28">
            <!-- header -->
            <header class="space-y-3">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <BookOpen class="h-3 w-3 text-indigo-400" />
                    <span>STARRT Reflectie</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Terugblik op mijn stage bij Cube</h2>
                <p class="max-w-2xl text-sm text-white/60 sm:text-base">
                    Hieronder beschrijf ik mijn stage-ervaring aan de hand van STARRT: Situatie, Taak, Actie, Resultaat, Reflectie en Transfer.
                </p>
            </header>

            <AnimatedTabs :tabs="tabs" default-tab="starrt1" class-name="max-w-none">
                <!-- STARRT 1 -->
                <template #starrt1>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt1.label }}</p>
                        <p v-if="byId.starrt1.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt1.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt1.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt1', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt1[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt1[key as StarrtSectionKey] || expanded.starrt1[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt1', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt1[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>

                <!-- STARRT 2 -->
                <template #starrt2>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt2.label }}</p>
                        <p v-if="byId.starrt2.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt2.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt2.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt2', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt2[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt2[key as StarrtSectionKey] || expanded.starrt2[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt2', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt2[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>

                <!-- STARRT 3 -->
                <template #starrt3>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt3.label }}</p>
                        <p v-if="byId.starrt3.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt3.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt3.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt3', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt3[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt3[key as StarrtSectionKey] || expanded.starrt3[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt3', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt3[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>

                <!-- STARRT 4 -->
                <template #starrt4>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt4.label }}</p>
                        <p v-if="byId.starrt4.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt4.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt4.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt4', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt4[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt4[key as StarrtSectionKey] || expanded.starrt4[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt4', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt4[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>

                <!-- STARRT 5 -->
                <template #starrt5>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt5.label }}</p>
                        <p v-if="byId.starrt5.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt5.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt5.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt5', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt5[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt5[key as StarrtSectionKey] || expanded.starrt5[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt5', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt5[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>

                <!-- STARRT 6 -->
                <template #starrt6>
                    <div class="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                        <p class="text-sm font-semibold">{{ byId.starrt6.label }}</p>
                        <p v-if="byId.starrt6.werkproces" class="mt-1 text-xs text-white/60">
                            <span class="font-medium text-white/70">Werkproces:</span> {{ byId.starrt6.werkproces }}
                        </p>

                        <div class="mt-5 grid gap-6 md:grid-cols-2 md:items-start">
                            <template v-for="(section, key) in byId.starrt6.sections" :key="key">
                                <article
                                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                                >
                                    <div class="mb-3 flex items-center gap-3">
                                        <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/80">
                                            <component :is="section.icon" class="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p class="text-[0.75rem] tracking-[0.16em] text-white/50 uppercase">{{ section.title }}</p>
                                            <h3 class="text-lg font-semibold">{{ section.title.replace(/^[A-Z]\s–\s/, '') }}</h3>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <div
                                            :ref="(el) => setContentRef('starrt6', key as StarrtSectionKey, el as HTMLElement)"
                                            :class="[
                                                'space-y-3 text-sm leading-relaxed text-white/60 transition-all duration-200 sm:text-base',
                                                expanded.starrt6[key as StarrtSectionKey] ? 'max-h-none' : 'max-h-40 overflow-hidden',
                                            ]"
                                        >
                                            <p v-for="(p, idx) in section.paragraphs" :key="idx" class="whitespace-pre-line">
                                                {{ p }}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        v-if="hasOverflow.starrt6[key as StarrtSectionKey] || expanded.starrt6[key as StarrtSectionKey]"
                                        type="button"
                                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                                        @click="toggle('starrt6', key as StarrtSectionKey)"
                                    >
                                        {{ expanded.starrt6[key as StarrtSectionKey] ? 'Lees minder' : 'Lees meer' }}
                                    </button>
                                </article>
                            </template>
                        </div>
                    </div>
                </template>
            </AnimatedTabs>
        </div>
    </section>
</template>
