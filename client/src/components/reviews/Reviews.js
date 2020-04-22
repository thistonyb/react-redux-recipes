import React from "react";
import Review from "./Review";

const Reviews = (props) => {
  const { reviews, deleteReview } = props;
  const reviewComponenets = reviews.map((review) => (
    <Review
      key={review.id}
      review={review}
      deleteReview={deleteReview}
      recipe={props.recipe}
    />
  ));
  return (
    <div>
      <ul>{reviewComponenets}</ul>
    </div>
  );
};

export default Reviews;
