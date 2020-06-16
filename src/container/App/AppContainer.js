import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, StyledButton } from "../../style/app";
import {
  fetchJokesCategories,
  fetchJokeFromGivenCategory,
} from "../../actions/jokes";
import CategoryList from "../../components/CategoryList";
import { CategoriesContainer } from "../../style/categories";
import { StyledImage } from "../../style/images";
import { JokeContainer } from "../../style/jokes";
import Chuck from "../../imgs/chuck-animation.png";

const AppContainer = (props) => {
  useEffect(() => {
    props.fetchJokesCategories();
  });

  const getNewJoke = () => {
    let allCategories = props.jokeCategory.categories;
    if (!allCategories) {
      window.alert("Escolha uma Catergoria antes de Recarregar uma piada");
    } else {
      let currentCategory = props.jokeCategory.categories[0];
      props.fetchJokeFromGivenCategory(currentCategory);
    }
  };

  const categories = props.categories.map((category) => (
    <CategoryList
      onClickCategory={() => {
        props.fetchJokeFromGivenCategory(category);
      }}
      categoriesRendered={category.toUpperCase()}
    />
  ));

  let currentCategory = props.jokeCategory.categories;

  return (
    <Container>
      <StyledImage src={Chuck} alt="chuck-animation" />
      <h3 style={{ textAlign: "center" }}>Categories:</h3>
      <CategoriesContainer>{categories}</CategoriesContainer>
      <JokeContainer>
        {currentCategory &&  <h2 style={{ border: "2px solid black", padding: "10px" }}>{props.jokeCategory.value}</h2>}
      </JokeContainer>

      <StyledButton onClick={getNewJoke}>Recarregar</StyledButton>
    </Container>
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
