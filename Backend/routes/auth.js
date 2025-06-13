const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register new user
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Get user profile (protected)
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
