<template>
  <section class="blog">
    <button class="back-button" @click="$router.push({name: 'blogs'})"/>

    <post-content />
    <recommendation />
  </section>
</template>

<script>
import Recommendation from "@/views/Blog/_components/Recommendation";
import PostContent from "@/views/Blog/_components/PostContent";

export default {
  components: { Recommendation, PostContent }
}
</script>

<style scoped lang="scss">
.blog {
  font-family: 'Open Sans';
  width: 100%;
  padding: 0 100px;
  position: relative;

  .back-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 40px;
    left: 100px;
    width: 30px;
    height: 30px;
    border: 1px solid #E4E4E4;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    background: $color-white;

    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-bottom: 2px solid $text-color-black;
      border-left: 2px solid $text-color-black;
      transform: rotate(45deg);
    }
  }
}
</style>
