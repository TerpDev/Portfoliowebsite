<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

type Track = {
    name: string;
    artists: string;
    album: string;
    image?: string;
    url?: string;
};

const showPreview = ref(false);
const playing = ref(false);

const triggerEl = ref<HTMLElement | null>(null);
const popupPos = ref({ top: 0, left: 0 });

const currentTrack = ref<Track | null>(null);
const topTracks = ref<Track[]>([]);

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

/* ---------------- Spotify API (Vercel Functions) ---------------- */
const fetchTopTracks = async () => {
    try {
        const res = await fetch("/api/spotify/top-tracks", { cache: "no-store" });
        if (!res.ok) return;

        const data = await res.json();
        topTracks.value = data.tracks ?? [];
    } catch (e) {
        console.error(e);
    }
};

const fetchCurrentlyPlaying = async () => {
    try {
        const res = await fetch("/api/spotify/currently-playing", { cache: "no-store" });
        if (!res.ok) return;

        const data = await res.json();

        if (!data.playing) {
            playing.value = false;
            currentTrack.value = null;
            return;
        }

        // alleen updaten als track echt veranderd is
        if (currentTrack.value?.name === data.track?.name) return;

        playing.value = true;
        currentTrack.value = data.track as Track;
    } catch (e) {
        console.error(e);
    }
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

        // als je niet speelt, laad top tracks pas wanneer je hovert (sneller page-load)
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
                <div class="mb-1.5 flex items-center gap-2">
                    <!-- Spotify logo -->
                    <svg role="img" viewBox="0 0 24 24" class="h-4 w-4 fill-emerald-400">
                        <path
                            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                        />
                    </svg>

                    <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                        Spotify
                    </p>
                </div>

                <p class="text-sm font-medium text-white">
                    {{ playing ? "Currently playing" : "Top tracks" }}
                </p>

                <p class="text-[0.7rem] text-white/50">Hover om een preview te zien</p>
            </div>

            <!-- Equalizer -->
            <div v-if="playing" class="flex h-5 items-end gap-[3px]">
        <span
            class="h-3 w-[3px] animate-[pulse_1.6s_ease-in-out_infinite] rounded-full bg-emerald-300/80"
        />
                <span
                    class="h-4 w-[3px] animate-[pulse_1.4s_ease-in-out_infinite] rounded-full bg-emerald-400/80"
                />
                <span
                    class="h-2 w-[3px] animate-[pulse_1.8s_ease-in-out_infinite] rounded-full bg-emerald-300/80"
                />
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

                        <div class="min-w-0">
                            <a
                                v-if="currentTrack.url"
                                :href="currentTrack.url"
                                target="_blank"
                                rel="noopener"
                                class="block truncate text-sm font-semibold text-white hover:text-indigo-300"
                            >
                                {{ currentTrack.name }}
                            </a>

                            <p class="truncate text-xs text-white/70">
                                {{ currentTrack.artists }}
                            </p>

                            <p class="truncate text-[0.7rem] text-white/45">
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
                                        rel="noopener"
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

                            <li v-if="topTracks.length === 0" class="text-xs text-white/50">
                                (Nog geen tracks geladen — check even of je Vercel env vars kloppen)
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>
