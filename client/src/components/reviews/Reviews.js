import React from "react";
import Review from "./Review";
import "./Reviews.css";

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
      <h4 className="recipeName">{props.recipe.name}</h4>
      <ul className="reviewList">{reviewComponenets}</ul>
    </div>
  );
};

export default Reviews;
