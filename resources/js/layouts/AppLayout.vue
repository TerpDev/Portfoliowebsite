<script setup lang="ts">
import Footer from '../pages/components/Footer.vue';
</script>

<template>
    <div class="relative min-h-screen scroll-smooth bg-black">
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
