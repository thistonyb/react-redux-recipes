import React, { Component } from "react";
import "./RecipeSearch.css";
/**
 * RecipeSearch component renders the input fields for the search. It
 * uses local state to keep track of changes in the field. Props come
 * from RecipesSearchContainer.
 */
class RecipeSearch extends Component {
  state = { tag: "" };
  /**
   * Callback that handles the event when input changes for the search.
   */
  handleOnChange = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };
  /**
   * Callback that handles the event when submitting a search.
   */
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
            placeholder="Search by Keyword"
          />
          <input type="submit" className="submitInput" value="Search" />
        </form>
      </div>
    );
  }
}

export default RecipeSearch;
