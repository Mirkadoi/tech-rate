<template>
  <div class="table-controls">
    <div class="pagination">
      <ArrowButton v-show="currentPage !== 1" @onClick="$emit('prev')" />

      <button v-if="showFirstPageButton" @click="$emit('goToPage', 1)">{{ 1 }}</button>
      <span v-if="showFirstPageDots" class="dots">...</span>

      <template v-for="button in paginationMiddleButtons" :key="button">

        <button v-if="button > 0 && button <= lastPageNumber" :class="{'current-page': button === currentPage}" @click="$emit('goToPage', button)">{{ button  }}</button>

      </template>

      <span v-if="showLastPageDots" class="dots" >...</span>
      <button v-if="showLastPageButton" @click="$emit('goToPage', lastPageNumber)">{{ lastPageNumber }}</button>

      <ArrowButton v-show="currentPage !== lastPageNumber" @onClick="$emit('next')" rotate />
    </div>
  </div>
</template>

<script>
import { store } from '@/views/Home/_store';

import ArrowButton from '@/components/ArrowButton';

export default {
  components: {
    ArrowButton,
  },

  props: {
    currentPage: {
      type: Number
    }
  },

  data: () => ({
    rowsCount: 20
  }),

  computed: {
    paginationMiddleButtons() {
      return [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2]
    },

    showLastPageDots() {
      return this.lastPageNumber > 3 && this.currentPage + 3 < this.lastPageNumber;
    },

    showFirstPageDots() {
      return this.currentPage > 4;
    },

    showLastPageButton() {
      return this.lastPageNumber > 3 && this.currentPage + 2 < this.lastPageNumber
    },

    showFirstPageButton() {
      return this.currentPage >= 4
    },

    lastPageNumber() {
      const number = store.count / this.rowsCount
      return number ? Math.ceil(number) : 0
    }
  },

  setup() {
    return {store}
  }
}
</script>

<style scoped lang="scss">
  .table-controls {
    display: flex;
    justify-content: center;
    padding: 17px 0;
    font-size: 14px;

    .dots {
      display: flex;
      align-items: center;
      cursor: default;
    }
  }

  .pagination {
    display: flex;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $color-white;
    cursor: pointer;
    border: none;
    margin: 0 7px;

    &.current-page {
      background: $color-black;
      border: none;
      color: $color-white;
      cursor: default;
    }
  }
</style>
