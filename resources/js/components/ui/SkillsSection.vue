<script setup lang="ts">
const skillGroups = [
    {
        title: "Frontend Development",
        skills: [
            "HTML5",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "PrimeVue",
            "Headless UI",
            "Alpine.js",
        ],
    },
    {
        title: "Backend Development",
        skills: ["Laravel", "Filament", "MySQL", "SQLite"],
    },
    {
        title: "Programming Languages",
        skills: ["C#"],
    },
    {
        title: "Design & Development Tools",
        skills: ["Figma", "Responsive design"],
    },
];
</script>

<template>
    <section
        id="skills"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.18),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24"
        >
            <!-- header -->
            <div
                v-motion="{
          initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
          visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.7, ease: 'easeOut' },
        }"
                class="mb-12 text-center space-y-3"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>Skills</span>
                </div>

                <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Tools & technologies I work with
                </h2>
                <p class="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
                    A mix of frontend, backend and tooling I use to build clean,
                    scalable and user-friendly applications.
                </p>
            </div>

            <!-- grid -->
            <div class="grid gap-6 md:grid-cols-2">
                <div
                    v-for="group in skillGroups"
                    :key="group.title"
                    v-motion="{
            initial: { opacity: 0, y: 24, scale: 0.97 },
            visibleOnce: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.6, ease: 'easeOut' },
          }"
                    class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                >
                    <h3
                        class="mb-4 text-lg font-semibold tracking-tight text-white"
                    >
                        {{ group.title }}
                    </h3>

                    <div class="flex flex-wrap gap-2">
            <span
                v-for="skill in group.skills"
                :key="skill"
                class="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              {{ skill }}
            </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
