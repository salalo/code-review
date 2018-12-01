const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const UserRouter = require('./UserRouter.js')
const mongodb = require('./config/database.js')

// connect to database
mongoose.connect(mongodb.DB, { useNewUrlParser: true }).then(
  () => { console.log('\nConnected successfully!') },
  err => console.log('\nCan not connect to the database' + err)
)

// require('./config/passport')(passport);

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(UserRouter);

app.set('view engine', 'ejs')

// required for passport
app.use(session({ secret: 'sessionsecret' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.get('/posts', (req, res) => {
  res.send(
    {
      title: 'Title of a new thread',
      tags: 'android'
    })
})

app.listen(process.env.PORT || 8081)
