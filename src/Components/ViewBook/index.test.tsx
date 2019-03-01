import { shallow } from 'enzyme';
import ViewBook from ".";
import React from 'react';

describe('View Book', () => {
  const wrapper = shallow(<ViewBook children={<div>Book1</div>} />);

  it('renders a book', () => {
    expect(wrapper.find('div')).toBeTruthy();
    expect(wrapper.find(`[data-test="viewBook"]`).text()).toEqual("Book1");
  });
})
