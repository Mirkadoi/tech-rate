import RequestManager from "@/tools/api";

export const postFeedbackDate = (data) => {
  return RequestManager.post({ path: `/token/request-audit`, data });
};
