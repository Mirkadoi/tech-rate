<template>
  <p class="param d-flex" :class="[param.stocks ? 'up' : 'down']">{{ param.value }}</p>
</template>

<script>
export default {
  props: {
    param: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>

<style scoped lang="scss">
  .param {
    justify-content: end;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      margin-right: 7px;
    }

    &.up {
      color: #388E3C;
      &::before {
        border-left: 4.5px solid transparent;
        border-right: 4.5px solid transparent;
        border-bottom: 5px solid #388E3C;
      }
    }

    &.down {
      color: #FF5555;
      &::before {
        border-left: 4.5px solid transparent;
        border-right: 4.5px solid transparent;
        border-top: 5px solid #FF5555;
      }
    }
  }
</style>
