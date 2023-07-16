import { z } from "zod";

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    author: z.string({ required_error: "Author Name is required" }),
    publicationDate: z.string({
      required_error: "Publication Date is required",
    }),
    genre: z.string({ required_error: "Genre is required" }),
    createdBy: z.string({ required_error: "You have to login first" }),
    imageUrl: z.string({}).optional(),
    descriptions: z.string({}).optional(),
  }),
});

export const bookValidation = {
  createBookZodSchema,
};
