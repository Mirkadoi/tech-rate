<template>
  <div class="tabs-wrapper">
    <div class="tabs-list">
      <p
        v-for="(tab) in tabs"
        :key="tab.code"
        :class="{'tab-selected': store.selectedProject === tab.code}"
        @click="store.setSelectedProject(tab.code)"
        class="tab"
      >
        {{ tab.title }}
      </p>
    </div>
<!--TODO убрать пропс blockchain-->
    <Table :blockchain="store.selectedProject"/>
<!--    <Table v-show="store.selectedProject === 'ethereum'" blockchain="ethereum"/>-->
<!--    <Table v-show="store.selectedProject === 'bsc'" blockchain="bsc"/>-->
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
      {code: '', title:'All projects'},
      {code: 'Etherium', title:'Ethereum project'},
      {code: 'BSC', title:'BSC projects'}
    ]
  }),

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
