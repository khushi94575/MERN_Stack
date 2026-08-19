const express = require("express");
const connectDB = require("./src/config/db");
const reviewRoute=require("../Assessment/src/Route/reviewRoute")
const { notFound, errorHandler } = require("./src/middlewares/errorHandler");
const app = express();

app.use(express.json());

connectDB();

app.use("/reviews", reviewRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 5000");
});