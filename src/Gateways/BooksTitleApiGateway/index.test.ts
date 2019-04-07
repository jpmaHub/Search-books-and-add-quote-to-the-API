import BooksSearchApiGateway from ".";
import nock from "nock";
import faker from "faker";
import { generateMockSearchBooks } from "../../TestUtilities";

const gateway = new BooksSearchApiGateway();

it("gets books for the given search", async () => {
  const searchQuery = encodeURI(faker.lorem.word());
  const books = generateMockSearchBooks(5)
  const booksSearchApiResponse = {
    items: books,
  };

   nock("https://www.googleapis.com")
    .get(`/books/v1/volumes?q=${searchQuery}&key=${process.env.REACT_APP_API_KEY}&maxResults=5`)
    .reply(200, booksSearchApiResponse, {
      "Access-Control-Allow-Origin": "*",
    });

  const result = await gateway.getBooksSearch(searchQuery);

  expect(result).toEqual(books);
});



