import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import MainPage from './Components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
