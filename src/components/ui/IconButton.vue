<template>
  <div class="btn-icon">
    <slot>
      <InlineSvg :src="require('@/assets/icons/' + icon + '.svg')" :width="width" :height="height" :title="title"/>
    </slot>
  </div>
</template>

<script>
  import { defineComponent } from 'vue/dist/vue';

  export default defineComponent ({
    props: {
      icon: { type: String, default: ''},
      width: { type: String, default: ''},
      height: { type: String, default: ''},
      fill: { type: String, default: ''},
      title: { type: String, default: ''},
    }
  })
</script>
