import RequestManager from "@/tools/api";

export const getBlogById = (id) => {
  return RequestManager.get({ path: `/post/all/${id}/` });
};
