<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useDark, useToggle} from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const scrolled = ref(false);
const menuOpen = ref(false);
const onScroll = () => { scrolled.value = (window.scrollY || 0) > 40; };
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const active = ref("Home");
const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#timeline" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
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
    const ids = links.map(l => l.href.replace('#',''));
    const sections = ids.map(id => document.getElementById(id)).filter((n): n is HTMLElement => !!n);

    io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = (entry.target as HTMLElement).id;
                const found = links.find(l => l.href === `#${id}`);
                if (found) active.value = found.label;
            }
        });
    }, {
        // bias to “center focus”; also helps avoid accidental re-triggers
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(sec => io?.observe(sec));
});

onUnmounted(() => {
    io?.disconnect();
    io = null;
});


</script>

<template>
    <nav
        class="sticky top-6 z-50 transition-transform duration-700 ease-out will-change-transform"
        :class="scrolled ? '-translate-y-2' : 'translate-y-0'"
        v-animateonscroll="{
      enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-600',
      once: true,
      intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    }"
        style="animation-delay: 40ms"
    >
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <div
                class="flex items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-md transition-all duration-500 sm:px-6"
                :class="scrolled ? 'border-zinc-800 bg-zinc-900/70 shadow-lg ring-1 ring-black/5' : 'border-zinc-800/50 bg-zinc-900/40'"
            >
                <!-- Brand -->
                <a href="#hero"
                   class="flex items-center gap-1 hover:text-primary transition will-change-transform"
                   v-animateonscroll="{
             enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-500',
             once: true,
             intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' }
           }"
                   style="animation-delay: 120ms"
                >
                    <p class="font-bold text-sm bg-primary/30 text-primary rounded-full p-1.5">DT</p>
                    <span class="font-bold transition"><span class="text-primary">.</span>dev</span>
                </a>

                <!-- Desktop links -->
                <ul class="hidden items-center gap-6 md:flex">
                    <li v-for="(link, i) in links" :key="link.label" class="cursor-pointer">
                        <a
                            :href="link.href"
                            @click="(e) => onNavClick(e, link.href, link.label)"
                            class="relative transition text-zinc-300 hover:text-white will-change-transform
                     after:absolute after:left-0 after:bottom-[-4px] after:h-[2px]
                     after:bg-primary after:transition-all after:duration-300"
                            :class="{
                'text-white after:w-full': active === link.label,
                'after:w-0 hover:after:w-full': active !== link.label
              }"
                            v-animateonscroll="{
                enterClass: 'animate-enter fade-in-10 slide-in-from-t-6 animate-duration-500',
                once: true,
                intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' }
              }"
                            :style="{ animationDelay: `${160 + i * 60}ms` }"
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <!-- Right side -->
                <div class="hidden items-center gap-3 md:flex">
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="rounded-full border cursor-pointer border-zinc-800/80 px-2 py-2 text-xs text-zinc-300 transition hover:border-zinc-700 hover:text-white will-change-transform flex items-center gap-2"
                        title="Toggle theme"
                        v-animateonscroll="{
      enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-500',
      once: true,
      intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    }"
                        style="animation-delay: 160ms"
                    >
    <span v-if="isDark">
        <!-- Sun icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="currentColor"/>
            <path stroke="currentColor" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
    </span>
                        <span v-else>
        <!-- Moon icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="currentColor" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
        </svg>
    </span>
                    </button>

                </div>

                <!-- Mobile burger -->
                <div class="flex md:hidden gap-2">
                    <button
                        class="inline-flex items-center justify-center rounded-full p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden will-change-transform"
                        @click="menuOpen = !menuOpen"
                        aria-label="Toggle menu"
                        v-animateonscroll="{
              enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-500',
              once: true,
              intersectionOptions: { threshold: 0, rootMargin: '0px 0px -10% 0px' }
            }"
                        style="animation-delay: 160ms"
                    >
                        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div v-if="menuOpen" class="absolute left-0 right-0 top-full z-50 mt-2 md:hidden">
                    <div class="mx-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-lg backdrop-blur-md">
                        <ul class="py-2 px-2">
                            <li v-for="(link, i) in links" :key="`m-${link.label}`" class="px-3 py-2">
                                <a
                                    :href="link.href"
                                    @click="(e) => onNavClick(e, link.href, link.label)"
                                    class="relative block py-1 transition text-zinc-300 hover:text-white
                         after:absolute after:left-0 after:bottom-0 after:h-[2px]
                         after:bg-primary after:transition-all after:duration-300"
                                    :class="{
                    'text-white after:w-full': active === link.label,
                    'after:w-0 hover:after:w-full': active !== link.label
                  }"
                                    :style="{ transitionDelay: `${i * 40}ms` }"
                                >
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>
