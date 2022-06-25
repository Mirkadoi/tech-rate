<template>
  <div class="d-flex table-controls">
    <p class="info">Showing {{ showingValue }} out of {{ values.length }}</p>

    <div class="d-flex pagination">
      <button class="control control-prev" @click="$emit('prev')"/>

      <button v-if="currentPage > 1" @click="$emit('prev')">{{ currentPage - 1  }}</button>
      <button class="current-page" disabled>{{ currentPage }}</button>
      <button v-if="showNextNumberButton" @click="$emit('next')">{{ currentPage + 1  }}</button>

      <template v-if="showLastPageButton">
        <span class="dots">...</span>
        <button @click="$emit('toLastPage')">{{ lastPageNumber }}</button>
      </template>

      <button class="control control-next" @click="$emit('next')"/>
    </div>

    <div class="settings d-flex">
      <p>Show rows:</p>

      <select v-model="rowsCount">
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: () => []
    },

    currentPage: {
      type: Number
    }
  },

  data: () => ({
    rowsCount: 10
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
      const number = this.values.length / this.rowsCount
      return number ? Math.ceil(number) : 0
    }
  },

  watch: {
    rowsCount: {
      immediate: true,
      handler(val) {
        const firstItemOnPageNumber = (this.currentPage - 1) * this.rowsCount + 1

        if (firstItemOnPageNumber > this.values.length) this.$emit('toFirstPage')
        this.$emit('changeRowsCount', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .d-flex {
    display: flex;
  }

  .table-controls {
    justify-content: space-between;
    padding: 17px 0;
    font-size: 14px;

    .dots {
      display: block;
      display: flex;
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
    background-color: #fff;
    cursor: pointer;
    border: none;
    margin: 0 7px;

    &.control {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #E4E4E4;
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));

      &::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-left: 2px solid #17181E;
        border-bottom: 2px solid #17181E;
      }
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }

    &.control-prev {
      &::before {
        transform: translateX(2px) rotate(45deg);
      }
    }

    &.control-next {
      &::before {
        transform: translateX(-1px) rotate(-135deg);
      }
    }

    &.current-page {
      background: #000000;
      border: none;
      color: #FFFFFF;
      cursor: default;
    }
  }

  .settings {
    display: flex;
    align-items: center;

    select {
      margin-left: 10px;
      background: #F3F2F2;
      border-radius: 8px;
      width: 63px;
      height: 35px;
      border: none;
    }
  }
</style>
