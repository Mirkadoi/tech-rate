// const prepareUrl
//
const request = async (params, options = {}, error = console.error) => {
  try {
    const response = await fetch(params, options);

    if (!response.ok) {
      // throw new Error("HTTP status code- " + response.status);
      return Promise.reject("HTTP status code - " + response.status);
    }

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

const postRequest = ({ path, data = {} }) => {
  const url = new URL(process.env.VUE_APP_BASE_URL);

  url.pathname += path;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return request(url, options);
};

const RequestManager = {
  get: getRequest,
  post: postRequest,
};

export default RequestManager;
