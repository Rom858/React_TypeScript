import { Todo, FetchTodos } from "../actions/index";
import { ActionTypes } from "../actions/types";
// index we can eliminate it
// most often redcuers alwyas use the interfaec that import from action
export const todoReducer = (state: Todo[] = [], action: FetchTodos) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO:
      return action.payload;
    default:
      return state;
  }
};
