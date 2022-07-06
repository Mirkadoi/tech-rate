import { reactive } from "vue";

import { getTokenList } from "@/views/Home/requests";

export const store = reactive({
  projectTokenList: [],
  prevPage: null,
  nextPage: null,
  selectedProject: "",
  searchValue: "",

  async getAllProjectItems(queries) {
    const { results, previous, next } = await getTokenList({
      blockchain: this.selectedProject,
      ...queries,
      ...(this.searchValue && { search: this.searchValue }),
    });

    this.prevPage = !previous;
    this.nextPage = !next;

    this.projectTokenList = results;
  },

  setSelectedProject(value) {
    this.selectedProject = value;
  },

  setSearchValue(value) {
    this.searchValue = value;
  },
});
