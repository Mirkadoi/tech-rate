<template>
  <section class="blog">
    <div class="blog-top">
      <blog-about/>
      <blog-featured/>
    </div>

    <blog-category category-name="Latest Releases"/>
    <blog-category category-name="Essentials"/>
    <blog-category category-name="Blockchain"/>
    <subscription/>
  </section>
</template>

<script>
  import Subscription from "@/views/Blogs/_components/Subscription";
  import BlogCategory from "@/views/Blogs/_components/BlogCategory";
  import BlogAbout from "@/views/Blogs/_components/BlogAbout";
  import BlogFeatured from "@/views/Blogs/_components/BlogFeatured";

  export default {
    components: {
      Subscription,
      BlogCategory,
      BlogAbout,
      BlogFeatured
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    font-family: $font-base;
    color: $text-color-black;
    padding: 0 100px;
    background: $color-white;

    .blog-top {
      display: flex;

      & > * {
        flex: 1;
      }
    }
  }
</style>
