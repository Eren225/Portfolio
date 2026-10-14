<template>
  <div>
    <SectionHeading eyebrow="Contact" :title="contactContent.heading" :description="contactContent.description" />

    <ul class="mt-8 grid gap-4 sm:grid-cols-3">
      <li v-for="item in contactItems" :key="item.label">
        <a
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="flex h-full min-h-11 flex-col gap-3 rounded-lg border border-line bg-surface p-5 transition hover:border-accent"
        >
          <span class="flex items-center justify-between text-ink">
            <span class="text-base font-semibold">{{ item.label }}</span>
            <component :is="item.icon" class="h-5 w-5 text-muted" aria-hidden="true" />
          </span>
          <span class="break-all text-sm text-body">{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Download, Linkedin, Mail } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { contactContent } from '@/data/portfolioContent'

const contactItems = [
  { label: 'Email', text: contactContent.email, href: `mailto:${contactContent.email}`, icon: Mail },
  { label: 'LinkedIn', text: 'Profil pro et parcours', href: contactContent.linkedinUrl, icon: Linkedin, external: true },
  { label: 'CV', text: 'Version complète en PDF', href: contactContent.cvUrl, icon: Download, external: true }
]
</script>
