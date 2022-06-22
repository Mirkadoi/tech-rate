<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(el, i) in tableHeader" :key="i" @click="sort(el)">{{ el }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in sortedValues" :key="i">
          <td>{{ i += 1 }}</td>

          <td class="d-flex">
            <img :src="el.img" width="24" height="24">
            <p>{{ el.name }}</p>
          </td>

          <td>{{ el.price }}</td>

          <td>
            <Stock :param="el.security"/>
          </td>

          <td>
            <Stock :param="el.last"/>
          </td>

          <td>{{ el.market }}</td>
          <td>{{ el.volume }}</td>
        </tr>
      </tbody>
    </table>
    <table-controls @prev="prevPage" @next="nextPage" :values="tableContent" :currentPage="currentPage"/>

    debug: sort={{currentSort}}, dir={{currentSortDir}}, page={{currentPage}}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Stock from "@/components/layout/Stock";
import TableControls from "@/components/TableControls";

export default defineComponent({
  components: { Stock, TableControls },

  data: () => ({
    tableHeader: ['#', 'Name', 'Price', 'Security Score/24h', 'Last 7 days', 'Market Cap', 'Volume (24h)'],
    tableContent: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Carbon',
        price: '$ 39 043.65',
        security: { stocks: false, value: "5.79%" },
        last: { stocks: true, value: "5.79%" },
        market: '$ 741 601 948.65',
        volume: '$ 27 601 948.65',
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Aave',
        price: '$ 39 043.65',
        security: { stocks: false, value: "5.79%" },
        last: { stocks: true, value: "5.79%" },
        market: '$ 741 601 948.65',
        volume: '$ 27 601 948.65',
      },
    ],
    currentSort:'name',
    currentSortDir:'asc',
    pageSize:3,
    currentPage:1
  }),

  methods:{
    sort(column) {
      //if column == current sort, reverse
      if(column === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = column;
    },
    nextPage() {
      if((this.currentPage*this.pageSize) < this.tableContent.length) this.currentPage++;
    },
    prevPage() {
      if(this.currentPage > 1) this.currentPage--;
    }
  },

  computed:{
    sortedValues() {
      return [...this.tableContent].sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
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
    width: calc(100% - 200px);
    margin: 0 100px;
  }

  table {
    border-spacing: 0px;
    font-family: 'Open Sans';
    font-weight: 400;
    color: #17181E;
    width: 100%;

    thead {
      font-size: 12px;
      line-height: 16px;
      th {
        padding-top: 25px;
        text-align: right;
        cursor: pointer;

        &:first-child,
        &:nth-child(2) {
          text-align: left;
        }
      }
    }

    tbody {
      font-size: 14px;
      line-height: 19px;

      tr {
        td {
          padding: 20px 0;
          border-bottom: 2px solid #EEEEEE;

          &:first-child {
            text-align: left;
          }
          &:not(:first-child) {
            text-align: right;
          }

          img {
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
