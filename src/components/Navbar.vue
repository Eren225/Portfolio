<template>
  <nav class="navbar fixed top-0 left-0 bg-gray-900 bg-opacity-40 backdrop-blur-md z-50 p-4 w-full">
    <!-- Menu hamburger pour les petits écrans -->
    <div class="flex justify-between items-center md:hidden">
      <h1 class="text-white font-bold text-xl">Menu</h1>
      <button @click="isMenuOpen = !isMenuOpen" class="text-white">
        <!-- Icône du menu hamburger -->
        <img src="../components/icons/bars.png" alt="ouvrir menu"/>
      </button>
    </div>

    <!-- Liste des liens de navigation -->
    <ul :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:flex justify-end space-x-8 pr-10 mt-4 md:mt-0 md:space-y-0 space-y-4 md:space-y-0 hidden">
      <li><a href="#about" class="nav-link" @click.prevent="scrollToSection('about')">À propos</a></li>
      <li><a href="#skills" class="nav-link" @click.prevent="scrollToSection('skills')">Compétences</a></li>
      <li><a href="#projects" class="nav-link" @click.prevent="scrollToSection('projects')">Projets</a></li>
      <li><a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false // Variable pour suivre l'état du menu hamburger
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -30; // Décalage de 10px pour laisser un espace
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
        this.isMenuOpen = false; // Ferme le menu après avoir cliqué sur un lien
      }
    }
  }
}
</script>

<style scoped>
/* Navbar occupe toute la largeur */
.navbar {
  width: 100%;
  box-sizing: border-box;
}

.nav-link {
  @apply text-white font-bold text-lg relative transition-colors duration-300 block md:inline-block; /* Block pour mobile, inline pour desktop */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #00bfff; /* Couleur bleu vif */
  left: 0;
  bottom: -5px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  @apply text-cyan-400;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Scrollbar par défaut */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Menu hamburger */
button {
  @apply focus:outline-none;
}
</style>
