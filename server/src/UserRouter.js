const express = require('express')
const UserRouter = express.Router()

const User = require('./models/user.js')

UserRouter.route('/create').post((req, res) => {
  const user = new User(req.body)
  user.save()
    .then(user => {
      res.json('User registered successfully')
    })
    .catch(err => {
      res.status(400).send("Unable to registered new user")
    })
})

module.exports = UserRouter;
