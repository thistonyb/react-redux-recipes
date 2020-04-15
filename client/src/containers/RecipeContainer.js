import React, { Component } from "react";
import Recipes from "../components/recipes/Recipes";
import { connect } from "react-redux";
import { fetchRecipes } from "./actions/RecipeActions";

class RecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div>
        <Recipes recipes={this.props.recipes} />
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
