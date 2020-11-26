import React, { Component } from "react";
import styles from "./SigninPage.module.css";
import LinkedIn from "../images/LinkedIn.png";
import Footer from "./Footer";
import { UserContext } from "../Context/UserContextProvider";
import { Redirect } from "react-router-dom";

export class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_type: "password",
      button_text: "Show",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { authenticate } = this.context;
    authenticate({ email, password });
  };

  handleButtonText = () => {
    const { button_text } = this.state;

    if (button_text === "Show") {
      this.setState({
        button_text: "Hide",
      });
    } else if (button_text === "Hide") {
      this.setState({
        button_text: "Show",
      });
    }
  };

  render() {
    const { email, password, password_type, button_text } = this.state;
    const { isAuth, error } = this.context;
    return !isAuth ? (
      <div>
        <div className={styles.Container}>
          <div>
            <img className={styles.Logo} src={LinkedIn} alt="Linkedin Logo" />
          </div>
          <h2 className={styles.Title}>Welcome Back</h2>
          <div className={styles.FormDescription}>
            Don't miss your next opportunity. Sign in to stay updated on your
            professional world.
          </div>

          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className={styles.InputBox}
                name="email"
                value={email}
                type="email"
                placeholder="Email or Phone"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className={styles.PasswordInputBox}>
              <input
                className={styles.InputBox}
                name="password"
                value={password}
                type={button_text === "Hide" ? "text" : "password"}
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <div
                className={styles.ShowHideButton}
                onClick={this.handleButtonText}
              >
                {button_text}
              </div>
            </div>
            {error ? (
              <div className={styles.SignUpError}>
                **Check email and password
              </div>
            ) : (
              ""
            )}
            <div>
              <input
                className={styles.SigninButton}
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
          <div className={styles.ForgotPasswordTag}>Forgot password?</div>
          <div className={styles.NewtoLinkedin}>
            <div>New to LinkedIn?</div>
            <div className={styles.Join}>Join now</div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    ) : (
      <Redirect to="/dashboard" /> //put rediret link
    );
  }
}

SigninPage.contextType = UserContext;
