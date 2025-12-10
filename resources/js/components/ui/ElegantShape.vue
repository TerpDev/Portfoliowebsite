<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
    defineProps<{
        className?: string;
        delay?: number;
        width?: number;
        height?: number;
        rotate?: number;
        gradient?: string;
    }>(),
    {
        className: "",
        delay: 0,
        width: 400,
        height: 100,
        rotate: 0,
        gradient: "from-white/[0.08]",
    }
);
</script>

<template>
    <!-- FADE / SLIDE IN VAN DE VORM -->
    <div
        v-motion
        :initial="{ opacity: 0, y: -150, rotate: props.rotate - 15 }"
        :enter="{
      opacity: 1,
      y: 0,
      rotate: props.rotate,
      transition: {
        duration: 2400,           // 2.4 seconde, lekker rustig
        delay: props.delay ?? 0,  // ook in ms
        ease: 'easeOut',
      },
    }"
        :class="cn('absolute', props.className)"
    >
        <!-- ZACHTE OP-NEER BEWEGING -->
        <div
            v-motion
            :initial="{ y: 0 }"
            :enter="{
        y: [0, 15, 0],
        transition: {
          duration: 12000,       // 12 seconden voor 0 -> 15 -> 0
          repeat: Infinity,
          ease: 'easeInOut',
          type: 'keyframes',
        },
      }"
            class="relative"
            :style="{ width: `${props.width}px`, height: `${props.height}px` }"
        >
            <div
                :class="
          cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            props.gradient,
            'backdrop-blur-[2px] border-2 border-white/[0.15]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )
        "
            />
        </div>
    </div>
</template>
