//Action creator
// const createRecipes = (responseJSON) => {
//   return { type: "FETCH_RECIPES", recipes: responseJSON };
// };
/**
 * This action fetches all the recipes that have a specific keyword.
 * @param {*} tag Tag or keyword entered by the user to search recipes
 * by.
 */
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
/**
 * This action fetches a specific recipe by its id.
 * @param {*} recipeId Id being used to search for a recipe in the db.
 */
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
