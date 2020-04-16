import React, { Component } from "react";
import Recipes from "../components/recipes/Recipes";
import RecipeInput from "../components/recipes/RecipeInput";
import { connect } from "react-redux";
import { fetchRecipes } from "./actions/RecipeActions";

class RecipesContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div>
        <Recipes recipes={this.props.recipes} />
        <RecipeInput recipes={this.props.recipes} />
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
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
