import React, { Component } from "react";
import "../scss/auth.scss";
import { apiUserLogin } from "../api";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    // Api Call
    apiUserLogin(user).then((res) => {
      if (!res.error) {
        console.log("POST login");
        if (res.data["error"] != undefined) {
          // get some error
        } else {
          sessionStorage.setItem("UserToken", res.data);
          alert("Login !");
          this.props.history.push("/home");
        }
      }
    });
  }

  render() {
    if (sessionStorage.getItem("UserToken")) {
      this.props.history.push("/home");
      return <div></div>;
    }
    return (
      <div className="login-page">
        <div className="container">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="center">
            <h2>帳戶驗證</h2>
            <form noValidate onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <button type="submit">登入</button>
            </form>
            <h2>&nbsp;</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
