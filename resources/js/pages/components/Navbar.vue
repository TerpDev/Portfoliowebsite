
<!--<script setup lang="ts">-->
<!--import { useDark, useToggle } from '@vueuse/core';-->
<!--import { onMounted, onUnmounted, ref } from 'vue';-->

<!--const isDark = useDark();-->
<!--const toggleDark = useToggle(isDark);-->

<!--const scrolled = ref(false);-->
<!--const menuOpen = ref(false);-->
<!--const onScroll = () => {-->
<!--    scrolled.value = (window.scrollY || 0) > 40;-->
<!--};-->
<!--onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));-->
<!--onUnmounted(() => window.removeEventListener('scroll', onScroll));-->

<!--const active = ref('Home');-->
<!--const links = [-->
<!--    { label: 'Home', href: '#hero' },-->
<!--    { label: 'About', href: '#about' },-->
<!--    { label: 'Education', href: '#timeline' },-->
<!--    { label: 'Skills', href: '#skills' },-->
<!--    { label: 'Projects', href: '#projects' },-->
<!--    { label: 'Contact', href: '#contact' },-->
<!--];-->

<!--function onNavClick(e: MouseEvent, href: string, label: string) {-->
<!--    const el = document.querySelector(href) as HTMLElement | null;-->
<!--    if (!el) return;-->
<!--    e.preventDefault();-->
<!--    el.scrollIntoView({ behavior: 'smooth', block: 'start' });-->
<!--    active.value = label;-->
<!--    menuOpen.value = false;-->
<!--}-->

<!--// Scrollspy via IntersectionObserver-->
<!--let io: IntersectionObserver | null = null;-->

<!--onMounted(() => {-->
<!--    const ids = links.map((l) => l.href.replace('#', ''));-->
<!--    const sections = ids.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => !!n);-->

<!--    io = new IntersectionObserver(-->
<!--        (entries) => {-->
<!--            entries.forEach((entry) => {-->
<!--                if (entry.isIntersecting) {-->
<!--                    const id = (entry.target as HTMLElement).id;-->
<!--                    const found = links.find((l) => l.href === `#${id}`);-->
<!--                    if (found) active.value = found.label;-->
<!--                }-->
<!--            });-->
<!--        },-->
<!--        {-->
<!--            // bias to "center focus"; also helps avoid accidental re-triggers-->
<!--            root: null,-->
<!--            rootMargin: '-40% 0px -55% 0px',-->
<!--            threshold: 0,-->
<!--        },-->
<!--    );-->

<!--    sections.forEach((sec) => io?.observe(sec));-->
<!--});-->

<!--onUnmounted(() => {-->
<!--    io?.disconnect();-->
<!--    io = null;-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--    <nav-->
<!--        class="sticky top-6 z-50 transition-transform duration-700 ease-out will-change-transform"-->
<!--        :class="scrolled ? '-translate-y-2' : 'translate-y-0'"-->
<!--        v-animateonscroll="{-->
<!--            enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-600',-->
<!--            once: true,-->
<!--            intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },-->
<!--        }"-->
<!--        style="animation-delay: 40ms"-->
<!--    >-->
<!--        <div class="mx-auto max-w-6xl px-4 sm:px-6">-->
<!--            <div-->
<!--                class="flex items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-md transition-all duration-500 sm:px-6"-->
<!--                :class="scrolled ? 'border-zinc-800 bg-zinc-900/70 shadow-lg ring-1 ring-black/5' : 'border-zinc-800/50 bg-zinc-900/40'"-->
<!--            >-->
<!--                &lt;!&ndash; Brand &ndash;&gt;-->
<!--                <a-->
<!--                    href="#hero"-->
<!--                    class="flex items-center gap-1 transition will-change-transform hover:text-primary"-->
<!--                    v-animateonscroll="{-->
<!--                        enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-500',-->
<!--                        once: true,-->
<!--                        intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },-->
<!--                    }"-->
<!--                    style="animation-delay: 120ms"-->
<!--                >-->
<!--                    <p class="rounded-full bg-primary/30 p-1.5 text-sm font-bold text-primary">DT</p>-->
<!--                    <span class="font-bold transition"><span class="text-primary">.</span>dev</span>-->
<!--                </a>-->

<!--                &lt;!&ndash; Desktop links &ndash;&gt;-->
<!--                <ul class="hidden items-center gap-6 md:flex">-->
<!--                    <li v-for="(link, i) in links" :key="link.label" class="cursor-pointer">-->
<!--                        <a-->
<!--                            :href="link.href"-->
<!--                            @click="(e) => onNavClick(e, link.href, link.label)"-->
<!--                            class="relative text-zinc-300 transition will-change-transform after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:text-white"-->
<!--                            :class="{-->
<!--                                'text-white after:w-full': active === link.label,-->
<!--                                'after:w-0 hover:after:w-full': active !== link.label,-->
<!--                            }"-->
<!--                            v-animateonscroll="{-->
<!--                                enterClass: 'animate-enter fade-in-10 slide-in-from-t-6 animate-duration-500',-->
<!--                                once: true,-->
<!--                                intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },-->
<!--                            }"-->
<!--                            :style="{ animationDelay: `${160 + i * 60}ms` }"-->
<!--                        >-->
<!--                            {{ link.label }}-->
<!--                        </a>-->
<!--                    </li>-->
<!--                </ul>-->

<!--                &lt;!&ndash; Right side &ndash;&gt;-->
<!--                <div class="items-center gap-3">-->
<!--                    <button-->
<!--                        @click="toggleDark()"-->
<!--                        type="button"-->
<!--                        class="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-800/80 px-2 py-2 text-xs text-zinc-300-->
<!--                        transition hover:border-zinc-700 hover:text-white"-->
<!--                        title="Toggle theme"-->
<!--                        v-animateonscroll="{-->
<!--                            enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-500',-->
<!--                            once: true,-->
<!--                            intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },-->
<!--                        }"-->
<!--                        style="animation-delay: 160ms"-->
<!--                    >-->
<!--                        <span v-if="isDark">-->
<!--                            &lt;!&ndash; Sun icon &ndash;&gt;-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="currentColor" />-->
<!--                                <path-->
<!--                                    stroke="currentColor"-->
<!--                                    stroke-width="2"-->
<!--                                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"-->
<!--                                />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span v-else>-->
<!--                            &lt;!&ndash; Moon icon &ndash;&gt;-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                <path stroke="currentColor" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                    </button>-->
<!--                </div>-->

<!--                &lt;!&ndash; Mobile burger &ndash;&gt;-->
<!--                <div class="flex gap-2 md:hidden">-->
<!--                    <button-->
<!--                        class="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-zinc-300 transition will-change-transform hover:bg-white/5 hover:text-white md:hidden"-->
<!--                        @click="menuOpen = !menuOpen"-->
<!--                        aria-label="Toggle menu"-->
<!--                        v-animateonscroll="{-->
<!--                            enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-500',-->
<!--                            once: true,-->
<!--                            intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' },-->
<!--                        }"-->
<!--                        style="animation-delay: 160ms"-->
<!--                    >-->
<!--                        <svg-->
<!--                            v-if="!menuOpen"-->
<!--                            xmlns="http://www.w3.org/2000/svg"-->
<!--                            class="h-6 w-6"-->
<!--                            fill="none"-->
<!--                            viewBox="0 0 24 24"-->
<!--                            stroke="currentColor"-->
<!--                        >-->
<!--                            <path-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                                stroke-width="1.5"-->
<!--                                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"-->
<!--                            />-->
<!--                        </svg>-->
<!--                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />-->
<!--                        </svg>-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->

<!--            <transition-->
<!--                enter-active-class="transition duration-200 ease-out"-->
<!--                enter-from-class="opacity-0 -translate-y-2"-->
<!--                enter-to-class="opacity-100 translate-y-0"-->
<!--                leave-active-class="transition duration-150 ease-in"-->
<!--                leave-from-class="opacity-100 translate-y-0"-->
<!--                leave-to-class="opacity-0 -translate-y-2"-->
<!--            >-->
<!--                <div v-if="menuOpen" class="absolute top-full right-0 left-0 z-50 mt-2 md:hidden">-->
<!--                    <div class="mx-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-lg backdrop-blur-md">-->
<!--                        <ul class="px-2 py-2">-->
<!--                            <li v-for="(link, i) in links" :key="`m-${link.label}`" class="px-3 py-2">-->
<!--                                <a-->
<!--                                    :href="link.href"-->
<!--                                    @click="(e) => onNavClick(e, link.href, link.label)"-->
<!--                                    class="relative block py-1 text-zinc-300 transition after:absolute after:bottom-0-->
<!--                                    after:left-0 w-fit after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:text-white"-->
<!--                                    :class="{-->
<!--                                        'text-white after:w-full': active === link.label,-->
<!--                                        'after:w-0 hover:after:w-full': active !== link.label,-->
<!--                                    }"-->
<!--                                    :style="{ transitionDelay: `${i * 40}ms` }"-->
<!--                                >-->
<!--                                    {{ link.label }}-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </transition>-->
<!--        </div>-->
<!--    </nav>-->
<!--</template>-->

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const scrolled = ref(false);
const scrollProgress = ref(0);
const activeSection = ref('');
const mobileMenuOpen = ref(false);

const sections = [
    { id: 'hero', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'user' },
    { id: 'timeline', label: 'Journey', icon: 'timeline' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Work', icon: 'briefcase' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
];

const onScroll = () => {
    scrolled.value = window.scrollY > 50;

    // Calculate scroll progress
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollRange = documentHeight - windowHeight;
    scrollProgress.value = (scrollTop / scrollRange) * 100;
};

// Smooth scroll to section
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mobileMenuOpen.value = false; // Close mobile menu after navigation
    }
};

// Intersection Observer for active section
let observer: IntersectionObserver | null = null;

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        }
    );

    sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer?.observe(element);
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    observer?.disconnect();
});

const getIcon = (icon: string) => {
    const icons: Record<string, string> = {
        home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        timeline: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    };
    return icons[icon] || icons.home;
};
</script>

<template>
    <!-- Progress bar (always visible) -->
    <div class="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 transition-all duration-300"
         :style="{ width: `${scrollProgress}%` }">
        <div class="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-white/20 blur-sm"></div>
    </div>

    <nav
        class="sticky top-0 left-0 right-0 z-50 transition-all duration-500 pt-2 lg:hidden"
        :class="scrolled ? 'py-2' : 'py-4'"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 mt-2">
            <div
                class="relative flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-500"
                :class="scrolled
                    ? 'border-zinc-200/80 bg-white/80 px-4 py-2.5 shadow-lg shadow-violet-600/10 dark:border-white/10 dark:bg-black/40'
                    : 'border-zinc-200/80 bg-white/80 px-6 py-3 dark:border-white/5 dark:bg-white/5'"
            >
                <!-- Brand with animated gradient -->
                <a
                    href="#hero"
                    @click.prevent="scrollToSection('hero')"
                    class="group relative flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                    <div class="relative">
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-75 blur-lg transition-opacity group-hover:opacity-100"></div>
                        <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-bold text-white shadow-lg">
                            DT
                        </div>
                    </div>
                    <div class="hidden sm:block">
                        <div class="font-bold text-black dark:text-white">
                            Daniel <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Terpstra</span>
                        </div>
                        <div class="text-xs text-zinc-600 dark:text-zinc-400">Software Developer</div>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-1">
                    <button
                        v-for="section in sections"
                        :key="section.id"
                        @click="scrollToSection(section.id)"
                        class="group relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300"
                        :class="activeSection === section.id
                            ? 'text-black dark:text-white'
                            : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white'"
                    >
                        <span class="relative z-10 flex items-center gap-2">
                            <svg
                                class="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />
                            </svg>
                            {{ section.label }}
                        </span>

                        <!-- Active indicator -->
                        <div
                            v-if="activeSection === section.id"
                            class="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 ring-1 ring-white/10"
                        ></div>

                        <!-- Hover effect -->
                        <div class="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>
                </div>

                <!-- CTA Button & Theme Toggle -->
                <div class="hidden md:flex items-center gap-3">
                    <!-- Theme Toggle -->
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-all duration-300 hover:bg-zinc-300 hover:scale-105 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        title="Toggle theme"
                    >
                        <transition
                            mode="out-in"
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="opacity-0 rotate-90"
                            enter-to-class="opacity-100 rotate-0"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="opacity-100 rotate-0"
                            leave-to-class="opacity-0 -rotate-90"
                        >
                            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </transition>
                    </button>

                    <!-- CTA Button -->
                    <a
                        href="#contact"
                        @click.prevent="scrollToSection('contact')"
                        class="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50"
                    >
                        <span class="relative z-10">Let's Talk</span>
                        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-fuchsia-600 to-violet-600 transition-transform duration-300 group-hover:translate-x-0"></div>
                    </a>
                </div>

                <!-- Mobile Menu Button & Theme Toggle -->
                <div class="flex items-center gap-2 md:hidden">
                    <!-- Mobile Theme Toggle -->
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-colors hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        title="Toggle theme"
                    >
                        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 cursor-pointer transition-colors hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        <transition
                            mode="out-in"
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="opacity-0 rotate-90"
                            enter-to-class="opacity-100 rotate-0"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="opacity-100 rotate-0"
                            leave-to-class="opacity-0 -rotate-90"
                        >
                            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </transition>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95 -translate-y-2"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
                <div v-if="mobileMenuOpen" class="mt-4 md:hidden">
                    <div class="rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-black/95">
                        <div class="p-3">
                            <button
                                v-for="section in sections"
                                :key="`mobile-${section.id}`"
                                @click="scrollToSection(section.id)"
                                class="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left cursor-pointer transition-all duration-200"
                                :class="activeSection === section.id
                                    ? 'bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 text-black dark:text-white'
                                    : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5'"
                            >
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-lg transition-all"
                                    :class="activeSection === section.id
                                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/50'
                                        : 'bg-zinc-200 text-zinc-600 dark:bg-white/10 dark:text-zinc-400'"
                                >
                                    <svg
                                        class="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />
                                    </svg>
                                </div>
                                <span class="font-medium">{{ section.label }}</span>

                                <!-- Active indicator -->
                                <div
                                    v-if="activeSection === section.id"
                                    class="ml-auto h-2 w-2 rounded-full bg-fuchsia-400"
                                ></div>
                            </button>
                        </div>

                        <!-- Mobile CTA -->
                        <div class="border-t border-zinc-200/80 p-3 dark:border-white/10">
                            <a
                                href="#contact"
                                @click.prevent="scrollToSection('contact')"
                                class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white cursor-pointer shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50"
                            >
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </nav>

    <!-- Sidebar Navigation - Desktop only (Always visible) -->
    <div class="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
            <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-black/40">
                <!-- Navigation Buttons -->
                <button
                    v-for="section in sections"
                    :key="`sidebar-${section.id}`"
                    @click="scrollToSection(section.id)"
                    class="group relative flex items-center gap-3 cursor-pointer transition-all duration-300"
                    :title="section.label"
                >
                    <!-- Icon with active state -->
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300"
                        :class="activeSection === section.id
                            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/50'
                            : 'bg-zinc-200/80 text-zinc-700 group-hover:bg-zinc-300 dark:bg-white/5 dark:text-white dark:group-hover:bg-white/10'"
                    >
                        <svg
                            class="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            :class="activeSection === section.id ? 'text-white' : ''"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(section.icon)" />
                        </svg>

                        <!-- Active indicator dot -->
                        <div
                            v-if="activeSection === section.id"
                            class="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-fuchsia-400 ring-2 ring-white/20"
                        ></div>
                    </div>

                    <!-- Label tooltip -->
                    <div
                        class="absolute right-14 whitespace-nowrap rounded-lg bg-white/95 px-4 py-2 text-sm font-medium text-black opacity-0 shadow-xl backdrop-blur-sm ring-1 ring-zinc-200/80 transition-all duration-300 group-hover:opacity-100 group-hover:right-16 dark:bg-black/90 dark:text-white dark:ring-white/10"
                    >
                        {{ section.label }}
                        <!-- Arrow -->
                        <div class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 rotate-45 bg-white/95 ring-1 ring-zinc-200/80 dark:bg-black/90 dark:ring-white/10"></div>
                    </div>
                </button>

                <!-- Divider -->
                <div class="h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700"></div>

                <!-- Dark Mode Toggle Button -->
                <button
                    @click="toggleDark()"
                    type="button"
                    class="group relative flex items-center gap-3 cursor-pointer transition-all duration-300"
                    title="Toggle theme"
                >
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/80 text-zinc-700 transition-all duration-300 group-hover:bg-zinc-300 group-hover:scale-105 dark:bg-white/5 dark:text-white dark:group-hover:bg-white/10"
                    >
                        <transition
                            mode="out-in"
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="opacity-0 rotate-90"
                            enter-to-class="opacity-100 rotate-0"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="opacity-100 rotate-0"
                            leave-to-class="opacity-0 -rotate-90"
                        >
                            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </transition>
                    </div>

                    <!-- Label tooltip -->
                    <div
                        class="absolute right-14 whitespace-nowrap rounded-lg bg-white/95 px-4 py-2 text-sm font-medium text-black opacity-0 shadow-xl backdrop-blur-sm ring-1 ring-zinc-200/80 transition-all duration-300 group-hover:opacity-100 group-hover:right-16 dark:bg-black/90 dark:text-white dark:ring-white/10"
                    >
                        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
                        <!-- Arrow -->
                        <div class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 rotate-45 bg-white/95 ring-1 ring-zinc-200/80 dark:bg-black/90 dark:ring-white/10"></div>
                    </div>
                </button>
            </div>
    </div>
</template>

