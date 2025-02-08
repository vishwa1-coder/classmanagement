// controllers/authController.js

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/User');



exports.login = async (req, res) => {

  const { email, password } = req.body;



  try {

    const user = await User.findUserByEmail(email);

    if (!user) {

      return res.status(401).json({ message: 'Invalid email or password' });

    }



    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(401).json({ message: 'Invalid email or password' });

    }



    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Server error' });

  }

};
