<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
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
import AppLayout from '../layouts/AppLayout.vue';
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
        description: 'This is my portfolio website, which I designed and built myself using Laravel, Vue.js, and Tailwind CSS.',
        image: '/images/heroport.png',
        link: '#hero',
        details: 'This website is build with Vuejs 3 and Tailwind CSS. ',
    },
    {
        title: 'MTF Automobielen',
        description:
            'This is a project I worked on with a whew other developers I mostly worked on the frontend using Vue 3 and Tailwind CSS.',
        image: '/images/img.png',
        link: 'https://mtfautomobielen.nl/',
        details:
            'This website was built entirely with Vue 3 and Tailwind CSS. It includes smooth animations, responsive layout, and modern design principles.',
    },
]);
const isOpen = ref(false);
const selectedProject = ref<any>(null);

const openModal = (project: any) => {
    selectedProject.value = project;
    isOpen.value = true;
};
const closeModal = () => {
    isOpen.value = false;
};
const sending = ref(false);
const sent = ref(false);

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
});

async function submitContact(e: Event) {
    e.preventDefault();
    if (sending.value) return;
    sending.value = true;

    // TODO: replace with your API request or Inertia post
    await new Promise((r) => setTimeout(r, 900));

    sending.value = false;
    sent.value = true;
    // reset
    form.value = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => (sent.value = false), 2500);
}
</script>

<template>
    <Head title="Daniel Terpstra | Software Developer"> </Head>
    <AppLayout>
        <section id="hero" class="relative overflow-hidden">
            <!-- Background glows -->
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
                <div
                    class="absolute top-1/2 left-1/2 h-[20vw] max-h-[22rem] w-[90vw] max-w-[60rem]
             -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/25 blur-3xl"
                    v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 0, threshold: 0 }"
                ></div>

                <div
                    class="absolute top-1/2 left-1/2 h-[32vw] max-h-[20rem] w-[70vw] max-w-[46rem]
             -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-fuchsia-500/20 blur-3xl"
                    v-animateonscroll="{ enterClass: 'animate-enter fade-in-10', delay: 80, threshold: 0 }"
                ></div>

                <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.15),transparent_60%)]"></div>
            </div>

            <div class="mx-auto flex h-[92vh] max-w-6xl flex-col items-center justify-center px-4 text-center">

                <!-- Intro line -->
                <h1
                    class="text-4xl tracking-tight font-extrabold text-black dark:text-white sm:text-5xl will-change-transform"
                    v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-t-12 animate-duration-700',
        delay: 40
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
        delay: 140
      }"
                >
      <span
          class="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 backdrop-blur"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        Student Software Developer - Available for work!
      </span>
                </div>

                <!-- Big headline -->
                <h2
                    class="mt-8 text-4xl leading-[1.05] font-extrabold dark:text-white text-black sm:text-5xl md:text-6xl lg:text-7xl will-change-transform"
                    v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-b-12 animate-duration-800',
        delay: 220
      }"
                >
                    Crafting <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Digital</span><br class="hidden md:block" />
                    <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experiences</span> That Matter
                </h2>

                <!-- Typed line -->
                <p
                    class="mt-6 text-black dark:text-zinc-300 will-change-transform"
                    v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 font-bold slide-in-from-b-6 animate-duration-600',
        delay: 300
      }"
                >
                    I’m a <span class="typing font-bold text-violet-400/90"></span>
                </p>

                <!-- CTAs -->
                <div
                    class="mt-10 flex items-center gap-4 will-change-transform"
                    v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
        delay: 380
      }"
                >
                    <a
                        href="#projects"
                        class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-white/30"
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
                        class="inline-flex items-center rounded-xl border border-black dark:border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-black dark:text-white backdrop-blur transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                        Contact Me
                    </a>
                </div>

                <!-- Scroll hint -->
                <div
                    class="absolute inset-x-0 bottom-6 flex justify-center text-xs text-zinc-800 dark:text-zinc-500 will-change-transform"
                    v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-b-6 animate-duration-600',
        delay: 460
      }"
                >
                    <div class="flex items-center justify-center w-full gap-2">
                        <a href="#about" class="cursor-pointer">
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
                <div class="flex items-center lg:justify-center pb-8">
                    <h1 class="text-4xl text-black dark:text-white font-bold">About me<span class="text-primary">.</span></h1>
                </div>
                <div class="grid grid-cols-1 gap-32 md:grid-cols-2">
                    <div class="flex flex-col gap-3 text-black dark:text-white">
                        <h2 class="text-2xl font-bold">Passionate Software Developer Student</h2>
                        <p>
                            Hey There! I'm Daniel Terpstra, 19 years old and a passionate student software developer based in the Netherlands. I
                            specialize in crafting beautiful and functional web applications that provide seamless user experiences, with a strong
                            foundation in both frontend and backend. Right now I'm focused on learning
                            <a target="_blank" href="https://laravel.com/" class="cursor-pointer font-bold transition hover:text-[#FF2D20]"
                                >Laravel</a
                            >
                            and
                            <a target="_blank" href="https://filamentphp.com/" class="cursor-pointer font-bold transition hover:text-[#FDAE4B]"
                                >Filament</a
                            >
                            for backend development. On the frontend I’m focused on the
                            <a target="_blank" href="https://tallstack.dev/" class="cursor-pointer font-bold transition hover:text-[#38bdf8]"
                                >TALL stack</a
                            >, which combines
                            <a target="_blank" href="https://tailwindcss.com/" class="cursor-pointer font-bold transition hover:text-[#06B6D4]"
                                >TailwindCSS</a
                            >,
                            <a target="_blank" href="https://alpinejs.dev/" class="cursor-pointer font-bold transition hover:text-[#8BC0D0]"
                                >AlpineJS</a
                            >,
                            <a target="_blank" href="https://laravel.com/" class="cursor-pointer font-bold transition hover:text-[#FF2D20]"
                                >Laravel</a
                            >
                            and
                            <a target="_blank" href="https://laravel-livewire.com/" class="cursor-pointer font-bold transition hover:text-[#4E56A6]"
                                >Livewire</a
                            >. I’m also experienced with
                            <a target="_blank" href="https://vuejs.org/" class="cursor-pointer font-bold transition hover:text-[#4FC08D]">Vue.js</a>,
                            using
                            <a target="_blank" href="https://primevue.org/" class="cursor-pointer font-bold transition hover:text-[#41B883]"
                                >PrimeVue</a
                            >
                            and
                            <a target="_blank" href="https://headlessui.dev/" class="cursor-pointer font-bold transition hover:text-[#66E3FF]"
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
                        <p>Image here</p>
                    </div>
                </div>
                <div class="relative pt-18">
                    <!-- background glow -->
                    <div class="absolute inset-0 -z-10 mt-16 rounded-2xl bg-primary/30 blur-3xl lg:blur-2xl"></div>

                    <!-- your stats grid -->
                    <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-2 lg:grid-cols-4 text-black dark:text-zinc-200">
                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">3+ Years</h1>
                            <p class="text-md ">Experience in Software Development</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">8+ Skills</h1>
                            <p class="text-md ">Frontend and Backend Technologies</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">Focused On</h1>
                            <p class="text-md ">Frontend, backend & Fullstack skills</p>
                        </div>

                        <div class="flex flex-col items-center gap-2">
                            <h1 class="text-3xl font-bold text-primary">Passionate About</h1>
                            <p class="text-md ">Crafting Clean & Modern Applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- DESKTOP timeiline-->
        <section id="timeline" class="hidden px-8 py-24 md:block">
            <div class="mx-auto max-w-6xl">
                <div class="flex justify-center pb-12">
                    <h1 class="text-4xl text-black dark:text-white font-bold">Education<span class="text-purple-500">.</span></h1>
                </div>

                <div class="relative">
                    <!-- Vertical line -->
                    <div class="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-purple-700/40"></div>

                    <!-- ITEM 1 -->
                    <div class="relative mb-12 flex items-center justify-between">
                        <div class="group w-5/12 text-right">
                            <div
                                class="cursor-default rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
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
                                class="cursor-default rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
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
                                class="cursor-default rounded-lg border border-primary/10 p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20"
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
                    <h1 class="text-4xl text-black dark:text-white font-bold">Education<span class="text-purple-500">.</span></h1>
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

        <!--skills-->
        <section id="skills" class="px-8 py-24">
            <div class="mx-auto max-w-6xl">
                <div class="flex flex-col lg:items-center pb-12">
                    <h1 class="text-4xl text-black dark:text-white font-bold">Skills &amp; Expertise<span class="text-primary">.</span></h1>
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
                                    class="flex cursor-default flex-row items-center gap-4 rounded-xl border border-zinc-800 p-4"
                                >
                                    <!-- Icon gebruikt jouw css class -->
                                    <div :class="item.class" v-html="item.icon.svg"></div>
                                    <p class="text-lg text-black dark:text-white font-bold">{{ item.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--projects-->
        <section class="px-8 py-24" id="projects">
            <div class="mx-auto max-w-6xl">
                <h1 class="mb-8 text-4xl font-bold text-stone-900 dark:text-white flex lg:justify-center">
                    Projects<span class="text-primary">.</span>
                </h1>

                <!-- Grid -->
                <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    <div v-for="project in projectcards" :key="project.title" class="group/card relative">
                        <!-- CARD -->
                        <div
                            class="group relative overflow-hidden rounded-2xl ring-1 ring-stone-200/70 dark:ring-white/10 bg-white/80 dark:bg-white/5 shadow-sm backdrop-blur-sm transition duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                        >
                            <a
                                :href="project.link"
                                :target="project.link === '#hero' ? undefined : '_blank'"
                                class="relative block"
                            >
                                <div class="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        :src="project.image"
                                        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                                    ></div>
                                </div>

                                <div class="p-5">
                                    <h3
                                        class="mt-2 text-xl font-bold text-stone-900 dark:text-white transition group-hover:text-primary"
                                    >
                                        {{ project.title }}
                                    </h3>
                                    <p class="mt-2 line-clamp-3 text-stone-600 dark:text-zinc-300 transition">
                                        {{ project.description }}
                                    </p>
                                </div>
                            </a>
                        </div>

                        <!-- INFO BUTTON -->
                        <button
                            type="button"
                            @click.prevent="openModal(project)"
                            class="cursor-pointer absolute top-3 right-3 z-20 rounded-full bg-stone-900/40 dark:bg-black/40 px-2 py-2 text-sm text-white opacity-100 backdrop-blur-sm transition hover:bg-stone-900/60 dark:hover:bg-black/60"
                            title="More info"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- MODAL -->
                <TransitionRoot appear :show="isOpen" as="template">
                    <Dialog as="div" @close="closeModal" class="relative z-50">
                        <!-- Backdrop -->
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                        </TransitionChild>

                        <!-- Modal panel -->
                        <div class="fixed inset-0 flex items-center justify-center p-4 text-center">
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-6 text-left shadow-xl ring-1 ring-stone-200/70 dark:ring-white/10 transition-all"
                                >
                                    <DialogTitle
                                        as="h3"
                                        class="text-xl font-semibold text-primary dark:text-primary"
                                    >
                                        {{ selectedProject?.title }}
                                    </DialogTitle>
                                    <div class="mt-3 text-stone-700 dark:text-zinc-300">
                                        <p>{{ selectedProject?.details }}</p>
                                    </div>

                                    <div class="mt-5 flex justify-end">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center rounded-md border border-stone-300/70 dark:border-white/10 bg-stone-100 dark:bg-white/10 px-4 py-2 text-sm font-medium text-stone-800 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30 transition duration-300 cursor-pointer"
                                            @click="closeModal"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </TransitionRoot>
            </div>
        </section>

        <section id="contact" class="relative overflow-hidden px-8 py-24"
        >
            <!-- background glow -->
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
                <div
                    class="absolute top-1/2 left-1/2 h-[40vw] max-h-[22rem] w-[90vw] max-w-[60rem]
             -translate-x-1/2 -translate-y-1/2 rounded-[9999px]
             bg-violet-600/20 blur-3xl dark:bg-violet-600/25"
                ></div>
                <div
                    class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.08),transparent_60%)]
             dark:bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.12),transparent_60%)]"
                ></div>
            </div>

            <div class="mx-auto max-w-6xl">
                <!-- Header -->
                <div class="flex flex-col items-center justify-center pb-12 text-center">
                    <h2 class="text-4xl font-bold text-stone-900 dark:text-white transition-colors duration-500">
                        Contact<span class="text-primary">.</span>
                    </h2>
                    <p class="pt-2 text-stone-600 dark:text-zinc-300 transition-colors duration-500">
                        Let’s make something amazing together!
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <!-- Info cards -->
                    <div class="space-y-4">
                        <!-- Email -->
                        <div
                            class="rounded-xl border border-stone-200 dark:border-zinc-800
                 bg-white/80 dark:bg-zinc-950/40 p-5 backdrop-blur-sm
                 transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
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
                                        class="font-semibold text-stone-800 dark:text-zinc-200 transition hover:text-primary"
                                    >
                                        danielterpstra006@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Location -->
                        <div
                            class="rounded-xl border border-stone-200 dark:border-zinc-800
                 bg-white/80 dark:bg-zinc-950/40 p-5 backdrop-blur-sm
                 transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
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
                            class="rounded-xl border border-stone-200 dark:border-zinc-800
                 bg-white/80 dark:bg-zinc-950/40 p-5 backdrop-blur-sm
                 transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
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
                        <div class="flex items-center gap-4 pt-2">
                            <a href="https://github.com/TerpDev" target="_blank" class="text-stone-500 dark:text-zinc-400 hover:text-primary transition" aria-label="GitHub">
                                <i class="pi pi-github text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/danielterp/" target="_blank" class="text-stone-500 dark:text-zinc-400 hover:text-primary transition" aria-label="LinkedIn">
                                <i class="pi pi-linkedin text-xl"></i>
                            </a>
                            <a href="#" class="text-stone-500 dark:text-zinc-400 hover:text-primary transition" aria-label="Instagram">
                                <i class="pi pi-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Contact form -->
                    <form
                        @submit="submitContact"
                        class="rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/40 p-6 backdrop-blur-sm transition-colors duration-500"
                    >
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Name</label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    required
                                    class="w-full rounded-lg border border-stone-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 px-3 py-2 text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-500 outline-none focus:border-primary transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Email</label>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    required
                                    class="w-full rounded-lg border border-stone-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 px-3 py-2 text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-500 outline-none focus:border-primary transition"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Subject</label>
                            <input
                                v-model="form.subject"
                                type="text"
                                class="w-full rounded-lg border border-stone-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 px-3 py-2 text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-500 outline-none focus:border-primary transition"
                                placeholder="What’s this about?"
                            />
                        </div>

                        <div class="mt-4">
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Message</label>
                            <textarea
                                v-model="form.message"
                                rows="5"
                                required
                                class="w-full rounded-lg border border-stone-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 px-3 py-2 text-sm text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-zinc-500 outline-none focus:border-primary transition"
                                placeholder="Tell me a bit about your project…"
                            />
                        </div>

                        <div class="mt-6 flex items-center gap-3">
                            <button
                                type="submit"
                                :disabled="sending"
                                class="inline-flex items-center gap-2 rounded-xl cursor-pointer bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 disabled:opacity-60"
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

                            <span v-if="sent" class="text-sm text-emerald-500 dark:text-emerald-400">Thanks! I’ll get back to you soon.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
