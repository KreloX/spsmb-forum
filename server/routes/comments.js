const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

router.get('/', commentsController.getAll)
router.get('/id/:id', commentsController.getById)
router.get('/thread/:threadId', commentsController.getByThreadId)

router.delete('/:id', commentsController.delete)

router.post('/', commentsController.create)

router.put('/:id', commentsController.update)

module.exports = router
