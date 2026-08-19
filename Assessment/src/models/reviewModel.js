const joi = require("joi");
const mongoose=require("mongoose");
const reviewSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        minLength:3,
        maxLength:80,
        trim:true
    },
    comment:{
        type:String,
        required:[true,"comment is required"],
        minLength:10,
        maxLength:500,
        trim:true
    },
    rating:{
        type:Number,
        required:[true, "Rating is required"],
       min:1,
       max:5,
       validate:{
        validator:Number.isInteger,
        message:"Rating must be a WholeNumber"
       }
    },
    reviewerName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:50,
        trim:true
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
    isVerifiedPurchase:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model("review",reviewSchema)