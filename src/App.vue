<template>
  <div class="min-h-screen overflow-x-hidden">
    <Navbar :links="navigationLinks" :brand="brandName" />

    <main class="mx-auto w-full max-w-5xl px-5 pt-24 sm:px-8 md:pt-28">
      <section id="about" class="section-anchor">
        <About />
      </section>

      <section id="projects" class="section-anchor border-t border-line py-14 md:py-20">
        <Projects />
      </section>

      <section id="skills" class="section-anchor border-t border-line py-14 md:py-20">
        <Skills />
      </section>

      <section id="contact" class="section-anchor border-t border-line py-14 md:py-20">
        <Contact />
      </section>
    </main>

    <footer class="border-t border-line">
      <p class="mx-auto w-full max-w-5xl px-5 py-6 text-sm text-muted sm:px-8">
        © {{ year }} {{ brandName }}
      </p>
    </footer>
    <Analytics />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import { Analytics } from '@vercel/analytics/vue'
import { brandName, navigationLinks } from '@/data/portfolioContent'

const year = new Date().getFullYear()
</script>
