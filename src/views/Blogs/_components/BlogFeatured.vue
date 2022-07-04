<template>
  <div class="blog-featured" @click="redirectToBlog(post.uid)">
    <h4 class="blog-category">featured</h4>

    <div class="blog-img" :style="{ backgroundImage: `url(${post.image})` }" />

    <h3 class="blog-title">{{ post.name }}</h3>

    <div class="blog-footer">
      <div class="body-tags">
        <Chips v-for="tag in post.tags" :key="tag" class="body-tags__tag" :title="tag" />
      </div>

      <span class="blog-date" v-if="post.created">{{
          new Date(post.created).toLocaleDateString('en-us', {
            month: 'short',
            year: 'numeric',
            day: 'numeric'
          })
        }}</span>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';

  import { getBlogList } from '@/views/Blogs/requests';

  import Chips from '@/components/ui/Chips';

  export default {
    components: {
      Chips,
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

    .blog-img {
      width: 100%;
      height: 287px;
      border-radius: 8px;
      background-size: cover;
      background-position: center center;
      margin: 0 0 30px;
    }

    .blog-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      margin: 0 0 20px;
    }

    .blog-footer {
      display: flex;
      gap: 10px;
    }

    .blog-date {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: $text-color-dark-blue;
      //margin: 0 0 16px;
      display: block;
    }

    .blog-tags {
      display: flex;
      align-items: baseline;
      gap: 5px;
    }
  }
</style>
