import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/listPage/Home";
import PlayerDetail from "./components/detailPage/PlayerDetail";
import PlayerEdit from "./components/editPage/PlayerEdit";
import NotFound from "./components/NotFound";
import players from "./mock/Player"

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} data={players}/>
      <Route path="player/:id" component={PlayerDetail} data={players}/>
      <Route path="player/:id/edit" component={PlayerEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
