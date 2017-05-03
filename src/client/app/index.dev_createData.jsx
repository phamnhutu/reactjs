import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import AddDataComponent from './AddDataComponent.jsx';
import './index.dev.css';
require('./bootstrap/css/bootstrap.css');

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data:[]}
   }
   onCreate(){
        alert('sss');
   }
   onDelete (item) {  
    this.state.data.map((person, i) => {       
        if( person.id === item.id){
            delete this.state.data[i];
        }
    });
    this.setState({data:this.state.data})
   }
   onEdit (item) {
        console.log(item);
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
            <AddDataComponent />
            <form>
                <label>
                  Name:
                  <input type="text" name="name" autoComplete={'off'} placeholder="enter input" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <table className="table table-striped">               
               <tbody>
                {this.state.data.map((person,i) => 
                <tr key={i}>
                    <td>{person.id}</td>
                    <td>{person.first_name}</td>
                    <td>{person.last_name}</td>
                    <td>
                    <span style={{cursor:'pointer'}} onClick={this.onEdit.bind(this,person)}><span className="glyphicon glyphicon-edit"></span>edit</span>
                    &nbsp;<span style={{cursor:'pointer'}} onClick={this.onDelete.bind(this,person)}> <span className="glyphicon glyphicon-trash"></span> delete</span>
                    </td>
                </tr>
                )}
               </tbody>
            </table>
        </div>
    )
  }
}


class TableRow extends React.Component {
   onDelete (item) {  
    console.log(item.link_delete);
    console.log(); 
    //this.state.data.map((person, i) => {
    //    console.log(person);
    //});
   }
   onEdit (item) {
    alert('sss');
   }
   render() {
      return (
         <tr>
            <td>{this.props.dataItem.id}</td>
            <td>{this.props.dataItem.first_name}</td>
            <td>{this.props.dataItem.last_name}</td>
            <td><span onClick={this.onEdit.bind(this,this.props.dataItem)}>edit</span>
            &nbsp;<span onClick={this.onDelete.bind(this,this.props.dataItem)}> delete</span></td>
         </tr>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
