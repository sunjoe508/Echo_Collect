const express = require('express');
const router = express.Router();

// Dummy route for user management
router.get('/', (req, res) => {
  res.json({ message: 'User routes working!' });
});

module.exports = router;
