import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// Components
import Auth from "./components/auth";
import Homepage from "./components/homepage";
import Forbidden from "./components/forbidden";
import Zoho_Nav from "./components/zoho-nav";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/forbidden" component={Forbidden} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/zoho-nav" component={Zoho_Nav} />
      <Redirect exact from="/" to="/auth" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
