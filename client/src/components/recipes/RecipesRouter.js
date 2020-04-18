import React from "react";
import { Route } from "react-router-dom";
import RecipesSearchContainer from "../../containers/RecipesSearchContainer";
import RecipeContainer from "../../containers/RecipeContainer";

const RecipesRouter = ({ match }) => (
  <div>
    <Route exact path={match.url} component={RecipesSearchContainer} />
    <Route path={`${match.url}/:recipeId`} component={RecipeContainer} />
  </div>
);

export default RecipesRouter;
