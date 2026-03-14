<template>
  <nav class="theme-nav theme-border fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <button
        type="button"
        class="theme-chip group inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-left transition"
        @click="scrollToSection('about')"
      >
        <Code2 class="theme-text-soft h-4 w-4 transition group-hover:scale-110" aria-hidden="true" />
        <span class="font-display theme-text text-lg tracking-wide">Matteo Rober</span>
      </button>

      <button
        type="button"
        class="theme-chip inline-flex h-10 w-10 items-center justify-center rounded-lg transition md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Menu v-if="!isMenuOpen" class="h-5 w-5" aria-hidden="true" />
        <X v-else class="h-5 w-5" aria-hidden="true" />
        <span class="sr-only">Afficher la navigation</span>
      </button>

      <ul class="hidden items-center gap-2 md:flex">
        <li v-for="link in links" :key="link.id">
          <button
            type="button"
            class="theme-text-soft rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-[var(--chip-bg)] hover:text-[var(--text-main)]"
            @click="scrollToSection(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>
    </div>

    <transition name="menu-fade">
      <div
        v-if="isMenuOpen"
        id="mobile-nav"
        class="theme-surface-soft theme-border border-t md:hidden"
      >
        <ul class="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
          <li v-for="link in links" :key="`mobile-${link.id}`">
            <button
              type="button"
              class="theme-chip flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition"
              @click="scrollToSection(link.id)"
            >
              <span>{{ link.label }}</span>
              <ChevronRight class="theme-text-muted h-4 w-4" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronRight, Code2, Menu, X } from 'lucide-vue-next'

defineProps({
  links: {
    type: Array,
    default: () => []
  }
})

const isMenuOpen = ref(false)

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (!section) {
    return
  }

  const navbarOffset = 92
  const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset

  window.scrollTo({ top, behavior: 'smooth' })
  isMenuOpen.value = false
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
