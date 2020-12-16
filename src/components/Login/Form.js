import React, { Component } from "react";
import { Wrapper } from "./styles";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { onSubmit } = this.props;

    return (
      <Wrapper>
        <form onSubmit={(event) => onSubmit({ event, email, password })}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              value={email}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              className="form-control"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Wrapper>
    );
  }
}

export default LoginForm;
