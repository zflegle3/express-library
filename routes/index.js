var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//replaced with below code per tutorial pt 4

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
})

module.exports = router;
