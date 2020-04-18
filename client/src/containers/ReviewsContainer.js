import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews });

export default connect(mapStateToProps, { addReview, deleteReview })(
  ReviewsContainer
);
