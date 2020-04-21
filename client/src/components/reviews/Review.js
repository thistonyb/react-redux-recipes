import React from "react";

const Review = (props) => {
  const { review } = props;

  const handleOnClick = () => {
    props.deleteReview(review.id);
  };

  return (
    <li>
      <p>{review.comment}</p>
      <button onClick={handleOnClick}>X</button>
    </li>
  );
};
export default Review;
