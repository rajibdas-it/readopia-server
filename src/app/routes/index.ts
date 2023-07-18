import express from "express";
import { bookRoute } from "../modules/book/book.route";
import { wishlistRoute } from "../modules/wishlist/wishlist.route";

const router = express.Router();

const modulesRoute = [
  { pathName: "/book", routeName: bookRoute },
  { pathName: "/wishlist", routeName: wishlistRoute },
];

modulesRoute.forEach((route) => router.use(route.pathName, route.routeName!));

export default router;
