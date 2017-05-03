import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
class TextInput extends React.Component {

   constructor(props) {
      super(props);      
      this.state = {
         data: '',comment:'0123456789'
      }

    this.setNewNumber = this.setNewNumber.bind(this)
    this.setNewNumberNull = this.setNewNumberNull.bind(this)
   }    
    
   setNewNumber(item) {  
        console.log(item);
        item = item.toString();        
        if( item.localeCompare('=') == '0' ){            
            if( this.state.data.match(/x/g) ) {
                var arrNumber = this.state.data.split("x");
                this.setState({data: arrNumber[0]*arrNumber[1]});
            }

            if( this.state.data.match(/\+/g) ) {
                var arrNumber = this.state.data.split("+");
                let number_first = parseInt(arrNumber[0]);
                let number_second = parseInt(arrNumber[1]);
                let result_number = number_first + number_second;
                this.setState({data: result_number });
            }
            
            if( this.state.data.match(/-/g) ) {
                var arrNumber = this.state.data.split("-");
                let number_first = parseInt(arrNumber[0]);
                let number_second = parseInt(arrNumber[1]);
                let result_number = number_first - number_second;
                this.setState({data: result_number });
            }
            
            if( this.state.data.match(/:/g) ) {
                var arrNumber = this.state.data.split(":");
                let number_first = parseInt(arrNumber[0]);
                let number_second = parseInt(arrNumber[1]);
                let result_number = number_first / number_second;
                this.setState({data: result_number });
            }
        }else{
        this.setState({data: this.state.data +''+ item})
        }
   }
   
   setNewNumberNull(){
        this.setState({data: ''});
   }

   
   handleClick(){     
console.log(this.props.comment);   
       
   }

   render() {
      return (
         <div>            
            <table>
                <tbody>
                <tr key={'0'}>                    
                    <td colSpan={'4'}> <ScreenResult resultCalculator = {this.state.data}></ScreenResult></td>
                </tr>
                <tr key={'1'}>                    
                    <td colSpan={'3'}><button style={{width:'100px',height:'30px'}} onClick = {this.setNewNumberNull}>Clear</button></td>
                    <td><button style={{width:'30px',height:'30px'}} >{'<-'}</button></td>

                </tr>
                <tr key={'2'}>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,7)}>7</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,8)}>8</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,9)}>9</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,':')}>:</button></td>
                </tr>
                <tr key={'3'}>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,6)}>6</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,5)}>5</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,4)}>4</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,'x')}>x</button></td>
                </tr>
                <tr key={'4'}>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,3)}>3</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,2)}>2</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,1)}>1</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,'-')}>-</button></td>
                </tr>
                <tr key={'5'}>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,'.')}>.</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,0)}>0</button></td>
                    <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,'=')}>=</button></td>
                     <td><button style={{width:'30px',height:'30px'}} onClick = {this.setNewNumber.bind(this,'+')}>+</button></td>
                </tr>
                </tbody>
            </table> 
            <button onClick={this.handleClick}>Click me</button>         
         </div>
      );
   }
}

class ScreenResult extends React.Component {  
   render() {
      return (
         <div>            
            <h1 style={{width:'130px',height:'30px',boder:'1px solid #dfdfdf',padding:'4px'}}>{this.props.resultCalculator}</h1>
         </div>
      );
   }
}

export default TextInput;