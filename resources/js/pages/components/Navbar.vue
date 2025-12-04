
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => {
    scrolled.value = (window.scrollY || 0) > 40;
};
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const active = ref('Home');
const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

function onNavClick(e: MouseEvent, href: string, label: string) {
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    active.value = label;
    menuOpen.value = false;
}

// Scrollspy via IntersectionObserver
let io: IntersectionObserver | null = null;

onMounted(() => {
    const ids = links.map((l) => l.href.replace('#', ''));
    const sections = ids
        .map((id) => document.getElementById(id))
        .filter((n): n is HTMLElement => !!n);

    io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = (entry.target as HTMLElement).id;
                    const found = links.find((l) => l.href === `#${id}`);
                    if (found) active.value = found.label;
                }
            });
        },
        {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0,
        },
    );

    sections.forEach((sec) => io?.observe(sec));
});

onUnmounted(() => {
    io?.disconnect();
    io = null;
});
</script>

<template>
    <!-- floating glass nav, gecentreerd -->
    <nav
        class="fixed inset-x-0 top-4 z-40 flex justify-center px-4 transition-transform duration-500 ease-out will-change-transform"
        :class="scrolled ? '-translate-y-1' : 'translate-y-0'"
        v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-t-6 animate-duration-500',
            once: true,
            intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },
        }"
        style="animation-delay: 40ms"
    >
        <div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
            <!-- Glass shell -->
            <div
                class="flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 shadow-lg backdrop-blur-2xl transition-all duration-500 sm:px-5"
                :class="scrolled
                    ? 'border-white/50 bg-white/85 shadow-violet-500/15 dark:border-zinc-800 dark:bg-zinc-950/90'
                    : 'border-white/40 bg-white/70 shadow-violet-500/10 dark:border-zinc-800/80 dark:bg-zinc-950/80'"
            >
                <!-- Brand -->
                <a
                    href="#hero"
                    @click.prevent="(e) => onNavClick(e as any, '#hero', 'Home')"
                    class="flex items-center gap-2"
                >
                    <div class="relative">
                        <div
                            class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-70 blur-md"
                        ></div>
                        <div
                            class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white shadow-md shadow-violet-500/40"
                        >
                            DT
                        </div>
                    </div>
                    <div class="hidden flex-col leading-tight sm:flex">
                        <span class="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                            Daniel
                            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Terpstra
                            </span>
                        </span>
                        <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                            Software Developer
                        </span>
                    </div>
                </a>

                <!-- Desktop nav -->
                <ul class="hidden items-center justify-center gap-1 md:flex">
                    <li
                        v-for="(link, i) in links"
                        :key="link.label"
                        class="cursor-pointer"
                    >
                        <a
                            :href="link.href"
                            @click="(e) => onNavClick(e as MouseEvent, link.href, link.label)"
                            class="group relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200"
                            :class="active === link.label
    ? 'text-violet-300 dark:text-violet-200 after:scale-x-100 after:opacity-100'
    : 'text-zinc-600 hover:text-white dark:text-zinc-400 dark:hover:text-white'"
                            :style="{ animationDelay: `${120 + i * 50}ms` }"
                        >
                            <span class="relative z-10">
                                {{ link.label }}
                            </span>
                            <!-- slim gradient lijntje onder active/hover -->
                            <span
                                class="pointer-events-none absolute inset-x-2 -bottom-1 h-[2px] origin-center rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 transition-all duration-300"
                                :class="active === link.label
        ? 'scale-x-100 opacity-100'
        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'"
                            ></span>

                        </a>
                    </li>
                </ul>

                <!-- Desktop right side -->
                <div class="hidden items-center gap-2 md:flex">
                    <!-- Theme toggle -->
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        title="Toggle theme"
                    >
                        <transition
                            mode="out-in"
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="opacity-0 rotate-90"
                            enter-to-class="opacity-100 rotate-0"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100 rotate-0"
                            leave-to-class="opacity-0 -rotate-90"
                        >
                            <svg
                                v-if="isDark"
                                key="sun"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.22 4.22 5.64 5.64M18.36 18.36 19.78 19.78M1 12h2M21 12h2M4.22 19.78 5.64 18.36M18.36 5.64 19.78 4.22"
                                />
                            </svg>
                            <svg
                                v-else
                                key="moon"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                />
                            </svg>
                        </transition>
                    </button>

                    <!-- Kleine CTA rechts -->
                    <a
                        href="#projects"
                        @click.prevent="(e) => onNavClick(e as any, '#projects', 'Projects')"
                        class="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-zinc-900/40 transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        <span class="relative z-10">View work</span>
                        <span
                            class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/25 to-transparent opacity-80 transition-transform duration-300 group-hover:translate-x-0"
                        ></span>
                    </a>
                </div>

                <!-- Mobile right side -->
                <div class="flex items-center gap-2 md:hidden">
                    <!-- Theme toggle -->
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200/80 bg-white/85 text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        title="Toggle theme"
                    >
                        <svg
                            v-if="isDark"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.22 4.22 5.64 5.64M18.36 18.36 19.78 19.78M1 12h2M21 12h2M4.22 19.78 5.64 18.36M18.36 5.64 19.78 4.22"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            />
                        </svg>
                    </button>

                    <!-- Burger -->
                    <button
                        class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200/80 bg-white/85 text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        @click="menuOpen = !menuOpen"
                        aria-label="Toggle menu"
                    >
                        <svg
                            v-if="!menuOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile dropdown -->
            <transition
                enter-active-class="transition duration-180 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div
                    v-if="menuOpen"
                    class="absolute left-4 right-4 top-[3.4rem] md:hidden"
                >
                    <div
                        class="mx-auto max-w-6xl rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-violet-500/20 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-950/95"
                    >
                        <ul class="flex flex-col gap-1">
                            <li
                                v-for="(link, i) in links"
                                :key="`m-${link.label}`"
                            >
                                <a
                                    :href="link.href"
                                    @click="(e) => onNavClick(e as MouseEvent, link.href, link.label)"
                                    class="block rounded-xl px-3 py-2 text-sm font-medium transition-all duration-150"
                                    :class="active === link.label
                                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                        : 'text-zinc-700 hover:bg-zinc-100/90 dark:text-zinc-200 dark:hover:bg-zinc-900/80'"
                                    :style="{ transitionDelay: `${i * 30}ms` }"
                                >
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>

                        <div class="mt-3">
                            <a
                                href="#contact"
                                @click.prevent="(e) => onNavClick(e as any, '#contact', 'Contact')"
                                class="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/40"
                            >
                                Let’s talk
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>



<!--Sidebar nav !!!!!!!!!!!!!-->
<!--<script setup lang="ts">-->
<!--import { onMounted, onUnmounted, ref } from 'vue';-->
<!--import { useDark, useToggle } from '@vueuse/core';-->

<!--const isDark = useDark();-->
<!--const toggleDark = useToggle(isDark);-->

<!--const scrolled = ref(false);-->
<!--const scrollProgress = ref(0);-->
<!--const activeSection = ref('');-->
<!--const mobileMenuOpen = ref(false);-->

<!--const sections = [-->
<!--    { id: 'hero', label: 'Home', icon: 'home' },-->
<!--    { id: 'about', label: 'About', icon: 'user' },-->
<!--    { id: 'timeline', label: 'Journey', icon: 'timeline' },-->
<!--    { id: 'skills', label: 'Skills', icon: 'code' },-->
<!--    { id: 'projects', label: 'Work', icon: 'briefcase' },-->
<!--    { id: 'contact', label: 'Contact', icon: 'mail' },-->
<!--];-->

<!--const onScroll = () => {-->
<!--    scrolled.value = window.scrollY > 50;-->

<!--    // Calculate scroll progress-->
<!--    const windowHeight = window.innerHeight;-->
<!--    const documentHeight = document.documentElement.scrollHeight;-->
<!--    const scrollTop = window.scrollY;-->
<!--    const scrollRange = documentHeight - windowHeight;-->
<!--    scrollProgress.value = (scrollTop / scrollRange) * 100;-->
<!--};-->

<!--// Smooth scroll to section-->
<!--const scrollToSection = (id: string) => {-->
<!--    const element = document.getElementById(id);-->
<!--    if (element) {-->
<!--        element.scrollIntoView({ behavior: 'smooth', block: 'start' });-->
<!--        mobileMenuOpen.value = false; // Close mobile menu after navigation-->
<!--    }-->
<!--};-->

<!--// Intersection Observer for active section-->
<!--let observer: IntersectionObserver | null = null;-->

<!--onMounted(() => {-->
<!--    window.addEventListener('scroll', onScroll, { passive: true });-->

<!--    observer = new IntersectionObserver(-->
<!--        (entries) => {-->
<!--            entries.forEach((entry) => {-->
<!--                if (entry.isIntersecting) {-->
<!--                    activeSection.value = entry.target.id;-->
<!--                }-->
<!--            });-->
<!--        },-->
<!--        {-->
<!--            rootMargin: '-50% 0px -50% 0px',-->
<!--            threshold: 0,-->
<!--        }-->
<!--    );-->

<!--    sections.forEach((section) => {-->
<!--        const element = document.getElementById(section.id);-->
<!--        if (element) observer?.observe(element);-->
<!--    });-->
<!--});-->

<!--onUnmounted(() => {-->
<!--    window.removeEventListener('scroll', onScroll);-->
<!--    observer?.disconnect();-->
<!--});-->

<!--const getIcon = (icon: string) => {-->
<!--    const icons: Record<string, string> = {-->
<!--        home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',-->
<!--        user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',-->
<!--        timeline: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',-->
<!--        code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',-->
<!--        briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',-->
<!--        mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',-->
<!--    };-->
<!--    return icons[icon] || icons.home;-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--    &lt;!&ndash; Progress bar (always visible) &ndash;&gt;-->
<!--    <div class="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 transition-all duration-300"-->
<!--         :style="{ width: `${scrollProgress}%` }">-->
<!--        <div class="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-white/20 blur-sm"></div>-->
<!--    </div>-->

<!--    <nav-->
<!--        class="sticky top-0 left-0 right-0 z-50 transition-all duration-500 pt-2 lg:hidden"-->
<!--        :class="scrolled ? 'py-2' : 'py-4'"-->
<!--    >-->
<!--        <div class="mx-auto max-w-7xl px-4 sm:px-6 mt-2">-->
<!--            <div-->
<!--                class="relative flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-500"-->
<!--                :class="scrolled-->
<!--                    ? 'border-zinc-200/80 bg-white/80 px-4 py-2.5 shadow-lg shadow-violet-600/10 dark:border-white/10 dark:bg-black/40'-->
<!--                    : 'border-zinc-200/80 bg-white/80 px-6 py-3 dark:border-white/5 dark:bg-white/5'"-->
<!--            >-->
<!--                &lt;!&ndash; Brand with animated gradient &ndash;&gt;-->
<!--                <a-->
<!--                    href="#hero"-->
<!--                    @click.prevent="scrollToSection('hero')"-->
<!--                    class="group relative flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105"-->
<!--                >-->
<!--                    <div class="relative">-->
<!--                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-75 blur-lg transition-opacity group-hover:opacity-100"></div>-->
<!--                        <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-bold text-white shadow-lg">-->
<!--                            DT-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="hidden sm:block">-->
<!--                        <div class="font-bold text-black dark:text-white">-->
<!--                            Daniel <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Terpstra</span>-->
<!--                        </div>-->
<!--                        <div class="text-xs text-zinc-600 dark:text-zinc-400">Software Developer</div>-->
<!--                    </div>-->
<!--                </a>-->

<!--                &lt;!&ndash; Desktop Navigation &ndash;&gt;-->
<!--                <div class="hidden md:flex items-center gap-1">-->
<!--                    <button-->
<!--                        v-for="section in sections"-->
<!--                        :key="section.id"-->
<!--                        @click="scrollToSection(section.id)"-->
<!--                        class="group relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300"-->
<!--                        :class="activeSection === section.id-->
<!--                            ? 'text-black dark:text-white'-->
<!--                            : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white'"-->
<!--                    >-->
<!--                        <span class="relative z-10 flex items-center gap-2">-->
<!--                            <svg-->
<!--                                class="h-4 w-4 transition-transform duration-300 group-hover:scale-110"-->
<!--                                fill="none"-->
<!--                                stroke="currentColor"-->
<!--                                viewBox="0 0 24 24"-->
<!--                            >-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />-->
<!--                            </svg>-->
<!--                            {{ section.label }}-->
<!--                        </span>-->

<!--                        &lt;!&ndash; Active indicator &ndash;&gt;-->
<!--                        <div-->
<!--                            v-if="activeSection === section.id"-->
<!--                            class="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 ring-1 ring-white/10"-->
<!--                        ></div>-->

<!--                        &lt;!&ndash; Hover effect &ndash;&gt;-->
<!--                        <div class="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>-->
<!--                    </button>-->
<!--                </div>-->

<!--                &lt;!&ndash; CTA Button & Theme Toggle &ndash;&gt;-->
<!--                <div class="hidden md:flex items-center gap-3">-->
<!--                    &lt;!&ndash; Theme Toggle &ndash;&gt;-->
<!--                    <button-->
<!--                        @click="toggleDark()"-->
<!--                        type="button"-->
<!--                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-all duration-300 hover:bg-zinc-300 hover:scale-105 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"-->
<!--                        title="Toggle theme"-->
<!--                    >-->
<!--                        <transition-->
<!--                            mode="out-in"-->
<!--                            enter-active-class="transition duration-200 ease-out"-->
<!--                            enter-from-class="opacity-0 rotate-90"-->
<!--                            enter-to-class="opacity-100 rotate-0"-->
<!--                            leave-active-class="transition duration-150 ease-in"-->
<!--                            leave-from-class="opacity-100 rotate-0"-->
<!--                            leave-to-class="opacity-0 -rotate-90"-->
<!--                        >-->
<!--                            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />-->
<!--                            </svg>-->
<!--                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />-->
<!--                            </svg>-->
<!--                        </transition>-->
<!--                    </button>-->

<!--                    &lt;!&ndash; CTA Button &ndash;&gt;-->
<!--                    <a-->
<!--                        href="#contact"-->
<!--                        @click.prevent="scrollToSection('contact')"-->
<!--                        class="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50"-->
<!--                    >-->
<!--                        <span class="relative z-10">Let's Talk</span>-->
<!--                        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-fuchsia-600 to-violet-600 transition-transform duration-300 group-hover:translate-x-0"></div>-->
<!--                    </a>-->
<!--                </div>-->

<!--                &lt;!&ndash; Mobile Menu Button & Theme Toggle &ndash;&gt;-->
<!--                <div class="flex items-center gap-2 md:hidden">-->
<!--                    &lt;!&ndash; Mobile Theme Toggle &ndash;&gt;-->
<!--                    <button-->
<!--                        @click="toggleDark()"-->
<!--                        type="button"-->
<!--                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-colors hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"-->
<!--                        title="Toggle theme"-->
<!--                    >-->
<!--                        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />-->
<!--                        </svg>-->
<!--                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />-->
<!--                        </svg>-->
<!--                    </button>-->

<!--                    &lt;!&ndash; Mobile Menu Button &ndash;&gt;-->
<!--                    <button-->
<!--                        @click="mobileMenuOpen = !mobileMenuOpen"-->
<!--                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-colors hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"-->
<!--                        aria-label="Toggle menu"-->
<!--                    >-->
<!--                        <transition-->
<!--                            mode="out-in"-->
<!--                            enter-active-class="transition duration-150 ease-out"-->
<!--                            enter-from-class="opacity-0 rotate-90"-->
<!--                            enter-to-class="opacity-100 rotate-0"-->
<!--                            leave-active-class="transition duration-150 ease-in"-->
<!--                            leave-from-class="opacity-100 rotate-0"-->
<!--                            leave-to-class="opacity-0 -rotate-90"-->
<!--                        >-->
<!--                            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />-->
<!--                            </svg>-->
<!--                            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--                            </svg>-->
<!--                        </transition>-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Mobile Menu &ndash;&gt;-->
<!--            <transition-->
<!--                enter-active-class="transition duration-200 ease-out"-->
<!--                enter-from-class="opacity-0 scale-95 -translate-y-2"-->
<!--                enter-to-class="opacity-100 scale-100 translate-y-0"-->
<!--                leave-active-class="transition duration-150 ease-in"-->
<!--                leave-from-class="opacity-100 scale-100 translate-y-0"-->
<!--                leave-to-class="opacity-0 scale-95 -translate-y-2"-->
<!--            >-->
<!--                <div v-if="mobileMenuOpen" class="mt-4 md:hidden">-->
<!--                    <div class="rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-black/95">-->
<!--                        <div class="p-3">-->
<!--                            <button-->
<!--                                v-for="section in sections"-->
<!--                                :key="`mobile-${section.id}`"-->
<!--                                @click="scrollToSection(section.id)"-->
<!--                                class="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left cursor-pointer transition-all duration-200"-->
<!--                                :class="activeSection === section.id-->
<!--                                    ? 'bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 text-black dark:text-white'-->
<!--                                    : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5'"-->
<!--                            >-->
<!--                                <div-->
<!--                                    class="flex h-10 w-10 items-center justify-center rounded-lg transition-all"-->
<!--                                    :class="activeSection === section.id-->
<!--                                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/50'-->
<!--                                        : 'bg-zinc-200 text-zinc-600 dark:bg-white/10 dark:text-zinc-400'"-->
<!--                                >-->
<!--                                    <svg-->
<!--                                        class="h-5 w-5"-->
<!--                                        fill="none"-->
<!--                                        stroke="currentColor"-->
<!--                                        viewBox="0 0 24 24"-->
<!--                                    >-->
<!--                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                                <span class="font-medium">{{ section.label }}</span>-->

<!--                                &lt;!&ndash; Active indicator &ndash;&gt;-->
<!--                                <div-->
<!--                                    v-if="activeSection === section.id"-->
<!--                                    class="ml-auto h-2 w-2 rounded-full bg-fuchsia-400"-->
<!--                                ></div>-->
<!--                            </button>-->
<!--                        </div>-->

<!--                        &lt;!&ndash; Mobile CTA &ndash;&gt;-->
<!--                        <div class="border-t border-zinc-200/80 p-3 dark:border-white/10">-->
<!--                            <a-->
<!--                                href="#contact"-->
<!--                                @click.prevent="scrollToSection('contact')"-->
<!--                                class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white cursor-pointer shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50"-->
<!--                            >-->
<!--                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />-->
<!--                                </svg>-->
<!--                                Let's Talk-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </transition>-->
<!--        </div>-->
<!--    </nav>-->

<!--    &lt;!&ndash; Sidebar Navigation - Desktop only (Always visible) &ndash;&gt;-->
<!--    <div class="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">-->
<!--            <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-black/40">-->
<!--                &lt;!&ndash; Navigation Buttons &ndash;&gt;-->
<!--                <button-->
<!--                    v-for="section in sections"-->
<!--                    :key="`sidebar-${section.id}`"-->
<!--                    @click="scrollToSection(section.id)"-->
<!--                    class="group relative flex items-center gap-3 cursor-pointer transition-all duration-300"-->
<!--                    :title="section.label"-->
<!--                >-->
<!--                    &lt;!&ndash; Icon with active state &ndash;&gt;-->
<!--                    <div-->
<!--                        class="relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300"-->
<!--                        :class="activeSection === section.id-->
<!--                            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/50'-->
<!--                            : 'bg-zinc-200/80 text-zinc-700 group-hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:group-hover:bg-white/10'"-->
<!--                    >-->
<!--                        <svg-->
<!--                            class="h-5 w-5 transition-transform duration-300 group-hover:scale-110"-->
<!--                            :class="activeSection === section.id ? 'text-white' : ''"-->
<!--                            fill="none"-->
<!--                            stroke="currentColor"-->
<!--                            viewBox="0 0 24 24"-->
<!--                        >-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />-->
<!--                        </svg>-->

<!--                        &lt;!&ndash; Active indicator dot &ndash;&gt;-->
<!--                        <div-->
<!--                            v-if="activeSection === section.id"-->
<!--                            class="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-fuchsia-400 ring-2 ring-white/20"-->
<!--                        ></div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Label tooltip &ndash;&gt;-->
<!--                    <div-->
<!--                        class="absolute right-14 whitespace-nowrap rounded-lg bg-white/95 px-4 py-2 text-sm font-medium text-black opacity-0 shadow-xl backdrop-blur-sm ring-1 ring-zinc-200/80 transition-all duration-300 group-hover:opacity-100 group-hover:right-16 dark:bg-black/90 dark:text-white dark:ring-white/10"-->
<!--                    >-->
<!--                        {{ section.label }}-->
<!--                        &lt;!&ndash; Arrow &ndash;&gt;-->
<!--                        <div class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 rotate-45 bg-white/95 ring-1 ring-zinc-200/80 dark:bg-black/90 dark:ring-white/10"></div>-->
<!--                    </div>-->
<!--                </button>-->

<!--                &lt;!&ndash; Divider &ndash;&gt;-->
<!--                <div class="h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700"></div>-->

<!--                &lt;!&ndash; Dark Mode Toggle Button &ndash;&gt;-->
<!--                <button-->
<!--                    @click="toggleDark()"-->
<!--                    type="button"-->
<!--                    class="group relative flex items-center gap-3 cursor-pointer transition-all duration-300"-->
<!--                    title="Toggle theme"-->
<!--                >-->
<!--                    <div-->
<!--                        class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 transition-all duration-300 group-hover:bg-zinc-300 group-hover:scale-105 dark:bg-white/5 dark:text-white dark:group-hover:bg-white/10"-->
<!--                    >-->
<!--                        <transition-->
<!--                            mode="out-in"-->
<!--                            enter-active-class="transition duration-200 ease-out"-->
<!--                            enter-from-class="opacity-0 rotate-90"-->
<!--                            enter-to-class="opacity-100 rotate-0"-->
<!--                            leave-active-class="transition duration-150 ease-in"-->
<!--                            leave-from-class="opacity-100 rotate-0"-->
<!--                            leave-to-class="opacity-0 -rotate-90"-->
<!--                        >-->
<!--                            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />-->
<!--                            </svg>-->
<!--                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />-->
<!--                            </svg>-->
<!--                        </transition>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Label tooltip &ndash;&gt;-->
<!--                    <div-->
<!--                        class="absolute right-14 whitespace-nowrap rounded-lg bg-white/95 px-4 py-2 text-sm font-medium text-black opacity-0 shadow-xl backdrop-blur-sm ring-1 ring-zinc-200/80 transition-all duration-300 group-hover:opacity-100 group-hover:right-16 dark:bg-black/90 dark:text-white dark:ring-white/10"-->
<!--                    >-->
<!--                        {{ isDark ? 'Light Mode' : 'Dark Mode' }}-->
<!--                        &lt;!&ndash; Arrow &ndash;&gt;-->
<!--                        <div class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 rotate-45 bg-white/95 ring-1 ring-zinc-200/80 dark:bg-black/90 dark:ring-white/10"></div>-->
<!--                    </div>-->
<!--                </button>-->
<!--            </div>-->
<!--    </div>-->
<!--</template>-->
