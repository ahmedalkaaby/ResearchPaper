import React from "react";
import View from "./view";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Home from "./home";
import "./styles/tailwind.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Apply" component={Home} />
        <Route path="/View" component={View} />
      </Switch>
    </div>
  );
}

export default App;
