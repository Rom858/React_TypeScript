import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Store from "./components/store/store";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
