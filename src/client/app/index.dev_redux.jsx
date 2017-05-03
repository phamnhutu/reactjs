import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import store from './store.jsx';
import { Provider } from 'react-redux';
import Layout from './components/Layout.jsx';
ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('app'));