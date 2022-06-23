<template>
  <section class="container">
    <Headline title="TechRate" subtitle="Provable Trust For All"/>
    <Table/>
    <Trends/>
  </section>
</template>

<script>
  import { defineComponent } from 'vue';

  import Headline from '@/components/Headline';
  import Table from "@/components/Table";
  import Trends from "@/components/Trends";

  export default defineComponent ({
    components: {
      Headline,
      Table,
      Trends
    }
  })
</script>

<style scoped lang="scss">
  .container {
    padding: 55px 100px 80px 100px;
  }
</style>
