<script setup lang="ts">
import { Sparkles, Code2, Rocket, Cpu } from "lucide-vue-next";
</script>

<template>
    <section
        class="relative w-full border-t border-white/5 mx-auto max-w-6xl bg-[#030303] text-white"
    >
        <!-- zachte achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.2),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28"
        >
            <div
                class="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
            >
                <!-- LEFT: tekst -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 40 },
            visibleOnce: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.1 },
          }"
                    class="space-y-8"
                >
                    <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
                        <Sparkles class="h-3 w-3 text-pink-400" />
                        <span>About me</span>
                    </div>

                    <div class="space-y-3">
                        <h2
                            class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
                        >
                            Building <span class="text-indigo-300">clean</span>,
                            <span class="text-rose-300">playful</span> digital experiences.
                        </h2>
                        <p class="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
                            Hey, ik ben Daniel – een software developer die houdt van strakke
                            UX, nette architectuur en een vleugje animatie. Ik combineer
                            <span class="text-white">.NET, Vue &amp; TypeScript</span> om
                            projecten te bouwen die niet alleen werken, maar ook goed voelen
                            in gebruik.
                        </p>
                    </div>

                    <!-- kleine highlights -->
                    <div class="grid gap-4 sm:grid-cols-3 max-w-2xl">
                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.25 },
              }"
                            class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                        >
                            <p class="text-2xl font-semibold text-white">3+</p>
                            <p class="mt-1 text-xs uppercase tracking-wide text-white/50">
                                jaar ervaring
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                Van schoolprojecten tot eigen side-projects en experiments.
                            </p>
                        </div>

                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.35 },
              }"
                            class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                        >
                            <p class="flex items-center gap-2 text-sm font-medium text-white">
                                <Code2 class="h-4 w-4 text-indigo-300" />
                                Focus
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                Vue 3, Inertia, Tailwind CSS, .NET / C#, clean code en
                                component-driven design.
                            </p>
                        </div>

                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.45 },
              }"
                            class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                        >
                            <p class="flex items-center gap-2 text-sm font-medium text-white">
                                <Rocket class="h-4 w-4 text-rose-300" />
                                Next steps
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                Meer real-world projecten, performance tuning en mooie, doordachte
                                developer experiences bouwen.
                            </p>
                        </div>
                    </div>

                    <!-- korte bullets -->
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.55 },
            }"
                        class="grid gap-3 text-sm text-white/60 max-w-xl"
                    >
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                            <p>
                                Ik houd van UIs die strak zijn, maar niet saai – kleine
                                micro-animaties die alles net wat levendiger maken.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                            <p>
                                Ik denk in systemen: hoe voelt de flow voor de gebruiker, maar
                                ook hoe blijft de codebase schoon en uitbreidbaar.
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300"></div>
                            <p>
                                Outside of code: scooter, muziek op, en nadenken over de
                                volgende feature of side-project.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div
                        v-motion="{
    initial: { opacity: 0, scale: 0.92, y: 40 },
    visibleOnce: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.2, ease: 'easeOut' },
  }"
                        class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-[1px] backdrop-blur"
                    >
                        <div
                            class="relative h-72 sm:h-80 md:h-[26rem] overflow-hidden rounded-[1.4rem]"
                        >
                            <!-- FOTO VAN JOU -->
                            <img
                                src=""
                                alt="Daniel Terpstra – Software Developer"
                                class="absolute inset-0 h-full w-full object-cover object-center"
                            />

                            <!-- donkere soft overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/0" />

                            <!-- subtiele kleur glow -->
                            <div
                                class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(129,140,248,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(244,114,182,0.25),transparent_55%)] mix-blend-screen pointer-events-none"
                            />

                            <!-- naam + rol -->
                            <div class="absolute bottom-5 left-5 right-5">
                                <p class="text-xs uppercase tracking-[0.22em] text-white/60">
                                    Software developer
                                </p>
                                <p class="text-xl sm:text-2xl font-semibold">
                                    Daniel Terpstra
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- skills -->
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0 },
              transition: { duration: 0.85, delay: 0.45 },
            }"
                        class="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md"
                    >
                        <div class="flex items-center justify-between gap-3 mb-4">
                            <div>
                                <p class="text-xs uppercase tracking-[0.16em] text-white/50">
                                    Tech focus
                                </p>
                                <p class="text-sm font-medium text-white">
                                    Stack waar ik blij van word
                                </p>
                            </div>
                            <Cpu class="h-5 w-5 text-indigo-300" />
                        </div>

                        <div class="flex flex-wrap gap-2 text-xs">
              <span
                  class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
              >Vue 3 &amp; TypeScript</span
              >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Inertia.js</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Tailwind CSS</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >.NET / C#</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Clean architecture</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >UI motion &amp; microinteractions</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
