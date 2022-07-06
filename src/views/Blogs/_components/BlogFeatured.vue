<template>
  <div class="blog-featured" @click="redirectToBlog(post.uid)">
    <h4 class="blog-category">featured</h4>

    <Card class="blog-card" :item="post" />
  </div>
</template>

<script>
  import { ref } from 'vue';

  import { getBlogList } from '@/views/Blogs/requests';

  // import Chips from '@/components/ui/Chips';
  import Card from '@/components/ui/Card';

  export default {
    components: {
      Card,
    },

    async created() {
      const { results } = await getBlogList({ page: 1, size: 1 });

      this.post = { ...results[0] }
    },

    methods: {
      redirectToBlog(uid) {
        this.$router.push({ name: 'blog', params: { uid } })
      },
    },

    setup() {
      const post = ref({})

      return { post }
    }
  }
</script>

<style scoped lang="scss">
  .blog-featured {
    cursor: pointer;
    margin-right: -100px;
    padding: 46px 100px 30px 30px;
    background: $background-colors-white;
    border: 1px solid $border-color-l1;
    border-radius: 0px 0px 0px 8px;

    .blog-category {
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin: 0 0 8px;
    }

    .blog-card {
      background-color: $background-colors-white;
    }

    :deep(.blog-card) {
      .card__img {
        height: 287px;
      }

      .body {
        padding: 30px 0 0 0;
      }

      .body__header {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
      }
    }
  }
</style>
