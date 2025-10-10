<script setup lang="ts">
import { computed } from 'vue';

type Props = {
    src: string;              // image url
    size?: number;            // image diameter in px (default 320)
    ring?: boolean;           // show gradient ring
    labels?: string[];        // texts around the circle
    radiusOffset?: number;    // extra pixels outside the image edge for labels (default 22)
    startAngle?: number;      // degrees to rotate the first label (default -90 = top)
};
const p = withDefaults(defineProps<Props>(), {
    size: 320,
    ring: true,
    labels: () => ['Frontend', 'Backend', 'UI/UX', 'Tech Enthusiast'],
    radiusOffset: 22,
    startAngle: -90,
});

const center = computed(() => p.size / 2);
const radius = computed(() => (p.size / 2) + p.radiusOffset);

// calc absolute positions for each label
const points = computed(() => {
    const n = p.labels.length;
    return p.labels.map((text, i) => {
        const angle = ((360 / n) * i + p.startAngle) * (Math.PI / 160);
        const x = center.value + radius.value * Math.cos(angle);
        const y = center.value + radius.value * Math.sin(angle);
        return { text, x, y, angle };
    });
});
</script>

<template>
    <div
        class="relative mx-auto"
        :style="{ width: p.size + 'px', height: p.size + 'px' }"
    >
        <div
            v-if="p.ring"
            class="absolute inset-0 rounded-full pointer-events-none"
            :style="{
        boxShadow:
          '0 0 30px rgba(109,40,217,.35), inset 0 0 50px rgba(109,40,217,.25)',
      }"
        />

        <img
            :src="p.src"
            alt=""
            class="absolute inset-0 h-full w-full rounded-full object-cover shadow-2xl
             ring-1 ring-white/10 dark:ring-white/5"
        />

        <div class="absolute inset-0">
            <div
                v-for="pt in points"
                :key="pt.text"
                class="absolute select-none"
                :style="{ left: pt.x + 'px', top: pt.y + 'px', transform: 'translate(-50%, -50%)' }"
            >
        <span
            class="inline-flex items-center rounded-2xl bg-black/70 px-3 py-1 text-xs font-semibold text-white
                 shadow-[0_4px_20px_rgba(0,0,0,.35)] backdrop-blur-sm
                 ring-1 ring-white/10 transition-transform duration-200
                 hover:scale-105"
            :style="{ boxShadow: '0 0 14px rgba(109,40,217,.35)' }"
        >
          {{ pt.text }}
        </span>
            </div>
        </div>
    </div>
</template>
