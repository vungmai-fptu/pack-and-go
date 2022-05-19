import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux
import store from "./store";
import { Provider } from "react-redux";
// css
import "./assets/css/app.2b0837a770c7b90031b1.css";
import "./assets/css/scripts.2b0837a770c7b90031b1.css";
import "./assets/css/cssloader-e87638f7bc9a.css";
import "./assets/css/css.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
