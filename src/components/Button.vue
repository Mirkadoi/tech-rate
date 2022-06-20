<template>
  <div
      class="btn"
      :class="{[`btn--${mode}`]: mode, 'disabled': disabled }"
      role="button"
      @click="$emit('click')"
  >
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, default: '' },
      mode: { type: String, default: 'primary'},
      disabled: { type: Boolean, default: false}
    },
  }
</script>

<style scoped lang="scss">

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;

    &--primary {
      padding: 9px 20px;
      color: $background-colors-white;
      background-color: $button-color-pink-l1;

      &:hover {
        background-color: $button-color-pink-l2;
      }

      &:active {
        background-color: $button-color-pink-l3;
      }

      &.disabled {
        background-color: $button-color-pink-l4;
        pointer-events: none;
      }
    }

    &--secondory {

    }
  }
</style>
