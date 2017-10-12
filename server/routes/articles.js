// findAllArticle,
// createArticle,
// findByIdArticle,
// updateArticle,
// removeArticle

const express = require('express')
const router = express.Router()
const articleController = require('../controller/articleController')
const auth = require('../helper/jwt')

router.get('/', auth.isLogin, articleController.findAllArticle)
router.post('/', auth.isLogin, articleController.createArticle)
router.get('/:id', auth.isLogin, articleController.findByIdArticle)
router.put('/:id', auth.isLogin, articleController.updateArticle)
router.delete('/:id', auth.isLogin, articleController.removeArticle)

module.exports = router
