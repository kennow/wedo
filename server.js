const pkg = require('./package')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const index = require('./router/index')
const list = require('./router/list')

mongoose.connect('mongodb://localhost:27017/wedolist')
mongoose.Promise = global.Promise


const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: 'lists',
  resave: true,
  saveUninitialized: true,
  cookie: {
    user: "default",
    maxAge: 1000 * 60 * 60 * 2
  }, //2小时
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.use(express.static('dist'))
app.use('/', index)
app.use('/api', list)


app.listen(port, () => {
  console.log(`${pkg.name} listen on port ${port}`)
})

module.exports = app