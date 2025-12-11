<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import DemoHeroGeometric from "@/components/ui/portfolio/DemoHeroGeometric.vue";
import AboutMeSection from "@/components/ui/portfolio/AboutMeSection.vue";
import Timeline02 from "@/components/ui/portfolio/TimeLine02.vue";
import ProjectsSection from "@/components/ui/portfolio/ProjectSection.vue";
import SkillsSection from "@/components/ui/portfolio/SkillsSection.vue";
import WorkSection from '@/components/ui/portfolio/WorkSection.vue';
import Navbar from '../pages/components/Navbar.vue';
import { onMounted, onUnmounted } from 'vue';
import { initFavicon, updateTitleOnScroll, cleanupFavicon } from '@/utils/favicon';

// Initialize dynamic favicon effects
onMounted(() => {
    initFavicon();
    updateTitleOnScroll();
});

onUnmounted(() => {
    cleanupFavicon();
});
</script>

<template>
    <Navbar/>
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

                <!-- SEO Meta Tags -->
                <meta name="description" content="Daniel Terpstra - Full Stack Developer specializing in Laravel, Vue.js, and modern web development. Check out my portfolio and projects." />
                <meta name="keywords" content="Daniel Terpstra, TerpDev, Full Stack Developer, Laravel, Vue.js, Web Development, Portfolio" />
                <meta name="author" content="Daniel Terpstra" />
                <link rel="canonical" href="https://terpdev.nl" />

                <!-- Open Graph / Facebook -->
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://terpdev.nl" />
                <meta property="og:title" content="Daniel Terpstra | Software Developer" />
                <meta property="og:description" content="Full Stack Developer specializing in Laravel, Vue.js, and modern web development. Check out my portfolio and projects." />
                <meta property="og:image" content="https://terpdev.nl/og-image.jpg" />

                <!-- Twitter -->
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://terpdev.nl" />
                <meta property="twitter:title" content="Daniel Terpstra | Software Developer" />
                <meta property="twitter:description" content="Full Stack Developer specializing in Laravel, Vue.js, and modern web development." />
                <meta property="twitter:image" content="https://terpdev.nl/og-image.jpg" />

                <!-- Theme Color -->
                <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
            </Head>
            <AppLayout>
                <DemoHeroGeometric />
                <AboutMeSection />
                <WorkSection/>
                <Timeline02 />
                <ProjectsSection />
            <SkillsSection />
        </AppLayout>
</template>
