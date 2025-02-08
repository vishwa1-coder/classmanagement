const db = require("../config/db");

class Student {
  static async createStudent(name, email) {
    const [result] = await db.execute(
      "INSERT INTO students (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result;
  }

  static async getStudents() {
    const [rows] = await db.execute("SELECT * FROM students");
    return rows;
  }
}

module.exports = Student;

