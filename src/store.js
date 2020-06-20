import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import allReducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const store = () => createStore(allReducers);

export default store