const manageRecipe = (
  state = { recipes: [], loading: false, reviews: [] },
  action
) => {
  switch (action.type) {
    case "LOADING_RECIPES":
      return {
        ...state,
        recipes: [...state.recipes],
        loading: true,
      };
    //Not sure what recipe id will be named recipeId/recipe_id
    case "ADD_REVIEW":
      const review = {
        id: action.review.id,
        comment: action.review.comment,
        recipeId: action.review.recipeId,
      };
      return { ...state, reviews: [...state.reviews, review] };

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id !== action.reviewId
        ),
      };

    default:
      return state;
  }
};
export default manageRecipe;
