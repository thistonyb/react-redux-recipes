import React, { Component } from "react";
import ReviewsContainer from "../ReviewsContainer";

const Recipe = (props) => {
  <li>{props.recipe.name}</li>;
  <ReviewsContainer recipe={props.recipe}
};
export default Recipe;
