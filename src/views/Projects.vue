<template>
  <div class="max-w-5xl text-center mx-auto p-10">
    <h1 class="text-4xl font-bold text-white mb-20">Projets</h1>

    <!-- Conteneur principal pour le projet avec flex pour aligner le logo et le texte côte à côte -->
    <div class="rounded-lg shadow-xl mb-10 p-6 flex flex-col md:flex-row items-center md:items-start overflow-auto">
      <!-- Logo du projet -->
      <img src="../components/images/logof.png" alt="Eren's Scripts" class="rounded-lg mb-6 md:mb-0 md:mr-6 w-full max-w-xs object-contain" />
      
      <!-- Texte du projet -->
      <div class="flex-1 text-left">
        <h2 class="text-white text-2xl font-bold mb-4">Eren's Scripts</h2>
        <p class="text-lg text-gray-300 mb-6">
          Création de contenu personnalisé sur différents jeux-vidéos.
        </p>

        <!-- Galerie d'images sous le texte -->
        <div class="flex flex-wrap space-x-4 mb-6">
          <img src="../components/images/mcdo.jpg" alt="Image 1" class="h-36 w-36 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/mcdo.jpg')" />
          <img src="../components/images/phone.png" alt="Image 2" class="h-36 w-36 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/phone.png')" />
          <img src="../components/images/wall.jpg" alt="Image 3" class="h-36 w-36 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/wall.jpg')" />
        </div>

        <!-- Vidéo du projet -->
        <video controls class="w-full max-w-sm rounded-lg">
          <source src="../components/images/escape.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </div>

    <!-- Affichage de l'image en plein écran -->
    <div v-if="selectedImage" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" @click="closeImage">
      <img :src="selectedImage" alt="Agrandissement de l'image" class="max-w-full max-h-full rounded-lg" />
    </div>
    <div class="rounded-lg shadow-xl mb-10 p-6 flex flex-col md:flex-row items-center md:items-start overflow-auto">
      <!-- Logo du projet -->
      <img src="../components/icons/helmo.png" alt="Helmo" class="rounded-lg mb-6 md:mb-0 md:mr-6 w-full max-w-xs object-contain" />
      
      <!-- Texte du projet -->
      <div class="flex-1 text-left">
        <h2 class="text-white text-2xl font-bold mb-4">Helmo</h2>
        <p class="text-lg text-gray-300 mb-6">
          Projets Scolaires
        </p>

        <!-- Galerie d'images sous le texte -->
        <div class="flex flex-wrap space-x-4 mb-6">
          <img src="../components/images/rocket_refund.png" alt="Image 1" class="h-36 w-36 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/rocket_refund.png')" />
          <img src="../components/images/mcd.png" alt="Image 2" class="h-36 w-36 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/mcd.png')" />
          <img src="../components/images/mobile.jpg" alt="Image 3" class="h-36 w-20 rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer" @click="openImage('../src/components/images/mobile.jpg')" />
        </div>

        <!-- Vidéo du projet -->
        <video controls class="w-full max-w-sm rounded-lg">
          <source src="../components/images/puroguramu.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </div>

    <!-- Affichage de l'image en plein écran -->
    <div v-if="selectedImage" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" @click="closeImage">
      <img :src="selectedImage" alt="Agrandissement de l'image" class="max-w-full max-h-full rounded-lg" />
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      selectedImage: null // Stocke l'image sélectionnée pour l'agrandissement
    };
  },
  methods: {
    openImage(imageSrc) {
      const absolutePath = window.location.origin + '/' + imageSrc.replace('../', ''); // Conversion du chemin relatif en absolu
      console.log("Image absolute path:", absolutePath);
      this.selectedImage = absolutePath; // Affiche l'image avec le chemin absolu
    },
    closeImage() {
      this.selectedImage = null; // Ferme l'image en plein écran
    }
  }
}
</script>

<style scoped>
/* Ajoute une transition fluide lors du hover */
img {
  transition: transform 0.3s ease;
}

/* Style pour l'image en plein écran */
</style>
