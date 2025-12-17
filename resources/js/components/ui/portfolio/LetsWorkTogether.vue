<script setup lang="ts">
import { ref } from 'vue';
import { ArrowUpRight, Mail } from 'lucide-vue-next';

const isHovered = ref(false);
const isClicked = ref(false);
const showSuccess = ref(false);
const isButtonHovered = ref(false);

const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    isClicked.value = true;

    setTimeout(() => {
        showSuccess.value = true;
    }, 500);
};

const handleConnectEmail = () => {
    window.location.href = 'mailto:danielterpstra006@gmail.com?subject=Let\'s work together!&body=Hi Daniel,%0D%0A%0D%0AI\'d like to discuss a project with you.';
};
</script>

<template>
    <section class="flex items-center justify-center px-6">
        <div class="relative flex flex-col items-center gap-12">

            <!-- Success state - Connect button -->
            <div
                class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                :style="{
                    opacity: showSuccess ? 1 : 0,
                    transform: showSuccess ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    pointerEvents: showSuccess ? 'auto' : 'none',
                }"
            >
                <!-- Elegant heading -->
                <div class="flex flex-col items-center gap-2">
                    <span
                        class="text-xs font-medium tracking-[0.3em] uppercase text-white/60 transition-all duration-500"
                        :style="{
                            transform: showSuccess ? 'translateY(0)' : 'translateY(10px)',
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: '100ms',
                        }"
                    >
                        Perfect
                    </span>
                    <h3
                        class="text-3xl font-light tracking-tight text-white transition-all duration-500 sm:text-4xl"
                        :style="{
                            transform: showSuccess ? 'translateY(0)' : 'translateY(10px)',
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: '200ms',
                        }"
                    >
                        Let's connect
                    </h3>
                </div>

                <!-- Connect button -->
                <button
                    @click="handleConnectEmail"
                    @mouseenter="isButtonHovered = true"
                    @mouseleave="isButtonHovered = false"
                    class="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
                    :style="{
                        transform: showSuccess
                            ? isButtonHovered
                                ? 'translateY(0) scale(1.02)'
                                : 'translateY(0) scale(1)'
                            : 'translateY(15px) scale(1)',
                        opacity: showSuccess ? 1 : 0,
                        transitionDelay: '150ms',
                    }"
                >
                    <!-- Left line -->
                    <div
                        class="h-px w-8 bg-white/10 transition-all duration-500 sm:w-12"
                        :style="{
                            transform: isButtonHovered ? 'scaleX(0)' : 'scaleX(1)',
                            opacity: isButtonHovered ? 0 : 0.5,
                        }"
                    />

                    <!-- Button content -->
                    <div
                        class="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
                        :style="{
                            borderColor: isButtonHovered ? 'rgb(255 255 255)' : 'rgb(255 255 255 / 0.1)',
                            backgroundColor: isButtonHovered ? 'rgb(255 255 255)' : 'transparent',
                            boxShadow: isButtonHovered ? '0 0 30px rgba(255,255,255,0.1), 0 10px 40px rgba(255,255,255,0.08)' : 'none',
                        }"
                    >
                        <Mail
                            :size="20"
                            :stroke-width="1.5"
                            class="size-4 transition-all duration-500 sm:size-5"
                            :style="{
                                color: isButtonHovered ? 'rgb(0 0 0)' : 'rgb(255 255 255)',
                            }"
                        />
                        <span
                            class="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base"
                            :style="{
                                color: isButtonHovered ? 'rgb(0 0 0)' : 'rgb(255 255 255)',
                            }"
                        >
                            Connect with me!
                        </span>
                        <ArrowUpRight
                            :size="20"
                            :stroke-width="1.5"
                            class="size-4 transition-all duration-500 sm:size-5"
                            :style="{
                                color: isButtonHovered ? 'rgb(0 0 0)' : 'rgb(255 255 255)',
                                transform: isButtonHovered ? 'translate(3px, -3px) scale(1.1)' : 'translate(0, 0) scale(1)',
                            }"
                        />
                    </div>

                    <!-- Right line -->
                    <div
                        class="h-px w-8 bg-white/10 transition-all duration-500 sm:w-12"
                        :style="{
                            transform: isButtonHovered ? 'scaleX(0)' : 'scaleX(1)',
                            opacity: isButtonHovered ? 0 : 0.5,
                        }"
                    />
                </button>

                <!-- Subtle subtext -->
                <span
                    class="text-xs tracking-widest uppercase text-white/50 transition-all duration-500"
                    :style="{
                        transform: showSuccess ? 'translateY(0)' : 'translateY(10px)',
                        opacity: showSuccess ? 1 : 0,
                        transitionDelay: '450ms',
                    }"
                >
                    danielterpstra006@gmail.com
                </span>
            </div>

            <!-- Available badge -->
            <div
                class="flex items-center gap-3 transition-all duration-500"
                :style="{
                    opacity: isClicked ? 0 : 1,
                    transform: isClicked ? 'translateY(-20px)' : 'translateY(0)',
                    pointerEvents: isClicked ? 'none' : 'auto',
                }"
            >
                <span class="relative flex size-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span class="text-sm font-medium tracking-widest uppercase text-white/60">
                    Available for projects
                </span>
            </div>

            <!-- Main CTA -->
            <div
                class="group relative cursor-pointer"
                @mouseenter="isHovered = true"
                @mouseleave="isHovered = false"
                @click="handleClick"
                :style="{
                    pointerEvents: isClicked ? 'none' : 'auto',
                }"
            >
                <div class="flex flex-col items-center gap-6">
                    <h2
                        class="relative text-center text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        :style="{
                            opacity: isClicked ? 0 : 1,
                            transform: isClicked ? 'translateY(-40px) scale(0.95)' : 'translateY(0) scale(1)',
                        }"
                    >
                        <span class="block overflow-hidden">
                            <span
                                class="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                :style="{
                                    transform: isHovered && !isClicked ? 'translateY(-8%)' : 'translateY(0)',
                                }"
                            >
                                Let's work
                            </span>
                        </span>
                        <span class="block overflow-hidden">
                            <span
                                class="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                :style="{
                                    transform: isHovered && !isClicked ? 'translateY(-8%)' : 'translateY(0)',
                                }"
                            >
                                <span class="text-white/60">together</span>
                            </span>
                        </span>
                    </h2>

                    <div class="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                        <div
                            class="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                            :style="{
                                borderColor: isClicked ? 'rgb(255 255 255)' : isHovered ? 'rgb(255 255 255)' : 'rgb(255 255 255 / 0.1)',
                                backgroundColor: isClicked ? 'transparent' : isHovered ? 'rgb(255 255 255)' : 'transparent',
                                transform: isClicked ? 'scale(3)' : isHovered ? 'scale(1.1)' : 'scale(1)',
                                opacity: isClicked ? 0 : 1,
                                transitionDuration: isClicked ? '700ms' : '500ms',
                            }"
                        />
                        <ArrowUpRight
                            :size="28"
                            class="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                            :style="{
                                transform: isClicked
                                    ? 'translate(100px, -100px) scale(0.5)'
                                    : isHovered
                                        ? 'translate(2px, -2px)'
                                        : 'translate(0, 0)',
                                opacity: isClicked ? 0 : 1,
                                color: isHovered && !isClicked ? 'rgb(0 0 0)' : 'rgb(255 255 255)',
                                transitionDuration: isClicked ? '600ms' : '500ms',
                            }"
                        />
                    </div>
                </div>

                <!-- Left decorative line -->
                <div class="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
                    <div
                        class="h-px w-8 bg-white/10 transition-all duration-500 sm:w-12"
                        :style="{
                            transform: isClicked ? 'scaleX(0) translateX(-20px)' : isHovered ? 'scaleX(1.5)' : 'scaleX(1)',
                            opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                        }"
                    />
                </div>
                <!-- Right decorative line -->
                <div class="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
                    <div
                        class="h-px w-8 bg-white/10 transition-all duration-500 sm:w-12"
                        :style="{
                            transform: isClicked ? 'scaleX(0) translateX(20px)' : isHovered ? 'scaleX(1.5)' : 'scaleX(1)',
                            opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                        }"
                    />
                </div>
            </div>

            <!-- Bottom text -->
            <div
                class="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
                :style="{
                    opacity: isClicked ? 0 : 1,
                    transform: isClicked ? 'translateY(20px)' : 'translateY(0)',
                    pointerEvents: isClicked ? 'none' : 'auto',
                }"
            >

                <span class="text-xs tracking-widest uppercase text-white/40">danielterpstra006@gmail.com</span>
            </div>
        </div>
    </section>
</template>

