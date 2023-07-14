import { RequestHandler } from "express";

const getAllBook: RequestHandler = (req, res) => {
  res.send("Route Work fine");
};

export const BookController = {
  getAllBook,
};
