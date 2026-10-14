<template>
  <div class="grid gap-10 pb-14 md:grid-cols-[1fr_auto] md:items-center md:gap-14 md:pb-20">
    <div class="order-2 space-y-6 md:order-1">
      <div class="space-y-3">
        <h1 class="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {{ heroContent.name }}
        </h1>
        <p class="max-w-xl text-lg leading-snug text-ink sm:text-xl">
          {{ heroContent.headline }}
        </p>
      </div>

      <p class="max-w-xl text-base leading-relaxed text-body">
        {{ heroContent.description }}
      </p>

      <p class="inline-flex items-center gap-2 text-sm text-muted">
        <MapPin class="h-4 w-4" aria-hidden="true" />
        {{ heroContent.location }}
      </p>

      <div class="flex flex-col gap-3 sm:flex-row">
        <a
          :href="heroContent.ctaPrimary.target"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
        >
          {{ heroContent.ctaPrimary.label }}
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          :href="heroContent.ctaSecondary.target"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-tint"
        >
          {{ heroContent.ctaSecondary.label }}
          <Download class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <dl class="grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2">
        <div v-for="item in heroContent.highlights" :key="item.label">
          <dt class="text-xs font-medium uppercase tracking-[0.12em] text-muted">{{ item.label }}</dt>
          <dd class="mt-1 text-sm font-medium text-ink">{{ item.value }}</dd>
        </div>
      </dl>
    </div>

    <img
      :src="heroContent.profileImage"
      alt="Portrait de Mattéo Rober"
      class="order-1 h-36 w-36 rounded-lg border border-line object-cover object-center sm:h-44 sm:w-44 md:order-2 md:h-72 md:w-60"
    />
  </div>
</template>

<script setup>
import { ArrowRight, Download, MapPin } from 'lucide-vue-next'
import { heroContent } from '@/data/portfolioContent'
</script>
