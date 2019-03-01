import { shallow } from 'enzyme';
import SearchType from ".";
import React from 'react';

describe('Type', () => {
  const wrapper = shallow(<SearchType type={"Author"} />);

  it('renders the author type', () => {
    expect(wrapper.find(`[data-test="appType"]`).text()).toEqual("Author");
  });
})
