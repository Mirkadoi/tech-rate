import { reactive } from "vue";

import { getTokenList } from "@/views/Home/requests";

export const store = reactive({
  projectTokenList: [],
  selectedProject: "",
  searchValue: "",

  async getAllProjectItems(queries) {
    const { results } = await getTokenList({
      blockchain: this.selectedProject,
      ...queries,
      ...(this.searchValue && { search: this.searchValue }),
    });

    this.projectTokenList = results;
  },

  setSelectedProject(value) {
    this.selectedProject = value;
  },

  setSearchValue(value) {
    this.searchValue = value;
  },
});
