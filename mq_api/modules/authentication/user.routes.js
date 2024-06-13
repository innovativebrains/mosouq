const express = require('express')

const AuthCtrl = require('./user.controller')

const router = express.Router()

router.post('/add-user', AuthCtrl.signupUser)

router.post('/login-user', AuthCtrl.loginAuth)

router.get('/get-users', AuthCtrl.getUsers);

router.get('/uuser/:id', AuthCtrl.getUserById);

router.get('/delete-user/:id', AuthCtrl.deleteUserById);

router.get("/verify-token", (err, res) => { res.json('1') })

module.exports = router