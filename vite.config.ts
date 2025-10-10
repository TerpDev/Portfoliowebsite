import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// Wayfinder alleen als je 'm gebruikt:

export default defineConfig({
    base: '/', // Ensure all asset URLs are root-relative
    plugins: [
        laravel({
            input: ['resources/js/app.ts', 'resources/css/app.css'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
        ],
    server: {
        cors: true,
    },
    build: {
        assetsInlineLimit: 0,
    },

})
