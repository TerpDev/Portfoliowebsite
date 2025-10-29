<script setup lang="ts">
import Navbar from '../pages/components/Navbar.vue';
import Footer from '../pages/components/Footer.vue';
import GradualBlur from '../pages/vuebits/GradualBlur/GradualBlur.vue';
import ClickSpark from '../pages/vuebits/ClickSpark/ClickSpark.vue';
</script>

<template>
    <ClickSpark
        spark-color="#a855f7"
        :spark-size="12"
        :spark-radius="20"
        :spark-count="10"
        :duration="600"
        easing="ease-out"
        :extra-scale="1.3"
        class="min-h-screen"
    >
        <div class="relative isolate min-h-screen dark:bg-black bg-white text-white scroll-smooth">
            <!-- globale subtiele vignette -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(124,58,237,0.10),rgba(0,0,0,0)_60%)]"
            ></div>

            <Navbar />
            <main>
                <slot />
            </main>
            <Footer/>

            <!-- Global bottom blur overlay -->
            <GradualBlur
                class="pointer-events-none fixed bottom-0 inset-x-0 z-50"
                target="page"
                position="bottom"
                height="6rem"
                :strength="2"
                :divCount="5"
                curve="bezier"
                :exponential="true"
                :opacity="1"
            />
        </div>
    </ClickSpark>
</template>
