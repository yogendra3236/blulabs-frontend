import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import checkTokenMiddleware from "./checkTokenMiddleware";

/**
 *
 * @param {element} component react-element
 * private-route HOC
 */

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const isTokenValid = token && token !== "null" && checkTokenMiddleware();

  return (
    <Route
      {...rest}
      render={(props) => (isTokenValid ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.defaultProps = {
  component: "div",
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
};

export default PrivateRoute;
