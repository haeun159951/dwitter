import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
const router = express.Router();

// get /tweets
// get /tweets?username=:username
router.get("/", tweetController.getTweets);

// get tweets/:id
router.get("/:id", tweetController.getTweet);

// post /tweets
router.post("/", tweetController.createTweet);

// put /tweets/:id
router.put("/:id", tweetController.updateTweet);

// delete /tweets/:id
router.delete("/:id", tweetController.deleteTweet);

export default router;
