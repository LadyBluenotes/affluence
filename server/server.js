const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const cors = require('cors')

const landingRoutes = require('./routes/landingRoutes')
const testAPIRouter = require('./routes/testAPI')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
    })
  )
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//Routes

app.listen(process.env.PORT || 3000, ()=>{
  console.log(`Server is running`)
})    