const express = require('express')
const router = express.Router()
const articleController = require('../controller/articleController')
const auth = require('../helper/jwt')

// router.get('/', auth.isLogin, articleController.findAllArticle)
// router.post('/', auth.isLogin, articleController.createArticle)
// router.get('/:id', auth.isLogin, articleController.findByIdArticle)
// router.put('/:id', auth.isLogin, auth.authById, articleController.updateArticle)
// router.delete('/:id', auth.isLogin, auth.authById, articleController.removeArticle)

router.get('/',  articleController.findAllArticle)
router.post('/',  articleController.createArticle)
router.get('/:id',  articleController.findByIdArticle)
router.put('/:id',   articleController.updateArticle)
router.delete('/:id',   articleController.removeArticle)

module.exports = router
