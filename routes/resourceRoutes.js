const express = require("express");

const router = express.Router();

const { uploadResource } = require("../controllers/resourceController");

const { authMiddleware } = require("../middleware/authMiddleware");

const multer = require("multer");



const upload = multer({ dest: "uploads/" });



router.post("/upload", authMiddleware, upload.single("file"), uploadResource);



module.exports = router;

