const manageRecipe = (
  state = { loading: false, recipe: null, recipes: [], reviews: [] },
  action
) => {
  switch (action.type) {
    case "LOADING_RECIPES":
    case "LOADING_RECIPE":
      return {
        ...state,
        recipes: [...state.recipes],
        loading: true,
      };

    case "ADD_RECIPES":
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };

    case "ADD_RECIPE":
      return {
        ...state,
        recipe: action.recipe,
        loading: false,
      };

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
