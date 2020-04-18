import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../actions/RecipeActions";
import Recipe from "../components/recipes/Recipe";

class RecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  render() {
    const recipeId = this.props.match.params.recipeId;
    const recipe = this.props.recipe;
    if (recipe && recipe.id.toString() == recipeId) {
      return <Recipe recipe={recipe} />;
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
