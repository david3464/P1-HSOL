var express = require('express');
var router = express.Router();
// app.use('/', indexRouter);

//router address localhost:3000/
//descriptions: Initial Index Page
//comments: Enterance Page
router.get('/', async (req, res, next)=> {
  res.render('index',{ layout: 'layouts/hero_layout'});
});

//router address localhost:3000/about
//descriptions: Hidden Page, cant be direct into this page only type address
//comments: Test Page for layout Setting
//status: not online need direct route
router.get('/about', async (req, res, next)=> {
  res.render('about');
});

//router address localhost:3000/home
//descriptions: Initial Home Page
//comments: Enterance Page
router.get('/home', (req, res, next)=> {
  res.render('users/home_index',{ layout: 'layouts/login_layout'});

});

module.exports = router;
