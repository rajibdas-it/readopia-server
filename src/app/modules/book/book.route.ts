import express from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidation } from "./book.validation";

const router = express.Router();

router.post(
  "/create-book",
  validateRequest(bookValidation.createBookZodSchema),
  BookController.createBook
);
router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getSingleBook);
router.patch("/update-book/:id", BookController.updateBook);
router.delete("/delete-book/:id", BookController.deleteBook);

export const bookRoute = router;
