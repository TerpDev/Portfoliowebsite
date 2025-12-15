<script setup lang="ts">
// geen logica nodig, dit is statische content
import { Book } from 'lucide-vue-next';
</script>

<template>
    <section
        id="persoonlijke-ontwikkeling"
        class="relative w-full bg-[#030303] text-white border-t border-white/5"
    >
        <div class="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-6">

            <!-- Titel -->
            <header class="space-y-3">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <Book class="h-3 w-3 text-indigo-400" />
                    <span>STARRT Reflectie</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
                    Persoonlijke ontwikkeling
                </h2>
                <p class="text-white/50 max-w-2xl">
                    In dit hoofdstuk beschrijf ik mijn vakinhoudelijke en persoonlijke ontwikkeling
                    tijdens mijn stage bij Cube aan de hand van SMART-leerdoelen.
                </p>
            </header>

            <!-- Vakinhoudelijk leerdoel -->
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <article class="space-y-6">
                    <h3 class="text-xl font-semibold">
                        SMART leerdoel – vakinhoudelijk
                    </h3>

                    <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur space-y-4">
                        <p class="text-sm text-white/70 leading-relaxed">
                            Tijdens mijn stageperiode bij Cube in periode 4 wil ik mijn backend-vaardigheden
                            verbeteren door actief mee te werken aan minimaal twee projecten. Aan het einde
                            van de stage kan ik zelfstandig backend-functionaliteiten (zoals API’s of
                            databasekoppelingen) laten zien en toelichten, zodat zichtbaar wordt dat ik mijn
                            kennis en vaardigheden op dit gebied heb ontwikkeld.
                        </p>
                        <h2 class="text-white/80 font-semibold text-md">Uitleg:</h2>
                        <p class="text-sm text-white/60 leading-relaxed">
                            Ik vind dat ik dit vakinhoudelijke leerdoel heb behaald omdat ik tijdens mijn stage
                            heb gewerkt aan een complexe opdracht: het ontwikkelen van Cube Wiki en de
                            bijhorende Filament Wiki package. Deze opdracht ging diep de backend in, waaronder
                            het opzetten van een datastructuur, het bouwen van een API, het verwerken van
                            Markdown content en het implementeren van multitenancy.
                        </p>

                        <p class="text-sm text-white/60 leading-relaxed">
                            Tijdens dit project heb ik zelfstandig backend-functionaliteiten ontwikkeld,
                            technisch onderbouwd en volledig werkend opgeleverd. Ik heb onder andere geleerd
                            hoe je migrations, models en Filament resources opzet, hoe je panels en actions
                            maakt binnen Filament en hoe je documentatie vanuit een API kunt tonen in
                            Filament.
                        </p>

                        <p class="text-sm text-white/60 leading-relaxed">
                            Daarnaast heb ik extra functionaliteiten toegevoegd om de gebruikerservaring te
                            verbeteren, zoals een documentatieknop, HelpAction, HintAction en een
                            “Terug naar panel”-knop. Dit project laat zien dat ik nu in staat ben om complexe
                            backend-technieken zelfstandig toe te passen en duidelijk toe te lichten.
                        </p>
                    </div>
                </article>

                <!-- Persoonlijk leerdoel -->
                <article class="space-y-6">
                    <h3 class="text-xl font-semibold">
                        SMART leerdoel – persoonlijk
                    </h3>

                    <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur space-y-4">
                        <p class="text-sm text-white/70 leading-relaxed">
                            Tijdens mijn stage bij Cube in periode 4 wil ik mijn communicatieve vaardigheden
                            verbeteren door wekelijks actief feedback te vragen tijdens een overlegmoment met
                            mijn stagebegeleider en door dagelijks contactmomenten met collega’s te benutten,
                            zoals gezamenlijke lunches. Aan het einde van de stage kan ik aantonen dat ik deze
                            feedback heb verwerkt in mijn werk en kan mijn stagebegeleider bevestigen dat mijn
                            communicatie is verbeterd.
                        </p>
                        <h2 class="text-white/80 font-semibold text-md">Uitleg:</h2>
                        <p class="text-sm text-white/60 leading-relaxed">
                            Ik vind dat ik dit persoonlijke leerdoel heb behaald omdat ik gedurende de hele
                            stageperiode wekelijks overleg heb gehad met mijn praktijkopleider. De feedback
                            die ik tijdens deze gesprekken ontving, heb ik actief verwerkt in mijn
                            werkzaamheden, waardoor mijn manier van communiceren steeds duidelijker en
                            professioneler werd.
                        </p>

                        <p class="text-sm text-white/60 leading-relaxed">
                            Daarnaast heb ik bewust meer contact gezocht met collega’s, bijvoorbeeld tijdens
                            gezamenlijke lunchpauzes en informele momenten zoals een rondje lopen of
                            voetballen. Hierdoor heb ik geleerd om actiever het gesprek aan te gaan en mijn
                            vragen en ideeën duidelijk te formuleren.
                        </p>

                        <p class="text-sm text-white/60 leading-relaxed">
                            Mijn praktijkopleider heeft bevestigd dat ik hierin duidelijke groei heb laten
                            zien. Door deze ontwikkeling heb ik meer vertrouwen gekregen in professioneel
                            communiceren binnen een team, iets wat ik meeneem naar toekomstige stages en
                            werkplekken.
                        </p>
                    </div>
                </article>

            </div>

        </div>
    </section>
</template>
