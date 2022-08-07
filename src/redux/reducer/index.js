import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer";

export const rootReducer = combineReducers({
  counter: counterreducer,
});
