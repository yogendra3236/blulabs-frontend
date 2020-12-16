import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./Form";
import { loginActionRequest } from "../../actions/Login";

const Login = ({ loginActionRequest, history }) => {
  const onSubmit = async ({ event, email, password }) => {
    event.preventDefault();
    const body = { email, password };
    loginActionRequest({ body, history });
  };

  const token = localStorage.getItem("token");
  const accessKey = localStorage.getItem("accessKey");
  const isLoggedIn =
    token && accessKey && token !== "null" && accessKey !== "null";

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return <LoginForm onSubmit={onSubmit} />;
};

const mapStatesToProps = (state) => ({});

export default connect(mapStatesToProps, { loginActionRequest })(Login);
