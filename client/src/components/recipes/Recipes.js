import React, { Component } from "react";
import RecipeLink from "./RecipeLink";

const Recipes = (props) => {
  const recipes = props.recipes.map((recipe) => (
    <RecipeLink key={recipe.id} recipe={recipe} />
  ));

  return <ul>{recipes}</ul>;
};

export default Recipes;
