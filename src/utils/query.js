import createRequestBody from "./createRequestBody";

/**
 * method for fetching data from the server
 * @param {string} url url for the query
 * @param {string} method method for the query
 * @param {Object} body request-body for post-request
 */

const query = async ({ url, method = "GET", body }) => {
  try {
    const reqBody = createRequestBody({ method, body });
    let data = await fetch(url, reqBody);
    data = await data.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default query;
