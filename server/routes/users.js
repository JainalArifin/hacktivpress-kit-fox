var express = require('express');
var router = express.Router();
var controllerUser = require('../controller/users')
const login = require('../helper/jwt')

/* GET users listing. */
router.post('/register', controllerUser.userRegiter)
router.post('/login', controllerUser.userLogin)
router.get('/', login.isLogin, controllerUser.findAllUser)

module.exports = router;
