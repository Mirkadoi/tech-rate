<template>
  <div
      class="btn"
      :class="{[`btn--${mode}`]: mode, 'disabled': disabled, 'btn--block': block }"
      role="button"
      @click="$emit('onClick')"
  >
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, default: '' },
      mode: { type: String, default: 'primary'},
      block: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false}
    },
  }
</script>
