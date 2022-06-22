<template>
  <section class="app">
    <Header />

    <main class="main">
      <router-view/>
    </main>

    <Footer />

    <GDialogRoot />
  </section>
</template>

<script>

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { GDialogRoot } from 'gitart-vue-dialog'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    GDialogRoot
  }
}
</script>

<style scoped lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1;
  }
</style>
