<template>
  <header class="max-w-2xl space-y-3">
    <p class="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{{ eyebrow }}</p>
    <h2 class="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
      {{ title }}
    </h2>
    <p v-if="description" class="text-base leading-relaxed text-body">
      {{ description }}
    </p>
  </header>
</template>

<script setup>
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
