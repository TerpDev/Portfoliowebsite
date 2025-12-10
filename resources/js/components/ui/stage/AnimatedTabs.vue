<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { cn } from "@/lib/utils";

interface TabDef {
    id: string;
    label: string;
}

const props = withDefaults(
    defineProps<{
        tabs?: TabDef[];
        defaultTab?: string;
        className?: string;
    }>(),
    {
        tabs: () => [
            { id: "tab1", label: "Tab 1" },
            { id: "tab2", label: "Tab 2" },
            { id: "tab3", label: "Tab 3" },
        ],
    }
);

const tabs = computed(() => props.tabs);
const activeTab = ref<string>(props.defaultTab || tabs.value[0]?.id);

// als defaultTab verandert (of tabs), netjes mee updaten
watch(
    () => [props.defaultTab, tabs.value],
    () => {
        const fallback = tabs.value[0]?.id;
        if (props.defaultTab && tabs.value.some((t) => t.id === props.defaultTab)) {
            activeTab.value = props.defaultTab;
        } else if (!tabs.value.some((t) => t.id === activeTab.value)) {
            activeTab.value = fallback;
        }
    },
    { immediate: true }
);
</script>

<template>
    <div :class="cn('w-full flex flex-col gap-y-2', className)">
        <!-- Tab knoppen -->
        <div
            class="flex flex-wrap gap-2 rounded-xl bg-[#11111198] bg-opacity-50 p-1 backdrop-blur-sm"
        >
            <button
                v-for="tab in tabs"
                :key="tab.id"
                type="button"
                @click="activeTab = tab.id"
                class="relative cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium text-white outline-none transition-all"
            >
                <!-- animatie achtergrond van actieve tab -->
                <span
                    v-if="activeTab === tab.id"
                    class="absolute inset-0 rounded-lg bg-[#111111d1] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300"
                />
                <span class="relative z-10">{{ tab.label }}</span>
            </button>
        </div>

        <!-- Content -->
        <div
            class="min-h-60 h-full rounded-xl border border-white/10 bg-[#11111198] bg-opacity-50 p-4 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
        >
            <Transition name="fade-slide" mode="out-in">
                <div :key="activeTab">
                    <!-- content wordt meegegeven via named slots: #tab.id -->
                    <slot :name="activeTab" />
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.35s cubic-bezier(0.35, 0.7, 0.25, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-8px) scale(0.97);
    filter: blur(6px);
}
</style>
