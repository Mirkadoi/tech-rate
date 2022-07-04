import { reactive } from "vue";

import { getTokenList } from "@/views/Home/requests";

export const store = reactive({
  projectTokenList: [],
  selectedProject: "",

  async getAllProjectItems(queries) {
    const { results } = await getTokenList({
      blockchain: this.selectedProject,
      ...queries,
    });

    this.projectTokenList = results;
  },

  setSelectedProject(value) {
    this.selectedProject = value;
  },
});
