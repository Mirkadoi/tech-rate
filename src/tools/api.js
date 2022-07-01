// const prepareUrl
//
const request = (params, error) => {
  try {
    return fetch(params);
  } catch (e) {
    error(e);
  }
};

const getRequest = ({ path, queries = {} }) => {
  const url = new URL(process.env.VUE_APP_BASE_URL);

  url.pathname += path;
  url.search = new URLSearchParams(queries).toString();

  return request(url);
};

const RequestManager = {
  get: getRequest,
};

export default RequestManager;
