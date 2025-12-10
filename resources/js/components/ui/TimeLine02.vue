<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const timelineRef = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);

onMounted(() => {
    const updateScroll = () => {
        if (!timelineRef.value) return;

        const rect = timelineRef.value.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const current = windowHeight - rect.top;
        const end = rect.height + windowHeight * 0.2;
        const progress = current / end;

        scrollProgress.value = Math.min(Math.max(progress, 0), 1);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    onUnmounted(() => {
        window.removeEventListener("scroll", updateScroll);
    });
});

interface TimelineItem {
    date: string;
    title: string;
    location: string;
    content: string;
}

const timelineItems: TimelineItem[] = [
    {
        date: "2016 - 2020",
        title: "MAVO - Van der Waalslaan",
        location: "Bonhoeffer College, Enschede",
        content:
            "I completed my secondary education at Bonhoeffer College, " +
            "where I earned my MAVO diploma. During the COVID period I " +
            "spent a lot of time behind my computer in online classes, " +
            "which is when I realised how much I enjoy working with computers — " +
            "taking them apart, fixing things and experimenting. That curiosity " +
            "became the starting point of my software development journey.",
    },
    {
        date: "2020 - 2022",
        title: "MBO - Software Developer",
        location: "ROC van Twente, Enschede",
        content:
            "After I finished MAVO, I started my education as a Software Developer at ROC van Twente. " +
            "Here I was learning the basics of programming, especially in game development C# console " +
            "applications and Unity. Also got introduced to web development with HTML, CSS & JavaScript." +
            " When we went to look for an internship in the second year, I found a place that focused on " +
            "web development with TailwindCSS and Laravel, which I really enjoyed working with. Eventually " +
            "they decided to use Vue.js for frontend development with TailwindCSS, which I also really liked. " +
            "So after my internship I decided with a couple of my friends to go to Hengelo to continue my education " +
            "as a Software Developer there, because in Hengelo they focused more on web & app development.",
    },
    {
        date: "2024 - present",
        title: "MBO - Software Developer",
        location: "ROC van Twente, Hengelo",
        content:
            "After two years I continued my education as a Software Developer at ROC van Twente in Hengelo. Here we dove more into the world of web development with a focus on fullstack development. This was new for me: we worked for the frontend with MVC applications, for the backend with .NET Core and for database we used MySQL. We worked with Azure DevOps for planning and version control with Git. In my free time I was learning more and more about modern frontend development, for example with Vue.js and TailwindCSS. Now I'm working an internship at Cube in Oldenzaal where I'm working specifically on the backend with Laravel & Filament.",
    },
];

const isItemActive = (index: number) => {
    if (!timelineItems.length) return false;
    const step = 1 / timelineItems.length;
    const threshold = step * (index + 0.4);
    return scrollProgress.value >= threshold;
};
</script>

<template>
    <section
        id="timeline"
        class="relative w-full border-t border-zinc-800 bg-[#030303] text-white"
    >
        <!-- zachte achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(148,163,184,0.12),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.16),rgba(0,0,0,0)_60%)]"
        />

        <div
            class="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28 max-w-4xl"
        >
            <!-- header / titel -->
            <div
                v-motion="{
          initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
          visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
        }"
                class="mb-12 text-center space-y-4"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-400 backdrop-blur"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>Timeline</span>
                </div>

                <div class="space-y-2">
                    <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                        The journey so far
                    </h2>
                    <p
                        class="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto"
                    >
                        Een korte tijdlijn van hoe ik als developer ben gegroeid – van de
                        eerste code tot de projecten waar ik nu aan werk.
                    </p>
                </div>
            </div>

            <!-- verticale lijn + items -->
            <div ref="timelineRef" class="relative mx-auto max-w-2xl">
                <!-- track + glow wrapper -->
                <div
                    class="pointer-events-none absolute left-4 top-0 bottom-0 -translate-x-1/2 flex justify-center"
                >
                    <div class="w-[2px] rounded-full bg-zinc-700/35" />
                    <div
                        class="absolute inset-0 w-[10px] -translate-x-[4px] bg-gradient-to-b from-white/0 via-white/15 to-white/0 blur-xl"
                    />
                </div>

                <!-- progress line -->
                <div
                    class="pointer-events-none absolute left-4 top-0 -translate-x-1/2"
                    :style="{ height: `${scrollProgress * 100}%` }"
                >
                    <div
                        class="h-full w-[3px] rounded-full bg-gradient-to-b from-white via-white/70 to-white/40 shadow-[0_0_22px_rgba(248,250,252,0.35)]"
                    />
                </div>

                <!-- items -->
                <div
                    v-for="(item, index) in timelineItems"
                    :key="item.date + item.title"
                    class="relative pl-10 mb-10 last:mb-0"
                >
                    <!-- dot -->
                    <div class="absolute left-4 top-[1.45rem] -translate-x-1/2">
                        <div
                            class="h-3 w-3 rounded-full ring-4 ring-[#030303] transition-all duration-300"
                            :class="
                isItemActive(index)
                  ? 'bg-white scale-110 shadow-[0_0_18px_rgba(248,250,252,0.75)]'
                  : 'bg-zinc-700/70 scale-90'
              "
                        />
                    </div>

                    <!-- content -->
                    <div
                        class="space-y-2 transform-gpu transition-all duration-500"
                        :class="
              isItemActive(index)
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm'
            "
                    >
                        <p
                            class="text-xs uppercase tracking-[0.18em] text-zinc-400"
                        >
                            {{ item.date }}
                        </p>

                        <h3 class="text-lg sm:text-xl font-medium">
                            {{ item.title }}
                        </h3>
                        <p
                            class="text-xs uppercase tracking-[0.18em] text-zinc-400"
                        >
                            {{ item.location }}
                        </p>

                        <div
                            class="rounded-2xl border border-zinc-800/90 bg-zinc-900/90 px-4 py-3 sm:px-5 sm:py-4 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.9)]"
                        >
                            <p
                                class="text-sm sm:text-base leading-relaxed text-zinc-300"
                            >
                                {{ item.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
