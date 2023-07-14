import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.get("/", BookController.getAllBook);

export const bookRoute = router;
