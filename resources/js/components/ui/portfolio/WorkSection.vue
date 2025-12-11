<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";

interface WorkExperienceCard {
    id: number;
    title: string;
    time: string;
    description: string;
    image?: string;
    rotation: 'left' | 'right';
    delay: number;
}

const workExperiences: WorkExperienceCard[] = [
    {
        id: 1,
        title: 'Attractiepark de waarbeek',
        time: 'Juni 2021 - September 2021 - Vacation Job',
        description: 'During this summer job, I was responsible for operating rides, ensuring guest safety, and providing excellent customer service in a fun environment.',
        rotation: 'left',
        image: '/images/waarbeek.png',
        delay: 0.2
    },{
        id: 2,
        title: 'Jumbo supermarkten',
        time: 'Juli 2021 - Juni 2022 - Parttime',
        description: 'This was my very first job from the age of 15, I worked here for 1 year as a shelf stacker',
        rotation: 'right',
        image: '/images/jumbo.png',
        delay: 0.2
    },
    {
        id: 3,
        title: 'Bleckmann B.V',
        time: 'Juli 2023 - September 2023 - Vacation Job',
        description: 'In this vacation job, I assisted as order picker, with 3 of my friend we worked here in the summer vacation.',
        rotation: 'left',
        image: '/images/bleckmann.png',
        delay: 0.3
    },
    {
        id: 4,
        title: 'C-o-d-e-s Software Development',
        time: 'February 2024 - Juni 2024 - Internship',
        description: 'Thorough testing across devices and browsers, fixing bugs, and optimizing performance. Quality assurance is key to delivering reliable software.',
        rotation: 'right',
        image: '/images/codes.png',
        delay: 0.4
    },
    {
        id: 5,
        title: 'Steakhouse Lutscher Alm B.V.',
        time: 'Juni 2022 - Present - Parttime',
        description: 'Here I started working as a dishwasher, after some time I started to work more in the kitchen helping the chefs. ' +
            'Now I am working as kitchen help making desserts, starters & side dishes.',
        rotation: 'left',
        image: '/images/alm.png',
        delay: 0.5
    },
    {
        id: 6,
        title: 'Cube | Digitale Transformatie | Software Oplossingen',
        time: 'September 2025 - January 2026 - Internship',
        description: 'During this internship at Cube, I got a project which you can read about with this link:',
        rotation: 'right',
        image: '/images/cube.png',
        delay: 0.5
    }
];
</script>

<template>
    <section class="relative w-full border-t border-white/5 bg-[#030303] text-white">
        <!-- Soft background glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.22),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28">
            <div class="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
                <!-- Left Section Header - Sticky on desktop -->
                <div
                    v-motion="{
                        initial: { opacity: 0, y: 40 },
                        visibleOnce: { opacity: 1, y: 0 },
                        transition: { duration: 0.9, delay: 0.1, ease: 'easeOut' },
                    }"
                    class="flex flex-col items-start gap-6 lg:sticky lg:top-[10%]"
                >
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60 backdrop-blur"
                    >
                        <Sparkles class="h-3 w-3 text-rose-300" />
                        <span>Career Journey</span>
                    </div>

                    <!-- Title -->
                    <div class="space-y-4">
                        <h2
                            class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
                        >
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                            >
                                Work Experience
                            </span>
                            <br />
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                            >
                                & Professional Growth
                            </span>
                        </h2>

                        <p
                            class="text-base sm:text-lg text-white/45 leading-relaxed font-light tracking-wide max-w-xl"
                        >
                            My journey as a software developer and normal student where I worked.
                            From internships to normal jobs, each step has contributed to my skills and professional growth.
                        </p>
                    </div>

                    <button
                        class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-400 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 cursor-pointer"
                    >
                        <span>Download CV</span>
                    </button>
                </div>

                <!-- Right Section - Cards (Data-driven) -->
                <div class="flex flex-col">
                    <div
                        v-for="card in workExperiences"
                        :key="card.id"
                        v-motion="{
                            initial: { opacity: 0, x: 40 },
                            visibleOnce: { opacity: 1, x: 0 },
                            transition: { duration: 0.7, delay: card.delay, ease: 'easeOut' },
                        }"
                        :class="[
                            'lg:sticky lg:top-[10%] px-6 pb-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-lg relative hover:bg-white/[0.05] transition-all md:rotate-0',
                            card.rotation === 'left' ? 'lg:-rotate-2' : 'lg:rotate-2',
                            card.id !== workExperiences.length ? 'mb-8' : ''
                        ]"
                    >
                        <div class="flex items-center justify-between gap-4 mb-4 mt-2">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-2xl font-semibold text-white">
                                    {{ card.title }}
                                </h2>
                                <p class="text-sm text-gray-500">
                                    {{ card.time }}
                                </p>
                            </div>


                            <!-- Image inline with title -->
                            <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                                <slot :name="`step${card.id}Image`">
                                    <div v-if="card.image"
                                         :class="[
                                             'w-full h-full rounded-xl mt-2 shadow-md flex items-center justify-center',
                                             card.image.includes('codes.png') ? 'bg-black' : 'bg-white p-2'
                                         ]">
                                        <img :src="card.image" :alt="card.title" class="w-full h-full object-contain" />
                                    </div>
                                    <div v-else class="w-full h-full rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <span class="text-2xl font-bold text-white/20">{{ String(card.id).padStart(2, '0') }}</span>
                                    </div>
                                </slot>
                            </div>
                        </div>

                        <p class="text-sm text-white/45 leading-relaxed font-light">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


