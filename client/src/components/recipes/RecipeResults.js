import React, { Component } from "react";
import RecipeLink from "./RecipeLink";
/**
 * This functional component renders a RecipeLink for each of the
 * results of the recipes fetch.
 *
 * @param {*} props Props passed in from RecipesSearchContainer
 */
const RecipeResults = (props) => {
  console.log(props);
  const recipes = props.recipes.map((recipe) => (
    <RecipeLink key={recipe.id} recipe={recipe} />
  ));
  if (props.loading) {
    return <div>Loading Recipes</div>;
  }

  return <ul style={{ padding: 0 }}>{recipes}</ul>;
};
export default RecipeResults;
