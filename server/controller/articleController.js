const Article = require('../models/articles')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const findAllArticle = (req, res) => {
  let user = jwt.verify(req.headers.token, process.env.SECRET, (err, user)=>{
    Article.find((err, dataArticle) => {
      if(err){
        res.send(err)
      }else {
        res.send(dataArticle)
      }
    })
  })
}

const createArticle = (req, res) => {
  let user = jwt.verify(req.headers.token, process.env.SECRET, (err, user) =>{
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: user.id
    })
    .then((dataArticle) => {
      res.send({
        message: 'data berhasil di tambah',
        dataArticle: dataArticle
      })
    })
    .catch((err) => {
      res.send(err)
    })
  })
}

const findByIdArticle = (req, res) => {
  Article.findById(req.params.id)
  .then((dataArticle) => {
    res.send(dataArticle)
  })
  .catch((err) => {
    res.send(err)
  })
}

const updateArticle = (req, res) => {
  Article.findOneAndUpdate({
    _id: ObjectId(req.params.id)
  },{
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  })
  .then((dataArticle) => {
    res.send({
      msg: 'data Article berhasil di update',
      dataArticle: dataArticle
    })
  })
  .catch((err) => {
    res.send(err)
  })
}

const removeArticle = (req, res) => {
  Article.remove({
    _id: req.params.id
  })
  .then((dataArticle) => {
    res.send({
      msg: 'user berhasul di hapus',
      dataArticle: dataArticle
    })
  })
  .catch((err) => {
    res.send(err)
  })
}

module.exports = {
  findAllArticle,
  createArticle,
  findByIdArticle,
  updateArticle,
  removeArticle
}
