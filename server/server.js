const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const logger = require('morgan');
const connectDB = require('./config/database');
const cors = require('cors');

const oneDay = 1000 * 60 * 60 * 24;

require('dotenv').config({path: './config/.env'});

const userRoutes = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');

//Connect to DB
connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) =>  {
  console.log(req.path, req.method);
  next();
});
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
  })
);

//Routes
app.use('/', userRoutes);
app.use('/:id/transactions', transactionRoutes)


// Listen for requests
app.listen(process.env.PORT || 8000, ()=>{
  console.log(`Server is running`);
});  