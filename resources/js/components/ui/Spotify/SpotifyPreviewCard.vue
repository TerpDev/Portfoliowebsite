<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const showPreview = ref(false);
const playing = ref(false);

const triggerEl = ref<HTMLElement | null>(null);
const popupEl = ref<HTMLElement | null>(null);
const popupPos = ref({ top: 0, left: 0 });

const currentTrack = ref<null | {
    name: string;
    artists: string;
    album: string;
    image?: string;
    url?: string;
}>(null);

const topTracks = ref<
    { name: string; artists: string; album: string; image?: string; url?: string }[]
>([]);

let intervalId: number | null = null;
let hoverTimeout: number | null = null;

/* ---------------- Position ---------------- */
const updatePopupPos = () => {
    if (!triggerEl.value) return;

    const rect = triggerEl.value.getBoundingClientRect();
    popupPos.value = {
        top: rect.bottom + 10,
        left: Math.min(rect.left, window.innerWidth - 340),
    };
};

/* ---------------- Hover logic ---------------- */
const openPreview = async () => {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
    }

    if (!showPreview.value) {
        showPreview.value = true;
        updatePopupPos();

        window.addEventListener("scroll", updatePopupPos, true);
        window.addEventListener("resize", updatePopupPos);

        if (!playing.value && topTracks.value.length === 0) {
            await fetchTopTracks();
        }
    }
};

const closePreview = () => {
    hoverTimeout = window.setTimeout(() => {
        showPreview.value = false;
        window.removeEventListener("scroll", updatePopupPos, true);
        window.removeEventListener("resize", updatePopupPos);
    }, 140);
};

/* ---------------- Spotify API ---------------- */
const fetchTopTracks = async () => {
    try {
        const res = await fetch("/spotify/top-tracks");
        if (!res.ok) return;
        const data = await res.json();
        topTracks.value = data.tracks ?? [];
    } catch (e) {
        console.error(e);
    }
};

const fetchCurrentlyPlaying = async () => {
    try {
        const res = await fetch("/spotify/currently-playing");
        if (!res.ok) return;

        const data = await res.json();

        if (!data.playing) {
            playing.value = false;
            currentTrack.value = null;
            return;
        }

        if (currentTrack.value?.name === data.track.name) return;

        playing.value = true;
        currentTrack.value = data.track;
    } catch (e) {
        console.error(e);
    }
};

/* ---------------- Lifecycle ---------------- */
onMounted(() => {
    fetchCurrentlyPlaying();
    intervalId = window.setInterval(fetchCurrentlyPlaying, 5000);
});

onUnmounted(() => {
    if (intervalId) window.clearInterval(intervalId);
    window.removeEventListener("scroll", updatePopupPos, true);
    window.removeEventListener("resize", updatePopupPos);
});
</script>

<template>
    <div ref="triggerEl" class="relative w-full">
        <!-- Trigger card -->
        <div
            class="flex cursor-pointer items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            @mouseenter="openPreview"
            @mouseleave="closePreview"
        >
            <div>
                <div class="mb-1.5 flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-emerald-400">
                        <path
                            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0z"
                        />
                    </svg>
                    <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                        Spotify
                    </p>
                </div>
                <p class="text-sm font-medium text-white">
                    {{ playing ? "Currently playing" : "Top tracks" }}
                </p>
                <p class="text-[0.7rem] text-white/50">
                    Hover om een preview te zien
                </p>
            </div>

            <!-- Equalizer -->
            <div v-if="playing" class="flex h-5 items-end gap-[3px]">
                <span class="h-3 w-[3px] animate-pulse rounded-full bg-emerald-300/80" />
                <span class="h-4 w-[3px] animate-pulse rounded-full bg-emerald-400/80" />
                <span class="h-2 w-[3px] animate-pulse rounded-full bg-emerald-300/80" />
            </div>
        </div>

        <!-- Popup -->
        <Teleport to="body">
            <transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 scale-95 translate-y-1"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition duration-120 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 translate-y-1"
            >
                <div
                    v-if="showPreview"
                    ref="popupEl"
                    class="fixed z-[9999] w-80 rounded-xl border border-white/10 bg-[#050505] p-3 shadow-lg shadow-black/60"
                    :style="{ top: `${popupPos.top}px`, left: `${popupPos.left}px` }"
                    @mouseenter="openPreview"
                    @mouseleave="closePreview"
                >
                    <!-- Currently playing -->
                    <div v-if="playing && currentTrack" class="flex gap-3">
                        <div
                            v-if="currentTrack.image"
                            class="h-14 w-14 overflow-hidden rounded-lg border border-white/10"
                        >
                            <img
                                :src="currentTrack.image"
                                :alt="currentTrack.name"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <a
                                v-if="currentTrack.url"
                                :href="currentTrack.url"
                                target="_blank"
                                class="text-sm font-semibold text-white hover:text-indigo-300"
                            >
                                {{ currentTrack.name }}
                            </a>
                            <p class="text-xs text-white/70">
                                {{ currentTrack.artists }}
                            </p>
                            <p class="text-[0.7rem] text-white/45">
                                {{ currentTrack.album }}
                            </p>
                        </div>
                    </div>

                    <!-- Top tracks -->
                    <div v-else class="space-y-2">
                        <p class="text-xs text-white/70">
                            Ik speel momenteel niks af. Dit zijn nummers die ik veel luister:
                        </p>

                        <ul class="space-y-2">
                            <li
                                v-for="t in topTracks"
                                :key="t.url || t.name"
                                class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-2"
                            >
                                <div
                                    v-if="t.image"
                                    class="h-10 w-10 overflow-hidden rounded-md border border-white/10"
                                >
                                    <img
                                        :src="t.image"
                                        :alt="t.name"
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                                <div class="min-w-0">
                                    <a
                                        v-if="t.url"
                                        :href="t.url"
                                        target="_blank"
                                        class="block truncate text-sm font-medium text-white hover:text-emerald-300"
                                    >
                                        {{ t.name }}
                                    </a>
                                    <p class="truncate text-xs text-white/70">
                                        {{ t.artists }}
                                    </p>
                                    <p class="truncate text-[0.7rem] text-white/45">
                                        {{ t.album }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>
