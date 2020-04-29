import React, { Component } from "react";
import "./ReviewInput.css";
/**
 * ReviewInput component renders the input fields for a new review
 * on a recipe. It uses local state to keep track of changes in the
 * field. Props come from ReviewsContainer.
 */
class ReviewInput extends Component {
  state = {
    comment: "",
  };
  /**
   * Callback that handles the event when input changes in comment field.
   */
  handleOnChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  /**
   * Callback that handles the event when submitting a review on a recipe.
   */
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.comment, this.props.recipeId);
    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="reviewInput">
          <textarea
            placeholder="Review this Treasure!"
            value={this.state.comment}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default ReviewInput;
