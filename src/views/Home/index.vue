<template>
  <div class="container-home">
    <Headline class="headline" title="TechRate" subtitle="Provable Trust For All"/>

    <Preview />

    <Tabs />

    <Trends />
  </div>
</template>

<script setup>
  import { resetStore } from './_store/index'
  import { onBeforeRouteLeave } from 'vue-router'


  import Headline from '@/components/Headline';
  import Trends from "@/views/Home/_components/Trends";
  import Tabs from "@/views/Home/_components/Tabs";
  import Preview from "@/views/Home/_components/Preview";

  onBeforeRouteLeave(() => {
    resetStore()
  })
</script>

<style scoped lang="scss">
  .container-home {
    width: 100%;
    padding: 55px 100px 80px 100px;
    font-family: $font-base;
    color: $text-color-black;
    box-sizing: border-box;
  }

  .headline {
    margin-bottom: 44px;
  }
</style>
