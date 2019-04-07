import React, { Component } from "react";
import ViewBook from '../ViewBook';
import SearchForm from '../SearchForm';
import { IBookListItem } from "../../UseCases/GetBooksSearch";
import { Input, Button } from 'antd';
import './index.css';

export interface ISearchBooksData {
  execute: (searchQuery: string) => Promise<IBookListItem[]>;
}

interface IProps {
  bookType?: JSX.Element;
  listSearchedBooks?: boolean;
  type?: string;
  searchBooksData: ISearchBooksData;
}

interface IState {
  booksData: IBookListItem[];
}

export default class AddBook extends Component<IProps, IState> {
  private textInput: React.RefObject<Input>;

  constructor(props: IProps) {
    super(props);

    this.textInput = React.createRef();

    this.state = {
      booksData: [],
    }
  }

  private async addbook(event: any) {
    let query = this.textInput.current!.state.value

    let result = await this.props.searchBooksData.execute(query)
    this.setState({ booksData: result })
  }

  public render() {
    return (
      <div data-test="bookList"
        className="Books-list">

        <SearchForm>
          <Input ref={this.textInput} data-test="inputText" type="text" className="input-add" />
          <Button data-test="btn-click" type="primary" id="new-book" onClick={this.addbook.bind(this)} style={{ height: "27px" }}>Search</Button>
        </SearchForm>

        <ViewBook data-test="view-books" booksData={this.state.booksData} />
      </div>
    );
  }
}

