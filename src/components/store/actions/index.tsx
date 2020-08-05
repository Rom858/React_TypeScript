import { Dispatch } from "redux";
import axios from "axios";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodos {
  type: ActionTypes.FETCH_TODO;
  payload: Todo[];
}
//  FetchTodos Describe action type of data data fetch from API as an array
const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    //inside distpatch get only type that match as interface FetchTodos type and payload that i assigned to it
    dispatch<FetchTodos>({
      type: ActionTypes.FETCH_TODO,
      payload: response.data
    });
  };
};
