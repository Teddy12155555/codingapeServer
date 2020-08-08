import React, { Component } from "react";
import "../scss/forbidden.scss";
class Forbidden extends Component {
  render() {
    console.log("!!!!");
    return (
      <div className="forbidden">
        <div className="base io">
          <h1 className="io">403</h1>
          <h2>你沒有權限造訪此網址......</h2>
          <h5>Access forbidden</h5>
        </div>
      </div>
    );
  }
}
export default Forbidden;
