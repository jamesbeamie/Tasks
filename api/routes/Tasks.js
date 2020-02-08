const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Many Tasks to do today"
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Create a Task to do today"
  });
});

module.exports = router;
