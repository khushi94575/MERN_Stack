const Review=require("../models/reviewModel");
const reviewService = require("../services/reviewService");
const createReview=async(req,res,next)=>{
    try{
        const reviews=await reviewService.create(req.body);
        res.status(201).json({message:"review craeted",data:reviews})
    }catch(error){
        next(error);
    }
}
const getReview=async(req,res,next)=>{
    try{
        const data =await reviewService.getReview(req.query);
        res.status(200).json({success:true,
            message:"successfully",data});
    }catch(error){
        next(error);
    }
}
const getSingleReview=async(req,res,next)=>{
try{
    const {id}=req.params;
    const reviews= await reviewService.getSingleReviews(id);
    res.status(200).json({ success:true,message:"review fetched successfully",data:reviews})
}catch(error){
    next(error);
}
}
const updateReview=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const reviews=await reviewService.updateReview(id,req.body);
        res.status(200).json({message:"update successfully",data:reviews})
    }
    catch(error){
        next(error);
    }
}
const deleteReview=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const reviews=await reviewService.deleteReview(id);
        res.status(200).json({message:"delete successfully",data:reviews})
    }
    catch(error){
        next(error);
    }
}
module.exports={getReview,createReview,getSingleReview,updateReview,deleteReview};