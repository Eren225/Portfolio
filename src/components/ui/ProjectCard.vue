<template>
  <article class="theme-surface-soft theme-border theme-shadow relative overflow-hidden rounded-2xl border p-5 sm:p-7">

    <div class="flex flex-col gap-6 lg:flex-row">
      <picture class="theme-surface-strong theme-border h-24 w-full rounded-xl border p-3 sm:h-28 lg:h-32 lg:w-48">
        <source v-if="project.logoDark" media="(prefers-color-scheme: dark)" :srcset="project.logoDark" />
        <img
          :src="project.logoLight || project.logo"
          :alt="`${project.title} logo`"
          class="h-full w-full object-contain"
        />
      </picture>

      <div class="flex-1 space-y-4">
        <div>
          <h3 class="font-display theme-text text-2xl sm:text-3xl">{{ project.title }}</h3>
          <p class="theme-text-muted mt-1 text-sm font-medium uppercase tracking-[0.12em]">
            {{ project.subtitle }}
          </p>
          <p class="theme-text-soft mt-3 text-sm leading-relaxed sm:text-base">
            {{ project.description }}
          </p>

          <a
            v-if="project.websiteUrl"
            :href="project.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="theme-button-primary mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
          >
            Visiter {{ project.websiteLabel || 'le site' }}
            <ExternalLink class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul class="theme-text-soft grid gap-2 text-sm">
          <li v-for="highlight in project.highlights" :key="highlight" class="flex items-start gap-2">
            <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"></span>
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="theme-chip rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="project.gallery?.length"
      class="mt-6 grid gap-3"
      :class="project.gallery.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'"
    >
      <button
        v-for="image in project.gallery"
        :key="image.src"
        type="button"
        class="theme-border group relative overflow-hidden rounded-xl border"
        @click="selectedImage = image"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full object-cover transition duration-300 group-hover:scale-105"
          :class="project.gallery.length === 2 ? 'h-56 sm:h-64 lg:h-72' : 'h-28 sm:h-32'"
        />
      </button>
    </div>

    <div v-if="project.video?.src" class="theme-surface-strong theme-border mt-6 rounded-xl border p-3">
      <video controls class="w-full rounded-xl">
        <source :src="project.video.src" type="video/mp4" />
        Votre navigateur ne supporte pas la video.
      </video>
    </div>

    <div
      v-if="selectedImage"
      class="theme-overlay fixed inset-0 z-[60] flex items-center justify-center p-4"
      @click="selectedImage = null"
    >
      <figure class="max-w-3xl space-y-3" @click.stop>
        <img
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="theme-border max-h-[75vh] w-full rounded-2xl border object-contain"
        />
        <figcaption class="theme-text-soft text-center text-sm">{{ selectedImage.alt }}</figcaption>
      </figure>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { ExternalLink } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const selectedImage = ref(null)
</script>
