import React, { Component } from "react";
import AddBook from "../AddBook";
import AddQuote from "../AddQuote";
import GetSearchBooks from "../../UseCases/GetBooksSearch";
import BooksSearchApiGateway from "../../Gateways/BooksTitleApiGateway";
import QuotesAddApiGateway from "../../Gateways/QuotesAddApiGateway";
import AddQuotes from "../../UseCases/AddQuotes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from "antd";

const booksGateway = new BooksSearchApiGateway();
const getBooks = new GetSearchBooks(booksGateway);

const quoteGateway = new QuotesAddApiGateway();
const addQuote = new AddQuotes(quoteGateway);

export default class MainPage extends Component {
  public render() {
    return (
      <Router>
        <div>
          <Menu mode="horizontal" style={{ marginBottom: '20px' }}>
            <Menu.Item key="search">
              <Link data-test="search-page" to="/search-books/">Search Books</Link>
            </Menu.Item>
            <Menu.Item key="add">
              <Link  data-test="quote-page" to="/add-quote/">Add Quote</Link>
            </Menu.Item>
          </Menu>
          <Route data-test="search-route" path="/search-books/" component={this.getBooksPage} />
          <Route data-test="add-route" path="/add-quote/" component={this.addQuotePage} />
        </div>
      </Router>
    )
  }
  private getBooksPage = () => {
    return <AddBook searchBooksData={getBooks} />
  }

  private addQuotePage = () => {
    return <AddQuote add={addQuote} />
  }
}