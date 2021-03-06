import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {Provider} from "react-redux";
import store from "./common/configureStore";
import {BrowserRouter} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import ErrBoundary from "./errorboudary/errBoundary";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrBoundary>
      <App />
      </ErrBoundary>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// 클로져 개념 알아보기.
