<template>
  <section class="app">
    <Header />

    <router-view/>

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
    height: 100vh;
  }
</style>
