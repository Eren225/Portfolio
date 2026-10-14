<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
    <nav class="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Navigation principale">
      <a href="#about" class="text-base font-semibold tracking-tight text-ink" @click.prevent="scrollToSection('about')">
        {{ brand }}
      </a>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition hover:bg-tint md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Menu v-if="!isMenuOpen" class="h-5 w-5" aria-hidden="true" />
        <X v-else class="h-5 w-5" aria-hidden="true" />
        <span class="sr-only">Afficher la navigation</span>
      </button>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="rounded-md px-3 py-2 text-sm font-medium text-body transition hover:text-ink"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>

    <transition name="menu-fade">
      <div v-if="isMenuOpen" id="mobile-nav" class="border-t border-line bg-paper md:hidden">
        <ul class="mx-auto flex w-full max-w-5xl flex-col px-5 py-2 sm:px-8">
          <li v-for="link in links" :key="`mobile-${link.id}`" class="border-b border-line last:border-b-0">
            <a
              :href="`#${link.id}`"
              class="flex min-h-12 items-center justify-between py-3 text-base font-medium text-ink"
              @click.prevent="scrollToSection(link.id)"
            >
              {{ link.label }}
              <ChevronRight class="h-4 w-4 text-muted" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronRight, Menu, X } from 'lucide-vue-next'

defineProps({
  links: {
    type: Array,
    default: () => []
  },
  brand: {
    type: String,
    required: true
  }
})

const isMenuOpen = ref(false)

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  isMenuOpen.value = false
  if (!section) {
    return
  }

  const navbarOffset = 72
  const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.15s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>
