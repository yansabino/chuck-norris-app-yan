const initialState = {
  categoriesList: [],
  jokeCategory: "",
};

export const jokes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOKES_CATEGORIES_LIST":
      return { ...state, categoriesList: action.payload.categoriesList };
    case "SET_JOKE_FROM_CATEGORY":
      return { ...state, jokeCategory: action.payload.jokeCategory };
    default:
      return state;
  }
};
