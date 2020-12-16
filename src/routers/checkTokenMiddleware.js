import jwtDecode from "jwt-decode";

/**
 * middleware to check if token is expired
 */
const checkTokenExpirationMiddleware = () => {
  const token = localStorage.getItem("token");
  if (jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    localStorage.removeItem("accessKey");
    return false;
  }
  return true;
};

export default checkTokenExpirationMiddleware;
