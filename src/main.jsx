const startupLoader = document.getElementById("startup-loader");
if (startupLoader) {
  startupLoader.style.opacity = "0";
  setTimeout(() => startupLoader.remove(), 400);
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




