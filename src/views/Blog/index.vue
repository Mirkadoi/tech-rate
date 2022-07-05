<template>
  <section class="blog">
    <div class="back-button" @click="$router.go(-1)" :style="{transform: `translateY(${translateY}px)`}">
      <ArrowButton class="back-button__icon" />
      <span>back</span>
    </div>

    <post-content id="post-content" />
    <!--    <recommendation />-->
  </section>
</template>

<script setup>
  import {
    onMounted,
    onBeforeUnmount,
    ref
  } from 'vue';
  import PostContent from "@/views/Blog/_components/PostContent";
  import ArrowButton from '@/components/ArrowButton';

  // import { throttle } from "js-debounce-throttle";

  const translateY = ref(0)

  onMounted(() => {
    document.addEventListener("scroll",
        () => {
          const documentTop = document.body.getBoundingClientRect().top;

          if (documentTop >= '-88') {
            translateY.value = documentTop;
          } else  {
            translateY.value = -88;
          }
        }
    );
  })

  onBeforeUnmount(() => window.removeEventListener("scroll", () => {
  }))
</script>

<style scoped lang="scss">
  .blog {
    font-family: $font-base;
    background-color: #f4f4f4;
    width: 100%;
    padding: 0 100px;
    position: relative;

    .back-button {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 120px;
      left: 100px;
      cursor: pointer;
      background-color: $color-white;
      text-transform: uppercase;

      span {
        padding: 5px 15px 5px 25px;
        border: 1px solid #E4E4E4;
        border-radius: 4px;
      }

      &__icon {
        filter: none;
        margin-right: -15px;
        z-index: 10;
      }
    }
  }
</style>
