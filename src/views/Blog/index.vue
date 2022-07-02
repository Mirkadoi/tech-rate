<template>
  <section class="blog">
    <div class="back-button" @click="$router.push({name: 'blogs'})">
      <ArrowButton class="back-button__icon" />
      <span>back</span>
    </div>

    <post-content />
<!--    <recommendation />-->
  </section>
</template>

<script>
// import Recommendation from "@/views/Blog/_components/Recommendation";
import PostContent from "@/views/Blog/_components/PostContent";
import ArrowButton from '@/components/ArrowButton';

export default {
  components: { PostContent, ArrowButton },
}
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
