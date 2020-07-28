import React, { Component } from "react";
import RecipeResults from "../components/recipes/RecipeResults";
import RecipeSearch from "../components/recipes/RecipeSearch";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/RecipeActions";
import TopBar from "../components/TopBar";
/**
 * This class renders the TopBar graphics, RecipeSearch at the top
 * of the results, RecipeResults, and RecipeSearch component again at
 * the bottom of results if results are long.
 */
class RecipesSearchContainer extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <RecipeSearch fetchRecipes={this.props.fetchRecipes} />
        <RecipeResults
          recipes={this.props.recipes}
          loading={this.props.loading}
        />
        {this.props.recipes.length > 5 && (
          <RecipeSearch fetchRecipes={this.props.fetchRecipes} />
        )}
      </div>
    );
  }
}
/**
 * Assigns the Redux store state recipes and loading status to the
 * keys recipes and loading.
 * @param {*} state Redux store state
 */
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: state.loading,
  };
};
/**
 * Assign fetchRecipe key to its corresponding action function for use
 * in props.
 * @param {*} dispatch Function used to dispatch actions for the store.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: (tag) => dispatch(fetchRecipes(tag)),
  };
};
/**
 * Connects component to Redux store
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesSearchContainer);
