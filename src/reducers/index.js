import { combineReducers } from "redux";
import { jokes } from "./jokes";

export const rootReducer = combineReducers({
  jokes: jokes
});
