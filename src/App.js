import { Switch, Route } from "react-router-dom";

import React from "react";

import { Pokepage } from "./page/pokePage";
import { Home } from "./page/home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/pokemon/:id">
        <Pokepage></Pokepage>
      </Route>
    </Switch>
  );
}

export default App;
