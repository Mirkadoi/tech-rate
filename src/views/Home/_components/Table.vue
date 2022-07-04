<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(el, i) in tableHeader" :key="i" @click="sort(el.key, el.sort)">
            <p class="d-flex">
              {{ el.text }}
              <span class="arrows" :class="{
                'dub-arrow': el.sort === 0,
                'up': el.sort === 1,
                'down': el.sort === 2,
              }"/>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in store.projectTokenList" :key="i" :class="{partner: el['is_partner']}">
          <td>{{ el.number }}</td>

          <td>
            <div class="d-flex">
              <img :src="el.image" width="24" height="24">
              <p>{{ el.name }}</p>
            </div>
          </td>

          <td class="pie-chart">
            <pie-chart :value="el.score"/>
          </td>

          <td>{{ el.blockchain }}</td>
          <td>{{ el.category }}</td>

          <td class="audit">
            <a v-if="el.audit" :href="el.audit" target="_blank">
              <InlineSvg :src="require('@/assets/icons/pdf.svg')" width="24" height="24" fill="#17181E" :title="el.audit" />
            </a>
<!--            <img :src="el.audit.img" width="24" height="24">-->
<!--            <p>{{ el.audit.value }}</p>-->
          </td>

<!--          <td>{{ el.price }}</td>-->

<!--          <td>-->
<!--            <Stock :param="el.security"/>-->
<!--          </td>-->

<!--          <td>-->
<!--            <Stock :param="el.last"/>-->
<!--          </td>-->

<!--          <td>{{ el.market }}</td>-->
<!--          <td>{{ el.volume }}</td>-->
          <td>{{ new Date(el['audit_date']).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>

    <div class="no-data" v-if="!store.projectTokenList.length">
      No data
    </div>

    <table-controls
      @prev="prevPage"
      @next="nextPage"
      @goToPage="currentPage = $event"
      :values="store.projectTokenList"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PieChart from "@/views/Home/_components/PieChart";
// import Stock from "@/views/Home/_components/Stock";
import TableControls from "@/views/Home/_components/TableControls";

import { store } from '../_store/index'

export default defineComponent({
  components: {
    // Stock,
    TableControls,
    PieChart
  },

  props: ['blockchain'],

  data: () => ({
    tableHeader: [
      { text: '#', key: 'number' },
      { text: 'Name', key: 'name', sort: 0 },
      { text: 'Score', key: 'score', sort: 0 },
      { text: 'Blockchain', key: 'blockchain', sort: 0 },
      { text: 'Category', key: 'category', sort: 0 },
      { text: 'Audit', key: 'audit', sort: 0 },
      // { text: 'Price', key: 'price' },
      // { text: 'Security Score/24h', key: 'security' },
      // { text: 'Last 7 days', key: 'last' },
      // { text: 'Market Cap', key: 'market' },
      // { text: 'Volume (24h)', key: 'volume' },
      { text: 'Date', key: 'date', sort: 0 },
    ],
    currentSort:'name',
    currentSortDir:'asc',
    pageSize: 20,
    currentPage:1
  }),

  methods:{
    // async getItems(queries = {page: this.currentPage}) {
    //   const { results } = await getTokenList({blockchain: this.blockchain , size: this.pageSize, ...queries});
    //
    //   store.projectTokenList = results;
    // },

    sort(column, sortNum) {
      const dic = {
        0: 'default',
        1: 'asc',
        2: 'desc'
      }

      if(column !== this.currentSort)  {
        this.tableHeader = this.tableHeader.map((el) => {
          if (this.currentSort === el.key) return {...el, sort: 0}
          return el;
        })
      }

      let newSortNum = sortNum;
      this.currentSort = column;

      if (sortNum >= 2) {
        this.tableHeader = this.tableHeader.map((el) => {
          if (column === el.key) return {...el, sort: 0}
          return el;
        })
        return store.getAllProjectItems({ page: this.currentPage})
      } else {
        newSortNum += 1

        this.tableHeader = this.tableHeader.map((el) => {
          if (column === el.key) return {...el, sort: newSortNum}
          return el;
        })
        return store.getAllProjectItems({ page: this.currentPage, field: column, sort: dic[newSortNum] })
      }
    },
    nextPage() {
      if((this.currentPage*this.pageSize) < store.projectTokenList.length) this.currentPage++;
    },
    prevPage() {
      if(this.currentPage > 1) this.currentPage--;
    },

  },

  computed:{
    // sortedValues() {
    //   if (this.currentSortDir === 'default') {
    //     return [...store.projectTokenList]
    //   }
    //
    //   return [...store.projectTokenList].sort((a,b) => {
    //     let modifier = 1;
    //
    //     if(this.currentSortDir === 'desc') modifier = -1;
    //
    //     const aItem = a[this.currentSort].value || a[this.currentSort]
    //     const bItem = b[this.currentSort].value || b[this.currentSort]
    //
    //     if(aItem < bItem) return -1 * modifier;
    //     if(aItem > bItem) return 1 * modifier;
    //     return 0;
    //   }).filter((row, index) => {
    //     let start = (this.currentPage-1)*this.pageSize;
    //     let end = this.currentPage*this.pageSize;
    //     if(index >= start && index < end) return true;
    //   });
    // }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        store.getAllProjectItems({page: val});
      }
    },
    blockchain() {
      store.getAllProjectItems();
    }
  },

  setup() {
    return { store }
  }
})
</script>

<style scoped lang="scss">
  .d-flex {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .table-wrapper {
    background-color: $color-white;
    border-radius: 8px;
    padding: 0 10px;
  }

  table {
    border-spacing: 0px;
    font-weight: 400;
    width: 100%;

    thead {
      font-size: 12px;
      line-height: 16px;
      th {
        padding-top: 25px;
        padding-right: 15px;
        padding-left: 15px;
        cursor: pointer;
        user-select: none;

        &:first-child,
        &:nth-child(2) {
          p {
            justify-content: start;
          }
        }

        p {
          justify-content: center;
        }

        .arrows {
          display: block;
          width: 9px;
          height: 12px;
          position: relative;
          margin-left: 6px;

          &.dub-arrow{
            &::before, &::after {
              content: '';
              position: absolute;
              left: 0;
              display: block;
              border-left: 4.5px solid transparent;
              border-right: 4.5px solid transparent;
              border-bottom: 5px solid #C4C4C4;
            }
          }

          &::before {
            top: 0;
          }

          &::after {
            bottom: 0;
            transform: rotate(180deg);
          }

          &.up {
            &::after {
              display: none;
            }
            &::before {
              content: '';
              position: absolute;
              left: 0;
              display: block;
              border-left: 4.5px solid transparent;
              border-right: 4.5px solid transparent;
              border-bottom: 5px solid #C4C4C4;
              bottom: 3px;
              border-bottom-color: #388E3C;
            }
          }

          &.down {
            &::after {
              content: '';
              position: absolute;
              left: 0;
              display: block;
              border-left: 4.5px solid transparent;
              border-right: 4.5px solid transparent;
              border-bottom: 5px solid #C4C4C4;
              top: 3px;
              border-bottom-color: $brand-color-pink;
            }
            &::before {
              display: none;
            }
          }
        }
      }
    }

    tbody {
      font-size: 14px;
      line-height: 19px;

      .partner {
        background-color: rgba(255,215,0,0.3);
      }

      tr {
        td {
          //height: 72px;
          padding: 20px 15px;
          border-bottom: 2px solid $border-color-l1;

          &:first-child {
            text-align: left;
          }
          &:not(:first-child) {
            text-align: center;
          }

          &.pie-chart {
            padding: 0;
          }

          &.audit {
            justify-content: end;
          }

          img {
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .no-data {
    text-align: center;
    padding-top: 20px;
    font-family: $font-base;
    font-weight: 500;
  }
</style>
