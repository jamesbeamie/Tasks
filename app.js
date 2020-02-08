const express = require("express");

const app = express();
const morgan = require("morgan");

const tasksTodo = require("./api/routes/Tasks");

app.use(morgan("dev"));

app.use("/tasks", tasksTodo);

// Handling errors within the application
app.use((req, res, next) => {
  const error = new Error("Invalid request");
  error.status = 404;
  next(error);
});

// Handling any error in the application from outside, i.e from db
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
