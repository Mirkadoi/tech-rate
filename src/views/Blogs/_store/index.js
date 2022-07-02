import { reactive } from "vue";

import { getBlogList } from "@/views/Blog/requests";

export const store = reactive({
  blogList: [],

  async setBlogList(params) {
    const { results } = await getBlogList(params);

    this.blogList = [...results];
  },
});
