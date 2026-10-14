<template>
  <div>
    <SectionHeading
      eyebrow="Expérience & projets"
      title="Du besoin métier à la solution"
      description="Formation, expérience en entreprise, projet entrepreneurial et réalisations web."
    />

    <div class="mt-8 grid gap-6">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { projects } from '@/data/portfolioContent'
</script>
