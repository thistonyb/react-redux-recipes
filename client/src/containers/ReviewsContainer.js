import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { NavLink } from "react-router-dom";
import { fetchRecipe } from "../actions/RecipeActions";
import TopBar from "../components/TopBar";

class ReviewsContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }
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

const mapStateToProps = (state) => ({
  reviews: state.recipe ? state.recipe.reviews : [],
  recipe: state.recipe || {},
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    addReview: (comment, recipeId) => dispatch(addReview(comment, recipeId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
