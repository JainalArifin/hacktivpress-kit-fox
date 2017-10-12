const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new mongoose.Shcema({
  title: String,
  content: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

const articles = mongoose.model('articles', articleSchema)

module.exports = articles
