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
    this.props.addReview(this.state.comment);
    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.handleOnChange}
          />
          <input typ="submit" />
        </form>
      </div>
    );
  }
}
