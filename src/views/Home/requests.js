import RequestManager from "@/tools/api";

export const getProjectsAudited = () => {
  return RequestManager.get({ path: "/token/all/", queries: { page: 1, size: 1 } });
};

export const getBSCAudited = () => {
  return RequestManager.get({
    path: "/token/all/",
    queries: { page: 1, size: 1, blockchain: "BSC" },
  });
};

export const getTokenList = (queries = { page: 1 }) => {
  return RequestManager.get({ path: "/token/all/", queries: { size: 20, ...queries } });
};

export const getTokenBySearch = (search) => {
  return RequestManager.get({
    path: "/token/all/",
    queries: { search: search, page: 1, size: 99 },
  });
};

export const getAuditScore = (queries = { page: 1, size: 3, sort: "desc", field: "score" }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getRecentlyCompleted = (
  queries = { page: 1, size: 3, sort: "desc", field: "created" }
) => {
  return RequestManager.get({ path: "/token/all/", queries });
};
