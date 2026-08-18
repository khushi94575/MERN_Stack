const Review=require("../models/reviewModel");
const createReview=async(req,res,next)=>{
    try{
        const reviews=await Review.create(req.body);
        res.status(201).json({message:"review craeted",data:reviews})
    }catch(error){
        next(error);
    }
}
const getReview=async(req,res,next)=>{
    try{
        const data =await reviewService.getReview(req.query);
        res.status(200).jaon({success:true,
            message:"successfully",data});
    }catch(error){
        next(error);
    }
}
module.exports={getReview,createReview};