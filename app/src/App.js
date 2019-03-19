import React, { Component } from 'react';
import logo from './logo.svg';
import PostCard from './components/PostCard/PostCard';
import PostList from './components/PostList/PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PostCard />
        <PostList />
      </div>
    );
  }
}

export default App;
