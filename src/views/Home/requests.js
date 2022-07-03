import RequestManager from "@/tools/api";

export const getTokenList = (queries = { page: 1, size: 20 }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getTokenBySearch = (queries = { search: "" }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getAuditScore = (queries = { page: 1, size: 3, sort: "desc", field: "score" }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getRecentlyCompleted = (
  queries = { page: 1, size: 3, sort: "desc", field: "created" }
) => {
  return RequestManager.get({ path: "/token/all/", queries });
};
