const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    {
      title: 'Title of a new thread',
      tags: 'android'
    }
  )
})

app.listen(process.env.PORT || 8081)
