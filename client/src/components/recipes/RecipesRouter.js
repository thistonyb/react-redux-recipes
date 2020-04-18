import React from "react";
import Recipe from "./Recipe";
import { Route } from "react-router-dom";
import RecipesContainer from "../../containers/RecipesContainer";

const RecipesRouter = ({ match }) => (
  <div>
    <Route exact path={match.url} component={RecipesContainer} />
    {/* Write container for this Route */}
    <Route
      path={`${match.url}/:recipeId`}
      render={(routerProps) => <Recipe {...routerProps} />}
    />
  </div>
);

export default RecipesRouter;
