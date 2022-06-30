<template>
  <div class="wrapper-preview">
    <div class="wrapper-group">
      <div class="board">
        <template v-for="({ logo, title, number, subtitle}, index) in columns" :key="title">
          <div class="board-item">
            <img class="board-item__img" :src="require('@/assets/images/'+ logo +'.png')" :alt="logo">
            <span class="board-item__title">{{ title }}</span>
            <div class="board-item__number">{{ number }}</div>
            <span class="board-item__subtitle">{{ subtitle }}</span>
          </div>

          <div v-if="columns.length - 1 !== index" class="separator" />
        </template>
      </div>

      <div class="finder">
        <VSelect
            class="select"
            label="token"
            :noDrop="!options.length"
            :filterable="false"
            placeholder="Search project by name or token"
            :options="options"
            @search="onSearch"
        >
          <template #no-options>
            Type to search...
          </template>
          <template #search="{ attributes, events }">
            <InlineSvg  :src="require('@/assets/icons/magnifier.svg')" width="16" height="16" fill="#5E6A7B" />
            <input
                class="vs__search"
                v-bind="attributes"
                v-on="events"
            />
          </template>
        </VSelect>

      </div>
    </div>

    <div class="wrapper-carousel">
      <div class="carousel-controller">
        <ArrowButton @onClick="myCarousel.prev()" />
        <ArrowButton @onClick="myCarousel.next()" rotate />
        <!--        <ArrowButton @onClick="myCarousel.next()" rotate />-->
      </div>
      <Carousel ref="myCarousel" :settings="settings" :breakpoints="breakpoints">

        <template #slides>
          <Slide v-for="slide in slides" :key="slide.id" >
            <div v-if="slide.id === null" class="slide last-card">
              <div class="last-card__img" />
              <router-link :to="{ name: 'blogs'}">
                <div class="last-card__title" v-text="'Read all blogs'" />
              </router-link>
            </div>

            <Card v-else class="slide" :item="slide" />
          </Slide>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref
  } from 'vue';

  import {
    Carousel,
    Slide
  } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';

  import VSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css';

  import debounce from 'debounce';


  import Card from '@/components/ui/Card';
  import ArrowButton from '@/components/ArrowButton';


  export default defineComponent({
    components: {
      Carousel,
      Slide,
      Card,
      ArrowButton,
      VSelect
    },

    methods: {
      onSearch(search, loading) {
        if (search.length) {
          loading(true);
          this.search(loading, search, this);
        }
      },
      search: debounce((loading, search) => {
        fetch(
            `https://api.github.com/search/repositories?q=${escape(search)}`
        ).then(() => {
          // res.json().then(json => (vm.options = json.items));
        }).finally(() => loading(false));
      }, 350)
    },

    setup() {
      const columns = [
        { logo: 'rocket', title: 'Projects audited', number: 0, subtitle: 'Current finantial year' },
        { logo: 'binance-logo', title: 'BSC projects', number: 0, subtitle: 'Current finantial year' },
      ]

      const slides = [
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#1',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '1'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#2',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '2'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#3',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '3'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#4',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '4'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#5',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '5'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin and the Stock to Flow Model#6',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '6'
        },
        {
          img: 'https://via.placeholder.com/620x400',
          title: 'Bitcoin an Flow Model#7',
          tag: 'Crypto',
          date: 'Mar 4, 2022',
          id: '7'
        },
        {
          id: null
        },
      ]

      const settings = {
        itemsToShow: 1.5,
        // snapAlign: 'center',
        snapAlign: 'center',
      }

      const breakpoints = {
        // 576: {
        // itemsToShow: 2.5,
        // snapAlign: 'center',
        // },
        // 768: {
        //   itemsToShow: 5,
        //   snapAlign: 'start',
        // },
        // 1200: {
        //   itemsToShow: 2.5,
        //   // snapAlign: 'center',
        // },
        1400: {
          itemsToShow: 2.5,
          // snapAlign: 'start',
        },
        1800: {
          itemsToShow: 3.5,
          // snapAlign: 'start',
        },
      }

      const myCarousel = ref(null);
      const options = ref([]);

      return { columns, slides, breakpoints, settings, myCarousel, options }
    }
  })
</script>

<style scoped lang="scss">
  .wrapper-preview {
    display: flex;
    gap: 30px;
  }

  .wrapper-group {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    gap: 35px;
  }

  .wrapper-carousel {
    position: relative;
    width: calc(100% - 360px);

    //@media (min-width: #{variables.$screen-xxl-min}) {
    //  @content;
    //}
    //
    //@include xxl() {
    //  width: auto;
    //}
    //flex: 1 0 calc(100% - 389px);

    .carousel-controller {
      position: absolute;
      right: 0;
      top: -55px;
      display: flex;
      gap: 10px;
    }

    .slide {
      height: 100%;
      width: 394px;
    }
  }

  .board {
    display: flex;
    background-color: $color-white;
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

  .last-card{
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    border-radius: 20px;
    padding: 25px;
    gap: 35px;

    &__img {
      width: 100%;
      border-radius: 20px;
      height: 186px;
      background-image: url("/src/assets/images/read-all-blogs.png");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    }

    &__title {
      font-family: $font-base;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-decoration: none;
      color: $brand-color-pink;
    }

    a { text-decoration: none; }
  }

  //.finder {
  //
  //}

  :deep(.select) {
    .vs__dropdown-toggle,
    .vs__dropdown-menu {
      background-color: $color-white;
      padding: 16px;
      border: 1px solid $border-color-l1;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);
      border-radius: 8px;

      .vs__search {
        margin: 0;

        &::placeholder {
          font-family: $font-base;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #B5BAC2;
        }
      }

      .vs__actions {
        svg {
          display: none;
        }

        .vs__spinner, .vs__spinner:after {
          width: 20px;
          height: 20px;
        }
      }

      .vs__selected-options {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
