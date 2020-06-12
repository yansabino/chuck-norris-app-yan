import axios from "axios";

export const setJokesCategories = (categories) => {
  return {
    type: "SET_JOKES_CATEGORIES",
    payload: {
      categories,
    },
  };
};

export const setJokeCategory = (category) => {
  return {
    type: "SET_JOKES_CATEGORY",
    payload: {
      category,
    },
  };
};

export const fetchJokesCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    dispatch(setJokesCategories(response.data));
  } catch (error) {
    window.alert("Erro de renderização");
  }
};

export const fetchJokeFromGivenCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    dispatch(setJokeCategory(response.data));
  } catch (error) {
    window.alert("Erro de renderização");
  }
};
