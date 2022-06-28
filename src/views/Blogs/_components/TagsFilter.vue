<template>
  <div class="topics-tag-categories">
    <p>Filter by tag</p>

    <div class="tag-list">
      <Chips class="tag" v-for="tag in tags" :key="tag" :title="tag" />
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import Chips from '@/components/ui/Chips';

  export default defineComponent ({
    components: {
      Chips,
    },

    setup() {
      const tags = ref(['Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics','Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics',
    ])

      return { tags }
    }
  })
</script>

<style lang="scss" scoped>
  .topics-tag-categories {
    display: flex;
    gap: 20px;
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
    }
  }
</style>
