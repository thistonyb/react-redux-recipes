import React from "react";
import "./Review.css";

const Review = (props) => {
  const { review, recipe } = props;

  const handleOnClick = () => {
    props.deleteReview(review.id);
  };

  return (
    <li className="review">
      <p className="reviewComment">{review.comment}</p>
      <button
        className="deleteButton"
        title="Delete Review"
        onClick={handleOnClick}
      >
        X
      </button>
    </li>
  );
};
export default Review;
