const express = require('express');
const FILE_CONTROLLER = require('../controllers/file.controllers');
const router = express.Router();
const authenticate  = require('../middleware/middleware')

router.post('/addFile', authenticate,FILE_CONTROLLER['addFile']);

router.get('/fileId/:fileId', authenticate, FILE_CONTROLLER['getFileId']);


module.exports = router;