const express = require('express');

const router = express.Router();

// @ route   GET api/users
// @ desc    Test Route
// @ access  Public
router.get('/', (req,response) => response.send('User route'));

module.exports = router;
