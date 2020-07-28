import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./RecipeLink.css";
/**
 * Class component that renders a NavLink for each recipe as well
 * as the tags that the recipe is associated with.
 * It handles removing a tag called "FUF"(was in the dataset, not sure what it means).
 * @param {*} props Props passed in from RecipeResults
 */
class RecipeLink extends Component {
  state = { likes: 0 };

  handleOnClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    const { recipe } = this.props;
    return (
      <li className="recipeListItem">
        <NavLink className="recipeLink" to={`/recipes/${recipe.id}`}>
          {recipe.name}
        </NavLink>
        <p className="recipeTags">
          {recipe.tags
            .split(",")
            .filter((tag) => tag !== "FUF")
            .join(", ")}
        </p>
        <span>Likes: {this.state.likes}</span>
        <button onClick={this.handleOnClick}>Like</button>
      </li>
    );
  }
}

export default RecipeLink;
