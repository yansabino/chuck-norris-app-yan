import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "../../style/app";
import {
  fetchJokesCategories,
  fetchJokeFromGivenCategory,
} from "../../actions/jokes";

const AppContainer = (props) => {
  useEffect(() => {
    props.fetchJokesCategories();
  });

  const getNewJoke = () => {
    const currentCategory = props.category.categories[0];

    props.fetchJokeFromGivenCategory(currentCategory);
  };

  const categories = props.categories.map((category) => (
    <button
      onClick={() => {
        props.fetchJokeFromGivenCategory(category);
      }}
    >
      {category.toUpperCase()}
    </button>
  ));

  return (
    <>
      {categories}
      <h1>{props.jokeCategory.value}</h1>
      <button onClick={getNewJoke}>Recarregar</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.jokes.categories,
  jokeCategory: state.jokes.jokeCategory,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJokesCategories: () => dispatch(fetchJokesCategories()),
  fetchJokeFromGivenCategory: (category) =>
    dispatch(fetchJokeFromGivenCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
