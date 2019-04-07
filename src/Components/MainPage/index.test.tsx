import MainPage from ".";
import React from 'react';
import { mount } from 'enzyme';

describe('MainPage', () => {
  it("shows link routes", () => {
    const wrapper = mount(
        <MainPage />
    );
    expect(wrapper.find({"data-test": "search-page"}).first().props().to).toBe('/search-books/');
    expect(wrapper.find({"data-test": "quote-page"}).first().props().to).toBe('/add-quote/');
  })

  it("shows routes", () => {
    const wrapper = mount(
        <MainPage /> 
    );
    expect(wrapper.find({"data-test": "search-route"}).props().path).toBe('/search-books/');
    expect(wrapper.find({"data-test": "add-route"}).props().path).toBe('/add-quote/');
  })
});