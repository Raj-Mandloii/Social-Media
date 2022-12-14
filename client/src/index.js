import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Provider helps us to keep a track of store that we have create 
// using redux and we can access it everywhere.
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import App from './App';
import reducers from "./reducers/index.js"
import "./index.css"
const store = createStore(reducers, compose(applyMiddleware(thunk)))




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));

