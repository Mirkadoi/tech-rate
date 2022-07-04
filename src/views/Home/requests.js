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

export const getAuditScore = () => {
  return RequestManager.get({ path: "/token/top-last/" });
};

export const getRecentlyCompleted = () => {
  return RequestManager.get({ path: "/token/last/" });
};
