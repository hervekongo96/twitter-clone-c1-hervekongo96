const express = require('express');
const router = express.Router();

const data = require("../assets/initial-data.json")



router.get('/tweets', (req, res)=>{
    res.send(data);
}); 


module.exports = router;