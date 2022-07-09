<template>
  <div class="table-controls">
    <div class="pagination">
      <ArrowButton v-show="store.currentPage !== 1" @onClick="prevPage" />

      <button v-if="showFirstPageButton" @click="goToPage(1)">{{ 1 }}</button>
      <span v-if="showFirstPageDots" class="dots">...</span>

      <template v-for="button in paginationMiddleButtons" :key="button">

        <button
            v-if="button > 0 && button <= lastPageNumber"
            :class="{'current-page': button === store.currentPage}"
            @click="goToPage(button)">{{ button }}
        </button>

      </template>

      <span v-if="showLastPageDots" class="dots" >...</span>
      <button v-if="showLastPageButton" @click="goToPage(lastPageNumber)">{{ lastPageNumber }}</button>

      <ArrowButton v-show="store.currentPage !== lastPageNumber" @onClick="nextPage" rotate />
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

  computed: {
    paginationMiddleButtons() {
      return [store.currentPage - 2, store.currentPage - 1, store.currentPage, store.currentPage + 1, store.currentPage + 2]
    },

    showLastPageDots() {
      return this.lastPageNumber > 3 && store.currentPage + 3 < this.lastPageNumber;
    },

    showFirstPageDots() {
      return store.currentPage > 4;
    },

    showLastPageButton() {
      return this.lastPageNumber > 3 && store.currentPage + 2 < this.lastPageNumber
    },

    showFirstPageButton() {
      return store.currentPage >= 4
    },

    lastPageNumber() {
      const number = store.count ? store.count / store.pageSize : 0;
      return number ? Math.ceil(number) : 1;
    },
  },

  methods: {
    goToPage(value) {
      store.goToProjectPage(value);
    },

    nextPage() {
      if((store.currentPage*store.pageSize) < store.count) store.goToProjectPage(store.currentPage + 1);
    },

    prevPage() {
      if(store.currentPage > 1) store.goToProjectPage(store.currentPage - 1);
    },
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
