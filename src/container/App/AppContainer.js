import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "../../style/app";
import {
  fetchJokesCategories,
  fetchJokeFromGivenCategory,
} from "../../actions/jokes";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendering: false,
    };
  }

  componentDidMount() {
    this.props.fetchJokesCategories();
  }

  getNewJoke = () => {
    const currentCategory = this.props.category.categories[0];

    this.props.fetchJokeFromGivenCategory(currentCategory);
  };

  render() {
    const categories = this.props.categories.map((category) => (
      <button
        onClick={() => {
          this.props.fetchJokeFromGivenCategory(category);
        }}
      >
        {category.toUpperCase()}
      </button>
    ));

    return (
      <>
        {categories}

        <h1>{this.props.category.value}</h1>
        <button onClick={this.getNewJoke}>Recarregar</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.jokes.categories,
  category: state.jokes.category,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJokesCategories: () => dispatch(fetchJokesCategories()),
  fetchJokeFromGivenCategory: (category) =>
    dispatch(fetchJokeFromGivenCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
