// import { wayfinder } from '@laravel/vite-plugin-wayfinder';
// import tailwindcss from '@tailwindcss/vite';
// import vue from '@vitejs/plugin-vue';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';
//
// const isCI = process.env.CI === 'true' || process.env.VERCEL === '1';
//
// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/js/app.ts'],
//             ssr: 'resources/js/ssr.ts',
//             refresh: true,
//         }),
//         tailwindcss(),
//         vue({
//             template: { transformAssetUrls: { base: null, includeAbsolute: false } },
//         }),
//         // Wayfinder alleen lokaal (PHP aanwezig), niet in CI/Vercel
//         !isCI && wayfinder({ formVariants: true }),
//     ].filter(Boolean),
// });
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// NIET laravel/wayfinder in CI

export default defineConfig({
    build: { outDir: 'dist', emptyOutDir: true },
    plugins: [vue(), tailwindcss()],
})
