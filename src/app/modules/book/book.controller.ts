import { RequestHandler } from "express";
import httpStatus from "http-status";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";
import { bookFilterableField } from "./book.constant";
import { paginationFields } from "../../../constant/paginationField";

const createBook: RequestHandler = async (req, res) => {
  const { ...bookData } = req.body;

  const result = await BookService.createBook(bookData);

  res.status(httpStatus.OK).json({
    satusCode: httpStatus.OK,
    success: true,
    message: "Book added successfully",
    data: result,
  });
};

const getAllBook: RequestHandler = async (req, res) => {
  const filters = pick(req.query, bookFilterableField);
  console.log(filters);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllBooks(filters, paginationOptions);

  res.status(httpStatus.OK).json({
    statusCode: 200,
    success: true,
    message: "Books retrived successfully",
    meta: result.meta,
    data: result.data,
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
  const { ...data } = req.body;
  const result = await BookService.updateBook(id, data);
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Book update successfully",
    data: result,
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

const getAllGenreAndYear: RequestHandler = async (req, res) => {
  const result = await BookService.getAllGenreAndYear();
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Publication year and genre retrived successfully",
    data: result,
  });
};

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getAllGenreAndYear,
};
