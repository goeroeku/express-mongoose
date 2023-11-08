const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectMongoDB = require("./config/connection");
const AttendanceModel = require("./models/attendance");

const attendanceRoute = require("./routes/attendance");

const port = 3000;

app.use(attendanceRoute);
connectMongoDB();

const table = new AttendanceModel({});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
