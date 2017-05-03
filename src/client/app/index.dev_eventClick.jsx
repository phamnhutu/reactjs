import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import './index.dev.css';

class App extends React.Component {
   constructor(props){
        super(props);
        this.state = {date: new Date(),title:'none',comment:'','content':''};
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }  
   ClickMe(){
        this.setState({title: this.state.content });            
    }
    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
   }
   componentWillUnmount() {
    clearInterval(this.timerID);
   }
    tick() {
    this.setState({
      date: new Date()
    });
   }
   
   handleTitleChange(e) {
        this.setState({content: e.target.value});        
     }
   render(){
        return(<div>
            <form>
                <input name="title" onChange={this.handleTitleChange.bind(this)} className="enterTitle" placeholder="Nhap ho ten" autoComplete={'off'} />
                <button type="button" onClick={this.ClickMe.bind(this)} >Click me</button>
                <p></p>
                <span>Xin chao: {this.state.date.toLocaleTimeString()} {this.state.title}</span>
            </form>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
