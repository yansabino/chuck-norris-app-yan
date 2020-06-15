const initialState = {
  categories: [],
  jokeCategory: ""
};

export const jokes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOKES_CATEGORIES":
      return {...state, categories: action.payload.categories}
    case "SET_JOKE_FROM_CATEGORY":
      return{...state, jokeCategory: action.payload.jokeCategory}
    default:
      return state;
  }
};
