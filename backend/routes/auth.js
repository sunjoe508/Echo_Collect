const express = require('express');
const router = express.Router();

// Dummy route for authentication
router.post('/login', (req, res) => {
  res.json({ message: 'Login successful!' });
});

module.exports = router;
