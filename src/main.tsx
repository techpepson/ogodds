import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme grayColor="sage" accentColor="tomato">
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Theme>
  </React.StrictMode>
);
