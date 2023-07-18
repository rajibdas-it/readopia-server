import { z } from "zod";

const createWishlistZodSchema = z.object({
  body: z.object({
    book: z.string({ required_error: "book id must include" }),
    user: z.string({ required_error: "You need log in first" }),
    readStatus: z.boolean().optional(),
  }),
});

export const wishListValidation = {
  createWishlistZodSchema,
};
