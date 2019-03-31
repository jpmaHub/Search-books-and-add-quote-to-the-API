import { mount } from 'enzyme';
import AddBook from '.';
import React from 'react';
import faker from "faker";
import { generateMockSearchBooks } from '../../TestUtilities';
import { IBookListItem } from '../../UseCases/GetBooksSearch';

describe('SearchBook', () => {
  it('calls execute on getSearchBooks', async () => {
    const searchQuery = encodeURI(faker.lorem.word());

    const booksData: IBookListItem[] = generateMockSearchBooks(10);

    const getBooksSearch = {
      execute: jest.fn((searchQuery: string) => Promise.resolve(booksData)),
    };

    const addBook = mount((
      <AddBook searchBooksData={getBooksSearch} />
    ));

    const buttonClick = addBook.find({ "data-test": "btn-click" })
    buttonClick.first().simulate("click");

    expect(await getBooksSearch.execute).toHaveBeenCalled();
   
  });

  it('renders the book list', async () => {
    const searchQuery = encodeURI(faker.lorem.word());

    const booksData: IBookListItem[] = generateMockSearchBooks(10);

    const getBooksSearch = {
      execute: jest.fn((searchQuery: string) => Promise.resolve(booksData)),
    };

    const addBook = mount((
      <AddBook searchBooksData={getBooksSearch} />
    ));

    const buttonClick = addBook.find({ "data-test": "btn-click" })
    buttonClick.first().simulate("click");

    addBook.setState({ booksData: booksData, query: searchQuery });
    expect(addBook.find({ "data-test": "view-books" }).props().booksData).toEqual(booksData);
  });


  it('searches query state changes with input change', async () => {
    const searchQuery = encodeURI(faker.lorem.word());

    const booksData: IBookListItem[] = generateMockSearchBooks(10);

    const getBooksSearch = {
      execute: jest.fn((searchQuery: string) => Promise.resolve(booksData)),
    };

    const addBook = mount((
      <AddBook searchBooksData={getBooksSearch} />
    ));

    const buttonClick = addBook.find({ "data-test": "btn-click" })

    const getInput = addBook.find({ "data-test": "inputText" }).first().simulate('change', { target: { value: searchQuery } });
    buttonClick.first().simulate("click");

    expect(getInput.state().value).toEqual(searchQuery);
    expect(await getBooksSearch.execute).toHaveBeenCalledWith(searchQuery);
  });

  it('does not calls execute on getSearchBooks', async () => {
    const booksData: IBookListItem[] = generateMockSearchBooks(10);

    const getBooksSearch = {
      execute: jest.fn(() => booksData),
    };

    expect(await getBooksSearch.execute).not.toHaveBeenCalled();
  });

})