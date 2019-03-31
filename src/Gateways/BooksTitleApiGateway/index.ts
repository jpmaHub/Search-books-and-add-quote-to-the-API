import * as axios from "axios";
import { IBookListItem } from "../../Domain/Book";

export interface IBooksApi {
  items: IBookListItem[];
}

export default class BooksSearchApiGateway {
  public async getBooksSearch(searchQuery: string): Promise<IBookListItem[]> {
    try {
      const response = await axios.default.get<IBooksApi>(`${process.env.REACT_APP_API_URL}${searchQuery}&key=${process.env.REACT_APP_API_KEY}&maxResults=5`);
      
      return response.data.items;
    } catch (error) {
      return [];
    }
  }
}

