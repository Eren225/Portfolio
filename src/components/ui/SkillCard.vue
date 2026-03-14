<template>
  <article class="group theme-surface-soft theme-border rounded-xl border p-4 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)]">
    <div class="flex items-center justify-between gap-3">
      <h4 class="theme-text text-base font-semibold">{{ skill.name }}</h4>
      <span class="theme-text-soft text-sm font-semibold">{{ skill.level }}%</span>
    </div>

    <div class="mt-3 h-2 overflow-hidden rounded-full bg-[var(--chip-bg)]">
      <div
        class="h-full rounded-full bg-[var(--text-soft)] transition-all duration-700"
        :style="{ width: `${skill.level}%` }"
      ></div>
    </div>

    <div class="theme-text-soft mt-3 flex items-center gap-1">
      <Hexagon
        v-for="index in 5"
        :key="`${skill.name}-${index}`"
        class="h-4 w-4"
        :fill="index <= itemLevel ? 'currentColor' : 'none'"
        :class="index <= itemLevel ? 'opacity-100' : 'opacity-35'"
      />
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { Hexagon } from 'lucide-vue-next'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const itemLevel = computed(() => {
  const rawValue = Math.round(props.skill.level / 20)
  return Math.min(5, Math.max(1, rawValue))
})
</script>
