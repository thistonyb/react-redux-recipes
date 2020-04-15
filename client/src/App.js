import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RecipeContainer from "./containers/RecipeContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }
}
