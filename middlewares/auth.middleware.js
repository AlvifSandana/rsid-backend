const { decodeAccessToken } = require('../helpers/jwt.helper')
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (!token) return res.status(403).json({message: 'Please provide a valid token.'});
  try {
    const decoded = decodeAccessToken(token);
    req.user = decoded.username;
  } catch (error) {
    return res.status(401).json({message: 'Invalid token.'})
  }
  return next();
}

module.exports = verifyToken;