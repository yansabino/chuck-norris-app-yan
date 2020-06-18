import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, StyledButton, StyledTitle } from "../../style/app";
import {
  fetchJokesCategories,
  fetchJokeFromGivenCategory,
} from "../../actions/jokes";
import CategoryList from "../../components/CategoryList";
import { CategoriesContainer } from "../../style/categories";
import { StyledImage } from "../../style/images";
import { JokeContainer, StyledJoke } from "../../style/jokes";
import Chuck from "../../imgs/chuck-animation.png";
import Loader from "../../components/Loader";

const AppContainer = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.fetchJokesCategories();
  });

  const getNewJoke = () => {
    let allCategories = props.jokeCategory.categories;
    if (!allCategories) {
      window.alert("Escolha uma Catergoria antes de Recarregar uma piada");
    } else {
      setLoading(true);
      let currentCategory = props.jokeCategory.categories[0];
      props.fetchJokeFromGivenCategory(currentCategory);
      setLoading(false);
    }
  };

  const categories = props.categoriesList.map((category) => (
    <CategoryList
      onClickCategory={handleCategoryClick(props, category)}
      categoriesRendered={category.toUpperCase()}
    />
  ));

  let chosenCategory = props.jokeCategory.categories;

  const jokeRendered = chosenCategory ? (
    <>
      <h3>Ultimate Joke:</h3>
      <StyledJoke>{props.jokeCategory.value}</StyledJoke>
    </>
  ) : (
    loading && <Loader />
  );

  return (
    <Container>
      <StyledTitle> Welcome to Norris's Jokes</StyledTitle>
      <StyledImage src={Chuck} alt="chuck-animation" />
      <h3 style={{ textAlign: "center" }}>Choose a Category:</h3>
      <CategoriesContainer>{categories}</CategoriesContainer>
      <JokeContainer>{jokeRendered}</JokeContainer>
      <StyledButton onClick={getNewJoke}>Reload a Joke</StyledButton>
    </Container>
  );
};

const handleCategoryClick = (props, category) => {
  return () => {
    props.fetchJokeFromGivenCategory(category);
  };
};

const mapStateToProps = (state) => ({
  categoriesList: state.jokes.categoriesList,
  jokeCategory: state.jokes.jokeCategory,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJokesCategories: () => dispatch(fetchJokesCategories()),
  fetchJokeFromGivenCategory: (category) =>
    dispatch(fetchJokeFromGivenCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
