<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <SectionHeading
      eyebrow="Projets"
      title="Du besoin métier à la solution"
      description="Une sélection de projets web et applicatifs, avec un équilibre entre exécution technique et logique produit."
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
