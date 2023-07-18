import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { WishlistController } from "./wishlist.controller";
import { wishListValidation } from "./wishlist.validation";

const router = express.Router();

router.post(
  "/add-wishlist",
  validateRequest(wishListValidation.createWishlistZodSchema),
  WishlistController.createWishlist
);
router.get("/", WishlistController.getAllWishlistBooks);

export const wishlistRoute = router;
