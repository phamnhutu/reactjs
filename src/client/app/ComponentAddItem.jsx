import React from 'react';

class ComponentAddItem extends React.Component {
   handleCreateItem(){
        let _id = Math.floor((Math.random() * 100) + 1);
        this.props.createItem({id: _id, first_name: 'test '+_id,last_name:'last name test '+_id});
    }
   render() {
      return (                     
        <button style={{cursor:'pointer'}} onClick={this.handleCreateItem.bind(this)}> Add new</button>                     
      );
   }
}

export default ComponentAddItem;