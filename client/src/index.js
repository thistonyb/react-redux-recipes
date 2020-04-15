import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import manageRecipe from "./reducers/manageRecipe";
import { Provider } from "react-redux";
import { createStore } from redux;
//import * as serviceWorker from './serviceWorker';

const store = createStore(manageRecipe)
//Use Provider to provide store to top level 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
