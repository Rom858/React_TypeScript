import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(Store.getState());
export default Store;
