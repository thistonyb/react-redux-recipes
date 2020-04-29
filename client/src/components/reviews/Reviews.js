import React from "react";
import Review from "./Review";
import "./Reviews.css";
/**
 *Functional component that renders a Review for each of the results of
 the reviews fetch. 
 * @param {*} props Props passed in from ReviewsContainer
 */
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
