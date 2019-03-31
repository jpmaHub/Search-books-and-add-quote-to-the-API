import BooksSearchApiGateway from "../../Gateways/BooksTitleApiGateway";
import { IBookListItem } from "../../Domain/Book";
export default class GetSearchBooks {
  private readonly gateway: BooksSearchApiGateway;

  constructor(gateway: BooksSearchApiGateway) {
    this.gateway = gateway;
  }

  public books(books: IBookListItem[]) {
    return books.map((book) => {
      return book
    })
  }

  public async execute(searchQuery: string) {
    const response = await this.gateway.getBooksSearch(searchQuery);
    return this.books(response);
  }
}
