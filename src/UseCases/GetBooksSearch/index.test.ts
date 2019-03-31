import BooksSearchApiGateway from "../../Gateways/BooksTitleApiGateway";
import GetSearchBooks from ".";
import faker from "faker";
import { generateMockSearchBooks } from "../../TestUtilities";
import { IBookListItem } from "../../Domain/Book";

describe("GetBooksForSearch", () => {
  it("returns books for search", async () => {
    const booksData: IBookListItem[] = generateMockSearchBooks(10);
    
    const mockGateway: BooksSearchApiGateway = {
      getBooksSearch: jest.fn(() => Promise.resolve(booksData)),
    };

    const gatewaySpy = jest.spyOn(mockGateway, "getBooksSearch");
    
    const searchQuery = faker.lorem.word();
    await new GetSearchBooks(mockGateway).execute(searchQuery);

    expect(gatewaySpy).toBeCalledTimes(1);
    expect(gatewaySpy).toHaveBeenCalledWith(searchQuery);
  });
});