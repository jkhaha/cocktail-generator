import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
// provider connects store and react
import { reducer } from "./store/reducer"
// reducers take in state and action

const store = createStore(reducer)
// invoke createStore and save it into the constant value of "store"

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
