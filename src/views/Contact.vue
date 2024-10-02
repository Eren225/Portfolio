<template>
  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-white mb-8">Contact</h1>

    <!-- Boutons pour bureau (non mobile) -->
    <div class="mt-10 space-x-6" v-if="!isMobile">
      <!-- Bouton pour ouvrir le CV -->
      <a href="/CV_Matteo_Rober_FR.pdf" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 inline-block">
        Ouvrir mon CV
      </a>

      <!-- Bouton pour envoyer un email -->
      <a href="mailto:matteo@example.com" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 inline-block">
        Me contacter par email
      </a>

      <!-- Bouton pour LinkedIn -->
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 inline-block">
        Mon LinkedIn
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isMobile: false // Suivi si l'utilisateur est sur mobile
    };
  },
  mounted() {
    // Détecte si l'utilisateur est sur mobile
    this.isMobile = this.detectMobile();
    
    // Redirige vers le CV si l'utilisateur est sur mobile
    if (this.isMobile) {
      window.location.href = '/CV_Matteo_Rober_FR.pdf';
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

<style scoped>
/* Style personnalisé */
</style>
