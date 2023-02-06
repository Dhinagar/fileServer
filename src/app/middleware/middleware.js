const jwt = require("jsonwebtoken");
const USER_SERVICE = require('../services/user.services');


// Authenticate user
const authenticate = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const userId = req.header('userId');
  if (!authHeader || !userId) {
    return res.status(401).send("Access denied. No token provided.");
  }
  const token = authHeader.split(' ')[1];
  if (!token||token!==' ') return res.status(401).send("Access denied. No token provided.");

  try {
    const USER = await USER_SERVICE.loginUser(userId)
    if (!USER) return res.status(401).send("un Authorized");
    const decoded = jwt.verify(token, "jwtPrivateKey"); // this peivate key should be come from config file.
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = authenticate;