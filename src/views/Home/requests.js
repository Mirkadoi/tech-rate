import RequestManager from "@/tools/api";

export const getTokenList = (queries = { page: 1, size: 20 }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getTokenBySearch = (queries = { search: "" }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};

export const getAuditScore = (queries = { page: 1, size: 4 }) => {
  return RequestManager.get({ path: "/token/all/", queries });
};
