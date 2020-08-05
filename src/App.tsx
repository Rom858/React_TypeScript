import * as React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { Todo, fetchTodos } from "./components/store/actions";
import { StoreState } from "./components/store/reducers/rootReducer";

export interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
const App: React.FC<AppProps> = () => {
  React.useEffect(() => {
    fetchTodos();
  }, []);
  return <>Hello</>;
};
export default App;
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};
export const _App = connect(
  mapStateToProps,
  { fetchTodos }
)(App);
