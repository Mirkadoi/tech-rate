<template>
  <section class="container">
    <Headline title="TechRate" subtitle="Provable Trust For All"/>
  </section>
</template>

<script>
  import { defineComponent } from 'vue';

  import Headline from '@/components/Headline';

  export default defineComponent ({
    components: {
      Headline,
    }
  })
</script>

<style scoped lang="scss">
  .container {
    padding: 55px 100px 80px 100px;
  }
</style>
