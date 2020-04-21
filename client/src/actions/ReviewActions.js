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
