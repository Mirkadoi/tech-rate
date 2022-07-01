import { reactive } from "vue";

export const store = reactive({
  tokenList: [],
  increment() {
    this.count++;
  },
});
