const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");



const teacherRoutes = require("./routes/teacherRoutes");

const studentRoutes = require("./routes/studentRoutes");



dotenv.config();

const app = express();



app.use(cors());

app.use(express.json());



// Routes

app.use("/api/teachers", teacherRoutes);

app.use("/api/students", studentRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

