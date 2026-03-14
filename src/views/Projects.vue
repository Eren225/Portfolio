<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <SectionHeading
      eyebrow="Projets"
      title="Du besoin metier a la solution"
      description="Une selection de projets web et applicatifs, avec un equilibre entre execution technique et logique produit."
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
