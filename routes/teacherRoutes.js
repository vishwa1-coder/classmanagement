const express = require("express");

const router = express.Router();

const { createTeacher, getTeachers } = require("../controllers/teacherController");

const { authMiddleware } = require("../middleware/authMiddleware");



router.post("/", authMiddleware, createTeacher); // Only authenticated users can add teachers

router.get("/", authMiddleware, getTeachers); // Only authenticated users can view teachers



module.exports = router;

