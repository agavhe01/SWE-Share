const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth');

const User = require('../..//models/User');

// @ route   GET api/auth
// @ desc    Test Route
// @ access  Public
router.get('/', auth, async (req, response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    response.json(user);
  } catch (err) {
    console.error(err.message);
    response.status(500).send('Server Error');
  }
});

module.exports = router;
