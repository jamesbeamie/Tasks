const express = require("express");

const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const tasksTodo = require("./api/routes/Tasks");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// headers to prevent CORS

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if ((req, method === "OPTIONS")) {
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

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
