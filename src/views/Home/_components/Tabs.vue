<template>
  <div class="tabs-wrapper">
    <div class="tabs-list">
      <p
        v-for="(tab) in tabs"
        :key="tab.code"
        :class="{'tab-selected': selectedTab === tab.code}"
        @click="handleTab(tab.code)"
        class="tab"
      >
        {{ tab.title }}
      </p>
    </div>

    <Table :blockchain="selectedTab"/>
<!--    <Table v-show="selectedTab === 'ethereum'" blockchain="ethereum"/>-->
<!--    <Table v-show="selectedTab === 'bsc'" blockchain="bsc"/>-->
  </div>
</template>

<script>
import Table from "@/views/Home/_components/Table";


export default {
  components: {
    Table
  },

  data: () => ({
    selectedTab: '',
    tabs: [
      {code: '', title:'All projects'},
      {code: 'Etherium', title:'Ethereum project'},
      {code: 'BSC', title:'BSC projects'}
    ]
  }),

  methods: {
    handleTab(code) {
      this.selectedTab = code
    },
  }
}
</script>

<style scoped lang="scss">
  .tabs-list {
    display: flex;
    padding-top: 60px;

     p {
       margin: 0;
     }

    .tab {
      font-weight: 700;
      font-size: 16px;
      line-height: 120%;
      color: #5E6A7B;
      margin-right: 30px;
      cursor: pointer;
      padding-bottom: 15px;
    }

    .tab-selected {
      color: $brand-color-pink;
      border-bottom: 3px solid $brand-color-pink;
    }
  }
</style>
