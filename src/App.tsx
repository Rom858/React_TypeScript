import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo, fetchTodos } from "./components/store/actions";

interface TodoList {
  todos: Todo[];
}
const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const getTodoList = (state: TodoList) => state.todos;
  const mapTodoList = useSelector(getTodoList);
  return (
    <div className="App">
      {mapTodoList.map(todo => (
        <div key={todo.id}>
          <h3>
            {todo.id}: Todo: {todo.title}
          </h3>
          <h3>Completed: {todo.completed ? "True" : "False"}</h3>
        </div>
      ))}
    </div>
  );
};
export default App;
