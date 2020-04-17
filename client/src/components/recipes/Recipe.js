import { Component } from "react";
import ReviewsContainer from "../ReviewsContainer";

const Recipe = (props) => {
  <li>
    {props.recipe.name}
    <ReviewsContainer recipe={props.recipe} />
  </li>;
};
