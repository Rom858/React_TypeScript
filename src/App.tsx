import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/store/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
export default App;
