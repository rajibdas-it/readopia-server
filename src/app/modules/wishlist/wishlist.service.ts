import httpStatus from "http-status";
import { IWishlist } from "./wishlist.interface";
import Wishlist from "./wishlist.model";

const createWishlist = async (data: IWishlist): Promise<IWishlist> => {
  const result = (await Wishlist.create(data)).populate({ path: "book" });
  return result;
};

const getAllWishlistBooks = async (): Promise<IWishlist[]> => {
  const result = await Wishlist.find({});
  return result;
};

// const getSingleBook = async (id: string): Promise<IBook | null> => {
//   const result = await Book.findById(id);
//   return result;
// };

// const updateBook = async (id: string, data: IBook): Promise<IBook | null> => {
//   const result = await Book.findByIdAndUpdate(id, data, { new: true });
//   return result;
// };

// const deleteBook = async (id: string) => {
//   const result = await Book.findByIdAndDelete(id);
//   return result;
// };

// const getAllGenreAndYear = async () => {
//   const result = await Book.find({}, { genre: 1, publicationYear: 1 });
//   return result;
// };

export const WishlistService = {
  createWishlist,
  getAllWishlistBooks,
};
