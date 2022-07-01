import RequestManager from "@/tools/api";

export const getBlogList = (queries = { page: 1, size: 20 }) => {
  return RequestManager.get({ path: "post/all/", queries });
};
