<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { Home, SearchX } from 'lucide-vue-next';

const goHome = () => {
    router.visit('/');
};
</script>

<template>
    <Head title="404 - Page Not Found" />

    <div class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        <!-- Background effects -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

        <!-- Animated orbs -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s" />

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 md:px-6 max-w-2xl">
            <div class="text-center">
                <!-- Search Icon -->
                <div
                    v-motion="{
                        initial: { opacity: 0, scale: 0.5 },
                        enter: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                    }"
                    class="mb-8 flex justify-center"
                >
                    <div class="rounded-full bg-white/[0.02] border border-white/10 p-8 backdrop-blur-sm">
                        <SearchX class="h-20 w-20 text-white/30" />
                    </div>
                </div>

                <!-- 404 Text -->
                <h1
                    v-motion="{
                        initial: { opacity: 0, y: -30 },
                        enter: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                    }"
                    class="text-8xl md:text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                >
                    404
                </h1>

                <h2
                    v-motion="{
                        initial: { opacity: 0, y: 20 },
                        enter: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
                    }"
                    class="text-3xl md:text-5xl font-semibold text-white/80 mb-4"
                >
                    Well, well, well...
                </h2>

                <p
                    v-motion="{
                        initial: { opacity: 0 },
                        enter: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } }
                    }"
                    class="text-white/50 text-lg md:text-xl mb-8 max-w-md mx-auto"
                >
                    Can you not search? You are on the wrong page! 🤔
                </p>

                <!-- Home Button -->
                <div
                    v-motion="{
                        initial: { opacity: 0, y: 20 },
                        enter: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
                    }"
                >
                    <button
                        @click="goHome"
                        class="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Home class="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span>Take Me Home</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Bottom gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
</template>

