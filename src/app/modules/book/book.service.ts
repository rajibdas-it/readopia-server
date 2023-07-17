import httpStatus from "http-status";
import ApiError from "../../../error/apiError";
import { IBook, IBookFilter } from "./book.interface";
import Book from "./book.model";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { bookSearchableField } from "./book.constant";
import { calculatePagination } from "../../../helper/calculatePagination";
import { SortOrder } from "mongoose";

const createBook = async (data: IBook): Promise<IBook> => {
  const result = await Book.create(data);
  return result;
};

// const getAllBooks = async (): Promise<IBook[]> => {
//   const result = await Book.find({});
//   return result;
// };
const getAllBooks = async (
  filters: IBookFilter,
  paginationOptions: IPaginationOptions
) => {
  const { search, ...filtersData } = filters;
  const andConditions = [];
  // console.log(search);

  if (search) {
    andConditions.push({
      $or: bookSearchableField.map((field) => ({
        [field]: {
          $regex: search,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Book.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (id: string, data: IBook): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate(id, data, { new: true });
  return result;
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
