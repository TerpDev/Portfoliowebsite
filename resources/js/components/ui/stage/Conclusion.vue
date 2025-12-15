<script setup lang="ts">
// geen logica nodig, dit is statische content
import { Lightbulb } from 'lucide-vue-next';
</script>

<template>
    <section id="Conclusie" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <div class="mx-auto max-w-7xl space-y-6 px-4 py-16 md:py-24">
            <!-- Titel -->
            <header class="space-y-3">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <Lightbulb class="h-3 w-3 text-indigo-400" />
                    <span>Conclusie & Eindwoord</span>
                </div>
                <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">Conclusie & Eindwoord</h2>
                <p class="max-w-2xl text-white/50">
                    In dit hoofstuk beschrijf ik mijn conclussie en eindwoord van mijn stage bij Cube, waarin ik terugblik op mijn leerdoelen en de behaalde
                    resultaten.
                </p>
            </header>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <article class="space-y-6">
                    <h2 class="text-xl font-semibold">Conclusie</h2>
                    <div class="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                        <p class="text-sm leading-relaxed text-white/70">
                            Tijdens mijn stageperiode bij Cube heb ik veel geleerd en ben zowel technisch als persoonlijk gegroeid. Door te werken aan de
                            ontwikkeling van Cube Wiki en Filament Wiki heb ik veel ervaring opgedaan met backend technieken zoals Laravel, Filament,
                            Multitenancy, API’s en het bouwen van packages. Deze opdracht was complex en uitdagend, maar heeft mij geholpen om mijn kennis
                            naar een hoger niveau te brengen. Ik heb bewezen dat ik zelfstandig volledige backend functionaliteit kan ontwikkelen,
                            documenteren en presenteren.
                        </p>
                        <p class="text-sm leading-relaxed text-white/70">
                            Naast de technische vaardigheden heb ik ook veel geleerd op communicatief vlak. Ik heb actief feedback opgezocht en verwerkt,
                            waardoor ik beter ben geworden in het samenwerken, vragen stellen en professioneel communiceren. Dit heeft mij niet alleen
                            geholpen tijdens het project, maar zal mij ook zeker helpen in mijn toekomst.
                        </p>
                        <p class="text-sm leading-relaxed text-white/70">
                            Ik kijk terug op een leerzame en waardevolle stageperiode waarin ik veel heb bereikt, nieuwe kennis heb opgedaan en een
                            realistisch beeld heb gekregen van het werken binnen een softwarebedrijf. Ik ben trots op mijn resultaten tevreden hoe ik mijn
                            doelen heb behaald.
                        </p>
                    </div>
                </article>
                <article class="space-y-6">
                    <h2 class="text-xl font-semibold">Eindwoord</h2>
                    <div class="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                        <p class="text-sm leading-relaxed text-white/70">
                            Ik wil Cube enorm bedanken voor de kans om hier stage te mogen lopen binnen deze erg leuke en professionele werkomgeving. Ik wil nogmaals Ties Pol bedanken voor de begeleiding, feedback en vertrouwen die ik heb gekregen en wens jouw veel succes met je eigen bedrijf. Ook wil ik mijn collega’s bedanken voor de samenwerking, gezelligheid en hulp wanneer nodig. Daarnaast wil ik Selim Serik bedanken voor de begeleiding vanuit school.
                            Deze stageperiode heeft mij veel vertrouwen gegeven in mijn toekomst binnen de ICT en software developmen. Ik heb niet alleen nieuwe kennis opgedaan, maar ook ervaren hoe mooi en uitdagend dit vak eigenlijk is.
                            <br><br>Bedankt voor het lezen van mijn verslag.

                        </p>

                    </div>
                </article>

            </div>
        </div>
    </section>
</template>
