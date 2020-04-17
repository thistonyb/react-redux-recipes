import React, { Component } from "react";
import Recipe from "./Recipe";

const Recipes = (props) => {
  const recipes = props.recipes.map((recipe) => (
    <Recipe key={recipe.id} recipe={recipe} />
  ));

  return <ul>{recipes}</ul>;
};

export default Recipes;
