import React, { Component } from 'react';
import PostList from './components/PostList/PostList';
import UserList from './components/userlist/userlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row col-12">
            <div className="col-9">
              <PostList />
            </div>
            <div className="col-3">
              <UserList />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
