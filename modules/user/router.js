var express = require('express')
var router = express.Router()
var user = require('./controller.js');
var checker = require('../../config/auth_token.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//=============================== User Routes ===============================//
// Get Users
router.get('/', user.index);
// User Login
router.post('/login', user.login);
// User Register
router.post('/register', user.register);
// User Edit
router.put('/edit', user.edit);
// User Delete
router.post('/delete', checker.tokenChecker, user.delete);



module.exports = router
