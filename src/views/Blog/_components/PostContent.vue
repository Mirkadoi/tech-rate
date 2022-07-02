<template>
  <div class="post-wrapper">
    <div class="post-content">
      <div class="post-img" :style="{ backgroundImage: `url(${blog.image})` }" />
      <h1 class="post-title">{{ blog.name }}</h1>

      <div class="post-details">
        <div class="tags">
          <Chips v-for="tag in blog.tags" :key="tag" class="body-tags__tag" :title="tag" />
        </div>

        <span class="date" v-if="blog.created">{{
            new Date(blog.created).toLocaleDateString('en-us', {
              month: 'short',
              year: 'numeric',
              day: 'numeric'
            })
          }}
        </span>
      </div>

      <div v-html="blog.text" />
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref
  } from 'vue';

  import { getBlogById } from '@/views/Blog/requests';

  import Chips from '@/components/ui/Chips';

  export default defineComponent({
    components: {
      Chips,
    },

    async created() {

      this.blog = await getBlogById(this.$route.params.uid)
    },

    setup() {
      const blog = ref({});

      return { blog }
    },
  })
</script>


<style scoped lang="scss">
  .post-wrapper {
    display: flex;
    justify-content: center;
    background-color: $color-white;
    margin: 0 -100px;

    .post-content {
      padding: 44px 0 70px;
      width: 662px;

      .post-img {
        width: 100%;
        height: 368px;
        border-radius: 8px;
        background-size: cover;
        background-position: center center;
      }

      .post-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 120%;
        color: $text-color-black;
        margin-bottom: 30px;
      }

      .post-details {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 50px;

        .date {
          font-size: 14px;
          line-height: 19px;
          color: $text-color-dark-blue;
        }
      }
    }
  }
</style>
