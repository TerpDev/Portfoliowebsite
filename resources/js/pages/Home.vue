<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';
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
} from 'simple-icons';
import Typed from 'typed.js';
import { onBeforeUnmount, onMounted, ref, computed } from 'vue';
import ProfileAbout from '../pages/components/ProfileAbout.vue';
let typed: Typed | null = null;
onMounted(() => {
    typed = new Typed('.typing', {
        strings: ['Frontend Developer,', 'Backend Developer,', 'Student Software Developer.'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});
onBeforeUnmount(() => typed?.destroy());
type Item = {
    label: string;
    icon: any;
    class: string;
};

const sections: {
    title: string;
    items: Item[];
}[] = [
    {
        title: 'Frontend Development',
        items: [
            { label: 'HTML5', icon: siHtml5, class: 'iconhtml' },
            { label: 'CSS', icon: siCss, class: 'iconcss' },
            { label: 'Tailwind CSS', icon: siTailwindcss, class: 'icontail' },
            { label: 'Vuejs', icon: siVuedotjs, class: 'iconvue' },
            { label: 'Primevue', icon: siPrimevue, class: 'iconprime' },
            { label: 'HeadlessUI', icon: siHeadlessui, class: 'iconhead' },
            { label: 'AlpineJS', icon: siAlpinedotjs, class: 'iconalp' },
            { label: 'Javascript', icon: siJavascript, class: 'iconjava' },
        ],
    },
    {
        title: 'Backend Development',
        items: [
            { label: 'Laravel', icon: siLaravel, class: 'iconlara' },
            { label: 'Filament', icon: siFilament, class: 'iconfila' },
            { label: 'Mysql', icon: siMysql, class: 'iconmysql' },
            { label: 'SQLite', icon: siSqlite, class: 'iconlite' },
        ],
    },
    {
        title: 'Programming Languages',
        items: [{ label: 'C#', icon: siSharp, class: 'iconsharp' }],
    },
    {
        title: 'Design & Development tools',
        items: [
            { label: 'Figma', icon: siFigma, class: 'iconfigma' },
            { label: 'Responsive design', icon: siDuckduckgo, class: 'iconduck' },
        ],
    },
];
const projectcards = ref([

    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects en skills. Built with InertiaJS, VueJS and TailwindCSS.',
        image: '/images/heroport.png',
        link: '#hero',
        tools: ['VueJS', 'TailwindCSS', 'InertiaJS', 'Laravel', 'HeadlessUI', 'AlpineJS'],
        code: [{ text: 'View Code', link: 'https://github.com/TerpDev/Portfoliowebsite' }],
    },
    {
        title: 'MTF Automobielen',
        description:
            'Ive worked on this project while I was an intern at C-o-d-e-s Software Development in Almelo I mostly worked on the frontend on this project',
        image: '/images/img.png',
        link: 'https://mtfautomobielen.nl/',
        tools: ['VueJS', 'TailwindCSS', 'InertiaJS', 'Laravel', 'PrimeVue', 'HeadlessUI', 'AlpineJS'],
        demo: [{ text: 'Live Demo', link: 'https://mtfautomobielen.nl/' }],
    },
]);
type EducationItem = {
    id: 'bonhoeffer' | 'enschede' | 'enschede-mbo' | 'hengelo-mbo';
    label: string;
    subtitle: string;
    period: string;
    badge: string;
    location: string;
    highlights: string[];
    description: string;
};

const educationItems: EducationItem[] = [
    {
        id: 'bonhoeffer',
        label: 'Bonhoeffer College',
        subtitle: 'Van der Waalslaan – MAVO',
        period: '2016 – 2020 (approx.)',
        badge: 'Secondary Education',
        location: 'Enschede, NL',
        highlights: [
            'Finished MAVO in 4 years',
            'COVID-era online learning',
            'First steps into tech & computers',
        ],
        description:
            'I completed my secondary education at Bonhoeffer College, where I earned my MAVO diploma. During the COVID period I spent a lot of time behind my computer in online classes, which is when I realised how much I enjoy working with computers — taking them apart, fixing things and experimenting. That curiosity became the starting point of my software development journey.',
    },
    {
        id: 'enschede-mbo',
        label: 'MBO – Enschede',
        subtitle: 'Software Developer – Game Focus',
        period: '2 years',
        badge: 'MBO – Game Dev',
        location: 'Enschede, NL',
        highlights: [
            'C# intake console app',
            'Game development focus',
            'First internship at C-o-d-e-s',
        ],
        description:
            'For the intake I had to build a small C# console application. I had no idea what I was doing at first, but still managed to make it work — and I was genuinely proud. The study was mainly focused on game development, but during my first internship at C-o-d-e-s in Almelo I discovered Laravel and Vue.js, and realised web development suited me much better.',
    },
    {
        id: 'hengelo-mbo',
        label: 'MBO – Hengelo',
        subtitle: 'Software Developer – Web Development',
        period: '2 years • 3rd & 4th year',
        badge: 'MBO – Web Dev',
        location: 'Hengelo, NL',
        highlights: [
            'Switched from game to web',
            'Internship at Cube in Oldenzaal',
        ],
        description:
            'After two years I switched tracks from game development to full web development and moved to the Hengelo location with four friends. We jumped straight into the third year, so we had a lot of catching up to do, but with some effort it went fast. Right now I’m in my fourth year doing my internship at Cube in Oldenzaal, learning a lot every day and preparing for my final exams.',
    },
];

const activeEducationId = ref<EducationItem['id']>('bonhoeffer');

const activeEducation = computed(() =>
    educationItems.find((item) => item.id === activeEducationId.value)!,
);

const sending = ref(false);
const sent = ref(false);
const error = ref<string>(''); // error message (empty = no error)

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
});

function resetStates() {
    sent.value = false;
    error.value = '';
}

function resetForm() {
    form.value = { name: '', email: '', subject: '', message: '' };
}

type FormcarryResponse =
    | { code: 200; message?: string }
    | { code: 422; message: string; errors?: Record<string, string[]> }
    | { code: number; message: string };

async function onSubmit() {
    if (sending.value) return;
    resetStates();
    sending.value = true;

    try {
        const response = await fetch('https://formcarry.com/s/Pn_uolvFRaY', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.value.name,
                email: form.value.email,
                subject: form.value.subject, // extra field is fine
                message: form.value.message,
            }),
        });

        const data: FormcarryResponse = await response.json();

        if ('code' in data && data.code === 200) {
            sent.value = true;
            resetForm();
        } else if ('code' in data && data.code === 422) {
            error.value = data.message || 'Validation failed. Please check your inputs.';
        } else {
            error.value = (data as any).message || 'Something went wrong. Please try again later.';
        }
    } catch (err: any) {
        error.value = err?.message ?? 'Network error. Please try again.';
    } finally {
        sending.value = false;
        // auto-hide success after a bit (optional)
        if (sent.value) {
            setTimeout(() => (sent.value = false), 3000);
        }
    }
}
const placeholder = '/images/placeholder.svg';
const originalTitle = 'Daniel Terpstra | Software Developer';

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = 'Come back soon! 👀';
    } else {
        document.title = originalTitle;
    }
}

// Scroll progress bar
const scrollProgress = ref(0);

function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollableHeight = documentHeight - windowHeight;

    if (scrollableHeight > 0) {
        scrollProgress.value = (scrollTop / scrollableHeight) * 100;
    }
}

onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation
});

onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('scroll', updateScrollProgress);
});
import type { Directive } from 'vue';
// Simple, herbruikbare on-scroll animatie directive
const vAnimateOnScroll: Directive<
    HTMLElement,
    { delay?: number; once?: boolean }
> = {
    mounted(el, binding) {
        const delay = binding.value?.delay ?? 0;
        const once = binding.value?.once ?? true;

        // start state
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition =
            'opacity 600ms ease-out, transform 600ms ease-out';
        el.style.transitionDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // in beeld → laat zien
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';

                        if (once) {
                            observer.unobserve(el);
                        }
                    } else if (!once) {
                        // opnieuw verstoppen als je weer naar boven scrollt
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(18px)';
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -10% 0px',
            },
        );

        observer.observe(el);
        // opslaan op element zodat we hem kunnen opruimen
        (el as any)._animateOnScrollObserver = observer;
    },

    unmounted(el) {
        const observer = (el as any)._animateOnScrollObserver as
            | IntersectionObserver
            | undefined;
        if (observer) observer.disconnect();
    },
};

</script>

<template>
    <Head title="Daniel Terpstra | Software Developer">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <!-- Scroll Progress Bar -->
<!--    <div class="fixed top-0 left-0 z-50 h-1 w-full bg-zinc-200/50 dark:bg-zinc-800/50">-->
<!--        <div-->
<!--            class="h-full bg-primary transition-all duration-150 ease-out"-->
<!--            :style="{ width: `${scrollProgress}%` }"-->
<!--        />-->
<!--    </div>-->

    <AppLayout>
<!--        <Test/>-->
        <section id="hero" class="relative overflow-hidden" v-animate-on-scroll="{delay: 80}">
            <!-- Background glows -->
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
                <div
                    class="absolute top-1/2 left-1/2 h-[5vw] max-h-[22rem] w-[90vw] max-w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/25 blur-3xl"
                ></div>

                <div
                    class="absolute top-1/2 left-1/2 h-[5vw] max-h-[20rem] w-[70vw] max-w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-fuchsia-500/20 blur-3xl"
                ></div>

                <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.15),transparent_60%)]"></div>
            </div>

            <div class="mx-auto flex h-[92vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
                <!-- Intro line -->
                <h1 class="text-4xl font-extrabold tracking-tight text-black will-change-transform sm:text-5xl dark:text-white">
                    Hi, I'm
                    <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text font-bold text-transparent"> Daniel Terpstra </span>
                </h1>
                <!-- Badge -->
                <div class="mt-6 will-change-transform">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/5 px-4 py-1.5 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:text-zinc-300"
                    >
                        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                        Student Software Developer - Available for work!
                    </span>
                </div>

                <!-- Big headline -->
                <h2
                    class="mt-8 text-4xl leading-[1.05] font-extrabold text-black will-change-transform sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
                >
                    Crafting <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Digital</span
                    ><br class="hidden md:block" />
                    <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experiences</span> That Matter
                </h2>

                <!-- Typed line -->
                <p class="mt-6 text-black will-change-transform dark:text-zinc-300">
                    I’m a <span class="typing font-bold text-violet-400/90"></span>
                </p>
<!--                <div class="flex items-center gap-4">-->
<!--                    <p>I'm a </p>-->
<!--                    <RotatingText-->
<!--                        :texts="['Student Software developer', 'Backend Developer', 'Frontend Developer']"-->
<!--                        mainClassName="px-2 sm:px-2 md:px-3 bg-primary font-bold text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"-->
<!--                        :staggerFrom="0"-->
<!--                        :initial="{ y: '100%' }"-->
<!--                        :animate="{ y: 0 }"-->
<!--                        :exit="{ y: '-120%' }"-->
<!--                        :staggerDuration="0.025"-->
<!--                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"-->
<!--                        :transition="{ type: 'spring', damping: 30, stiffness: 400 }"-->
<!--                        :rotationInterval="2000"-->
<!--                    />-->
<!--                </div>-->


                <!-- CTAs -->
                <div class="mt-10 flex items-center gap-4 will-change-transform">
                    <a
                        href="#projects"
                        class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 focus:ring-2 focus:ring-white/30 focus:outline-none"
                    >
                        View My Work
                        <div class="animate-bounce-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                />
                            </svg>
                        </div>
                    </a>

                    <a
                        href="#contact"
                        class="inline-flex items-center rounded-xl border border-black bg-white/5 px-5 py-3 text-sm font-semibold text-black backdrop-blur transition duration-300 hover:bg-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none dark:border-white/15 dark:text-white"
                    >
                        Contact Me
                    </a>
                </div>

                <!-- Scroll hint -->
                <div class="absolute inset-x-0 bottom-6 flex justify-center text-xs text-zinc-800 will-change-transform dark:text-zinc-500">
                    <div class="flex w-full items-center justify-center gap-2">
                        <a href="#about" class="">
                            <span>Scroll Down</span>
                            <div class="animate-bounce-down flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" class="px-8 py-24" v-animate-on-scroll="{delay: 60}">
            <div class="mx-auto max-w-6xl">
                <div class="flex items-center pb-8 lg:justify-center">
                    <h1 class="text-4xl font-bold text-black dark:text-white">About me<span class="text-primary">.</span></h1>
                </div>

                <div class="grid grid-cols-1 items-center gap-32 md:grid-cols-2">
                    <div class="flex flex-col gap-3 text-black dark:text-white">
                        <h2 class="text-2xl font-bold">Passionate Software Developer Student</h2>
                        <p>
                            Hey There! I'm Daniel Terpstra, 19 years old and a passionate student software developer based in the Netherlands. I
                            specialize in crafting beautiful and functional web applications that provide seamless user experiences, with a strong
                            foundation in both frontend and backend. Right now I'm focused on learning
                            <a target="_blank" href="https://laravel.com/" class="font-bold transition hover:text-[#FF2D20]">Laravel</a>
                            and
                            <a target="_blank" href="https://filamentphp.com/" class="font-bold transition hover:text-[#FDAE4B]">Filament</a>
                            for backend development. On the frontend I’m focused on the
                            <a target="_blank" href="https://tallstack.dev/" class="font-bold transition hover:text-[#38bdf8]">TALL stack</a>, which
                            combines
                            <a target="_blank" href="https://tailwindcss.com/" class="font-bold transition hover:text-[#06B6D4]">TailwindCSS</a>,
                            <a target="_blank" href="https://alpinejs.dev/" class="font-bold transition hover:text-[#8BC0D0]">AlpineJS</a>,
                            <a target="_blank" href="https://laravel.com/" class="font-bold transition hover:text-[#FF2D20]">Laravel</a>
                            and
                            <a target="_blank" href="https://laravel-livewire.com/" class="font-bold transition hover:text-[#4E56A6]">Livewire</a>.
                            I’m also experienced with
                            <a target="_blank" href="https://vuejs.org/" class="font-bold transition hover:text-[#4FC08D]">Vue.js</a>, using
                            <a target="_blank" href="https://primevue.org/" class="font-bold transition hover:text-[#41B883]">PrimeVue</a>
                            and
                            <a target="_blank" href="https://headlessui.dev/" class="font-bold transition hover:text-[#66E3FF]">HeadlessUI</a>
                            for building dynamic user interfaces.
                        </p>
                        <div class="flex flex-row gap-3">
                            <a
                                class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80"
                                href="#contact"
                                >Lets Connect! 🚀</a
                            >
                        </div>
                    </div>
                    <div class="flex justify-center py-12">
                        <ProfileAbout
                            class="relative z-30"
                            :src="placeholder"
                            :size="330"
                            :radius-offset="40"
                            :labels="['Tech Enthusiast', 'Frontend', 'UI/UX', 'Backend']"
                        />
                    </div>
                </div>
                <div class="relative pt-18">
                    <div class="absolute inset-0 -z-10 mt-16 rounded-2xl bg-primary/30 blur-3xl lg:blur-2xl"></div>

                    <div class="grid grid-cols-1 items-center gap-3 text-black md:grid-cols-2 lg:grid-cols-4 dark:text-zinc-200">
                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">3+ Years</h1>
                            <p class="text-md">Experience in Software Development</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">8+ Skills</h1>
                            <p class="text-md">Frontend and Backend Technologies</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">Focused On</h1>
                            <p class="text-md">Frontend, backend & Fullstack skills</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">Passionate About</h1>
                            <p class="text-md">Crafting Clean & Modern Applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- EDUCATION TIMELINE (desktop + mobile in één) -->
        <!-- EDUCATION SECTION MET TABS -->
        <section
            id="timeline"
            class="px-8 py-24"
            v-animate-on-scroll="{ delay: 80 }"
        >
            <div class="mx-auto max-w-6xl">
                <!-- Header -->
                <div class="flex flex-col gap-3 pb-10 md:items-center">
            <span class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
                Journey
            </span>
                    <h2 class="text-3xl font-bold text-black md:text-4xl dark:text-white">
                        Education<span class="text-primary">.</span>
                    </h2>
                    <p class="max-w-2xl text-sm text-zinc-700 md:text-center dark:text-zinc-300">
                        From secondary school to specialised software development — a focused path into web development.
                    </p>
                </div>

                <div class="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
                    <!-- Tabs / Left side -->
                    <div
                        class="relative rounded-2xl border border-white/30 bg-white/70 p-4 shadow-sm shadow-black/5 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80"
                    >
                        <!-- Accent line -->
                        <div
                            class="pointer-events-none absolute inset-y-4 left-2 w-px bg-gradient-to-b from-violet-500/70 via-fuchsia-500/40 to-violet-500/70"
                            aria-hidden="true"
                        ></div>

                        <div class="space-y-2">
                            <button
                                v-for="item in educationItems"
                                :key="item.id"
                                type="button"
                                @click="activeEducationId = item.id"
                                class="group relative flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-200"
                                :class="activeEducationId === item.id
                            ? 'bg-primary/10 text-black dark:text-white'
                            : 'text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-300 dark:hover:bg-zinc-900/70'"
                            >
                                <!-- Dot -->
                                <div class="mt-1 flex h-4 w-4 items-center justify-center">
                            <span
                                class="h-2 w-2 rounded-full transition-all duration-200"
                                :class="activeEducationId === item.id
                                    ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-violet-400/80'
                                    : 'bg-zinc-400/70 group-hover:bg-violet-400/80'"
                            ></span>
                                </div>

                                <div class="flex-1 space-y-1">
                                    <p
                                        class="text-sm font-semibold"
                                        :class="activeEducationId === item.id
                                    ? 'text-black dark:text-white'
                                    : 'text-zinc-700 dark:text-zinc-100'"
                                    >
                                        {{ item.label }}
                                    </p>
                                    <p class="text-xs text-zinc-500 dark:text-zinc-400">
                                        {{ item.subtitle }}
                                    </p>
                                    <p class="text-[11px] text-zinc-500 dark:text-zinc-500">
                                        {{ item.period }}
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Content / Right side -->
                    <div class="relative">
                        <!-- Glow background -->
                        <div
                            class="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-transparent blur-3xl"
                        ></div>

                        <Transition name="fade-slide">
                            <article
                                :key="activeEducationId"
                                class="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-md shadow-black/5 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-950/90"
                            >
                                <div class="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h3 class="text-lg font-semibold text-black dark:text-white">
                                            {{ activeEducation.label }}
                                        </h3>
                                        <p class="text-sm text-zinc-600 dark:text-zinc-300">
                                            {{ activeEducation.subtitle }}
                                        </p>
                                    </div>

                                    <div class="flex flex-col items-end gap-2 text-right">
                                <span
                                    class="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-400/50 dark:bg-violet-500/15 dark:text-violet-200"
                                >
                                    {{ activeEducation.badge }}
                                </span>
                                        <p class="text-xs text-zinc-500 dark:text-zinc-400">
                                            {{ activeEducation.period }} • {{ activeEducation.location }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Highlights -->
                                <div class="mt-4 flex flex-wrap gap-2">
                            <span
                                v-for="highlight in activeEducation.highlights"
                                :key="highlight"
                                class="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm shadow-black/5 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
                            >
                                {{ highlight }}
                            </span>
                                </div>

                                <!-- Description -->
                                <p class="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                                    {{ activeEducation.description }}
                                </p>
                            </article>
                        </Transition>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="px-8 py-24" v-animate-on-scroll="{delay: 60}">
            <div class="mx-auto max-w-6xl">
                <div class="flex flex-col pb-12 lg:items-center">
                    <h1 class="text-4xl font-bold text-black dark:text-white">Skills &amp; Expertise<span class="text-primary">.</span></h1>
                    <p class="pt-2 text-zinc-800 dark:text-zinc-300">Technologies I Work With</p>
                </div>

                <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div v-for="section in sections" :key="section.title">
                        <div
                            class="flex flex-col gap-4 rounded-xl border border-zinc-900 p-4 transition duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                        >
                            <h2 class="text-3xl font-bold text-primary">{{ section.title }}</h2>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div
                                    v-for="item in section.items"
                                    :key="`${section.title}-${item.label}`"
                                    class="flex flex-row items-center gap-4 rounded-xl border border-zinc-800 p-4"
                                >
                                    <!-- Icon gebruikt jouw css class -->
                                    <div :class="item.class" v-html="item.icon.svg"></div>
                                    <p class="text-lg font-bold text-black dark:text-white">{{ item.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-8 py-24" id="projects" v-animate-on-scroll="{delay: 60}">
            <div class="mx-auto max-w-6xl">
                <h1 class="mb-8 flex text-4xl font-bold text-stone-900 lg:justify-center dark:text-white">
                    Projects<span class="text-primary">.</span>
                </h1>

                <!-- Grid -->
                <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    <div v-for="project in projectcards" :key="project.title" class="group/card relative">
                        <!-- CARD -->
                        <div
                            class="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-white/80 shadow-sm backdrop-blur-sm transition duration-300 dark:bg-white/5 dark:ring-white/10"
                        >
                            <a :href="project.link" :target="project.link === '#hero' ? undefined : '_blank'" class="relative block">
                                <div class="relative aspect-[16/10] overflow-hidden">
                                    <img :src="project.image" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition duration-500"
                                    ></div>
                                </div>

                                <div class="p-5">
                                    <div class="flex flex-wrap gap-2 pb-2" v-if="project.tools">
                                        <span
                                            v-for="tool in project.tools"
                                            :key="tool"
                                            class="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-black backdrop-blur transition dark:bg-white/10 dark:text-white"
                                        >
                                            {{ tool }}
                                        </span>
                                    </div>

                                    <h3 class="mt-2 text-xl font-bold text-stone-900 transition dark:text-white">
                                        {{ project.title }}
                                    </h3>
                                    <p class="mt-2 line-clamp-3 text-stone-600 transition dark:text-zinc-300">
                                        {{ project.description }}
                                    </p>
                                    <div class="flex flex-row">
                                        <div class="mt-2">
                                            <a
                                                v-for="item in project.code"
                                                :key="item.link"
                                                :href="item.link"
                                                target="_blank"
                                                class="flex w-fit items-center rounded-lg bg-zinc-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-github mr-2 h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                                    ></path>
                                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                                </svg>
                                                {{ item.text }}
                                            </a>
                                        </div>
                                        <div class="mt-2">
                                            <a
                                                v-for="item in project.demo"
                                                :key="item.link"
                                                :href="item.link"
                                                target="_blank"
                                                class="flex w-fit items-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary/80"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-external-link mr-2 h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                                {{ item.text }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="relative overflow-hidden px-8 py-24" v-animate-on-scroll="{delay: 60}">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
                <div
                    class="absolute top-1/2 left-1/2 h-[40vw] max-h-[22rem] w-[90vw] max-w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/20 blur-3xl dark:bg-violet-600/25"
                ></div>
                <div
                    class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.08),transparent_60%)] dark:bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.12),transparent_60%)]"
                ></div>
            </div>

            <div class="mx-auto max-w-6xl">
                <div class="flex flex-col items-center justify-center pb-12 text-center">
                    <h2 class="text-4xl font-bold text-stone-900 transition-colors duration-500 dark:text-white">
                        Contact<span class="text-primary">.</span>
                    </h2>
                    <p class="pt-2 text-stone-600 transition-colors duration-500 dark:text-zinc-300">Let’s make something amazing together!</p>
                </div>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="space-y-4">
                        <!-- Email -->
                        <div
                            class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                        >
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 8l-8 5-8-5V6l8 5 8-5v2z" />
                                        <path d="M4 8v10h16V8l-8 5-8-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm text-stone-500 dark:text-zinc-400">Email</p>
                                    <a
                                        href="mailto:danielterpstra006@gmail.com"
                                        class="font-semibold text-stone-800 transition hover:text-primary dark:text-zinc-200"
                                    >
                                        danielterpstra006@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Location -->
                        <div
                            class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                        >
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm text-stone-500 dark:text-zinc-400">Location</p>
                                    <p class="font-semibold text-stone-800 dark:text-zinc-200">Enschede, NL</p>
                                </div>
                            </div>
                        </div>

                        <!-- Availability -->
                        <div
                            class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                        >
                            <div class="flex items-center gap-4">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15">
                                    <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                                </div>
                                <div>
                                    <p class="text-sm text-stone-500 dark:text-zinc-400">Availability</p>
                                    <p class="font-semibold text-stone-800 dark:text-zinc-200">Open for freelance & work</p>
                                </div>
                            </div>
                        </div>

                        <!-- Socials -->
                        <div class="flex gap-4 pt-2">
                            <!-- Socials -->
                            <a
                                href="https://github.com/TerpDev"
                                target="_blank"
                                class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    class="bi bi-github"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                    />
                                </svg>
                                <span class="sr-only">Github</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/danielterp/"
                                target="_blank"
                                class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    class="bi bi-linkedin"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                    />
                                </svg>
                                <span class="sr-only">LinkedIn</span>
                            </a>

                            <a
                                href="https://www.instagram.com/daniel_terpstra._?igsh=NWtsMXAzbmRoemxw&utm_source=qr"
                                target="_blank"
                                class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    class="bi bi-instagram"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                    />
                                </svg>
                                <span class="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>

                    <form
                        @submit.prevent="onSubmit"
                        class="rounded-xl border border-stone-200 bg-white/80 p-6 backdrop-blur-sm transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-950/40"
                    >
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Name</label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    required
                                    class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Email</label>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    required
                                    class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Subject</label>
                            <input
                                v-model="form.subject"
                                type="text"
                                class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                placeholder="What’s this about?"
                            />
                        </div>

                        <div class="mt-4">
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Message</label>
                            <textarea
                                v-model="form.message"
                                rows="5"
                                required
                                class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                placeholder="Tell me a bit about your project…"
                            />
                        </div>

                        <div class="mt-6 flex items-center gap-3">
                            <button
                                type="submit"
                                :disabled="sending"
                                class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 disabled:opacity-60"
                            >
                                <span v-if="!sending">Send Message</span>
                                <span v-else class="inline-flex items-center gap-2">
                                    <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                    </svg>
                                    Sending…
                                </span>
                            </button>

                            <span v-if="sent && !error" class="text-sm text-emerald-500 dark:text-emerald-400">
                                Thanks! I’ll get back to you soon.
                            </span>
                        </div>

                        <div v-if="sent || error" class="mt-4">
                            <div
                                :class="[
                                    'flex items-start gap-2 rounded-lg border p-3 text-sm',
                                    error
                                        ? 'border-red-300/60 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300'
                                        : 'border-emerald-300/60 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300',
                                ]"
                            >
                                <div class="mt-0.5">
                                    <span v-if="error">⚠️</span>
                                    <span v-else>✅</span>
                                </div>
                                <div class="flex-1">
                                    <p v-if="error">{{ error }}</p>
                                    <p v-else>Thanks for reaching out! We’ll get back to you soon.</p>
                                </div>
                                <button type="button" class="text-xs opacity-70 hover:opacity-100" @click="resetStates" aria-label="Close">✕</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
