import React, { Component } from "react";
import "../scss/linebot-nav.scss";
class Zoho_Nav extends Component {
  render() {
    return (
      <div className="zoho-nav">
        <nav>
          <a href="/day-off">請假表單</a>
          <a href="#">請假系統</a>
          <a href="#">DDD</a>

          <div id="indicator"></div>
        </nav>
      </div>
    );
  }
}
export default Zoho_Nav;
