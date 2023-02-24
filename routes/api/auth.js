const express = require('express');

const router = express.Router();

// @ route   GET api/auth
// @ desc    Test Route
// @ access  Public
router.get('/', (req,response) => response.send('Auth route'));

module.exports = router;
