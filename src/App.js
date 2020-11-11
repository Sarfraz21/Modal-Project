import React, { Component } from 'react';
import List from './components/List'


import 'bootstrap/dist/js/bootstrap.min.js'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default App;