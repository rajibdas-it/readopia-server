import express from "express";
import { bookRoute } from "../modules/book/book.route";

const router = express.Router();

const modulesRoute = [{ pathName: "/book", routeName: bookRoute }];

modulesRoute.forEach((route) => router.use(route.pathName, route.routeName!));

export default router;
