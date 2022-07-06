<template>
  <div class="post-wrapper">
    <div class="post-content">
      <Card v-if="blog.name" class="post-content__card" :item="blog"></Card>

      <div v-show="blog.text" v-html="blog.text" />
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref
  } from 'vue';

  import { getBlogById } from '@/views/Blog/requests';
  import Card from '@/components/ui/Card';

  export default defineComponent({
    components: {
      Card,
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

      &__card {
        height: 630px;
      }

      :deep(.post-content__card) {
        .card__img {
          height: 368px;
        }

        .body {
          padding: 48px 0 0 0;
        }

        .body__header {
          font-weight: 700;
          font-size: 46px;
          line-height: 120%;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
