<template>
  <section class="app">
    <Header />

    <router-view>

    </router-view>

    <Footer />

    <GDialogRoot />
  </section>
</template>

<script>

import Header from '@/root/_components/Header';
import Footer from '@/root/_components/Footer';
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
