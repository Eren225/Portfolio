<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div class="space-y-6">
        <p class="theme-badge inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
          <Terminal class="h-3.5 w-3.5" aria-hidden="true" />
          {{ heroContent.badge }}
        </p>

        <div class="space-y-3">
          <h1 class="font-display theme-text text-4xl leading-tight sm:text-5xl md:text-6xl">
            {{ heroContent.greeting }}
          </h1>
          <p class="font-display theme-text text-3xl leading-tight sm:text-4xl md:text-5xl">
            {{ heroContent.headline }}
          </p>
        </div>

        <p class="theme-text-soft max-w-xl text-sm leading-relaxed sm:text-base">
          {{ heroContent.description }}
        </p>

        <p class="theme-text-soft inline-flex items-center gap-2 text-sm">
          <MapPin class="h-4 w-4" aria-hidden="true" />
          {{ heroContent.location }}
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            :href="heroContent.ctaPrimary.target"
            class="theme-button-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition"
          >
            {{ heroContent.ctaPrimary.label }}
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            :href="heroContent.ctaSecondary.target"
            target="_blank"
            rel="noopener noreferrer"
            class="theme-button-secondary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition"
          >
            {{ heroContent.ctaSecondary.label }}
            <Download class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <article
            v-for="item in heroContent.highlights"
            :key="item.label"
            class="theme-surface-soft theme-border rounded-xl border px-4 py-3"
          >
            <p class="theme-text-muted text-xs uppercase tracking-[0.12em]">{{ item.label }}</p>
            <p class="theme-text mt-1 text-sm font-semibold">{{ item.value }}</p>
          </article>
        </div>
      </div>

      <div class="mx-auto w-full max-w-sm">
        <div class="theme-surface-strong theme-border theme-shadow overflow-hidden rounded-2xl border p-2">
          <img
            :src="heroContent.profileImage"
            alt="Portrait de Matteo Rober"
            class="h-[22rem] w-full rounded-[1.2rem] object-cover object-center sm:h-[25rem]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight, Download, MapPin, Terminal } from 'lucide-vue-next'
import { heroContent } from '@/data/portfolioContent'
</script>
