const express = require('express');
const router = express.Router();

// Dummy route for waste management
router.get('/', (req, res) => {
  res.json({ message: 'Waste management routes working!' });
});

module.exports = router;
