import axios from "axios";


export const setJokesCategories = categories => {
  return {
    type: "SET_JOKES_CATEGORIES",
    payload: {
      categories
    }
  };
};

export const fetchJokesCategories = () => async (dispatch) => {
   try {
     const response = await axios.get('https://api.chucknorris.io/jokes/categories')
     dispatch(setJokesCategories(response.data))
     console.log(response.data)
   } catch (error) {
    window.alert("Erro de renderização");
   }
}


