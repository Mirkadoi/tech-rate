<template>
  <section class="blog">
    <blog-category category-name="Latest Releases"/>
    <blog-category category-name="Essentials"/>
    <blog-category category-name="Blockchain"/>
    <subscription/>
  </section>
</template>

<script>
  import Subscription from "@/views/Blogs/_components/Subscription";
  import BlogCategory from "@/views/Blogs/_components/BlogCategory";

  export default {
    components: {
      Subscription,
      BlogCategory
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    font-family: $font-base;
    color: $text-color-black;
  }
</style>
