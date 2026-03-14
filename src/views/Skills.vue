<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <SectionHeading
      eyebrow="Competences"
      title="Un profil tech + business"
      description="Des competences techniques et produit construites sur des projets web, d analyse et d applications."
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

        <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
