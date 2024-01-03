const express = require("express");
const router = express.Router();

const attendanceController = require("../controllers/attendance");
const { verifyToken } = require("../middlewares/authJwt");

router.get("/attendances", [verifyToken], attendanceController.list);
router.get("/attendances/:id", attendanceController.show);
router.post("/attendances", attendanceController.create);
router.put("/attendances/:id", attendanceController.update);
router.delete("/attendances/:id", attendanceController.remove);

module.exports = router;
