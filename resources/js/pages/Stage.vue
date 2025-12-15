<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import DemoHeroGeometric from "@/components/ui/stage/DemoHeroGeometric.vue";
import AboutStageSection from "@/components/ui/stage/AboutStageSection.vue";
import AboutCubeSection from "@/components/ui/stage/CubeSection.vue";
import OpdrachtSection from "@/components/ui/stage/OpdrachtSection.vue";
import StarrtSection from '@/components/ui/stage/StarrtSection.vue';
import Personal from '@/components/ui/stage/Personal.vue';
import Conclusion from '@/components/ui/stage/Conclusion.vue';

import Navbar from '../pages/components/NavbarStage.vue';
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
        <div class="md:pl-60">
            <DemoHeroGeometric />
            <AboutCubeSection/>
            <AboutStageSection/>
            <OpdrachtSection/>
            <StarrtSection />
            <Personal/>
            <Conclusion/>
        </div>
    </AppLayout>
</template>
