<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import type { Component } from 'vue';
import { NotepadTextDashed, Twitter, Linkedin, Github, Mail } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

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
        brandName: 'TerpDev',
        brandDescription:
            "I'm a passionate student software developer dedicated to crafting beautiful and functional web applications. Let's connect and build something amazing together.",
        creatorName: 'Daniel Terpstra',
        creatorUrl: 'https://terpdev.dev',
        className: '',
    },
);

// default social & nav links als props niet meegegeven worden
const defaultSocialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/danielterp/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/TerpDev', label: 'GitHub' },
    { icon: Mail, href: 'mailto:danielterpstra006@gmail.com', label: 'Email' },
];
</script>

<template>
    <section class="relative mt-0 w-full overflow-hidden bg-[#030303]">
        <footer class="relative mt-20 border-t border-zinc-800 bg-[#030303]">
            <div class="relative mx-auto flex min-h-[30rem] max-w-7xl flex-col justify-between p-4 py-10 sm:min-h-[35rem] md:min-h-[40rem]">
                <div class="mb-12 flex w-full flex-col sm:mb-20 md:mb-0">
                    <div class="flex w-full flex-col items-center">
                        <div class="flex flex-1 flex-col items-center space-y-2">
                            <div class="flex items-center gap-2">
                                <span class="text-3xl font-bold text-white">
                                    {{ props.brandName }}
                                </span>
                            </div>
                            <p class="w-full max-w-sm px-4 text-center font-semibold text-zinc-400 sm:w-96 sm:px-0">
                                {{ props.brandDescription }}
                            </p>
                        </div>

                        <!-- Social links -->
                        <div v-if="(props.socialLinks && props.socialLinks.length) || defaultSocialLinks.length" class="mt-3 mb-2 flex gap-4">
                            <a
                                v-for="(link, index) in props.socialLinks?.length ? props.socialLinks : defaultSocialLinks"
                                :key="index"
                                :href="link.href"
                                class="text-zinc-400 transition-colors hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="h-6 w-6 duration-300 hover:scale-110">
                                    <component :is="link.icon" class="h-6 w-6" />
                                </div>
                                <span class="sr-only">{{ link.label }}</span>
                            </a>
                        </div>

                        <!-- Nav links -->
                    </div>
                </div>

                <!-- onderste balk -->
                <div
                    class="mt-20 flex flex-col items-center justify-center gap-2 px-4 md:mt-24 md:flex-row md:items-center md:justify-between md:gap-1 md:px-0"
                >
                    <p class="text-center text-base text-zinc-400 md:text-left">
                        ©{{ new Date().getFullYear() }} {{ props.brandName }}. All rights reserved.
                    </p>

                    <nav v-if="props.creatorName && props.creatorUrl" class="flex gap-4">
                        <a
                            :href="props.creatorUrl"
                            target="_blank"
                            class="text-base text-zinc-400 transition-colors duration-300 hover:font-medium hover:text-white"
                        >
                            Crafted by {{ props.creatorName }}
                        </a>
                    </nav>
                </div>
            </div>

            <!-- grote achtergrondtekst -->
            <div
                class="pointer-events-none absolute bottom-40 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-clip-text px-4 text-center leading-none font-extrabold tracking-tighter text-transparent select-none md:bottom-32"
                :style="{
                    fontSize: 'clamp(3rem, 12vw, 10rem)',
                    maxWidth: '95vw',
                }"
            >
                {{ props.brandName.toUpperCase() }}
            </div>

            <!-- logo blok -->
            <div
                class="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-3xl border-2 border-zinc-800 bg-zinc-900/60 p-3 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm duration-400 hover:border-white md:bottom-20"
            >
                <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-white/80 shadow-lg sm:h-16 sm:w-16 md:h-24 md:w-24"
                >
                    <component
                        :is="props.brandIcon || NotepadTextDashed"
                        class="h-8 w-8 text-[#030303] drop-shadow-lg sm:h-10 sm:w-10 md:h-14 md:w-14"
                    />
                </div>
            </div>

            <!-- dunne lijn onder logo -->
            <div
                class="absolute bottom-32 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent backdrop-blur-sm sm:bottom-34"
            ></div>

            <!-- schaduw -->
            <div class="absolute bottom-28 h-24 w-full bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/40 blur-[1em]"></div>
        </footer>
    </section>
</template>
