// const prepareUrl
//
const request = async (params, error = console.warn) => {
  try {
    const response = await fetch(params);
    return response.json();
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
