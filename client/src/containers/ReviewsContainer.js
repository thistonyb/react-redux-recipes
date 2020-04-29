import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { NavLink } from "react-router-dom";
import { fetchRecipe } from "../actions/RecipeActions";
import TopBar from "../components/TopBar";
/**
 * This class is a "page" that renders Reviews, the input for a new Review and
 * a link back to the Recipe.
 */
class ReviewsContainer extends Component {
  /**
   * Delay fetch to make sure page renders first.
   * Passes in recipeId from Router params.
   */
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }
  /**
   * Grabs recipeId from Router params.
   * Renders TopBar component, Navlink back to Recipe, Reviews,
   * and Review Input.
   */
  render() {
    const recipeId = this.props.match.params.recipeId;

    return (
      <div>
        <TopBar />
        <NavLink
          style={{
            "font-family": "fantasy",
            "font-weight": "bold",
            "font-size": "large",
            color: "darkred",
            paddingTop: "30px",
            display: "block",
          }}
          to={`/recipes/${recipeId}`}
        >
          Back to Recipe
        </NavLink>
        <Reviews
          recipe={this.props.recipe}
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
        />
        <ReviewInput addReview={this.props.addReview} recipeId={recipeId} />
      </div>
    );
  }
}
/**
 * reviews: If there is a recipe in store state, grab the reviews on the
 *  recipe, if there is no recipe, reviews is an empty array.
 * recipe: If there is a recipe in store state assign to key otherwise
 * assign to empty object.
 * @param {*} state  Redux store state
 */
const mapStateToProps = (state) => ({
  reviews: state.recipe ? state.recipe.reviews : [],
  recipe: state.recipe || {},
});
/**
 * Assign fetchRecipe, addReview, and deleteReview keys to their
 * corresponding action functions for use in props.
 * @param {*} dispatch Function used to dispatch actions to the store.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    addReview: (comment, recipeId) => dispatch(addReview(comment, recipeId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};
/**
 * Connects component with Redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
