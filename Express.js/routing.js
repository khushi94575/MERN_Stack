const express = require("express");
const app = express();
const port = 3000;

const authorization = require("./middleware");

app.use("/users", authorization);

app.get("/users", (req,res) => {
    res.send("User details");
})


app.use("/admin", authorization);

app.get("/admin", (req, res) => {
    res.send("Admin Details");
});

app.get("/admin/create", (req, res) => {
    res.send("Admin Created!!!");
});

app.listen(port, () => {
    console.log("Server is listening!");
});