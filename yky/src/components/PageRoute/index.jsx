import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routesConfig from "../../route copy";
export default function PageConfig() {
    return (
        <Router>
             <ul>
          <li>
            <Link to="/tacoss">Tacoss</Link>
          </li>
          <li>
            <Link to="/sandwichess">Sandwichess</Link>
          </li>
        </ul>
            <Switch>
                
                {routesConfig.map((route, index) => {
                    console.log("route",route);
                    console.log("index",index);
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
                )}
            </Switch>
        </Router>
    );
}