const jwt = require("jsonwebtoken");
const USER_SERVICE = require('../services/user.services');


// Authenticate user
const authenticate = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const USER = await USER_SERVICE.loginUser(req.params.userId)
    if (!USER) return res.status(401).send("un Authorized");
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = authenticate;