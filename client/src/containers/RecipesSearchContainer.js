import React, { Component } from "react";
import RecipeResults from "../components/recipes/RecipeResults";
import RecipeSearch from "../components/recipes/RecipeSearch";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/RecipeActions";
import TopBar from "../components/TopBar";

class RecipesSearchContainer extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <RecipeSearch fetchRecipes={this.props.fetchRecipes} />
        <RecipeResults recipes={this.props.recipes} />
        {this.props.recipes.length > 5 && (
          <RecipeSearch fetchRecipes={this.props.fetchRecipes} />
        )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesSearchContainer);
