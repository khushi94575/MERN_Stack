const { required } = require("joi");
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: string,
      minLenght: 3,
      maxLength: 30,
      required: true,
      trim: true,
    },
    price: {
      type: number,
      min: 0,
      max: 30,
      required: true,
      trim: true,
    },
    category: {
      type: string,
      enum: ["Electronics", "clothing", "Books", "Home", "sports"],
      minLenght: 3,
      maxLength: 30,
      required: true,
      trim: true,
    },
    discription: {
      type: string,
      minLenght: 3,
      maxLength: 30,
      required: true,
      trim: true,
    },
    SKU: {
      type: string,
      minLenght: 3,
      maxLength: 30,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);


const ProductModel =  mongoosse.model("products",productSchema);
module.exports=ProductModel;
