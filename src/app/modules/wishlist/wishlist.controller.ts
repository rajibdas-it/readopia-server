import { RequestHandler } from "express";
import httpStatus from "http-status";
import { WishlistService } from "./wishlist.service";

const createWishlist: RequestHandler = async (req, res) => {
  const { ...data } = req.body;
  console.log(data);

  const result = await WishlistService.createWishlist(data);

  res.status(httpStatus.OK).json({
    satusCode: httpStatus.OK,
    success: true,
    message: "Book added into wishlist successfully",
    data: result,
  });
};

const getAllWishlistBooks: RequestHandler = async (req, res) => {
  const result = await WishlistService.getAllWishlistBooks();

  res.status(httpStatus.OK).json({
    statusCode: 200,
    success: true,
    message: "Books retrived successfully",
    data: result,
  });
};
// const getSingleWishlistBook: RequestHandler = async (req, res) => {
//   const { id } = req.params;
//   const result = await BookService.getSingleBook(id);
//   res.status(httpStatus.OK).json({
//     statusCode: httpStatus.OK,
//     success: true,
//     data: result,
//   });
// };

// const updateBook: RequestHandler = async (req, res) => {
//   const { id } = req.params;
//   const { ...data } = req.body;
//   const result = await BookService.updateBook(id, data);
//   res.status(httpStatus.OK).json({
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book update successfully",
//     data: result,
//   });
// };

// const deleteBook: RequestHandler = async (req, res) => {
//   const { id } = req.params;
//   const result = await BookService.deleteBook(id);
//   res.status(httpStatus.OK).json({
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book delete successfully",
//     data: result,
//   });
// };

// const getAllGenreAndYear: RequestHandler = async (req, res) => {
//   const result = await BookService.getAllGenreAndYear();
//   res.status(httpStatus.OK).json({
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Publication year and genre retrived successfully",
//     data: result,
//   });
// };

export const WishlistController = {
  createWishlist,
  getAllWishlistBooks,
};
