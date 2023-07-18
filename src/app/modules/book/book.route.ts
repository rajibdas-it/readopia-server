import express from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidation } from "./book.validation";

const router = express.Router();
router.get("/genre-publishYear", BookController.getAllGenreAndYear);

router.post(
  "/create-book",
  validateRequest(bookValidation.createBookZodSchema),
  BookController.createBook
);

router.get("/:id", BookController.getSingleBook);
router.patch("/update-book/:id", BookController.updateBook);
router.delete("/delete-book/:id", BookController.deleteBook);
router.get("/", BookController.getAllBook);

export const bookRoute = router;
