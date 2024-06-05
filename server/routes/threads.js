const express = require('express')
const router = express.Router()

const threadsController = require('../controllers/threads')

router.get('/', threadsController.getAll)
router.get('/count', threadsController.count)
router.get('/range/:start/:amount', threadsController.getInRange)
router.get('/author/:author', threadsController.getByAuthor)
router.get('/id/:id', threadsController.getById)

router.post('/', threadsController.create)

router.delete('/:id', threadsController.delete)

router.put('/:id', threadsController.update)

module.exports = router
