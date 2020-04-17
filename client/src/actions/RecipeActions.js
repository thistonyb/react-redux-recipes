export const fetchRecipes = (tag) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    fetch(`http://localhost:3001/recipes_by_tag/${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_RECIPES", recipes: responseJSON });
      });
  };
};
