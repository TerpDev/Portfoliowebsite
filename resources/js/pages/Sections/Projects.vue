<script setup lang="ts">


import { ref } from 'vue';

const projectcards = ref([
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects en skills. Built with InertiaJS, VueJS and TailwindCSS.',
        image: '/images/heroport.png',
        link: '#hero',
        tools: ['VueJS', 'TailwindCSS', 'InertiaJS', 'Laravel', 'HeadlessUI', 'AlpineJS'],
        code: [{ text: 'View Code', link: 'https://github.com/TerpDev/Portfoliowebsite' }],
    },
    {
        title: 'MTF Automobielen',
        description:
            'Ive worked on this project while I was an intern at C-o-d-e-s Software Development in Almelo I mostly worked on the frontend on this project',
        image: '/images/img.png',
        link: 'https://mtfautomobielen.nl/',
        tools: ['VueJS', 'TailwindCSS', 'InertiaJS', 'Laravel', 'PrimeVue', 'HeadlessUI', 'AlpineJS'],
        demo: [{ text: 'Live Demo', link: 'https://mtfautomobielen.nl/' }],
    },
]);

</script>
<template>
    <section class="px-8 py-24" id="projects">
        <div class="mx-auto max-w-6xl">
            <h1 class="mb-8 flex text-4xl font-bold text-stone-900 lg:justify-center dark:text-white">
                Projects<span class="text-primary">.</span>
            </h1>

            <!-- Grid -->
            <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                <div v-for="project in projectcards" :key="project.title" class="group/card relative">
                    <!-- CARD -->
                    <div
                        class="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-white/80 shadow-sm backdrop-blur-sm transition duration-300 dark:bg-white/5 dark:ring-white/10"
                    >
                        <a :href="project.link" :target="project.link === '#hero' ? undefined : '_blank'" class="relative block">
                            <div class="relative aspect-[16/10] overflow-hidden">
                                <img :src="project.image" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition duration-500"
                                ></div>
                            </div>

                            <div class="p-5">
                                <div class="flex flex-wrap gap-2 pb-2" v-if="project.tools">
                                        <span
                                            v-for="tool in project.tools"
                                            :key="tool"
                                            class="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-black backdrop-blur transition dark:bg-white/10 dark:text-white"
                                        >
                                            {{ tool }}
                                        </span>
                                </div>

                                <h3 class="mt-2 text-xl font-bold text-stone-900 transition dark:text-white">
                                    {{ project.title }}
                                </h3>
                                <p class="mt-2 line-clamp-3 text-stone-600 transition dark:text-zinc-300">
                                    {{ project.description }}
                                </p>
                                <div class="flex flex-row">
                                    <div class="mt-2">
                                        <a
                                            v-for="item in project.code"
                                            :key="item.link"
                                            :href="item.link"
                                            target="_blank"
                                            class="flex w-fit items-center rounded-lg bg-zinc-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-github mr-2 h-4 w-4"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                                ></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                            {{ item.text }}
                                        </a>
                                    </div>
                                    <div class="mt-2">
                                        <a
                                            v-for="item in project.demo"
                                            :key="item.link"
                                            :href="item.link"
                                            target="_blank"
                                            class="flex w-fit items-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary/80"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-external-link mr-2 h-4 w-4"
                                                aria-hidden="true"
                                            >
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14 21 3"></path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                            {{ item.text }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
