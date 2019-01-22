import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Header from "../components/presentational/Header";
import BoxShadow from "../components/container/BoxShadow";
import BorderRadius from "../components/container/BorderRadius";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BoxShadow} exact />
        <Route path="/border-radius" component={BorderRadius} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
