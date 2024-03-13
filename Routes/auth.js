const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');


router.post('/sendTweet', authController.register);


 
module.exports = router;