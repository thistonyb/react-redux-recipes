export const fetchRecipes = (tag) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    fetch(`http://localhost:3001/recipes_by_tag/${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "FETCH_RECIPES", recipes: responseJSON });
      });
  };
};

export const fetchRecipe = (recipeId) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPE" });
    fetch(`http://localhost:3001/recipes/${recipeId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "FETCH_RECIPE", recipe: responseJSON });
      });
  };
};
