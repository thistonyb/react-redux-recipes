import React, { Component } from "react";
import RecipeLink from "./RecipeLink";
//rewrite this..should be a functional

// class RecipeResults extends Component {
//   render() {
//     const recipes = this.props.recipes.map((recipe) => {
//       return <RecipeLink key={recipe.id} recipe={recipe} />;
//     });
//     if (this.props.loading) {
//       return <div>Loading Recipes</div>;
//     }
//     return (
//       <div>
//         <ul style={{ padding: 0 }}>{recipes}</ul>
//       </div>
//     );
//   }
// }

/**
 * This functional component renders a RecipeLink for each of the
 * results of the recipes fetch.
 *
 * @param {*} props Props passed in from RecipesSearchContainer
 */
const RecipeResults = (props) => {
  console.log(props);
  const recipes = props.recipes.map((recipe) => (
    <RecipeLink key={recipe.id} recipe={recipe} />
  ));
  if (props.loading) {
    return <div>Loading Recipes</div>;
  }

  return <ul style={{ padding: 0 }}>{recipes}</ul>;
};
export default RecipeResults;
