<script setup lang="ts">
import { Building2 } from 'lucide-vue-next';
</script>

<template>
    <section id="about" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <!-- achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-28">
            <!-- header -->
            <div
                v-motion="{
                    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
                    visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    transition: { duration: 0.7, delay: 0.1 },
                }"
                class="mb-10 space-y-3 md:mb-14"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <Building2 class="h-3 w-3 text-indigo-400" />
                    <span>Het bedrijf</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Wat is Cube?</h2>
                <p class="max-w-lg text-sm text-white/60 sm:text-base">
                    Dit is de introductie van het bedrijf waar ik mijn stage heb gelopen, Cube. Hieronder volgt een korte geschiedenis, diensten en
                    kernwaarden van het bedrijf.
                </p>
            </div>

            <!-- content card -->
            <article
                v-motion="{
                    initial: { opacity: 0, y: 32 },
                    visibleOnce: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.2 },
                }"
                class="relative space-y-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8"
            >
                <!-- glow hover -->
                <div
                    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.22),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <!-- TEXT: 그대로 -->
                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Het huidige Cube is opgericht in 2011, toen nog onder de naam Brandcube door Job Keupink, die op 19-jarige leeftijd het bedrijf
                    startte vanuit zijn huis. In 2013 nam het bedrijf de eerste serieuze stap en werd het eerste kantoor geopend, het team begon zich
                    te vormen en kreeg al snel meer opdrachten om te maken.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Het toenmalige 7-koppige Cube team verhuisde in 2016 naar Oldenzaal, de Geldermanfabriek. In 2018 werd het eerste eigen pand
                    betrokken in de binnenstad van Oldenzaal, ondertussen werkend al met 20 man. In 2020 verhuisde Cube naar het pand van Ganzenmarkt
                    2 in Oldenzaal met 28 man en werd opgenomen in de Deloitte Fast 50-ranglijst met groei van ongeveer 369% in vier jaar.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    In 2021 vierde Cube zijn 10-jarig bestaan, en het bedrijf besloot een partnership met onder andere FC Twente. In 2025 zitten ze
                    nog steeds bij Ganzenmarkt 2 in Oldenzaal met nu meer dan 40 man.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Cube profileert zicht als “servicegericht technologiebedrijf” dat organisaties ondersteunt bij digitale transformatie. Hun aanbod
                    is:
                </p>

                <!-- diensten -->
                <ul class="grid list-inside list-disc gap-2 text-sm text-white/60 sm:text-base">
                    <li>Klant- en beheerportalen</li>
                    <li>Web- en mobiele apps</li>
                    <li>Websites & CMS oplossingen</li>
                    <li>E-commerce (webshops, betaalprocessen, integraties)</li>
                    <li>Data Management Platforms (DMP)/ datamanagement/ data-integratie</li>
                    <li>Learning Management Systems (LMS) & andere platforms</li>
                    <li>Technische architectuur, hosting, integraties & maatwerk software</li>
                    <li>Strategie & advies bij digitale transformatie</li>
                    <li>Onderhoud, beheer & optimalisatie na oplevering (support, updates, code-reviews, migraties)</li>
                </ul>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Cube hanteert de aanpak waarin ze samen met de klant de wensen en doelen in kaart brengen, een technisch en strategisch plan
                    opstellen, en vervolgens maatwerk software bouwen die schaalbaar en toekomstbestendig is.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Hun Tech-stack is breed: onder andere talen en frameworks zoals PHP/ Laravel, Vue.js, TailwindCSS, frameworks voor backend & CMS,
                    maatwerk API’s, en moderne softwarearchitectuur staan tot hun beschikking.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Cube onderscheidt zich niet alleen door technische kwaliteit, maar ook door de cultuur en werk omgeving. De kernwaarden zijn:
                </p>

                <!-- kernwaarden -->
                <ol class="grid list-inside list-decimal gap-2 text-sm text-white/60 sm:text-base">
                    <li>Wees nieuwsgierig – openstaan voor nieuwe technologieën, ideeën en oplossingen.</li>
                    <li>Groei door te doen – leren in de praktijk, hands-on mentaliteit</li>
                    <li>Neem verantwoordelijkheid – kwaliteit, betrouwbaarheid en eigenaarschap</li>
                    <li>Maak anderen succesvol – samenwerking, kennis delen en lange termijnrelaties.</li>
                </ol>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Daarnaast biedt Cube een prettige en menselijke werkomgeving, medewerkers krijgen een fijne werkplek, flexibele werktijden,
                    aandacht voor welzijn, een geregelde gezamenlijke lunches.
                </p>

                <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                    Deze cultuur sluit goed aan bij een omgeving waarin jonge jongen zoals stagiairs goed hun vaardigheden kunnen ontwikkelen, fouten
                    mogen maken en daardoor veel kunnen leren.
                </p>
            </article>
        </div>
    </section>
</template>
