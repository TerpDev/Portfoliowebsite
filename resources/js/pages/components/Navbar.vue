<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

// optioneel: simpele anchors naar sections
const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work Experience" },
    { id: "timeline", label: "Timeline" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
];

const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    menuOpen.value = false;
};
</script>

<template>
    <!-- Brand linksboven -->
    <div class="fixed top-4 left-4 z-40">
        <a
            href="#"
            @click.prevent="goTo('home')"
            class="flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/70 cursor-pointer"
        >
            <span class="text-sm font-bold">
                <span class="text-indigo-400">Terp</span><span class="text-white">Dev</span><span class="text-zinc-500">.dev</span>
            </span>
        </a>
    </div>

    <!-- Burger rechtsboven + dropdown -->
    <div class="fixed top-4 right-4 z-40">
        <div class="relative">
            <!-- Burger button -->
            <button
                @click="menuOpen = !menuOpen"
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-white shadow-[0_18px_45px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/70 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
            >
                <transition
                    mode="out-in"
                    enter-active-class="transition duration-150 ease-out"
                    enter-from-class="opacity-0 scale-75 rotate-12"
                    enter-to-class="opacity-100 scale-100 rotate-0"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="opacity-100 scale-100 rotate-0"
                    leave-to-class="opacity-0 scale-75 -rotate-12"
                >
                    <svg
                        v-if="!menuOpen"
                        key="burger"
                        class="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.7"
                            d="M4 7h16M4 12h16M4 17h16"
                        />
                    </svg>
                    <svg
                        v-else
                        key="close"
                        class="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.7"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </transition>
            </button>

            <!-- Dropdown -->
            <transition
                enter-active-class="transition duration-180 ease-out"
                enter-from-class="opacity-0 -translate-y-2 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-2 scale-95"
            >
                <div
                    v-if="menuOpen"
                    class="absolute top-full right-0 mt-3 w-48 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
                >
                    <button
                        v-for="s in sections"
                        :key="s.id"
                        @click="goTo(s.id)"
                        class="block w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white cursor-pointer"
                    >
                        {{ s.label }}
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>
