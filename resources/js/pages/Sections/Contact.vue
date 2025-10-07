<script setup lang="ts">
import { ref } from 'vue';
const sending = ref(false);
const sent = ref(false);
const error = ref<string>(''); // error message (empty = no error)

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
});

function resetStates() {
    sent.value = false;
    error.value = '';
}

function resetForm() {
    form.value = { name: '', email: '', subject: '', message: '' };
}

type FormcarryResponse =
    | { code: 200; message?: string }
    | { code: 422; message: string; errors?: Record<string, string[]> }
    | { code: number; message: string };

async function onSubmit() {
    if (sending.value) return;
    resetStates();
    sending.value = true;

    try {
        const response = await fetch('https://formcarry.com/s/Pn_uolvFRaY', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.value.name,
                email: form.value.email,
                subject: form.value.subject, // extra field is fine
                message: form.value.message,
            }),
        });

        const data: FormcarryResponse = await response.json();

        if ('code' in data && data.code === 200) {
            sent.value = true;
            resetForm();
        } else if ('code' in data && data.code === 422) {
            error.value = data.message || 'Validation failed. Please check your inputs.';
        } else {
            error.value = (data as any).message || 'Something went wrong. Please try again later.';
        }
    } catch (err: any) {
        error.value = err?.message ?? 'Network error. Please try again.';
    } finally {
        sending.value = false;
        // auto-hide success after a bit (optional)
        if (sent.value) {
            setTimeout(() => (sent.value = false), 3000);
        }
    }
}
</script>
<template>
    <section id="contact" class="relative overflow-hidden px-8 py-24">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
            <div
                class="absolute top-1/2 left-1/2 h-[40vw] max-h-[22rem] w-[90vw] max-w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-violet-600/20 blur-3xl dark:bg-violet-600/25"
            ></div>
            <div
                class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.08),transparent_60%)] dark:bg-[radial-gradient(70%_50%_at_50%_40%,rgba(124,58,237,0.12),transparent_60%)]"
            ></div>
        </div>

        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col items-center justify-center pb-12 text-center">
                <h2 class="text-4xl font-bold text-stone-900 transition-colors duration-500 dark:text-white">
                    Contact<span class="text-primary">.</span>
                </h2>
                <p class="pt-2 text-stone-600 transition-colors duration-500 dark:text-zinc-300">Let’s make something amazing together!</p>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="space-y-4">
                    <!-- Email -->
                    <div
                        class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                    >
                        <div class="flex items-center gap-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 8l-8 5-8-5V6l8 5 8-5v2z" />
                                    <path d="M4 8v10h16V8l-8 5-8-5z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-stone-500 dark:text-zinc-400">Email</p>
                                <a
                                    href="mailto:danielterpstra006@gmail.com"
                                    class="font-semibold text-stone-800 transition hover:text-primary dark:text-zinc-200"
                                >
                                    danielterpstra006@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Location -->
                    <div
                        class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                    >
                        <div class="flex items-center gap-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-stone-500 dark:text-zinc-400">Location</p>
                                <p class="font-semibold text-stone-800 dark:text-zinc-200">Enschede, NL</p>
                            </div>
                        </div>
                    </div>

                    <!-- Availability -->
                    <div
                        class="rounded-xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:border-zinc-800 dark:bg-zinc-950/40"
                    >
                        <div class="flex items-center gap-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15">
                                <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                            </div>
                            <div>
                                <p class="text-sm text-stone-500 dark:text-zinc-400">Availability</p>
                                <p class="font-semibold text-stone-800 dark:text-zinc-200">Open for freelance & work</p>
                            </div>
                        </div>
                    </div>

                    <!-- Socials -->
                    <div class="flex gap-4 pt-2">
                        <!-- Socials -->
                        <a
                            href="https://github.com/TerpDev"
                            target="_blank"
                            class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-github"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                />
                            </svg>
                            <span class="sr-only">Github</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/danielterp/"
                            target="_blank"
                            class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-linkedin"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                />
                            </svg>
                            <span class="sr-only">LinkedIn</span>
                        </a>

                        <a
                            href="https://www.instagram.com/daniel_terpstra._?igsh=NWtsMXAzbmRoemxw&utm_source=qr"
                            target="_blank"
                            class="text-zinc-700 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-gray-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                            <span class="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>

                <form
                    @submit.prevent="onSubmit"
                    class="rounded-xl border border-stone-200 bg-white/80 p-6 backdrop-blur-sm transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-950/40"
                >
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Name</label>
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Email</label>
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Subject</label>
                        <input
                            v-model="form.subject"
                            type="text"
                            class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                            placeholder="What’s this about?"
                        />
                    </div>

                    <div class="mt-4">
                        <label class="mb-1 block text-sm text-stone-600 dark:text-zinc-400">Message</label>
                        <textarea
                            v-model="form.message"
                            rows="5"
                            required
                            class="w-full rounded-lg border border-stone-300 bg-white/60 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 transition outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-500"
                            placeholder="Tell me a bit about your project…"
                        />
                    </div>

                    <div class="mt-6 flex items-center gap-3">
                        <button
                            type="submit"
                            :disabled="sending"
                            class="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:bg-primary/80 disabled:opacity-60"
                        >
                            <span v-if="!sending">Send Message</span>
                            <span v-else class="inline-flex items-center gap-2">
                                    <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                    </svg>
                                    Sending…
                                </span>
                        </button>

                        <span v-if="sent && !error" class="text-sm text-emerald-500 dark:text-emerald-400">
                                Thanks! I’ll get back to you soon.
                            </span>
                    </div>

                    <div v-if="sent || error" class="mt-4">
                        <div
                            :class="[
                                    'flex items-start gap-2 rounded-lg border p-3 text-sm',
                                    error
                                        ? 'border-red-300/60 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300'
                                        : 'border-emerald-300/60 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300',
                                ]"
                        >
                            <div class="mt-0.5">
                                <span v-if="error">⚠️</span>
                                <span v-else>✅</span>
                            </div>
                            <div class="flex-1">
                                <p v-if="error">{{ error }}</p>
                                <p v-else>Thanks for reaching out! We’ll get back to you soon.</p>
                            </div>
                            <button type="button" class="text-xs opacity-70 hover:opacity-100" @click="resetStates" aria-label="Close">✕</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>
