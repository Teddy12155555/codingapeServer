import React, { Component } from "react";
import "../scss/zoho-nav.scss";
class Zoho_Nav extends Component {
  render() {
    return (
      <div className="zoho-nav">
        <nav>
          <a href="#">AAA</a>
          <a href="#">BBB</a>
          <a href="#">CCC</a>

          <div id="indicator"></div>
        </nav>
      </div>
    );
  }
}
export default Zoho_Nav;
