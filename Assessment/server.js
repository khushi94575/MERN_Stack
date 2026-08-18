const express = require("express");
const connectDB = require("./src/config/db");
const reviewRoute=require("../Assessment/src/Route/reviewRoute")
const app = express();

app.use(express.json());

connectDB();

app.use("/reviews", reviewRoute);

app.listen(3000, () => {
    console.log("Server running on port 5000");
});