const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({path: './config/.env'});

const userRoutes = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');
const { json } = require('body-parser');

// // Passport config
// require('./config/passport')(passport)

app.use(express.static("public"));
// app.use(express.json())
// app.use(cors());
  
// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(flash());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) =>  {
  console.log(req.path, req.method);
  next();
});
app.use(logger('dev'));

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
  })
);

//Routes
app.use('/', userRoutes);
app.use('/:id/transactions', transactionRoutes)

//Connect to DB
connectDB();

// Listen for requests
app.listen(process.env.PORT || 8000, ()=>{
  console.log(`Server is running`);
});  