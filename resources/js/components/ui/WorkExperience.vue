<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue";
import type { Component } from "vue";
import {
    BriefcaseBusiness,
    ChevronsDownUp,
    ChevronsUpDown,
    CodeXml,
    DraftingCompass,
    GraduationCap,
} from "lucide-vue-next";
import { cn } from "@/lib/utils";

/* ---------- Types ---------- */

export type ExperiencePositionIconType =
    | "code"
    | "design"
    | "business"
    | "education";

export interface ExperiencePositionItem {
    id: string;
    title: string;
    employmentPeriod: string;
    employmentType?: string;
    description?: string; // markdown-achtige tekst met - bullets mag gewoon
    icon?: ExperiencePositionIconType;
    skills?: string[];
    isExpanded?: boolean;
}

export interface ExperienceItem {
    id: string;
    companyName: string;
    companyLogo?: string;
    positions: ExperiencePositionItem[];
    isCurrentEmployer?: boolean;
}

/* ---------- Props ---------- */

const props = withDefaults(
    defineProps<{
        experiences: ExperienceItem[];
        className?: string;
    }>(),
    {
        className: "",
    }
);

/* ---------- Icon map ---------- */

const iconMap: Record<ExperiencePositionIconType, Component> = {
    code: CodeXml,
    design: DraftingCompass,
    business: BriefcaseBusiness,
    education: GraduationCap,
};

/* ---------- Collapsible state per position ---------- */

const openState = ref<Record<string, boolean>>({});

const isOpen = (id: string, fallback = false) =>
    openState.value[id] ?? fallback;

const togglePosition = (id: string, fallback = false) => {
    openState.value[id] = !isOpen(id, fallback);
};

/* ---------- Helpers ---------- */

// simpele bullet-parser: elke regel die met "- " begint wordt een list item
const parseDescriptionLines = (desc: string) =>
    desc.split("\n").filter((line) => line.trim().length > 0);
</script>

<template>
    <section
        id="experience"
        :class="
      cn(
        'relative w-full border-t border-white/5 bg-[#030303] text-white',
        'overflow-hidden',
        props.className
      )
    "
    >
        <!-- zachte achtergrond glow -->
        <div
            class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(129,140,248,0.16),rgba(0,0,0,0)_55%),radial-gradient(120%_90%_at_100%_100%,rgba(244,114,182,0.18),rgba(0,0,0,0)_60%)] opacity-70"
        />

        <div
            class="relative z-10 container mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-24 lg:py-28"
        >
            <!-- Header in dezelfde stijl als je andere sections -->
            <div
                v-motion="{
          initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
          visibleOnce: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
        }"
                class="mb-12 text-center space-y-4"
            >
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>Experience</span>
                </div>

                <div class="space-y-2">
                    <h2
                        class="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight"
                    >
                        Where I’ve been working and learning
                    </h2>
                    <p
                        class="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed"
                    >
                        A timeline of companies, roles and stacks that helped me grow as a
                        developer – from school projects to real-world client work.
                    </p>
                </div>
            </div>

            <!-- Experience list -->
            <div class="space-y-8">
                <div
                    v-for="(experience, companyIndex) in experiences"
                    :key="experience.id"
                    v-motion="{
            initial: { opacity: 0, y: 24, filter: 'blur(12px)' },
            visibleOnce: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            },
            transition: {
              duration: 0.6,
              delay: 0.15 + companyIndex * 0.08,
              ease: 'easeOut',
            },
          }"
                    class="rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-5 sm:px-6 sm:py-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                >
                    <!-- Company header -->
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                            aria-hidden="true"
                        >
                            <img
                                v-if="experience.companyLogo"
                                :src="experience.companyLogo"
                                :alt="experience.companyName"
                                class="h-full w-full object-cover"
                            />
                            <span
                                v-else
                                class="h-2 w-2 rounded-full bg-white/60"
                            />
                        </div>

                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2">
                                <h3 class="text-base sm:text-lg font-semibold">
                                    {{ experience.companyName }}
                                </h3>

                                <span
                                    v-if="experience.isCurrentEmployer"
                                    class="relative flex items-center justify-center"
                                >
                  <span
                      class="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/70"
                  />
                  <span
                      class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                  />
                  <span class="sr-only">Current employer</span>
                </span>
                            </div>
                            <p class="text-xs text-white/45">
                                {{ experience.positions[0]?.employmentPeriod }}
                                <span v-if="experience.positions.length > 1">
                  • {{ experience.positions.length }} roles
                </span>
                            </p>
                        </div>
                    </div>

                    <!-- Positions with vertical line -->
                    <div class="relative mt-3 pl-4">
                        <!-- vertical lijn -->
                        <div
                            class="pointer-events-none absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent"
                        />

                        <div class="space-y-4">
                            <div
                                v-for="position in experience.positions"
                                :key="position.id"
                                class="relative pl-6"
                            >
                                <!-- dot -->
                                <div
                                    class="absolute left-2 top-4 -translate-x-1/2 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-[#030303]"
                                />

                                <!-- clickable header -->
                                <button
                                    type="button"
                                    class="group flex w-full items-center gap-3 text-left select-none"
                                    :data-state="isOpen(position.id, position.isExpanded) ? 'open' : 'closed'"
                                    @click="togglePosition(position.id, position.isExpanded)"
                                >
                                    <div
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70"
                                        aria-hidden="true"
                                    >
                                        <component
                                            :is="iconMap[position.icon || 'business']"
                                            class="h-4 w-4"
                                        />
                                    </div>

                                    <div class="flex-1">
                                        <h4
                                            class="text-sm sm:text-base font-medium text-white group-hover:text-indigo-200 transition-colors"
                                        >
                                            {{ position.title }}
                                        </h4>
                                        <div
                                            class="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-white/45"
                                        >
                      <span v-if="position.employmentType">
                        {{ position.employmentType }}
                      </span>
                                            <span
                                                v-if="position.employmentType"
                                                class="h-3 w-px bg-white/15"
                                            />
                                            <span>
                        {{ position.employmentPeriod }}
                      </span>
                                        </div>
                                    </div>

                                    <div
                                        class="shrink-0 text-white/50 group-data-[state=open]:rotate-0 transition-transform duration-200"
                                        aria-hidden="true"
                                    >
                                        <ChevronsDownUp
                                            v-if="isOpen(position.id, position.isExpanded)"
                                            class="h-4 w-4"
                                        />
                                        <ChevronsUpDown
                                            v-else
                                            class="h-4 w-4"
                                        />
                                    </div>
                                </button>

                                <!-- collapsible content -->
                                <Transition name="collapse">
                                    <div
                                        v-show="isOpen(position.id, position.isExpanded)"
                                        class="mt-3 space-y-3 pl-1"
                                    >
                                        <!-- description -->
                                        <div
                                            v-if="position.description"
                                            class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/0 to-white/5 px-3 py-3 sm:px-4 sm:py-3 backdrop-blur-md"
                                        >
                                            <ul
                                                class="space-y-1.5 text-xs sm:text-sm leading-relaxed text-white/70"
                                            >
                                                <li
                                                    v-for="(line, i) in parseDescriptionLines(position.description)"
                                                    :key="i"
                                                    class="flex gap-2"
                                                >
                          <span class="mt-0.5 text-indigo-300" v-if="line.trim().startsWith('-')">
                            •
                          </span>
                                                    <span>
                            {{
                                                            line.trim().startsWith('-')
                                                                ? line.trim().slice(1).trim()
                                                                : line
                                                        }}
                          </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- skills -->
                                        <div
                                            v-if="position.skills && position.skills.length"
                                            class="flex flex-wrap gap-1.5"
                                        >
                      <span
                          v-for="(skill, idx) in position.skills"
                          :key="idx"
                          class="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/70"
                      >
                        {{ skill }}
                      </span>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
    transition: all 0.25s ease-out;
}
.collapse-enter-from,
.collapse-leave-to {
    opacity: 0;
    transform: translateY(-4px);
    max-height: 0;
}
.collapse-enter-to,
.collapse-leave-from {
    opacity: 1;
    transform: translateY(0);
    max-height: 800px;
}
</style>
