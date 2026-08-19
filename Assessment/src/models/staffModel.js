const bcrypt=require("bcrypt");
const mongoose=require("mongoose");
const staffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        
    },
    department:{
        type:string,
        enum:["sales","support"],
    }
},{timestamps:true})
staffSchema.pre("save",async function(){
    if(!this.isModified("password"))return ;
    this.password=await bcrypt.hash(this.password,10);
});
module.exports= mongoose.model("staff",staffSchema);