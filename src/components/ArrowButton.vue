<template>
  <div class="btn-arrow" :class="{'disabled': disabled}" :title="title" @click="$emit('onClick')">
    <InlineSvg class="btn-arrow__icon" :class="{'rotate': rotate}" :src="require('@/assets/icons/arrow-outline.svg')" width="6" height="12" fill="#17181E" />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    props: {
      rotate: {
        type: Boolean,
        default: false,
      },

      disabled: {
        type: Boolean,
        default: false,
      }
    },

    computed: {
      title() {
        return this.rotate ? 'Назад' : 'Вперед'
      }
    }
  })
</script>

<style lang="scss" scoped>
  .btn-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
    background-color: $color-white;
    transition: background-color 0.3s ease-in;
    border: 1px solid #E4E4E4;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #F5F5F5;
    }

    &:active {
      background-color: $color-white;
    }

    &.disabled {
      background: transparent;
      filter: none;
      pointer-events: none;

      svg {
        fill: #B9BABB;
      }
    }

    .rotate {
      transform: rotate(180deg);
    }
  }
</style>
