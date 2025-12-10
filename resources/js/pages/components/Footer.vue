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
</script>

<template>
    <section class="relative w-full mt-0 bg-[#030303] overflow-hidden">
        <footer class="border-t border-zinc-800 bg-[#030303] mt-20 relative">
            <div
                class="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10"
            >
                <div class="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
                    <div class="w-full flex flex-col items-center">
                        <div class="space-y-2 flex flex-col items-center flex-1">
                            <div class="flex items-center gap-2">
                <span class="text-white text-3xl font-bold">
                  {{ props.brandName }}
                </span>
                            </div>
                            <p
                                class="text-zinc-400 font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0"
                            >
                                {{ props.brandDescription }}
                            </p>
                        </div>

                        <!-- Social links -->
                        <div
                            v-if="(props.socialLinks && props.socialLinks.length) || defaultSocialLinks.length"
                            class="flex mb-2 mt-3 gap-4"
                        >
                            <a
                                v-for="(link, index) in (props.socialLinks?.length ? props.socialLinks : defaultSocialLinks)"
                                :key="index"
                                :href="link.href"
                                class="text-zinc-400 hover:text-white transition-colors"
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
                    </div>
                </div>

                <!-- onderste balk -->
                <div
                    class="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0"
                >
                    <p class="text-base text-zinc-400 text-center md:text-left">
                        ©{{ new Date().getFullYear() }} {{ props.brandName }}. All rights reserved.
                    </p>

                    <nav v-if="props.creatorName && props.creatorUrl" class="flex gap-4">
                        <a
                            :href="props.creatorUrl"
                            target="_blank"
                            class="text-base text-zinc-400 hover:text-white transition-colors duration-300 hover:font-medium"
                        >
                            Crafted by {{ props.creatorName }}
                        </a>
                    </nav>
                </div>
            </div>

            <!-- grote achtergrondtekst -->
            <div
                class="bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
                :style="{
          fontSize: 'clamp(3rem, 12vw, 10rem)',
          maxWidth: '95vw',
        }"
            >
                {{ props.brandName.toUpperCase() }}
            </div>

            <!-- logo blok -->
            <div
                class="absolute hover:border-white duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-zinc-900/60 left-1/2 border-2 border-zinc-800 flex items-center justify-center p-3 -translate-x-1/2 z-10"
            >
                <div
                    class="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-lg"
                >
                    <component
                        :is="props.brandIcon || NotepadTextDashed"
                        class="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-[#030303] drop-shadow-lg"
                    />
                </div>
            </div>

            <!-- dunne lijn onder logo -->
            <div
                class="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full left-1/2 -translate-x-1/2"
            ></div>

            <!-- schaduw -->
            <div
                class="bg-gradient-to-t from-[#030303] via-[#030303]/80 blur-[1em] to-[#030303]/40 absolute bottom-28 w-full h-24"
            ></div>
        </footer>
    </section>
</template>

