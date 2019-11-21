var express = require('express');
var router = express.Router();


module.exports = router;

//router address localhost:3000/questions/test
//descriptions: Register User Page
//comments: Render Register Form
router.get('/test', (req, res, next)=> {
    res.render('questions/test');
  });