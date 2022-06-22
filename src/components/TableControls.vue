<template>
  <div class="d-flex table-controls">
    <p class="info">Showing {{ showingValue }} out of {{ values.length }}</p>

    <div class="d-flex pagination">
      <button class="control" @click="$emit('prev')">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjQ0NDY5NSA2LjQ1MjA2TDQuNzYyMDEgMTEuNDAxOEM1LjAyMTUzIDExLjY5OTQgNS40MTU4NSAxMS42OTk0IDUuNjgwMzYgMTEuNDAxOEM1LjkzOTg4IDExLjEwNDMgNS45Mzk4OCAxMC42NTIyIDUuNjgwMzYgMTAuMzQ4OUwxLjg4NzEzIDUuOTk5OTdMNS42ODAzNiAxLjY1MTA0QzUuOTM5ODggMS4zNTM1IDUuOTM5ODggMC45MDE0MDkgNS42ODAzNiAwLjU5ODE1MkM1LjU1MDYgMC40NDkzODUgNS40MjA4NCAwLjM3NTAwMSA1LjIyMTE2IDAuMzc1MDAxQzUuMDkxNCAwLjM3NTAwMSA0Ljg5MTcxIDAuNDQ5Mzg1IDQuNjk3MTMgMC41MjM3NjlMMC40NDQ2OTUgNS4zOTkxN0MwLjMxNDkzNyA1LjU0Nzk0IDAuMjQ5OTk5IDUuNjk2NzEgMC4yNDk5OTkgNS45MjU2NUMwLjI0OTk5OSA2LjE0ODggMC4zMTQ4NzggNi4zMDMyOSAwLjQ0NDY5NSA2LjQ1MjA2WiIgZmlsbD0iIzE3MTgxRSIvPgo8L3N2Zz4K"/>
      </button>

      <button v-if="currentPage > 1" @click="$emit('prev')">{{ currentPage - 1  }}</button>
      <button class="current-page" disabled>{{ currentPage }}</button>
      <button v-if="showNextNumberButton" @click="$emit('next')">{{ currentPage + 1  }}</button>

      <template v-if="showLastPageButton">
        <span class="dots">...</span>
        <button @click="$emit('toLastPage')">{{ lastPageNumber }}</button>
      </template>

      <button class="control" @click="$emit('next')">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjU1NTMgNS41NDc5NEwxLjIzNzk5IDAuNTk4MTUyQzAuOTc4NDcgMC4zMDA2MTYgMC41ODQxNDYgMC4zMDA2MTYgMC4zMTk2MzggMC41OTgxNTJDMC4wNjAxMjA3IDAuODk1Njg3IDAuMDYwMTIwNyAxLjM0Nzc4IDAuMzE5NjM4IDEuNjUxMUw0LjExMjg3IDYuMDAwMDNMMC4zMTk2MzggMTAuMzQ5QzAuMDYwMTIwNyAxMC42NDY1IDAuMDYwMTIwNyAxMS4wOTg2IDAuMzE5NjM4IDExLjQwMThDMC40NDkzOTcgMTEuNTUwNiAwLjU3OTE1NSAxMS42MjUgMC43Nzg4NDEgMTEuNjI1QzAuOTA4NiAxMS42MjUgMS4xMDgyOSAxMS41NTA2IDEuMzAyODcgMTEuNDc2Mkw1LjU1NTMgNi42MDA4M0M1LjY4NTA2IDYuNDUyMDYgNS43NSA2LjMwMzI5IDUuNzUgNi4wNzQzNUM1Ljc1IDUuODUxMiA1LjY4NTEyIDUuNjk2NzEgNS41NTUzIDUuNTQ3OTRaIiBmaWxsPSIjMTcxODFFIi8+Cjwvc3ZnPgo=">
      </button>
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
      border: 1px solid #E4E4E4;
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));

      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
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
