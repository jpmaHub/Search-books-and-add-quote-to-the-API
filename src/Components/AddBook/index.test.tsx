import { mount, ReactWrapper } from 'enzyme';
import AddBook from '.';
import React from 'react';

class AddBookComponent {
  private wrapper: ReactWrapper;

  constructor() {
    this.wrapper = mount(
      <AddBook />
    );
  }

  public expectTextInsideElementToEqual(expected: string, findBy: string) {
    expect(this.wrapper.find(`[data-test="${findBy}"]`)).toBeTruthy();
    expect(this.wrapper.find(`[data-test="${findBy}"]`).text()).toEqual(expected);
  }
}

describe('Type', () => {
  const component = new AddBookComponent();

  it('renders the book list', () => {
    component.expectTextInsideElementToEqual("Add book", "bookList");
  });
})