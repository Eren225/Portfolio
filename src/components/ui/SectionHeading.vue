<template>
  <header class="space-y-4">
    <p class="theme-badge inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
      <Terminal class="h-3.5 w-3.5" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <h2 class="font-display theme-text text-3xl leading-tight sm:text-4xl md:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" class="theme-text-soft max-w-2xl text-sm leading-relaxed sm:text-base">
      {{ description }}
    </p>
  </header>
</template>

<script setup>
import { Terminal } from 'lucide-vue-next'

defineProps({
  eyebrow: {
    type: String,
    default: 'Section'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
