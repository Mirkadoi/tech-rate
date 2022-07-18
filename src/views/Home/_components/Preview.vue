<template>
  <div class="wrapper-preview">
    <div class="wrapper-group">
      <div class="board">
        <template v-for="({ logo, title, code}, index) in columns" :key="title">
          <div class="board-item">
            <img class="board-item__img" :src="require('@/assets/images/'+ logo +'.png')" :alt="logo">
            <span class="board-item__title">{{ title }}</span>
            <div class="board-item__number">{{ value[code] }}</div>
            <span class="board-item__subtitle">{{ subtitle[code] }}</span>
          </div>

          <div v-if="columns.length - 1 !== index" class="separator" />
        </template>
      </div>

      <SearchSelect />
    </div>

    <TopCarousel />
  </div>
</template>

<script>
  import {
    defineComponent,
    ref,
  } from 'vue';

  import TopCarousel from '@/views/Home/_components/TopCarousel';
  import SearchSelect from '@/views/Home/_components/SearchSelect';

  import {
    getBSCAudited,
    getProjectsAudited, getProjectsAuditedSubtitle
  } from "@/views/Home/requests";

  export default defineComponent({
    components: {
      TopCarousel,
      SearchSelect,
    },

    methods: {
      formatNumber(value = 0) {
        return new Intl.NumberFormat('en-GB', {
          notation: "compact",
          compactDisplay: "short"
        }).format(value);
      },
    },

    async created() {
      const { count: allCount } = await getProjectsAudited()
      const { blockchains_count: blockchainsCount } = await getBSCAudited()
      const { results } = await getProjectsAuditedSubtitle()

      this.value.all = this.formatNumber(allCount);
      this.value.bsc = this.formatNumber(blockchainsCount);
      this.subtitle.all = `Since ${new Date(results[0]['audit_date'])
        .toLocaleDateString('en-us', { month: 'short', year: 'numeric' })}`;
    },

    setup() {
      const columns = [
        { logo: 'rocket', title: 'Projects audited', code: 'all' },
        { logo: 'blockchain-logo', title: 'Different blockchains', code: 'bsc' },
      ]

      const value = ref({ all: 0, bsc: 0 })
      const subtitle = ref({ all: '...', bsc: 'Supported by Techrate' })

      return { columns, value, subtitle}
    }
  })
</script>

<style scoped lang="scss">
  .wrapper-preview {
    display: flex;
    gap: 30px;
  }

  .wrapper-group {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    gap: 35px;
  }

  .board {
    display: flex;
    background-color: $color-white;
    border: 1px solid $border-color-l1;
    border-radius: 20px;

    .separator {
      align-self: center;
      width: 2px;
      height: 162px;
      background-color: $border-color-l1;
    }
  }

  .board-item {
    display: flex;
    margin: auto;
    flex-direction: column;
    font-family: $font-base;
    padding: 40px 30px 50px 30px;

    &__img {
      width: 24px;
      height: 24px;
      margin-bottom: 20px;
    }

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: $text-color-dark-blue;
    }

    &__subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $text-color-dark-blue;
    }

    &__number {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      color: $text-color-black;
    }
  }


  //.finder {
  //
  //}


</style>
