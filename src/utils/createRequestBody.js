/**
 * method for generating request-body with token
 * @param {string} method API-method
 * @param {Object} body body-object for post-requests
 */

const createRequestbody = ({ method, body }) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("token"),
    "access-key": localStorage.getItem("key"),
  };

  let bodyData;
  if (body) {
    bodyData = JSON.stringify(body);
  }
  return {
    method,
    headers,
    body: bodyData,
  };
};

/**
 * api-headers with token-param
 *
 */
export const apiHeaders = () => ({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "x-access-token": localStorage.getItem("token"),
  "access-key": localStorage.getItem("key"),
});

export default createRequestbody;
