import React, { Component } from "react";
import "./RecipeSearch.css";

class RecipeSearch extends Component {
  state = { tag: "" };

  handleOnChange = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.fetchRecipes(this.state.tag);
    this.setState({
      tag: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="recipeSearch">
          <input
            type="text"
            value={this.state.tag}
            onChange={this.handleOnChange}
            className="textInput"
          />
          <input type="submit" className="submitInput" value="Search" />
        </form>
      </div>
    );
  }
}

export default RecipeSearch;
