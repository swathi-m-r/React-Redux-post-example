import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';
import {Provider} from 'react-redux';
import store from './store.js';

class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
