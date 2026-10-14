<template>
  <div>
    <SectionHeading
      eyebrow="Compétences"
      title="Ce que j'apporte à une équipe"
      description="Une base technique solide pour dialoguer avec les développeurs, et une formation en gestion pour piloter, analyser et prioriser."
    />

    <div class="mt-8 grid gap-8 lg:grid-cols-3">
      <article v-for="group in skillGroups" :key="group.id" class="border-t border-ink pt-4">
        <h3 class="text-lg font-semibold tracking-tight text-ink">{{ group.title }}</h3>
        <p class="mt-1 text-sm text-muted">{{ group.description }}</p>

        <ul class="mt-4 divide-y divide-line text-sm">
          <li
            v-for="skill in group.skills"
            :key="`${group.id}-${skill.name}`"
            class="flex items-center justify-between gap-3 py-2.5"
          >
            <span class="font-medium text-ink">{{ skill.name }}</span>
            <span v-if="skill.level" class="text-muted">{{ skill.level }}</span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { skillGroups } from '@/data/portfolioContent'
</script>
