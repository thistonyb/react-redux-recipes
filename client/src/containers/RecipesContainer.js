import React, { Component } from "react";
import Recipes from "../components/recipes/Recipes";
import RecipeSearch from "../components/recipes/RecipeSearch";
import { connect } from "react-redux";
import { fetchRecipes } from "./actions/RecipeActions";

class RecipesContainer extends Component {
  render() {
    return (
      <div>
        <Recipes recipes={this.props.recipes} />
        <RecipeSearch fetchRecipes={this.props.fetchRecipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: (tag) => dispatch(fetchRecipes(tag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
