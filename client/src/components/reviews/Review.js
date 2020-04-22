import React from "react";

const Review = (props) => {
  const { review, recipe } = props;

  const handleOnClick = () => {
    props.deleteReview(review.id);
  };

  return (
    <li>
      <h4>{recipe.name}</h4>
      <p>{review.comment}</p>
      <button onClick={handleOnClick}>X</button>
    </li>
  );
};
export default Review;
