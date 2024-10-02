<template>
  <div class="text-center p-10">
    <!-- Affichage "Site en construction" si sur mobile -->
    <div v-if="isMobile">
      <h1 class="text-4xl font-bold text-white mb-8">Site en construction</h1>
      <p class="text-lg text-gray-300 mb-8">Vous allez être redirigé vers mon CV...</p>
    </div>

    <!-- Affichage du contenu complet pour bureau (non mobile) -->
    <div v-else>
      <h1 class="text-4xl font-bold text-white mb-8">Contact</h1>
      <p class="text-lg text-gray-300 mb-8">Contactez-moi à l'adresse email suivante :</p>
      <a href="mailto:matteo@example.com" class="text-cyan-400 font-bold">matteo@example.com</a>

      <!-- Boutons pour bureau -->
      <div class="mt-10 space-y-6">
        <!-- Bouton pour ouvrir le CV -->
        <a href="/cv.pdf" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 inline-block">
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
      setTimeout(() => {
        window.location.href = '/cv.pdf';
      }, 3000); // Ajoute un délai de 3 secondes avant la redirection
    }
  },
  methods: {
    // Fonction pour détecter si l'utilisateur est sur mobile
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style scoped>
/* Style personnalisé */
</style>
