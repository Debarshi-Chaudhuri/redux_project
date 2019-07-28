import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import { create_redux_store } from './store.js'

const store=create_redux_store();
ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
