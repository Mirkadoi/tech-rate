<template>
  <div class="chips" :class="{pointer: btn}" @click="$emit('onClick')">
    {{ title }}
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    props: {
      title: {type: String, required: true},
      btn: {type: Boolean, default: false}
    }
  })
</script>

<style lang="scss" scoped>
  .chips {
    background: rgba(249, 0, 116, 0.1);
    border-radius: 8px;
    padding: 3px 10px;
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $brand-color-pink;
  }

  .pointer {
    cursor: pointer;
  }
</style>
