<template>
  <div class="d-flex table-controls">
    <p class="info">Showing {{ showingValue }} out of {{ values.length }}</p>

    <div class="d-flex pagination">
      <button class="control" @click="$emit('prev')">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjQ0NDY5NSA2LjQ1MjA2TDQuNzYyMDEgMTEuNDAxOEM1LjAyMTUzIDExLjY5OTQgNS40MTU4NSAxMS42OTk0IDUuNjgwMzYgMTEuNDAxOEM1LjkzOTg4IDExLjEwNDMgNS45Mzk4OCAxMC42NTIyIDUuNjgwMzYgMTAuMzQ4OUwxLjg4NzEzIDUuOTk5OTdMNS42ODAzNiAxLjY1MTA0QzUuOTM5ODggMS4zNTM1IDUuOTM5ODggMC45MDE0MDkgNS42ODAzNiAwLjU5ODE1MkM1LjU1MDYgMC40NDkzODUgNS40MjA4NCAwLjM3NTAwMSA1LjIyMTE2IDAuMzc1MDAxQzUuMDkxNCAwLjM3NTAwMSA0Ljg5MTcxIDAuNDQ5Mzg1IDQuNjk3MTMgMC41MjM3NjlMMC40NDQ2OTUgNS4zOTkxN0MwLjMxNDkzNyA1LjU0Nzk0IDAuMjQ5OTk5IDUuNjk2NzEgMC4yNDk5OTkgNS45MjU2NUMwLjI0OTk5OSA2LjE0ODggMC4zMTQ4NzggNi4zMDMyOSAwLjQ0NDY5NSA2LjQ1MjA2WiIgZmlsbD0iIzE3MTgxRSIvPgo8L3N2Zz4K"/>
      </button>
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
    rowsCount: 20
  }),

  computed: {
    showingValue() {
      const from = (this.currentPage - 1) * this.rowsCount + 1
      const to = this.currentPage * this.rowsCount

      return `${ from }-${ to }`
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
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    &.control {
      border: 1px solid #E4E4E4;

      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }
  }

  .settings {
    select {
      margin-left: 10px;
    }
  }
</style>
