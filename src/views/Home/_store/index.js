import { reactive } from "vue";

import { getTokenList } from "@/views/Home/requests";
import { projectSortDir } from "@/tools/dictionary";

export const store = reactive({
  projectTokenList: [],
  prevPage: null,
  nextPage: null,
  count: 0,
  projectTabSelected: "",
  searchValue: "",
  sortOption: { field: null, dir: 0 },
  currentPage: 1,
  pageSize: 20,

  async getProjectItems() {
    const { results, previous, next, count } = await getTokenList({
      ...(this.searchValue && { search: this.searchValue }),
      ...(this.projectTabSelected && { blockchain: this.projectTabSelected }),
      ...(this.sortOption.field && {
        field: this.sortOption.field,
        sort: projectSortDir[store.sortOption.dir],
      }),
      page: this.currentPage,
      size: this.pageSize,
    });

    this.prevPage = !previous;
    this.nextPage = !next;
    this.count = count;

    this.projectTokenList = results;
  },

  goToProjectPage(value) {
    this.currentPage = value;

    return this.getProjectItems();
  },

  setHomeStoreState(state, value) {
    this[state] = value;
  },
});
