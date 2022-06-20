<template>
  <section class="app">
    <Header />

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
