<template>
  <div class="wrapper-preview">
    <div class="wrapper-group">
      <div class="board">
        <template v-for="({ logo, title, number, subtitle}, index) in columns" :key="title">
          <div class="board-item" >
            <img class="board-item__img" :src="require('@/assets/images/'+ logo +'.png')" :alt="logo">
            <span class="board-item__title">{{ title }}</span>
            <div class="board-item__number">{{ number }}</div>
            <span class="board-item__subtitle">{{ subtitle }}</span>
          </div>

          <div v-if="columns.length - 1 !== index" class="separator" />
        </template>
      </div>

      <div class="finder">

      </div>
    </div>

    <div class="gallery">

    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    setup() {
      const columns = [
        {logo: 'rocket', title: 'Projects audited', number: 0, subtitle: 'Current finantial year'},
        {logo: 'rocket', title: 'BSC projects', number: 0, subtitle: 'Current finantial year'},
      ]
      return { columns }
    }
  })
</script>

<style scoped lang="scss">
  .board {
    display: flex;
    background: $color-white;
    border: 1px solid $border-color-l1;
    border-radius: 20px;

    .separator {
      align-self: center;
      width: 2px;
      height: 162px;
      background-color: $border-color-l1;
    }
  }

  .board-item {
    display: flex;
    flex-direction: column;
    font-family: $font-base;
    padding: 40px 30px 50px 30px;

    &__img {
      width: 24px;
      height: 24px;
      margin-bottom: 20px;
    }

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: $text-color-dark-blue;
    }

    &__subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $text-color-dark-blue;
    }

    &__number {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      color: $text-color-black;
    }
  }
</style>
