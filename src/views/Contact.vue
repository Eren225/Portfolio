<template>
  <div class="section-shell p-5 sm:p-8 md:p-10">
    <SectionHeading eyebrow="Contact" :title="contactContent.heading" :description="contactContent.description" />

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <a
        :href="contactContent.cvUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="theme-surface-soft theme-border group rounded-xl border p-4 transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
      >
        <div class="flex items-center justify-between">
          <h3 class="font-display theme-text text-xl">Mon CV</h3>
          <Download class="theme-text-soft h-5 w-5" aria-hidden="true" />
        </div>
        <p class="theme-text-soft mt-3 text-sm">Version complete en PDF.</p>
      </a>

      <a
        :href="`mailto:${contactContent.email}`"
        class="theme-surface-soft theme-border group rounded-xl border p-4 transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
      >
        <div class="flex items-center justify-between">
          <h3 class="font-display theme-text text-xl">Email direct</h3>
          <Mail class="theme-text-soft h-5 w-5" aria-hidden="true" />
        </div>
        <p class="theme-text-soft mt-3 break-all text-sm">{{ contactContent.email }}</p>
      </a>

      <a
        :href="contactContent.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="theme-surface-soft theme-border group rounded-xl border p-4 transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)] sm:col-span-2 lg:col-span-1"
      >
        <div class="flex items-center justify-between">
          <h3 class="font-display theme-text text-xl">LinkedIn</h3>
          <Linkedin class="theme-text-soft h-5 w-5" aria-hidden="true" />
        </div>
        <p class="theme-text-soft mt-3 text-sm">Profil pro et parcours.</p>
      </a>
    </div>

    <div class="theme-surface-strong theme-border theme-text-soft mt-6 flex flex-wrap items-center gap-3 rounded-xl border p-4 text-sm">
      <MessageSquare class="theme-text-soft h-4 w-4" aria-hidden="true" />
      <span>Base a {{ contactContent.location }} - ouvert aux collaborations.</span>
    </div>
  </div>
</template>

<script setup>
import { Download, MessageSquare, Linkedin, Mail } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { contactContent } from '@/data/portfolioContent'
</script>
