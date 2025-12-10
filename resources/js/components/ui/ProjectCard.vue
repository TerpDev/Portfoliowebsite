<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { ArrowRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    imgSrc: string;
    title: string;
    description: string;
    link: string;
    linkText?: string;
    /** index voor staggered animatie in de grid */
    index?: number;
    className?: string;
}

const props = withDefaults(defineProps<ProjectCardProps>(), {
    linkText: "View project",
    index: 0,
    className: "",
});
</script>

<template>
    <!-- smooth scroll-reveal -->
    <div
        v-motion="{
      initial: {
        opacity: 0,
        y: 32,
        scale: 0.96,
        filter: 'blur(12px)',
      },
      visibleOnce: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      },
      transition: {
        duration: 0.6,
        delay: 0.12 + (props.index ?? 0) * 0.08,
        ease: 'easeOut',
      },
    }"
        :class="
      cn(
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl',
        'border border-white/10 bg-white/[0.02] text-white/80',
        'shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl',
        'transition-all duration-500 hover:-translate-y-2 hover:border-white/30',
        'hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]',
        props.className
      )
    "
    >
        <!-- IMAGE -->
        <div class="relative aspect-video overflow-hidden">
            <img
                :src="props.imgSrc"
                :alt="props.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-110"
            />
            <!-- zachte overlay bij hover -->
            <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
        </div>

        <!-- CONTENT -->
        <div class="flex flex-1 flex-col p-5 sm:p-6">
            <h3
                class="text-lg sm:text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-200"
            >
                {{ props.title }}
            </h3>

            <p class="mt-3 flex-1 text-sm text-white/60">
                {{ props.description }}
            </p>

            <!-- CTA -->
            <a
                :href="props.link"
                target="_blank"
                rel="noopener noreferrer"
                class="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-100 transition-all duration-300"
                @click.stop
            >
                {{ props.linkText }}
                <ArrowRight
                    class="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
                />
            </a>
        </div>

        <!-- subtiele onderste glow lijn -->
        <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
    </div>
</template>
