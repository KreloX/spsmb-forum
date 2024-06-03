const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

router.get('/', usersController.getAll)
router.get('/username/:username', usersController.getByUsername)

router.delete('/:id', usersController.delete)

//router.put('/:id', usersController.update)
router.put('/request-reset', usersController.requestReset)
router.put('/reset-password', usersController.updatePassword)

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.post('/validate-token', usersController.validateToken)

module.exports = router
