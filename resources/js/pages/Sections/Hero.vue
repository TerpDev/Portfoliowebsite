<script setup lang="ts">
import Typed from 'typed.js';
import { onBeforeUnmount, onMounted } from 'vue';
let typed: Typed | null = null;
onMounted(() => {
    typed = new Typed('.typing', {
        strings: ['Frontend Developer,', 'Backend Developer,', 'Student Software Developer.'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});
onBeforeUnmount(() => typed?.destroy());
</script>
<template>
    <section id="hero" class="relative overflow-hidden">
        <!-- Background glows -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
            <div
                class="absolute top-1/2 left-1/2 h-[20vw] max-h-[22rem] w-[90vw] max-w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/25 blur-3xl"
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 0, threshold: 0 }"
            ></div>

            <div
                class="absolute top-1/2 left-1/2 h-[32vw] max-h-[20rem] w-[70vw] max-w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-fuchsia-500/20 blur-3xl"
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 80, threshold: 0 }"
            ></div>

            <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.15),transparent_60%)]"></div>
        </div>

        <div class="mx-auto flex h-[92vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
            <!-- Intro line -->
            <h1
                class="text-4xl font-extrabold tracking-tight text-black will-change-transform sm:text-5xl dark:text-white"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-t-12 animate-duration-700',
                    delay: 40,
                }"
            >
                Hi, I'm
                <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text font-extrabold text-transparent"> Daniel Terpstra </span>
            </h1>

            <!-- Badge -->
            <div
                class="mt-6 will-change-transform"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-600',
                    delay: 140,
                }"
            >
                <span
                    class="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/5 px-4 py-1.5 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:text-zinc-300"
                >
                    <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                    Student Software Developer - Available for work!
                </span>
            </div>

            <!-- Big headline -->
            <h2
                class="mt-8 text-4xl leading-[1.05] font-extrabold text-black will-change-transform sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-b-12 animate-duration-800',
                    delay: 220,
                }"
            >
                Crafting <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Digital</span
                ><br class="hidden md:block" />
                <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experiences</span> That Matter
            </h2>

            <!-- Typed line -->
            <p
                class="mt-6 text-black will-change-transform dark:text-zinc-300"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 font-bold slide-in-from-b-6 animate-duration-600',
                    delay: 300,
                }"
            >
                I’m a <span class="typing font-bold text-violet-400/90"></span>
            </p>

            <!-- CTAs -->
            <div
                class="mt-10 flex items-center gap-4 will-change-transform"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
                    delay: 380,
                }"
            >
                <a
                    href="#projects"
                    class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 focus:ring-2 focus:ring-white/30 focus:outline-none"
                >
                    View My Work
                    <div class="animate-bounce-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                            />
                        </svg>
                    </div>
                </a>

                <a
                    href="#contact"
                    class="inline-flex items-center rounded-xl border border-black bg-white/5 px-5 py-3 text-sm font-semibold text-black backdrop-blur transition duration-300 hover:bg-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none dark:border-white/15 dark:text-white"
                >
                    Contact Me
                </a>
            </div>

            <!-- Scroll hint -->
            <div
                class="absolute inset-x-0 bottom-6 flex justify-center text-xs text-zinc-800 will-change-transform dark:text-zinc-500"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
                    delay: 460,
                }"
            >
                <div class="flex w-full items-center justify-center gap-2">
                    <a href="#about" class="cursor-pointer">
                        <span>Scroll Down</span>
                        <div class="animate-bounce-down flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
