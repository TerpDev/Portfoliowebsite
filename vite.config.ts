import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// Wayfinder alleen als je 'm gebruikt:
import { wayfinder } from '@laravel/vite-plugin-wayfinder'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts', 'resources/css/app.css'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
        // Zet uit als je geen Wayfinder gebruikt:
        wayfinder({ formVariants: true }),
    ],
})
