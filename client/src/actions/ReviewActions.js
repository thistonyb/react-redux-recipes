/**
 * This action posts of a new review on a recipe.
 * @param {*} comment A new comment that is provided by the user on a recipe.
 * @param {*} recipeId The id of the recipe being commented on.
 */
export const addReview = (comment, recipeId) => {
  return (dispatch) => {
    let data = { comment: comment, recipe_id: recipeId };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/reviews", configObj)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_REVIEW", review: responseJSON });
      });
  };
};
/**
 * This action deletes a review on a recipe.
 * @param {*} reviewId The id of the review to be deleted.
 */
export const deleteReview = (reviewId) => {
  return (dispatch) => {
    let configObj = {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`http://localhost:3001/reviews/${reviewId}`, configObj)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "DELETE_REVIEW", reviewId });
      });
  };
};
