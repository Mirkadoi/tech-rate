import { reactive } from "vue";

export const store = reactive({
  tokenListAllProject: [],
  tokenListEthereumProject: [],
  tokenListBSCProjects: [],

  getAllProject() {
    this.count++;
  },
});
