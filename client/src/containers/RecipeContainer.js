import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../actions/RecipeActions";
import Recipe from "../components/recipes/Recipe";
import TopBar from "../components/TopBar";

class RecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  render() {
    const recipeId = this.props.match.params.recipeId;
    const recipe = this.props.recipe;
    if (recipe && recipe.id.toString() == recipeId) {
      return (
        <div>
          <TopBar />
          <Recipe recipe={recipe} />
        </div>
      );
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
