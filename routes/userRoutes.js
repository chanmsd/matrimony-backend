const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Add a new user
router.post('/', async (req, res) => {
  const { name, email, age, gender, location } = req.body;

  try {
    const newUser = new User({ name, email, age, gender, location });
    await newUser.save();
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
