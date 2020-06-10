import { combineReducers } from "redux";
import { jokesReducer } from "./jokes";

export const rootReducer = combineReducers({
  jokes: jokesReducer
});
