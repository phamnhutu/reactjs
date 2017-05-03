import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import './index.dev.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data:[]}
   }
    componentDidMount() {
        fetch('http://localhost/react-hello-world/api/server.php') 
            .then(result=> result.json())             
            .then(data=> this.setState({data}));           
    }

   componentWillUnmount() {
   
   }
   render () {
    return(
        <div>            
            <p> Hello React!</p>
            <AwesomeComponent />
            <form>
                <label>
                  Name:
                  <input type="text" name="name" autoComplete={'off'} placeholder="enter input" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <table>               
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} dataItem = {person} />)}
               </tbody>
            </table>
        </div>
    )
  }
}


class TableRow extends React.Component {
   onDelete (item) {  
    console.log(item.link_delete);    
   }
   onEdit (object) {
    console.log(item); 
   }
   render() {
      return (
         <tr>
            <td>{this.props.dataItem.id}</td>
            <td>{this.props.dataItem.first_name}</td>
            <td>{this.props.dataItem.last_name}</td>
            <td><span onClick={this.onEdit.bind(this,this.props.dataItem)} href={this.props.dataItem.link_edit} >edit</span>
            &nbsp;<span onClick={this.onDelete.bind(this,this.props.dataItem)} href={this.props.dataItem.link_delete}>delete</span></td>
         </tr>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
