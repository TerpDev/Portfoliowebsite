<script setup lang="ts">
import {
    siAlpinedotjs,
    siCss,
    siDuckduckgo,
    siFigma,
    siFilament,
    siHeadlessui,
    siHtml5,
    siJavascript,
    siLaravel,
    siMysql,
    siPrimevue,
    siSharp,
    siSqlite,
    siTailwindcss,
    siVuedotjs,
} from "simple-icons";

type SimpleIcon = {
    title: string;
    hex: string;
    path: string;
};

interface Item {
    label: string;
    icon: SimpleIcon;
}

interface Section {
    title: string;
    items: Item[];
}

const sections: Section[] = [
    {
        title: "Frontend Development",
        items: [
            { label: "HTML5", icon: siHtml5 },
            { label: "CSS", icon: siCss },
            { label: "Tailwind CSS", icon: siTailwindcss },
            { label: "Vue.js", icon: siVuedotjs },
            { label: "PrimeVue", icon: siPrimevue },
            { label: "HeadlessUI", icon: siHeadlessui },
            { label: "AlpineJS", icon: siAlpinedotjs },
            { label: "JavaScript", icon: siJavascript },
        ],
    },
    {
        title: "Backend Development",
        items: [
            { label: "Laravel", icon: siLaravel },
            { label: "Filament", icon: siFilament },
            { label: "MySQL", icon: siMysql },
            { label: "SQLite", icon: siSqlite },
        ],
    },
    {
        title: "Programming Languages",
        items: [{ label: "C#", icon: siSharp }],
    },
    {
        title: "Design & Development tools",
        items: [
            { label: "Figma", icon: siFigma },
            { label: "Responsive design", icon: siDuckduckgo },
        ],
    },
];

// simple-icons -> inline SVG string
const getIconSvg = (icon: SimpleIcon) =>
    `<svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#${icon.hex}" d="${icon.path}" />
   </svg>`;
</script>

<template>
    <section
        id="skills"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- zachte background glow in dezelfde vibe als je andere sections -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.2),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-28"
        >
            <!-- header -->
            <!-- HEADER -->
            <div
                v-motion="{
    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.7, ease: 'easeOut' },
  }"
                class="mb-12 text-center space-y-4"
            >
                <!-- pill -->
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60 backdrop-blur"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span>Skills</span>
                </div>

                <!-- title -->
                <h2
                    class="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
                >
                    Tools & technologies I work with
                </h2>

                <!-- subtitle -->
                <p class="text-sm sm:text-base text-white/50 max-w-xl mx-auto">
                    A overview of the frontend, backend and tooling I use to build
                    clean and user-friendly applications.
                </p>
            </div>

            <!-- sections grid -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div
                    v-for="(section, index) in sections"
                    :key="section.title"
                    v-motion="{
            initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
            visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
            transition: {
              duration: 0.6,
              delay: 0.12 + index * 0.08,
              ease: 'easeOut',
            },
          }"
                    class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                >
                    <h2 class="text-xl font-semibold tracking-tight text-white">
                        {{ section.title }}
                    </h2>

                    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div
                            v-for="item in section.items"
                            :key="`${section.title}-${item.label}`"
                            class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_55px_rgba(0,0,0,0.9)]"
                        >
                            <!-- icon -->
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-white shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                                v-html="getIconSvg(item.icon)"
                            />
                            <!-- label -->
                            <p
                                class="text-sm font-medium tracking-wide text-white/85 group-hover:text-white"
                            >
                                {{ item.label }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
