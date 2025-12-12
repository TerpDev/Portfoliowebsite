<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const playing = ref(false)
const track = ref(null)
const showPreview = ref(false)
const favorites = ref([]) // uit Spotify API

let intervalId = null

const fetchTopTracks = async () => {
    try {
        const res = await fetch('/spotify/top-tracks')
        if (!res.ok) return

        const data = await res.json()
        favorites.value = data.tracks || []
    } catch (e) {
        console.error(e)
    }
}

const fetchCurrentlyPlaying = async () => {
    try {
        const res = await fetch('/spotify/currently-playing')
        if (!res.ok) return

        const data = await res.json()

        if (!data.playing) {
            playing.value = false
            track.value = null

            // als we nog geen favorites hebben, haal ze dan op
            if (!favorites.value.length) {
                await fetchTopTracks()
            }
            return
        }

        // alleen updaten als de track écht verandert
        if (track.value && track.value.name === data.track.name) {
            return
        }

        playing.value = true
        track.value = data.track
    } catch (e) {
        console.error(e)
    }
}

onMounted(() => {
    fetchCurrentlyPlaying()
    fetchTopTracks()
    intervalId = setInterval(fetchCurrentlyPlaying, 5000)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div
        class="rounded-3xl border border-white/[0.12] bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)] text-white"
    >
        <!-- header -->
        <div class="flex items-center justify-between gap-3 mb-3">
            <div>
                <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                    Spotify
                </p>
                <p class="text-sm font-medium text-white">
                    What I’m listening to
                </p>
            </div>

            <!-- groene equalizer alleen als er iets speelt én preview open is -->
            <div v-if="playing && showPreview" class="flex items-end gap-[3px] h-5">
        <span
            class="w-[3px] rounded-full bg-emerald-300/80 h-3 animate-[pulse_1.6s_ease-in-out_infinite]"
        />
                <span
                    class="w-[3px] rounded-full bg-emerald-400/80 h-4 animate-[pulse_1.4s_ease-in-out_infinite]"
                />
                <span
                    class="w-[3px] rounded-full bg-emerald-300/80 h-2 animate-[pulse_1.8s_ease-in-out_infinite]"
                />
            </div>
        </div>

        <!-- toggle button -->
        <button
            type="button"
            class="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/75 hover:bg-white/10 transition-colors"
            @click="showPreview = !showPreview"
        >
            <span v-if="!showPreview">Show what I’m listening to</span>
            <span v-else>Hide preview</span>
        </button>

        <!-- content -->
        <div class="text-sm text-white/70 space-y-3">
            <!-- uitleg als preview dicht is -->
            <p v-if="!showPreview" class="text-white/55 text-xs">
                Klik op de button om te zien wat ik nu luister. Als ik niets afspeel,
                zie je mijn meest geluisterde nummers van Spotify.
            </p>

            <!-- als preview open is -->
            <div v-else>
                <!-- niets aan het spelen -->
                <div v-if="!playing" class="space-y-2">
                    <p class="text-white/70 text-sm">
                        Ik speel momenteel niks af.
                    </p>

                    <div class="mt-2">
                        <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/45 mb-1">
                            Most played lately
                        </p>
                        <ul class="space-y-1.5 text-xs">
                            <li
                                v-for="fav in favorites"
                                :key="fav.url || fav.name"
                                class="flex items-center gap-2"
                            >
                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                                <a
                                    v-if="fav.url"
                                    :href="fav.url"
                                    target="_blank"
                                    rel="noopener"
                                    class="hover:text-emerald-300 transition-colors"
                                >
                                    <span class="font-medium">{{ fav.name }}</span>
                                    <span class="text-white/55"> — {{ fav.artists }}</span>
                                </a>
                                <span v-else>
                  <span class="font-medium">{{ fav.name }}</span>
                  <span class="text-white/55"> — {{ fav.artists }}</span>
                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- er speelt wél iets -->
                <div
                    v-else
                    class="flex items-center gap-3 mt-1 transition-all duration-300"
                >
                    <div
                        v-if="track?.image"
                        class="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                    >
                        <img
                            :src="track.image"
                            class="h-full w-full object-cover"
                            alt="Album cover"
                        />
                    </div>

                    <div>
                        <a
                            v-if="track?.url"
                            :href="track.url"
                            target="_blank"
                            rel="noopener"
                            class="font-semibold text-white hover:text-indigo-300 transition-colors text-sm"
                        >
                            {{ track.name }}
                        </a>
                        <p class="text-white/60 text-xs">
                            {{ track.artists }}
                        </p>
                        <p class="text-white/40 text-[0.7rem]">
                            {{ track.album }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
