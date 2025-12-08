<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import DemoHeroGeometric from "@/components/ui/DemoHeroGeometric.vue";
import AboutMeSection from "@/components/ui/AboutMeSection.vue";

</script>

<template>
    <Head title="Daniel Terpstra | Software Developer">
        <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <AppLayout>
        <DemoHeroGeometric />
        <AboutMeSection />
    </AppLayout>
</template>
