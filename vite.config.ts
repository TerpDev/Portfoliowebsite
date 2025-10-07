import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// Wayfinder alleen als je 'm gebruikt:

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts', 'resources/css/app.css'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
    build:{
        outDir: 'public/build',
        rollupOptions:{
            input: 'public/build/index.html'
        },
    },
    publicDir:'public'
})
