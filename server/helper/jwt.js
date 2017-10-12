var jwt = require('jsonwebtoken')
require('dotenv').config()

const Article = require('../models/articles')
const ObjectId = require('mongodb').ObjectId

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

const authById = (req, res, next) => {
  Article.findById({
    _id: req.params.id
  })
  .then((dataArticle) => {
    if(dataArticle.author == req.id){
      console.log(dataArticle, '<----- data Article ----');
      next()
    }
    else {
      res.send('anda tidak boleh meng akses yang ini')
    }
  })
}

module.exports = {
  isLogin,
  authById
}
