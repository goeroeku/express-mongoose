const express = require("express");
const mongoose = require("mongoose");

const connectMongoDB = require("./config/connection");
const AttendanceModel = require("./models/attendance");

const attendanceRoute = require("./routes/attendance");
const authRoute = require("./routes/auth");

const app = express();
const port = 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

connectMongoDB();
app.use(attendanceRoute);
app.use(authRoute);

const table = new AttendanceModel({});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
