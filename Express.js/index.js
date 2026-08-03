const express = require("express");
const app = express();


app.get("/Home",(req,res)=>{
    res.send({name:"khushi",age:21})
})

// app.use("/Tshirt",(req,res)=>{
//     res.send("this is my Fav Tshirt")
// })
app.use("/studentu",(req,res,next)=>{
    console.log("handler 1")
    // res.send("this is my express api")
    next()
},(req,res)=>{
    console.log("handler 2")
    res.send("this is my Fav Tshirt")
}
)
app.listen(3000,()=>{
console.log("chal gya oye!!");
})