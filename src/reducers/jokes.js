const initialState = {
  categories: []
};

export const jokes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOKES_CATEGORIES":
      return {...state, categories: action.payload.categories}
    default:
      return state;
  }
};
