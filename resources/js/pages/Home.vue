<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import DemoHeroGeometric from "@/components/ui/portfolio/DemoHeroGeometric.vue";
import AboutMeSection from "@/components/ui/portfolio/AboutMeSection.vue";
import Timeline02 from "@/components/ui/portfolio/TimeLine02.vue";
import ProjectsSection from "@/components/ui/portfolio/ProjectSection.vue";
import SkillsSection from "@/components/ui/portfolio/SkillsSection.vue";
import WorkSection from '@/components/ui/portfolio/WorkSection.vue';
import boeie from '@/components/ui/portfolio/WorkExperience.vue';
import Navbar from '../pages/components/Navbar.vue';

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
    </Head>
    <AppLayout>
        <DemoHeroGeometric />
        <boeie/>
        <AboutMeSection />
        <WorkSection/>
        <Timeline02 />
        <ProjectsSection />
        <SkillsSection />

    </AppLayout>
</template>
