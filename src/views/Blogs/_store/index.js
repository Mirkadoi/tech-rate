import { reactive } from "vue";

import { getBlogList } from "@/views/Blog/requests";

export const blogStore = reactive({
  blogList: [],

  async setBlogList(params) {
    this.blogList = await getBlogList(params);
  },
});
