import React, { Componet } from "react";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";

class ReviewsContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews });

export default connect(mapStateToProps, { addReview, deleteReview })(
  ReviewsContainer
);
