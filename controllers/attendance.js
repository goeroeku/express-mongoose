const Attendance = require("../models/attendance");

// Show All data
const list = async (req, res) => {
  tables = await Attendance.find();

  return res.status(200).json({ message: "success", data: tables });
};

// Show Detail Data
const show = async (req, res) => {
  const id = req.params.id;
  const { body } = req;
  table = await Attendance.find({
    _id: id,
  });

  if (table) {
    table.date = body.date;
  }
};

const create = async (req, res) => {
  const { body } = req;
  table = await Attendance.create(body);

  return res.status(201).json({ data: table, message: "success" });
};

const update = () => {};
const remove = () => {};

module.exports = { list, show, create, update, remove };
