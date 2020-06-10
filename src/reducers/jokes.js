const initialState = {
  categories: [],
  category: ""
};

export const jokes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOKES_CATEGORIES":
      return {...state, categories: action.payload.categories}
    case "SET_JOKES_CATEGORY":
      return{...state, category: action.payload.category}
    default:
      return state;
  }
};
