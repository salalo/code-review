const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
  if (!err) {
    console.log('\nConnected successfully!')
  }
})

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())

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
    }
  )
})

app.listen(process.env.PORT || 8081)
