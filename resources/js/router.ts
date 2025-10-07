import { createRouter, createWebHistory } from 'vue-router'

// pages you already have
import Home from './pages/Home.vue'
// import About from './pages/Sections/About.vue'
// import Projects from './pages/Sections/Projects.vue'
// import Contact from './pages/Sections/Contact.vue'
// import Skills from './pages/Sections/Skills.vue'
// import Timeline from './pages/Sections/Timeline.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        // { path: '/about', component: About, name: 'about' },
        // { path: '/projects', component: Projects, name: 'projects' },
        // { path: '/contact', component: Contact, name: 'contact' },
        // { path: '/skills', component: Skills, name: 'skills' },
        // { path: '/timeline', component: Timeline, name: 'timeline' },
    ],
})
