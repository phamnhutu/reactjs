import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import ComponentAddItem from './ComponentAddItem.jsx';

const userReducer = (state={},action) => {    
    switch(action.type){
        case "CHANGE_NAME":{
            state.name = action.payload;
            break;
        }
        case "CHANGE_AGE":{
            state.age = action.payload;
            break;
        }
        case "E":{
            throw new Error("Ahhiiiii");
        }
    }
   return state;
}
const tweetsReducer = (state=[],action) => {
    return state;
}
const reducers = combineReducers({ 
    user:userReducer,
    tweets:tweetsReducer,
});
const loger = (store)=> (next)=> (action) => {
    console.log('Action fired', action); next(action);
}
const error = (store)=> (next)=> (action) => {
    try{
        next(action)
    }
    catch(e){
        console.log('Action error', e);
    }
   
}
const middleware = applyMiddleware(loger,error);
const store = createStore(reducers,middleware);
store.subscribe(() => {    
    console.log( "Change data ",store.getState() );
});
store.dispatch({type:"CHANGE_NAME",payload:"Will"});
store.dispatch({type:"CHANGE_AGE",payload:26});
store.dispatch({type:"CHANGE_AGE",payload:36});
store.dispatch({type:"E",payload:36});

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
