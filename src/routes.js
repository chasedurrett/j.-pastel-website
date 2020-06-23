import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from './components/Contact/Contact'
import App from './App'

export default (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
