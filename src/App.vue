<template>
  <div id="app">
    <!-- Si l'utilisateur est sur mobile, afficher "Site en construction" -->
    <div v-if="isMobile" class="text-center p-10">
      <h1 class="text-4xl font-bold text-white mb-8">Site en construction</h1>
      <p class="text-lg text-gray-300 mb-8">(disponible pour le moment uniquement sur pc)</p>
      <p class="text-lg text-gray-300 mb-8">Vous allez être redirigé vers mon CV...</p>
    </div>

    <!-- Contenu du site pour les utilisateurs non mobiles -->
    <div v-else>
      <Navbar />
      <section id="about" class="bg-cover bg-center h-screen background-image">
        <About />
      </section>
      <section id="skills" class="px-10">
        <Skills />
      </section>
      <section id="projects" class="px-10">
        <Projects />
      </section>
      <section id="contact" class="px-10">
        <Contact />
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Skills,
    Projects,
    Contact
  },
  data() {
    return {
      isMobile: false // Suivre si l'utilisateur est sur mobile
    };
  },
  mounted() {
    // Détecte si l'utilisateur est sur mobile
    this.isMobile = this.detectMobile();
    
    // Redirige vers le CV si l'utilisateur est sur mobile après 3 secondes
    if (this.isMobile) {
      setTimeout(() => {
        window.location.href = '/CV_Matteo_Rober_FR.pdf';
      }, 3000); // Délai de 3 secondes avant la redirection
    }
  },
  methods: {
    // Fonction pour détecter si l'utilisateur est sur un appareil mobile
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style>
html, body {
  @apply m-0 p-0 h-full;
}

body {
  background-color: rgb(33,33,33);
}

/* Appliquer les styles de fond */
.background-image {
  background-image: url('./components/images/bg.png');
  background-size: cover;
  background-position: center;
}
</style>
