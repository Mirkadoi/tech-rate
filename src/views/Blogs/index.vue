<template>
  <section class="blog">
    <div class="blog-top">
      <blog-about/>
      <blog-featured/>
    </div>

    <tags-filter class="tags" />

    <blog-category category-name="Latest Releases"/>

<!--    <topics/>-->

<!--    <blog-category category-name="Essentials"/>-->
<!--    <blog-category category-name="Blockchain"/>-->
<!--    <subscription/>-->
  </section>
</template>

<script>
  // import Subscription from "@/views/Blogs/_components/Subscription";
  import BlogCategory from "@/views/Blogs/_components/BlogCategory";
  import BlogAbout from "@/views/Blogs/_components/BlogAbout";
  import BlogFeatured from "@/views/Blogs/_components/BlogFeatured";
  import TagsFilter from '@/views/Blogs/_components/TagsFilter';
  // import Topics from "@/views/Blogs/_components/Topics";

  export default {
    components: {
      // Subscription,
      BlogCategory,
      BlogAbout,
      BlogFeatured,
      TagsFilter
      // Topics
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    font-family: $font-base;
    color: $text-color-black;
    padding: 0 100px;
    background: $color-white;
    box-sizing: border-box;

    .blog-top {
      display: flex;
      margin-bottom: 60px;

      & > * {
        flex: 1;
      }
    }
  }

  .tags {
    margin-bottom: 30px;
  }
</style>
