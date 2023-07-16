import httpStatus from "http-status";
import ApiError from "../../../error/apiError";
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

const updateBook = async (id: string, userEmail: any, data: IBook) => {
  const book = await Book.findById(id);

  if (book?.createdBy !== userEmail) {
    throw new Error();
  } else {
    console.log("authorize");
  }

  // console.log(book);
  // console.log("update book service", id, userEmail, data);
};
const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
