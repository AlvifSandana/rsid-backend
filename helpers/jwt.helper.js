const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateAccessToken = (username) => {
  return jwt.sign({username: username}, process.env.TOKEN_SECRET, { expiresIn: 1800 });
}

const decodeAccessToken = (token) => {
  return jwt.decode(token, process.env.TOKEN_SECRET);
}

module.exports = {generateAccessToken, decodeAccessToken};