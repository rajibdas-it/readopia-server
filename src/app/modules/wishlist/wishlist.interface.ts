import { Types } from "mongoose";
import { IBook } from "../book/book.interface";

export type IWishlist = {
  book: Types.ObjectId | IBook;
  user: string;
  readStatus?: boolean;
};
