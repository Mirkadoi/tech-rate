<template>
  <div class="topics-tag-categories" >
    <p>Filter by tag</p>

    <div class="tag-list">
      <template v-if="tags.length">
        <Chips class="tag" v-for="tag in tags" :key="tag.uid" :title="tag.name" :active="tag.uid === activeTag.uid" btn @onClick="filterBlogs(tag)" />
      </template>

      <template v-else>
        <p>...</p>
      </template>

    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';

  import Chips from '@/components/ui/Chips';

  import { getTagsList } from '@/views/Blogs/requests';
  import { store } from '@/views/Blogs/_store';

  export default defineComponent ({
    components: {
      Chips,
    },

    async created() {
      this.tags = await getTagsList()
    },

    methods: {
      filterBlogs(val) {
        if (this.activeTag.uid === val.uid) {
          this.activeTag = {};

          return store.setBlogList({page:1, size: 99 })

        } else {
          this.activeTag = val;

          return store.setBlogList({page:1, size: 99, tag: val.name })
        }
      }
    },


    setup() {
      const tags = ref([])
      const activeTag = ref({})

      return { tags, activeTag }
    }
  })
</script>

<style lang="scss" scoped>
  .topics-tag-categories {
    display: flex;
    gap: 20px;
    align-items: baseline;
    //margin-bottom: 15px;

    p {
      flex-shrink: 0;
      font-weight: 600;
      color: $text-color-black;
      //margin: 0 15px 0 0 ;
    }

    .tag-list {
      display: flex;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
    }
  }
</style>
