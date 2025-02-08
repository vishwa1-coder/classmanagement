const multer = require("multer");

const path = require("path");



// Configure multer for file uploads

const storage = multer.diskStorage({

    destination: "./uploads",

    filename: (req, file, cb) => {

        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));

    }

});

const upload = multer({ storage });



exports.uploadResource = (req, res) => {

    if (!req.file) {

        return res.status(400).json({ message: "No file uploaded" });

    }

    res.json({ message: "File uploaded successfully", file: req.file.filename });

};

