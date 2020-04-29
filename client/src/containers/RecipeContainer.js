import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../actions/RecipeActions";
import Recipe from "../components/recipes/Recipe";
import TopBar from "../components/TopBar";
/**
 * RecipeContainer renders the TopBar graphics and Recipe components.
 */
class RecipeContainer extends Component {
  /**
   * Using componentDidMount to keep the recipe fetch asynchronous.
   */
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }
  /**
   * Render TopBar component. Recipe is rendered if the id from the Route
   * and state props match. There potentially could be another recipe in
   * the store and we dont dont want to show the old one before the fetch
   * of the new recipe comes back.
   */
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
/**
 * Assigns the Redux store state recipe and loading status to the
 * keys recipe and loading.
 * @param {*} state Redux store state
 */
const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    loading: state.loading,
  };
};
/**
 * Assign fetchRecipe key to corresponding action function.
 * @param {*} dispatch Function used to dispatch actions to the store.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
  };
};
/**
 * Connects component to Redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
