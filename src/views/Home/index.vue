<template>
  <section class="container">
    <Headline title="TechRate" subtitle="Provable Trust For All"/>

    <Tabs />
    <Trends />
  </section>
</template>

<script>
  import { defineComponent } from 'vue';

  import Headline from '@/components/Headline';
  import Trends from "@/views/Home/_components/Trends";
  import Tabs from "@/views/Home/_components/Tabs";

  export default defineComponent ({
    components: {
      Headline,
      Trends,
      Tabs
    }
  })
</script>

<style scoped lang="scss">
  .container {
    padding: 55px 100px 80px 100px;
    font-family: 'Open Sans';
    color: #17181E;
  }
</style>
