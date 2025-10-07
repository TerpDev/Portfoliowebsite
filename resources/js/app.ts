// import '../css/app.css';
// import { router } from './router';
// // import { createInertiaApp } from '@inertiajs/vue3';
// // import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import AnimateOnScroll from 'primevue/animateonscroll'
// import PrimeVue from 'primevue/config';
// // import type { DefineComponent } from 'vue';
// import { createApp,} from 'vue';
// // import i18n from './i18n';
// import AppLayout from './layouts/AppLayout.vue'


// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => (title ? `${title} - ${appName}` : appName),
//     resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
//     setup({ el, App, props, plugin }) {
//         createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .use(i18n)
//
//             .use(PrimeVue, {
//                 theme: {},
//             })
//             .directive('animateonscroll', AnimateOnScroll)
//
//             .mount(el)
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
import '../css/app.css'
import { createApp } from 'vue'
import { router } from './router'

import PrimeVue from 'primevue/config'
import AnimateOnScroll from 'primevue/animateonscroll'

// (optioneel thema)
// import Aura from '@primevue/themes/aura'
// import 'primeicons/primeicons.css'

import AppLayout from './layouts/AppLayout.vue'

const app = createApp(AppLayout)

app.use(PrimeVue) // of: app.use(PrimeVue, { theme: { preset: Aura } })
app.directive('animateonscroll', AnimateOnScroll)

app.use(router)
// app.use(i18n) // uit als je 'm niet gebruikt

app.mount('#app')


