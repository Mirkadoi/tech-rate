<template>
  <div class="wrapper">
    <InlineSvg :src="require('@/assets/icons/tech-rate-logo.svg')" width="83" height="32" fill="white" title="TechRate"/>

    <span class="text">@ 2018 by TechRate. All Rights Reserved</span>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({

  })
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .text {
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $text-color-gray;
  }
</style>
