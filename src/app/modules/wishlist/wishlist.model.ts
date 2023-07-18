import { Schema, model } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    user: { type: String, required: true },
    readStatus: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const Wishlist = model<IWishlist>("Wishlist", WishlistSchema);

export default Wishlist;
