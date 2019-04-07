import nock from "nock";
import QuotesAddApiGateway from ".";
import faker from 'faker';
import axios from 'axios';

const gateway = new QuotesAddApiGateway();
const author = faker.lorem.word();
const quote = faker.lorem.sentences();

axios.defaults.adapter = require('axios/lib/adapters/http');

it("posts the given quote to the endpoint", async () => {
  const scope = nock('https://favqs.com', { allowUnmocked: true }).post('/api/quotes', quoteAdd).reply(200, addedQuote, {
    "Access-Control-Allow-Origin": "*",
  })

  const response = await gateway.addQuote(author, quote)
  expect(response).toEqual(addedQuote)
  expect(scope.isDone()).toBe(true)
  nock.cleanAll()
})

it("creates session", async () => {
  const userToken = 
  { 
    "User-Token": faker.lorem.lines(),
    "login": faker.lorem.word(),
    "email": faker.lorem.word()
  }

  const scope = nock('https://favqs.com/api')
  .post('/session', loginData).reply(200, userToken)

  const response = await gateway.userToken()
  expect(response).toEqual(userToken["User-Token"])
  expect(scope.isDone()).toBe(true)
  
  nock.cleanAll()
})

it("post the given quote data to the endpoint", async () => {
  nock('https://favqs.com/api')
  .post('/session', loginData).reply(200)

  const scope = nock('https://favqs.com/api').post('/quotes', quoteAdd).reply(200,  addedQuote)

  const response = await gateway.addQuote(author, quote)
  expect(response).toEqual(addedQuote)
  expect(scope.isDone()).toBe(true)
  
  nock.cleanAll()
})

const quoteAdd = {
  "quote": {
    "author": author,
    "body": quote
  }
}

const loginData = {
  "user": {
    "login": `${process.env.REACT_APP_QUOTE_USER}`,
    "password": `${process.env.REACT_APP_QUOTE_PASS}`,
  }
}

const addedQuote = {
  "id": faker.random.number(),
  "quote": {
    "author": author,
    "body": quote
  }
}
