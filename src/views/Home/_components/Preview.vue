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

    <div class="wrapper-carousel">
      <div class="carousel-controller">
        <ArrowButton />
        <ArrowButton rotate />
      </div>
      <Carousel :items-to-show="2.5">
        <Slide v-for="slide in slides" :key="slide.id">
          <Card :item="slide" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';

  import Card from '@/components/ui/Card';
  import ArrowButton from '@/components/ArrowButton';


  export default defineComponent ({
    components: {
      Carousel,
      Slide,
      Card,
      ArrowButton,
    },

    setup() {
      const columns = [
        {logo: 'rocket', title: 'Projects audited', number: 0, subtitle: 'Current finantial year'},
        {logo: 'rocket', title: 'BSC projects', number: 0, subtitle: 'Current finantial year'},
      ]

      const slides = [
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#1', tag: 'Crypto', date: 'Mar 4, 2022', id: '1'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#2', tag: 'Crypto', date: 'Mar 4, 2022', id: '2'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#3', tag: 'Crypto', date: 'Mar 4, 2022', id: '3'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#4', tag: 'Crypto', date: 'Mar 4, 2022', id: '4'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#5', tag: 'Crypto', date: 'Mar 4, 2022', id: '5'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#6', tag: 'Crypto', date: 'Mar 4, 2022', id: '6'},
        { img: 'https://via.placeholder.com/620x400', title: 'Bitcoin and the Stock to Flow Model#7', tag: 'Crypto', date: 'Mar 4, 2022', id: '7'},
      ]

      return { columns, slides}
    }
  })
</script>

<style scoped lang="scss">
  .wrapper-preview {
    display: flex;
    gap: 30px;
  }

  .wrapper-group {
    flex: 0 1 100%;
  }

  .wrapper-carousel {
    position: relative;
    flex: 0 1 100%;

    .carousel-controller {
      position: absolute;
      right: 0;
      top: -55px;
      display: flex;
      gap: 10px;
    }
  }

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
    margin: auto;
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
