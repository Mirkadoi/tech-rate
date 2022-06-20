<template>
  <section class="app">
    <Header />

    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/blogs">Blogs</router-link>
    </p>

    <router-view>

    </router-view>

    <Footer />
  </section>
</template>

<script>

import Header from '@/root/_components/Header';
import Footer from '@/root/_components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped lang="scss">
  .app {
    height: 100vh;
  }
</style>
