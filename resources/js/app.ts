import '../css/app.css';
// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import i18n from './i18n';
import './cursor';
import scrollReveal from './directives/scrollReveal'
import { MotionPlugin } from "@vueuse/motion";


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(PrimeVue, {
                theme: {},
            })
            .use(MotionPlugin)
            .directive('scroll-reveal', scrollReveal)

            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
