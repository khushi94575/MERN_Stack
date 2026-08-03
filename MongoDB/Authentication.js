const express=require("express");
const app=express();

app.use(express.json());
app.post("/signup", (req, res) => {

    const { name, email, password } = req.body;

    res.json({
        message: "Signup Successful",
        user: {
            name,
            email,
            password
        }
    });

});
app.listen(2222,()=>{
    console.log("server is working ");
})