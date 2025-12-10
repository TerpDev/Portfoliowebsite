<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { Circle } from "lucide-vue-next";
import ElegantShape from "./ElegantShape.vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
    defineProps<{
        badge?: string;
        title1?: string;
        title2?: string;
    }>(),
    {
        badge: "Design Collective",
        title1: "Elevate Your Digital Vision",
        title2: "Crafting Exceptional Websites",
    }
);
</script>

<template>
    <div
        id="home"
        class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
    >
        <!-- soft background glow -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
        />

        <!-- animated shapes -->
        <div class="absolute inset-0 overflow-hidden">
            <ElegantShape
                :delay="0.3"
                :width="600"
                :height="140"
                :rotate="12"
                gradient="from-indigo-500/[0.15]"
                class-name="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                :delay="0.5"
                :width="500"
                :height="120"
                :rotate="-15"
                gradient="from-rose-500/[0.15]"
                class-name="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                :delay="0.4"
                :width="300"
                :height="80"
                :rotate="-8"
                gradient="from-violet-500/[0.15]"
                class-name="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
                :delay="0.6"
                :width="200"
                :height="60"
                :rotate="20"
                gradient="from-amber-500/[0.15]"
                class-name="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
                :delay="0.7"
                :width="150"
                :height="40"
                :rotate="-25"
                gradient="from-cyan-500/[0.15]"
                class-name="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            />
        </div>

        <!-- content -->
        <div class="relative z-10 container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <!-- badge -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 30 },
            enter: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.5 },
          }"
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                >
                    <Circle class="h-2 w-2 fill-rose-500/80" />
                    <span class="text-sm text-white/60 tracking-wide">
            {{ props.badge }}
          </span>
                </div>

                <!-- titles -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 30 },
            enter: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.7 },
          }"
                >
                    <h1
                        class="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
                    >
            <span
                class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            >
              {{ props.title1 }}
            </span>
                        <br />
                        <span
                            :class="
                cn(
                  'bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300'
                )
              "
                        >
              {{ props.title2 }}
            </span>
                    </h1>
                </div>

                <!-- description -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 30 },
            enter: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.9 },
          }"
                >
                    <p
                        class="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"
                    >
                        I'm a passionate developer dedicated to creating stunning, user-friendly websites that leave a lasting impression.
                    Let's build something amazing together!</p>
                </div>
            </div>
        </div>

        <div
            class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
        />
    </div>
</template>
