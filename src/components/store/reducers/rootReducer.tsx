import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { Todo } from "../actions/index";

export interface StoreState {
  todos: Todo[];
}

const rootReducer = combineReducers<StoreState>({
  // tododReducer,
  todos: todoReducer
});
export default rootReducer;
