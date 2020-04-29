import React from "react";
import "./Review.css";
/**
 *Functional component that renders a single review.
 * @param {*} props Props passed in from Reviews
 */
const Review = (props) => {
  const { review } = props;
  /**
   * Callback that handles the delete of a review.
   */
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
