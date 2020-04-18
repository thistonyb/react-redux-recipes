import React from "react";
import RecipeLink from "./RecipeLink";

const RecipeResults = (props) => {
  const recipes = props.recipes.map((recipe) => (
    <RecipeLink key={recipe.id} recipe={recipe} />
  ));

  return <ul>{recipes}</ul>;
};

export default RecipeResults;
