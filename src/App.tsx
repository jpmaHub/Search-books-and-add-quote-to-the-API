import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import AddBook from './Components/AddBook';

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <Header/> 
        <AddBook />
      </div>
    );
  }
}

export default App;
