<template>
  <div class="app-shell relative min-h-screen overflow-x-hidden">

    <Navbar :links="navigationLinks" />

    <main class="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-20 pt-24 sm:px-6 md:gap-10 md:pt-28">
      <section id="about" class="section-anchor">
        <About />
      </section>

      <section id="projects" class="section-anchor">
        <Projects />
      </section>

      <section id="skills" class="section-anchor">
        <Skills />
      </section>

      <section id="contact" class="section-anchor">
        <Contact />
      </section>
    </main>
    <Analytics />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import { Analytics } from "@vercel/analytics/vue"
import { navigationLinks } from '@/data/portfolioContent'
</script>
