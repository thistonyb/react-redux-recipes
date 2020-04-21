import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    comment: "",
  };

  handleOnChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.comment, this.props.recipeId);
    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <textarea value={this.state.comment} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default ReviewInput;
