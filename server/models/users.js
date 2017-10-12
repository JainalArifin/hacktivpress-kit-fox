const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  articleId: [{
    type: Schema.Types.ObjectId,
    ref: 'article'
  }]
})

const users = mongoose.model('users', userSchema)

module.exports = users
