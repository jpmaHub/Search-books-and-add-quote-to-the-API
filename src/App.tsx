import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import AddBook from './Components/AddBook';
import BooksSearchApiGateway from './Gateways/BooksTitleApiGateway';
import GetSearchBooks from './UseCases/GetBooksSearch';

const gateway = new BooksSearchApiGateway();
const getBooks = new GetSearchBooks(gateway);

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <Header/> 
        <AddBook searchBooksData={getBooks}/>
      </div>
    );
  }
}

export default App;
