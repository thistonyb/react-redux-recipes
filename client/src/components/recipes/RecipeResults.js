import React from "react";
import RecipeLink from "./RecipeLink";
/**
 * This functional component renders a RecipeLink for each of the
 * results of the recipes fetch.
 *
 * @param {*} props Props passed in from RecipesSearchContainer
 */
const RecipeResults = (props) => {
  const recipes = props.recipes.map((recipe) => (
    <RecipeLink key={recipe.id} recipe={recipe} />
  ));

  return <ul style={{ padding: 0 }}>{recipes}</ul>;
};

export default RecipeResults;
