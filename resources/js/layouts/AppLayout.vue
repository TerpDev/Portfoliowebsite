<!--<script setup lang="ts">-->
<!--import Navbar from '../pages/components/Navbar.vue';-->
<!--import Footer from '../pages/components/Footer.vue';-->
<!--</script>-->

<!--<template>-->
<!--    <div class="relative isolate min-h-screen dark:bg-black bg-white text-white scroll-smooth">-->
<!--        &lt;!&ndash; globale subtiele vignette &ndash;&gt;-->
<!--        <div-->
<!--            aria-hidden="true"-->
<!--            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(124,58,237,0.10),rgba(0,0,0,0)_60%)]"-->
<!--        ></div>-->

<!--        <Navbar />-->
<!--        <main >-->
<!--            <slot />-->
<!--        </main>-->
<!--        <Footer/>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div class="relative isolate min-h-screen dark:bg-black bg-white text-white scroll-smooth">
        <Navbar />
        <Hero/>
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
        <router-view />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from '../pages/components/Navbar.vue'
import Footer from '../pages/components/Footer.vue'
import Hero from '../pages/Sections/Hero.vue'
import About from '../pages/Sections/About.vue'
import Timeline from '../pages/Sections/Timeline.vue'
import Skills from '../pages/Sections/Skills.vue'
import Projects from '../pages/Sections/Projects.vue'
import Contact from '../pages/Sections/Contact.vue'
</script>

