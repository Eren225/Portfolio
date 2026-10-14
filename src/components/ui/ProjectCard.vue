<template>
  <article class="rounded-lg border border-line bg-surface p-5 sm:p-7">
    <div class="flex items-start gap-4">
      <div
        v-if="project.logo"
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-line bg-tint p-2"
      >
        <img :src="project.logo" :alt="`Logo ${project.title}`" class="h-full w-full object-contain" />
      </div>
      <div class="min-w-0">
        <p v-if="project.period" class="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {{ project.period }}
        </p>
        <h3 class="text-xl font-semibold tracking-tight text-ink">{{ project.title }}</h3>
        <p class="mt-0.5 text-sm text-muted">{{ project.subtitle }}</p>
      </div>
    </div>

    <p class="mt-5 text-base leading-relaxed text-body">{{ project.description }}</p>

    <ul class="mt-4 grid gap-2 text-sm text-body">
      <li v-for="highlight in project.highlights" :key="highlight.text ?? highlight" class="flex items-start gap-3">
        <span class="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true"></span>
        <span v-if="typeof highlight === 'string'">{{ highlight }}</span>
        <span v-else><strong class="font-semibold text-ink">{{ highlight.strong }}</strong>{{ highlight.text }}</span>
      </li>
    </ul>

    <ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-md border border-line bg-tint px-2.5 py-1 text-xs font-medium text-body"
      >
        {{ tech }}
      </li>
    </ul>

    <a
      v-if="project.websiteUrl"
      :href="project.websiteUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
    >
      Visiter {{ project.websiteLabel || 'le site' }}
      <ExternalLink class="h-4 w-4" aria-hidden="true" />
    </a>

    <div
      v-if="project.gallery?.length"
      class="mt-6 grid gap-3"
      :class="project.gallery.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'"
    >
      <button
        v-for="image in project.gallery"
        :key="image.src"
        type="button"
        class="group overflow-hidden rounded-md border border-line bg-tint"
        :aria-label="`Agrandir : ${image.alt}`"
        @click="selectedImage = image"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          class="w-full object-cover transition duration-300 group-hover:opacity-90"
          :class="project.gallery.length === 2 ? 'h-56 sm:h-64 lg:h-72' : 'h-28 sm:h-32'"
        />
      </button>
    </div>

    <video v-if="project.video?.src" controls preload="metadata" class="mt-6 w-full rounded-md border border-line">
      <source :src="project.video.src" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>

    <div
      v-if="selectedImage"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedImage.alt"
      @click="selectedImage = null"
      @keydown.esc="selectedImage = null"
    >
      <figure class="relative max-w-3xl space-y-3" @click.stop>
        <button
          ref="closeButton"
          type="button"
          class="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-md bg-surface text-ink shadow"
          @click="selectedImage = null"
        >
          <X class="h-5 w-5" aria-hidden="true" />
          <span class="sr-only">Fermer</span>
        </button>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="max-h-[75vh] w-full rounded-md bg-surface object-contain" />
        <figcaption class="text-center text-sm text-white">{{ selectedImage.alt }}</figcaption>
      </figure>
    </div>
  </article>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import { ExternalLink, X } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const selectedImage = ref(null)
const closeButton = ref(null)

watch(selectedImage, async (value) => {
  if (value) {
    await nextTick()
    closeButton.value?.focus()
  }
})
</script>
