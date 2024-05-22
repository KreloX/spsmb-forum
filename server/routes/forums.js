var express = require('express')
var router = express.Router()

const forumsController = require('../controllers/forums')

router.get('/', forumsController.getAll)

//localhost:3000/forums/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get('/:id', forumsController.getById)

router.get('/', forumsController.create)

router.delete('/:id', forumsController.delete)

router.put('/:id', forumsController.update)

module.exports = router
