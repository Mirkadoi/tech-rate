<template>
  <div class="d-flex table-controls">
    <div class="d-flex pagination">
      <ArrowButton @onClick="$emit('prev')" :disabled="store.prevPage" />

      <button v-if="currentPage === 3 && lastPageNumber === 3" @click="$emit('goToPage', 1)">
        1
      </button>
      <button v-if="currentPage > 1" @click="$emit('prev')" >{{ currentPage - 1  }}</button>
      <button class="current-page" disabled>{{ currentPage }}</button>
      <button v-if="showNextNumberButton" @click="$emit('next')">{{ currentPage + 1  }}</button>

      <button v-if="currentPage === 1 && showNextNumberButton" @click="$emit('goToPage', 3)">
        3
      </button>

      <template v-if="showLastPageButton">
        <span class="dots">...</span>
        <button @click="$emit('toLastPage')">{{ lastPageNumber }}</button>
      </template>

      <ArrowButton @onClick="$emit('next')" :disabled="store.nextPage" rotate />
<!--      <button class="control control-next" @click=""/>-->
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
    showingValue() {
      const from = (this.currentPage - 1) * this.rowsCount + 1
      const to = this.currentPage * this.rowsCount

      return `${ from }-${ to }`
    },

    showNextNumberButton() {
      return this.lastPageNumber >= 2 && this.currentPage !== this.lastPageNumber
    },

    showLastPageButton() {
      return this.lastPageNumber > 3 && this.currentPage + 1 < this.lastPageNumber
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
  .d-flex {
    display: flex;
  }

  .table-controls {
    justify-content: center;
    padding: 17px 0;
    font-size: 14px;

    //.pagination {
    //  margin: 0 auto;
    //  transform: translateX(-70px);
    //}

    .dots {
      display: block;
      //display: flex;
      align-items: end;
      padding-bottom: 5px;
    }

    p {
      margin: 0;
    }
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

    //&.control {
    //  display: flex;
    //  align-items: center;
    //  justify-content: center;
    //  border: 1px solid #E4E4E4;
    //  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
    //
    //  &::before {
    //    content: '';
    //    display: block;
    //    width: 6px;
    //    height: 6px;
    //    border-left: 2px solid $text-color-black;
    //    border-bottom: 2px solid $text-color-black;
    //  }
    //  &:first-child {
    //    margin-right: 10px;
    //  }
    //  &:last-child {
    //    margin-left: 10px;
    //  }
    //}

    //&.control-prev {
    //  &::before {
    //    transform: translateX(2px) rotate(45deg);
    //  }
    //}
    //
    //&.control-next {
    //  &::before {
    //    transform: translateX(-1px) rotate(-135deg);
    //  }
    //}

    &.current-page {
      background: $color-black;
      border: none;
      color: $color-white;
      cursor: default;
    }
  }
</style>
