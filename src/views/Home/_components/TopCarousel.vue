<template>
  <div class="container-carousel" ref="myCarouselWrapper">
    <div class="carousel-controller">
      <ArrowButton @onClick="myCarousel.prev()" :disabled="isDisabledCarouselPagination === 1" />
      <ArrowButton @onClick="myCarousel.next()" :disabled="isDisabledCarouselPagination === 2" rotate />
    </div>
    <Carousel ref="myCarousel" v-model="currentSlide" :settings="settings" :breakpoints="breakpoints">

      <template #slides>
        <Slide v-for="slide in slides" :key="slide.uid">
          <div v-if="slide.uid === null" class="slide last-slide" @click="$router.push({ name: 'blogs'})">
            <div class="last-slide__img" />
            <div class="last-slide__title" v-text="'Read all blogs'" />
          </div>

          <Card v-else  class="slide" :item="slide" @click="$router.push({ name: 'blog', params: { uid: slide.uid } })" />

        </Slide>
      </template>
    </Carousel>
  </div>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue3-carousel';

  import 'vue3-carousel/dist/carousel.css';

  import Card from '@/components/ui/Card';
  import ArrowButton from '@/components/ArrowButton';

  import {
    defineComponent,
    ref,
    nextTick,
    watch
  } from 'vue';

  import { getBlogList } from '@/views/Blogs/requests';

  export default defineComponent({
    components: {
      Carousel,
      Slide,
      Card,
      ArrowButton,
    },

    async created() {
      const { results } = await getBlogList({ page: 1, size: 5 });

      this.slides = [...results, { uid: null }];
    },

    setup() {
      // const slides = [
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#1',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '1'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#2',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '2'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#3',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '3'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#4',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '4'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#5',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '5'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin and the Stock to Flow Model#6',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '6'
      //   },
      //   {
      //     img: 'https://via.placeholder.com/620x400',
      //     title: 'Bitcoin an Flow Model#7',
      //     tag: 'Crypto',
      //     date: 'Mar 4, 2022',
      //     uid: '7'
      //   },
      //   {
      //     uid: null
      //   },
      // ]
      const slides = ref([])

      const settings = {
        itemsToShow: 1.5,
        // snapAlign: 'center',
        snapAlign: 'start',
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
        1600: {
          itemsToShow: 2.5,
          // snapAlign: 'start',
        },
        1900: {
          itemsToShow: 3.5,
          // snapAlign: 'start',
        },
      }

      const myCarousel = ref(null);
      const myCarouselWrapper = ref(null);

      const currentSlide = ref(0);
      const isDisabledCarouselPagination = ref(1)

      watch(currentSlide, async () => {
        await nextTick()

        const existPrev = myCarouselWrapper.value.querySelector('.carousel__slide--prev')
        const existNext = myCarouselWrapper.value.querySelector('.carousel__slide--next')

        if(existNext && existPrev) {
          return isDisabledCarouselPagination.value = 0;
        }
        if (!existPrev) {
          //disabled prev
          return isDisabledCarouselPagination.value = 1;
        }
        if (!existNext) {
          //disabled next
          return isDisabledCarouselPagination.value = 2;
        }

      })

      return {slides, settings, breakpoints, myCarousel, myCarouselWrapper, currentSlide, isDisabledCarouselPagination}
    }
  })
</script>

<style lang="scss" scoped>
  .container-carousel {
    position: relative;
    width: calc(100% - 360px);

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
      cursor: pointer;
    }
  }

  .last-slide {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    border-radius: 20px;
    padding: 25px;
    gap: 35px;

    a {
      text-decoration: none;
    }

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

    a {
      text-decoration: none;
    }
  }
</style>
