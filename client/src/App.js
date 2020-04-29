import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipesRouter from "./components/recipes/RecipesRouter";
/**
 * App is rendering to the Home or the RecipesRouter component depending
 * on the path.
 */
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={RecipesRouter} />
        </div>
      </Router>
    );
  }
}
