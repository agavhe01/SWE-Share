const jwt = require('jsonwebtoken');

const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Chech if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // assign decoded value to user
    req.user = decoded.user;
    next();
  } catch (err) {
    // invalid token
    res.status(401).json({ msg: 'Token is not valid' });
  }
  //
};
