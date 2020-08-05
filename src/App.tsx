import * as React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Todo, fetchTodos } from "./components/store/actions";
import { StoreState } from "./components/store/reducers/rootReducer";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
const App: React.FC<AppProps> = () => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const gettodos = useSelector<StoreState>((state: StoreState) => state.todos);
  console.log(gettodos);
  return <>Hello</>;
};
export default App;
