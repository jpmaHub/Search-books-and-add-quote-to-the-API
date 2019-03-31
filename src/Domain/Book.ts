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

