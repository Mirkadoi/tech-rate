<template>
  <div class="chips" :class="{pointer: btn, active: active}" @click="$emit('onClick')">
    {{ title }}
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    props: {
      title: {type: String, required: true},
      btn: {type: Boolean, default: false},
      active: {type: Boolean, default: false},
    }
  })
</script>

<style lang="scss" scoped>
  .chips {
    background-color: rgba(249, 0, 116, 0.1);
    border-radius: 8px;
    padding: 3px 10px;
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $brand-color-pink;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
  }

  .pointer {
    cursor: pointer;
  }

  .active {
    background-color: rgba(249, 0, 116, 0.3);
    color: $background-colors-white;
  }
</style>
