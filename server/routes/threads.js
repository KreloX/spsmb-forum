var express = require('express')
var router = express.Router()

const threadsController = require('../controllers/threads')

router.get('/', threadsController.getAll)
router.get('/count', threadsController.count)
router.get('/:start/:amount', threadsController.getSome)

//localhost:3000/threads/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get('/:id', threadsController.getById)

router.post('/', threadsController.create)

router.delete('/:id', threadsController.delete)

router.put('/:id', threadsController.update)

module.exports = router
