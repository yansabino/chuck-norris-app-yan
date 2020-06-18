import axios from "axios";

const baseUrl = "https://api.chucknorris.io/jokes"

export const setJokesCategories = (categoriesList) => {
  return {
    type: "SET_JOKES_CATEGORIES_LIST",
    payload: {
      categoriesList,
    },
  };
};

export const setJokeFromGivenCategory = (jokeCategory) => {
  return {
    type: "SET_JOKE_FROM_CATEGORY",
    payload: {
      jokeCategory, //Olhar nomes melhores parar as variaveis
    },
  };
};

export const fetchJokesCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
     `${baseUrl}/categories`
    );
    dispatch(setJokesCategories(response.data));
  } catch (error) {
    window.alert("Erro de renderização");
  }
};

export const fetchJokeFromGivenCategory = (jokeCategory) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/random?category=${jokeCategory}`
    );
    dispatch(setJokeFromGivenCategory(response.data));
  } catch (error) {
    window.alert("Erro de renderização");
  }
};
