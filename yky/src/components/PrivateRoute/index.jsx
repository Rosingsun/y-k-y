import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routesConfig from "@src/route";
import { Login } from "@views/index";
// function PageConfig() {
class PageConfig extends Component {
  render() {
    return (
      <div>
        {/* <ul> */}
        {/* <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Intro">Intro</Link>
          </li> */}
        {/* <li>
            <Link to="/Login">Login</Link>
          </li> */}
        {/* </ul> */}
        <Login />
        <Switch>
          {
            routesConfig.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              )
            }
            )
          }
        </Switch>
      </div >
    );
  }
}
export default PageConfig;