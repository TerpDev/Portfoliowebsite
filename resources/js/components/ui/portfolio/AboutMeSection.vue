<script setup lang="ts">
import { Sparkles, Code2, Rocket, Cpu } from "lucide-vue-next";
import SpotifyPreviewCard from "@/components/ui/Spotify/SpotifyPreviewCard.vue";

const profileImage = "/images/placeholder.svg";
</script>

<template>
    <section
        id="about"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- background glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.22),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28"
        >
            <div
                class="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
            >
                <!-- LEFT SIDE -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 40 },
            visibleOnce: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.1, ease: 'easeOut' },
          }"
                    class="space-y-8"
                >
                    <!-- badge -->
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60 backdrop-blur"
                    >
                        <Sparkles class="h-3 w-3 text-rose-300" />
                        <span>About me</span>
                    </div>

                    <!-- heading -->
                    <div class="space-y-4">
                        <h2
                            class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
                        >
              <span
                  class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
              >
                Building clean,
              </span>
                            <br />
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                            >
                user friendly digital experiences.
              </span>
                        </h2>

                        <p
                            class="text-base sm:text-lg text-white/45 leading-relaxed font-light tracking-wide max-w-xl"
                        >
                            Hey, I'm Daniel — a 19 year old software developer who loves to
                            code. I'm in my fourth year of
                            <span class="text-white/80">
                Software Development at ROC van Twente
              </span>
                            in Hengelo. I enjoy creating modern, smooth and user friendly
                            websites & applications with
                            <span class="text-white/80">
                Laravel, TailwindCSS, Vue.js & TypeScript
              </span>.
                        </p>

                        <p
                            class="text-sm sm:text-base text-white/45 leading-relaxed font-light tracking-wide max-w-xl"
                        >
                            Right now I'm diving deeper into
                            <span class="text-white/80">Filament</span> for admin panels and
                            <span class="text-white/80">Tallstack</span> to build fullstack
                            experiences. I like combining UX with clean architecture.
                        </p>
                    </div>

                    <!-- highlight cards -->
                    <div class="grid gap-4 sm:grid-cols-3 max-w-2xl">
                        <!-- Years experience -->
                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
              }"
                            class="rounded-2xl border border-white/[0.12] bg-white/[0.03] p-4 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                        >
                            <p class="text-2xl font-semibold text-white">4+</p>
                            <p
                                class="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-white/50"
                            >
                                Years experience
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                From school projects to personal builds and freelance work.
                            </p>
                        </div>

                        <!-- Focus -->
                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.35, ease: 'easeOut' },
              }"
                            class="rounded-2xl border border-white/[0.12] bg-white/[0.03] p-4 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                        >
                            <p
                                class="flex items-center gap-2 text-sm font-medium text-white/90"
                            >
                                <Code2 class="h-4 w-4 text-indigo-300" />
                                Focus
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                Laravel, Vue.js, TailwindCSS, Tallstack, TypeScript & Filament.
                            </p>
                        </div>

                        <!-- Next steps -->
                        <div
                            v-motion="{
                initial: { opacity: 0, y: 30 },
                visibleOnce: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.45, ease: 'easeOut' },
              }"
                            class="rounded-2xl border border-white/[0.12] bg-white/[0.03] p-4 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                        >
                            <p
                                class="flex items-center gap-2 text-sm font-medium text-white/90"
                            >
                                <Rocket class="h-4 w-4 text-rose-300" />
                                Next steps
                            </p>
                            <p class="mt-2 text-xs text-white/60">
                                Learning more advanced Laravel, Filament and motion design.
                            </p>
                        </div>
                    </div>

                    <!-- bullet section -->
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0 },
              transition: { duration: 0.85, delay: 0.55, ease: 'easeOut' },
            }"
                        class="grid gap-3 text-sm text-white/55 max-w-xl"
                    >
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                            <p>Fullstack flows from design → code → deployment.</p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                            <p>Clean code, architecture & long-term maintainability.</p>
                        </div>
                        <div class="flex gap-3">
                            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300"></div>
                            <p>Balance coding with gym, friends and personal growth.</p>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SIDE -->
                <div class="space-y-6">
                    <!-- photo -->
                    <div
                        v-motion="{
              initial: { opacity: 0, scale: 0.92, y: 40 },
              visibleOnce: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.9, delay: 0.2, ease: 'easeOut' },
            }"
                        class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.02] to-white/[0.10] p-[1px] backdrop-blur"
                    >
                        <div
                            class="relative h-72 sm:h-80 md:h-[26rem] overflow-hidden rounded-[1.4rem]"
                        >
                            <img
                                :src="profileImage"
                                alt="Daniel Terpstra – Software Developer"
                                class="absolute inset-0 h-full w-full object-cover object-center"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/0"
                            />
                        </div>
                    </div>

                    <!-- skills card -->
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0 },
              transition: { duration: 0.85, delay: 0.45, ease: 'easeOut' },
            }"
                        class="rounded-3xl border border-white/[0.12] bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                    >
                        <div class="flex items-center justify-between gap-3 mb-4">
                            <div>
                                <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                                    Tech focus
                                </p>
                                <p class="text-sm font-medium text-white">
                                    Some of the stacks I work with
                                </p>
                            </div>
                            <Cpu class="h-5 w-5 text-indigo-300" />
                        </div>

                        <div class="flex flex-wrap gap-2 text-xs">
              <span
                  class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
              >Laravel & Filament</span
              >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Inertia.js</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Vue.js</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >TailwindCSS</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Tallstack</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >C# & .NET</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >UI motion & microinteractions</span
                            >
                            <span
                                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-white/80"
                            >Clean code</span
                            >
                        </div>

                        <div class="text-sm pt-2">
                            <p>
                                Right now I have a lot of knowledge in frontend — I can build
                                clean and fully responsive websites.
                            </p>
                        </div>
                    </div>

                    <!-- Spotify Preview Card -->
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0 },
              transition: { duration: 0.85, delay: 0.55, ease: 'easeOut' },
            }"
                    >
                        <SpotifyPreviewCard />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
