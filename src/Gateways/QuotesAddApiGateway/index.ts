import * as axios from "axios";

async function createSession() {
  const response = await axios.default.post(
    `${process.env.REACT_APP_QUOTE_API_URL}/session`,
    loginData,
    loginHeaders
  );

  return Object.values(response.data)[0]
}

export default class QuotesAddApiGateway {
  public async addQuote(author: string, quote: string) {
    const quoteData = {
      "quote": {
        "author": author,
        "body": quote
      }
    }

    const response = await axios.default.post(
      `${process.env.REACT_APP_QUOTE_API_URL}/quotes`,
      quoteData, {
        headers: {
          'Authorization': `Token token="${process.env.REACT_APP_QUOTE_API_KEY}"`,
          'User-Token': await this.userToken(),
        },
      }
    );

    return response.data
  }

  public async userToken() {
    let userToken = await createSession();

    if (userToken == null) {
      userToken = ''
    }

    return userToken;
  }
}

const loginData = {
  "user": {
    "login": `${process.env.REACT_APP_QUOTE_USER}`,
    "password": `${process.env.REACT_APP_QUOTE_PASS}`,
  }
}

const loginHeaders = {
  headers: {
    Authorization: `Token token="${process.env.REACT_APP_QUOTE_API_KEY}"`,
  },
};

