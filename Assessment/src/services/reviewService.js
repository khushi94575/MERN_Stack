const ReviewModel = require("../models/reviewModel");
const createReview = async (data) => {
  const { title, reviewerName } = data;

  const alreadyReviewed = await ReviewModel.findOne({
    reviewerName,
    title,
  });

  if (alreadyReviewed) {
    throw new Error("Aap ye review pehle de chuke ho");
  }

  return await ReviewModel.create(data);
};

const getReviews = async (queryParams) => {
  const { status, page = 1, limit = 10 } = queryParams;

  const filter = {};

  if (status) {
    filter.status = status;
  }

  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    ReviewModel.find(filter).skip(skip).limit(limit),

    ReviewModel.countDocuments(filter),
  ]);

  return {
    reviews,
    total,
    page: Number(page),
    totalPages: Math.ceil(total / limit),
  };
};
const getSingleReviews=async(id)=>{
  return await ReviewModel.findById(id);
}
const updateReview=async(id,data)=>{
  return await ReviewModel.findByIdAndUpdate(id,data,{new:true});
}
const deleteReview=async(id,data)=>{
  return await ReviewModel.findByIdAndDelete(id);
}
module.exports = {
  createReview,
  getReviews,
  getSingleReviews,
  updateReview,
  deleteReview
};
