import React from "react";
import { NavLink } from "react-router-dom";
//import recipe ect..
const RecipeLink = (props) => (
  <li>
    <NavLink to={`/recipes/${props.recipe.id}`}>{props.recipe.name}</NavLink>
    <p>{props.recipe.tags}</p>
  </li>
);
export default RecipeLink;
