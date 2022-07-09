import RequestManager from "@/tools/api";

export const getProjectsAudited = () => {
  return RequestManager.get({ path: "/token/all/", queries: { page: 1, size: 1 } });
};

export const getBSCAudited = () => {
  return RequestManager.get({
    path: "/token/blockchains/count",
  });
};

export const getTokenList = (queries) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getTokenBySearch = (search) => {
  return RequestManager.get({
    path: "/token/all/",
    queries: { search, page: 1, size: 99 },
  });
};

export const getAuditScore = () => {
  return RequestManager.get({ path: "/token/top-last/" });
};

export const getRecentlyCompleted = () => {
  return RequestManager.get({ path: "/token/last/" });
};
