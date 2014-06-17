var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


/* GET home page. */
router.get('/digskills-603/rwd-01/', function(req, res) {
  res.render('index', { title: 'Home | Ariel Borochov' });
});
router.get('/digskills-603/rwd-01/about', function(req, res) {
  res.render('about', { title: 'about | Ariel Borochov' });
});
router.get('/digskills-603/rwd-01/contact', function(req, res) {
  res.render('contact', { title: 'contact | Ariel Borochov', myEmail: 'ariel.borochov@gmail.com' });

});
router.get('/digskills-603/rwd-01/portfolio', function(req, res) {
  res.render('portfolio', { title: 'portfolio | Ariel Borochov' });
});
router.post('/contactsubmit', function(req, res) {
			
});


module.exports = router;
