import { mount, ReactWrapper } from 'enzyme';
import SearchType from '.';
import React from 'react';

class SearchTypeComponent {
  private wrapper: ReactWrapper;

  constructor() {
    this.wrapper = mount(
      <SearchType type={"Author"} />
    );
  }

  public expectTextInsideElementToEqual(expected: string, findBy: string) {
    expect(this.wrapper.find(`[data-test="${findBy}"]`).text()).toEqual(expected);
  }
}

describe('Type', () => {
  const component = new SearchTypeComponent();

  it('renders the author type', () => {
    component.expectTextInsideElementToEqual("Author", "appType");
  });
})