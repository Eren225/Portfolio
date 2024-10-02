<template>
  <div id="app">
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
