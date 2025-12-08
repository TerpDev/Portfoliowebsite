<!--<script setup lang="ts">-->
<!--const year = new Date().getFullYear();-->

<!--type Link = { label: string; href: string; external?: boolean };-->

<!--const navLinks: Link[] = [-->
<!--    { label: 'Home', href: '#hero' },-->
<!--    { label: 'About', href: '#about' },-->
<!--    { label: 'Education', href: '#timeline' },-->
<!--    { label: 'Skills', href: '#skills' },-->
<!--    { label: 'Projects', href: '#projects' },-->
<!--    { label: 'Contact', href: '#contact' },-->
<!--];-->

<!--const services: Link[] = [-->
<!--    { label: 'Frontend Development', href: '#skills' },-->
<!--    { label: 'Backend Development', href: '#skills' },-->
<!--    { label: 'UI/UX Design', href: '#skills' },-->
<!--    { label: 'Full Stack Solutions', href: '#skills' },-->
<!--];-->

<!--const socialLinks = [-->
<!--    {-->
<!--        label: 'GitHub',-->
<!--        href: 'https://github.com/TerpDev',-->
<!--        icon: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8',-->
<!--    },-->
<!--    {-->
<!--        label: 'LinkedIn',-->
<!--        href: 'https://www.linkedin.com/in/danielterp/',-->
<!--        icon: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z',-->
<!--    },-->
<!--    {-->
<!--        label: 'Instagram',-->
<!--        href: 'https://www.instagram.com/daniel_terpstra._?igsh=NWtsMXAzbmRoemxw&utm_source=qr',-->
<!--        icon: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334',-->
<!--    },-->
<!--];-->

<!--function scrollToTop(e: MouseEvent) {-->
<!--    e.preventDefault();-->
<!--    window.scrollTo({ top: 0, behavior: 'smooth' });-->
<!--}-->

<!--function smoothScroll(e: MouseEvent, href: string) {-->
<!--    const target = document.querySelector(href);-->
<!--    if (target) {-->
<!--        e.preventDefault();-->
<!--        target.scrollIntoView({ behavior: 'smooth', block: 'start' });-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--    <footer class="relative overflow-hidden bg-white dark:bg-black">-->
<!--        &lt;!&ndash; Background Pattern &ndash;&gt;-->
<!--        <div-->
<!--            class="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"-->
<!--            style="-->
<!--                background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.5) 1px, transparent 0);-->
<!--                background-size: 32px 32px;-->
<!--            "-->
<!--        ></div>-->

<!--        &lt;!&ndash; Gradient Overlay Top &ndash;&gt;-->
<!--        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"></div>-->

<!--        <div class="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">-->
<!--            &lt;!&ndash; Main Content Grid &ndash;&gt;-->
<!--            <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">-->
<!--                &lt;!&ndash; Brand Column &ndash;&gt;-->
<!--                <div class="space-y-6 lg:col-span-5">-->
<!--                    &lt;!&ndash; Logo &ndash;&gt;-->
<!--                    <a-->
<!--                        href="#hero"-->
<!--                        @click="(e) => smoothScroll(e, '#hero')"-->
<!--                        class="group inline-flex cursor-pointer items-center gap-1.5 transition-transform duration-300 will-change-transform hover:scale-105"-->
<!--                    >-->
<!--                        <span class="rounded-full bg-primary/30 p-2 text-base font-bold text-primary transition-all duration-300 group-hover:bg-primary/40">-->
<!--                            DT-->
<!--                        </span>-->
<!--                        <span class="text-xl font-bold text-zinc-900 dark:text-white">-->
<!--                            <span class="text-primary">Daniel</span>-->
<!--                            <span class="text-zinc-600 dark:text-zinc-400">.dev</span>-->
<!--                        </span>-->
<!--                    </a>-->

<!--                    &lt;!&ndash; Description &ndash;&gt;-->
<!--                    <p class="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">-->
<!--                        Passionate student software developer crafting beautiful and functional web applications. Let's connect and build something-->
<!--                        amazing together.-->
<!--                    </p>-->

<!--                    &lt;!&ndash; Social Links &ndash;&gt;-->
<!--                    <div class="flex items-center gap-3">-->
<!--                        <a-->
<!--                            v-for="social in socialLinks"-->
<!--                            :key="social.label"-->
<!--                            :href="social.href"-->
<!--                            target="_blank"-->
<!--                            rel="noopener noreferrer"-->
<!--                            class="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"-->
<!--                        >-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">-->
<!--                                <path :d="social.icon" />-->
<!--                            </svg>-->
<!--                            <span class="sr-only">{{ social.label }}</span>-->
<!--                        </a>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Contact CTA &ndash;&gt;-->
<!--                    <div class="pt-2">-->
<!--                        <a-->
<!--                            href="#contact"-->
<!--                            @click="(e) => smoothScroll(e, '#contact')"-->
<!--                            class="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"-->
<!--                        >-->
<!--                            <span>Let's Work Together</span>-->
<!--                            <svg-->
<!--                                xmlns="http://www.w3.org/2000/svg"-->
<!--                                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"-->
<!--                                fill="none"-->
<!--                                viewBox="0 0 24 24"-->
<!--                                stroke="currentColor"-->
<!--                            >-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->

<!--                &lt;!&ndash; Links Grid &ndash;&gt;-->
<!--                <div class="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-7 lg:grid-cols-3">-->
<!--                    &lt;!&ndash; Navigation &ndash;&gt;-->
<!--                    <div>-->
<!--                        <h3 class="mb-5 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">Navigation</h3>-->
<!--                        <ul class="space-y-3">-->
<!--                            <li v-for="link in navLinks" :key="link.label">-->
<!--                                <a-->
<!--                                    :href="link.href"-->
<!--                                    @click="(e) => smoothScroll(e, link.href)"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        {{ link.label }}-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Services &ndash;&gt;-->
<!--                    <div>-->
<!--                        <h3 class="mb-5 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">Services</h3>-->
<!--                        <ul class="space-y-3">-->
<!--                            <li v-for="service in services" :key="service.label">-->
<!--                                <a-->
<!--                                    :href="service.href"-->
<!--                                    @click="(e) => smoothScroll(e, service.href)"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        {{ service.label }}-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Connect &ndash;&gt;-->
<!--                    <div>-->
<!--                        <h3 class="mb-5 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">Connect</h3>-->
<!--                        <ul class="space-y-3">-->
<!--                            <li>-->
<!--                                <a-->
<!--                                    href="mailto:contact@danielterp.nl"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        Email Me-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                    href="#contact"-->
<!--                                    @click="(e) => smoothScroll(e, '#contact')"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        Contact Form-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                    href="https://github.com/TerpDev"-->
<!--                                    target="_blank"-->
<!--                                    rel="noopener noreferrer"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        GitHub-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                    href="https://www.linkedin.com/in/danielterp/"-->
<!--                                    target="_blank"-->
<!--                                    rel="noopener noreferrer"-->
<!--                                    class="group relative inline-block cursor-pointer text-sm text-zinc-600 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"-->
<!--                                >-->
<!--                                    <span-->
<!--                                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"-->
<!--                                    >-->
<!--                                        LinkedIn-->
<!--                                    </span>-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Divider &ndash;&gt;-->
<!--            <div class="my-10 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 lg:my-12"></div>-->

<!--            &lt;!&ndash; Bottom Bar &ndash;&gt;-->
<!--            <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">-->
<!--                &lt;!&ndash; Copyright &ndash;&gt;-->
<!--                <p class="text-center text-sm text-zinc-600 dark:text-zinc-400">-->
<!--                    © {{ year }}-->
<!--                    <span class="font-semibold text-zinc-900 dark:text-white">Daniel Terpstra</span>-->
<!--                    <span class="mx-1.5">·</span>-->
<!--                    All rights reserved-->
<!--                </p>-->

<!--                &lt;!&ndash; Back to Top Button &ndash;&gt;-->
<!--                <a-->
<!--                    href="#hero"-->
<!--                    @click="scrollToTop"-->
<!--                    class="group flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"-->
<!--                >-->
<!--                    <span>Back to Top</span>-->
<!--                    <svg-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                        class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"-->
<!--                        fill="none"-->
<!--                        viewBox="0 0 24 24"-->
<!--                        stroke="currentColor"-->
<!--                    >-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />-->
<!--                    </svg>-->
<!--                </a>-->
<!--            </div>-->

<!--            &lt;!&ndash; Made with Love &ndash;&gt;-->
<!--            <div class="mt-6 text-center">-->
<!--                <p class="flex items-center justify-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500">-->
<!--                    <span>Made with</span>-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-pulse text-primary" fill="currentColor" viewBox="0 0 16 16">-->
<!--                        <path-->
<!--                            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"-->
<!--                        />-->
<!--                    </svg>-->
<!--                    <span>by Daniel Terpstra</span>-->
<!--                </p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </footer>-->
<!--</template>-->
<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import type { Component } from "vue";
import { NotepadTextDashed, Twitter, Linkedin, Github, Mail } from "lucide-vue-next";
import { cn } from "@/lib/utils";

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: Component;
    href: string;
    label: string;
}

const props = withDefaults(
    defineProps<{
        brandName?: string;
        brandDescription?: string;
        socialLinks?: SocialLink[];
        navLinks?: FooterLink[];
        creatorName?: string;
        creatorUrl?: string;
        brandIcon?: Component;
        className?: string;
    }>(),
    {
        brandName: "TerpDev",
        brandDescription:
            "I'm a passionate student software developer dedicated to crafting beautiful and functional web applications. Let's connect and build something amazing together.",
        creatorName: "Daniel Terpstra",
        creatorUrl: "https://terpdev.dev",
        className: "",
    }
);

// default social & nav links als props niet meegegeven worden
const defaultSocialLinks: SocialLink[] = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@resumegpt.com", label: "Email" },
];

const defaultNavLinks: FooterLink[] = [
    { label: "Pricing", href: "/" },
    { label: "Templates", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
];
</script>

<template>
    <section :class="cn('relative w-full mt-0 overflow-hidden', props.className)">
        <footer class="border-t bg-background mt-20 relative">
            <div
                class="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10"
            >
                <div class="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
                    <div class="w-full flex flex-col items-center">
                        <div class="space-y-2 flex flex-col items-center flex-1">
                            <div class="flex items-center gap-2">
                <span class="text-foreground text-3xl font-bold">
                  {{ props.brandName }}
                </span>
                            </div>
                            <p
                                class="text-muted-foreground font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0"
                            >
                                {{ props.brandDescription }}
                            </p>
                        </div>

                        <!-- Social links -->
                        <div
                            v-if="(props.socialLinks && props.socialLinks.length) || defaultSocialLinks.length"
                            class="flex mb-8 mt-3 gap-4"
                        >
                            <a
                                v-for="(link, index) in (props.socialLinks?.length ? props.socialLinks : defaultSocialLinks)"
                                :key="index"
                                :href="link.href"
                                class="text-muted-foreground hover:text-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="w-6 h-6 hover:scale-110 duration-300">
                                    <component :is="link.icon" class="w-6 h-6" />
                                </div>
                                <span class="sr-only">{{ link.label }}</span>
                            </a>
                        </div>

                        <!-- Nav links -->
                        <div
                            v-if="(props.navLinks && props.navLinks.length) || defaultNavLinks.length"
                            class="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground max-w-full px-4"
                        >
                            <a
                                v-for="(link, index) in (props.navLinks?.length ? props.navLinks : defaultNavLinks)"
                                :key="index"
                                :href="link.href"
                                class="hover:text-foreground duration-300 hover:font-semibold"
                            >
                                {{ link.label }}
                            </a>
                        </div>
                    </div>
                </div>

                <!-- onderste balk -->
                <div
                    class="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0"
                >
                    <p class="text-base text-muted-foreground text-center md:text-left">
                        ©{{ new Date().getFullYear() }} {{ props.brandName }}. All rights reserved.
                    </p>

                    <nav v-if="props.creatorName && props.creatorUrl" class="flex gap-4">
                        <a
                            :href="props.creatorUrl"
                            target="_blank"
                            class="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium"
                        >
                            Crafted by {{ props.creatorName }}
                        </a>
                    </nav>
                </div>
            </div>

            <!-- grote achtergrondtekst -->
            <div
                class="bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
                :style="{
          fontSize: 'clamp(3rem, 12vw, 10rem)',
          maxWidth: '95vw',
        }"
            >
                {{ props.brandName.toUpperCase() }}
            </div>

            <!-- logo blok -->
            <div
                class="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10"
            >
                <div
                    class="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg"
                >
                    <component
                        :is="props.brandIcon || NotepadTextDashed"
                        class="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg"
                    />
                </div>
            </div>

            <!-- dunne lijn onder logo -->
            <div
                class="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"
            ></div>

            <!-- schaduw -->
            <div
                class="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"
            ></div>
        </footer>
    </section>
</template>

