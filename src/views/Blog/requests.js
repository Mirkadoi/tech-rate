import RequestManager from "@/tools/api";

export const getBlogList = (queries = { page: 1, size: 4 }) => {
  return RequestManager.get({ path: "/post/all/", queries });
};

export const getBlogById = (id) => {
  return RequestManager.get({ path: `/post/all/${id}/` });
};

export const getTagsList = () => {
  return RequestManager.get({ path: "/post/tags/" });
};
