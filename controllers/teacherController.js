const Teacher = require("../models/teacherModel");

const bcrypt = require("bcryptjs");



exports.createTeacher = async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await Teacher.createTeacher(name, email, hashedPassword);

  res.status(201).json({ message: "Teacher created successfully" });

};



exports.getTeachers = async (req, res) => {

  const teachers = await Teacher.getTeachers();

  res.status(200).json(teachers);

};

