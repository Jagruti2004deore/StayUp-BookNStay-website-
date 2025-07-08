const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviews = require("../models/reviews.js");
const reviewController = require("../controllers/reviews.js")


// Create Review
router.post("/", 
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

// Delete Review
router.delete(
    "/:reviewId", 
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports = router;