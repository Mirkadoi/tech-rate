<template>
  <div class="tabs-wrapper">
    <div class="tabs-list">
      <p
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{'tab-selected': selectedTab === i}"
        @click="selectedTab = i"
        class="tab"
      >
        {{ tab }}
      </p>
    </div>

    <Table v-show="selectedTab === 0"/>

    <p v-show="selectedTab === 1">2</p>
    <p v-show="selectedTab === 2">3</p>
  </div>
</template>

<script>
import Table from "@/views/Home/_components/Table";

export default {
  components: {
    Table
  },

  data: () => ({
    selectedTab: 0,
    tabs: [
      'Leading projects',
      'Leading projects 2',
      'Leading projects 3'
    ]
  })
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
      color: #F90074;
      border-bottom: 3px solid #F90074;
    }
  }
</style>
