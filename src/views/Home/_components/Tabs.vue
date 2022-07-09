<template>
  <div class="tabs-wrapper">
    <div class="tabs-list">
      <p
        v-for="(tab) in tabs"
        :key="tab.code"
        :class="{'tab-selected': store.projectTabSelected === tab.code}"
        @click="handleSelectProjectTab(tab.code)"
        class="tab"
      >
        {{ tab.title }}
      </p>
    </div>
    <Table/>
  </div>
</template>

<script>
import Table from "@/views/Home/_components/Table";

import { store } from  "../_store/index"


export default {
  components: {
    Table
  },

  data: () => ({
    tabs: [
      {code: null, title:'All projects'},
      {code: 'Ethereum', title:'Ethereum projects'},
      {code: 'BSC', title:'BSC projects'}
    ]
  }),

  methods: {
    handleSelectProjectTab(tab) {
      store.setHomeStoreState('projectTabSelected', tab);
      store.goToProjectPage(1);
    }
  },

  setup() {
    return { store }
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
