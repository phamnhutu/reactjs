import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props){
    super(props);
    this.state ={fullName:'',content:''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
   }
   handleTitleChange(e) {
        this.setState({content: e.id});  
     }
   onClickMe(fullName){
        this.setState({fullName:fullName});
    }
   render () {
    return(
        <div>
            <h1>Test hello world</h1>
            <ChildInput fullName={this.state.fullName} content={this.state.content} handleTitleChange={this.handleTitleChange} onClickMe={this.onClickMe.bind(this)}/>
            <p></p>
            Xin chao: {this.state.fullName}
        </div>
    )
  }
}

class ChildInput extends React.Component {
   handleTitleChange(e){
        let _id = Math.floor((Math.random() * 100) + 1);
        this.props.handleTitleChange({id: e.target.value, first_name: 'test '+_id,last_name:'last name test '+_id});
    }
   render () {
    return(
        <div>
            <input type="text" onChange={this.handleTitleChange.bind(this)} />
            <button onClick={this.props.onClickMe.bind(this,this.props.content)}>Click_me</button>
        </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));