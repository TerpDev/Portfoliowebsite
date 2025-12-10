<script setup lang="ts">
import { FolderGit2 } from 'lucide-vue-next';
</script>

<template>
    <section id="voorwoord" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <!-- zachte achtergrond glow, zelfde soort als hero -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.2),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-28">
            <!-- kleine badge bovenaan, matcht hero style -->
            <div
                v-motion="{
                    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
                    visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
                }"
                class="mb-10 space-y-3 md:mb-14"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <FolderGit2 class="h-3 w-3 text-indigo-400" />
                    <span>Welkom</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Welkom bij mijn verslag</h2>
                <p class="max-w-lg text-sm text-white/60 sm:text-base">
                    Hier ga ik beginnen met een voorwoord en inleiding over mijn stageperiode bij Cube.
                </p>
            </div>

            <!-- 2 kolommen: Voorwoord & Inleiding -->
            <div
                v-motion="{
                    initial: { opacity: 0, y: 32 },
                    visibleOnce: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' },
                }"
                class="grid gap-8 lg:grid-cols-2"
            >
                <!-- Voorwoord -->
                <article
                    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8"
                >
                    <div
                        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,197,81,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div class="relative space-y-4">
                        <h2 class="bg-clip-text text-xl font-semibold tracking-tight text-white sm:text-2xl">Voorwoord</h2>
                        <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                            Welkom bij mijn eindverslag van mijn stage, uitgevoerd door Daniel Terpstra bij <span class="text-white/90">Cube</span> in
                            de periode van September 2025 t/m Januari 2026. Dit verslag is de afronding van mijn stageperiode. Tijdens deze stage heb
                            ik de kans gekregen om mijn theoretische kennis om te zetten in de praktijk. Hiervan heb ik enorm veel van geleerd en ga
                            ik verder mee leren.
                        </p>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            Graag wil ik een bedankje doen naar <span class="text-white/90">Ties Pol</span> voor de fijne en goede begeleiding,
                            feedback en het vertrouwen dat ik heb gekregen als praktijkopleider en nog veel succes verder met je eigen bedrijf. Ook
                            wil ik mijn collega’s bedanken voor hun ondersteuning wanneer nodig en de fijne samenwerking en de leuke tijd die ik heb
                            gehad. Tot slot wil ik Selim Serik bedanken voor de begeleiding vanuit school.
                        </p>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            Ik kijk terug op een hele leuke en leerzame tijd bij Cube, ik ben ervan overtuigd dat deze stageperiode mij uitstekend
                            heeft voorbereid op verdere professionele ontwikkeling.
                        </p>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            Veel leesplezier!
                        </p>
                    </div>
                </article>

                <!-- Inleiding -->
                <article
                    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8"
                >
                    <div
                        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.22),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div class="relative space-y-4">
                        <h2 class="bg-clip-text text-xl font-semibold tracking-tight text-white sm:text-2xl">Inleiding</h2>
                        <p class="text-sm leading-relaxed text-white/60 sm:text-base">
                            In dit verslag beschrijf ik de werkzaamheden, ervaringen en resultaten van mijn periode bij Cube, waar ik van September
                            2025 tot Januari 2026 werkzaam ben geweest als stagiair. Het doel van deze stage was vooral om beter de backend van het
                            software development te begrijpen.
                        </p>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            Cube is een softwarebedrijf dat zich richt op het ontwikkelen van moderne en efficiënte:
                        </p>
                        <ul class="list-disc pl-6 text-white/90">
                            <li>Klant- en beheerportalen</li>
                            <li>Apps</li>
                            <li>Website & CMS</li>
                            <li>E-commerce oplossingen</li>
                            <li>Data Management Platform</li>
                            <li>Platforms</li>
                        </ul>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            Tijdens mijn stage heb ik gewerkt aan een omvangrijke opdracht waarbij ik verantwoordelijk was voor de ontwikkeling van
                            Cube Wiki, een SaaS-platform voor het beheren en publiceren van documentatie. Daarna heb ik gewerkt aan Filament Wiki, een
                            package die documentatie vanuit de Cube Wiki toegankelijk wordt gemaakt via een API in binnen een Filament. Hierdoor kan
                            documentatie eenvoudig in andere applicaties worden geïntegreerd, inclusief navigatie structuur, categorieën en markdown
                            content.
                        </p>
                        <p class="text-sm leading-relaxed text-white/50 sm:text-base">
                            In deze inleiding geef ik een inzicht over het doel en de opbouw van dit verslag. In de volgende hoofdstukken beschrijf ik
                            eerst het bedrijf Cube, gevolgd door een toelichting op mijn stage opdracht, gebruikte technieken en resultaten.
                            Vervolgens reflecteer ik persoonlijke groei aan de hand van de STARRT-methode en sluit ik af met een conclusie en een
                            eindwoord.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
