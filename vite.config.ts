import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // base: '/',  <-- remove this line OR set to '/build/'
    base: '/build/',                // ✅ correct
    plugins: [
        laravel({
            input: ['resources/js/app.ts', 'resources/css/app.css', 'resources/js/cursor.ts'],
            refresh: true,
            buildDirectory: 'build',    // (explicit, matches Laravel default)
        }),
        vue(),
        tailwindcss(),
    ],
    server: { cors: true },
    build: { assetsInlineLimit: 0 },
})
