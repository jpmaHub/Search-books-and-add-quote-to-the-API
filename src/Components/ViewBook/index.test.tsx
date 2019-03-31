import { shallow } from 'enzyme';
import ViewBook from ".";
import React from 'react';
import faker from "faker";
import { generateMockSearchBooks } from '../../TestUtilities';

describe('View Book', () => {
  const booksData = generateMockSearchBooks(faker.random.number(10));
  const wrapper = shallow( <ViewBook booksData={booksData}/> );

  it('renders book list table', () => {
    expect(wrapper.find({ "data-test": "table-wrapper-test" }).props().dataSource).toEqual(booksData);
  });
})
