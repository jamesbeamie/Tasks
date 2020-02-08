const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Many Tasks to do today"
  });
});

router.post("/", (req, res, next) => {
  const task = {
    item: req.body.item
  };
  res.status(201).json({
    message: "Create a Task to do today",
    TodoItems: task
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Delete"
  });
});

module.exports = router;
