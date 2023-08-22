const Router = require('express')
const usersController = require('../controllers/userController')
const router = new Router()


router.get('/', usersController.getAll)

router.post('/', usersController.createUser)

module.exports = router