import { RequestHandler } from "express";
import httpStatus from "http-status";
import { BookService } from "./book.service";

const createBook: RequestHandler = async (req, res) => {
  const { ...bookData } = req.body;

  const result = await BookService.createBook(bookData);

  res.status(httpStatus.OK).json({
    satusCode: httpStatus.OK,
    success: true,
    data: result,
  });
};

const getAllBook: RequestHandler = async (req, res) => {
  const result = await BookService.getAllBooks();
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
};
const getSingleBook: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const result = await BookService.getSingleBook(id);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
};

const updateBook: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;
  const { ...data } = req.body;
  const result = await BookService.updateBook(id, email, data);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Book update successfully",
    data: "",
  });
};

const deleteBook: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const result = await BookService.deleteBook(id);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Book delete successfully",
    data: result,
  });
};

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
