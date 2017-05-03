import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import ComponentAddItem from './ComponentAddItem.jsx';

const initialState = {
    fetching:false,
    fetched:false,
    users:[],
    error: null,
}
const reducer = (state=initialState,action) => {    
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

const store = createStore(reducer,middleware);

store.subscribe(() => {    
    console.log( "Change data ",store.getState() );
});

store.dispatch({
    type:"FOO",
    payload: axios.get("http://localhost/react-hello-world/api/server.php")
});
//store.dispatch((dispatch) => {
//    dispatch({
//        type:"FETCH_USERS"
//    });
//    axios.get("http://localhost/react-hello-world/api/server.php")
//    .then((reponse)=>{
//        dispatch({
//        type:"REVICER_USER",payload:reponse
//        });
//    }).catch((err)=> {
//        dispatch({
//        type:"FETCH_USERS_ERROR",payload:err
//        });
//    });
    //Do something async     
//});

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data:[]}
      this.onDelete = this.onDelete.bind(this);
      this.createItem = this.createItem.bind(this);
   }
   
    createItem(item){
        this.state.data.push(item);
        this.setState({data: this.state.data});
    }
    componentDidMount() {
        fetch('http://localhost/react-hello-world/api/server.php') 
            .then(result=> result.json())             
            .then(data=> this.setState({data}));           
    }
    onDelete (item) {  
    this.state.data.map((itemValue, i) => {       
        if( itemValue.id === item.id){
            delete this.state.data[i];
        }
    });
    this.setState({data:this.state.data});
   }

   componentWillUnmount() {
   
   }
   render () {
    return(
        <div>            
            <p> Hello React!</p>
            <AwesomeComponent />
            <ComponentAddItem createItem={this.createItem.bind(this)} />
            <form>
                <label>
                  Name:
                  <input type="text" name="name" autoComplete={'off'} placeholder="enter input" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <table>
               <tbody>
                  {this.state.data.map((itemValue, i) => <TableRow key = {i} dataItem = {itemValue} onDelete={this.onDelete} />)}
               </tbody>
            </table>
        </div>
    )
  }
}


class TableRow extends React.Component {
   handleDelete(){
        this.props.onDelete(this.props.dataItem);
    }
   render() {
      return (
         <tr>
            <td>{this.props.dataItem.id}</td>
            <td>{this.props.dataItem.first_name}</td>
            <td>{this.props.dataItem.last_name}</td>
            <td>
                    <span style={{cursor:'pointer'}} onClick={this.handleDelete.bind(this)}> delete</span>
            </td>
         </tr>
      );
   }
}


ReactDOM.render(<App />, document.getElementById('app'));
