var jwt = require('jsonwebtoken')
require('dotenv').config()

const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, decoded) => {
    if(err){
      res.send("anda belum login ")
    }else {
      req.id = decoded.id
      next()
    }
  })
}

module.exports = {
  isLogin
}
