var express = require('express')
var router = express.Router()

const commentsController = require('../controllers/comments')

router.get('/', commentsController.getAll)

//localhost:3000/comments/5sa4d949qw86d5sa4d6sa
//req.params.id

//router.get('/:id', commentsController.getById)

router.get('/:threadId', commentsController.getByThreadId)

router.delete('/:id', commentsController.delete)

router.post('/', commentsController.create)

router.put('/:id', commentsController.update)

module.exports = router
