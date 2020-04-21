import React from "react";
import { Route } from "react-router-dom";
import RecipesSearchContainer from "../../containers/RecipesSearchContainer";
import RecipeContainer from "../../containers/RecipeContainer";
import ReviewsContainer from "../../containers/ReviewsContainer";

const RecipesRouter = ({ match }) => (
  <div>
    <Route exact path={match.url} component={RecipesSearchContainer} />
    <Route exact path={`${match.url}/:recipeId`} component={RecipeContainer} />
    <Route
      path={`${match.url}/:recipeId/reviews`}
      component={ReviewsContainer}
    />
  </div>
);

export default RecipesRouter;
