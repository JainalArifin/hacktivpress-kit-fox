const Users = require('../models/users')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userRegiter = (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(`${req.body.password}`, salt);
  Users.create({
    username: req.body.username,
    password: hash
  })
  .then((dataUser) => {
    res.send({
      message: 'anda sudah membuat akun register silahkan selanjutnya anda login',
      dataUser: dataUser
    })
  })
  .catch((err) => {
    res.send(err)
  })
}

const userLogin = (req, res) => {
  Users.findOne({
    username: req.body.username
  })
  .then((dataUser) => {

    if (dataUser == null) {
      res.send({
        msg: 'username not Found ya kang mas'
      })
    }
    else {
      if(bcrypt.compareSync(req.body.password, dataUser.password)){
        var token = jwt.sign({
          id: dataUser.id,
          username: dataUser.username
        }, process.env.SECRET)
        res.send({
          msg: 'login succes',
          data: token
        })
      }else {
        res.send({
          msg: 'password tidak di kenali'
        })
      }
    }
  })
  .catch((err) => {
      console.log('masuk sini');
    res.send(err)
  })
}

const findAllUser = (req, res) => {
  Users.find({})
  .populate('todo')
  .then((dataUser) => {
    res.send(dataUser)
  })
  .catch((err) => {
    res.send(err)
  })
}

module.exports = {
  userRegiter,
  userLogin,
  findAllUser
}
