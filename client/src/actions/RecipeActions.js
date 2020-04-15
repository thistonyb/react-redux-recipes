export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_RECIPES", recipes: responseJSON });
      });
  };
};
