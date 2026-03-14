<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <SectionHeading
      eyebrow="Compétences"
      title="Un profil tech + business"
      description="Des compétences techniques et produit, construites sur des projets web, d'analyse et d'applications."
    />

    <div class="mt-8 space-y-7">
      <article
        v-for="group in skillGroups"
        :key="group.id"
        class="theme-surface-soft theme-border rounded-2xl border p-4 sm:p-6"
      >
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 class="font-display theme-text text-2xl">{{ group.title }}</h3>
          <p class="theme-text-muted text-xs uppercase tracking-[0.12em]">
            {{ group.skills.length }} items
          </p>
        </div>

        <p class="theme-text-soft mt-2 text-sm">{{ group.description }}</p>

        <div v-if="group.display === 'tags'" class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="skill in group.skills"
            :key="`${group.id}-${skill.name}`"
            class="theme-chip rounded-md px-3 py-1.5 text-sm font-semibold"
          >
            {{ skill.name }}
          </span>
        </div>

        <div v-else class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard v-for="skill in group.skills" :key="`${group.id}-${skill.name}`" :skill="skill" />
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillCard from '@/components/ui/SkillCard.vue'
import { skillGroups } from '@/data/portfolioContent'
</script>
