  const express = require("express");
  const router = express.Router();
  const reviewController = require("../controller/reviewController");

  const {
    createReviewSchema,
    getReviewSchema,
    getSingleReview,
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
  router.get("/getSingleReview/:id", reviewController.getSingleReview);
  router.patch(
      "/updateReview/:id",
      validateProduct(createReviewSchema),
      reviewController.updateReview
  );
  router.delete(
    "/deleteReview/:id",
    reviewController.deleteReview
);
  module.exports = router;