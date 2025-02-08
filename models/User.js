// models/User.js

const db = require('../config/db');



class User {

  static async createUser(email, password) {

    const [result] = await db.execute(

      'INSERT INTO users (email, password) VALUES (?, ?)',

      [email, password]

    );

    return result;

  }



  static async findUserByEmail(email) {

    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    return rows[0];

  }

}



module.exports = User;
