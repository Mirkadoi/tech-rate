import { reactive } from "vue";

import { getTokenList } from "@/views/Home/requests";

export const store = reactive({
  projectTokenList: [],
  prevPage: null,
  nextPage: null,
  count: 0,
  selectedProject: "",
  searchValue: "",
  sortOption: { field: "name", dir: 0 },

  async getAllProjectItems(queries) {
    const { results, previous, next, count } = await getTokenList({
      blockchain: this.selectedProject,
      ...queries,
      ...(this.searchValue && { search: this.searchValue }),
    });

    this.prevPage = !previous;
    this.nextPage = !next;
    this.count = count;

    this.projectTokenList = results;
  },

  setHomeStoreState(state, value) {
    this[state] = value;
  },

  setSelectedProject(value) {
    this.selectedProject = value;
  },

  setSearchValue(value) {
    this.searchValue = value;
  },
});
