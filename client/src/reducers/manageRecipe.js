/**
 * Processes actions by using a switch statement and makes changes
 * to the Redux store state's data.
 * @param {*} state Redux store state
 * @param {*} action Depicts type for switch case and includes
 * a payload in the form of an object for a change to state.
 */
const manageRecipe = (
  state = { loading: false, recipe: null, recipes: [] },
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

    case "FETCH_RECIPES":
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };

    case "FETCH_RECIPE":
      return {
        ...state,
        recipe: { ...action.recipe, reviews: action.recipe.reviews || [] },
        loading: false,
      };

    case "ADD_REVIEW":
      const review = {
        id: action.review.id,
        comment: action.review.comment,
        recipeId: action.review.recipe_id,
      };
      return {
        ...state,
        recipe: { ...state.recipe, reviews: [...state.recipe.reviews, review] },
      };

    case "DELETE_REVIEW":
      return {
        ...state,
        recipe: {
          ...state.recipe,
          reviews: state.recipe.reviews.filter(
            (review) => review.id !== action.reviewId
          ),
        },
      };

    default:
      return state;
  }
};
export default manageRecipe;
