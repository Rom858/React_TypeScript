import { combineReducers } from "redux";
import tododReducer from "./todoReducer";

const rootReducer = combineReducers({
  // tododReducer,
  counter: () => 1
});
export default rootReducer;
