<template>
  <section class="app" :class="`app--${isFillBackground}`">
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
  },

  computed: {
    isFillBackground() {
      const isFillBackgroundPage = { products: 'primary', about: 'secondary' }
      return isFillBackgroundPage[this.$route.name]
    }
  }
}
</script>

<style scoped lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: $screen-xl-min;

    &--primary {
      background-color: $background-colors-white;
    }

    &--secondary {
      background-color: $background-colors-lotion;
    }
  }

  .main {
    display: flex;
    align-self: center;
    flex: 1;
    width: $screen-xl-min;

    @include xxl {
      width: calc($screen-xxl-min);
    }

  }


</style>
