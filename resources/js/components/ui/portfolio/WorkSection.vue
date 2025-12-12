<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";

interface WorkExperienceCard {
    id: number;
    title: string;
    time: string;
    description: string;
    image?: string;
    rotation: "left" | "right";
    delay: number;
}

const workExperiences: WorkExperienceCard[] = [
    {
        id: 1,
        title: "Attractiepark de Waarbeek",
        time: "Juni 2021 - September 2021 - Vacation Job",
        description:
            "During this summer job, I was responsible for operating rides, ensuring guest safety, and providing excellent customer service in a fun environment.",
        rotation: "left",
        image: "/images/waarbeek.png",
        delay: 0.2,
    },
    {
        id: 2,
        title: "Jumbo Supermarkten",
        time: "Juli 2021 - Juni 2022 - Parttime",
        description:
            "This was my very first job from the age of 15. I worked here for one year as a shelf stacker.",
        rotation: "right",
        image: "/images/jumbo.png",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Bleckmann B.V.",
        time: "Juli 2023 - September 2023 - Vacation Job",
        description:
            "In this vacation job, I assisted as an order picker. Together with three friends, we worked here during the summer vacation.",
        rotation: "left",
        image: "/images/bleckmann.png",
        delay: 0.3,
    },
    {
        id: 4,
        title: "C-o-d-e-s Software Development",
        time: "February 2024 - Juni 2024 - Internship",
        description:
            "Thorough testing across devices and browsers, fixing bugs, and optimizing performance. Quality assurance is key to delivering reliable software.",
        rotation: "right",
        image: "/images/codes.png",
        delay: 0.4,
    },
    {
        id: 5,
        title: "Steakhouse Lutscher Alm B.V.",
        time: "Juni 2022 - Present - Parttime",
        description:
            "I started here as a dishwasher and later moved into the kitchen. I now work as a kitchen assistant, preparing desserts, starters and side dishes.",
        rotation: "left",
        image: "/images/alm.png",
        delay: 0.5,
    },
    {
        id: 6,
        title: "Cube | Digitale Transformatie | Software Oplossingen",
        time: "September 2025 - January 2026 - Internship",
        description:
            "During this internship at Cube, I worked on a project which you can read more about via the link below.",
        rotation: "right",
        image: "/images/cube.png",
        delay: 0.5,
    },
];
</script>

<template>
    <section
        id="work"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- Background glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.22),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28"
        >
            <div class="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
                <!-- LEFT HEADER -->
                <div
                    v-motion="{
                        initial: { opacity: 0, y: 40 },
                        visibleOnce: { opacity: 1, y: 0 },
                        transition: { duration: 0.9, delay: 0.1, ease: 'easeOut' },
                    }"
                    class="flex flex-col items-start gap-6 lg:sticky lg:top-[10%]"
                >
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60 backdrop-blur"
                    >
                        <Sparkles class="h-3 w-3 text-rose-300" />
                        <span>Career Journey</span>
                    </div>

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
                            My journey as a software developer and student. From
                            internships to part-time jobs, each step contributed to my
                            professional growth.
                        </p>
                    </div>

                    <button
                        class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-400 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                    >
                        Download CV
                    </button>
                </div>

                <!-- RIGHT CARDS -->
                <div class="flex flex-col">
                    <div
                        v-for="card in workExperiences"
                        :key="card.id"
                        :class="[
                            'lg:sticky lg:top-[10%] px-6 pb-6 pt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm shadow-lg relative transition-all duration-300 group active:scale-[0.98] active:shadow-xl',
                            'md:hover:bg-white/[0.07] md:hover:border-white/20 md:hover:scale-[1.02]',
                            card.rotation === 'left'
                                ? 'lg:-rotate-2 md:hover:lg:-rotate-1'
                                : 'lg:rotate-2 md:hover:lg:rotate-1',
                            card.id !== workExperiences.length ? 'mb-8' : '',
                        ]"
                    >
                        <div
                            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-transparent to-rose-500/0 opacity-0 md:group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                        />

                        <div
                            class="relative flex items-center justify-between gap-4 mb-5"
                        >
                            <div class="flex flex-col gap-1.5 flex-1">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <h2
                                        class="text-xl sm:text-2xl font-semibold text-white md:group-hover:text-indigo-200 transition-colors duration-300"
                                    >
                                        {{ card.title }}
                                    </h2>

                                    <a
                                        v-if="card.id === 6"
                                        href="/stage"
                                        class="inline-flex items-center gap-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-medium text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-colors"
                                    >
                                        Read More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3 w-3"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                                <p
                                    class="text-xs sm:text-sm text-white/40 font-medium"
                                >
                                    {{ card.time }}
                                </p>
                            </div>

                            <div
                                class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    v-if="card.image"
                                    :class="[
                                        'w-full h-full rounded-xl shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
                                        card.image.includes('codes.png')
                                            ? 'bg-black p-2'
                                            : 'bg-white p-2',
                                    ]"
                                >
                                    <img
                                        :src="card.image"
                                        :alt="card.title"
                                        class="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <div
                                class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/0 to-white/5 px-3 py-3 sm:px-4 sm:py-3 backdrop-blur-md"
                            >
                                <p
                                    class="text-xs sm:text-sm leading-relaxed text-white/70 group-hover:text-white/75 transition-colors duration-300"
                                >
                                    {{ card.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
