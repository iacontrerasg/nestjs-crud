import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    NameProduct: String,
    Category: String,
    Description: String,
    ProductQuantity: Number,
    Status: Boolean,
    TimeStamp: { type: Date, default: Date.now },
  },
  { collection: 'Products_IsaacContreras' },
);
