import React, { Component } from "react";
import ViewBook from '../ViewBook';
import SearchForm from '../SearchForm';

interface IProps {
  bookType?: JSX.Element;
  listSearchedBooks?: boolean;
  type?: string;
}

interface IState {
  Books: JSX.Element[];
  deleted: boolean;
}

export default class AddBook extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    let typeBooks = this.props.bookType
    let books;
    if (this.props.listSearchedBooks === true && typeBooks != undefined) {
      books = [typeBooks]
    }
    this.state = { Books: books || [], deleted: false }
  }

  private addbook(event: any) {
    let currentBooks = this.state.Books;
    let textBox = event.target.previousElementSibling;

    if (textBox.value) {
      currentBooks.push(textBox.value);
      textBox.value = '';

      this.setState({
        Books: currentBooks
      });
    }
  }

  private removebook(event: any) {
    let currentbook = event.target.textContent;
    let updatedBooks = this.state.Books.filter((book: JSX.Element) => {
      return currentbook !== book;
    });

    this.setState({
      Books: updatedBooks
    });

    !this.state.deleted && this.setState({
      deleted: true
    });
  }

  render() {
    let cssbookItem = 'book-item';

    let bookItems = this.state.Books.map((book: JSX.Element, i: number) => {
      return <div onClick={this.removebook.bind(this)}
        className={cssbookItem}
        key={cssbookItem + i}>{book}
      </div>;
    });

    let placeText = this.props.type == undefined ? "Search Books by Title" : "Search Books by " + this.props.type;

    return (
      <div data-test="bookList"
        className="Books-list">
        <SearchForm>
          <input data-test="inputText" type="text" id="input-add" style={{ height: "20px", width: "150px" }} placeholder={placeText} />
          <button data-test="btn" type="primary" id="new-book"
            onClick={this.addbook.bind(this)} style={{ height: "27px" }}>Add book</button>
        </SearchForm>

        <ViewBook>
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            {bookItems}
          </div>
        </ViewBook>
      </div>
    );
  }
}
