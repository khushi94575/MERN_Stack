const express = require("express");
const joi = require("joi");
const app = express();
const PORT = 3000;

const connectDB = require("./db");
const StudentModel = require("./userModel");
const ProductModel = require("./ProductModel");

app.use(express.json());

app.post("/createProduct", async (req, res) => {
  try {
    const validationSchema = joi.object({
      productName: joi.string().required().min(2).max(128),
      price: joi.number().required().min(0),
      category: joi.string().required().min(2).max(128),
      SKU: joi.string().required().min(2).max(128),
      description: joi.string().required().min(2).max(256),
    });
    const { error, value } = validationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Invalid input data",
        details: error.details[0].message,
      });
    }

    const { productName, price, description, category, SKU } = value;

    const existingProduct = await ProductModel.findOne({ SKU });
    if (existingProduct) {
      return res.status(409).json({ message: "Product SKU already exists." });
    }

    const newProduct = await ProductModel.create({
      productName,
      price,
      description,
      category,
      SKU,
    });

    return res.status(201).json({
      message: "PRODUCT CREATED SUCCESSFULLY",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET PRODUCTS
app.get("/products", async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});

    if (allProducts.length === 0) {
      return res.status(404).json({
        message: "No products found.",
      });
    }

    return res.status(200).json({
      message: "Products fetched successfully.",
      data: allProducts,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });