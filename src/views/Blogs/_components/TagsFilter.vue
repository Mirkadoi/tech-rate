<template>
  <div class="topics-tag-categories" >
    <p>Filter by tag</p>

    <div class="tag-list">
      <template v-if="tags.length">
        <Chips class="tag" v-for="tag in tags" :key="tag.uid" :title="tag.name" btn />
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

  import { getTagsList } from '@/views/Blog/requests';

  export default defineComponent ({
    components: {
      Chips,
    },

    created() {
      this.init()
    },

    methods: {
      async init () {
        this.tags = await getTagsList()
      }
    },

    setup() {
      const tags = ref([])

      return { tags }
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
