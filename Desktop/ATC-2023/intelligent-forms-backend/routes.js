const  Router  = require('express').Router
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require('./controllers')
const {
  validationMiddleware,
} = require('./validations-middleware')
const { registerValidation, loginValidation } = require('./validators')
const { userAuth } = require('./auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
router.get('/test',function(req,res) {
    res.send('test')

})

module.exports = router