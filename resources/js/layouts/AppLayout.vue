<script setup lang="ts">
import Footer from '../pages/components/Footer.vue';
import Navbar from '../pages/components/Navbar.vue';
</script>

<template>
    <div class="relative min-h-screen scroll-smooth ">
        <!-- globale subtiele vignette -->


        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
