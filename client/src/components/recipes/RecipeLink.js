import React from "react";
import { NavLink } from "react-router-dom";
import "./RecipeLink.css";
/**
 * Functional component that renders a NavLink for each recipe as well
 * as the tags that the recipe is associated with.
 * It handles removing a tag called "FUF"(not sure what it means).
 * @param {*} props Props passed in from RecipeResults
 */
const RecipeLink = (props) => (
  <li className="recipeListItem">
    <NavLink className="recipeLink" to={`/recipes/${props.recipe.id}`}>
      {props.recipe.name}
    </NavLink>
    <p className="recipeTags">
      {props.recipe.tags
        .split(",")
        .filter((tag) => tag !== "FUF")
        .join(", ")}
    </p>
  </li>
);
export default RecipeLink;
