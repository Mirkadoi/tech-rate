<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(el, i) in tableHeader" :key="i" :style="{width: el.width}">
            <p v-if="el.key !== 'audit' && el.key !== 'links'" class="d-flex pointer" @click="sort(el.key)">
              <span>{{ el.text }}</span>
              <span class="arrows" :class="toggleSortArrow(el.key)"/>
            </p>
            <p v-else class="d-flex">
              <span>{{ el.text }}</span>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in store.projectTokenList" :key="i" :class="{partner: el['is_partner']}">

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
              <InlineSvg :src="require('@/assets/icons/pdf.svg')" width="20" height="20" fill="#17181E" :title="el.audit" />
            </a>
          </td>
          <td class="links">
            <div v-if="el.website || el.twitter">
              <a v-if="el.website" :href="el.website" target="_blank"><InlineSvg :src="require('@/assets/icons/internet.svg')" width="20" height="20" fill="#17181E" :title="el.website" /></a>
              <a v-if="el.twitter" :href="el.twitter" target="_blank"><InlineSvg  :src="require('@/assets/icons/twitter-logo.svg')" width="20" height="20" fill="#17181E" :title="el.twitter" /></a>
            </div>
            <span v-else>N/A</span>
          </td>

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
      { text: 'Name', key: 'name', width: '29%' },
      { text: 'Score', key: 'score',  width: '10%' },
      { text: 'Blockchain', key: 'blockchain',  width: '13%' },
      { text: 'Category', key: 'category',  width: '13%' },
      { text: 'Audit', key: 'audit',  width: '10%' },
      { text: 'Links', key: 'links',  width: '10%' },
      { text: 'Date', key: 'audit_date',  width: '15%' },
    ],
    pageSize: 20,
  }),

  methods:{
    sort(column) {
      const sortOption = { field: store.sortOption.field, dir: store.sortOption.dir}

      if (sortOption.field !== column) {
        sortOption.field = column;
        sortOption.dir = 0;
      }

      if (sortOption.dir >= 2) {
        sortOption.dir = 0;
        sortOption.field = null;
      } else {
        sortOption.dir += 1;
      }

      store.setHomeStoreState('sortOption', sortOption)

      return store.getAllProjectItems()
    },
    nextPage() {
      if((store.currentPage*this.pageSize) < store.count) store.setHomeStoreState('currentPage', store.currentPage++);
    },
    prevPage() {
      if(store.currentPage > 1) store.setHomeStoreState('currentPage', store.currentPage--);
    },
    toggleSortArrow(field) {
      if(store.sortOption.field === field && store.sortOption.dir === 1) return 'up'
      if(store.sortOption.field === field && store.sortOption.dir === 2) return 'down'
      return 'dub-arrow';
    }
  },

  watch: {
    'store.searchValue': {
      handler(val) {
        if(val) {
          //TODO перенести currentPage в стор, убрать кастыль
          store.setHomeStoreState('currentPage', 1);
        }
      }
    },
    'store.currentPage': {
      immediate: true,
      handler(val) {
        //TODO перенести currentPage в стор, убрать кастыль
        if(store.searchValue) return;

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

  .pointer {
    cursor: pointer;
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
    border-spacing: 0;
    font-weight: 400;
    width: 100%;

    thead {
      font-size: 13px;
      line-height: 16px;

      th {
        padding: 15px;
        user-select: none;

        &:last-child {
          p {
            justify-content: end;
          }
        }

        &:nth-child(5) {
          p {
            justify-content: center;
          }
        }

        //p {
        //  justify-content: start;
        //}

        span {
          color: $text-color-dark-blue;
        }
        //}
        //
        //p {
        //  justify-content: center;
        //}

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
      font-family: $font-base;
      font-size: 14px;
      line-height: 19px;
      font-weight: 600;

      .partner {
        background-color: rgba(255,215,0,0.1);
      }

      tr {
        td {
          //height: 72px;
          padding: 15px;
          border-bottom: 2px solid $border-color-l1;
          text-align: left;

          &:last-child {
            text-align: right;
          }

          &:nth-child(5) {
            text-align: center;
          }

          //&:nth-child(6) {
          //  justify-content: center;
          //}
          //&:not(:first-child) {
          //  text-align: center;
          //}

          &.links {
            div {
              display: flex;
              gap: 10px;
              //justify-content: center;
            }
          }

          &.pie-chart {
            padding: 0 15px;
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
