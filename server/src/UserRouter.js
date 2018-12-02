const express = require('express')
const bcrypt = require('bcrypt-nodejs')

const UserRouter = express.Router()

const User = require('./models/user.js')

UserRouter.route('/create').post((req, res) => {
  let hash = bcrypt.hashSync(req.body.password) // default salt = 10
  const user = new User(req.body)

  user.password = hash

  user.save()
    .then(user => {
      res.json('User registered successfully')
    })
    .catch(err => {
      res.status(400).send('Unable to registered new user' + err)
    })
})

module.exports = UserRouter
