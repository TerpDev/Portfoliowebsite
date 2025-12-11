<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
    defineProps<{
        items: string[];
        className?: string;
        /** seconden tussen wissels */
        interval?: number;
    }>(),
    {
        items: () => [],
        interval: 2,
    }
);

const currentIndex = ref(0);
let timer: number | undefined;

const currentItem = computed(() =>
    props.items.length ? props.items[currentIndex.value] : ""
);

onMounted(() => {
    if (!props.items.length) return;

    timer = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.items.length;
    }, props.interval * 1000);
});

onUnmounted(() => {
    if (timer) window.clearInterval(timer);
});
</script>

<template>
  <span :class="cn('relative inline-block whitespace-nowrap', className)">
    <Transition name="loop-fade" mode="out-in">
      <span :key="currentIndex" class="inline-block">
        {{ currentItem }}
      </span>
    </Transition>
  </span>
</template>

<style scoped>
.loop-fade-enter-active,
.loop-fade-leave-active {
    transition: all 0.3s ease;
}
.loop-fade-enter-from,
.loop-fade-leave-to {
    opacity: 0;
    transform: translateY(8px);
    filter: blur(4px);
}
</style>
