<script setup lang="ts">
import { Clock, Sparkles, FolderGit2 } from 'lucide-vue-next';
import ProjectCard from '@/components/ui/ProjectCard.vue';

const projects = [
    {
        title: 'Portfolio',
        description: 'My personal portfolio built with Vue.js and TailwindCSS with a lot of micro-animations.',
        imgSrc: '/images/porthero.png',
        link: '#',
    },
    {
        title: 'MTF Automobielen',
        description: 'Frontend work in Vue.js + TailwindCSS during my second-year internship.',
        imgSrc: '/images/img.png',
        link: 'https://mtfautomobielen.nl/',
    },
    {
        title: 'Auto Horsthuis',
        description: 'Website for a garage in Hengelo built with TailwindCSS & Laravel (backend in progress).',
        imgSrc: '/images/autohorsthuis.png',
        link: 'https://autohorsthuis.terpdev.nl/',
    },
];
</script>

<template>
    <section id="projects" class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-28">
            <!-- header -->
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
                    <span>Projects</span>
                </div>

                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Some things I’ve been working on</h2>
                <p class="text-sm text-white/60 sm:text-base max-w-xl">
                    A mix of school projects, internship work and side projects – all focused on clean UX, smooth interactions and solid code.
                </p>
            </div>

            <!-- grid -->
            <div class="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <ProjectCard
                    v-for="(project, i) in projects"
                    :key="project.title"
                    :img-src="project.imgSrc"
                    :title="project.title"
                    :description="project.description"
                    :link="project.link"
                    :index="i"
                />
            </div>
        </div>
    </section>
</template>
