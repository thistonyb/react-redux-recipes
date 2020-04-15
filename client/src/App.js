import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RecipesContainer from "./containers/RecipesContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipesContainer />
      </div>
    );
  }
}
