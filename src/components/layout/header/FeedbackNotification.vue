<template>
  <div class="modal-wrapper">
    <div class="btn-close" @click="$emit('closeModal')">
      <InlineSvg :src="require('@/assets/icons/close.svg')" width="12" height="12" title="Закрыть"/>
    </div>

    <div class="info">
      <InlineSvg class="info__icon" :src="require('@/assets/icons/check-circle.svg')" width="60" height="60"/>

      <div class="info__message">
        <span>Thank you for your message!</span>
        <br>
        <span>We will reply shortly.</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    emits: ['closeModal'],

  })
</script>

<style lang="scss" scoped>
  .modal-wrapper {
    padding: 30px 25px 50px 25px;
  }

  .btn-close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    margin-left: auto;
    cursor: pointer;

    svg {
      fill: $text-color-gray;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: -5px;

    &__message {
      font-family: $font-base;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: $text-color-black;
    }
  }
</style>
