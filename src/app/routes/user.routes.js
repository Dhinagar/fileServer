const express = require('express');
const USER_CONTROLLER = require('../controllers/user.controllers');
const router = express.Router();
const authenticate  = require('../middleware/middleware')

router.post('/register', USER_CONTROLLER['registerUser']);

router.get('/login/:userId',authenticate, USER_CONTROLLER['loginUser']);


module.exports = router;