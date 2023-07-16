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
    success: false,
    data: result,
  });
};
const getSingleBook: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const result = await BookService.getSingleBook(id);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: false,
    data: result,
  });
};

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
};
