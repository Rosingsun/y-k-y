import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./views/HomePage";
import Intro from "./views/Intro";
import Login from "./views/Login";


export default function route() {
  return (
    <Router>
      <div>
        <ul style={{ display: "flex", flexDirection: "row", width: "500px", justifyContent: "space-between" }}>
          <li>
            <Link to="/">登陆注册页面</Link>
          </li>
          <li>
            <Link to="/intro">介绍页面</Link>
          </li>
          <li>
            <Link to="/homePage">首页</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/homePage">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}