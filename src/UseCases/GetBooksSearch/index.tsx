import BooksSearchApiGateway from "../../Gateways/BooksTitleApiGateway";

export interface IBookList {
  authors: string[];
  description: string;
  publisher: string;
  publishedDate: string;
  pageCount: string;
  averageRating: number,
  ratingsCount: number,
  title: string;
}

export interface IBookListItem {
  id: string;
  volumeInfo: IBookList;
}

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
