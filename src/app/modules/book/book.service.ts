import { IBook } from "./book.interface";
import Book from "./book.model";

const createBook = async (data: IBook): Promise<IBook> => {
  const result = await Book.create(data);
  return result;
};

const getAllBooks = async (): Promise<IBook[]> => {
  const result = await Book.find({});
  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
};
