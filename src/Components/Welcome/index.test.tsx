import { shallow } from 'enzyme';
import Welcome from ".";
import React from 'react';

describe('View Book', () => {
  const wrapper = shallow(<Welcome />);

  it('renders the header text', () => {
    expect(wrapper.find(`[data-test="appHeader"]`).text()).toEqual("Book Search");
  });
})
