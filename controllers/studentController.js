const Student = require("../models/studentModel");

exports.createStudent = async (req, res) => {
  const { name, email } = req.body;
  await Student.createStudent(name, email);
  res.status(201).json({ message: "Student created successfully" });
};

exports.getStudents = async (req, res) => {
  const students = await Student.getStudents();
  res.status(200).json(students);
};

