import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Home from "./home";
import "./styles/tailwind.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
