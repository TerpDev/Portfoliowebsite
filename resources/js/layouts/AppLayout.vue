<script setup lang="ts">
import Footer from '../pages/components/Footer.vue';
</script>

<template>
    <div class="relative min-h-screen scroll-smooth ">
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
