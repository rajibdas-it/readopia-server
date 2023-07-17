export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  imageUrl?: string;
  descriptions?: string;
  createdBy: string;
};

export type IBookFilter = { search?: string };
