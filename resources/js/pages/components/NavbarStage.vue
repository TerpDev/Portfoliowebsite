<script setup lang="ts">
import { ArrowLeft, BookOpen, Code2, Home, Info, Book, Lightbulb } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

type SectionId = 'home' | 'about' | 'voorwoord' | 'opdracht';

const sections: { id: SectionId; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Wat is Cube?', icon: Info },
    { id: 'voorwoord', label: 'Voorwoord & inleiding', icon: BookOpen },
    { id: 'opdracht', label: 'Stage opdracht', icon: Code2 },
    { id: 'starrt', label: 'STARRT', icon: BookOpen },
    { id: 'persoonlijke-ontwikkeling', label: 'Leerdoelen', icon: Book },
    { id: 'Conclusie', label: 'Conclusie & Eindwoord', icon: Lightbulb },

];

const activeSection = ref<SectionId>('home');
const menuOpen = ref(false);

const goTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeSection.value = id;
    menuOpen.value = false;
};

const updateActiveSection = () => {
    let closestId: SectionId | null = null;
    let closestOffset = Infinity;

    sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const offset = Math.abs(rect.top);

        if (offset < closestOffset) {
            closestOffset = offset;
            closestId = s.id;
        }
    });

    if (closestId) {
        activeSection.value = closestId;
    }
};

const onScroll = () => updateActiveSection();

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <!-- DESKTOP SIDEBAR -->
    <aside
        class="fixed top-0 left-0 z-40 hidden h-full w-60 flex-col justify-between border-r border-white/10 bg-black backdrop-blur-xl md:flex"
    >
        <!-- Bovenkant: logo + info -->
        <div class="space-y-4 border-b border-white/10 px-4 pt-5 pb-4">
            <svg
                aria-hidden="true"
                class="h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 77 24"
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M52.409 6.75a7.47 7.47 0 0 1 2.621 1.835 8.187 8.187 0 0 1 1.685 2.833c.392 1.105.591 2.327.591 3.634 0 1.285-.206 2.497-.613 3.602a8.336 8.336 0 0 1-1.729 2.836 7.726 7.726 0 0 1-2.663 1.851c-1.04.437-2.183.659-3.394.659-1.3 0-3.145-.495-4.544-1.867v1.395h-4.138V0h4.138v7.684c1.875-1.536 4.384-1.582 4.673-1.582 1.213 0 2.347.218 3.373.648Zm-.27 12.182a4.972 4.972 0 0 0 1.016-1.69 6.389 6.389 0 0 0 .367-2.19c0-.784-.123-1.522-.367-2.191a4.972 4.972 0 0 0-1.016-1.69 4.501 4.501 0 0 0-1.553-1.093 5.066 5.066 0 0 0-2.002-.393c-1.438 0-2.663.507-3.542 1.464-.886.966-1.354 2.315-1.354 3.903 0 1.587.469 2.936 1.354 3.902.879.958 2.104 1.464 3.542 1.464.718 0 1.391-.132 2.002-.392a4.512 4.512 0 0 0 1.553-1.094Zm20.75 1.208H76.8v3.793h-3.911V20.14Zm-41.835-.877c.678-.728 1.022-1.804 1.022-3.197V6.467h4.174v17.034h-4.174v-2.05a5.222 5.222 0 0 1-1.93 1.764c-.897.477-1.962.718-3.164.718-.992 0-1.895-.152-2.685-.453a5.357 5.357 0 0 1-2.02-1.34c-.547-.585-.967-1.308-1.248-2.146-.279-.837-.421-1.794-.421-2.846V6.467h4.174v9.707c0 1.471.267 2.516.817 3.196.534.66 1.354.98 2.504.98 1.286 0 2.277-.365 2.95-1.087Zm45.144-8.413c.39.999.589 2.104.589 3.284l-.001 2.674-12.591-.003c.105 1.077.517 1.9 1.225 2.451.763.593 1.887.894 3.341.894h1.07v3.782h-1.07c-2.628 0-4.83-.834-6.366-2.411-1.534-1.576-2.345-3.83-2.345-6.524 0-2.652.806-4.897 2.332-6.491 1.53-1.6 3.686-2.444 6.234-2.444 1.195 0 2.312.195 3.323.58.992.38 1.863.935 2.588 1.65a7.295 7.295 0 0 1 1.671 2.558Zm-10.817-.392c-.741.67-1.153 1.613-1.197 2.733h8.505c-.036-1.223-.377-2.16-1.013-2.787-.685-.674-1.738-1.016-3.131-1.016-1.296 0-2.39.37-3.164 1.07ZM11.78 19.73c.732-.513 1.227-1.265 1.476-2.235l.058-.234h3.935l-.052.354c-.277 1.88-1.212 3.469-2.701 4.592-1.478 1.115-3.415 1.704-5.604 1.704-2.676 0-4.933-.874-6.526-2.526C.817 19.783 0 17.568 0 14.982s.819-4.8 2.365-6.405c1.593-1.652 3.85-2.525 6.526-2.525 4.462 0 7.72 2.456 8.3 6.257l.054.356h-3.939l-.06-.231c-.252-.96-.75-1.703-1.48-2.21-.739-.513-1.699-.773-2.851-.773-.796 0-1.522.127-2.156.377A4.262 4.262 0 0 0 5.176 10.9c-.882.954-1.35 2.366-1.35 4.08 0 1.716.467 3.127 1.35 4.082.433.469.966.83 1.583 1.073.634.25 1.36.377 2.156.377 1.16 0 2.122-.263 2.864-.782Z"
                    clip-rule="evenodd"
                ></path>
            </svg>

            <div class="flex flex-col gap-1 pt-4">
                <p class="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                    Stageverslag
                </p>
                <p class="text-sm font-medium text-zinc-100">
                    Cube • Sept 2025 – Jan 2026
                </p>
            </div>
        </div>

        <!-- Nav items -->
        <nav class="flex-1 space-y-1 overflow-y-auto px-3 py-6">
            <button
                v-for="s in sections"
                :key="s.id"
                @click="goTo(s.id)"
                class="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-150"
                :class="[
                    activeSection === s.id
                        ? 'border border-white/20 bg-white/10 text-white shadow-[0_12px_30px_rgba(0,0,0,0.7)]'
                        : 'border border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.03] hover:text-white',
                ]"
            >
                <component
                    :is="s.icon"
                    class="h-4 w-4"
                    :class="activeSection === s.id ? 'text-indigo-300' : 'text-zinc-500'"
                />
                <span class="text-left">
                    {{ s.label }}
                </span>
            </button>
        </nav>

        <!-- Onderkant: terug naar portfolio -->
        <div class="flex items-center justify-between border-t border-white/10 px-4 pt-3 pb-4">
            <a href="/">
                <button
                    class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-white/70 hover:text-white"
                >
                    <ArrowLeft class="h-4 w-4" />
                    <span>Terug naar portfolio</span>
                </button>
            </a>
        </div>
    </aside>

    <div class="fixed top-4 left-4 z-40 md:hidden">
        <div
            class="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md scale-100 hover:scale-95 duration-400 cursor-pointer"
        >
            <a href="/">Ga terug naar home</a>
        </div>
    </div>

    <!-- Burger rechtsboven + dropdown -->
    <div class="fixed top-4 right-4 z-40 md:hidden">
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
                        class="block w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >

                        {{ s.label }}
                    </button>
                </div>
            </transition>
        </div>
    </div>

    <!-- Logo onder op mobiel -->
    <div class="fixed bottom-4 right-4 z-40 md:hidden">
        <svg
            aria-hidden="true"
            class="h-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 77 24"
        >
            <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M52.409 6.75a7.47 7.47 0 0 1 2.621 1.835 8.187 8.187 0 0 1 1.685 2.833c.392 1.105.591 2.327.591 3.634 0 1.285-.206 2.497-.613 3.602a8.336 8.336 0 0 1-1.729 2.836 7.726 7.726 0 0 1-2.663 1.851c-1.04.437-2.183.659-3.394.659-1.3 0-3.145-.495-4.544-1.867v1.395h-4.138V0h4.138v7.684c1.875-1.536 4.384-1.582 4.673-1.582 1.213 0 2.347.218 3.373.648Zm-.27 12.182a4.972 4.972 0 0 0 1.016-1.69 6.389 6.389 0 0 0 .367-2.19c0-.784-.123-1.522-.367-2.191a4.972 4.972 0 0 0-1.016-1.69 4.501 4.501 0 0 0-1.553-1.093 5.066 5.066 0 0 0-2.002-.393c-1.438 0-2.663.507-3.542 1.464-.886.966-1.354 2.315-1.354 3.903 0 1.587.469 2.936 1.354 3.902.879.958 2.104 1.464 3.542 1.464.718 0 1.391-.132 2.002-.392a4.512 4.512 0 0 0 1.553-1.094Zm20.75 1.208H76.8v3.793h-3.911V20.14Zm-41.835-.877c.678-.728 1.022-1.804 1.022-3.197V6.467h4.174v17.034h-4.174v-2.05a5.222 5.222 0 0 1-1.93 1.764c-.897.477-1.962.718-3.164.718-.992 0-1.895-.152-2.685-.453a5.357 5.357 0 0 1-2.02-1.34c-.547-.585-.967-1.308-1.248-2.146-.279-.837-.421-1.794-.421-2.846V6.467h4.174v9.707c0 1.471.267 2.516.817 3.196.534.66 1.354.98 2.504.98 1.286 0 2.277-.365 2.95-1.087Zm45.144-8.413c.39.999.589 2.104.589 3.284l-.001 2.674-12.591-.003c.105 1.077.517 1.9 1.225 2.451.763.593 1.887.894 3.341.894h1.07v3.782h-1.07c-2.628 0-4.83-.834-6.366-2.411-1.534-1.576-2.345-3.83-2.345-6.524 0-2.652.806-4.897 2.332-6.491 1.53-1.6 3.686-2.444 6.234-2.444 1.195 0 2.312.195 3.323.58.992.38 1.863.935 2.588 1.65a7.295 7.295 0 0 1 1.671 2.558Zm-10.817-.392c-.741.67-1.153 1.613-1.197 2.733h8.505c-.036-1.223-.377-2.16-1.013-2.787-.685-.674-1.738-1.016-3.131-1.016-1.296 0-2.39.37-3.164 1.07ZM11.78 19.73c.732-.513 1.227-1.265 1.476-2.235l.058-.234h3.935l-.052.354c-.277 1.88-1.212 3.469-2.701 4.592-1.478 1.115-3.415 1.704-5.604 1.704-2.676 0-4.933-.874-6.526-2.526C.817 19.783 0 17.568 0 14.982s.819-4.8 2.365-6.405c1.593-1.652 3.85-2.525 6.526-2.525 4.462 0 7.72 2.456 8.3 6.257l.054.356h-3.939l-.06-.231c-.252-.96-.75-1.703-1.48-2.21-.739-.513-1.699-.773-2.851-.773-.796 0-1.522.127-2.156.377A4.262 4.262 0 0 0 5.176 10.9c-.882.954-1.35 2.366-1.35 4.08 0 1.716.467 3.127 1.35 4.082.433.469.966.83 1.583 1.073.634.25 1.36.377 2.156.377 1.16 0 2.122-.263 2.864-.782Z"
                clip-rule="evenodd"
            ></path>
        </svg>
    </div>
</template>
