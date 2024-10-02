<template>
  <div class="flex flex-col md:flex-row justify-center items-center p-12 min-h-screen">
    <div class="flex-1 text-center md:text-left max-w-6xl">
      <h1 class="text-white text-8xl font-bold">Hey!</h1>
      <p class="text-white text-5xl mt-6">Je m'appelle Mattéo, étudiant en</p>
      <!-- Ajustement de la hauteur minimale pour éviter que le texte soit coupé -->
      <p class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient-wave text-7xl font-bold mt-4 min-h-[150px]">
        Développement D'applications
      </p>
    </div>
    <div class="relative bg-blue-400 shadow-lg rounded-lg w-96 h-96 p-4 mt-10 md:mt-0 md:ml-6">
      <img src="../components/images/matteo.jpg" alt="Matteo Rober" class="rounded-lg object-cover w-full h-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
@keyframes gradient-wave {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.animate-gradient-wave {
  background-size: 200% 100%;
  animation: gradient-wave 8s linear infinite;
}
</style>
