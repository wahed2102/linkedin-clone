import React, { Component } from "react";
import { UserContext } from "../Context/UserContextProvider";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChnage = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authenticate } = this.context;
    const { email, password } = this.state;
    authenticate({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>Email : </label>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => this.handleChnage(e)}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => this.handleChnage(e)}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

Login.contextType = UserContext;
