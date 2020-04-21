import React from "react";
import Review from "./Review";
import { NavLink } from "react-router-dom";

const Reviews = (props) => {
  const { reviews, deleteReview } = props;
  const reviewComponenets = reviews.map((review) => (
    <Review key={review.id} review={review} deleteReview={deleteReview} />
  ));
  return (
    <div>
      <ul>{reviewComponenets}</ul>
    </div>
  );
};

export default Reviews;
