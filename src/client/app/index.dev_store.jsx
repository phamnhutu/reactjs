import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


const reducer = (state,action) => {    
    switch(action.type){
        case "FETCH_USERS_PENDING": {
            state = { fetching : true };
            return state;
            break;
        }
       
        case "FETCH_USERS_REJECTED": {
            state = { fetching : true,fetched:true, user:action.payload };
            return state;
            break;
        }
        
        case "FETCH_USERS_FULFILLED": {
            state = { fetching :false,error:action.payload,user:action.payload};
            return state;
            break;
        }       
    }
   return state;
}

const middleware = applyMiddleware(promise(),ReduxThunk,logger);

export default createStore(reducer,middleware);