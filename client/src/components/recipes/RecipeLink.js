import React from "react";
import { NavLink } from "react-router-dom";
import "./RecipeLink.css";
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
