import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userAction.jsx';

@connect((store)=> {
    return {
        user: store.user.user,
        userFetch:store.user.fetch,
        tweets: store.tweets.tweets
    };
})

class Layout extends React.Component {
  componentWillMount() {        
    this.props.dispatch(fetchUser());
  }
  render() {    
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <div><button>Like Me</button></div>
      </div>
    );
  }

}

export default Layout;