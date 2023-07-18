export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  imageUrl?: string;
  descriptions?: string;
  createdBy: string;
};

export type IBookFilter = {
  search?: string;
  genre?: string;
  publicationYear?: string | number;
};
