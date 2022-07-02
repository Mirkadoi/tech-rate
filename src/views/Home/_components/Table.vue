<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(el, i) in tableHeader" :key="i" @click="sort(el.key)">
            <p class="d-flex">
              {{ el.text }}
              <span class="arrows" :class="{
                'up': el.key === currentSort && currentSortDir === 'asc',
                'down': el.key === currentSort && currentSortDir === 'desc',
              }"/>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in sortedValues" :key="i">
          <td>{{ el.num }}</td>

          <td class="d-flex">
            <img :src="el.name.img" width="24" height="24">
            <p>{{ el.name.value }}</p>
          </td>

          <td class="pie-chart">
            <pie-chart :value="el.score" :color="getChartColor(el.score)"/>
          </td>

          <td>{{ el.blockchain }}</td>
          <td>{{ el.category }}</td>

          <td class="d-flex audit">
            <img :src="el.audit.img" width="24" height="24">
            <p>{{ el.audit.value }}</p>
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
          <td>{{ el.date }}</td>
        </tr>
      </tbody>
    </table>

    <table-controls
      @prev="prevPage"
      @next="nextPage"
      @goToPage="currentPage = $event"
      :values="tableContent"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PieChart from "@/views/Home/_components/PieChart";
// import Stock from "@/views/Home/_components/Stock";
import TableControls from "@/views/Home/_components/TableControls";

export default defineComponent({
  components: {
    // Stock,
    TableControls,
    PieChart
  },

  data: () => ({
    tableHeader: [
      { text: '#', key: 'num' },
      { text: 'Name', key: 'name' },
      { text: 'Score', key: 'score' },
      { text: 'Blockchain', key: 'blockchain' },
      { text: 'Category', key: 'category' },
      { text: 'Audit', key: 'audit' },
      // { text: 'Price', key: 'price' },
      // { text: 'Security Score/24h', key: 'security' },
      // { text: 'Last 7 days', key: 'last' },
      // { text: 'Market Cap', key: 'market' },
      // { text: 'Volume (24h)', key: 'volume' },
      { text: 'Date', key: 'date' },
    ],
    tableContent: [],
    currentSort:'name',
    currentSortDir:'asc',
    pageSize: 20,
    currentPage:1
  }),

  created() {
    this.tableContent = require('../generated.json')
  },

  methods:{
    sort(column) {
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
    },
    getChartColor(val) {
      if (val >= 90)  return 'green'
      if (val >= 80)  return 'lightgreen'
      if (val >= 70)  return 'yellow'
      if (val >= 50)  return 'orange'
      if (val <= 49)  return 'red'
    }
  },

  computed:{
    sortedValues() {
      return [...this.tableContent].sort((a,b) => {
        let modifier = 1;

        if(this.currentSortDir === 'desc') modifier = -1;

        const aItem = a[this.currentSort].value || a[this.currentSort]
        const bItem = b[this.currentSort].value || b[this.currentSort]

        if(aItem < bItem) return -1 * modifier;
        if(aItem > bItem) return 1 * modifier;
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
    background-color: $color-white;
    border-radius: 8px;
    padding: 0 20px;
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
        cursor: pointer;
        user-select: none;

        &:first-child,
        &:nth-child(2) {
          p {
            justify-content: start;
          }
        }

        p {
          justify-content: end;
        }

        .arrows {
          display: block;
          width: 9px;
          height: 12px;
          position: relative;
          margin-left: 6px;

          &::before, &::after {
            content: '';
            position: absolute;
            left: 0;
            display: block;
            border-left: 4.5px solid transparent;
            border-right: 4.5px solid transparent;
            border-bottom: 5px solid #C4C4C4;
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
              bottom: 3px;
              border-bottom-color: #388E3C;
            }
          }

          &.down {
            &::after {
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

      tr {
        td {
          padding: 20px 0;
          border-bottom: 2px solid $border-color-l1;

          &:first-child {
            text-align: left;
          }
          &:not(:first-child) {
            text-align: right;
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
</style>
