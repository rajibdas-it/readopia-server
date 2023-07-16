import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    imageUrl: { type: String },
    descriptions: { type: String },
    createdBy: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const Book = model<IBook>("Book", BookSchema);

export default Book;
