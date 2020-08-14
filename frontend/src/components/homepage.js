import React, { Component } from "react";
import "../scss/homepage.scss";
class Homepage extends Component {
  render() {
    if (sessionStorage.getItem("UserToken") != undefined) {
      return (
        <div className="home-page">
          <ul>
            <li>
              <a href="/linebot-nav">
                <span className="title">Line Bot</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-comments"></span>
              </a>
            </li>
            <li>
              <a href="/zoho-nav">
                <span className="title">Zoho</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-cubes"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title">小幫手</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-wrench"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title"></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-times"></span>
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      this.props.history.push("/forbidden");
      return (
        <div>
          <h1>No Auth</h1>
        </div>
      );
    }
  }
}

export default Homepage;
