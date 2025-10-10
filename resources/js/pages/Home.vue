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
import { onBeforeUnmount, onMounted, ref } from 'vue';
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
</script>

<template>
    <Head title="Daniel Terpstra | Software Developer">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

    </Head>
    <AppLayout>
        <section id="hero" class="relative overflow-hidden">
            <!-- Background glows -->
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
                <div
                    class="absolute top-1/2 left-1/2 h-[20vw] max-h-[22rem] w-[90vw] max-w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/25 blur-3xl"
                    v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 0, threshold: 0 }"

                ></div>

                <div
                    class="absolute top-1/2 left-1/2 h-[32vw] max-h-[20rem] w-[70vw] max-w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-fuchsia-500/20 blur-3xl"
                    v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 80, threshold: 0 }"
                ></div>

                <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.15),transparent_60%)]"></div>
            </div>

            <div class="mx-auto flex h-[92vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
                <!-- Intro line -->
                <h1
                    class="text-4xl font-extrabold tracking-tight text-black will-change-transform sm:text-5xl dark:text-white"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-t-12 animate-duration-700',
                        delay: 40,
                    }"
                >
                    Hi, I'm
                    <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                        Daniel Terpstra
                    </span>
                </h1>

                <!-- Badge -->
                <div
                    class="mt-6 will-change-transform"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-600',
                        delay: 140,
                    }"
                >
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
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-b-12 animate-duration-800',
                        delay: 220,
                    }"
                >
                    Crafting <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Digital</span
                    ><br class="hidden md:block" />
                    <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experiences</span> That Matter
                </h2>

                <!-- Typed line -->
                <p
                    class="mt-6 text-black will-change-transform dark:text-zinc-300"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 font-bold slide-in-from-b-6 animate-duration-600',
                        delay: 300,
                    }"
                >
                    I’m a <span class="typing font-bold text-violet-400/90"></span>
                </p>

                <!-- CTAs -->
                <div
                    class="mt-10 flex items-center gap-4 will-change-transform"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
                        delay: 380,
                    }"
                >
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
                <div
                    class="absolute inset-x-0 bottom-6 flex justify-center text-xs text-zinc-800 will-change-transform dark:text-zinc-500"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
                        delay: 460,
                    }"
                >
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
        <section id="about" class="px-8 py-24">
            <div class="mx-auto max-w-6xl">
                <div class="flex items-center pb-8 lg:justify-center">
                    <h1 class="text-4xl font-bold text-black dark:text-white">About me<span class="text-primary">.</span></h1>
                </div>
                <div class="grid grid-cols-1 gap-32 md:grid-cols-2">
                    <div class="flex flex-col gap-3 text-black dark:text-white">
                        <h2 class="text-2xl font-bold">Passionate Software Developer Student</h2>
                        <p>
                            Hey There! I'm Daniel Terpstra, 19 years old and a passionate student software developer based in the Netherlands. I
                            specialize in crafting beautiful and functional web applications that provide seamless user experiences, with a strong
                            foundation in both frontend and backend. Right now I'm focused on learning
                            <a target="_blank" href="https://laravel.com/" class=" font-bold transition hover:text-[#FF2D20]"
                                >Laravel</a
                            >
                            and
                            <a target="_blank" href="https://filamentphp.com/" class=" font-bold transition hover:text-[#FDAE4B]"
                                >Filament</a
                            >
                            for backend development. On the frontend I’m focused on the
                            <a target="_blank" href="https://tallstack.dev/" class=" font-bold transition hover:text-[#38bdf8]"
                                >TALL stack</a
                            >, which combines
                            <a target="_blank" href="https://tailwindcss.com/" class=" font-bold transition hover:text-[#06B6D4]"
                                >TailwindCSS</a
                            >,
                            <a target="_blank" href="https://alpinejs.dev/" class=" font-bold transition hover:text-[#8BC0D0]"
                                >AlpineJS</a
                            >,
                            <a target="_blank" href="https://laravel.com/" class=" font-bold transition hover:text-[#FF2D20]"
                                >Laravel</a
                            >
                            and
                            <a target="_blank" href="https://laravel-livewire.com/" class=" font-bold transition hover:text-[#4E56A6]"
                                >Livewire</a
                            >. I’m also experienced with
                            <a target="_blank" href="https://vuejs.org/" class=" font-bold transition hover:text-[#4FC08D]">Vue.js</a>,
                            using
                            <a target="_blank" href="https://primevue.org/" class=" font-bold transition hover:text-[#41B883]"
                                >PrimeVue</a
                            >
                            and
                            <a target="_blank" href="https://headlessui.dev/" class=" font-bold transition hover:text-[#66E3FF]"
                                >HeadlessUI</a
                            >
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
                    <div>
                        <img :src="placeholder" class="w-full rounded-lg shadow-lg" alt="" />
                    </div>
                </div>
                <div class="relative pt-18">
                    <!-- background glow -->
                    <div class="absolute inset-0 -z-10 mt-16 rounded-2xl bg-primary/30 blur-3xl lg:blur-2xl"></div>

                    <!-- your stats grid -->
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
        <!-- DESKTOP timeiline-->
        <section id="timeline" class="hidden px-8 py-24 md:block">
            <div class="mx-auto max-w-6xl">
                <div class="flex justify-center pb-12">
                    <h1 class="text-4xl font-bold text-black dark:text-white">Education<span class="text-purple-500">.</span></h1>
                </div>

                <div class="relative">
                    <!-- Vertical line -->
                    <div class="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-purple-700/40"></div>

                    <!-- ITEM 1 -->
                    <div class="relative mb-12 flex items-center justify-between">
                        <div class="group w-5/12 text-right">
                            <div
                                class=" rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-2 font-bold text-black dark:text-white">
                                    Bonhoeffer College locatie Van der Waalslaan -
                                    <span class="text-sm font-medium text-zinc-400">4years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    I completed my secondary education at Bonhoeffer College, where I got my MAVO diploma in 4 years. During the COVID
                                    period I spent a lot of time behind my computer doing online classes. That’s also when I found out I really
                                    enjoyed working with computers — I started taking them apart and putting them back together. That curiosity was
                                    the start of my journey into software development.
                                </p>
                            </div>
                        </div>

                        <!-- Dot -->
                        <div class="relative flex items-center justify-center">
                            <div class="absolute -z-10 h-16 w-16 rounded-full bg-purple-600/40 blur-xl"></div>
                            <div class="h-6 w-6 rounded-full bg-purple-600 shadow-md"></div>
                        </div>
                        <div class="w-5/12"></div>
                    </div>

                    <!-- ITEM 2 -->
                    <div class="relative mb-12 flex items-center justify-between">
                        <div class="w-5/12"></div>

                        <!-- Dot -->
                        <div class="relative flex items-center justify-center">
                            <div class="absolute -z-10 h-16 w-16 rounded-full bg-purple-600/40 blur-xl"></div>
                            <div class="h-6 w-6 rounded-full bg-purple-600 shadow-md"></div>
                        </div>

                        <div class="group w-5/12">
                            <div
                                class=" rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-2 font-bold text-black dark:text-white">
                                    MBO Software Developer Study Enschede -
                                    <span class="text-sm font-medium text-zinc-400">2years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    This is really where it all began for me. For the intake I had to make a small console app in C#. Back then I had
                                    no clue what I was doing — I had to use things I’d never even heard of before. Still, I managed to build it and I
                                    was proud of myself. The study was more focused on game development, but after my first internship at C-o-d-e-s in
                                    Almelo, where I learned Laravel and Vue.js, I knew web development was the path I wanted to take.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- ITEM 3 -->
                    <div class="relative mb-12 flex items-center justify-between">
                        <div class="group w-5/12 text-right">
                            <div
                                class=" rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-2 font-bold text-black dark:text-white">
                                    MBO Software Developer Study Hengelo -
                                    <span class="text-sm font-medium text-zinc-400">2years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    After 2 years in Enschede I decided to switch from game development to web development. Together with 4 friends I
                                    moved to the Hengelo location. At first it wasn’t that easy, since we jumped straight into the third year and
                                    missed a lot of things the others already learned. But with some hard work we caught up quickly. Right now I’m in
                                    my fourth year doing my internship at Cube in Oldenzaal, where I’m learning a lot every day. After this, it’s time
                                    for my final exams.
                                </p>
                            </div>
                        </div>

                        <!-- Dot -->
                        <div class="relative flex items-center justify-center">
                            <div class="absolute -z-10 h-16 w-16 rounded-full bg-purple-600/40 blur-xl"></div>
                            <div class="h-6 w-6 rounded-full bg-purple-600 shadow-md"></div>
                        </div>

                        <div class="w-5/12"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- MOBILE timeline-->
        <section id="timeline" class="px-8 py-16 md:hidden">
            <div class="mx-auto max-w-xl">
                <div class="flex pb-8">
                    <h1 class="text-4xl font-bold text-black dark:text-white">Education<span class="text-purple-500">.</span></h1>
                </div>

                <div class="relative">
                    <!-- Linker lijn -->
                    <div class="absolute top-0 bottom-0 left-2 w-px bg-purple-700/40"></div>
                    <div class="space-y-10">
                        <!-- ITEM 1 -->
                        <div class="relative pl-12">
                            <!-- Dot + glow -->
                            <div class="absolute top-2 left-4 -translate-x-1/2">
                                <div class="absolute -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-lg"></div>
                                <div class="h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 shadow"></div>
                            </div>

                            <div
                                class="rounded-lg border border-primary/10 p-4 shadow-md backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-1 text-base font-semibold text-black dark:text-white">
                                    Bonhoeffer College locatie Van der Waalslaan
                                    <span class="text-xs font-medium text-zinc-400"> • 4years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    I completed my secondary education at Bonhoeffer College, where I got my MAVO diploma in 4 years. During the COVID
                                    period I spent a lot of time behind my computer doing online classes. That’s also when I found out I really
                                    enjoyed working with computers — I started taking them apart and putting them back together. That curiosity was
                                    the start of my journey into software development.
                                </p>
                            </div>
                        </div>

                        <!-- ITEM 2 -->
                        <div class="relative pl-12">
                            <div class="absolute top-2 left-4 -translate-x-1/2">
                                <div class="absolute -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-lg"></div>
                                <div class="h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 shadow"></div>
                            </div>

                            <div
                                class="rounded-lg border border-primary/10 p-4 shadow-md backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-1 text-base font-semibold text-black dark:text-white">
                                    MBO Software Developer Study Enschede
                                    <span class="text-xs font-medium text-zinc-400"> • 2years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    This is really where it all began for me. For the intake I had to make a small console app in C#. Back then I had
                                    no clue what I was doing — I had to use things I’d never even heard of before. Still, I managed to build it and I
                                    was proud of myself. The study was more focused on game development, but after my first internship at C-o-d-e-s in
                                    Almelo, where I learned Laravel and Vue.js, I knew web development was the path I wanted to take.
                                </p>
                            </div>
                        </div>

                        <!-- ITEM 3 -->
                        <div class="relative pl-12">
                            <div class="absolute top-2 left-4 -translate-x-1/2">
                                <div class="absolute -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-lg"></div>
                                <div class="h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 shadow"></div>
                            </div>

                            <div
                                class="rounded-lg border border-primary/10 p-4 shadow-md backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-primary hover:bg-primary/20"
                            >
                                <h3 class="mb-1 text-base font-semibold text-black dark:text-white">
                                    MBO Software Developer Study Hengelo
                                    <span class="text-xs font-medium text-zinc-400"> • 2years</span>
                                </h3>
                                <p class="text-sm text-zinc-700 dark:text-zinc-300">
                                    After 2 years in Enschede I decided to switch from game development to web development. Together with 4 friends I
                                    moved to the Hengelo location. At first it wasn’t that easy, since we jumped straight into the third year and
                                    missed a lot of things the others already learned. But with some hard work we caught up quickly. Right now I’m in
                                    my fourth year doing my internship at Cube in Oldenzaal, where I’m learning a lot every day. After this, it’s time
                                    for my final exams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills" class="px-8 py-24">
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
                                    class="flex  flex-row items-center gap-4 rounded-xl border border-zinc-800 p-4"
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
        <section class="px-8 py-24" id="projects">
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
        <section id="contact" class="relative overflow-hidden px-8 py-24">
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
                                class="inline-flex  items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 disabled:opacity-60"
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
