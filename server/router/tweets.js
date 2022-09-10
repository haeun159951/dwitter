import express from "express";
import "express-async-errors";

const router = express.Router();

let tweets = [
  {
    id: "1",
    text: "dream coding",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "",
  },

  {
    id: "2",
    text: "dream coding 2",
    createdAt: Date.now().toString(),
    name: "H",
    username: "H",
    url: "",
  },
];

// get /tweets
// get /tweets?uesrname=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// get tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: "tweet id not found" });
  }
});

// post /tweets
router.post("/", (req, res, next) => {
  const tweet = {
    id: Date.now(),
    name: req.body.name,
    text: req.body.text,
    username: req.body.username,
    createdAt: new Date(),
  };

  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// put /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: "tweet id not found" });
  }
});

// delete /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
