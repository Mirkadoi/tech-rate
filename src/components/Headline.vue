<template>
  <div class="wrapper">
    <h1 class="title">{{ title }}</h1>
    <h5 class="subtitle">{{ subtitle }}</h5>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
      props: ['title', 'subtitle']
  })
</script>

<style scoped lang="scss">
  .title {
    font-family: $font-alt;
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    line-height: 68px;
    color: $text-color-black;
    margin: 0;
  }

  .subtitle {
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: $text-color-dark-blue;
    margin: 0;
  }
</style>
