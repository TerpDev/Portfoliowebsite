<script setup lang="ts">
import { reactive, ref } from "vue";
import { Send, Mail, User, MessageSquare, Sparkles } from "lucide-vue-next";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
    website: string; // honeypot (anti-spam)
};

const form = reactive<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
});

const loading = ref(false);
const success = ref<string | null>(null);
const error = ref<string | null>(null);
const fieldErrors = ref<Record<string, string[]>>({});

async function submit() {
    success.value = null;
    error.value = null;
    fieldErrors.value = {};
    loading.value = true;

    try {
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN":
                    (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? "",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
            if (data?.errors) fieldErrors.value = data.errors;
            error.value = data?.message ?? "Something went wrong. Try again.";
            return;
        }

        success.value = "Message sent. I’ll get back to you soon 🤝";
        form.name = "";
        form.email = "";
        form.subject = "";
        form.message = "";
        form.website = "";
    } catch {
        error.value = "Network error. Try again.";
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <section
        id="contact"
        class="relative w-full border-t border-white/5 bg-[#030303] text-white"
    >
        <!-- glow like the rest -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28">
            <!-- header (zelfde style als projects/skills) -->
            <div
                v-motion="{
          initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
          visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
        }"
                class="mb-10 md:mb-14 space-y-3"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <Sparkles class="h-3 w-3 text-rose-300" />
                    <span>Contact</span>
                </div>

                <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Let’s build something together
                </h2>

                <p class="text-sm sm:text-base text-white/60 max-w-xl">
                    Drop a message and I’ll reply as soon as possible. (This form sends directly to my inbox.)
                </p>
            </div>

            <div class="grid gap-8 lg:grid-cols-[1fr_0.9fr] items-start">
                <!-- FORM CARD -->
                <div
                    v-motion="{
            initial: { opacity: 0, y: 26, scale: 0.98, filter: 'blur(10px)' },
            visibleOnce: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
            transition: { duration: 0.7, delay: 0.12, ease: 'easeOut' },
          }"
                    class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                >
                    <form class="space-y-4" @submit.prevent="submit">
                        <!-- honeypot (hidden) -->
                        <input
                            v-model="form.website"
                            autocomplete="off"
                            tabindex="-1"
                            class="hidden"
                            aria-hidden="true"
                        />

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-xs uppercase tracking-[0.18em] text-white/45">Name</label>
                                <div class="relative">
                                    <User class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35" />
                                    <input
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Daniel"
                                        class="w-full rounded-2xl border border-white/10 bg-black/40 px-10 py-3 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-white/25"
                                    />
                                </div>
                                <p v-if="fieldErrors.name?.length" class="text-xs text-rose-300">
                                    {{ fieldErrors.name[0] }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-xs uppercase tracking-[0.18em] text-white/45">Email</label>
                                <div class="relative">
                                    <Mail class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35" />
                                    <input
                                        v-model="form.email"
                                        type="email"
                                        placeholder="you@email.com"
                                        class="w-full rounded-2xl border border-white/10 bg-black/40 px-10 py-3 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-white/25"
                                    />
                                </div>
                                <p v-if="fieldErrors.email?.length" class="text-xs text-rose-300">
                                    {{ fieldErrors.email[0] }}
                                </p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs uppercase tracking-[0.18em] text-white/45">Subject</label>
                            <input
                                v-model="form.subject"
                                type="text"
                                placeholder="Project idea / question"
                                class="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-white/25"
                            />
                            <p v-if="fieldErrors.subject?.length" class="text-xs text-rose-300">
                                {{ fieldErrors.subject[0] }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs uppercase tracking-[0.18em] text-white/45">Message</label>
                            <div class="relative">
                                <MessageSquare class="pointer-events-none absolute left-3 top-4 h-4 w-4 text-white/35" />
                                <textarea
                                    v-model="form.message"
                                    rows="6"
                                    placeholder="Tell me what you want to build…"
                                    class="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-10 py-3 text-sm text-white/85 placeholder:text-white/25 outline-none transition focus:border-white/25"
                                />
                            </div>
                            <p v-if="fieldErrors.message?.length" class="text-xs text-rose-300">
                                {{ fieldErrors.message[0] }}
                            </p>
                        </div>

                        <!-- status -->
                        <div v-if="error" class="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                            {{ error }}
                        </div>
                        <div v-if="success" class="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                            {{ success }}
                        </div>

                        <!-- button -->
                        <button
                            type="submit"
                            :disabled="loading"
                            class="group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
                        >
              <span
                  class="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
                            <Send class="h-4 w-4 text-indigo-300 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
                            <span>{{ loading ? "Sending…" : "Send message" }}</span>
                        </button>

                        <p class="pt-2 text-xs text-white/40">
                            By sending, you agree your message will be emailed to me.
                        </p>
                    </form>
                </div>

                <!-- RIGHT SIDE (nice card) -->
                <div class="space-y-6">
                    <div
                        v-motion="{
              initial: { opacity: 0, y: 26, scale: 0.98, filter: 'blur(10px)' },
              visibleOnce: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
              transition: { duration: 0.7, delay: 0.18, ease: 'easeOut' },
            }"
                        class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                    >
                        <p class="text-xs uppercase tracking-[0.18em] text-white/45">Quick info</p>
                        <h3 class="mt-2 text-lg font-semibold tracking-tight text-white">
                            Prefer email?
                        </h3>

                        <p class="mt-2 text-sm text-white/60 leading-relaxed">
                            You can also reach me directly. I usually reply within 1–2 days.
                        </p>

                        <div class="mt-5 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                            <p class="text-xs uppercase tracking-[0.18em] text-white/45">Email</p>
                            <p class="mt-1 text-sm text-white/80">danielterpstra006@gmail.com</p>
                        </div>

                        <div class="mt-4 text-xs text-white/40">
                            Tip: include your goal + deadline + links/screenshots.
                        </div>
                    </div>

                    <div
                        class="pointer-events-none rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-white/[0.08] p-[1px]"
                    >
                        <div class="rounded-[1.4rem] bg-black/30 p-6">
                            <div class="h-px w-full bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
                            <p class="mt-4 text-sm text-white/55">
                                If you want, I can also add a “Book a call” button (Cal.com) in the same style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
