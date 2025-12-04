<script setup lang="ts">
import Footer from '../pages/components/Footer.vue';
import Navbar from '../pages/components/Navbar.vue';
</script>

<template>
    <div class="relative isolate min-h-screen scroll-smooth bg-white text-white dark:bg-black">
        <!-- globale subtiele vignette -->
        <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(124,58,237,0.10),rgba(0,0,0,0)_60%)]"
        ></div>

        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
