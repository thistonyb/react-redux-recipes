import React, { Component } from "react";

class RecipeSearch extends Component {
  state = { tag: "" };

  handleOnChange = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.fetchRecipes(this.state.tag);
    this.setState({
      tag: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.tag}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RecipeSearch;
