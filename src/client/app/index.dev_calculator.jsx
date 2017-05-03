import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App111 from './App.jsx';
import Canculator from './Canculator.jsx';

class App extends React.Component {
    
   handleClick(){
        this.props.deleteLetter();
   }
   render () {
    return(
        <div style={{width:'300px',margin:'auto'}}>            
            <p> Perform calculator!</p>           
            <Canculator />
            <button onClick={this.handleClick.bind(this)}>Click me</button>
        </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));