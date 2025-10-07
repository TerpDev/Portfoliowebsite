<script setup lang="ts">
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
</script>
<template>
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
                                class="flex cursor-default flex-row items-center gap-4 rounded-xl border border-zinc-800 p-4"
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
</template>
