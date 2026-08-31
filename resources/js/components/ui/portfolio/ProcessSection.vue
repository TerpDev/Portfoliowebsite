<script setup lang="ts">
import {
    MessageSquare,
    Palette,
    Code2,
    Rocket,
    Sparkles,
    CheckCircle2,
    Users,
    Brain
} from "lucide-vue-next";

const processSteps = [
    {
        icon: MessageSquare,
        title: "Kennismaking & intake",
        description:
            "Eerste contact via app of videocall om je visie, doelstellingen en wensen in kaart te brengen. Indien mogelijk plannen we ook een persoonlijke ontmoeting om de samenwerking te versterken.",
        gradient: "from-blue-500 to-indigo-600",
        delay: 0.2,
    },
    {
        icon: Palette,
        title: "Design & visualisatie",
        description:
            "Met tools als Figma en Stitch (AI-design tool) creëer ik professionele mockups. Je ontvangt visuele voorbeelden en we itereren op basis van jouw feedback tot het design perfect aansluit.",
        gradient: "from-purple-500 to-pink-600",
        delay: 0.3,
    },
    {
        icon: Users,
        title: "Design review & goedkeuring",
        description:
            "Ik presenteer het ontwerp en verzamel je feedback. We bespreken eventuele aanpassingen zodat het eindresultaat exact matcht met jouw verwachtingen voordat ik start met bouwen.",
        gradient: "from-pink-500 to-rose-600",
        delay: 0.4,
    },
    {
        icon: Code2,
        title: "Development met AI-assistentie",
        description:
            "Op basis van het goedgekeurde design bouw ik de website. AI-tools als GitHub Copilot en Claude versnellen repetitieve taken, waardoor ik meer tijd kan besteden aan kwaliteit en maatwerk.",
        gradient: "from-cyan-500 to-blue-600",
        delay: 0.5,
    },
    {
        icon: CheckCircle2,
        title: "Kwaliteitscontrole",
        description:
            "Grondige testing van alle functionaliteiten: elke link wordt gecontroleerd, responsive design op alle apparaten.",
        gradient: "from-green-500 to-emerald-600",
        delay: 0.6,
    },
    {
        icon: Rocket,
        title: "Deployment & doorlopende support",
        description:
            "De website gaat live en ik blijf beschikbaar voor support. Wil je later aanpassingen of uitbreidingen? Ik sta altijd klaar om te helpen en de site up-to-date te houden.",
        gradient: "from-orange-500 to-amber-600",
        delay: 0.7,
    },
];
</script>

<template>
    <section
        id="process"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white overflow-hidden"
    >
        <!-- Background glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_70%_at_50%_0%,rgba(139,92,246,0.15),rgba(0,0,0,0)_50%),radial-gradient(100%_80%_at_80%_100%,rgba(236,72,153,0.18),rgba(0,0,0,0)_55%)] opacity-60"
        />

        <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28">
            <!-- Header -->
            <div
                v-motion="{
                    initial: { opacity: 0, y: 30 },
                    visibleOnce: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.1, ease: 'easeOut' },
                }"
                class="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60 backdrop-blur mb-4"
                >
                    <Sparkles class="h-3 w-3 text-purple-300" />
                    <span>Mijn werkwijze</span>
                </div>

                <h2
                    class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
                >
                    <span
                        class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                    >
                        Professionele projectaanpak
                    </span>
                </h2>

                <p class="text-base sm:text-lg text-white/50 leading-relaxed font-light tracking-wide">
                    Van initieel concept tot productie-deployment: een gestructureerde aanpak
                    met focus op kwaliteit, transparantie en resultaat.
                </p>
            </div>

            <!-- Process Timeline -->
            <div class="relative max-w-6xl mx-auto">
                <!-- Steps in Grid Layout -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="(step, index) in processSteps"
                        :key="step.title"
                        v-motion="{
                            initial: { opacity: 0, y: 30 },
                            visibleOnce: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: step.delay, ease: 'easeOut' },
                        }"
                        class="group relative"
                    >
                        <!-- Card -->
                        <div
                            class="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
                        >
                            <!-- Step number badge -->
                            <div class="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br p-[2px] shadow-lg"
                                 :class="step.gradient">
                                <div class="flex h-full w-full items-center justify-center rounded-full bg-[#030303] text-xs font-bold text-white">
                                    {{ index + 1 }}
                                </div>
                            </div>

                            <!-- Icon -->
                            <div class="mb-4">
                                <div
                                    class="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br p-[1px]"
                                    :class="step.gradient"
                                >
                                    <div
                                        class="flex h-full w-full items-center justify-center rounded-[13px] bg-black/60 backdrop-blur"
                                    >
                                        <component
                                            :is="step.icon"
                                            :class="`h-6 w-6 text-white`"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="space-y-3">
                                <h3 class="text-xl font-semibold text-white/90 tracking-tight">
                                    {{ step.title }}
                                </h3>
                                <p class="text-sm text-white/60 leading-relaxed">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why AI Section -->
            <div
                v-motion="{
                    initial: { opacity: 0, y: 30 },
                    visibleOnce: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.8, ease: 'easeOut' },
                }"
                class="mt-20 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.06] p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-4xl mx-auto"
            >
                <div class="flex items-start gap-4 mb-6">
                    <div
                        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30"
                    >
                        <Brain class="h-7 w-7 text-purple-300" />
                    </div>
                    <div>
                        <h3 class="text-xl sm:text-2xl font-semibold text-white mb-2">
                            AI-ondersteunde ontwikkeling
                        </h3>
                        <p class="text-sm text-white/60">
                            Moderne tools voor superieure resultaten
                        </p>
                    </div>
                </div>

                <div class="space-y-4 text-white/70 leading-relaxed">
                    <p>
                        Ik zet <span class="text-white/90 font-medium">GitHub Copilot, ChatGPT en Claude</span>
                        in als professionele hulpmiddelen - niet als vervanging, maar als
                        <span class="text-white/90">slimme assistenten die taken versnellen</span>.
                        Taken die handmatig een uur zouden kosten, zijn nu binnen enkele minuten afgerond.
                    </p>

                    <div class="grid sm:grid-cols-2 gap-4 mt-6">
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                            <p class="text-sm">
                                <span class="text-white/90 font-medium">Efficiëntie zonder compromis:</span> Boilerplate
                                code en standaard implementaties worden geautomatiseerd, zodat ik me kan focussen op
                                custom functionaliteit en complexe uitdagingen.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0"></div>
                            <p class="text-sm">
                                <span class="text-white/90 font-medium">Kwaliteitscontrole:</span> AI helpt bij
                                code review, suggereert best practices en identificeert potentiële problemen voordat
                                ze bugs worden.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0"></div>
                            <p class="text-sm">
                                <span class="text-white/90 font-medium">Design acceleratie:</span> Tools als Stitch
                                versnellen het design-proces, waardoor we sneller kunnen itereren op basis van
                                jouw feedback.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></div>
                            <p class="text-sm">
                                <span class="text-white/90 font-medium">Blijvende controle:</span> Alle strategische
                                beslissingen, creativiteit en maatwerk komen van mij. AI is het gereedschap, ik ben
                                de vakman.
                            </p>
                        </div>
                    </div>

                    <p class="pt-4 text-white/80 border-t border-white/10 mt-6">
                        Het resultaat? Snellere oplevering zonder in te leveren op kwaliteit. Jij profiteert van moderne
                        technologie, terwijl elk project de persoonlijke aandacht krijgt die het verdient.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

