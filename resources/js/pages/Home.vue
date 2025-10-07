<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '../layouts/AppLayout.vue';


import Hero from './Sections/Hero.vue'
import About from './Sections/About.vue'
import Timeline from './Sections/Timeline.vue'
import Skills from './Sections/Skills.vue'
import Projects from './Sections/Projects.vue'
import Contact from './Sections/Contact.vue'
</script>

<template>
    <Head title="Daniel Terpstra | Software Developer"> </Head>
    <AppLayout>
        <Hero/>
        <About/>
        <Timeline/>
        <Skills/>
        <Projects/>
        <Contact/>
    </AppLayout>
</template>
