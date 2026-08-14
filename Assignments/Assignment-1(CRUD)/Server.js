const express = require("express");
const app = express();
const authMiddleware=require("./authMiddleware");
const cookieParser = require("cookie-parser");  
const jwt = require("jsonwebtoken");
const connectDB = require("./db");

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("./Model/authModel");
const Product = require("./Model/productModel");
app.use(express.json());
app.use(cookieParser());
const JWT_SECRET = "mysecretkey";
console.log(authMiddleware);
app.post("/register", async (req, res) => {
  try {
    const { authname, email, password } = req.body;
    if (!authname || !password || !email) {
      return res.status(400).json({ message: "All fields are  Required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      authname,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        authname: user.authname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      Message: "internal server error ",
    });
  }
});

//Login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "invalid email",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        message: "invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Login successfully ",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      Message: "internal server error ",
    });
  }
});

//Logout
app.post("/logout", async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successfully",
  });
});

//Product Api
app.post("/createproduct",authMiddleware, async (req, res) => {
  try {
    const { name, SKU, description, price, category } = req.body;
    if (!name || !SKU || !description || !price || !category) {
      return res.status(400).json({
        message: "All field are required",
      });
    }
    const existingProduct = await Product.findOne({ SKU });
    if (existingProduct) {
      return res.status(400).json({
        message: "product already exist",
      });
    }
    const product = new Product({
      name,
      SKU,
      description,
      price,
      category,
    });
    await product.save();
    res.status(201).json({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

///get all product

app.get("/getAllproducts",authMiddleware, async (req, res) => {
  try {
    const allproduct = await Product.find({});
    if (allproduct.length == 0) {
      res.status(400).json({
        message: "product not found",
      });
    }
  res.status(200).json({allproduct});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/getProductbyid/:id",authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

app.patch("/update",authMiddleware,async(req,res)=>{
try{
  const{id}=req.params;
  const product= await product.findById(id);
  if(!product){
    return res.status(404).json({
      message:"product not found "
    })
  }

  const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true
      }
    );

    res.status(200).json({message:"product update successfully "})
}
catch(error){
  console.error(error);
    res.status(500).json({message:"unsuccessful Updation"})
}

})

app.delete("/deleteProduct/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      message: "Product deleted successful  ly",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});
connectDB();
app.listen(3000, () => {
  console.log("Server is running");
});
