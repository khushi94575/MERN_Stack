const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController");

const {
  createReviewSchema,
  getReviewSchema,
} = require("../validationSchema/reviewValidationSchema");

const { validateProduct } = require("../middlewares/ValidationmiddleWare");

router.post(
  "/createReview",
  validateProduct(createReviewSchema),
  reviewController.createReview,
);

router.get(
  "/getReviews",
  validateProduct(getReviewSchema),
  reviewController.getReview,
);

module.exports = router;
