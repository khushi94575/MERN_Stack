const joi=require("joi");
const createReviewSchema=joi.object({
title:joi.string().required().min(3).max(80).trim(),
comment:joi.string().required().min(10).max(500).trim(),
rating:joi.number().required().min(1).max(5).valid(1,2,3,4,5),
reviewerName:joi.string().required().min(2).max(50).trim()
});
const getReviewSchema=joi.object({
    status: joi.string().optional().valid("rejected", "approved", "pending"),
  minRating: joi.number().optional().min(1).max(5),
  page: joi.number().integer().optional().min(1).default(1),
  limit: joi.number().integer().optional().min(1).max(20).default(10),
});


const reviewIDSchema=joi.object({
    id:joi.string().required().length(24).hex()
});
const updateReviewSchema = joi.object({
  title: joi.string().min(3).max(80).trim(),
    comment: joi.string().min(10).max(500).trim(),
    rating: joi.number().integer().min(1).max(5),
    reviewerName: joi.string().min(2).max(50).trim(),
}).min(1);
module.exports={createReviewSchema,getReviewSchema,reviewIDSchema,updateReviewSchema}