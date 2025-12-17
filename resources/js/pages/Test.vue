<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { Home, SearchX } from 'lucide-vue-next';

const goHome = () => {
    router.visit('/');
};
</script>

<template>
    <Head title="404 - Page Not Found" />

    <div class="relative min-h-screen w-full bg-indigo-200" >
        <!-- Background effects -->
        <div class="mx-auto max-w-7xl bg-indigo-600 px-8 py-8">
            <h1 class="font-bold text-2xl pb-3">Jouw actuele inzichten</h1>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 h-36 text-white">
                <div class="bg-cyan-700 p-6 rounded-xl">
                    <h2 class="text-xl font-bold"><span class="bg-black text-white rounded-lg p-1 mr-3">X</span>Actieve projecten</h2>
                    <p class="pt-2 text-3xl font-semibold">0</p>
                </div>
                <div class="bg-cyan-700 p-6 rounded-xl">
                    <h2 class="text-xl font-bold"><span class="bg-black text-white rounded-lg p-1 mr-3">X</span>Afspraken deze maand</h2>
                    <p class="pt-2 text-3xl font-semibold">0</p>
                </div>

                <div class="bg-cyan-700 p-6 rounded-xl">
                    <h2 class="text-xl font-bold"><span class="bg-black text-white rounded-lg p-1 mr-3">X</span>Bedrijven</h2>
                    <p class="pt-2 text-3xl font-semibold">240</p>
                </div>

            </div>

        </div>

        <!-- Content -->

        <!-- Bottom gradient -->
    </div>
</template>


