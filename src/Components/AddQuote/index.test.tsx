import { mount } from 'enzyme';
import React from 'react';
import faker from "faker";
import AddQuote from '.';

describe('AddQuote', () => {
  it('calls execute on addQuote usecase', async () => {
    const addAQuote = {
      execute: jest.fn()
    };

    const addQuote = mount((
      <AddQuote add={addAQuote} />
    ));

    addQuote.find({ "data-test": "add-quote-button" }).first().simulate('submit')

    expect(addAQuote.execute).toHaveBeenCalled();
  });

  it('does not calls execute on addQuote usecase', async () => {
    const addAQuote = {
      execute: jest.fn()
    };

    expect(addAQuote.execute).not.toHaveBeenCalled();
  });

  it('adds quotes with input change form data', async () => {
    const author = faker.lorem.word();
    const quote = faker.lorem.sentence();

    const addAQuote = {
      execute: jest.fn()
    };

    const addQuote = mount((
      <AddQuote add={addAQuote} />
    ));

    const buttonClick = addQuote.find({ "data-test": "add-quote-button" })

    const getInputAuthor = addQuote.find({ "data-test": "inputTextAuthor" }).first().simulate('change', { target: { value: author } });
    const getInputQuote = addQuote.find({ "data-test": "inputTextQuote" }).first().simulate('change', { target: { value: quote } });

    buttonClick.first().simulate('submit')

    expect(getInputAuthor.state().value).toEqual(author);
    expect(getInputQuote.state().value).toEqual(quote);
    expect(addAQuote.execute).toHaveBeenCalledWith(author, quote);
  });

  it('submits form data', async () => {
    const author = faker.lorem.word();
    const quote = faker.lorem.sentence();

    const addAQuote = {
      execute: jest.fn()
    };

    const addQuote = mount((
      <AddQuote add={addAQuote} />
    ));

    const buttonClick = addQuote.find({ "data-test": "add-quote-button" })

    addQuote.find({ "data-test": "inputTextAuthor" }).first().simulate('change', { target: { value: author } });
    addQuote.find({ "data-test": "inputTextQuote" }).first().simulate('change', { target: { value: quote } });

    buttonClick.first().simulate('submit')

    expect(addAQuote.execute.mock.calls.length).toBe(1);
    expect(addAQuote.execute.mock.calls[0][0]).toBe(author);
    expect(addAQuote.execute.mock.calls[0][1]).toBe(quote);
  });
})