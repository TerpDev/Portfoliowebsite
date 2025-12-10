<script setup lang="ts">
import { BookOpen, Target, Wrench, RefreshCcw, Repeat } from 'lucide-vue-next';
import { ref } from 'vue';

const expanded = ref({
    situatie: false,
    taak: false,
    actie: false,
    resultaat: false,
    reflectie: false,
    transfer: false,
});
</script>

<template>
    <section
        id="starrt"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 max-w-7xl mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-28 space-y-10"
        >
            <!-- header -->
            <header class="space-y-3">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <BookOpen class="h-3 w-3 text-indigo-400" />
                    <span>STARRT Reflectie</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Terugblik op mijn stage bij Cube
                </h2>
                <p class="max-w-2xl text-sm text-white/60 sm:text-base">
                    In dit hoofdstuk beschrijf ik mijn stage-ervaring aan de hand van het
                    STARRT-model: Situatie, Taak, Actie, Reflectie en Transfer.
                </p>
            </header>

            <!-- cards grid -->
            <div class="grid gap-6 md:grid-cols-2 md:items-start">
                <!-- SITUATIE -->
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200"
                        >
                            <BookOpen class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                S – Situatie
                            </p>
                            <h3 class="text-lg font-semibold">Stageomgeving bij Cube</h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.situatie ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                Tijdens mijn stage bij Cube kreeg ik beschikking over een MacBook om op
                                te werken. Mijn werkplek bevindt zich op kantoor, waar ik samen met
                                collega’s in een prettige omgeving kan werken. Dit bood een fijne
                                sfeer waarin ik mij goed kon concentreren en mijn werk zelfstandig
                                kon uitvoeren.
                            </p>
                            <p>
                                Wanneer ik vragen had of ergens tegen aan liep, kon ik altijd terecht
                                bij mijn praktijkopleider of andere collega’s. Daarnaast had ik
                                iedere maandag een vast gesprek met mijn praktijkopleider om de
                                voortgang van het project te bespreken en hoe het ging in het
                                algemeen.
                            </p>
                            <p>
                                In de pauzes lunchten we gezamenlijk aan de bar en word er door
                                sommige een stukje gelopen en andere gaan lekker even voetballen.
                            </p>
                        </div>


                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.situatie = !expanded.situatie"
                    >
                        {{ expanded.situatie ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>

                <!-- TAAK -->
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200"
                        >
                            <Target class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                T – Taak
                            </p>
                            <h3 class="text-lg font-semibold">Ontwikkeling Cube Wiki &amp; Filament Wiki</h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.taak ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                Mijn opdracht richt zich op de ontwikkeling van Cube Wiki, een
                                SaaS-platform voor het beheren van documentatie. Deze documentatie
                                kan worden weergegeven binnen een (klant-)omgeving op basis van een
                                package plugin Filament Wiki.
                            </p>
                            <p>
                                Cube Wiki biedt een API waarmee je de documentatie, categorieën en
                                navigatiestructuur kunnen worden opgehaald. Hierdoor kan de inhoud
                                niet binnen Filament worden gebruikt, maar ook in andere applicaties.
                            </p>
                            <p>
                                Voor de uitvoering van mijn stageopdracht heb ik geen uitgebreide of
                                complexe materialen nodig. Ik heb vanuit Cube een MacBook tot mijn
                                beschikking gekregen om op te werken. Daarnaast is een rustige en
                                schone werkplek belangrijk, zodat ik geconcentreerd en efficiënt aan
                                mijn opdracht kan werken. Verder heb ik toegang tot documentatie en
                                natuurlijk ondersteuning van mijn praktijkopleider en collega’s als
                                dat nodig is.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.taak = !expanded.taak"
                    >
                        {{ expanded.taak ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>

                <!-- ACTIE -->
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-200"
                        >
                            <Wrench class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                A – Actie
                            </p>
                            <h3 class="text-lg font-semibold">Technische aanpak van de opdracht</h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.actie ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                Om de opdracht succesvol uit te voeren ben ik begonnen met het
                                ontwerpen van een ERD (Entity Relationshop Diagram) om de
                                datastructuur inzichtelijk te maken. Vervolgens heb ij de basis van
                                Cube Wiki opgezet met Laravel en Filament, een populair admin- en
                                UI-framework waarmee beheeromgevingen snel en efficiënt kunnen worden
                                opgebouwd.
                            </p>
                            <p>
                                Daarna heb ik alle benodigde migrations en modals aangemaakt en deze
                                correct uitgevoerd binnen het project. Op basis hiervan heb ik een
                                Filament Panel ingericht en de benodigde Resources toegevoegd.
                                Vervolgens heb ik mij gericht op het realiseren van multitenancy, een
                                concept waarbij in mijn geval een tenant (bedrijf) meerdere
                                applicaties kan hebben die meerdere categorieën heeft en die weer
                                meerdere pagina’s.
                            </p>
                            <p>
                                Toen de basis van Cube Wiki goed werkte, ben ik gestart met het
                                ontwikkelen van de Filament Wiki package. Hiervoor heb ik een
                                package skeleton gebruikt als voorbeeld. In het begin was het lastig
                                om te bepalen waar ik moest beginnen, maar met hulp van mijn
                                praktijkopleider en collega’s en documentatie online heb ik de
                                structuur en werking steeds beter begrepen. Daarna heb ik de
                                Filament geïntegreerd in de package en een Panel gemakt waarin de
                                Markdown content vanuit Cube Wiki via de API wordt opgehaald en
                                weergegeven.
                            </p>
                            <p>
                                Daarnaast heb ik meerdere functies ontwikkeld om de gebruikerservaring
                                binnen Filament te verbeteren. Zo wordt er automatisch een
                                Documentatie knop aan je Sidebar toegevoegd wanneer de package wordt
                                geïnstalleerd die kan je ook uitzetten. Ik heb ook een HelpAction
                                gebouwd waarmee een drop down in de navbar verschijnt met door de
                                gebruiker gekozen pagina’s, waarvan de content van de gekozen pagina
                                in een slideover wordt laten zien.
                            </p>
                            <p>
                                Verder heb ik een HintAction gemaakt waarmee net zoals de HelpAction
                                de content van pagina’s kan zien maar dan hier in een modal naast
                                jouw form component in Filament.
                            </p>
                            <p>
                                Tot slot heb ik een “Terug naar panel” knop toegevoegd, omdat dit
                                ontbrak. Deze knop verschijnt alleen binnen het Filament Wiki panel
                                en brengt de gebruiker terug naar het originele panel. Wanneer er
                                meerdere panels aanwezig zijn, word dit weergegeven met een drop down
                                waar alle panels die je hebt worden laten zien, zodat de gebruiker
                                kan kiezen naar wek panel hij terug wilt. Hierbij kan je in je panel
                                een brandName meegeven voor een eigen naam, word dat niet gedaan
                                wordt automatisch de panel ID gebruikt.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.actie = !expanded.actie"
                    >
                        {{ expanded.actie ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-200"
                        >
                            <Wrench class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                R – Resultaat
                            </p>
                            <h3 class="text-lg font-semibold">Wat mijn praktijkopleider er van vind</h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.resultaat ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                komt nog
                            </p>

                        </div>
                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.resultaat = !expanded.resultaat"
                    >
                        {{ expanded.resultaat ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>

                <!-- REFLECTIE -->
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:self-start"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-200"
                        >
                            <RefreshCcw class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                R – Reflectie
                            </p>
                            <h3 class="text-lg font-semibold">Wat ik over mezelf heb geleerd</h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.reflectie ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                In deze opdracht heb ik veel geleerd over het zelfstandig uitvoeren
                                van een complex project. Ik vind dat ik de opdracht goed het
                                aangepakt stap voor stap te werk, eerst de basis neer te zetten en
                                daarna steeds verder uit te breiden. In het begin was het soms lastig
                                om te bepalen waar ik moest beginnen, vooral bij het opzetten van de
                                package en het gebruik van Filament, omdat ik daar nog geen ervaring
                                mee had. Door goed te blijven vragen stellen bij mijn praktijkopleider
                                en collega’s en informatie opzoeken ben ik verder gekomen begon ik
                                steeds beter te begrijpen hoe alles werkte.
                            </p>
                            <p>
                                Ik merk dat ik sterk ben geworden in het plannen van mijn werk, het
                                vasthouden aan een ontwikkelstructuur en het oplossen van problemen
                                stap voor stap. Daarnaast heb ik geleerd hoe belangrijk het is om
                                door te zetten wanneer iets niet lukt, en om feedback serieus te
                                nemen en te gebruiken om het project te verbeteren.
                            </p>
                            <p>
                                Als ik terugkijk op de opdracht ben ik trots op het resultaat dat ik
                                heb bereikt en op de groei die ik heb doorgemaakt. Ik weet nu dat ik
                                in staat ben om aan echte projecten te werken binnen een bedrijf. Dat
                                geeft mij vertrouwen voor toekomstige projecten.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.reflectie = !expanded.reflectie"
                    >
                        {{ expanded.reflectie ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>

                <!-- TRANSFER -->
                <article
                    class="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 md:col-span-1"
                >
                    <div class="mb-3 flex items-center gap-3">
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200"
                        >
                            <Repeat class="h-4 w-4" />
                        </div>
                        <div>
                            <p class="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
                                T – Transfer
                            </p>
                            <h3 class="text-lg font-semibold">
                                Hoe ik deze ervaring meeneem naar toekomstige projecten
                            </h3>
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <div
                            :class="[
                'space-y-3 text-sm leading-relaxed text-white/60 sm:text-base transition-all duration-200',
                expanded.transfer ? 'max-h-none' : 'max-h-40 overflow-hidden',
              ]"
                        >
                            <p>
                                De kennis en ervaring die ik tijdens deze opdracht heb opgedaan kan ik
                                goed inzetten in toekomstige projecten en bij andere bedrijven. Het
                                werken met Laravel kende ik al, maar door deze stage heb ik mijn
                                vaardigheden naar een hoger niveau kunnen brengen, vooral op het
                                gebied van de backend en het ontwerpen van schaalbare software.
                            </p>
                            <p>
                                Daarnaast heb ik voor het eerst gewerkt met Filament, wat in het
                                begin nieuw en een uitdaging was. Inmiddels begrijp ik de werking
                                ervan en kan ik zelf Filament componenten, plugins en complete
                                packages ontwikkelen.
                            </p>
                            <p>
                                De technologieën en aanpak die ik bij deze opdracht heb geleerd kan ik
                                zeker gebruiken in andere omgevingen en bedrijven. Filament en Laravel
                                wordt veel gebruikt binnen de branche. De Filament Wiki package kan ik
                                zelf ook verder gebruiken in andere projecten, zowel binnen Cube en
                                persoonlijke projecten.
                            </p>
                            <p>
                                Daarnaast neem ik mijn verbeterde vaardigheden in samenwerking,
                                communicatie en het vragen naar feedback mee naar toekomstige
                                werkplek/ stage. Kortom, de kennis die ik tijdens deze opdracht heb
                                opgedaan is goed inzetbaar en geeft mij een sterke basis voor
                                toekomstige ontwikkelingen binnen mijn vak.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="mt-4 inline-flex w-max cursor-pointer items-center gap-1.5 text-xs font-medium text-white"
                        @click="expanded.transfer = !expanded.transfer"
                    >
                        {{ expanded.transfer ? 'Lees minder' : 'Lees meer' }}
                    </button>
                </article>
            </div>
        </div>
    </section>
</template>
